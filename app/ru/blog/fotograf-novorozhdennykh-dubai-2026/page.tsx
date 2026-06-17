import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотограф новорождённых Дубай 2026 | Backyard Studio",
  description:
    "Профессиональная съёмка новорождённых в Дубае от AED 900. Тёплая студия, безопасные позы, нежные кадры. Бронируйте за 4 недели до родов.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotograf-novorozhdennykh-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotograf-novorozhdennykh-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/newborn-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотограф новорождённых в Дубае 2026 | Backyard Studio",
    description:
      "Съёмка новорождённых в Дубае — безопасно, нежно, профессионально. Первые дни вашего малыша в кадре навсегда.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NewbornPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит съёмка новорождённого в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Съёмка новорождённого в Дубае стоит от AED 900 (3 часа, 3 позы, 20 обработанных фото). Полный пакет с семейными кадрами и фотокнигой — AED 1,800–3,200.",
        },
      },
      {
        "@type": "Question",
        name: "Когда лучше всего снимать новорождённого?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оптимальный возраст — с 5-го по 14-й день жизни. В этот период малыш много спит, тело достаточно гибкое для специальных поз, и ещё нет высыпаний, которые иногда появляются на 3-й неделе.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли съёмка новорождённых?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Абсолютно, если её проводит подготовленный специалист. Студия поддерживает температуру 28–30°C, все аксессуары стерилизованы, позы выставляет профессиональный ассистент. Мы никогда не оставляем малыша без поддержки рук.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли что-то приносить с собой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Приносите только малыша и его привычные принадлежности (подгузники, смесь/грудное молоко, пустышку). Все реквизиты — корзинки, ткани, повязки, обёртки — предоставляем мы.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотограф новорождённых в Дубае 2026 — Безопасно, Нежно, Профессионально",
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
    url: "https://www.backyardstudioofficial.com/ru/blog/fotograf-novorozhdennykh-dubai-2026",
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
          <span>Фотограф новорождённых в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СЪЁМКА НОВОРОЖДЁННЫХ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотограф новорождённых в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Первые дни жизни — в кадре навсегда</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>17 июня 2026</span>
          <span>8 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "360px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🍼</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Первые две недели жизни ребёнка проходят так быстро, что потом кажется — всё это
          просто приснилось. Крошечные пальчики, тонкие ресницы, как малыш сворачивается
          клубком точно так же, как в утробе. Именно это и нужно снять, пока это ещё есть.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio снимает новорождённых в Дубае с 2017 года. За это время мы провели
          более 400 newborn-сессий. Мы знаем, как успокоить беспокойного малыша, как выставить
          позу безопасно, и как получить те самые кадры — нежные, тихие, настоящие.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Почему важно снять именно в первые 14 дней
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Это не маркетинговый ход. У newborn-фотографии есть объективное биологическое окно:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--cream)" }}>До 14 дней:</strong> малыш много спит (5–6 часов подряд), тело гибкое — возможны «позы бабочки», «лягушки» и другие классические newborn-позиции.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--cream)" }}>После 14 дней:</strong> сон становится короче, движений больше, тело «твердеет» — позы уже ограничены.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--cream)" }}>После 3 недель:</strong> часто появляются прыщики (младенческое акне) и жёлтая корочка на голове — снимать ещё можно, но обработки больше.
          </li>
        </ul>
        <p style={{ marginBottom: "2.5rem" }}>
          <strong style={{ color: "var(--cream)" }}>Совет Сида Мазхара Зайди,</strong> операционного директора Backyard Studio:
          «Бронируйте сессию на последнем месяце беременности, указывая примерную дату родов.
          Мы сами свяжемся после рождения и назначим точный день в оптимальное окно.»
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как проходит newborn-сессия в нашей студии
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Студия прогревается до 28–30°C заранее — малыш должен чувствовать себя так же комфортно,
          как в мамином животе. Мы всегда начинаем с кормления и пеленания: сытый и спелёнатый
          малыш засыпает быстро и крепко.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Пока ребёнок спит, наш специалист аккуратно выставляет позы. Каждое движение делается
          медленно, с поддержкой. За 3–4 часа сессии мы успеваем снять: 3–5 поз малыша отдельно,
          кадры с мамой, кадры с папой, и финальные семейные фото.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Мы также снимаем детали — ручки, ножки, профиль лица, родинки — то, что через год уже
          не найти, но о чём все родители потом жалеют, что не сфотографировали.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          Цены на съёмку новорождённых в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "Базовая", detail: "3 часа / 3 позы / 20 фото", price: "AED 900" },
              { pkg: "Стандартная", detail: "4 часа / малыш + семья / 40 фото", price: "AED 1,800" },
              { pkg: "Полная", detail: "5 часов / все позы + фотокнига", price: "AED 3,200" },
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
            { q: "Сколько стоит съёмка новорождённого в Дубае?", a: "От AED 900 (базовая сессия, 3 часа). Полный пакет с семейными кадрами и фотокнигой — AED 3,200." },
            { q: "Когда снимать новорождённого?", a: "С 5-го по 14-й день жизни — оптимальное окно для newborn-съёмки. Бронируйте заранее, мы сами свяжемся после родов." },
            { q: "Безопасны ли специальные позы?", a: "Да, при правильном выполнении. Наш специалист делает каждое движение медленно и с поддержкой. В «составных» позах всегда снимаются несколько кадров, которые потом объединяются — малыш никогда не находится в потенциально опасном положении самостоятельно." },
            { q: "Что взять на съёмку?", a: "Только малыша и его привычные вещи. Реквизит, ткани, корзинки — всё наше." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>Забронировать newborn-сессию</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>Бронируйте на последнем месяце беременности — мы сами согласуем точную дату после родов.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>Написать в WhatsApp</a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>Цены и пакеты</a>
          </div>
        </div>
      </article>
    </>
  );
}
