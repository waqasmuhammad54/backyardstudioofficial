import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на видеосъёмку в Дубае 2026 | Backyard Studio Official",
  description: "Цены на видеосъёмку в Дубае 2026: свадьбы от 3 500 AED, корпоративное видео от 15 000 AED, мероприятия от 3 500 AED, аэросъёмка от 2 000 AED. Бесплатная оценка за 2 часа.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "Цены на видеосъёмку в Дубае 2026 — Backyard Studio Official",
    description: "Свадьбы от 3 500 AED · корпоративное видео от 15 000 AED · аэросъёмка от 2 000 AED. Бесплатная оценка.",
    url: "https://www.backyardstudioofficial.com/ru/pricing",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Цены на видеосъёмку — Backyard Studio Official Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Цены на видеосъёмку в Дубае 2026",
    description: "Свадьбы 3 500 AED · корпоративное видео 15 000 AED · аэросъёмка 2 000 AED.",
    images: ["/og-image.jpg"],
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Цены", "item": "https://www.backyardstudioofficial.com/ru/pricing" },
        ],
      }) }} />

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

      {/* Transparency */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>Прозрачность цен — никаких скрытых платежей</h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Наш принцип: полная прозрачность на каждом этапе. После получения запроса мы высылаем детализированную смету в течение 2 часов — с разбивкой по каждой статье расходов: съёмочная группа, оборудование, часы работы, постпродакшн и выезд при необходимости. Никаких сюрпризов после подписания договора.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Указанные выше цены — стартовые ориентиры. Простые проекты (съёмка одного продукта, Reels на одной локации) могут быть ниже минимальной цены. Сложные проекты (многолокационный брендовый фильм с кастингом и аэросъёмкой) выйдут выше. Эти цифры нужны для общего понимания бюджета до первого контакта с нами.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            Стандартный пакет включает: полный съёмочный день, профессиональную команду, оборудование (камеры, свет, звук), монтаж и цветокоррекцию, финальные файлы в нескольких форматах и полные коммерческие права на цифровое использование контента. Права для телевещания и платной рекламы оговариваются отдельно.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>Вопросы о ценах</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "Предоставляете ли вы бесплатную смету?",
                a: "Да. Мы готовим подробную бесплатную смету в течение 2 часов с момента получения запроса, 7 дней в неделю. Смета включает полную разбивку по каждому пункту проекта. Для связи: info@backyardstudioofficial.com или WhatsApp +971 58 588 2685.",
              },
              {
                q: "Что входит в пакет свадебной съёмки?",
                a: "Базовый пакет свадебной съёмки (от 3 500 AED) включает: полный съёмочный день с фотографом и видеографом, хайлайт-видео 3-5 минут в течение 48 часов, полный фотоальбом с обработкой в течение двух недель. Расширенные пакеты включают предсвадебную съёмку, аэросъёмку дроном и съёмку на несколько дней.",
              },
              {
                q: "Отличается ли стоимость корпоративного видео в зависимости от компании?",
                a: "Да. Цена формируется исходя из хронометража, количества локаций, необходимости кастинга, аэросъёмки и сложности постпродакшна. Корпоративный фильм с одним интервью на одной локации принципиально отличается по стоимости от рекламного ролика с несколькими площадками и полноценным кастингом.",
              },
              {
                q: "Возможна ли оплата в рассрочку?",
                a: "Да. Для проектов от 10 000 AED возможна оплата двумя частями: 50% при подписании договора, 50% при передаче финальных файлов. Для крупных проектов (сезонные свадьбы, длительные производственные кампании) возможен индивидуальный график оплаты в соответствии со сроками проекта.",
              },
            ].map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
