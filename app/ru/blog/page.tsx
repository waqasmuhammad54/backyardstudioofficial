import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог | Backyard Studio Official — видеосъёмка в Дубае",
  description: "Статьи и советы по видеосъёмке и фотографии в Дубае и ОАЭ от команды Backyard Studio Official.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/blog" },
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
];

export default function RuBlogPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Блог</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
  