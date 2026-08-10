"use client";

import { useEffect } from "react";

type Gtag = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Global listener for WhatsApp / phone / email link taps.
 *
 * Does two things per tap:
 *   1. Fires the GA4 events (unchanged behaviour).
 *   2. Beacons the tap to /api/lead/intent so it lands in the CRM.
 *
 * Step 2 exists because roughly 22 people a week contact the studio through
 * these channels and none of them appeared anywhere — the contact form is the
 * only thing that wrote to the database, and in the UAE almost nobody uses it.
 * Those enquiries arrived on the phone with no record of which page or search
 * produced them.
 *
 * WHY sendBeacon AND NOT fetch
 * The tap immediately navigates away (WhatsApp, dialler, mail client). A normal
 * fetch is cancelled when the page unloads, so a meaningful share of taps would
 * silently go unrecorded. sendBeacon is queued by the browser and delivered
 * regardless of navigation, and it cannot delay the navigation because it does
 * not block. Getting the visitor to WhatsApp fast matters more than the log —
 * so the log must be free.
 *
 * DEDUPE
 * A double-tap, or tapping WhatsApp on two pages in one visit, should not
 * create two rows. sessionStorage holds a short per-channel cooldown. It is
 * per-tab and clears itself, which is the right lifetime for this.
 */

const COOLDOWN_MS = 5 * 60 * 1000; // one row per channel per 5 min, per tab

function recentlySent(method: string): boolean {
  try {
    const key = `bs_intent_${method}`;
    const last = Number(window.sessionStorage.getItem(key) || 0);
    if (Date.now() - last < COOLDOWN_MS) return true;
    window.sessionStorage.setItem(key, String(Date.now()));
    return false;
  } catch {
    // Private mode / storage disabled — log it rather than lose it.
    return false;
  }
}

/** Campaign params only. No personal data, no IP, no fingerprint. */
function campaign(): string {
  try {
    const p = new URLSearchParams(window.location.search);
    return ["utm_source", "utm_medium", "utm_campaign", "gclid", "fbclid"]
      .map((k) => (p.get(k) ? `${k}=${p.get(k)}` : null))
      .filter(Boolean)
      .join("&");
  } catch {
    return "";
  }
}

export default function ContactIntentTracker() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;

    const trackContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      const method = href.startsWith("tel:")
        ? "phone"
        : href.startsWith("mailto:")
          ? "email"
          : /(?:wa\.me|whatsapp\.com)/i.test(href)
            ? "whatsapp"
            : null;

      if (!method) return;

      const pagePath = window.location.pathname;

      window.gtag?.("event", "contact_click", {
        contact_method: method,
        page_path: pagePath,
      });

      // `generate_lead` was previously fired only by the helpers in
      // lib/trackLead.ts, which are wired to some buttons but not to every
      // tel:/mailto:/wa.me link on the site. That is why GA4 showed 22
      // contact_click but no matching generate_lead. Firing it here — behind
      // the same dedupe as the CRM write — makes the Key Event count reflect
      // every channel tap, not just the instrumented buttons.
      if (recentlySent(method)) return;

      window.gtag?.("event", "generate_lead", {
        lead_source: method,
        lead_channel: method,
        page_path: pagePath,
      });

      try {
        const payload = JSON.stringify({
          method,
          page_path: pagePath,
          referrer: document.referrer || "",
          utm: campaign(),
        });
        const blob = new Blob([payload], { type: "application/json" });

        if (!navigator.sendBeacon?.("/api/lead/intent", blob)) {
          // Beacon refused (queue full, or unsupported). keepalive fetch is the
          // only other request type that survives unload.
          void fetch("/api/lead/intent", {
            method: "POST",
            body: payload,
            headers: { "Content-Type": "application/json" },
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // Never let logging break the click.
      }
    };

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return null;
}
