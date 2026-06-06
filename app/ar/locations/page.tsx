import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مواقع التصوير في الإمارات السبع | باكيارد ستوديو أوفيشيال",
  description: "باكيارد ستوديو يصوّر في جميع الإمارات السبع — دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة وأم القيوين. بدون رسوم تنقل. عرض سعر مجاني خلال ساعتين.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/locations",
    languages: {
      "en": "https://www.backyardstudioofficial.com/locations",
      "ar": "https://www.backyardstudioofficial.com/ar/locations",
      "ru": "https://www.backyardstudioofficial.com/ru/locations",
      "zh": "https://www.backyardstudioofficial.com/zh/locations",
      "x-default": "https://www.backyardstudioofficial.com/locations",
    },
  },
  openGraph: {
    title: "مواقع التصوير في الإمارات السبع | باكيارد ستوديو أوفيشيال",
    description: "تصوير احترافي في جميع الإمارات السبع. بدون رسوم تنقل. نصل إليك في 48 ساعة.",
    url: "https://www.backyardstudioofficial.com/ar/locations",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "مواقع التصوير في الإمارات — باكيارد ستوديو" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مواقع التصوير في الإمارات السبع",
    description: "دبي، أبوظبي، الشارقة وجميع الإمارات. بدون رسوم تنقل.",
    images: ["/og-image.jpg"],
  },
};

const EMIRATES = [
  { name: "دبي", slug: "dubai", desc: "وسط المدينة، المارينا، نخلة جميرا، DIFC، Business Bay وأكثر من 25 منطقة." },
  { name: "أبوظبي", slug: "abu-dhabi", desc: "جزيرة ياس، جزيرة السعديات، الكورنيش، الريم، ADGM وأكثر." },
  { name: "الشارقة", slug: "sharjah", desc: "الماجاز، القصباء، واجهة الشارقة المائية، الخان." },
  { name: "عجمان", slug: "ajman", desc: "كورنيش عجمان، الجرف، الراشدية." },
  { name: "رأس الخيمة", slug: "ras-al-khaimah", desc: "مدينة RAK، قرية الحمراء، جبل جيس." },
  { name: "الفجيرة", slug: "fujairah", desc: "مدينة الفجيرة، دبا، شاطئ خورفكان." },
  { name: "أم القيوين", slug: "umm-al-quwain", desc: "مدينة UAQ، منطقة دريملاند أكوا بارك." },
];

export default function ArLocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "المواقع", "item": "https://www.backyardstudioofficial.com/ar/locations" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "مواقع التصوير في الإمارات — باكيارد ستوديو أوفيشيال",
            "itemListElement": EMIRATES.map((e, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": e.name,
              "url": `https://www.backyardstudioofficial.com/locations/${e.slug}`,
            })),
          }),
        }}
      />

      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>تغطية وطنية</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>مواقع التصوير في الإمارات</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          نص