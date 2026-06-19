import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Никах фотосъёмка в Дубае 2026 | Backyard Studio",
  description:
    "Деликатная профессиональная фотосъёмка никаха в Дубае — в мечети, дома, в зале. Уважение к традициям, естественные снимки самого важного момента. От AED 2 500.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/nikah-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/nikah-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/nikah-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Никах фотосъёмка в Дубае 2026",
    description: "Фотограф никаха в Дубае — деликатная документация самого священного момента вашей жизни.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NikahPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка никаха в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосъёмка никаха в Дубае начинается от AED 2 500 за 3-часовую сессию с 1 фотографом. Полный пакет с видеосъёмкой и цифровым альбомом — от AED 6 000.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы никах в мечети?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, с полным уважением к правилам мечети и святости места. Мы работаем тихо, с минимально инвазивным оборудованием, часто используя только естественный свет, чтобы не нарушить атмосферу церемонии.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли провести никах дома и пригласить фотографа?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Конечно — домашний никах часто дает самые тёплые и искренние кадры. Мы приносим компактное оборудование, которое не мешает гостям, и адаптируемся к любому освещению.",
        },
      },
      {
        "@type": "Question",
        name: "Какие моменты никаха особенно важно задокументировать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Подписание договора и произнесение согласия (иджаб и кабул), момент одевания кольца, первый взгляд супругов, реакция родителей, совместная молитва и семейные портреты после церемонии.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Никах фотосъёмка в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/nikah-fotografiya-dubai-2026",
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
          <span>Фотосъёмка никаха в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          НИКАХ-ФОТОСЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Никах фотосъёмка в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Деликатная документация священного момента</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>📿</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Никах — самый значимый момент в жизни мусульманской пары. В отличие от пышных свадебных
          торжеств, никах часто бывает камерным и интимным. Именно поэтому фотографу особенно важно
          работать незаметно, уважительно и понимать, какие моменты действительно важны.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official провела сотни никах-сессий в Дубае — в мечетях, дома, в отелях
          и в залах. Мы работаем тихо, без вспышек там, где они неуместны, и создаём фотоархив,
          к которому вы будете возвращаться всю жизнь.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Ключевые моменты, которые мы документируем
        </h2>

        {[
          { title: "Подписание никах-договора", detail: "Мы заранее выстраиваем угол съёмки, чтобы момент подписания был снят идеально, без лишних людей в кадре." },
          { title: "Иджаб и кабул (произнесение согласия)", detail: "Самый священный момент — снимаем выражения лиц обоих, реакцию семьи и общий план церемонии." },
          { title: "Детали — кольца, ткань, свидетели", detail: "Малые детали создают богатый визуальный рассказ о вашем никахе." },
          { title: "После церемонии — семейные портреты", detail: "Быстрая серия семейных фото, пока все в сборе — обе семьи, свидетели, гости." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосъёмки никаха в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Базовый никах", detail: "1 фотограф / 3 часа / цифровой альбом", price: "от AED 2 500" },
            { pkg: "Расширенный никах", detail: "1 фотограф / 6 часов / 100 обработанных фото", price: "от AED 4 500" },
            { pkg: "Никах + видео", detail: "Фотограф + видеограф / полный день", price: "от AED 7 000" },
            { pkg: "Никах + рецепшн", detail: "Полное покрытие / 2 фотографа + видео", price: "от AED 12 000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать фотографа на никах в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Свяжитесь с нами для обсуждения деталей вашей церемонии.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
