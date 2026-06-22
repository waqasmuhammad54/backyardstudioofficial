import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосъёмка личного бренда в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональные фото для личного бренда в Дубае — предприниматели, коучи, спикеры, фрилансеры. Портреты, которые создают доверие и отражают вашу личность. От AED 1 500.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/personal-brending-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/personal-brending-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/personal-branding-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосъёмка личного бренда в Дубае 2026",
    description: "Фотосъёмка для личного бренда в Дубае — создаём визуальный образ, который продаёт и вызывает доверие.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PersonalBrandingRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое фотосъёмка для личного бренда?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Это профессиональная фотосессия, которая создаёт визуальный образ вашего личного бренда — показывает вас как эксперта, человека и личность. В отличие от обычного портрета, personal branding photography рассказывает историю: кто вы, что вы делаете, каким людям помогаете.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит фотосессия для личного бренда в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосессия личного бренда в Дубае начинается от AED 1 500 за 2-часовую сессию с 30 обработанными фотографиями. Полный пакет с несколькими образами, локациями и видео-контентом — от AED 4 500.",
        },
      },
      {
        "@type": "Question",
        name: "Кому нужна съёмка личного бренда в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Предпринимателям, коучам, консультантам, спикерам, врачам, юристам, фрилансерам, авторам курсов и всем, кто строит профессиональный образ онлайн. В ОАЭ сильная конкуренция — качественный визуал отличает от сотен других специалистов.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли готовиться к съёмке личного бренда?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — мы проводим 30-минутный бриф перед съёмкой: обсуждаем вашу аудиторию, ценности бренда, ключевые образы, платформы, для которых нужен контент. Это позволяет сделать съёмку целенаправленной, а не просто красивой.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотосъёмка личного бренда в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/personal-brending-fotografiya-dubai-2026",
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
          <span>Личный бренд: фотосъёмка в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ЛИЧНЫЙ БРЕНД
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосъёмка личного бренда в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Визуальный образ, который продаёт и вызывает доверие</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="Personal Branding Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          В Дубае конкуренция среди профессионалов высока как нигде. Люди смотрят на ваш LinkedIn,
          Instagram, сайт — и за несколько секунд решают, хотят ли они с вами работать. Качественные
          фото личного бренда часто имеют большее значение, чем ваше резюме.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official специализируется на съёмке личного бренда для профессионалов,
          живущих и работающих в ОАЭ. Мы понимаем деловую культуру Дубая и создаём образы, которые
          работают на международную аудиторию — выглядят профессионально в любой культурной среде.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что входит в съёмку личного бренда
        </h2>

        {[
          { title: "Профессиональные портреты", detail: "Деловые и полу-официальные образы для LinkedIn, биографии на сайте, выступлений и медиа." },
          { title: "Образ в работе (in-action shots)", detail: "Вы за ноутбуком на встрече, во время консультации, на фоне офиса или локации вашего бизнеса." },
          { title: "Детали и окружение", detail: "Рабочий стол, инструменты, пространство — всё, что говорит о вашей работе без слов." },
          { title: "Контент для соцсетей", detail: "Вертикальные форматы для Stories, квадраты для ленты, варианты для разных платформ." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосъёмки личного бренда в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Стартер", detail: "2 часа / 1 образ / 30 фото + бриф", price: "от AED 1 500" },
            { pkg: "Профессионал", detail: "4 часа / 2 образа / 60 фото + ролик", price: "от AED 3 000" },
            { pkg: "Полный бренд", detail: "8 часов / 4 образа / 150 фото + 3 видео", price: "от AED 5 500" },
            { pkg: "Ежеквартальный контент", detail: "Съёмка раз в квартал / постоянный контент-банк", price: "от AED 4 000 / раз" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Создайте образ личного бренда в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Напишите нам — начнём с бесплатного брифа и подбора концепции.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
