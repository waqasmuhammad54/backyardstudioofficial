import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hasValidSession(req: NextRequest): boolean {
  const expectedToken = process.env.ADMIN_SESSION_TOKEN || process.env.ADMIN_PASSWORD;
  if (!expectedToken) return false;
  const authHeader = req.headers.get("Authorization");
  const bearer = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const cookie = req.cookies.get("bso_session")?.value;
  return bearer === expectedToken || cookie === expectedToken;
}

// Lightweight session check used when the admin page reloads. This preserves a
// valid eight-hour login without returning the secret again.
export async function GET(req: NextRequest) {
  if (!hasValidSession(req)) {
    return NextResponse.json({ error: "Admin session expired. Please log in again." }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({ password: "" }));

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.ADMIN_SESSION_TOKEN || ADMIN_PASSWORD;
  const res = NextResponse.json({ ok: true, token });
  res.cookies.set("bso_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });
  return res;
}
