import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CustomCursor from "@/components/shared/CustomCursor";
import CinematicIntro from "@/components/shared/CinematicIntro";
import { organizationSchema, localBusinessSchema } from "@/lib/structuredData";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "Best Production Company in Dubai | Backyard Studio Official — UAE #1 2026",
    template: "%s | Backyard Studio Official",
  },
  description:
    "Dubai's best production company for video, events, weddings & social media shoots. DVCs, Instagram Reels, TikTok content, corporate films, wedding photography & drone production across all 7 UAE emirates. 2,400+ projects. GCAA licensed.",
  keywords: [
    "best production company in Dubai",
    "top production companies in Dubai",
    "production house Dubai",
    "video production company Dubai",
    "film production company Dubai",
    "event production company Dubai",
    "best wedding shoot company in Dubai",
    "top wedding shoot company in Dubai",
    "wedding videographer Dubai",
    "wedding photography Dubai",
    "wedding video production Dubai",
    "pre wedding photoshoot Dubai",
    "pre wedding photographers Dubai",
    "best wedding photographers Dubai",
    "wedding studio Dubai",
    "Indian wedding photographer Dubai",
    "social media content creator Dubai",
    "Instagram reels production Dubai",
    "TikTok content creation Dubai",
    "social media shoots Dubai",
    "corporate video production Dubai",
    "event videographer Dubai",
    "ads shooting Dubai",
    "aerial drone videography Dubai",
    "GCAA licensed drone operator UAE",
    "DVC production Dubai",
    "testimonial videos Dubai",
    "corporate films UAE",
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
    title:       "Backyard Studio Official | UAE's #1 Creative Production Studio 2026",
    description: "Event shoots, DVCs, Reels, TikTok, Ads & cinematic brand films — crafted for ambitious brands across Dubai, Abu Dhabi & all 7 UAE emirates. 2,400+ projects. GCAA licensed.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — UAE Creative Production Studio" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Backyard Studio Official | UAE #1 Production Studio",
    description: "Dubai's premier cinematic production studio. Reels, DVCs, Events, Drone & more.",
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
  verification: { google: "gTxfmwhvhvy9X-uOewdWpTtYQsHAbst-wGFZgwLx4RE" },
  alternates: {
    canonical: "https://www.backyardstudioofficial.com",
  },
  category: "Video Production",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        {/* Speakable schema for GEO/AI search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", ".speakable"],
              },
              "url": "https://www.backyardstudioofficial.com",
            }),
          }}
        />

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

        {/* BreadcrumbList for site structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.backyardstudioofficial.com" },
                { "@type": "ListItem", "position": 2, "name": "Services",  "item": "https://www.backyardstudioofficial.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://www.backyardstudioofficial.com/portfolio" },
                { "@type": "ListItem", "position": 4, "name": "Pricing",   "item": "https://www.backyardstudioofficial.com/pricing" },
                { "@type": "ListItem", "position": 5, "name": "Blog",      "item": "https://www.backyardstudioofficial.com/blog" },
                { "@type": "ListItem", "position": 6, "name": "Contact",   "item": "https://www.backyardstudioofficial.com/contact" },
              ],
            }),
          }}
        />
      </head>

      <body style={{ background: "var(--black-2)", color: "var(--cream)", overflowX: "hidden" }}>
        <CinematicIntro />
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
      </body>
    </html>
  );
}
