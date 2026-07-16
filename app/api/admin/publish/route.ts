import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";
const CONTENT_FILE = "content/posts.json";

export async function POST(req: NextRequest) {
  // Auth check
  const sessionCookie = req.cookies.get("bso_session")?.value;
  const expectedToken = process.env.ADMIN_SESSION_TOKEN ?? process.env.ADMIN_PASSWORD;
  if (!sessionCookie || sessionCookie !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set in Vercel env vars" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!body?.slug) {
    return NextResponse.json({ error: "Invalid post data" }, { status: 400 });
  }

  const overwrite: boolean = body.overwrite === true;
  const newPost = { ...body };
  delete newPost.overwrite; // don't store this flag in the post

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE}`;

  // 1. Fetch current file (to get SHA + existing posts)
  const fetchRes = await fetch(apiBase, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  let existingPosts: Record<string, unknown>[] = [];
  let sha: string | undefined;

  if (fetchRes.ok) {
    const data = await fetchRes.json();
    sha = data.sha;
    const decoded = Buffer.from(data.content, "base64").toString("utf-8");
    existingPosts = JSON.parse(decoded);
  } else if (fetchRes.status !== 404) {
    return NextResponse.json({ error: "Failed to read posts.json from GitHub" }, { status: 502 });
  }

  // 2. Duplicate slug check
  const duplicateIndex = existingPosts.findIndex((p) => p.slug === newPost.slug);
  if (duplicateIndex !== -1 && !overwrite) {
    return NextResponse.json(
      { error: `A post with slug "${newPost.slug}" already exists. Pass overwrite: true to replace it.`, duplicate: true },
      { status: 409 }
    );
  }

  // 3. Build updated posts array
  let updatedPosts: Record<string, unknown>[];
  if (overwrite && duplicateIndex !== -1) {
    // Replace the existing post in-place (preserve position)
    updatedPosts = [...existingPosts];
    updatedPosts[duplicateIndex] = newPost;
  } else {
    // Prepend new post (newest first)
    updatedPosts = [newPost, ...existingPosts];
  }

  const newContent = Buffer.from(JSON.stringify(updatedPosts, null, 2)).toString("base64");

  // 4. Commit updated file
  const commitBody: Record<string, unknown> = {
    message: overwrite
      ? `blog: update "${newPost.title}" [${newPost.slug}]`
      : newPost.status === "draft"
      ? `blog: save draft "${newPost.title}" [${newPost.slug}]`
      : `blog: add "${newPost.title}" [${newPost.slug}]`,
    content: newContent,
    branch: "main",
  };
  if (sha) commitBody.sha = sha;

  const commitRes = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commitBody),
  });

  if (!commitRes.ok) {
    const errBody = await commitRes.json().catch(() => ({}));
    return NextResponse.json({ error: "GitHub commit failed", detail: errBody }, { status: 502 });
  }

  return NextResponse.json({ ok: true, slug: newPost.slug, status: newPost.status ?? "published" });
}

// DELETE — remove a post by slug
export async function DELETE(req: NextRequest) {
  const sessionCookie = req.cookies.get("bso_session")?.value;
  const expectedToken = process.env.ADMIN_SESSION_TOKEN ?? process.env.ADMIN_PASSWORD;
  if (!sessionCookie || sessionCookie !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });
  }

  const { slug } = await req.json().catch(() => ({})) as { slug?: string };
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE}`;

  const fetchRes = await fetch(apiBase, {
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: "application/vnd.github+json" },
  });
  if (!fetchRes.ok) return NextResponse.json({ error: "Failed to read posts.json" }, { status: 502 });

  const data = await fetchRes.json();
  const sha = data.sha;
  const existingPosts: Record<string, unknown>[] = JSON.parse(Buffer.from(data.content, "base64").toString("utf-8"));

  const filtered = existingPosts.filter((p) => p.slug !== slug);
  if (filtered.length === existingPosts.length) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const commitRes = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `blog: remove "${slug}"`,
      content: Buffer.from(JSON.stringify(filtered, null, 2)).toString("base64"),
      branch: "main",
      sha,
    }),
  });

  if (!commitRes.ok) return NextResponse.json({ error: "GitHub commit failed" }, { status: 502 });
  return NextResponse.json({ ok: true, removed: slug, remaining: filtered.length });
}
