import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фудфотография в Дубае 2026 — для ресторанов и брендов",
  description:
    "Профессиональная съёмка еды в Дубае от AED 1 500. Меню, соцсети, Talabat/Deliveroo, рекламные кампании. Backyard Studio — фудфотограф с доставкой за 48 часов.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-edy-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-edy-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фудфотография в Дубае 2026 | Backyard Studio",
    description: "Меню, Talabat, Instagram — профессиональная съёмка еды в Дубае от AED 1 500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FoodPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка меню ресторана в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость фотосъёмки меню ресторана в Дубае начинается от AED 1 500 за полдня (15–25 блюд). Полная съёмка меню из 40–60 позиций обходится от AED 3 500 до AED 6 000 в зависимости от стиля, реквизита и количества сетапов.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли привозить реквизит для фудфотографии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет — у нас есть собственный реквизит: фоны, текстильные поверхности, посуда, столовые приборы, декоративные элементы. Перед съёмкой мы обсуждаем желаемый стиль и брендинг, чтобы реквизит соответствовал вашей концепции. Вы приносите только блюда.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы контент для Talabat и Deliveroo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Мы специализируемся на съёмке для платформ доставки еды — Talabat, Deliveroo и Noon Food. Наши фотографии соответствуют техническим требованиям этих платформ по размеру, фону и соотношению сторон, а также оптимизированы для конверсии на мобильных устройствах.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро вы доставляете готовые фотографии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стандартные сроки — 48 часов для пакетов до 30 изображений. Для крупных съёмок меню (60+ позиций) — 3–4 рабочих дня. Экспресс-доставка за 24 часа доступна за дополнительную плату.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фудфотография в Дубае 2026 — для ресторанов и брендов",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Ведущий фотограф — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-edy-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a> / <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a> / <span>Фотосъёмка еды</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ФУДФОТОГРАФИЯ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          Фудфотография в Дубае 2026
          <br /><span style={{ color: "var(--gold)" }}>Снимаем еду, которую хочется заказать</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Fahad Iqbal Butt</span><span>Июнь 2026</span><span>7 мин. чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🍽️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — город, где ресторанный рынок один из самых конкурентных в мире. Только на Talabat представлены тысячи заведений. Разница между рестораном, который стоит в очереди, и тем, который пустует, часто начинается с одного: как выглядит еда на фотографии.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Плохая фотография еды — это не просто эстетическая проблема. Это прямые потери конверсии. По данным платформ доставки, рестораны с профессиональными фотографиями блюд получают на 25–40% больше заказов, чем заведения с любительскими снимками или без фото вовсе. В Backyard Studio мы снимаем еду так, чтобы зритель уже на этапе просмотра чувствовал запах и вкус.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Для кого мы снимаем
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {[
            { client: "Рестораны и кафе", detail: "Полная съёмка меню, обновление сезонных позиций, фотографии для аккаунтов соцсетей" },
            { client: "Платформы доставки", detail: "Оптимизированные фото для Talabat, Deliveroo, Noon Food — правильные форматы, белый или нейтральный фон" },
            { client: "Food-бренды и FMCG", detail: "Продуктовые съёмки для упаковки, рекламы, e-commerce и каталогов" },
            { client: "Отели и F&B-концепции", detail: "Ресторанный контент для гостиничных сайтов, брошюр и рекламных кампаний" },
            { client: "Кондитерские и пекарни", detail: "Десерты, торты, выпечка — съёмка с акцентом на текстуру и детали" },
          ].map(({ client, detail }) => (
            <div key={client} style={{ padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderLeft: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{client}</div>
              <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Стили фудфотографии, которые мы предлагаем
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { style: "Clean & Minimal", desc: "Белый или светлый фон, чистые линии — идеально для Talabat и доставки" },
            { style: "Editorial Dark", desc: "Тёмный фон, драматическое освещение — для премиальных ресторанов и инстаграм-контента" },
            { style: "Lifestyle & Context", desc: "Блюдо в контексте стола, рук, окружения — живая атмосфера заведения" },
            { style: "Overhead / Flatlay", desc: "Съёмка сверху — эффективно для пиццы, боулов, плато с закусками" },
          ].map(({ style, desc }) => (
            <div key={style} style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "4px" }}>
              <div style={{ fontWeight: 700, color: "var(--gold)", marginBottom: "0.4rem" }}>{style}</div>
              <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          Цены на фудфотографию в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "Стартовый", detail: "Полдня / 15–25 блюд / 1 стиль съёмки", price: "AED 1 500 – 2 500" },
              { pkg: "Меню", detail: "Полный день / 40–60 блюд / 2 стиля / реквизит", price: "AED 3 500 – 6 000" },
              { pkg: "Ежемесячный", detail: "2 сессии/мес / сезонные обновления / соцсети", price: "AED 4 500/мес" },
              { pkg: "Бренд-кампания", detail: "Съёмка для рекламы / несколько сетапов / видео + фото", price: "AED 8 000+" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "right" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>Частые вопросы</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит съёмка меню ресторана в Дубае?", a: "От AED 1 500 за полдня (15–25 блюд). Полное меню из 40–60 позиций — от AED 3 500." },
            { q: "Нужно ли привозить реквизит?", a: "Нет, у нас есть собственный реквизит. Вы приносите только блюда." },
            { q: "Снимаете ли для Talabat и Deliveroo?", a: "Да, наши фото соответствуют техническим требованиям всех крупных платформ доставки в Дубае." },
            { q: "Сроки доставки?", a: "48 часов для пакетов до 30 изображений. Экспресс — 24 часа за доп. плату." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>Нужна съёмка еды в Дубае?</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>Напишите нам — бесплатная консультация и расчёт стоимости в тот же день.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp</a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>Цены</a>
          </div>
        </div>
      </article>
    </>
  );
}
