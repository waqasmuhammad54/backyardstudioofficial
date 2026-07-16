import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фэшн фотография в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фэшн фотосессия в Дубае для брендов, дизайнеров и инфлюенсеров. От AED 1 500. Студийная и выездная съёмка, сдача за 72 часа.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fashion-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fashion-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/fashion-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фэшн фотография в Дубае 2026 | Backyard Studio",
    description: "Снимки моды, которые рассказывают историю вашего бренда. Студия и улицы Дубая.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FashionPhotographyRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фэшн фотосессия в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Студийная полудневная фэшн съёмка в Дубае начинается от AED 1 500 (4 часа, 30 обработанных снимков). Выездная съёмка на локациях Дубая — от AED 2 200. Полный съёмочный день — от AED 4 500.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы с местными дизайнерами и брендами?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы работаем с местными и международными модными брендами, дизайнерами и бутиками в Дубае. Понимаем визуальный язык каждого бренда и выстраиваем съёмку под его идентичность.",
        },
      },
      {
        "@type": "Question",
        name: "Нужна ли модель из агентства?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Вы можете привести свою модель или мы поможем с координацией через проверенные модельные агентства Дубая. Стоимость модели добавляется к бюджету съёмки.",
        },
      },
      {
        "@type": "Question",
        name: "Какие локации для фэшн съёмки лучше всего в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dubai Creek Harbour — для современной эстетики. Al Bastakiya — для аутентичного восточного фона. Downtown — для глянцевого городского стиля. Индустриальные районы — для стриткас и эджи-фэшн. Каждая локация создаёт свой характер снимка.",
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
          <span>Фэшн фотография в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ФЭШН СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фэшн фотография в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Снимки, которые продают образ</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80" alt="Fashion Photography Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай давно стал региональным центром моды. Недели высокой моды, международные
          шоурумы, стремительно растущие локальные бренды — всё это создаёт постоянный спрос
          на профессиональную фэшн фотографию высокого уровня.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы занимаемся фэшн съёмкой для брендов, дизайнеров и инфлюенсеров.
          Не просто красивые снимки — а снимки, которые рассказывают историю вашей марки
          и работают в коммерческом пространстве.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Студия или улица?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Студия даёт контроль: управляемый свет, нейтральный фон, фокус на одежде. Идеально
          для каталогов и коллекционных лукбуков. Мы можем менять освещение под настроение
          каждого образа.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Уличная съёмка на локациях Дубая добавляет характер и контекст. Al Bastakiya
          для восточного шика, Downtown для глянца, индустриальные зоны для streetwear.
          Лучшие результаты часто получаются из сочетания обоих форматов за один день.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студия полдня", detail: "4 часа / 30 снимков", price: "от AED 1 500" },
            { pkg: "Выездная съёмка", detail: "4 часа / 25 снимков / 1 локация", price: "от AED 2 200" },
            { pkg: "Полный день", detail: "8 часов / 60+ снимков / 2 локации", price: "от AED 4 500" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Обсудить фэшн съёмку</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Расскажите о вашем бренде — разработаем концепцию съёмки вместе.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
