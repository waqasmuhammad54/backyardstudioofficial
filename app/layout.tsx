import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CustomCursor from "@/components/shared/CustomCursor";
import CinematicIntro from "@/components/shared/CinematicIntro";
import { organizationSchema, localBusinessSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://backyardstudioofficial.com"),
  title: {
    default: "Backyard Studio Official | #1 Video Production Studio in UAE 2026",
    template: "%s | Backyard Studio Official",
  },
  description:
    "Dubai's premier creative production studio in 2026. Event shoots, DVCs, Instagram Reels, TikTok content, testimonials & drone ads — serving all 7 UAE emirates. 2,400+ projects delivered. 8+ years of cinematic excellence.",
  keywords: [
    "video production Dubai 2026",
    "event videography UAE",
    "DVC production Dubai",
    "Instagram reels UAE",
    "TikTok content Dubai",
    "corporate video Abu Dhabi",
    "ads shooting UAE",
    "testimonial videos Dubai",
    "backyard studio official",
    "video production company UAE",
    "event shoots Dubai",
    "reels production Dubai",
    "photo shoots UAE",
    "aerial drone videography Dubai",
    "corporate films UAE",
    "best production studio Dubai",
    "cinematic video production UAE",
    "GCAA licensed drone operator UAE",
    "social media content Dubai",
    "brand films Abu Dhabi",
  ],
  authors:   [{ name: "Backyard Studio Official", url: "https://backyardstudioofficial.com" }],
  creator:   "Backyard Studio Official",
  publisher: "Backyard Studio Official",
  openGraph: {
    type:        "website",
    locale:      "en_AE",
    url:         "https://backyardstudioofficial.com",
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
  verification: { google: "REPLACE_WITH_GSC_VERIFICATION_CODE" },
  alternates: {
    canonical: "https://backyardstudioofficial.com",
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

        {/* Fonts: Inter (body) + Bebas Neue (display) + Playfair Display (serif/editorial) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        {/* Speakable schema for GEO/AI search (Google, Perplexity, ChatGPT, Copilot) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", ".speakable"]
              },
              "url": "https://backyardstudioofficial.com"
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

        {/* BreadcrumbList for site structure (GEO signal) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://backyardstudioofficial.com" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://backyardstudioofficial.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://backyardstudioofficial.com/portfolio" },
                { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://backyardstudioofficial.com/contact" },
              ]
            }),
          }}
        />

        {/* Google Analytics — replace G-XXXXXXXX */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXX');`,
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
      </body>
    </html>
  );
}
