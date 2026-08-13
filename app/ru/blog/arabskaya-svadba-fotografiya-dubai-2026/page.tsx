import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Арабская свадьба фотосъёмка в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосъёмка арабских свадеб в Дубае — вечер хны, мужской маджлис, женский зал. Культурная экспертиза и деликатный подход. От AED 6 000.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/arabskaya-svadba-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/arabskaya-svadba-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/arabic-wedding-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Арабская свадьба фотосъёмка в Дубае 2026",
    description: "Фотосъёмка арабской свадьбы в Дубае с полным пониманием культурных традиций и деликатных требований.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ArabicWeddingPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка арабской свадьбы в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосъёмка арабской свадьбы в Дубае начинается от AED 6 000 за одно торжество (1 фотограф или 1 фотограф, 6 часов). Комплексный пакет с покрытием мужского и женского залов — от AED 12 000.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы раздельные мужской и женский залы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, это наш стандартный подход для арабских свадеб с раздельными торжествами. У нас есть как фотографы-мужчины для мужского маджлиса, так и фотографы-женщины для женского зала, что обеспечивает полное покрытие обоих мероприятий.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы вечер хны и традиционные церемонии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — вечер хны, мужской маджлис, основное торжество и валима. Каждый этап документируется в стиле, соответствующем атмосфере — от интимных домашних моментов до торжественных банкетных залов.",
        },
      },
      {
        "@type": "Question",
        name: "Используете ли вы дрон на арабских свадьбах в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
 text: "Да, при наличии разрешения от площадки. Аэросъёмка выполняется по действующей лицензии и заранее координируем всё с администрацией отеля или зала. Аэросъёмка добавляет элегантность и масштаб свадебным кадрам.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Арабская свадьба фотосъёмка в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/arabskaya-svadba-fotografiya-dubai-2026",
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
          <span>Фотосъёмка арабской свадьбы в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СВАДЕБНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Арабская свадьба: фотосъёмка в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Культурная деликатность и профессиональное качество</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" alt="Arabic Wedding Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Арабская свадьба в Дубае объединяет богатые культурные традиции с современной роскошью.
          Раздельные торжества для мужчин и женщин, традиционные ритуалы хны, величественный выход
          невесты — каждый момент несёт глубокий смысл, требующий фотографа с культурной грамотностью.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official работала на десятках эмиратских и арабских свадеб в роскошных отелях
          Дубая. Мы понимаем требования раздельных торжеств, уважаем культурные нормы и обеспечиваем
          профессиональное покрытие обоих залов.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что включает наша съёмка арабской свадьбы
        </h2>

        {[
          { title: "Вечер хны (Лейлат аль-Хинна)", detail: "Тёплая, интимная атмосфера — нанесение хны, семейные перфомансы, традиционные костюмы." },
          { title: "Мужской маджлис", detail: "Наш фотограф документирует встречу гостей, поздравления и традиционные обряды." },
          { title: "Женский зал", detail: "Наша фотограф-женщина снимает выход невесты, танцы, наряды и семейные портреты." },
          { title: "Валима и семейные фото", detail: "Документирование банкета и создание официальных семейных портретов для обеих семей." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосъёмки арабской свадьбы в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Один зал", detail: "1 фотограф / 6 часов", price: "от AED 6 000" },
            { pkg: "Оба зала (муж. + жен.)", detail: "Фотограф + Фотограф-женщина / 10 часов", price: "от AED 12 000" },
            { pkg: "Хна + Свадьба", detail: "Полное покрытие / 2 дня", price: "от AED 20 000" },
            { pkg: "Премиум с видео и дроном", detail: "Фото + видео + дрон + фотокнига", price: "от AED 35 000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать фотографа на арабскую свадьбу в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Свяжитесь с нами для обсуждения деталей — ответим в течение 2 часов.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
