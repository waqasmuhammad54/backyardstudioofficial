import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Детский фотограф в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональный детский фотограф в Дубае. Фотосессии новорождённых, малышей, дошкольников и школьников — в студии и на природе. От AED 800.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/detskiy-fotograf-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/detskiy-fotograf-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/kids-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Детский фотограф в Дубае 2026",
    description: "Детская фотосессия в Дубае — студия, пляж, парк. Опытный фотограф, умеющий работать с детьми любого возраста.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function KidsPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит детский фотограф в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Детская фотосессия в Дубае начинается от AED 800 за студийную съёмку (1–1,5 часа, 20–25 обработанных снимков). Выездная сессия в парке или на пляже — от AED 1 200. Семейная съёмка с детьми — от AED 1 500.",
        },
      },
      {
        "@type": "Question",
        name: "В каком возрасте лучше всего делать детскую фотосессию?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Каждый возраст даёт свои особые кадры. Новорождённые (первые 2 недели) — свернувшиеся позы и сон. 3–6 месяцев — первые улыбки. 9–12 месяцев — сидение и ползание. Годик — уже можно поставить на ножки. Мы рекомендуем снимать каждый год — дети меняются невероятно быстро.",
        },
      },
      {
        "@type": "Question",
        name: "Умеет ли ваш фотограф работать с непоседами и капризными детьми?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — работа с детьми это отдельный профессиональный навык. Наши детские фотографы умеют устанавливать контакт, превращать съёмку в игру, работать в ритме ребёнка и терпеливо ждать момента. Мы никогда не торопим детей — и именно поэтому получаем настоящие, живые кадры.",
        },
      },
      {
        "@type": "Question",
        name: "Где лучше фотографировать детей в Дубае — в студии или на природе?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Зависит от возраста и характера ребёнка. Студия даёт чистый белый или нейтральный фон, управляемый свет и предсказуемую среду. Природа — пляжи JBR, парки Jumeirah, сады — даёт живые, воздушные кадры. Малышам до 1 года удобнее в студии, дошкольники и школьники прекрасно снимаются на улице.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Детский фотограф в Дубае 2026 — как выбрать и что подготовить",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/detskiy-fotograf-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Детский фотограф в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ДЕТСКАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Детский фотограф в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Живые, настоящие, незабываемые кадры</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🧒</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дети растут быстро. Тот пухлый малыш, который сегодня не умеет сидеть, через год пойдёт
          в школу. Профессиональная детская фотосессия — это не просто красивые снимки. Это воспоминания,
          которые вы будете пересматривать десятилетиями.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official работает с детьми всех возрастов в Дубае — от новорождённых до
          школьников. Наши фотографы умеют создать атмосферу, в которой ребёнок расслабляется и
          открывается — и тогда получаются по-настоящему живые кадры.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Особенности детской съёмки в Дубае
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Дубайский климат диктует лучшее время для съёмки на улице — ранее утро (7:00–9:00) или
          вечер (после 17:00) с октября по апрель. Летом мы снимаем в кондиционируемой студии
          или в крытых зелёных зонах, таких как Miracle Garden или торговые центры.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Детская фотосессия должна быть игрой, а не работой. Мы приносим мыльные пузыри, воздушные
          шары, простые игрушки — не для отвлечения, а чтобы ребёнок забыл про камеру и просто был собой.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Среднее время съёмки с детьми до 5 лет — 45–60 минут (дальше они устают). Для дошкольников
          и школьников — до 90 минут. Мы не торопим и не давим. Лучшие кадры всегда получаются между
          постановочными.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты детской фотосессии в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студийная мини-сессия", detail: "45 мин / 15–20 фото", price: "от AED 800" },
            { pkg: "Студийная полная", detail: "90 мин / 25–35 фото", price: "от AED 1 200" },
            { pkg: "Выездная (парк / пляж)", detail: "90 мин / 30–40 фото", price: "от AED 1 400" },
            { pkg: "Семейная с детьми", detail: "2 часа / 40–50 фото", price: "от AED 1 800" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на детскую фотосессию в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Напишите нам — подберём удобное время и локацию.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
