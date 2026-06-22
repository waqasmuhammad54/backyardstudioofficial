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
  { src: "/images/events/event-01.webp",       alt: "Съёмка корпоративных мероприятий в Дубае",    cat: "Мероприятия" },
  { src: "/images/wedding/wedding-01.webp",    alt: "Свадебная видеосъёмка в Дубае",                cat: "Свадьбы" },
  { src: "/images/creative/creative-04.webp",  alt: "Фэшн-фотография в Дубае",                      cat: "Фэшн" },
  { src: "/images/events/event-02.webp",       alt: "Съёмка международных конференций в Дубае",     cat: "Мероприятия" },
  { src: "/images/products/product-03.webp",   alt: "Профессиональная предметная съёмка Дубай",     cat: "Продукты" },
  { src: "/images/wedding/wedding-05.webp",    alt: "Свадебная фотосъёмка — арабская свадьба",      cat: "Свадьбы" },
  { src: "/images/creative/creative-13.webp",  alt: "Создание креативного контента в Дубае",         cat: "Контент" },
  { src: "/images/events/event-03.webp",       alt: "Съёмка гала-вечеров и церемоний в Дубае",      cat: "Мероприятия" },
  { src: "/images/wedding/wedding-16.webp",    alt: "Индийская свадьба — фотография в Дубае",       cat: "Свадьбы" },
  { src: "/images/creative/creative-05.webp",  alt: "Съёмка люксовой моды в Дубае",                 cat: "Фэшн" },
  { src: "/images/events/event-04.webp",       alt: "Съёмка запуска продукта в Дубае",              cat: "Мероприятия" },
  { src: "/images/products/product-01.webp",   alt: "Съёмка товаров для e-commerce",                cat: "Продукты" },
  { src: "/images/creative/creative-01.webp",  alt: "Профессиональный портрет в Дубае",             cat: "Контент" },
  { src: "/images/wedding/wedding-02.webp",    alt: "Предсвадебная фотосессия в Дубае",             cat: "Свадьбы" },
  { src: "/images/events/event-05.webp",       alt: "Съёмка государственных мероприятий в Дубае",   cat: "Мероприятия" },
  { src: "/images/creative/creative-06.webp",  alt: "Контент для социальных сетей — Дубай",         cat: "Контент" },
];

export default function RuPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />

      {/* HEADER */}
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>НАШИ РАБОТЫ</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Портфолио</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          От корпоративных фильмов до свадебной съёмки — более 2,400 реализованных проектов по всем эмиратам ОАЭ.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section style={{ padding: "3rem 2rem 4rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
            {ALL_PROJECTS.map((p) => (
              <a key={p.src} href="/portfolio" style={{ display: "block", position: "relative", borde