import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги видеосъёмки в Дубае | Цены от 2 000 AED — Backyard Studio Official",
  description: "Полный спектр услуг видеопроизводства в Дубае и ОАЭ: корпоративное видео от 15 000 AED, свадебная съёмка от 3 500 AED, мероприятия, аэросъёмка дроном GCAA, контент для соцсетей.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/services",
    languages: {
      "en": "https://www.backyardstudioofficial.com/services",
      "ar": "https://www.backyardstudioofficial.com/ar/services",
      "ru": "https://www.backyardstudioofficial.com/ru/services",
      "zh": "https://www.backyardstudioofficial.com/zh/services",
      "x-default": "https://www.backyardstudioofficial.com/services",
    },
  },
  openGraph: {
    title: "Услуги видеосъёмки в Дубае — Backyard Studio Official",
    description: "Корпоративное видео, свадьбы, мероприятия, аэросъёмка GCAA, контент для соцсетей. Цены от 2 000 AED.",
    url: "https://www.backyardstudioofficial.com/ru/services",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Услуги видеосъёмки — Backyard Studio Official Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги видеосъёмки в Дубае — Backyard Studio Official",
    description: "Корпоративное видео·свадьбы·аэросъёмка GCAA. Цены от 2 000 AED.",
    images: ["/og-image.jpg"],
  },
};

const SERVICES = [
  { icon: "🎬", title: "Корпоративное видео", desc: "Корпоративные фильмы, бренд-документалки, ролики для инвесторов и рекламные видео. Профессиональная команда, кинематографическое качество.", price: "от 15 000 AED" },
  { icon: "💍", title: "Свадебная съёмка", desc: "Кинематографическая фото и видеосъёмка свадеб любого формата — арабских, индийских, русских, международных. Хайлайт в течение 48 часов.", price: "от 3 500 AED" },
  { icon: "🎉", title: "Съёмка мероприятий", desc: "Конференции, гала-вечера, презентации, корпоративные события — полная профессиональная видеопокрытие по всем эмиратам ОАЭ.", price: "от 3 500 AED" },
  { icon: "🚁", title: "Аэросъёмка дроном", desc: "Кинематографическая аэросъёмка с лицензией GCAA для недвижимости, мероприятий, рекламы и туризма в ОАЭ.", price: "от 2 000 AED" },
  { icon: "📱", title: "Контент для соцсетей", desc: "Instagram Reels, TikTok, YouTube Shorts — контент, заточенный под алгоритмы платформ и реальный охват.", price: "от 2 500 AED" },
  { icon: "🛍️", title: "Предметная и фэшн-съёмка", desc: "Профессиональная фотосъёмка товаров и одежды для e-commerce, каталогов и соцсетей.", price: "от 150 AED / товар" },
  { icon: "🏢", title: "Съёмка недвижимости", desc: "Фото и видео для жилой и коммерческой недвижимости в Дубае — интерьер, экстерьер, аэросъёмка для крупных объектов.", price: "от 1 500 AED" },
  { icon: "🍽️", title: "Фудфотография", desc: "Профессиональная съёмка блюд и интерьеров для ресторанов и отелей — меню, соцсети, рекламные кампании.", price: "от 1 200 AED" },
];

const SERVICES_FAQS = [
  {
    q: "Какие услуги видеопроизводства предлагает Backyard Studio в Дубае?",
    a: "Мы предлагаем полный спектр услуг: корпоративное видео, свадебная съёмка, съёмка мероприятий, аэросъёмка дроном (лицензия GCAA), контент для соцсетей, фотосъёмка недвижимости, фудфотография и предметная съёмка. Более 2,400 проектов по всем ОАЭ.",
  },
  {
    q: "Сколько стоит корпоративное видео в Дубае?",
    a: "Корпоративное видео в Дубае начинается от 15 000 AED. Стоимость зависит от хронометража, локаций и сложности постпродакшна. Связной нами для бесплатной оценки вашего проекта.",
  },
  {
    q: "Есть ли у вас лицензия GCAA на аэросъёмку дроном в ОАЭ?",
    a: "Да. Backyard Studio Official имеет лицензию GCAA (Генеральное управление гражданской авиации) на коммерческую аэросъёмку. Это гарантирует легальность всех наших дроновых съёмок по всем эмиратам ОАЭ.",
  },
  {
    q: "Работаете ли вы за пределами Дубая?",
    a: "Да. Мы работаем во всех 7 эмиратах ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Без дополнительной платы за выезд.",
  },
];

export default function RuServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://www.backyardstudioofficial.com/ru/services" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        "name": "Услуги видеопроизводства — Backyard Studio Official Дубай",
        "itemListElement": SERVICES.map((s, i) => ({
          "@type": "ListItem", "position": i + 1, "name": s.title,
          "url": "https://www.backyardstudioofficial.com/ru/services",
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": SERVICES_FAQS.map((f) => ({
          "@type": "Question", "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
          Наши услуги в Дубае и ОАЭ
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          Комплексные решения для брендов, компаний и частных лиц. От корпоративного видео до свадебной съёмки.
        </p>
      </section>
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>{s.desc}</p>
              <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 600, fontSize: "0.9rem" }}>{s.price}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
            Получить бесплатное предложение
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            Вопросы об услугах
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {SERVICES_FAQS.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
