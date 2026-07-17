"use client";

import { useEffect } from "react";

type Gtag = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
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

      window.gtag?.("event", "contact_click", {
        contact_method: method,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);

  return null;
}
