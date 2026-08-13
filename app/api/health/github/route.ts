import { NextResponse } from "next/server";

/**
 * GitHub token health check for the admin panel.
 *
 * WHY THIS EXISTS
 * On 13 Aug 2026 blog image upload started failing with "GitHub upload failed".
 * The panel showed the same sentence for every possible cause, so the real
 * reason — GitHub answering 401 "Bad credentials" — was invisible. The token had
 * simply expired: the panel published successfully at 18:17 the previous day.
 *
 * This endpoint answers "is the token alive?" in one request, the same way
 * /api/health/leads answers it for Supabase and Resend. Check it FIRST whenever
 * anything in /admin fails to save.
 *
 * SECURITY: never returns the token or any part of it. Only booleans, GitHub's
 * HTTP status, the authenticated account name, and whether that account can
 * write to this specific repository.
 */

const GITHUB_OWNER = "waqasmuhammad54";
const GITHUB_REPO = "backyardstudioofficial";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        githubWorking: false,
        tokenPresent: false,
        detail: "GITHUB_TOKEN is not set in this environment.",
        fix: "Vercel → Project → Settings → Environment Variables → add GITHUB_TOKEN (Production), then redeploy.",
      },
      { status: 503 }
    );
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // 1. Does the token authenticate at all?
  let login: string | null = null;
  let authStatus = 0;
  try {
    const who = await fetch("https://api.github.com/user", { headers, cache: "no-store" });
    authStatus = who.status;
    if (who.ok) {
      const u = (await who.json()) as { login?: string };
      login = u.login ?? null;
    }
  } catch {
    return NextResponse.json(
      { githubWorking: false, tokenPresent: true, detail: "Could not reach api.github.com." },
      { status: 503 }
    );
  }

  if (authStatus === 401) {
    return NextResponse.json(
      {
        githubWorking: false,
        tokenPresent: true,
        tokenValid: false,
        githubStatus: 401,
        detail: "GitHub rejected the token: Bad credentials. It is expired, revoked, or mistyped.",
        fix: "Generate a new token with 'Contents: Read and write' on this repo, replace GITHUB_TOKEN in Vercel (Production), and redeploy.",
      },
      { status: 503 }
    );
  }

  // 2. Can it actually write to THIS repo? A valid token with the wrong scope
  //    fails at push time, which is the confusing case worth catching here.
  let canWrite = false;
  let repoStatus = 0;
  try {
    const repo = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`, {
      headers,
      cache: "no-store",
    });
    repoStatus = repo.status;
    if (repo.ok) {
      const r = (await repo.json()) as { permissions?: { push?: boolean } };
      canWrite = Boolean(r.permissions?.push);
    }
  } catch {
    /* fall through — reported below */
  }

  const githubWorking = authStatus === 200 && canWrite;

  return NextResponse.json(
    {
      githubWorking,
      tokenPresent: true,
      tokenValid: authStatus === 200,
      authenticatedAs: login,
      repo: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      canWriteToRepo: canWrite,
      githubStatus: { user: authStatus, repo: repoStatus },
      detail: githubWorking
        ? "Token is valid and can write to the repo. Admin publishing and image upload should work."
        : canWrite === false && authStatus === 200
          ? "Token authenticates but has no write access to this repo. It needs 'Contents: Read and write'."
          : "Token is not usable for this repo.",
    },
    { status: githubWorking ? 200 : 503 }
  );
}
