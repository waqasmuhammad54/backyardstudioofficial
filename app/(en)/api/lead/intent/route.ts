export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * POST /api/lead/intent
 *
 * Records a WhatsApp / phone / email tap as a lead row.
 *
 * WHY THIS EXISTS
 * GA4 shows ~22 contact_click events a week and rising, while the contact form
 * produces almost none. In the UAE people tap WhatsApp rather than fill in a
 * form. Those enquiries do arrive — on the phone — but they left no record at
 * all: no CRM row, no source attribution, no way to know which page or which
 * search produced them, and nothing to follow up against. This closes that gap
 * using only the existing Supabase table. No paid API, no new env vars, no new
 * table, no third-party service.
 *
 * WHAT IT IS NOT
 * A tap is *intent*, not a confirmed enquiry — the visitor may never send the
 * message. So rows are written with status "intent" and a source of
 * "whatsapp-click" / "phone-click" / "email-click", which keeps them clearly
 * separable from real form submissions (source "website-contact-form",
 * status "new") in the CRM.
 *
 * DELIBERATELY NO EMAIL
 * The contact route emails four people per lead. Doing that here would send a
 * mail every time anyone taps WhatsApp — noise that would get the whole alert
 * stream muted, including genuine form leads. The WhatsApp message itself is
 * the notification; this is the audit trail behind it.
 *
 * PRIVACY
 * No personal data is collected — at tap time we do not know who the visitor
 * is. Only the page, referrer and campaign parameters are stored. No IP, no
 * cookie, no fingerprint, no name or number.
 */

const VALID_METHODS = new Set(["whatsapp", "phone", "email"]);

const LABELS: Record<string, string> = {
  whatsapp: "WhatsApp tap (no form)",
  phone: "Phone tap (no form)",
  email: "Email tap (no form)",
};

/** Keep free-text short so one bad payload cannot bloat the table. */
function clip(v: unknown, max: number): string {
  return typeof v === "string" ? v.slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  try {
    // sendBeacon posts a Blob, so this arrives as text rather than parsed JSON.
    const raw = await req.text();
    if (!raw) return new NextResponse(null, { status: 204 });

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(raw);
    } catch {
      return new NextResponse(null, { status: 204 });
    }

    const method = clip(body.method, 20).toLowerCase();
    if (!VALID_METHODS.has(method)) {
      // Unknown method — accept and drop. Never 4xx a beacon; the browser
      // cannot act on it and a failed beacon is invisible in the client.
      return new NextResponse(null, { status: 204 });
    }

    const pagePath = clip(body.page_path, 300) || "/";
    const referrer = clip(body.referrer, 300);
    const utm = clip(body.utm, 300);

    const notes = [
      `Channel: ${method}`,
      `Page: ${pagePath}`,
      referrer ? `Referrer: ${referrer}` : "Referrer: direct / none",
      utm ? `Campaign: ${utm}` : null,
      "",
      "Visitor opened this channel from the website. No form was submitted, so",
      "no name or contact details were captured — check the inbound message on",
      "that channel to match it up.",
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await supabase.from("leads").insert([
      {
        name: LABELS[method],
        // Column is NOT NULL. There is genuinely no address at tap time, so an
        // empty string is the honest value — do not invent a placeholder that
        // looks like a real address in the CRM.
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        status: "intent",
        source: `${method}-click`,
        notes,
      },
    ]);

    if (error) console.error("[lead/intent] supabase insert failed:", error.message);

    // Always 204, success or failure. This endpoint must never slow down or
    // interfere with the visitor reaching WhatsApp.
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("[lead/intent] unexpected error:", err);
    return new NextResponse(null, { status: 204 });
  }
}
