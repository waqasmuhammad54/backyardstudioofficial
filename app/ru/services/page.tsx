import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги видеосъёмки в Дубае | Backyard Studio Official",
  description: "Полный спектр услуг видеопроизводства в Дубае и ОАЭ: корпоративное видео, свадебная съёмка, мероприятия, аэросъёмка дроном, контент для соцсетей, фотосъёмка товаров.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/services" },
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

export default function RuServicesPage() {
  return (
    <>
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
    </>
  );
}
