import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
  description: "تعرّف على استوديو باكيارد أوفيشيال — شركة الإنتاج الإبداعي الرائدة في دبي. تأسست عام 2019 على يد فهد إقبال بط وسيد مظهر زيدي. أكثر من 2,400 مشروع ورخصة GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
    description: "شركة الإنتاج الإبداعي الرائدة في دبي. تأسست 2019. أكثر من 2,400 مشروع، رخصة GCAA، فريق بخبرة 20+ عاماً.",
    url: "https://www.backyardstudioofficial.com/ar/about",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "فريق باكيارد ستوديو أوفيشيال — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عن باكيارد ستوديو أوفيشيال — دبي",
    description: "تأسست 2019 على يد فهد إقبال بط. أكثر من 2,400 مشروع. رخصة GCAA.",
    images: ["/og-image.jpg"],
  },
};

export default function ArAboutPage() {
  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "عن الاستوديو", "item": "https://www.backyardstudioofficial.com/ar/about" },
            ],
          }),
        }}
      />
      {/* Person schemas — Fahad & Syed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.backyardstudioofficial.com/ar/about#fahad",
              "name": "فهد إقبال بط",
              "alternateName": "Fahad Iqbal Butt",
              "jobTitle": "المدير الإبداعي ومؤسس الاستوديو",
              "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
              "description": "مخرج سينمائي ومصور أزياء، خريج كلية الفنون الوطنية — لاهور. مؤسس باكيارد ستوديو أوفيشيال عام 2019.",
              "url": "https://www.backyardstudioofficial.com/ar/about",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.backyardstudioofficial.com/ar/about#syed",
              "name": "سيد مظهر زيدي",
              "alternateName": "Syed Mazhar Zaidi",
              "jobTitle": "مدير التصوير ورئيس ما بعد الإنتاج",
              "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
              "description": "مخرج سينمائي ومصور وثائقي بخبرة 20+ عاماً. ماجستير في الاتصال الجماهيري. أكثر من 50 كليب وإعلان ووثائقي.",
              "sameAs": ["https://www.imdb.com/name/nm1