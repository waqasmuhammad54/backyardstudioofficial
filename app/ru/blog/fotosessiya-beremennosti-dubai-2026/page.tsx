import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосессия беременности в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосессия беременности в Дубае. Нежные, художественные снимки в студии и на природе. Оптимальное время — 30–34 недели. От AED 1 200.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotosessiya-beremennosti-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotosessiya-beremennosti-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/pregnancy-photoshoot-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосессия беременности в Дубае 2026",
    description: "Нежная и художественная фотосессия беременности в Дубае. Студия, пляж, пустыня. Опытный фотограф, чуткий подход.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PregnancyPhotoshootRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Когда лучше делать фотосессию беременности?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Идеальное время — 30–34 недели беременности. Живот уже хорошо виден и красиво выглядит на фото, при этом женщина ещё чувствует себя комфортно и подвижно. После 36 недель съёмка становится менее удобной, и мы рекомендуем бронировать сессию заранее.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит фотосессия беременности в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Студийная фотосессия беременности начинается от AED 1 200 (1,5 часа, 25–30 обработанных снимков). Выездная сессия на пляже или в пустыне — от AED 1 600. Сессия с партнёром — плюс AED 300. Дополнительные образы (смена нарядов) — от AED 200 за образ.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли что-то готовить к фотосессии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы отправляем подготовительный гайд после бронирования. Основные советы: планируйте кожный уход и педикюр за 1–2 дня до съёмки, возьмите 2–3 образа на выбор (лёгкое платье, что-то с голым животом и что-то уютное), хорошо отдохните накануне. Украшения, цветы и реквизит мы можем подготовить в студии.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снять совместную сессию с партнёром и уже родившимися детьми?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, это один из наших любимых форматов. Семейная сессия беременности — когда в кадре и будущая мама, и папа, и старшие дети — получается особенно трогательной. Рекомендуем выделять на такую сессию 2 часа.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотосессия беременности в Дубае 2026 — нежно, художественно, незабываемо",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotosessiya-beremennosti-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Фотосессия беременности в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ФОТОСЕССИЯ БЕРЕМЕННОСТИ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосессия беременности в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Нежно. Художественно. Навсегда.</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>5 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🤱</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Беременность — один из самых коротких и самых прекрасных периодов жизни. Девять месяцев
          проходят быстро, и у многих женщин почти не остаётся профессиональных снимков этого времени.
          Фотосессия беременности — это подарок себе и вашему ребёнку, который он будет рассматривать спустя годы.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы создаём съёмки беременности, которые отражают вашу красоту, вашу
          личность и волнение этого момента — без навязанных поз и искусственных улыбок. Мягко,
          настоящо, для вас.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Где снимать в Дубае
        </h2>

        <p style={{ marginBottom: "1.2rem" }}>
          <strong style={{ color: "var(--cream)" }}>Студия</strong> — идеально для художественных,
          минималистичных образов с профессиональным светом. Подчёркивает форму тела и детали.
          Работаем с белым, бежевым и тёмным фонами в зависимости от желаемого настроения.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          <strong style={{ color: "var(--cream)" }}>Пляж JBR / Джумейра</strong> — лёгкий воздух,
          морской горизонт, золотой час. Один из самых популярных вариантов для свежих, светлых снимков.
          Снимаем рано утром (7:00–9:00) или за час до заката.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          <strong style={{ color: "var(--cream)" }}>Пустыня Аль-Куудра</strong> — песчаные дюны
          и золотой закат дают по-настоящему кинематографичный результат. Сессия планируется под
          "золотой час" — 17:30–19:00 с октября по апрель.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосессии беременности в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студийная", detail: "1,5 ч / 1 образ / 25–30 фото", price: "от AED 1 200" },
            { pkg: "Студийная расширенная", detail: "2,5 ч / 2 образа / 40–50 фото", price: "от AED 1 800" },
            { pkg: "Выездная (пляж / пустыня)", detail: "2 ч / 1–2 образа / 35–45 фото", price: "от AED 1 600" },
            { pkg: "Семейная (с партнёром)", detail: "+ AED 300 к любому пакету", price: "" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.95rem" }}>{pkg}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.5)", marginTop: "0.2rem" }}>{detail}</div>
              </div>
              {price && <div style={{ color: "var(--gold)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>}
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на фотосессию беременности в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Пишите нам — подберём время, которое подходит вам и вашему сроку.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
