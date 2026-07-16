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
  { name: "دبي", slug: "dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", desc: "وسط المدينة، المارينا، نخلة جميرا، DIFC، Business Bay وأكثر من 25 منطقة." },
  { name: "أبوظبي", slug: "abu-dhabi", image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=600&q=80", desc: "جزيرة ياس، جزيرة السعديات، الكورنيش، الريم، ADGM وأكثر." },
  { name: "الشارقة", slug: "sharjah", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&q=80", desc: "الماجاز، القصباء، واجهة الشارقة المائية، الخان." },
  { name: "عجمان", slug: "ajman", image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80", desc: "كورنيش عجمان، الجرف، الراشدية." },
  { name: "رأس الخيمة", slug: "ras-al-khaimah", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&q=80", desc: "مدينة RAK، قرية الحمراء، جبل جيس." },
  { name: "الفجيرة", slug: "fujairah", image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=600&q=80", desc: "مدينة الفجيرة، دبا، شاطئ خورفاكان." },
  { name: "أم القيوين", slug: "umm-al-quwain", image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=600&q=80", desc: "مدينة UAQ، منطقة دريملاند أكوا بارك." },
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
          نصوّر في جميع الإمارات السبع — بدون رسوم تنقل داخل الدولة. نصل إليك أينما كنت.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`}
              style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", textDecoration: "none" }}>
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img src={e.image} alt={`تصوير احترافي في ${e.name}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{e.name}</h2>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>{e.desc}</p>
                <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.8rem" }}>تفاصيل المنطقة ←</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem 2rem", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            هل تحتاج تصوير في موقع محدد؟
          </h3>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            تواصل معنا وسنصل إليك في أي مكان في الإمارات. نعمل في المواقع الخارجية، الداخلية، والجوية بطائرات مسيّرة مرخصة من هيئة الطيران المدني.
          </p>
          <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
            احصل على عرض سعر
          </a>
        </div>
      </section>
    </>
  );
}
