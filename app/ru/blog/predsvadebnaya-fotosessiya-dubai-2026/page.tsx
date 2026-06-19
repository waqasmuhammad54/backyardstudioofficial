import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Предсвадебная фотосессия в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная предсвадебная (love story) фотосессия в Дубае. Пляж, пустыня, городские локации. Романтичные снимки пары до свадьбы. От AED 1 500.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/predsvadebnaya-fotosessiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/predsvadebnaya-fotosessiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/pre-wedding-shoot-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Предсвадебная фотосессия в Дубае 2026",
    description: "Love story фотосессия в Дубае — пляж, пустыня, Бурдж-Халифа. Романтичные кадры пары. Опытный фотограф. От AED 1 500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PreWeddingRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит предсвадебная фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Предсвадебная фотосессия в Дубае начинается от AED 1 500 (2 часа, 1 локация, 30–40 обработанных снимков). Многолокационная love story с 3 точками съёмки — от AED 2 500 (3–4 часа, 50–70 фото). Съёмка на закате с дроном — от AED 3 000.",
        },
      },
      {
        "@type": "Question",
        name: "Когда и где лучше снимать love story в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лучшее время — золотой час за 1–1,5 часа до заката (октябрь–апрель). Лучшие локации: пустыня Аль-Куудра для драматичных кадров с дюнами, пляж JBR или Ла-Мер для лёгкого морского настроения, Старый Дубай (Аль-Фахиди) для контраста исторической архитектуры, и смотровые площадки с видом на Бурдж-Халифа для иконичного городского фона.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли нам позировать или фотограф всё организует сам?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы даём мягкие направления — движения, взаимодействия, ситуации — но не ставим жёстких поз. Лучшие снимки пар всегда получаются в движении и из живых эмоций. Мы помогаем паре расслабиться и просто быть собой рядом друг с другом.",
        },
      },
      {
        "@type": "Question",
        name: "Можно совместить предсвадебную съёмку с нашим свадебным пакетом?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — и это наш самый популярный формат. Пары, которые заказывают свадебную съёмку, нередко добавляют предсвадебную со скидкой 10–15%. Снимки из love story используются для свадебных приглашений, украшений зала и слайд-шоу на рецепшне.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Предсвадебная фотосессия в Дубае 2026 — love story с видом на закат",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/predsvadebnaya-fotosessiya-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Предсвадебная фотосессия в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          LOVE STORY / ПРЕДСВАДЕБНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Предсвадебная фотосессия в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Love Story с видом на золотой закат</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>5 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>💑</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Предсвадебная фотосессия в Дубае — это не просто красивые снимки пары. Это возможность
          познакомиться с фотографом до свадьбы, расслабиться перед камерой и создать образы, которые
          будут жить на ваших свадебных приглашениях, в украшениях зала и в памяти навсегда.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Дубай — один из лучших городов мира для love story съёмки. Золотые дюны пустыни,
          бирюзовое море, современная архитектура и тёплый закатный свет с октября по апрель
          создают условия, которых просто нет в большинстве других городов.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Лучшие локации для love story в Дубае
        </h2>

        {[
          { loc: "Пустыня Аль-Куудра", desc: "Бесконечные дюны, тишина и золотой закат. Дроновая съёмка с высоты открывает масштаб и красоту пейзажа. Самая кинематографичная локация." },
          { loc: "Пляж JBR / Ла-Мер", desc: "Морской горизонт, мягкий песок, городской skyline на горизонте. Лёгкое, летнее настроение." },
          { loc: "Старый Дубай (Аль-Фахиди)", desc: "Традиционная арабская архитектура, деревянные абры на Дубай-Крик. Золотой час делает эти улочки волшебными." },
          { loc: "Даун-таун и Бурдж-Халифа", desc: "Иконичный небоскрёб, фонтаны, зеркальные фасады. Фото с Бурдж-Халифой в кадре — узнаваемая дубайская open-air локация." },
        ].map(({ loc, desc }) => (
          <div key={loc} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{loc}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты предсвадебной съёмки в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Мини-сессия", detail: "2 ч / 1 локация / 30–40 фото", price: "от AED 1 500" },
            { pkg: "Стандарт", detail: "3 ч / 2 локации / 50–60 фото", price: "от AED 2 200" },
            { pkg: "Полный день", detail: "4–5 ч / 3 локации + закат / 70–90 фото", price: "от AED 3 000" },
            { pkg: "С дроном", detail: "Добавляется к любому пакету", price: "+AED 800" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Заказать предсвадебную съёмку в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Пишите нам — поможем выбрать локацию и время для вашего идеального заката.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
