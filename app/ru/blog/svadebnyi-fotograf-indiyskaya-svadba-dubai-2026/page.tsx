import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотограф на индийскую свадьбу в Дубае 2026 | Backyard Studio",
  description:
    "Фотограф и видеограф на индийскую свадьбу в Дубае. Мехенди, сангит, бараат, никах, рецепшн — полное сопровождение многодневного торжества. От AED 5 000.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-indiyskaya-svadba-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-indiyskaya-svadba-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/indian-wedding-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотограф на индийскую свадьбу в Дубае 2026",
    description:
      "Как выбрать фотографа на индийскую свадьбу в Дубае — цены, пакеты, мехенди и бараат. Опыт съёмки 250+ индийских торжеств.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function IndianWeddingRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотограф на индийскую свадьбу в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Базовый пакет на один день индийской свадьбы начинается от AED 5 000 (1 фотограф, 8–10 часов). Полный пакет на 2–3 дня (мехенди + сангит + церемония + рецепшн) с двумя фотографами и видеографом — от AED 18 000 до AED 40 000.",
        },
      },
      {
        "@type": "Question",
        name: "Вы снимаете все события многодневной индийской свадьбы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Мы снимаем полный цикл: мехенди (нанесение хны), халди (куркумный ритуал), сангит (вечер музыки и танцев), бараат (процессия жениха), никах или церемонию, свадебный рецепшн. Каждый формат требует отдельного подхода, и наша команда знает визуальный язык каждой традиции.",
        },
      },
      {
        "@type": "Question",
        name: "Нужен ли отдельный видеограф или можно объединить с фотографом?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для индийских свадеб настоятельно рекомендуем отдельные команды фото и видео — особенно на многодневных торжествах. Событий слишком много, чтобы один человек успевал снимать и фото, и видео. Мы предлагаем объединённые пакеты с отдельными специалистами.",
        },
      },
      {
        "@type": "Question",
        name: "Умеет ли ваша команда снимать бараат и процессии в движении?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — бараат (процессия жениха с танцами, музыкой и ДиДжеем) это один из сложнейших форматов для съёмки. Мы используем стабилизаторы и дроны, снимаем в ночных условиях и умеем работать в толпе, не мешая гостям. Дрон-съёмка барааттной процессии — наш фирменный элемент.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотограф на индийскую свадьбу в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-indiyskaya-svadba-dubai-2026",
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
          <span>Фотограф на индийскую свадьбу в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СВАДЕБНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотограф на индийскую свадьбу в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Мехенди, бараат, рецепшн — полное сопровождение</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>💍</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Индийская свадьба в Дубае — это не одно событие. Это 2–4 дня торжеств, каждый из которых требует
          отдельной съёмки, отдельного опыта и понимания культурного контекста. Мехенди, сангит, бараат,
          никах или ведийская церемония, свадебный рецепшн — у каждого события свой визуальный язык и свои
          ключевые моменты, которые нельзя пропустить.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official сняла более 300 индийских свадеб в ОАЭ — от скромных никахов в Аджмане
          до трёхдневных торжеств на 800 гостей в пятизвёздочных отелях Дубая. Этот гид объясняет, как
          выбрать правильного фотографа и что нужно обсудить до бронирования.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Почему индийская свадьба — особый вызов для фотографа
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Индийская свадьба — одно из самых визуально насыщенных событий в мире. Яркие цвета нарядов,
          обилие золота и украшений, танцы и живая музыка, дым от цветочных петард, движение сотен гостей —
          всё это одновременно. Фотограф без опыта индийских свадеб теряется в этом хаосе.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Профессиональная команда заранее знает: в какой момент жених войдёт в зал, где встанет
          невеста, когда начнётся обмен гирляндами (jai mala), куда лучше встать, чтобы поймать
          реакцию семьи. Это опыт, который нельзя заменить дорогим оборудованием.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Дубайский рынок индийских свадеб — один из самых конкурентных в мире. Это означает, что
          лучшие фотографы заняты на 8–12 месяцев вперёд. Бронировать нужно заранее.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Ключевые события и как мы их снимаем
        </h2>

        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Мехенди (Mehndi Night)
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Вечер мехенди — это интимный, тёплый семейный праздник с нанесением хны, музыкой и танцами.
          Мы снимаем руки невесты крупным планом в процессе нанесения, реакцию семьи, танцевальные
          перфомансы и детали декора — всё при естественном освещении или мягком студийном свете.
        </p>

        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Бараат (Baraat)
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Процессия жениха — самый динамичный момент всей свадьбы. Мы снимаем бараат с гимбалом
          для плавного движения, снимаем с дрона (с лицензией GCAA) для масштабных кадров колонны,
          и работаем с задней вспышкой для профессиональных ночных портретов жениха на лошади или в машине.
        </p>

        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Церемония и рецепшн
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          На церемонии мы работаем двумя камерами минимум — одна на широком плане, вторая на деталях
          и реакции. На рецепшне мы фотографируем и первые танцы, и выступления артистов, и столы с
          едой, и семейные портреты — без пропусков.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты на индийскую свадьбу в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "День 1 (Мехенди / Сангит)", detail: "1 фотограф / 6 часов", price: "от AED 5 000" },
            { pkg: "День 2 (Бараат + Никах)", detail: "2 фотографа / 10 часов", price: "от AED 9 000" },
            { pkg: "Полный пакет (3 дня)", detail: "Фото + видео / 2 фотографа + видеограф", price: "от AED 18 000" },
            { pkg: "Премиум (3–4 дня)", detail: "Дрон + синемавидео + фотокнига", price: "от AED 30 000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать фотографа на индийскую свадьбу в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Популярные даты расходятся за 8–12 месяцев. Свяжитесь с нами сейчас.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
