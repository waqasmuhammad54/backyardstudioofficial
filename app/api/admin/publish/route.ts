import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";
const CONTENT_FILE = "content/posts.json";
const DYNAMIC_POSTS_FILE = "lib/dynamicPosts.ts";

/* ── Shared helpers ─────────────────────────────────────────────── */

function authCheck(req: NextRequest): boolean {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || process.env.ADMIN_PASSWORD;
  if (!expectedToken) return false;
  // Accept Bearer token from Authorization header (in-memory auth)
  const authHeader = req.headers.get("Authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7);
    if (token === expectedToken) return true;
  }
  // Fall back to session cookie
  const sessionCookie = req.cookies.get("bso_session")?.value;
  return !!(sessionCookie && sessionCookie === expectedToken);
}

async function ghGet(token: string, path: string) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return {
    sha: data.sha as string,
    content: Buffer.from(data.content as string, "base64").toString("utf-8"),
  };
}

async function ghPut(
  token: string,
  path: string,
  content: string,
  sha: string,
  message: string
): Promise<boolean> {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
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
  return res.ok;
}

async function readPostsFromGitHub(token: string): Promise<{
  posts: Record<string, unknown>[];
  sha: string;
} | null> {
  const result = await ghGet(token, CONTENT_FILE);
  if (!result) return null;
  return {
    sha: result.sha,
    posts: JSON.parse(result.content),
  };
}

/** Regenerate lib/dynamicPosts.ts with inline post data so Vercel bundles it. */
function buildDynamicPostsTs(posts: Record<string, unknown>[]): string {
  const now = new Date().toISOString();
  return (
    `// ⚠️ AUTO-GENERATED — DO NOT EDIT MANUALLY\n` +
    `// Updated automatically by the admin publish API on every post publish.\n` +
    `// Last updated: ${now}\n` +
    `// Source of truth: ${CONTENT_FILE} (committed to GitHub by admin API)\n` +
    `import type { BlogPost } from "./blogPosts";\n` +
    `\n` +
    `// prettier-ignore\n` +
    `export const DYNAMIC_POSTS_DATA: (BlogPost & { status?: string })[] =\n` +
    JSON.stringify(posts, null, 2) +
    `;\n` +
    `\n` +
    `export function getDynamicPosts(): BlogPost[] {\n` +
    `  return DYNAMIC_POSTS_DATA.filter((p) => !p.status || p.status === "published");\n` +
    `}\n` +
    `\n` +
    `export function getDynamicPost(slug: string): BlogPost | undefined {\n` +
    `  return getDynamicPosts().find((p) => p.slug === slug);\n` +
    `}\n`
  );
}

async function writePostsAndRebuild(
  token: string,
  posts: Record<string, unknown>[],
  jsonSha: string,
  message: string
): Promise<boolean> {
  // 1. Commit posts.json
  const jsonOk = await ghPut(token, CONTENT_FILE, JSON.stringify(posts, null, 2), jsonSha, message);
  if (!jsonOk) return false;

  // 2. Fetch current dynamicPosts.ts SHA (need it to update)
  const dynResult = await ghGet(token, DYNAMIC_POSTS_FILE);
  if (!dynResult) return false;

  // 3. Commit regenerated dynamicPosts.ts (inline data, no JSON import)
  const dynContent = buildDynamicPostsTs(posts);
  const dynOk = await ghPut(
    token,
    DYNAMIC_POSTS_FILE,
    dynContent,
    dynResult.sha,
    `chore: regenerate dynamicPosts.ts — ${message}`
  );
  return dynOk;
}

/* ── GET — list all posts (for admin panel) ─────────────────────── */
export async function GET(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });

  const result = await readPostsFromGitHub(GITHUB_TOKEN);
  if (!result) return NextResponse.json({ error: "Failed to read posts.json from GitHub" }, { status: 502 });

  return NextResponse.json({ posts: result.posts });
}

