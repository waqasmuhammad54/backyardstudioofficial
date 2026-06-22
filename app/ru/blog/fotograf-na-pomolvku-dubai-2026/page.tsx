import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотограф на помолвку в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональный фотограф на помолвку в Дубае. Романтичные фотосессии в лучших локациях города. От AED 1 500. Естественный стиль, живые эмоции.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotograf-na-pomolvku-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotograf-na-pomolvku-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/engagement-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотограф на помолвку в Дубае 2026 | Backyard Studio",
    description: "Фотосессия помолвки в Дубае — живые эмоции, иконические локации, от AED 1 500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EngagementPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотограф на помолвку в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосессия помолвки в Дубае начинается от AED 1 500 за 2 часа в одной локации (30 обработанных снимков). Расширенная сессия в 2–3 локациях — от AED 2 500 до AED 4 000.",
        },
      },
      {
        "@type": "Question",
        name: "Как вы снимаете — постановочно или в документальном стиле?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наш стиль — документальный и естественный. Мы не выстраиваем позы. Создаём расслабленную атмосферу, даём простые задания, которые провоцируют настоящие эмоции — и снимаем то, что происходит. Пары всегда удивляются, насколько живыми получаются снимки.",
        },
      },
      {
        "@type": "Question",
        name: "Какие локации для помолвки лучше в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dubai Creek Harbour — современная эстетика с видом на воду. Al Bastakiya — тёплый арабский характер. Downtown Dubai с Burj Khalifa — иконический дубайский снимок. Пляжи Jumeirah на закате — для романтической атмосферы. Помогаем выбрать под ваш стиль.",
        },
      },
      {
        "@type": "Question",
        name: "Мы стесняемся камеры — получится что-то красивое?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Большинство наших клиентов говорят то же самое. К концу сессии они не хотят останавливаться. Мы умеем создать атмосферу, в которой камера исчезает — и тогда получаются самые честные и красивые снимки.",
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
          <span>Фотограф на помолвку в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ПОМОЛВКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотограф на помолвку в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Ваша история — в каждом кадре</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&q=80" alt="Engagement Photographer Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Сессия помолвки — это первые совместные снимки как пары. Они появятся в анонсе
          помолвки в Instagram, на свадебном сайте, в приглашениях. И через 30 лет вы будете
          смотреть на них и вспоминать себя именно такими — влюблёнными и немного взволнованными
          перед всем, что впереди.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Дубае есть всё для идеальной сессии помолвки: архитектура мирового класса, береговые
          прогулки, золотой закатный свет над водой. Мы знаем этот город и знаем, какие локации
          дают кадры, которые потом вешают на стену.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как готовиться к сессии помолвки?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Одежда: согласованные, но не одинаковые цвета. Тёмно-синий с бежевым, белый с
          оливковым, бордо с молочным. Избегайте крупных принтов — они отвлекают от лиц.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Время: золотой час — за час до заката. В Дубае с октября по апрель это особенно
          красиво. Летом снимаем ранним утром (7:00–8:30) или в кондиционируемых интерьерных
          локациях.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Настрой: не думайте о позах. Мы будем разговаривать, смеяться, двигаться. Камера
          поймает вас в моменте, не в позиции.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Классическая", detail: "2 часа / 1 локация / 30 снимков", price: "от AED 1 500" },
            { pkg: "Расширенная", detail: "3 часа / 2 локации / 50 снимков + Reel", price: "от AED 2 500" },
            { pkg: "Закатная VIP", detail: "4 часа / 3 локации / 80 снимков + видео", price: "от AED 4 000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать сессию помолвки в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Бесплатная консультация — подберём локацию и время под ваш стиль.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
