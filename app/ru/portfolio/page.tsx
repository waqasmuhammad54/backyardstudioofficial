import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

const portfolioSchema = {
  ...buildPortfolioItemListSchema(),
  name: "Backyard Studio Official — Портфолио",
  description: "Портфолио Backyard Studio — корпоративное видео, свадебная съёмка, недвижимость и контент для соцсетей в Дубае и ОАЭ. 500+ проектов.",
  url: "https://www.backyardstudioofficial.com/ru/portfolio",
  inLanguage: "ru",
};

export const metadata: Metadata = {
  title: "Портфолио | Backyard Studio Official — Дубай",
  description: "Портфолио Backyard Studio — корпоративное видео, свадебная съёмка, недвижимость, отели, авто и контент для соцсетей в Дубае и ОАЭ.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/portfolio" },
};

const ALL_PROJECTS = [
  { src: "/images/events/event-01.webp",       alt: "Съёмка корпоративных мероприятий в Дубае",   cat: "Мероприятия" },
  { src: "/images/wedding/wedding-01.webp",    alt: "Свадебная видеосъёмка в Дубае",               cat: "Свадьбы" },
  { src: "/images/creative/creative-04.webp",  alt: "Фэшн-фотография в Дубае",                     cat: "Фэшн" },
  { src: "/images/events/event-02.webp",       alt: "Съёмка международных конференций в Дубае",    cat: "Мероприятия" },
  { src: "/images/products/product-03.webp",   alt: "Профессиональная предметная съёмка Дубай",    cat: "Продукты" },
  { src: "/images/wedding/wedding-05.webp",    alt: "Свадебная фотосъёмка — арабская свадьба",     cat: "Свадьбы" },
  { src: "/images/creative/creative-13.webp",  alt: "Создание креативного контента в Дубае",        cat: "Контент" },
  { src: "/images/events/event-03.webp",       alt: "Съёмка гала-вечеров и церемоний в Дубае",     cat: "Мероприятия" },
  { src: "/images/wedding/wedding-16.webp",    alt: "Индийская свадьба — фотография в Дубае",      cat: "Свадьбы" },
  { src: "/images/creative/creative-05.webp",  alt: "Съёмка люксовой моды в Дубае",                cat: "Фэшн" },
  { src: "/images/events/event-04.webp",       alt: "Съёмка запуска продукта в Дубае",             cat: "Мероприятия" },
  { src: "/images/products/product-01.webp",   alt: "Съёмка товаров для e-commerce",               cat: "Продукты" },
  { src: "/images/creative/creative-01.webp",  alt: "Профессиональный портрет в Дубае",            cat: "Контент" },
  { src: "/images/wedding/wedding-02.webp",    alt: "Предсвадебная фотосессия в Дубае",            cat: "Свадьбы" },
  { src: "/images/events/event-05.webp",       alt: "Съёмка государственных мероприятий в Дубае",  cat: "Мероприятия" },
  { src: "/images/creative/creative-06.webp",  alt: "Контент для социальных сетей — Дубай",        cat: "Контент" },
];

export default function RuPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />

      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>НАШИ РАБОТЫ</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Портфолио</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          От корпоративных фильмов до свадебной съёмки — более 2,400 реализованных проектов по всем эмиратам ОАЭ.
        </p>
      </section>

      <section style={{ padding: "3rem 2rem 4rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
            {ALL_PROJECTS.map((p) => (
              <a key={p.src} href="/portfolio" style={{ display: "block", position: "relative", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", textDecoration: "none", background: "#111" }}>
                <img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.6rem 0.9rem", background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.9)", fontSize: "0.75rem" }}>{p.alt.split(" в ")[0]}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.7rem", background: "rgba(212,175,55,0.15)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>{p.cat}</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>Наши видеоработы</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {[
                { id: "1194038771", label: "Съёмка пар и love story" },
                { id: "1194038751", label: "Свадебная видеосъёмка" },
                { id: "1194038719", label: "Фэшн-видео" },
              ].map((v) => (
                <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1`}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      title={v.label}
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", padding: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>Готовы обсудить ваш проект?</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.8 }}>Бесплатная оценка проекта — за 2 часа. Свяжитесь с нами сейчас.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>Связаться с нами</a>
              <a href="/portfolio" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>Полное портфолио</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
