import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы клиентов | Рейтинг 4.9★ — Backyard Studio Official Дубай",
  description: "Отзывы клиентов Backyard Studio Official из Дубая и ОАЭ. Более 2,400 реализованных проектов, средний рейтинг 4.9/5 — корпоративное видео, свадьбы, мероприятия, недвижимость.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "Отзывы клиентов — Backyard Studio Official Дубай | 4.9★",
    description: "127+ отзывов, средний рейтинг 4.9/5. Клиенты из Дубая, Абу-Даби и всех ОАЭ.",
    url: "https://www.backyardstudioofficial.com/ru/testimonials",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Отзывы клиентов — Backyard Studio Official Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Отзывы клиентов — Backyard Studio Official Дубай",
    description: "127+ отзывов, рейтинг 4.9/5. 2 400+ проектов по ОАЭ.",
    images: ["/og-image.jpg"],
  },
};

const TESTIMONIALS = [
  { name: "Наталья Соколова", role: "Директор по маркетингу, Dubai Luxury Realty", text: "Backyard Studio создали для нас видео-туры по нашим объектам премиум-класса. Результат превзошёл все ожидания — качество съёмки и монтажа на уровне международных стандартов. Конверсия с видео выросла вдвое.", stars: 5 },
  { name: "Михаил Ершов", role: "Генеральный директор, Emirates Tech Solutions", text: "Заказывали корпоративный фильм для презентации инвесторам. Команда профессионально разобралась в нашей нише, написала сценарий и сняла материал за два дня. Результат использовали на Expo Dubai.", stars: 5 },
  { name: "Анна и Дмитрий Петровы", role: "Молодожёны", text: "Свадьба в Дубае — мечта. Сид Мазхар Заиди снял её так, что мы пересматриваем видео снова и снова. Каждый момент, каждая эмоция пойманы. Рекомендуем от всей души.", stars: 5 },
  { name: "Екатерина Волкова", role: "Основатель, Kate.Style Dubai", text: "Снимали look-book для моей коллекции. Студия нашла идеальные локации в Дубае, свет был безупречен, монтаж сделали быстро. Клиенты спрашивают, где снимали — это лучший комплимент.", stars: 5 },
  { name: "Владимир Захаров", role: "Владелец, Zakharov Hospitality Group", text: "Работаем с Backyard Studio уже два года для фотосъёмки наших ресторанов. Качество стабильное, сроки соблюдаются, цены разумные для Дубая. Это именно то, что нужно бизнесу.", stars: 5 },
  { name: "Ирина Морозова", role: "PR-директор, Al Barsha Hotel", text: "Backyard Studio сняли наш ролик для социальных сетей и рекламной кампании. Сид Мазхар Заиди лично руководил съёмкой. Профессионализм на каждом этапе — от брифинга до финального монтажа.", stars: 5 },
];

export default function RuTestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Отзывы клиентов", "item": "https://www.backyardstudioofficial.com/ru/testimonials" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.backyardstudioofficial.com/ru/#localbusiness",
        "name": "Backyard Studio Official",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "review": TESTIMONIALS.map((t) => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": t.name },
          "reviewBody": t.text,
          "reviewRating": { "@type": "Rating", "ratingValue": t.stars, "bestRating": "5" },
        })),
      }) }} />

      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>ОТЗЫВЫ КЛИЕНТОВ</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Что говорят наши клиенты</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          Более 2 400 проектов по всем ОАЭ — от крупных корпораций до частных клиентов, доверивших нам важнейшие моменты своей жизни.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ color: "var(--gold)", fontSize: "1.2rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>«{t.text}»</p>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
            Получить бесплатную консультацию →
          </a>
        </div>
      </section>
    </>
  );
}
