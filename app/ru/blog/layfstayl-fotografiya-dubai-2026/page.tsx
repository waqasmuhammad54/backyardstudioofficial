import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лайфстайл фотосъёмка в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная лайфстайл-фотосессия в Дубае — для личного бренда, соцсетей, блогеров и влогеров. Естественные снимки в лучших локациях города. От AED 1 200.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/layfstayl-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/layfstayl-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/lifestyle-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Лайфстайл фотосъёмка в Дубае 2026",
    description: "Лайфстайл-фотосессия в Дубае — естественные снимки в городских локациях для блогеров и личного бренда.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LifestylePhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое лайфстайл-фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лайфстайл-фотосессия документирует вашу жизнь в естественном, нестатичном стиле — прогулка в парке, кофе в кафе, шопинг, встреча с друзьями. Это не постановочные позы, а живые кадры, которые транслируют ваш образ жизни в соцсетях.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит лайфстайл-фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лайфстайл-фотосессия в Дубае начинается от AED 1 200 за 2 часа в одной локации с 25 обработанными фотографиями. Полный день съёмки в нескольких локациях — от AED 3 800.",
        },
      },
      {
        "@type": "Question",
        name: "Какие локации подходят для лайфстайл-фотосессии в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Дубайская марина, Джумейра-Бич, Блю-Уотерс, пустыня у Аль-Кудры, улочки Аль-Фахиди, крыши даун-тауна, кафе в Д3 или Сити-Уок — мы поможем выбрать локации под ваш стиль и цели контента.",
        },
      },
      {
        "@type": "Question",
        name: "Подходит ли лайфстайл-съёмка для блогеров и инфлюенсеров?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Это один из самых популярных запросов от блогеров в Дубае. Мы снимаем в вертикальном формате для Instagram Reels и TikTok, горизонтально для YouTube, фото для ленты — всё за одну сессию. Работаем быстро и не тратим ваше время на переснятые кадры.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Лайфстайл фотосъёмка в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/layfstayl-fotografiya-dubai-2026",
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
          <span>Лайфстайл-съёмка в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ЛАЙФСТАЙЛ-СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Лайфстайл фотосъёмка в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Живые кадры, которые строят вашу аудиторию</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🌆</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — один из самых фотографируемых городов мира. Блогеры, предприниматели, экспаты и
          молодые профессионалы ежедневно создают контент на улицах этого города. Но разница между
          телефонным снимком и профессиональной лайфстайл-съёмкой — это разница между 200 лайками
          и 20 000.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official работает с блогерами, инфлюенсерами и частными клиентами по
          всему Дубаю. Мы понимаем алгоритмы соцсетей и снимаем так, чтобы контент не просто
          выглядел красиво, но и работал — набирал охват, подписчиков и конверсию.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что входит в лайфстайл-фотосессию
        </h2>

        {[
          { title: "Золотой час — закат и рассвет", detail: "Самый красивый свет Дубая — за час до заката и после рассвета. Мы знаем, куда прийти в нужное время." },
          { title: "Городской лайфстайл", detail: "Марина, Бизнес-Бей, JBR, Д3 — контент для урбанистической аудитории в дорогой городской эстетике." },
          { title: "Кафе и внутренние локации", detail: "Работаем с лучшими заведениями Дубая — снимаем вас в пространстве, идеальном для вашего стиля." },
          { title: "Reels и TikTok-контент", detail: "Помимо фото снимаем вертикальные видеоклипы для Instagram Reels и TikTok — за ту же сессию." },
          { title: "Сезонные и тематические концепты", detail: "Рамадан, зима в Дубае, лето у бассейна — помогаем создать контент под сезонную тему." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты лайфстайл-съёмки в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Мини-сессия", detail: "2 часа / 1 локация / 25 обработанных фото", price: "от AED 1 200" },
            { pkg: "Стандарт", detail: "4 часа / 2 локации / 50 фото + 1 Reel", price: "от AED 2 200" },
            { pkg: "Полный день", detail: "8 часов / 3–4 локации / 100 фото + 3 Reels", price: "от AED 3 800" },
            { pkg: "Контент-план на месяц", detail: "2 сессии в месяц / банк контента / публикации", price: "от AED 5 500 / мес" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на лайфстайл-фотосессию в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Расскажите о своём стиле и платформах — подберём локации и время.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
