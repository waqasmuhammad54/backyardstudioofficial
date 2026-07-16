import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";

export async function POST(req: NextRequest) {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || process.env.ADMIN_PASSWORD;
  if (!expectedToken) return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  const authHeader = req.headers.get("Authorization");
  const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const sessionCookie = req.cookies.get("bso_session")?.value;
  const isAuthed = (bearerToken && bearerToken === expectedToken) || (sessionCookie && sessionCookie === expectedToken);
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not configured" }, { status: 500 });
  }

  const { filename, content } = await req.json();
  if (!filename || !content) {
    return NextResponse.json({ error: "Missing filename or content" }, { status: 400 });
  }

  // Sanitize filename
  const safeName = filename
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-");
  const filePath = `public/images/blog/${safeName}`;
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;

  const ghHeaders = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // Check if file already exists (need SHA to overwrite)
  let sha: string | undefined;
  const checkRes = await fetch(apiUrl, { headers: ghHeaders });
  if (checkRes.ok) {
    const data = await checkRes.json();
    sha = data.sha;
  }

  const commitBody: Record<string, unknown> = {
    message: `blog: upload image ${safeName}`,
    content, // already base64
    branch: "main",
  };
  if (sha) commitBody.sha = sha;

  const uploadRes = await fetch(apiUrl, {
    method: "PUT",
    headers: { ...ghHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(commitBody),
  });

  if (!uploadRes.ok) {
    const err = await uploadRes.json().catch(() => ({}));
    return NextResponse.json({ error: "GitHub upload failed", detail: err }, { status: 502 });
  }

  return NextResponse.json({ ok: true, path: `/images/blog/${safeName}` });
}
