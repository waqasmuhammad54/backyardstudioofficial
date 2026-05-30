import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

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
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
    },
  },
  openGraph: {
    locale: "zh_CN",
    siteName: "Backyard Studio Official",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

function ZhNavbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, right: 0, left: 0, zIndex: 50,
      padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center",
      background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(212,175,55,0.15)",
    }}>
      <a href="/zh" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--gold)", letterSpacing: "0.05em" }}>
          BACKYARD STUDIO
        </span>
      </a>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/zh/services"    style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>服务</a>
        <a href="/zh/pricing"     style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>报价</a>
        <a href="/zh/portfolio"   style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>作品集</a>
        <a href="/zh/blog"        style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>博客</a>
        <a href="/zh/about"       style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>关于我们</a>
        <a href="/zh/contact" style={{
          background: "var(--gold)", color: "#000", padding: "0.4rem 1rem",
          borderRadius: "2px", textDecoration: "none", fontSize: "0.875rem",
          fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600,
        }}>联系我们</a>
        <a href="/" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none" }}>EN</a>
        <a href="/ar" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none" }}>AR</a>
        <a href="/ru" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none" }}>RU</a>
      </div>
    </nav>
  );
}

function ZhFooter() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(212,175,55,0.15)", padding: "3rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <h3 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem", fontFamily: "'Noto Sans SC', sans-serif" }}>Backyard Studio Official</h3>
            <p style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: "1.7", fontFamily: "'Noto Sans SC', sans-serif" }}>
              迪拜及阿联酋领先的创意制作公司。超过2,400个完成项目。持有GCAA无人机商业执照。
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", fontFamily: "'Noto Sans SC', sans-serif" }}>快速导航</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[["服务", "/zh/services"], ["报价", "/zh/pricing"], ["作品集", "/zh/portfolio"], ["博客", "/zh/blog"], ["客户评价", "/zh/testimonials"], ["拍摄地点", "/zh/locations"], ["关于我们", "/zh/about"], ["联系我们", "/zh/contact"]].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem", fontFamily: "'Noto Sans SC', sans-serif" }}>联系方式</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", fontFamily: "'Noto Sans SC', sans-serif" }}>
              <span>📞 <a href="tel:+971585882685" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>+971 58 588 2685</a></span>
              <span>✉️ <a href="mailto:info@backyardstudioofficial.com" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>info@backyardstudioofficial.com</a></span>
              <span>📍 迪拜，阿联酋</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: "1.5rem", textAlign: "center", color: "rgba(245,240,225,0.35)", fontSize: "0.8rem", fontFamily: "'Noto Sans SC', sans-serif" }}>
          © {new Date().getFullYear()} Backyard Studio Official. 版权所有。
        </div>
      </div>
    </footer>
  );
}

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Backyard Studio Official",
        "url": "https://www.backyardstudioofficial.com/zh",
        "telephone": "+971585882685",
        "email": "info@backyardstudioofficial.com",
        "address": { "@type": "PostalAddress", "addressLocality": "迪拜", "addressCountry": "AE" },
        "description": "迪拜专业影视制作公司。企业视频、婚礼摄影、无人机航拍、社交媒体内容。",
      }) }} />

      <div style={{ fontFamily: "'Noto Sans SC', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ZhNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <ZhFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID} strategy="afterInteractive" />
          <Script id="ga4-zh" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname,anonymize_ip:true});` }} />
        </>
      )}
    </>
  );
}
