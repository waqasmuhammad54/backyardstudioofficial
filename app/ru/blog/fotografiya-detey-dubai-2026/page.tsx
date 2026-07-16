import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотография детей в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная детская фотография в Дубае — студия и натура. Живые, настоящие кадры. Фотограф, умеющий работать с детьми. От AED 800.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-detey-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-detey-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/kids-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотография детей в Дубае 2026 | Backyard Studio",
    description: "Детская фотосессия в Дубае без принуждения — живые эмоции, настоящие кадры.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function KidsPhotographyRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит детская фотография в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Детская фотосессия в Дубае начинается от AED 800 за студийную съёмку (1 час, 20 снимков). Выездная съёмка в парке или на пляже — от AED 1 200. Семейная фотосессия с детьми — от AED 1 500.",
        },
      },
      {
        "@type": "Question",
        name: "Как вы работаете с непоседами и застенчивыми детьми?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Терпение и игра — наши главные инструменты. Мы не торопим детей и не заставляем смотреть в камеру. Приносим игрушки и мыльные пузыри, работаем в ритме ребёнка. Лучшие кадры получаются тогда, когда ребёнок забывает о камере.",
        },
      },
      {
        "@type": "Question",
        name: "Где лучше снимать детей в Дубае — в студии или на природе?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Студия лучше для детей до 2 лет — управляемая среда, мягкий свет, тепло. Для детей постарше выездная съёмка в парке или на пляже JBR даёт живые и воздушные кадры. Летом снимаем только в студии или крытых локациях.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снять детей вместе с родителями?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — семейные снимки это отдельная ценность. Снимаем сначала детей, затем добавляем родителей. Через 10 лет именно эти снимки становятся самыми дорогими по воспоминаниям.",
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
          <span>Фотография детей в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ДЕТСКАЯ ФОТОГРАФИЯ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотография детей в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Настоящие эмоции, не постановка</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80" alt="Kids Photography Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дети растут быстро. Тот смешной характер, который есть у вашего ребёнка сейчас —
          эта особенная манера смеяться, эта привычка щурить глаза — через год это будет уже
          другой человек. Детская фотография — это не альбом с красивыми картинками. Это
          документ личности.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio снимает детей в Дубае так, как они есть: шумные, любопытные,
          иногда упрямые — и именно поэтому такие живые на фото. Мы не заставляем детей
          улыбаться в камеру. Мы создаём условия, при которых они улыбаются сами.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как проходит детская съёмка?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Первые 10 минут — знакомство. Ребёнок осматривается, привыкает к пространству и
          к нам. Мы не начинаем снимать сразу. Когда ребёнок расслабляется — начинается
          настоящая работа.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Приносим мыльные пузыри, воздушные шарики, простые игрушки — не для отвлечения,
          а для того, чтобы ребёнок был занят чем-то реальным. Камера уходит в фон.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Детей до 5 лет снимаем не более 45–60 минут — дальше они устают. Для детей постарше
          можно до 90 минут. Никакого давления, никакой спешки.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студийная мини", detail: "45 мин / 15–20 снимков", price: "от AED 800" },
            { pkg: "Студийная полная", detail: "90 мин / 30 снимков", price: "от AED 1 200" },
            { pkg: "Выездная (парк/пляж)", detail: "90 мин / 30–40 снимков", price: "от AED 1 200" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на детскую фотосессию</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Подберём время и локацию под возраст и характер ребёнка.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
