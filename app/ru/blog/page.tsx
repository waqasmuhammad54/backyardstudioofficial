import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог | Видеосъёмка в Дубае — советы и цены 2026 | Backyard Studio Official",
  description: "Статьи и советы по видеосъёмке 2026: стоимость в Дубае, свадебная съёмка, корпоративное видео, аэросъёмка дроном GCAA. Экспертный контент от Backyard Studio Official.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog",
    languages: {
      "en": "https://www.backyardstudioofficial.com/blog",
      "ar": "https://www.backyardstudioofficial.com/ar/blog",
      "ru": "https://www.backyardstudioofficial.com/ru/blog",
      "zh": "https://www.backyardstudioofficial.com/zh/blog",
      "x-default": "https://www.backyardstudioofficial.com/blog",
    },
  },
  openGraph: {
    title: "Блог — Видеосъёмка в Дубае 2026 | Backyard Studio Official",
    description: "Свадебная съёмка, корпоративное видео, аэросъёмка GCAA. Реальные цены и советы.",
    url: "https://www.backyardstudioofficial.com/ru/blog",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Блог Backyard Studio Official — Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог — Видеосъёмка в Дубае 2026",
    description: "Советы по видеосъёмке, цены, аэросъёмка GCAA. Экспертный контент.",
    images: ["/og-image.jpg"],
  },
};

const POSTS = [
  { title: "Корпоративное видео в Дубае 2026 — цены и производство", desc: "От 8 000 AED: корпоративные фильмы, видео о компании, отзывы клиентов. Реальные цены и производственный процесс от команды Backyard Studio.", href: "/ru/blog/korporativnoe-video-dubai-2026", date: "Май 2026", featured: true },
  { title: "Съёмка недвижимости в Дубае 2026 — цены на фото и видео", desc: "От 2 500 AED: видеотуры, элитные виллы, аэросъёмка с лицензией GCAA. Реальные цены и что входит в каждый пакет.", href: "/ru/blog/semka-nedvizhimosti-dubai-2026", date: "Май 2026", featured: true },
  { title: "Свадебный фотограф и видеограф в Дубае 2026", desc: "Полный гид по выбору свадебного фотографа в Дубае — реальные цены в AED, кинематографическое видео vs репортаж, и главные вопросы перед бронированием.", href: "/ru/blog/svadebnyi-fotograf-dubai-2026", date: "Май 2026", featured: true },
  { title: "Стоимость видеосъёмки в Дубае 2026", desc: "Реальные цены на профессиональную видеосъёмку — корпоративное видео, реклама, контент для соцсетей, дрон. Честный разбор от команды Backyard Studio.", href: "/ru/blog/stoimost-videosemki-dubai-2026", date: "Май 2026", featured: true },
  { title: "Лучшие продакшн-компании Дубая 2026", desc: "Полный гид по ведущим студиям видеопроизводства в Дубае — критерии выбора, цены и услуги.", href: "/blog/best-production-companies-dubai-2026", date: "Май 2026" },
  { title: "Стоимость видеопроизводства в ОАЭ 2026", desc: "Прозрачный гид по ценам — от контента для соцсетей до крупных рекламных кампаний.", href: "/blog/how-much-does-video-production-cost-dubai-2026", date: "Март 2026" },
  { title: "Автомобильная фотосъёмка в Дубае 2026", desc: "Как студия снимает автомобили с дронами на лучших локациях Дубая.", href: "/blog/automotive-photography-dubai-2026", date: "Май 2026" },
  { title: "Фотосъёмка для отелей в Дубае", desc: "Руководство по профессиональной гостиничной фотографии в Дубае — от номеров до видовых локаций.", href: "/blog/hotel-photography-dubai-2026", date: "Май 2026" },
  { title: "Рилсы и контент для соцсетей в Дубае 2026", desc: "Съёмка Reels и TikTok — монтаж, субтитры, форматирование для Instagram, TikTok и YouTube Shorts. Для брендов и блогеров. От AED 1 800.", href: "/ru/blog/rily-socsietey-dubai-2026", date: "Июнь 2026", featured: true },
  { title: "Фотосъёмка мероприятий в Дубае 2026", desc: "Корпоративы, конференции, выставки, запуски продуктов — от AED 2 500. Хайлайт-пакет в тот же день. DWTC, Madinat, Atlantis.", href: "/ru/blog/fotosyomka-feropriiatiy-dubai-2026", date: "Июнь 2026", featured: true },
  { title: "Фудфотография в Дубае 2026 — для ресторанов и брендов", desc: "Съёмка еды — меню, Talabat, Instagram, рекламные кампании. Доставка за 48 часов. От AED 1 500.", href: "/ru/blog/fotografiya-edy-dubai-2026", date: "Июнь 2026", featured: true },
];

export default function RuBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Блог", "item": "https://www.backyardstudioofficial.com/ru/blog" },
        ],
      }) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Блог</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          Советы и статьи от команды Backyard Studio по видеосъёмке и фотографии в Дубае и ОАЭ.
        </p>
      </section>
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {POSTS.map((post) => (
            <a key={post.href} href={post.href} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", marginBottom: "0.5rem" }}>{post.date}</div>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{post.title}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.6 }}>{post.desc}</p>
              <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.875rem", marginTop: "1rem", display: "block" }}>Читать далее →</span>
            </a>
          ))}
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: "2rem", color: "rgba(245,240,225,0.4)", fontSize: "0.875rem" }}>
          Все статьи доступны на английском языке. <a href="/blog" style={{ color: "var(--gold)" }}>Перейти в полный блог →</a>
        </p>
      </section>
    </>
  );
}
