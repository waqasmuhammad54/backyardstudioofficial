import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    template: "%s | باكيارد ستوديو أوفيشيال",
  },
  description:
    "شركة الإنتاج الإبداعي الرائدة في دبي والإمارات. تصوير فيديو احترافي، تصوير الأعراس، إنتاج المحتوى الرقمي، تصوير بالطائرة المسيّرة عبر جميع إمارات الدولة. أكثر من 2,400 مشروع منجز.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "ar": "https://www.backyardstudioofficial.com/ar",
    },
  },
  openGraph: {
    locale: "ar_AE",
    siteName: "باكيارد ستوديو أوفيشيال",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

function ArNavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 50,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        direction: "rtl",
      }}
    >
      <a href="/ar" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
        <span style={{ fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "var(--gold)", letterSpacing: "0.02em" }}>
          باكيارد ستوديو
        </span>
      </a>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/ar/services" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "Cairo, sans-serif" }}>خدماتنا</a>
        <a href="/ar/pricing" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "Cairo, sans-serif" }}>الأسعار</a>
        <a href="/ar/blog" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "Cairo, sans-serif" }}>المدوّنة</a>
        <a href="/ar/about" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "Cairo, sans-serif" }}>عن الاستوديو</a>
        <a href="/ar/contact"
          style={{
            background: "var(--gold)",
            color: "#000",
            padding: "0.4rem 1rem",
            borderRadius: "2px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 600,
          }}
        >تواصل معنا</a>
        <a href="/" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none", fontFamily: "Cairo, sans-serif" }}>EN</a>
      </div>
    </nav>
  );
}

function ArFooter() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        padding: "3rem 2rem 2rem",
        direction: "rtl",
        fontFamily: "Cairo, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <h3 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem" }}>باكيارد ستوديو أوفيشيال</h3>
            <p style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: "1.6" }}>
              شركة الإنتاج الإبداعي الرائدة في دبي والإمارات.
              أكثر من 2,400 مشروع منجز. رخصة GCAA للطائرات المسيّرة.
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem" }}>روابط سريعة</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[["خدماتنا", "/ar/services"], ["الأسعار", "/ar/pricing"], ["عن الاستوديو", "/ar/about"], ["المدوّنة", "/ar/blog"], ["تواصل معنا", "/ar/contact"]].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem" }}>تواصل معنا</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>
              <span>📞 <a href="tel:+971585882685" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>+971 58 588 2685</a></span>
              <span>✉️ <a href="mailto:info@backyardstudioofficial.com" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>info@backyardstudioofficial.com</a></span>
              <span>📍 دبي، الإمارات العربية المتحدة</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: "1.5rem", textAlign: "center", color: "rgba(245,240,225,0.35)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} باكيارد ستوديو أوفيشيال. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Cairo font for Arabic */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Structured data for Arabic site */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "باكيارد ستوديو أوفيشيال",
            "alternateName": "Backyard Studio Official",
            "url": "https://www.backyardstudioofficial.com/ar",
            "telephone": "+971585882685",
            "email": "info@backyardstudioofficial.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "دبي",
              "addressCountry": "AE",
            },
            "description": "شركة الإنتاج الإبداعي الرائدة في دبي. تصوير فيديو احترافي، تصوير الأعراس، محتوى وسائل التواصل الاجتماعي، تصوير بالطائرة المسيّرة.",
          }),
        }}
      />

      <div dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ArNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <ArFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID} strategy="afterInteractive" />
          <Script id="ga4-ar" strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + GA_ID + "',{page_path:window.location.pathname,anonymize_ip:true});",
            }}
          />
        </>
      )}
    </>
  );
}
