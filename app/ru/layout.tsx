import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import RuNavbar from "@/components/layout/RuNavbar";
import RuFooter from "@/components/layout/RuFooter";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "Лучшая студия видеопроизводства в Дубае | Backyard Studio Official",
    template: "%s | Backyard Studio",
  },
  description:
    "Профессиональная видеосъёмка и фотография в Дубае и ОАЭ. Корпоративное видео, свадебная съёмка, контент для соцсетей, аэросъёмка дроном. Более 2,400 реализованных проектов. Лицензия GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru",
    languages: {
      "en":        "https://www.backyardstudioofficial.com",
      "ar":        "https://www.backyardstudioofficial.com/ar",
      "ru":        "https://www.backyardstudioofficial.com/ru",
      "zh":        "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title:       "Лучшая студия видеопроизводства в Дубае | Backyard Studio Official",
    description: "Профессиональная видеосъёмка в Дубае и ОАЭ. Корпоративное видео, свадьбы, аэросъёмка GCAA. Более 2,400 проектов.",
    url:         "https://www.backyardstudioofficial.com/ru",
    siteName:    "Backyard Studio Official",
    locale:      "ru_RU",
    type:        "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — видеопроизводство в Дубае" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Backyard Studio Official — видеопроизводство в Дубае",
    description: "Корпоративное видео, свадьбы, аэросъёмка (лицензия GCAA). 2,400+ проектов по всем ОАЭ.",
    images:      ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const LOCAL_BUSINESS_RU = {
  "@context":     "https://schema.org",
  "@type":        "LocalBusiness",
  "@id":          "https://www.backyardstudioofficial.com/ru/#localbusiness",
  "name":         "Backyard Studio Official",
  "alternateName":"Бэкъярд Студио",
  "url":          "https://www.backyardstudioofficial.com/ru",
  "telephone":    "+971585882685",
  "email":        "info@backyardstudioofficial.com",
  "address": {
    "@type":           "PostalAddress",
    "addressLocality": "Дубай",
    "addressCountry":  "AE",
  },
  "description":
    "Профессиональная видеосъёмка и фотография в Дубае. Корпоративное видео, свадебная съёмка, контент для соцсетей, аэросъёмка дроном. Лицензия GCAA.",
  "areaServed": [
    { "@type": "City",              "name": "Дубай"   },
    { "@type": "City",              "name": "Абу-Даби" },
    { "@type": "City",              "name": "Шарджа"  },
    { "@type": "AdministrativeArea","name": "ОАЭ"     },
  ],
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.youtube.com/@backyardstudioofficial",
  ],
  "founder": [
    { "@type": "Person", "name": "Фахад Икбал Батт",   "jobTitle": "Директор и главный фотограф" },
    { "@type": "Person", "name": "Сайед Мазхар Зайди",  "jobTitle": "Директор постпродакшна",      "sameAs": "https://www.imdb.com/name/nm14029494/" },
  ],
};

const ORGANIZATION_RU = {
  "@context":     "https://schema.org",
  "@type":        "Organization",
  "@id":          "https://www.backyardstudioofficial.com/#organization",
  "name":         "Backyard Studio Official",
  "alternateName":"Бэкъярд Студио — продакшн Дубай",
  "url":          "https://www.backyardstudioofficial.com/ru",
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
    "availableLanguage": ["Russian", "English", "Arabic", "Urdu"],
    "areaServed":        "AE",
  },
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.facebook.com/backyardstudioofficial",
    "https://www.tiktok.com/@backyardstudioofficial",
    "https://youtube.com/@backyardstudioofficial",
  ],
  "founder": [
    { "@type": "Person", "name": "Фахад Икбал Батт",  "jobTitle": "Директор и главный фотограф" },
    { "@type": "Person", "name": "Сайед Мазхар Зайди", "jobTitle": "Директор постпродакшна"      },
  ],
};

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Inter supports Cyrillic */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_RU) }}
      />

      {/* Organization schema — Knowledge Panel + AI Overview entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_RU) }}
      />

      <CustomCursor />

      <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <RuNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <RuFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-ru"
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
