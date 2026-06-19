import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Семейная фотосессия Дубай 2026 | Backyard Studio",
  description:
    "Семейная фотосессия в Дубае от AED 1,200. Лучшие локации — Creek Harbour, Jumeirah Beach, Downtown Dubai. Профессиональный фотограф, тёплая атмосфера, результат через 48 часов.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/semeinaya-fotosessiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/semeinaya-fotosessiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/family-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Семейная фотосессия в Дубае 2026 | Backyard Studio",
    description:
      "Профессиональная семейная фотосессия в Дубае. Лучшие локации, естественные кадры, воспоминания на всю жизнь.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FamilyPhotographyRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит семейная фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Семейная фотосессия в Дубае стоит от AED 1,200 (1,5 часа, одна локация, 30 обработанных фото). Расширенные сессии с двумя локациями и видео-reels обойдутся от AED 2,200 до AED 3,800.",
        },
      },
      {
        "@type": "Question",
        name: "Где лучше всего проводить семейную фотосессию в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Лучшие локации для семейной фотосессии в Дубае: Dubai Creek Harbour (современная архитектура + вода), пляж Джумейра на закате, Даун-таун с Бурдж-Халифа, старый Дубай (Al Bastakiya) для атмосферных кадров, и Al Qudra Lakes — пустынный пейзаж в 30 минутах от центра.",
        },
      },
      {
        "@type": "Question",
        name: "Когда лучше снимать семейные фото в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оптимальное время — первый час после рассвета или последний час перед закатом. С октября по март температура комфортна весь день. Летом (июнь–сентябрь) только ранние утренние съёмки до 8:00.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли у Backyard Studio русскоговорящие фотографы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наша команда работает с русскоязычными семьями на протяжении многих лет. Мы понимаем ваши ожидания и умеем создать комфортную атмосферу — дети расслабляются, и получаются естественные, живые кадры.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Семейная фотосессия в Дубае 2026 — Где снимать и сколько это стоит",
    author: {
      "@type": "Person",
      name: "Fahad Iqbal Butt",
      jobTitle: "Творческий директор — Backyard Studio Official",
    },
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
    },
    datePublished: "2026-06-17",
    dateModified: "2026-06-17",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/semeinaya-fotosessiya-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article
        style={{
          fontFamily: "Inter, sans-serif",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 2rem",
          color: "var(--cream)",
          lineHeight: "1.85",
        }}
      >
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Семейная фотосессия в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СЕМЕЙНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Семейная фотосессия в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Лучшие локации, реальные цены, живые кадры</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>17 июня 2026</span>
          <span>8 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "360px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>👨‍👩‍👧‍👦</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — удивительный город для семейной фотосессии. Здесь можно за один день отснять
          и ультрасовременную архитектуру Creek Harbour, и аутентичные переулки старого Дубая,
          и золотые пески пустыни — всё в пределах часа езды. Именно поэтому так много русскоязычных
          семей выбирают Дубай для памятных фотографий во время отпуска или просто живя здесь.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы снимаем семьи с 2016 года. Фахад Икбал Батт и его команда умеют
          создать атмосферу, при которой дети забывают о камере, взрослые расслабляются, и получаются
          те самые искренние кадры — не постановочные «улыбки в объектив», а живые моменты,
          которые дороги именно потому, что настоящие.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Лучшие локации для семейной фотосессии в Дубае
        </h2>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Dubai Creek Harbour
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Наша любимая локация для семей, которые хотят современный городской фон. Набережная,
          отражения небоскрёбов в воде, открытые пространства для детей — всё здесь. В «золотой час»
          перед закатом кадры получаются особенно магическими.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Пляж Джумейра
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Классика для семейных фотосессий в Дубае. Белый песок, Персидский залив, на горизонте —
          парусообразный Burj Al Arab. Дети бегают по кромке воды, родители стоят рядом —
          и получается именно то, что вешают на стену в гостиной.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Старый Дубай — Al Bastakiya
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          Для семей, которым близок тёплый, атмосферный стиль — арки, деревянные двери, узкие
          улочки с золотистыми стенами. Особенно красиво утром, когда туристов ещё мало
          и свет падает мягко.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Пустыня Al Qudra
        </h3>
        <p style={{ marginBottom: "2rem" }}>
          30 минут от центра города — и вы в совершенно другом мире. Золотые дюны, тишина,
          небо без единого здания. Для семейной фотосессии на закате это незабываемо.
          Дети обожают пустыню — они сразу забывают, что их снимают.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как мы готовимся к семейной съёмке
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          За день до съёмки мы присылаем краткий гайд по одежде. Главный совет: выбирайте
          координированные, но не одинаковые цвета. Три члена семьи в белом смотрятся хорошо
          только если всё выверено — иначе получается «сборная». Лучше работают нейтральные тона
          с одним ярким акцентом.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          На самой съёмке мы начинаем с лёгкой прогулки — никаких «встаньте сюда, смотрите туда».
          Пусть дети побегают, родители поговорят, а мы снимаем. Лучшие кадры всегда случаются
          именно в эти первые 15 минут, когда никто ещё не «вошёл в режим фотосессии».
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          Цены на семейную фотосессию в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "Базовая", detail: "1,5 часа / 1 локация / 30 фото", price: "AED 1,200" },
              { pkg: "Стандартная", detail: "2,5 часа / 2 локации / 60 фото + reels", price: "AED 2,200" },
              { pkg: "Расширенная", detail: "4 часа / 3 локации / 100 фото + видео", price: "AED 3,800" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600 }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>Часто задаваемые вопросы</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит семейная фотосессия в Дубае?", a: "От AED 1,200 (базовая, 1,5 часа, одна локация). Расширенные пакеты — AED 2,200–3,800." },
            { q: "Где лучше снимать семью в Дубае?", a: "Dubai Creek Harbour, пляж Джумейра, Даун-таун, старый Дубай, пустыня Al Qudra. Поможем выбрать под ваш стиль." },
            { q: "Когда лучше делать семейное фото в Дубае?", a: "«Золотой час» — первый час после рассвета или последний перед закатом. С октября по март можно снимать весь день." },
            { q: "Что надеть на семейную фотосессию?", a: "Координированные нейтральные тона — бежевый, белый, серо-голубой. Не одинаковую одежду, а гармоничное сочетание." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>Забронировать семейную фотосессию</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>Бесплатная консультация — поможем выбрать локацию и время.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>Написать в WhatsApp</a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>Цены и пакеты</a>
          </div>
        </div>
      </article>
    </>
  );
}
