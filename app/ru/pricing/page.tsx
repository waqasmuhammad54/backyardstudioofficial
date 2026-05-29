import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на видеосъёмку в Дубае | Backyard Studio Official",
  description: "Прозрачные цены на видеосъёмку и фотосъёмку в Дубае. Свадебная съёмка от 3,500 AED, корпоративное видео от 15,000 AED, съёмка мероприятий от 3,500 AED. Бесплатная оценка за 2 часа.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/pricing" },
};

const PACKAGES = [
  { title: "Контент для соцсетей", price: "от 2 500 AED", features: ["Instagram Reels и TikTok", "YouTube Shorts", "Предметная съёмка", "Доставка за 48 часов"] },
  { title: "Свадебная съёмка", price: "от 3 500 AED", features: ["Полный день съёмки", "Фотограф + видеограф", "Хайлайт за 48 часов", "Файлы в высоком разрешении"], featured: true },
  { title: "Корпоративное видео", price: "от 15 000 AED", features: ["Профессиональный фильм", "Аэросъёмка дроном", "Цветокоррекция", "Полные права использования"] },
  { title: "Рекламный ролик", price: "от 25 000 AED", features: ["Полный продакшн DVC", "Кастинг + разрешение локации", "Графика и профзвук", "Финальный монтаж для ТВ/Digital"] },
];

export default function RuPricingPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
          Цены на наши услуги в Дубае
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          Прозрачные цены. Индивидуальное предложение для каждого проекта — в течение 2 часов.
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.5rem" }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.title} style={{ background: pkg.featured ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.03)", border: pkg.featured ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem", textAlign: "center", position: "relative" as const }}>
              {pkg.featured && (
                <div style={{ position: "absolute" as const, top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", padding: "0.2rem 1rem", borderRadius: "2px", fontSize: "0.75rem", fontFamily: "Inter, sans-serif", fontWeight: 700, whiteSpace: "nowrap" as const }}>
                  Наиболее популярно
                </div>
              )}
              <h2 style={{ fontFamily: "Inter, sans-serif", color: pkg.featured ? "var(--gold)" : "var(--cream)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{pkg.title}</h2>
              <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>{pkg.price}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {pkg.features.map((f) => <li key={f} style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.875rem" }}>✓ {f}</li>)}
              </ul>
              <a href="/ru/contact" style={{ display: "block", background: pkg.featured ? "var(--gold)" : "transparent", border: pkg.featured ? "none" : "1px solid rgba(212,175,55,0.4)", color: pkg.featured ? "#000" : "var(--gold)", padding: "0.75rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                Получить предложение
              </a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", textAlign: "center", marginTop: "2rem", fontSize: "0.875rem" }}>
          Все цены в дирхамах ОАЭ (AED). Цены ориентировочные — точная стоимость определяется по требованиям проекта.
        </p>
      </section>
    </>
  );
}
