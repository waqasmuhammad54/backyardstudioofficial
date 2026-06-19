import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Спортивный фотограф в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональный спортивный фотограф в Дубае. Съёмка футбола, крикета, тенниса, фитнеса, марафонов и боевых искусств. Лицензия GCAA. От AED 1 500.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/sportivnyi-fotograf-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/sportivnyi-fotograf-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/sports-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Спортивный фотограф в Дубае 2026",
    description: "Фотосъёмка спортивных событий и тренировок в Дубае — футбол, фитнес, марафон, единоборства. Быстрая съёмка, честный динамизм.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SportsPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит спортивный фотограф в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Спортивная фотосессия в Дубае начинается от AED 1 500 за съёмку одного события или матча (3–4 часа, 60–80 обработанных фото). Фотосессия персонального тренера или атлета для портфолио и соцсетей — от AED 1 200 за 2 часа. Съёмка спортивного мероприятия (турнир, забег) — от AED 2 500/день.",
        },
      },
      {
        "@type": "Question",
        name: "Вы снимаете тренировки в залах и фитнес-центрах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Мы снимаем контент для фитнес-брендов, персональных тренеров, кроссфит-залов, студий йоги и боевых искусств. Студийная фитнес-съёмка включает динамичные кадры упражнений, портреты тренеров и lifestyle-контент для Instagram и TikTok.",
        },
      },
      {
        "@type": "Question",
        name: "Вы используете дрон для съёмки спортивных событий?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — наша команда имеет лицензию GCAA для коммерческих полётов в ОАЭ. Дроновая съёмка марафонов, пляжных турниров и открытых стадионов добавляет масштаб и кинематографичность. Уточняйте разрешения по конкретным объектам заранее.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро вы доставляете фото после спортивного события?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стандартный срок — 48–72 часа после съёмки (выбор + обработка). Для срочных событий (пресс, соцсети) мы можем доставить предварительный сет из 15–20 снимков уже в день съёмки.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Спортивный фотограф в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/sportivnyi-fotograf-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Спортивный фотограф в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СПОРТИВНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Спортивный фотограф в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Динамика, сила, настоящий момент</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>⚽</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — спортивная столица Ближнего Востока. Чемпионат по теннису Dubai Duty Free,
          крикетные матчи DSC, гонки Формулы E, марафоны Run Dubai, международные соревнования по
          падел-теннису и ММА — всё это происходит здесь. И всё это требует профессиональной съёмки.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official снимает спорт в Дубае с 2017 года — профессиональные матчи,
          клубные турниры, персональные сессии атлетов и контент для фитнес-брендов. Наши фотографы
          понимают физику спорта и умеют поймать кульминационный момент раньше, чем он случится.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Спорт, который мы снимаем в Дубае
        </h2>

        {[
          { sport: "Футбол и пляжный футбол", detail: "Матчи, тренировки, портреты команд. Стадионы Аль-Макту́ма и крытые манежи ОАЭ." },
          { sport: "Крикет", detail: "ICC Academy Dubai, турниры DSC. Большой аудитория среди южноазиатской общины Дубая." },
          { sport: "Теннис", detail: "Dubai Duty Free Tennis Stadium, частные клубы. Академические и профессиональные матчи." },
          { sport: "Фитнес и кроссфит", detail: "Съёмка тренеров, залов, соревнований. Контент для Instagram и TikTok." },
          { sport: "Марафон и бег", detail: "Dubai Marathon, Run Series, трейлраннинг в горах Хатта. Дроновая съёмка трасс." },
          { sport: "Боевые искусства (BJJ, MMA, бокс)", detail: "Ринг, клетка, спарринги. Съёмка чемпионов и академий." },
        ].map(({ sport, detail }) => (
          <div key={sport} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.2rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.2rem" }}>{sport}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты спортивной съёмки в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Событие / матч", detail: "3–4 часа / 60–80 фото / 48ч доставка", price: "от AED 1 500" },
            { pkg: "Атлет-портфолио", detail: "2 часа / студия + локация / 30–40 фото", price: "от AED 1 200" },
            { pkg: "Турнир (полный день)", detail: "8 часов / 150+ фото / онлайн-галерея", price: "от AED 2 500" },
            { pkg: "Фитнес-контент", detail: "2 часа / 20–25 кадров + 2–3 Reels", price: "от AED 1 800" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Заказать спортивного фотографа в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Свяжитесь с нами — подберём дату, локацию и формат под ваше событие.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
