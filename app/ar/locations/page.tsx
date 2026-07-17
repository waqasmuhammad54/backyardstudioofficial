import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مناطق التصوير في الإمارات | جميع الإمارات السبع — باكيارد ستوديو",
  description: "تصوير فيديو واحترافي في جميع الإمارات السبع. دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة وأم القيوين. بدون رسوم تنقل. عرض سعر مجاني في ساعتين.",
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
    title: "تصوير فيديو في جميع الإمارات السبع | باكيارد ستوديو أوفيشيال",
    description: "تصوير فيديو وفوتوغرافي احترافي في دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة وأم القيوين. بدون رسوم تنقل. عرض سعر في ساعتين.",
    url: "https://www.backyardstudioofficial.com/ar/locations",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "تصوير في الإمارات السبع — باكيارد ستوديو" }],
  },
};

const LOCATIONS_FAQS = [
  { q: "هل يغطي باكيارد ستوديو جميع الإمارات السبع؟", a: "نعم. يوفر باكيارد ستوديو أوفيشيال خدمات تصوير فيديو وفوتوغرافي احترافية في جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. يمكننا تجهيز فريق في أي إمارة خلال 24-48 ساعة." },
  { q: "هل هناك رسوم تنقل خارج دبي؟", a: "لا يتقاضى باكيارد ستوديو أوفيشيال رسوم تنقل للتصوير داخل الإمارات. سواء كانت مهمة التصوير في دبي أو أبوظبي أو رأس الخيمة، تشمل تكلفة الإنتاج المتفق عليها التنقل." },
  { q: "ما خدمات التصوير المتاحة في جميع أنحاء الإمارات؟", a: "نقدم كامل خدماتنا الإنتاجية في جميع الإمارات: تصوير الفعاليات، الأعراس، إعلانات DVC، محتوى إنستغرام والريلز، أفلام مؤسسية، تصوير جوي بطائرة مسيّرة بترخيص GCAA، فيديوهات الشهادات والإعلانات التجارية." },
];

const EMIRATES = [
  { name: "دبي",        slug: "dubai",          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", areas: 25, desc: "داون تاون، مارينا، JBR، DIFC، النخلة، بيزنس باي، JLT وأكثر." },
  { name: "أبوظبي",    slug: "abu-dhabi",       image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80", areas: 10, desc: "جزيرة ياس، السعديات، الكورنيش، الريم، ADGM وأكثر." },
  { name: "الشارقة",   slug: "sharjah",         image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", areas: 5,  desc: "المجاز، القصباء، الواجهة المائية، الخان." },
  { name: "عجمان",     slug: "ajman",           image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80", areas: 4,  desc: "كورنيش عجمان، الجرف، الراشدية." },
  { name: "رأس الخيمة", slug: "ras-al-khaimah", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80", areas: 4,  desc: "مدينة رأس الخيمة، قرية الحمراء، جبل جيس." },
  { name: "الفجيرة",   slug: "fujairah",        image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=800&q=80", areas: 3,  desc: "مدينة الفجيرة، دبا، كورنيش خورفكان." },
  { name: "أم القيوين", slug: "umm-al-quwain",  image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=800&q=80", areas: 2,  desc: "مدينة أم القيوين، منطقة دريملاند." },
];

export default function ArLocationsPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
      { "@type": "ListItem", "position": 2, "name": "مناطق التصوير", "item": "https://www.backyardstudioofficial.com/ar/locations" },
    ],
  };

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
    <div dir="rtl" style={{ fontFamily: "Cairo, sans-serif", paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center", borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" }}>تغطية شاملة</p>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>التغطية في الإمارات</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>
          نصوّر في جميع الإمارات السبع — كل مدينة، كل حي، كل رؤية إبداعية.
        </p>
      </div>

      {/* Emirates grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`} style={{ display: "block", border: "1px solid #2a2a2a", borderRadius: "2px", overflow: "hidden", background: "#1a1a1a", textDecoration: "none" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                <img src={e.image} alt={`تصوير فيديو في ${e.name}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
                <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem" }}>
                  <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", background: "rgba(0,0,0,0.7)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>{e.areas}+ منطقة</span>
                </div>
              </div>
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{e.name}</h2>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center", marginBottom: "2.5rem" }}>أسئلة شائعة عن التغطية</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {LOCATIONS_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>احصل على عرض سعر لجميع الإمارات ←</a>
          </div>
        </div>
      </section>
    </div>
  );
}
