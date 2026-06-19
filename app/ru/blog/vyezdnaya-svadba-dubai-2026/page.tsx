import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выездная свадьба в Дубае 2026 — фотосъёмка | Backyard Studio",
  description:
    "Фотосъёмка выездных свадеб (destination wedding) в Дубае — роскошные отели, Бурдж-Халифа, Пальма, пустыня. Незабываемые кадры для вашего особенного дня. От AED 8 000.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/vyezdnaya-svadba-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/vyezdnaya-svadba-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/destination-wedding-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Выездная свадьба в Дубае 2026 — фотосъёмка",
    description: "Проведите свадьбу в Дубае и получите снимки, которые невозможно сделать нигде больше в мире.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function DestinationWeddingRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Почему Дубай — идеальное место для выездной свадьбы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Дубай предлагает уникальное сочетание: роскошные отели мирового уровня, идеальный климат с октября по март, легкая доступность из любой точки мира, иконические локации (Бурдж-Халифа, Пальма, пустыня) и развитая свадебная индустрия. Визовая доступность для большинства стран — дополнительный плюс.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка выездной свадьбы в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосъёмка выездной свадьбы в Дубае начинается от AED 8 000 за один день (1 фотограф, 10 часов). Премиум-пакет с двумя фотографами, видеографом и дроном — от AED 25 000.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снимать свадьбу у Бурдж-Халифы или на Пальме?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы регулярно снимаем на этих локациях. Некоторые точки требуют разрешений, которые мы заранее организуем. Золотой час у Бурдж-Халифы — это кадры, которые невозможно забыть.",
        },
      },
      {
        "@type": "Question",
        name: "Помогаете ли вы с выбором локаций для свадьбы в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — мы знаем все лучшие точки съёмки в Дубае для разного времени суток и разных стилей. После первого разговора мы пришлём подборку локаций с фотографиями и объяснением, почему они подойдут именно вашей свадьбе.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Выездная свадьба в Дубае 2026 — фотосъёмка и локации",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/vyezdnaya-svadba-dubai-2026",
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
          <span>Выездная свадьба в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ВЫЕЗДНАЯ СВАДЬБА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Выездная свадьба в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Роскошные локации, кинематографические кадры</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🏙️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — это не просто город для свадьбы. Это декорация мирового масштаба. Пустыня в золоте
          заката, небоскрёбы марины, спокойные воды Персидского залива — здесь каждый кадр выглядит
          как из журнала Vogue Weddings. Русскоязычных пар, выбирающих Дубай для выездной свадьбы,
          становится всё больше — и мы работали с десятками из них.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official специализируется на выездных свадьбах в Дубае для международных пар.
          Мы знаем лучшие точки для съёмки, оптимальное время для каждой локации и как сделать
          так, чтобы ваш особенный день был задокументирован на кинематографическом уровне.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Лучшие локации для выездной свадьбы в Дубае
        </h2>

        {[
          { title: "Бурдж-Халифа и Даун-таун", detail: "Золотой час с самым высоким зданием мира на фоне — иконический кадр, который невозможно воспроизвести нигде." },
          { title: "Пальма Джумейра", detail: "Панорамные виды на море, пятизвёздочные отели прямо на берегу — идеал для пары, желающей роскоши." },
          { title: "Пустыня Дубая", detail: "Золотые барханы на закате, тишина, пространство — самые поэтические кадры получаются именно здесь." },
          { title: "Марина и набережная", detail: "Яхты, отражения в воде, современная архитектура — для пар с городским, современным стилем." },
          { title: "Роскошные отели", detail: "Burj Al Arab, Atlantis, Four Seasons — мы работаем в этих отелях регулярно и знаем каждую выгодную точку." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосъёмки выездной свадьбы в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Фотосессия-дестинейшн", detail: "3 часа / 1 фотограф / 2 локации", price: "от AED 3 500" },
            { pkg: "День свадьбы", detail: "1 фотограф / 10 часов", price: "от AED 8 000" },
            { pkg: "Люкс-пакет", detail: "2 фотографа + видеограф + дрон", price: "от AED 20 000" },
            { pkg: "Королевский пакет", detail: "2 дня + синематик-видео + фотокнига", price: "от AED 35 000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Планируете выездную свадьбу в Дубае?</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Напишите нам — поможем с выбором локаций и пакета. Ответ в течение 2 часов.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
