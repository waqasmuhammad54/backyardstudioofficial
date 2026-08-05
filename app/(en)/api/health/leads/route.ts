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
export async function GET() {
  const checks = {
    resendApiKey: Boolean(process.env.RESEND_API_KEY),
    supabaseUrl: Boolean(process.env.SUPABASE_URL),
    supabaseServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  };

  // /api/contact persists to Supabase AND emails via Resend. It only hard-fails (503,
  // which is what surfaces as lead_submit_error) when neither path works.
  const canPersist = checks.supabaseUrl && checks.supabaseServiceRoleKey;
  const canNotify = checks.resendApiKey;
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
