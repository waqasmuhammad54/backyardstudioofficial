import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CustomCursor from "@/components/shared/CustomCursor";
import { organizationSchema, localBusinessSchema } from "@/lib/structuredData";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "Video Production Company Dubai | Backyard Studio",
    template: "%s | Backyard Studio",
  },
  description:
    "Dubai production studio for commercial video, events, weddings, photography and social content across all seven UAE emirates. 2,400+ projects across all seven emirates.",
  keywords: [
    "best production company in Dubai",
    "top production companies in Dubai",
    "production house Dubai",
    "video production company Dubai",
    "film production company Dubai",
    "event production company Dubai",
    "best wedding shoot company in Dubai",
    "wedding videographer Dubai",
    "wedding photography Dubai",
    "social media content creator Dubai",
    "Instagram reels production Dubai",
    "TikTok content creation Dubai",
    "corporate video production Dubai",
    "event videographer Dubai",
    "aerial drone videography Dubai",
    "aerial videography UAE",
    "backyard studio official",
    "best production company UAE",
  ],
  authors:   [{ name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" }],
  creator:   "Backyard Studio Official",
  publisher: "Backyard Studio Official",
  openGraph: {
    type:        "website",
    locale:      "en_AE",
    url:         "https://www.backyardstudioofficial.com",
    siteName:    "Backyard Studio Official",
    // Kept in sync with the homepage metadata. The OG description used to lead with
    // "aerial production via GCAA-licensed operation", which read as the headline service and buried
    // the actual differentiator. Aerial is a capability within productions, not the pitch.
    title:       "Video Production Company Dubai | Prices Published Upfront",
    description: "Dubai production studio with prices published, not quoted privately. Commercial video, events, weddings, social content and photography across all seven UAE emirates.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — UAE Creative Production Studio" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Video Production Company Dubai | Prices Published Upfront",
    description: "Dubai production studio with prices published, not quoted privately. Video, events, weddings, photography and social content across the UAE.",
    images:      ["/og-image.jpg"],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon:    "/favicon.ico",
    apple:   "/apple-touch-icon.png",
    shortcut:"/favicon-32x32.png",
  },
  // Site-ownership verification.
  //
  // Google is verified. To rank in Bing, Yandex and Baidu the site must also be
  // registered in each engine's webmaster console — ranking there is not automatic
  // just because Google indexes us. Once the owner registers, paste the code and
  // uncomment the matching line; do NOT leave empty strings here, an empty meta tag
  // is worse than an absent one.
  //
  //   Bing   → https://www.bing.com/webmasters   (also feeds Copilot + DuckDuckGo)
  //   Yandex → https://webmaster.yandex.com      (RU market; /ru pages already exist)
  //   Baidu  → https://ziyuan.baidu.com          (CN market; /zh pages already exist)
  //
  // Note: Bing verification also unlocks IndexNow, which pushes new URLs to Bing
  // AND Yandex instantly rather than waiting to be crawled.
  verification: {
    google: "gTxfmwhvhvy9X-uOewdWpTtYQsHAbst-wGFZgwLx4RE",
    // Yandex — meta-tag method, taken from webmaster.yandex.com access-rights
    // page 10 Aug 2026. Chosen over the DNS TXT record because DNS propagation
    // can take 24h and this verifies in minutes. Do not remove after
    // verification: Yandex re-checks periodically and drops the site if the tag
    // disappears.
    yandex: "7c30f5c64af6c8db",
    // Bing is already verified via the Google Search Console import, so no
    // msvalidate.01 tag is needed. Baidu is not registered — see the note in
    // the multi-engine section of the handoff before adding it.
  },
  alternates: {
    canonical: "https://www.backyardstudioofficial.com",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  category: "Video Production",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  const pathname = headers().get("x-pathname") || "";

  // Admin screens are private application UI, not marketing pages. Keeping
  // them outside GA4 and global marketing schema prevents internal activity
  // from inflating acquisition and engagement reports.
  if (pathname.startsWith("/admin")) return <>{children}</>;

  return (
    <>
      {/* Organization schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* WebSite schema with SearchAction — enables Google Sitelinks Search Box + LLM site context */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.backyardstudioofficial.com/#website",
            name: "Backyard Studio Official",
            url: "https://www.backyardstudioofficial.com",
            description: "Dubai production studio for commercial video, events, weddings, photography, social media and aerial production across all seven UAE emirates.",
            publisher: {
              "@id": "https://www.backyardstudioofficial.com/#organization",
            },
            inLanguage: ["en", "ar", "ru", "zh"],
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.backyardstudioofficial.com/blog?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />

      {/* Google Analytics 4 */}
      {GA_ID && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + GA_ID + "',{page_path:window.location.pathname,anonymize_ip:true});",
            }}
          />
        </>
      )}
    </>
  );
}
