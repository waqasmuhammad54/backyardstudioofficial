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

  // A Vercel serverless function rejects a body over 4.5 MB before this handler
  // runs, so a huge image never reaches here at all — the client now downscales
  // first. This guard catches anything that still slips through and names the
  // reason instead of letting it surface as a generic failure.
  let filename: string | undefined;
  let content: string | undefined;
  try {
    ({ filename, content } = await req.json());
  } catch {
    return NextResponse.json(
      { error: "Upload too large or malformed", detail: "The request body could not be read. Images must be under 4 MB after resizing." },
      { status: 413 }
    );
  }
  if (!filename || !content) {
    return NextResponse.json({ error: "Missing filename or content" }, { status: 400 });
  }

  const approxBytes = Math.round((content.length * 3) / 4);
  if (approxBytes > 4_000_000) {
    return NextResponse.json(
      { error: "Image too large", detail: `${(approxBytes / 1_000_000).toFixed(1)} MB exceeds the 4 MB limit.` },
      { status: 413 }
    );
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
    // Report the real cause. "GitHub upload failed" on its own is unactionable —
    // a revoked token, a 409 SHA conflict and a GitHub outage all looked identical
    // from the admin panel, which is why this took so long to pin down.
    const reason =
      uploadRes.status === 401 || uploadRes.status === 403
        ? "GITHUB_TOKEN is invalid, expired, or lacks 'contents: write' on this repo"
        : uploadRes.status === 409
          ? "Conflict — the file changed between the read and the write. Try again."
          : uploadRes.status === 422
            ? "GitHub rejected the file (too large for the Contents API, or a bad path)"
            : `GitHub returned HTTP ${uploadRes.status}`;
    return NextResponse.json(
      {
        error: "GitHub upload failed",
        status: uploadRes.status,
        reason,
        detail: { message: (err as { message?: string })?.message || reason },
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, path: `/images/blog/${safeName}` });
}
