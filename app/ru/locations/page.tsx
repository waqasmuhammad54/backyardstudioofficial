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
  { name: "Дубай", en: "Dubai", slug: "dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", desc: "Даунтаун, Марина, Пальма Джумейра, DIFC, Бизнес Бэй и более 25 районов." },
  { name: "Абу-Даби", en: "Abu Dhabi", slug: "abu-dhabi", image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=600&q=80", desc: "Остров Яс, Саадият, Корниш, Аль-Рим, ADGM и другие." },
  { name: "Шарджа", en: "Sharjah", slug: "sharjah", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&q=80", desc: "Аль-Маджаз, Аль-Касба, набережная Шарджи, Аль-Хан." },
  { name: "Аджман", en: "Ajman", slug: "ajman", image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80", desc: "Набережная Аджмана, Аль-Джурф, Аль-Рашидия." },
  { name: "Рас-эль-Хайма", en: "Ras Al Khaimah", slug: "ras-al-khaimah", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&q=80", desc: "Город RAK, деревня Аль-Хамра, Джебель-Джайс." },
  { name: "Фуджейра", en: "Fujairah", slug: "fujairah", image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=600&q=80", desc: "Город Фуджейра, Дибба, побережье Хорфаккан." },
  { name: "Умм-эль-Кайвайн", en: "Umm Al Quwain", slug: "umm-al-quwain", image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=600&q=80", desc: "Город UAQ, район Dreamland Aqua Park." },
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
              style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", textDecoration: "none" }}>
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img src={e.image} alt={`Профессиональная съёмка в ${e.name}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>{e.name}</h2>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.5)", fontSize: "0.8rem", marginBottom: "0.6rem" }}>{e.en}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{e.desc}</p>
                <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.8rem", marginTop: "0.75rem", display: "block" }}>Подробнее →</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem 2rem", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", maxWidth: "600px", margin: "3rem auto 0" }}