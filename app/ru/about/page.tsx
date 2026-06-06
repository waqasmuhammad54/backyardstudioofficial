import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Фахад Икбал Батт и Сайед Мазхар Зайди — Backyard Studio Дубай",
  description: "Backyard Studio Official основана в 2019 году Фахадом Икбалом Баттом (НКИ) и Сайедом Мазхаром Зайди (IMDB nm14029494). Более 2,400 проектов по всем эмиратам ОАЭ. Лицензия GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "О нас — Backyard Studio Official | Дубай",
    description: "Основатели Фахад Икбал Батт и Сайед Мазхар Зайди. 2,400+ проектов, лицензия GCAA.",
    url: "https://www.backyardstudioofficial.com/ru/about",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Команда Backyard Studio Official — Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О нас — Backyard Studio Official Дубай",
    description: "Фахад Икбал Батт и Сайед Мазхар Зайди. 2,400+ проектов. Лицензия GCAA.",
    images: ["/og-image.jpg"],
  },
};

export default function RuAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "О нас", "item": "https://www.backyardstudioofficial.com/ru/about" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        "@id": "https://www.backyardstudioofficial.com/#fahad-iqbal-butt",
        "name": "Фахад Икбал Батт",
        "alternateName": "Fahad Iqbal Butt",
        "jobTitle": "Директор и главный фотограф",
        "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
        "description": "Режиссёр и фэшн-фотограф, выпускник кинофакультета Национального колледжа искусств. Основатель Backyard Studio Official.",
        "url": "https://www.backyardstudioofficial.com/ru/about",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        "@id": "https://www.backyardstudioofficial.com/#syed-mazhar-zaidi",
        "name": "Сайед Мазхар Зайди",
        "alternateName": "Syed Mazhar Zaidi",
        "jobTitle": "Директор постпродакшна",
        "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
        "description": "Режиссёр и документалист с 20+ летним опытом. Магистр массовых коммуникаций, Университет GC. 50+ музыкальных клипов и рекламных роликов.",
        "sameAs": "https://www.imdb.com/name/nm14029494/",
        "url": "https://www.backyardstudioofficial.com/ru/about",
      }) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
  