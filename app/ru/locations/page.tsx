import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Локации для съёмки в ОАЭ | Все 7 эмиратов — Backyard Studio Official",
  description: "Профессиональная видеосъёмка во всех 7 эмиратах ОАЭ — Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Без доплаты за выезд, мобилизация 48 часов.",
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
    title: "Локации для съёмки — Все 7 эмиратов ОАЭ | Backyard Studio Official",
    description: "Дубай, Абу-Даби, Шарджа и все ОАЭ. Без доплаты за выезд. Лицензия GCAA.",
    url: "https://www.backyardstudioofficial.com/ru/locations",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Локации для съёмки в ОАЭ — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Локации для съёмки — 7 эмиратов ОАЭ",
    description: "Дубай·Абу-Даби·Шарджа и все ОАЭ. Без доплат. GCAA.",
    images: ["/og-image.jpg"],
  },
};

const EMIRATES = [
  { name: "Дубай", en: "Dubai", slug: "dubai", desc: "Даунтаун, Марина, Пальма Джумейра, DIFC, Бизнес Бэй и более 25 районов." },
  { name: "Абу-Даби", en: "Abu Dhabi", slug: "abu-dhabi", desc: "Остров Яс, Саадият, Корниш, Аль-Рим, ADGM и другие." },
  { name: "Шарджа", en: "Sharjah", slug: "sharjah", desc: "Аль-Маджаз, Аль-Касба, набережная Шарджи, Аль-Хан." },
  { name: "Аджман", en: "Ajman", slug: "ajman", desc: "Набережная Аджмана, Аль-Джурф, Аль-Рашидия." },
  { name: "Рас-эль-Хайма", en: "Ras Al Khaimah", slug: "ras-al-khaimah", desc: "Город RAK, деревня Аль-Хамра, Джебель-Джайс." },
  { name: "Фуджейра", en: "Fujairah", slug: "fujairah", desc: "Город Фуджейра, Дибба, побережье Хорфаккан." },
  { name: "Умм-эль-Кайвайн", en: "Umm Al Quwain", slug: "umm-al-quwain", desc: "Город UAQ, район Dreamland Aqua Park." },
];

export default function RuLocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Локации", "item": "https://www.backyardstudioofficial.com/ru/locations" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        "name": "Эмираты ОАЭ — Backyard Studio Official",
        "itemListElement": EMIRATES.map((e, i) => ({
          "@type": "ListItem", "position": i + 1,
          "name": `${e.name} (${e.en})`,
          "url": `https://www.backyardstudioofficial.com/locations/${e.slug}`,
        })),
      }) }} />

      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>ГЕОГРАФИЯ СЪЁМОК</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Локации в ОАЭ</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          Снимаем во всех 7 эмиратах без дополнительной платы за выезд. Приедем туда, где нужно вам.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`}
              style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem", textDecoration: "none" }}>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>{e.name}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.5)", fontSize: "0.8rem", marginBottom: "0.6rem" }}>{e.en}</p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{e.desc}</p>
              <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.8rem", marginTop: "1rem", display: "block" }}>Подробнее →</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem 2rem", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            Нужна съёмка в конкретной локации?
          </h3>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Свяжитесь с нами — выедем в любую точку ОАЭ. Работаем на натуре, в интерьере и с дроном (лицензия GCAA).
          </p>
          <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
            Запросить стоимость →
          </a>
        </div>
      </section>
    </>
  );
}
