import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосъёмка товаров в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная предметная и коммерческая фотосъёмка товаров в Дубае — для маркетплейсов, интернет-магазинов, Amazon, Noon, рекламных кампаний. От AED 800.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-tovarov-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-tovarov-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/product-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосъёмка товаров в Дубае 2026",
    description: "Профессиональная предметная съёмка в Дубае для маркетплейсов, интернет-магазинов и рекламных кампаний.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит предметная съёмка товаров в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Предметная съёмка товаров в Дубае начинается от AED 800 за пакет из 10 продуктов на белом фоне. Коммерческая съёмка с образом жизни (lifestyle context) и несколькими фонами — от AED 2 500. Крупные каталоги обсуждаются индивидуально.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы для Amazon и Noon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — мы знаем технические требования этих маркетплейсов: белый фон, минимальный размер изображения, ограничения на текст и логотипы. Доставляем файлы в правильных форматах сразу без доработок.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли привозить товар в студию?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для большинства товаров — да, нужно привезти в наш Дубайскую студию. Для крупногабаритных товаров (мебель, автомобили, оборудование) мы выезжаем на место. Курьерская доставка и самовывоз тоже возможны.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает предметная съёмка?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10 простых товаров на белом фоне — примерно 3–4 часа. Коммерческая съёмка с разными фонами и контекстом — полный рабочий день. Обработка занимает 2–4 рабочих дня, срочная — 24 часа (с доплатой).",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотосъёмка товаров в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-tovarov-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>
          {" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>
          {" / "}
          <span>Предметная съёмка товаров в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ПРЕДМЕТНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосъёмка товаров в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Amazon, Noon, интернет-магазин — ваш продукт в лучшем виде</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>📦</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          В электронной коммерции Дубая и всего ОАЭ фотография товара — это первое, что видит покупатель.
          Размытые или тёмные фото снижают конверсию и увеличивают возврат. Качественная предметная
          съёмка напрямую влияет на продажи.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official работает с брендами в Дубае: от небольших магазинов с 10 SKU до
          крупных дистрибьюторов с тысячами позиций. Мы знаем требования Amazon UAE, Noon, Namshi,
          Ounass и Shopify — снимаем правильно с первого раза.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Форматы предметной съёмки
        </h2>

        {[
          { title: "Белый фон (маркетплейс)", detail: "Стандарт Amazon и Noon — чистый белый, идеальная резкость, без теней. Требования маркетплейсов соблюдаются автоматически." },
          { title: "Lifestyle-съёмка", detail: "Товар в контексте использования — на руках, в интерьере, на природе. Создаёт эмоциональную связь с покупателем." },
          { title: "Студийные флэтлей", detail: "Товар сверху с реквизитом — для Instagram, упаковки и рекламных материалов." },
          { title: "Коммерческая реклама", detail: "Кампании с моделями, локациями и полноценным производством для крупных брендов." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты предметной съёмки в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Стартер (10 SKU)", detail: "Белый фон / 3 угла на товар / обработка 2 дня", price: "от AED 800" },
            { pkg: "Малый бизнес (30 SKU)", detail: "Белый + 1 фон / 3–5 углов / 2 рабочих дня", price: "от AED 2 200" },
            { pkg: "Lifestyle-пакет (20 SKU)", detail: "Контекстная съёмка / соцсети + маркетплейс", price: "от AED 3 500" },
            { pkg: "Крупный каталог (100+ SKU)", detail: "По договорённости / приоритетная обработка", price: "По запросу" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.95rem" }}>{pkg}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.5)", marginTop: "0.2rem" }}>{detail}</div>
              </div>
              <div style={{ color: "var(--gold)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Заказать предметную съёмку в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Пришлите список товаров и платформы — рассчитаем точную стоимость за 2 часа.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
