import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог | Backyard Studio Official — видеосъёмка в Дубае",
  description: "Статьи и советы по видеосъёмке и фотографии в Дубае и ОАЭ от команды Backyard Studio Official.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/blog" },
};

const POSTS = [
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
          Советы и статьи от команды Backyard Studio по видеосъёмке и фотографии в Дубае и ОАЭ.
        </p>
      </section>
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {POSTS.map((post) => (
            <a key={post.href} href={post.href} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", marginBottom: "0.5rem" }}>{post.date}</div>
              <h2 style