"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const ENGAGEMENT_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

/**
 * Analytics is useful after a visitor engages, but downloading and evaluating
 * it during the first paint used hundreds of milliseconds of the mobile main
 * thread. Start it on the first real interaction, with a delayed fallback so
 * non-interacting visits are still counted.
 */
export default function DeferredAnalytics({ measurementId }: { measurementId: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setEnabled(true);
      ENGAGEMENT_EVENTS.forEach((event) => window.removeEventListener(event, enable));
    };

    ENGAGEMENT_EVENTS.forEach((event) => window.addEventListener(event, enable, { passive: true, once: true }));
    const timer = window.setTimeout(enable, 12_000);

    return () => {
      done = true;
      window.clearTimeout(timer);
      ENGAGEMENT_EVENTS.forEach((event) => window.removeEventListener(event, enable));
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{page_path:window.location.pathname,anonymize_ip:true});`}
      </Script>
    </>
  );
}
