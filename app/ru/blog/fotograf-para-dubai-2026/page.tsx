import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотограф для пар в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосессия для пар в Дубае — годовщина, помолвка, романтическая сессия. Пляж, пустыня, городские локации. От AED 1 200.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotograf-para-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotograf-para-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/couple-photoshoot-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотограф для пар в Дубае 2026",
    description: "Фотосессия для пар в Дубае — романтично, живо, без наигранности. Пляж, пустыня, закат, городские огни.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CouplePhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосессия для пары в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосессия для пары в Дубае начинается от AED 1 200 (1,5 часа, 1 локация, 25–35 обработанных снимков). Расширенная сессия с 2 локациями и закатом — от AED 1 800. Студийная портретная сессия для пары — от AED 1 000.",
        },
      },
      {
        "@type": "Question",
        name: "Какие поводы подходят для парной съёмки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Любые! Годовщина отношений или свадьбы, помолвка, день рождения партнёра, приезд в Дубай, просто желание сохранить этот период жизни в красивых снимках. Мы также снимаем парные портреты для профилей в LinkedIn и соцсетях.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли нам специально готовиться к фотосессии?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Главное — выбрать наряды заранее (желательно сочетающиеся по цвету, но не одинаковые) и хорошо выспаться. Мы пришлём подготовительный гайд с советами по одежде, локациям и тому, что ожидать на съёмке.",
        },
      },
      {
        "@type": "Question",
        name: "Вы фотографируете ЛГБТК+-пары в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обратите внимание, что в ОАЭ действуют законы, регулирующие публичное поведение. Мы рекомендуем ознакомиться с действующим законодательством. Для частных студийных сессий обращайтесь к нам напрямую за консультацией.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотограф для пар в Дубае 2026 — живые кадры, настоящие эмоции",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotograf-para-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Фотограф для пар в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ПАРНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотограф для пар в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Живые кадры, настоящие эмоции</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>18 июня 2026</span>
          <span>5 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>❤️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай создан для романтических фотографий. Золотые дюны на закате, бирюзовый залив,
          мерцающие огни ночного города — фон, который превращает любую парную съёмку в произведение.
          Backyard Studio делает фотосессии для пар, которые хотят сохранить момент по-настоящему
          — без наигранных поз и пластиковых улыбок.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Наш подход — направлять, а не ставить. Мы даём паре ситуации и движения, в которых
          рождаются настоящие реакции. Лучшие снимки получаются именно тогда, когда оба смеются
          над чем-то своим — и забывают про камеру.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Форматы парных съёмок в Дубае
        </h2>

        {[
          { title: "Романтическая / годовщина", desc: "Снимки в честь важной даты — красивые, нежные, с правильным светом и атмосферой. Идеально для подарка партнёру." },
          { title: "Помолвочная", desc: "Момент сразу после или накануне официального предложения. Свежие эмоции, искреннее счастье в кадре." },
          { title: "Путешествие в Дубай", desc: "Туристические пары, которые хотят профессиональные снимки на фоне главных достопримечательностей города." },
          { title: "Студийная портретная", desc: "Чистый, современный минимализм. Фокус на вас, а не на фоне. Красивые совместные портреты для рамок и соцсетей." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты парной съёмки в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Студийная", detail: "1 ч / 1 фон / 20–25 фото", price: "от AED 1 000" },
            { pkg: "Мини-выездная", detail: "1,5 ч / 1 локация / 25–35 фото", price: "от AED 1 200" },
            { pkg: "Золотой час", detail: "2 ч / 2 локации + закат / 40–50 фото", price: "от AED 1 800" },
            { pkg: "Мультилокационная", detail: "3–4 ч / 3 локации / 60–80 фото", price: "от AED 2 500" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Записаться на парную фотосессию в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Напишите нам — обсудим локацию, дату и ваши пожелания.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
