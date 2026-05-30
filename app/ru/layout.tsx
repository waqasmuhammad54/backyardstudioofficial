import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-MES1TPW4VC";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.backyardstudioofficial.com"),
  title: {
    default: "Лучшая студия видеопроизводства в Дубае | Backyard Studio Official",
    template: "%s | Backyard Studio Official",
  },
  description:
    "Профессиональная видеосъёмка и фотография в Дубае и ОАЭ. Корпоративное видео, свадебная съёмка, контент для соцсетей, аэросъёмка дроном. Более 2,400 реализованных проектов. Лицензия GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
    },
  },
  openGraph: {
    locale: "ru_RU",
    siteName: "Backyard Studio Official",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

function RuNavbar() {
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
      }}
    >
      <a href="/ru" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--gold)", letterSpacing: "0.05em" }}>
          BACKYARD STUDIO
        </span>
      </a>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a href="/ru/services"  style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem" }}>Услуги</a>
        <a href="/ru/pricing"   style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem" }}>Цены</a>
        <a href="/ru/portfolio" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem" }}>Портфолио</a>
        <a href="/ru/blog"      style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem" }}>Блог</a>
        <a href="/ru/about"     style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.875rem" }}>О нас</a>
        <a href="/ru/contact"
          style={{
            background: "var(--gold)",
            color: "#000",
            padding: "0.4rem 1rem",
            borderRadius: "2px",
            textDecoration: "none",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >Связаться</a>
        <a href="/" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none" }}>EN</a>
        <a href="/ar" style={{ color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", textDecoration: "none" }}>AR</a>
      </div>
    </nav>
  );
}

function RuFooter() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <h3 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem" }}>Backyard Studio Official</h3>
            <p style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: "1.6" }}>
              Ведущая творческая продакшн-студия Дубая и ОАЭ.
              Более 2,400 реализованных проектов. Лицензия GCAA на съёмку дронами.
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem" }}>Навигация</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[["Услуги", "/ru/services"], ["Цены", "/ru/pricing"], ["Портфолио", "/ru/portfolio"], ["Блог", "/ru/blog"], ["Отзывы", "/ru/testimonials"], ["Локации", "/ru/locations"], ["О нас", "/ru/about"], ["Контакты", "/ru/contact"]].map(([label, href]) => (
                <a key={href} href={href} style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none", fontSize: "0.875rem" }}>{label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--cream)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "0.9rem" }}>Контакты</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>
              <span>📞 <a href="tel:+971585882685" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>+971 58 588 2685</a></span>
              <span>✉️ <a href="mailto:info@backyardstudioofficial.com" style={{ color: "rgba(245,240,225,0.6)", textDecoration: "none" }}>info@backyardstudioofficial.com</a></span>
              <span>📍 Дубай, ОАЭ</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: "1.5rem", textAlign: "center", color: "rgba(245,240,225,0.35)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Backyard Studio Official. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Backyard Studio Official",
            "url": "https://www.backyardstudioofficial.com/ru",
            "telephone": "+971585882685",
            "email": "info@backyardstudioofficial.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Дубай",
              "addressCountry": "AE",
            },
            "description": "Профессиональная видеосъёмка и фотография в Дубае. Корпоративное видео, свадебная съёмка, контент для соцсетей, аэросъёмка дроном.",
          }),
        }}
      />

      <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <RuNavbar />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <RuFooter />
      </div>

      <WhatsAppButton />

      {GA_ID && (
        <>
          <Script src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID} strategy="afterInteractive" />
          <Script id="ga4-ru" strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: "w