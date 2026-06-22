import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосессия новорождённых в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосессия новорождённого в Дубае от AED 1 200. Первые 14 дней жизни, безопасная студия, тёплая атмосфера. Бронируйте заранее.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotosessiya-novorozhdennykh-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotosessiya-novorozhdennykh-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/newborn-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосессия новорождённых в Дубае 2026 | Backyard Studio",
    description: "Сохраните первые дни малыша. Специализированная съёмка новорождённых в Дубае.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NewbornSessionRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Когда нужно бронировать фотосессию новорождённого в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Бронируйте за 2 месяца до предполагаемой даты родов. Идеальное время для съёмки — первые 5–14 дней жизни малыша. В этот период новорождённый крепко спит и принимает характерные позы, которые невозможно воссоздать позже.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит фотосессия новорождённого в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Базовая сессия новорождённого в Дубае начинается от AED 1 200 — 2 часа, 15 обработанных снимков, реквизит студии. Полная сессия с семейными снимками — от AED 1 800.",
        },
      },
      {
        "@type": "Question",
        name: "Это безопасно для новорождённого?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Безопасность — наш приоритет номер один. Мы поддерживаем комфортную температуру в студии, не помещаем малыша в опасные позы, и всегда останавливаемся, если ребёнок проявляет дискомфорт. Ни одна поза не выполняется без уверенности в полной безопасности.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько длится сессия новорождённого?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "От 2 до 4 часов — в зависимости от потребностей малыша. Мы не торопимся. Если нужно кормление, пауза, смена подгузника — берём паузу и продолжаем, когда малыш готов.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Фотосессия новорождённых в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СЪЁМКА НОВОРОЖДЁННЫХ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосессия новорождённых в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Первые дни жизни — навсегда в кадре</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=1200&q=80" alt="Newborn Photography Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Пальчики размером с ноготь. Носик, который ещё не знает Дубая. Способность сворачиваться
          клубком, которая исчезнет через несколько недель. Первые дни новорождённого — это окно,
          которое закрывается очень быстро. Профессиональная фотосессия сохраняет его навсегда.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы специализируемся на съёмке новорождённых в безопасной, тёплой
          атмосфере. Работаем медленно, в ритме малыша, и никогда не торопимся ради кадра.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Почему первые 14 дней?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          В первые две недели жизни новорождённые проводят большую часть времени в глубоком
          сне — это позволяет снять знаменитые позы: свёрнутый в корзинке, лежащий на ладони,
          обёрнутый в ткань. После трёх недель малыш становится активнее и такие позы уже
          недоступны.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Мы рекомендуем бронировать сессию во втором триместре беременности — ещё до рождения
          ребёнка — чтобы гарантировать нужную дату.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что входит в сессию новорождённого?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Сначала снимаем малыша одного — разные позы, разный реквизит (корзинки, обёртки,
          шапочки). Затем семейные снимки: с мамой, с папой, вместе. Отдельно крупным планом:
          ручки, ножки, профиль.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          В нашей студии есть коллекция пледов, шапочек и корзинок в нейтральных теплых тонах.
          Всё продезинфицировано и стирается перед каждой сессией.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Базовая сессия", detail: "2 часа / 15 снимков / реквизит студии", price: "от AED 1 200" },
            { pkg: "Полная сессия", detail: "3 часа / 25 снимков / семейные снимки", price: "от AED 1 800" },
            { pkg: "Беременность + малыш", detail: "матернити + новорождённый со скидкой", price: "от AED 2 500" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать съёмку новорождённого</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Лучше бронировать за 2 месяца до родов — места расходятся быстро.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
