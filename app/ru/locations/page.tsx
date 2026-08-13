import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Съёмка по всем 7 эмиратам ОАЭ | Backyard Studio Official",
  description: "Видео и фотосъёмка по всем 7 эмиратам ОАЭ. Дубай, Абу-Даби, Шарджа, Аджман, РАК, Фуджейра и УАК. Без платы за выезд. Расчёт за 2 часа.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/locations",
    languages: {
      "en": "https://www.backyardstudioofficial.com/locations",
      "ar": "https://www.backyardstudioofficial.com/ar/locations",
      "ru": "https://www.backyardstudioofficial.com/ru/locations",
      "zh": "https://www.backyardstudioofficial.com/zh/locations",
      "x-default": "https://www.backyardstudioofficial.com/locations",
    },
  },
  openGraph: {
    title: "Видеосъёмка по всем 7 эмиратам ОАЭ | Backyard Studio Official",
    description: "Профессиональная видео и фотосъёмка в Дубае, Абу-Даби, Шардже, Аджмане, РАК, Фуджейре и УАК. Без платы за выезд. Расчёт за 2 часа.",
    url: "https://www.backyardstudioofficial.com/ru/locations",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Видеосъёмка в ОАЭ — Backyard Studio Official" }],
  },
};

const LOCATIONS_FAQS = [
  { q: "Работает ли Backyard Studio во всех 7 эмиратах?", a: "Да. Backyard Studio Official предоставляет профессиональные услуги видео и фотосъёмки по всем 7 эмиратам ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Мы можем развернуть съёмочную группу в любом эмирате за 24–48 часов." },
  { q: "Есть ли дополнительная плата за выезд за пределы Дубая?", a: "Backyard Studio Official не взимает плату за выезд на съёмки в пределах ОАЭ. Будь то Дубай, Абу-Даби или Рас-эль-Хайма — транспортные расходы включены в стоимость производства." },
 { q: "Какие виды съёмки доступны по всему ОАЭ?", a: "Мы предлагаем полный спектр производственных услуг по всем эмиратам: видеосъёмка мероприятий, свадебная фотография, DVC (цифровые рекламные ролики), Instagram Reels и TikTok, корпоративные фильмы, аэросъёмка дроном (аэросъёмка), видеоотзывы и рекламная съёмка." },
];

const EMIRATES = [
  { name: "Дубай",        slug: "dubai",          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", areas: 25, desc: "Downtown, Marina, JBR, DIFC, Пальма, Business Bay, JLT и многое другое." },
  { name: "Абу-Даби",     slug: "abu-dhabi",       image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80", areas: 10, desc: "Yas Island, Saadiyat, Corniche, Al Reem, ADGM и многое другое." },
  { name: "Шарджа",       slug: "sharjah",         image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", areas: 5,  desc: "Al Majaz, Al Qasba, набережная Шарджи, Al Khan." },
  { name: "Аджман",       slug: "ajman",           image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80", areas: 4,  desc: "Корнише Аджмана, Al Jurf, Al Rashidiya." },
  { name: "Рас-эль-Хайма", slug: "ras-al-khaimah", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80", areas: 4,  desc: "Город РАК, Al Hamra Village, Джебель Джаис." },
  { name: "Фуджейра",     slug: "fujairah",        image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=800&q=80", areas: 3,  desc: "Город Фуджейра, Дибба, побережье Хорфаккан." },
  { name: "Умм-эль-Кайвайн", slug: "umm-al-quwain", image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=800&q=80", areas: 2,  desc: "Город УАК, зона Dreamland Aqua Park." },
];

export default function RuLocationsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LOCATIONS_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" as const, borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" as const }}>По всей стране</p>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem", textTransform: "uppercase" as const }}>Покрытие ОАЭ</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>
          Снимаем по всем 7 эмиратам — в каждом городе, каждом районе, с любым видением.
        </p>
      </div>

      {/* Grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`} style={{ display: "block", border: "1px solid #2a2a2a", borderRadius: "2px", overflow: "hidden", background: "#1a1a1a", textDecoration: "none" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                <img src={e.image} alt={`Видеосъёмка в ${e.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" as const, display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", background: "rgba(0,0,0,0.7)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>{e.areas}+ районов</span>
                </div>
              </div>
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{e.name}</h2>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center" as const, marginBottom: "2.5rem", textTransform: "uppercase" as const }}>Вопросы о покрытии</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
            {LOCATIONS_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" as const, marginTop: "2.5rem" }}>
            <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase" as const }}>Расчёт для всего ОАЭ →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