/* ── POST — publish or update a post ───────────────────────────── */
export async function POST(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set in Vercel env vars" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.slug) return NextResponse.json({ error: "Invalid post data" }, { status: 400 });

  const overwrite: boolean = body.overwrite === true;
  const newPost = { ...body };
  delete newPost.overwrite;

  const result = await readPostsFromGitHub(GITHUB_TOKEN);
  let existingPosts: Record<string, unknown>[] = [];
  let sha = "";

  if (result) {
    existingPosts = result.posts;
    sha = result.sha;
  }

  const duplicateIndex = existingPosts.findIndex((p) => p.slug === newPost.slug);
  if (duplicateIndex !== -1 && !overwrite) {
    return NextResponse.json(
      { error: `A post with slug "${newPost.slug}" already exists. Pass overwrite: true to replace it.`, duplicate: true },
      { status: 409 }
    );
  }

  let updatedPosts: Record<string, unknown>[];
  if (overwrite && duplicateIndex !== -1) {
    updatedPosts = [...existingPosts];
    updatedPosts[duplicateIndex] = newPost;
  } else {
    updatedPosts = [newPost, ...existingPosts];
  }

  const message = overwrite
    ? `blog: update "${newPost.title}" [${newPost.slug}]`
    : newPost.status === "draft"
    ? `blog: save draft "${newPost.title}" [${newPost.slug}]`
    : `blog: add "${newPost.title}" [${newPost.slug}]`;

  const ok = await writePostsAndRebuild(GITHUB_TOKEN, updatedPosts, sha, message);
  if (!ok) return NextResponse.json({ error: "GitHub commit failed" }, { status: 502 });

  return NextResponse.json({ ok: true, slug: newPost.slug, status: newPost.status ?? "published" });
}

/* ── PATCH — restore a post from bin ───────────────────────────── */
export async function PATCH(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });

  const { slug, restoreTo } = await req.json().catch(() => ({})) as {
    slug?: string;
    restoreTo?: string;
  };
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const result = await readPostsFromGitHub(GITHUB_TOKEN);
  if (!result) return NextResponse.json({ error: "Failed to read posts.json" }, { status: 502 });

  const { posts, sha } = result;
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 });

  const targetStatus = restoreTo ?? "published";
  const restored = { ...posts[idx], status: targetStatus } as Record<string, unknown>;
  delete restored.deletedAt;
  posts[idx] = restored;

  const ok = await writePostsAndRebuild(GITHUB_TOKEN, posts, sha, `blog: restore "${slug}" to ${targetStatus}`);
  if (!ok) return NextResponse.json({ error: "GitHub commit failed" }, { status: 502 });

  return NextResponse.json({ ok: true, slug, status: targetStatus });
}

/* ── DELETE — soft delete (bin) or permanent delete ─────────────── */
export async function DELETE(req: NextRequest) {
  if (!authCheck(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });

  const { slug, permanent } = await req.json().catch(() => ({})) as {
    slug?: string;
    permanent?: boolean;
  };
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const result = await readPostsFromGitHub(GITHUB_TOKEN);
  if (!result) return NextResponse.json({ error: "Failed to read posts.json" }, { status: 502 });

  const { posts, sha } = result;
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return NextResponse.json({ error: "Post not found" }, { status: 404 });

  let updatedPosts: Record<string, unknown>[];
  let message: string;

  if (permanent) {
    updatedPosts = posts.filter((p) => p.slug !== slug);
    message = `blog: permanently delete "${slug}"`;
  } else {
    updatedPosts = [...posts];
    updatedPosts[idx] = {
      ...updatedPosts[idx],
      status: "deleted",
      deletedAt: new Date().toISOString(),
    };
    message = `blog: move "${slug}" to bin`;
  }

  const ok = await writePostsAndRebuild(GITHUB_TOKEN, updatedPosts, sha, message);
  if (!ok) return NextResponse.json({ error: "GitHub commit failed" }, { status: 502 });

  return NextResponse.json({ ok: true, slug, permanent: !!permanent });
}
