import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";
const CONTENT_FILE = "content/posts.json";

type GitHubFailure = { ok: false; status: number; message: string };
type GitHubFile = { ok: true; sha: string; content: string };
type PostsFile = { ok: true; posts: Record<string, unknown>[]; sha: string };
type GitHubWrite = { ok: true } | GitHubFailure;

/* ── Shared helpers ─────────────────────────────────────────────── */

function authCheck(req: NextRequest): boolean {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || process.env.ADMIN_PASSWORD;
  if (!expectedToken) return false;
  const authHeader = req.headers.get("Authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    if (token === expectedToken) return true;
  }
  const sessionCookie = req.cookies.get("bso_session")?.value;
  return !!(sessionCookie && sessionCookie === expectedToken);
}

function githubHeaders(token: string, accept: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function githubFailure(res: Response): Promise<GitHubFailure> {
  const body = await res.json().catch(() => ({})) as { message?: string };
  return {
    ok: false,
    status: res.status,
    message: body.message || `GitHub returned HTTP ${res.status}`,
  };
}

/**
 * Read a repository file without assuming GitHub will inline Base64 content.
 *
 * The Contents API stops returning inline content once a file exceeds 1 MiB.
 * posts.json crossed that boundary in October 2026, so the old reader decoded
 * an empty string and the admin panel failed even though the token was valid.
 * Metadata supplies the SHA needed for updates; the raw media type supplies the
 * complete file at any supported size.
 */
async function ghGet(token: string, path: string): Promise<GitHubFile | GitHubFailure> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=main`;
  const metadataRes = await fetch(url, {
    headers: githubHeaders(token, "application/vnd.github.object+json"),
    cache: "no-store",
  });
  if (!metadataRes.ok) return githubFailure(metadataRes);

  const metadata = await metadataRes.json() as {
    sha?: string;
    content?: string;
    encoding?: string;
  };
  if (!metadata.sha) {
    return { ok: false, status: 502, message: "GitHub did not return the file SHA." };
  }

  if (metadata.encoding === "base64" && metadata.content) {
    return {
      ok: true,
      sha: metadata.sha,
      content: Buffer.from(metadata.content, "base64").toString("utf-8"),
    };
  }

  const rawRes = await fetch(url, {
    headers: githubHeaders(token, "application/vnd.github.raw+json"),
    cache: "no-store",
  });
  if (!rawRes.ok) return githubFailure(rawRes);

  return { ok: true, sha: metadata.sha, content: await rawRes.text() };
}

async function ghPut(
  token: string,
  path: string,
  content: string,
  sha: string,
  message: string
): Promise<GitHubWrite> {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        ...githubHeaders(token, "application/vnd.github+json"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString("base64"),
        branch: "main",
        sha,
      }),
    }
  );
  if (!res.ok) return githubFailure(res);
  return { ok: true };
}

async function readPostsFromGitHub(token: string): Promise<PostsFile | GitHubFailure> {
  const result = await ghGet(token, CONTENT_FILE);
  if (!result.ok) return result;

  try {
    const posts = JSON.parse(result.content) as unknown;
    if (!Array.isArray(posts)) {
      return { ok: false, status: 502, message: "content/posts.json is not a JSON array." };
    }
    return { ok: true, sha: result.sha, posts: posts as Record<string, unknown>[] };
  } catch {
    return { ok: false, status: 502, message: "content/posts.json contains invalid JSON." };
  }
}

async function writePosts(
  token: string,
  posts: Record<string, unknown>[],
  jsonSha: string,
  message: string
): Promise<GitHubWrite> {
  return ghPut(token, CONTENT_FILE, JSON.stringify(posts, null, 2), jsonSha, message);
}

function githubErrorResponse(action: string, failure: GitHubFailure) {
  const retryable = failure.status === 409 || failure.status === 429 || failure.status >= 500;
  return NextResponse.json(
    {
      error: `${action}: ${failure.message}`,
      githubStatus: failure.status,
      retryable,
    },
    { status: failure.status === 429 || failure.status >= 500 ? 503 : 502 }
  );
}

/* ── GET — list all posts (for admin panel) ─────────────────────── */
export async function GET(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Admin session expired. Please log in again." }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN is not configured on the server." }, { status: 500 });

  const result = await readPostsFromGitHub(GITHUB_TOKEN);
  if (!result.ok) return githubErrorResponse("Could not load posts", result);

  return NextResponse.json({ posts: result.posts });
}

/* ── POST — publish or update a post ───────────────────────────── */
export async function POST(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Admin session expired. Please log in again." }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN is not configured on the server." }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.slug) return NextResponse.json({ error: "Invalid post data" }, { status: 400 });

  const overwrite: boolean = body.overwrite === true;
  const newPost = { ...body } as Record<string, unknown>;
  delete newPost.overwrite;

  const message = overwrite
    ? `blog: update "${newPost.title}" [${newPost.slug}]`
    : newPost.status === "draft"
      ? `blog: save draft "${newPost.title}" [${newPost.slug}]`
      : `blog: add "${newPost.title}" [${newPost.slug}]`;

  // Retry once if another admin action updates posts.json between our read and
  // write. The second read merges the post into the newest version of the file.
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const result = await readPostsFromGitHub(GITHUB_TOKEN);
    if (!result.ok) return githubErrorResponse("Could not load posts before publishing", result);

    const duplicateIndex = result.posts.findIndex((p) => p.slug === newPost.slug);
    if (duplicateIndex !== -1 && !overwrite) {
      return NextResponse.json(
        { error: `A post with slug "${newPost.slug}" already exists.`, duplicate: true },
        { status: 409 }
      );
    }

    let updatedPosts: Record<string, unknown>[];
    if (overwrite && duplicateIndex !== -1) {
      updatedPosts = [...result.posts];
      updatedPosts[duplicateIndex] = newPost;
    } else {
      updatedPosts = [newPost, ...result.posts];
    }

    const writeResult = await writePosts(GITHUB_TOKEN, updatedPosts, result.sha, message);
    if (writeResult.ok) {
      return NextResponse.json({ ok: true, slug: newPost.slug, status: newPost.status ?? "published" });
    }
    if (writeResult.status !== 409 || attempt === 1) {
      return githubErrorResponse("Could not publish post", writeResult);
    }
  }

  return NextResponse.json({ error: "Could not publish post after retrying." }, { status: 503 });
}

/* ── PATCH — restore a post from bin ───────────────────────────── */
export async function PATCH(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Admin session expired. Please log in again." }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN is not configured on the server." }, { status: 500 });

  const { slug, restoreTo } = await req.json().catch(() => ({})) as {
    slug?: string;
    restoreTo?: string;
  };
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const result = await readPostsFromGitHub(GITHUB_TOKEN);
    if (!result.ok) return githubErrorResponse("Could not load posts before restoring", result);

    const idx = result.posts.findIndex((p) => p.slug === slug);
    if (idx === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 });

    const targetStatus = restoreTo ?? "published";
    const posts = [...result.posts];
    const restored = { ...posts[idx], status: targetStatus } as Record<string, unknown>;
    delete restored.deletedAt;
    posts[idx] = restored;

    const writeResult = await writePosts(GITHUB_TOKEN, posts, result.sha, `blog: restore "${slug}" to ${targetStatus}`);
    if (writeResult.ok) return NextResponse.json({ ok: true, slug, status: targetStatus });
    if (writeResult.status !== 409 || attempt === 1) return githubErrorResponse("Could not restore post", writeResult);
  }

  return NextResponse.json({ error: "Could not restore post after retrying." }, { status: 503 });
}

/* ── DELETE — soft delete (bin) or permanent delete ─────────────── */
export async function DELETE(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Admin session expired. Please log in again." }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN is not configured on the server." }, { status: 500 });

  const { slug, permanent } = await req.json().catch(() => ({})) as {
    slug?: string;
    permanent?: boolean;
  };
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const result = await readPostsFromGitHub(GITHUB_TOKEN);
    if (!result.ok) return githubErrorResponse("Could not load posts before deleting", result);

    const idx = result.posts.findIndex((p) => p.slug === slug);
    if (idx === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 });

    let updatedPosts: Record<string, unknown>[];
    let message: string;
    if (permanent) {
      updatedPosts = result.posts.filter((p) => p.slug !== slug);
      message = `blog: permanently delete "${slug}"`;
    } else {
      updatedPosts = [...result.posts];
      updatedPosts[idx] = {
        ...updatedPosts[idx],
        status: "deleted",
        deletedAt: new Date().toISOString(),
      };
      message = `blog: move "${slug}" to bin`;
    }

    const writeResult = await writePosts(GITHUB_TOKEN, updatedPosts, result.sha, message);
    if (writeResult.ok) return NextResponse.json({ ok: true, slug, permanent: !!permanent });
    if (writeResult.status !== 409 || attempt === 1) return githubErrorResponse("Could not delete post", writeResult);
  }

  return NextResponse.json({ error: "Could not delete post after retrying." }, { status: 503 });
}
