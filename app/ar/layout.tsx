import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { CLIENTS } from "@/lib/clients";
import ArNavbar from "@/components/layout/ArNavbar";
import ArFooter from "@/components/layout/ArFooter";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    template: "%s | باكيارد ستوديو",
  },
  description:
    "شركة الإنتاج الإبداعي الرائدة في دبي والإمارات. تصوير فيديو احترافي، تصوير الأعراس، إنتاج المحتوى الرقمي، تصوير بالطائرة المسيّرة عبر جميع إمارات الدولة. أكثر من 2,400 مشروع منجز.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar",
    languages: {
      "en":        "https://www.backyardstudioofficial.com",
      "ar":        "https://www.backyardstudioofficial.com/ar",
      "ru":        "https://www.backyardstudioofficial.com/ru",
      "zh":        "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title:       "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "شركة الإنتاج الإبداعي الرائدة في دبي والإمارات. تصوير فيديو احترافي، تصوير الأعراس، محتوى رقمي، طائرات مسيّرة GCAA. أكثر من 2,400 مشروع.",
    url:         "https://www.backyardstudioofficial.com/ar",
    locale:      "ar_AE",
    type:        "website",
    siteName:    "باكيارد ستوديو أوفيشيال",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "باكيارد ستوديو أوفيشيال — دبي" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "الإنتاج الإبداعي الرائد في دبي. أكثر من 2,400 مشروع. رخصة GCAA.",
    images:      ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const LOCAL_BUSINESS_AR = {
  "@context":     "https://schema.org",
  "@type":        "LocalBusiness",
  "@id":          "https://www.backyardstudioofficial.com/ar/#localbusiness",
  "name":         "باكيارد ستوديو أوفيشيال",
  "alternateName":"Backyard Studio Official",
  "url":          "https://www.backyardstudioofficial.com/ar",
  "telephone":    "+971585882685",
  "email":        "info@backyardstudioofficial.com",
  "address": {
    "@type":           "PostalAddress",
    "addressLocality": "دبي",
    "addressRegion":   "Dubai",
    "addressCountry":  "AE",
  },
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  "description":
    "شركة الإنتاج الإبداعي الرائدة في دبي. تصوير فيديو احترافي، تصوير الأعراس، محتوى وسائل التواصل الاجتماعي، تصوير الفعاليات والأفلام المؤسسية.",
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.facebook.com/Backyardstudioofficial",
    "https://www.tiktok.com/@backyardstudio_official5",
    "https://www.linkedin.com/in/backyard-studio-508532417/",
  ],
  "founder": [
    { "@type": "Person", "name": "فهد إقبال بط",   "jobTitle": "المدير الإبداعي"  },
    { "@type": "Person", "name": "سيد مظهر زيدي",  "jobTitle": "مدير التصوير"     },
  ],
};

const ORGANIZATION_AR = {
  "@context":    "https://schema.org",
  "@type":       "Organization",
  "@id":         "https://www.backyardstudioofficial.com/#organization",
  "name":        "باكيارد ستوديو أوفيشيال",
  "alternateName":"Backyard Studio Official",
  "url":         "https://www.backyardstudioofficial.com/ar",
  "logo": {
    "@type":  "ImageObject",
    "url":    "https://www.backyardstudioofficial.com/logo-black.png",
    "width":  512,
    "height": 512,
  },
  "foundingDate": "2019",
  "contactPoint": {
    "@type":             "ContactPoint",
    "telephone":         "+971585882685",
    "contactType":       "customer service",
    "availableLanguage": ["Arabic", "English", "Urdu", "Russian"],
    "areaServed":        "AE",
  },
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.facebook.com/Backyardstudioofficial",
    "https://www.tiktok.com/@backyardstudio_official5",
    "https://www.linkedin.com/in/backyard-studio-508532417/",
    "https://youtube.com/@BackyardStudioofficialuae",
    "https://www.trustpilot.com/review/backyardstudioofficial.com",
    "https://maps.google.com/?cid=5027158334939770142",
  ],
  "founder": [
    { "@type": "Person", "name": "فهد إقبال بط",  "jobTitle": "المدير الإبداعي" },
    { "@type": "Person", "name": "سيد مظهر زيدي", "jobTitle": "مدير التصوير"    },
  ],
  // Named clients — same entity data as the EN schema so Google and LLMs
  // recognise one business across all language versions.
  "client": CLIENTS.map((c) => ({ "@type": "Organization", "name": c.name })),
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Cairo font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      {/* LocalBusiness schema — Arabic locale entity signals */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_AR) }}
      />

      {/* Organization schema — Knowledge Panel + AI Overview entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_AR) }}
      />

      <CustomCursor />

      <div
        dir="rtl"
        lang="ar"
        style={{
          fontFamily:     "Cairo, sans-serif",
          minHeight:      "100vh",
          display:        "flex",
          flexDirection:  "column",
        }}
      >
        <ArNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <ArFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-ar"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" +
                GA_ID +
                "',{page_path:window.location.pathname,anonymize_ip:true});",
            }}
          />
        </>
      )}
    </>
  );
}
