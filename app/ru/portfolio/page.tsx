import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио | Backyard Studio Official — Дубай",
  description: "Портфолио Backyard Studio — корпоративное видео, свадебная съёмка, недвижимость, отели, авто и контент для соцсетей в Дубае и ОАЭ.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/portfolio" },
};

const CATEGORIES = [
  { label: "Корпоративное видео", href: "/portfolio", icon: "🏢" },
  { label: "Свадебная съёмка", href: "/portfolio", icon: "💍" },
  { label: "Недвижимость", href: "/portfolio", icon: "🏙️" },
  { label: "Отели и рестораны", href: "/portfolio", icon: "🏨" },
  { label: "Автомобили", href: "/portfolio", icon: "🚗" },
  { label: "Мода и фэшн", href: "/portfolio", icon: "👗" },
  { label: "Реклама и ТВ", href: "/portfolio", icon: "📺" },
  { label: "Контент для соцсетей", href: "/portfolio", icon: "📱" },
];

export default function RuPortfolioPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>НАШИ РАБОТЫ</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Портфолио</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          От корпоративных фильмов до свадебной съёмки — мы создаём контент, который работает.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => (
              <a key={cat.label} href={cat.href}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", textDecoration: "none", gap: "0.75rem" }}>
                <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
                <span style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}>{cat.label}</span>
              </a>
            ))}
          </div>

          <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", padding: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>
              Полное портфолио
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
              Все наши проекты доступны в полной версии портфолио.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/portfolio" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
                Смотреть всё портфолио →
              </a>
              <a href="/ru/contact" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
                Обсудить проект →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
