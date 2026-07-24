import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ZhNavbar from "@/components/layout/ZhNavbar";
import ZhFooter from "@/components/layout/ZhFooter";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "迪拜最佳影视制作公司 | Backyard Studio Official",
    template: "%s | Backyard Studio Official",
  },
  description:
    "迪拜及阿联酋领先的影视制作公司。专业视频拍摄、婚礼摄影、企业影片、社交媒体内容及无人机航拍。已完成超过2,400个项目。持有GCAA无人机商业执照。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh",
    languages: {
      "en":        "https://www.backyardstudioofficial.com",
      "ar":        "https://www.backyardstudioofficial.com/ar",
      "ru":        "https://www.backyardstudioofficial.com/ru",
      "zh":        "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title:       "迪拜最佳影视制作公司 | Backyard Studio Official",
    description: "迪拜及阿联酋领先的影视制作公司。超过2,400个项目。GCAA无人机商业执照。2小时内免费报价。",
    url:         "https://www.backyardstudioofficial.com/zh",
    locale:      "zh_CN",
    type:        "website",
    siteName:    "Backyard Studio Official",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — 迪拜影视制作" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "迪拜最佳影视制作公司 | Backyard Studio Official",
    description: "迪拜领先制作公司。超过2,400个项目。GCAA执照。",
    images:      ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const LOCAL_BUSINESS_ZH = {
  "@context":     "https://schema.org",
  "@type":        "LocalBusiness",
  "@id":          "https://www.backyardstudioofficial.com/zh/#localbusiness",
  "name":         "Backyard Studio Official",
  "alternateName":"巴克亚德工作室",
  "url":          "https://www.backyardstudioofficial.com/zh",
  "telephone":    "+971585882685",
  "email":        "info@backyardstudioofficial.com",
  "address": {
    "@type":           "PostalAddress",
    "addressLocality": "迪拜",
    "addressRegion":   "Dubai",
    "addressCountry":  "AE",
  },
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  "description":
    "迪拜专业影视制作公司。企业视频、婚礼摄影、无人机航拍（GCAA执照）、社交媒体内容制作。",
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.facebook.com/Backyardstudioofficial",
    "https://www.tiktok.com/@backyardstudio_official5",
    "https://www.linkedin.com/in/backyard-studio-508532417/",
  ],
  "founder": [
    { "@type": "Person", "name": "Fahad Iqbal Butt",  "jobTitle": "Creative Director"      },
    { "@type": "Person", "name": "Syed Mazhar Zaidi", "jobTitle": "Director of Photography" },
  ],
};

const ORGANIZATION_ZH = {
  "@context":     "https://schema.org",
  "@type":        "Organization",
  "@id":          "https://www.backyardstudioofficial.com/#organization",
  "name":         "Backyard Studio Official",
  "alternateName":"巴克亚德工作室 迪拜影视制作",
  "url":          "https://www.backyardstudioofficial.com/zh",
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
    "availableLanguage": ["Chinese", "English", "Arabic", "Russian", "Urdu"],
    "areaServed":        "AE",
  },
  "sameAs": [
    "https://www.instagram.com/backyardstudioofficial",
    "https://www.facebook.com/Backyardstudioofficial",
    "https://www.tiktok.com/@backyardstudio_official5",
    "https://www.linkedin.com/in/backyard-studio-508532417/",
    "https://youtube.com/@BackyardStudioofficialuae",
  ],
  "founder": [
    { "@type": "Person", "name": "Fahad Iqbal Butt",  "jobTitle": "Creative Director"      },
    { "@type": "Person", "name": "Syed Mazhar Zaidi", "jobTitle": "Director of Photography" },
  ],
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Noto Sans SC for Chinese */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_ZH) }}
      />

      {/* Organization schema — Knowledge Panel + AI Overview entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_ZH) }}
      />

      <CustomCursor />

      <div style={{ fontFamily: "'Noto Sans SC', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ZhNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <ZhFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-zh"
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
