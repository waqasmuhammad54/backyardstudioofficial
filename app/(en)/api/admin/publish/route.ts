import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";
const CONTENT_FILE = "content/posts.json";

export async function POST(req: NextRequest) {
  // Auth check — reuse same admin_token cookie as the leads CRM
  const sessionCookie = req.cookies.get("admin_token")?.value;
  const expected = process.env.ADMIN_PASSWORD;
  if (!sessionCookie || sessionCookie !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not configured in Vercel" }, { status: 500 });
  }

  const newPost = await req.json().catch(() => null);
  if (!newPost?.slug) {
    return NextResponse.json({ error: "Invalid post data" }, { status: 400 });
  }

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_FILE}`;

  // 1. Fetch current file (to get SHA + existing posts)
  const fetchRes = await fetch(apiBase, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  let existingPosts: unknown[] = [];
  let sha: string | undefined;

  if (fetchRes.ok) {
    const data = await fetchRes.json();
    sha = data.sha;
    const decoded = Buffer.from(data.content, "base64").toString("utf-8");
    existingPosts = JSON.parse(decoded);
  } else if (fetchRes.status !== 404) {
    return NextResponse.json({ error: "Failed to read posts.json from GitHub" }, { status: 502 });
  }

  // 2. Prepend new post (newest first)
  const updatedPosts = [newPost, ...existingPosts];
  const newContent = Buffer.from(JSON.stringify(updatedPosts, null, 2)).toString("base64");

  // 3. Commit updated file to GitHub → triggers Vercel rebuild
  const commitBody: Record<string, unknown> = {
    message: `blog: add "${newPost.title}" [${newPost.slug}]`,
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

  return NextResponse.json({ ok: true, slug: newPost.slug });
}
