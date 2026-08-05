export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

/**
 * Lead-capture health check.
 *
 * GA4 shows `lead_submit_attempt` and `lead_submit_error` firing while `generate_lead`
 * never fires — the signature of /api/contact returning 503, which happens only when
 * BOTH Supabase persistence and Resend delivery fail. Both fail the same way: a missing
 * environment variable in the Vercel production environment.
 *
 * There was no way to check that without POSTing a real enquiry, which would create a
 * fake lead and fire five emails. This endpoint answers the question safely.
 *
 * It reports PRESENCE ONLY — never a value, never a prefix, never a length. Knowing that
 * a key is configured tells an attacker nothing; it tells the site owner everything.
 */
/**
 * A present RESEND_API_KEY does not mean email actually sends. Resend refuses to send
 * from an unverified domain, and /api/contact sends from noreply@backyardstudioofficial.com.
 * This asks Resend directly — a read-only call that sends nothing — so the diagnosis is
 * "email works" or "email is broken and here is why", not "a key exists".
 */
async function checkResendDomain() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { keyPresent: false, keyValid: false, domainVerified: false, detail: "RESEND_API_KEY is not set" };
  try {
    const res = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${key}` },
      cache: "no-store",
    });
    if (res.status === 401 || res.status === 403) {
      return { keyPresent: true, keyValid: false, domainVerified: false, detail: "Resend rejected the API key (401/403). It is invalid or revoked." };
    }
    if (!res.ok) {
      return { keyPresent: true, keyValid: false, domainVerified: false, detail: `Resend API returned ${res.status}` };
    }
    const json = await res.json();
    const domains: { name?: string; status?: string }[] = json?.data ?? [];
    const match = domains.find((d) => d.name === "backyardstudioofficial.com");
    if (!match) {
      return {
        keyPresent: true, keyValid: true, domainVerified: false,
        detail: `backyardstudioofficial.com is not added in Resend. Domains found: ${domains.map((d) => d.name).join(", ") || "none"}. Sending from noreply@backyardstudioofficial.com will fail.`,
      };
    }
    const verified = match.status === "verified";
    return {
      keyPresent: true, keyValid: true, domainVerified: verified,
      detail: verified ? "Domain verified — email can send." : `Domain status is "${match.status}", not "verified". Resend will refuse to send until DNS records are added.`,
    };
  } catch (err) {
    return { keyPresent: true, keyValid: false, domainVerified: false, detail: `Could not reach Resend: ${(err as Error).message}` };
  }
}

export async function GET() {
  const resend = await checkResendDomain();
  const checks = {
    resendApiKey: Boolean(process.env.RESEND_API_KEY),
    supabaseUrl: Boolean(process.env.SUPABASE_URL),
    supabaseServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  };

  // /api/contact persists to Supabase AND emails via Resend. It only hard-fails (503,
  // which is what surfaces as lead_submit_error) when neither path works.
  const canPersist = checks.supabaseUrl && checks.supabaseServiceRoleKey;
  // Notification requires a key that authenticates AND a verified sending domain.
  const canNotify = resend.keyValid && resend.domainVerified;
  const leadCaptureWorking = canPersist || canNotify;

  const missing = Object.entries(checks)
    .filter(([, present]) => !present)
    .map(([name]) => name);

  return NextResponse.json(
    {
      leadCaptureWorking,
      canPersist,
      canNotify,
      checks,
      resend,
      missing,
      message: leadCaptureWorking
        ? canPersist && canNotify
          ? "Lead capture fully operational — enquiries are saved and the team is emailed."
          : canPersist
            ? "Enquiries are being SAVED but no notification email is sent. Check /admin for leads."
            : "Enquiries are being EMAILED but not saved to the database."
        : "LEAD CAPTURE IS DOWN. Every contact form submission is failing with a 503. Set the missing environment variables in Vercel → Settings → Environment Variables, then redeploy.",
    },
    { status: leadCaptureWorking ? 200 : 503 },
  );
}
