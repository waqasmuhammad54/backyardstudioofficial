/**
 * Lead tracking helpers.
 *
 * WHY THIS EXISTS
 * ---------------
 * In the UAE, WhatsApp — not a web form — is the primary way customers make
 * first contact. Before this file existed, every WhatsApp link on the site was
 * untracked, which meant GA4 reported ZERO leads across 28 days despite 345
 * users and 58 contact-page views. Leads were almost certainly happening; they
 * were simply leaving through an unmeasured exit.
 *
 * `generate_lead` is fired for WhatsApp and phone clicks because, for this
 * business, those ARE the lead. Mark generate_lead as a Key Event in GA4
 * (Admin → Events) so it appears in the Generate Leads reports.
 */

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>
) => void;

function gtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

function path(): string {
  return typeof window === "undefined" ? "" : window.location.pathname;
}

/** Fired when a visitor opens WhatsApp. This is a real lead for this business. */
export function trackWhatsAppLead(): void {
  const g = gtag();
  if (!g) return;
  g("event", "generate_lead", {
    lead_source: "whatsapp",
    lead_channel: "whatsapp",
    page_path: path(),
  });
  // Secondary event so WhatsApp volume can be analysed separately from forms.
  g("event", "contact_click", {
    method: "whatsapp",
    page_path: path(),
  });
}

/** Fired when a visitor taps a tel: link. */
export function trackPhoneLead(): void {
  const g = gtag();
  if (!g) return;
  g("event", "generate_lead", {
    lead_source: "phone",
    lead_channel: "phone",
    page_path: path(),
  });
  g("event", "contact_click", {
    method: "phone",
    page_path: path(),
  });
}

/** Fired when a visitor clicks an email link. */
export function trackEmailLead(): void {
  const g = gtag();
  if (!g) return;
  g("event", "generate_lead", {
    lead_source: "email",
    lead_channel: "email",
    page_path: path(),
  });
  g("event", "contact_click", {
    method: "email",
    page_path: path(),
  });
}
