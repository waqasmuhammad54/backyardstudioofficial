import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хедшот фотография в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная хедшот фотосессия в Дубае от AED 900. Снимки для LinkedIn, актёрского портфолио, корпоративного профиля. Сдача за 48 часов.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/headshot-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/headshot-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/headshot-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Хедшот фотография в Дубае 2026 | Backyard Studio",
    description: "Профессиональный хедшот для LinkedIn и бизнес-профиля в Дубае. От AED 900, быстрая сдача.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HeadshotRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит хедшот фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Индивидуальная хедшот сессия в Дубае начинается от AED 900 — 30 минут, 5 обработанных снимков, 2 фона. Профессиональная расширенная сессия (60 минут, 10 снимков) — AED 1 500. Корпоративные съёмки команды — от AED 500 за человека при заказе от 5 человек.",
        },
      },
      {
        "@type": "Question",
        name: "Чем отличается хедшот от обычного портрета?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Хедшот — это снимок лица и плеч, оптимизированный для профессионального использования: LinkedIn, корпоративный сайт, визитная карточка. Портрет — шире по кадру и более художественный по задаче. В Backyard Studio мы делаем оба формата.",
        },
      },
      {
        "@type": "Question",
        name: "Подойдут ли снимки и для LinkedIn, и для актёрского портфолио?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, если заранее спланировать съёмку. Мы делаем несколько серий в разных позах и с разными фонами — одна серия для профессионального делового использования, другая более выразительная для творческих профилей.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли что-то готовить к хедшот-сессии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Выберите одежду в деловом стиле без крупных принтов. Однотонные и тёмно-синие цвета работают лучше всего. Свежая стрижка или укладка за день до съёмки. Остальное берём на себя — свет, фон, направление.",
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
          <span>Хедшот фотография в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ДЕЛОВОЙ ПОРТРЕТ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Хедшот фотография в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Снимок, который работает вместо вас</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="Headshot Photography Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          В Дубае — городе возможностей и деловых контактов — ваш профессиональный снимок делает
          первое впечатление ещё до того, как вы произнесёте слово. Грамотно сделанный хедшот
          на LinkedIn повышает количество запросов на коннект, открывает двери к партнёрствам
          и просто говорит: этому человеку можно доверять.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы снимаем хедшоты ежедневно — для директоров, консультантов,
          актёров, предпринимателей. Каждая сессия начинается с разговора: кто вы, какую
          аудиторию хотите привлечь, какое впечатление должен оставлять ваш снимок.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что делает хедшот профессиональным?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Свет — главный фактор. Студийный свет Rembrandt даёт глубину и форму лицу, убирает
          плоскость. Для деловых портретов используем мягкий фронтальный свет с бокером.
          Для актёрских работ — более драматичное боковое освещение.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Фон работает незаметно, но важно. Серый или белый нейтральный фон — стандарт для
          корпоративного использования. Тёмный фон добавляет силу и присутствие. Размытый
          городской фон — для более живых, современных профилей.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Выражение — это то, что запоминают. Лучший хедшот не тот, где человек улыбается
          широкой улыбкой, а тот, где чувствуется уверенность и готовность к диалогу. Мы
          работаем с вами на протяжении всей сессии, чтобы поймать именно это.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты хедшот-фотосессии в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Индивидуальная", detail: "30 мин / 5 снимков / 2 фона", price: "от AED 900" },
            { pkg: "Профессиональная", detail: "60 мин / 10 снимков / 3 фона + смена одежды", price: "от AED 1 500" },
            { pkg: "Корпоративная", detail: "за человека (от 5 чел.)", price: "от AED 500" },
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

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Частые вопросы
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит хедшот в Дубае?", a: "От AED 900 за индивидуальную сессию (5 снимков). Профессиональная — AED 1 500. Корпоративная от AED 500 за человека." },
            { q: "Чем хедшот отличается от портрета?", a: "Хедшот — лицо и плечи для профессионального использования. Портрет — шире и художественнее. Делаем оба формата." },
            { q: "Подойдёт для LinkedIn и актёрского портфолио?", a: "Да, при заранее спланированной съёмке делаем несколько серий в разных стилях за одну сессию." },
            { q: "Что нужно подготовить?", a: "Одежда в деловом стиле без крупных принтов. Свежая стрижка. Остальное — наша работа." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на хедшот в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Бесплатная консультация — обсудим цель съёмки и подберём стиль.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
