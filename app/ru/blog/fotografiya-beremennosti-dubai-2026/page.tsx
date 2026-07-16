import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотографирование беременности в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосессия беременности в Дубае от AED 1 000. Студийная и выездная съёмка, 7–8 месяц беременности. Нежная, женственная, запоминающаяся.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-beremennosti-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-beremennosti-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/maternity-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосессия беременности в Дубае 2026 | Backyard Studio",
    description: "Матернити-фотосессия в Дубае — нежная, женственная, без постановки. От AED 1 000.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MaternityRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Когда лучше делать матернити-фотосессию в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оптимальный момент — 7–8 месяц беременности. Живот хорошо виден, выглядит красиво, и при этом будущая мама ещё достаточно мобильна и комфортна. На 9-м месяце двигаться и позировать уже сложнее.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит матернити-фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Студийная матернити-сессия в Дубае начинается от AED 1 000 за базовый пакет (60 минут, 15 снимков, платье из нашей коллекции). Выездная съёмка на пляже или в парке — от AED 1 400.",
        },
      },
      {
        "@type": "Question",
        name: "Что надеть на матернити-фотосессию?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Длинные платья из шёлка или шифона в нейтральных тонах (молочный, белый, пудровый розовый) дают самые красивые снимки. В нашей студии есть коллекция платьев для съёмки — можно воспользоваться ими.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли взять на сессию мужа и старших детей?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Конечно — семейные снимки во время беременности самые дорогие по ценности. Снимаем сначала вас одну, затем с партнёром, затем со всей семьёй. Это стандартная структура нашей расширенной сессии.",
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
          <span>Фотосессия беременности в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          МАТЕРНИТИ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосессия беременности в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Самое красивое ожидание в вашей жизни</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80" alt="Maternity Photography Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Беременность — это особое время, которое переживается очень интенсивно, но быстро
          уходит в прошлое. Матернити-фотосессия — это способ сохранить его: не просто живот,
          а то ощущение ожидания и любви, которое вы чувствуете прямо сейчас.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы снимаем матернити-сессии в спокойном темпе, без давления и
          неловких поз. Наша цель — снимки, которые через 20 лет ваш ребёнок будет смотреть
          и видеть, как его ждали ещё до рождения.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Студия или природа?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Студийная съёмка даёт полный контроль над светом и фоном. Идеальна для художественных
          чёрно-белых снимков или снимков с нейтральным фоном. У нас есть коллекция платьев
          специально для матернити-съёмок.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Выездная съёмка на пляже JBR, в Jumeirah Beach Park или у Dubai Creek добавляет
          живость и воздух. Снимаем ранним утром или на закате — с октября по апрель. Летом
          работаем только в студии или крытых пространствах.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студийная базовая", detail: "60 мин / 15 снимков / платье включено", price: "от AED 1 000" },
            { pkg: "Студийная расширенная", detail: "90 мин / 25 снимков / семейные снимки", price: "от AED 1 500" },
            { pkg: "Выездная", detail: "90 мин / 20 снимков / ваша локация", price: "от AED 1 400" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на матернити-фотосессию в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Лучший момент — 7–8 месяц. Напишите нам, подберём дату.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
