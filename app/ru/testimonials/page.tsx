import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы клиентов | Backyard Studio Official Дубай",
  description: "100+ отзывов с оценкой 5 звёзд от брендов ОАЭ. Съёмка мероприятий, DVC, Reels, контент для соцсетей и производственные услуги по всем 7 эмиратам.",
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
    title: "Отзывы клиентов | Backyard Studio Official Дубай",
    description: "100+ отзывов с оценкой 5 звёзд. Самая доверенная продакшн-студия Дубая для мероприятий, DVC, соцсетей и фотосъёмки.",
    url: "https://www.backyardstudioofficial.com/ru/testimonials",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Отзывы клиентов — Backyard Studio Official" }],
  },
};

const TESTIMONIALS = [
  { name: "Александра", service: "Съёмка мероприятий",    stars: 5, quote: "Backyard Studio сняли наше корпоративное мероприятие с таким кинематографическим качеством, что весь зал был в восторге. Профессионализм на каждом шагу — от подготовки до финального монтажа." },
  { name: "Дмитрий",    service: "Контент для соцсетей",  stars: 5, quote: "Reels-кампания, которую они сделали для нашего бренда, набрала миллионы просмотров органически. Они понимают, что работает для аудитории в ОАЭ, лучше кого-либо ещё." },
  { name: "Наталья",    service: "Корпоративные фильмы",  stars: 5, quote: "Корпоративный фильм, который они произвели для нас, стал нашим лучшим маркетинговым инструментом. Команда полностью погрузилась в наш бренд и передала его суть идеально." },
  { name: "Михаил",     service: "DVC реклама",            stars: 5, quote: "Производство нашей DVC было безупречным — от выбора локации до финальной цветокоррекции. Backyard Studio играют в другой лиге. Каждый дирхам вложен с умом." },
  { name: "Елена",      service: "Свадебная съёмка",       stars: 5, quote: "Кинематографическая съёмка нашей свадьбы превзошла все ожидания. Каждый момент запечатлён с такой нежностью и мастерством. Это настоящее искусство, а не просто видео." },
  { name: "Андрей",     service: "Reels / TikTok",         stars: 5, quote: "Наш аккаунт в TikTok вырос многократно за 3 месяца после партнёрства с Backyard Studio. Их подход к короткому видеоконтенту исключительный и результативный." },
  { name: "Ирина",      service: "Аэросъёмка GCAA",        stars: 5, quote: "Аэросъёмка добавила совершенно другое измерение к нашему контенту. Всё организовано юридически грамотно, с разрешениями GCAA. Результат превзошёл ожидания." },
  { name: "Сергей",     service: "Съёмка продуктов",       stars: 5, quote: "Фотографии продуктов, которые они сделали, подняли конверсию нашего интернет-магазина на заметный уровень. Качество — журнальный уровень при разумной цене." },
  { name: "Ольга",      service: "Съёмка мероприятий",     stars: 5, quote: "Работала с ними на нескольких мероприятиях в Дубае и Абу-Даби. Стабильное качество, креативный подход и пунктуальность в каждом проекте — это их визитная карточка." },
];

export default function RuTestimonialsPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", paddingTop: "6rem" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" as const, borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" as const }}>Отзывы клиентов</p>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem", textTransform: "uppercase" as const }}>Что говорят клиенты</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
          ))}
          <span style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", marginLeft: "0.5rem", fontSize: "0.85rem" }}>5.0 — 100+ отзывов</span>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ padding: "1.5rem", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "2px", display: "flex", flexDirection: "column" as const }}>
              <span style={{ color: "rgba(212,175,55,0.25)", fontSize: "2rem", lineHeight: 1, marginBottom: "1rem" }}>"</span>
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "0.75rem" }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.88rem", lineHeight: 1.85, flex: 1, fontStyle: "italic", marginBottom: "1.25rem" }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.4rem" }}>{t.name}</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.3)", padding: "0.2rem 0.6rem", borderRadius: "2px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" as const, marginTop: "4rem" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>Готовы присоединиться к 500+ довольным клиентам в ОАЭ?</p>
          <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase" as const }}>Начать проект →</a>
        </div>
      </section>
    </div>
  );
}
