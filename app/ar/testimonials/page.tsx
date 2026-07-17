import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آراء العملاء | باكيارد ستوديو أوفيشيال دبي",
  description: "أكثر من 100 تقييم خمس نجوم من عملاء الإمارات. تصوير فعاليات، أعراس، إعلانات، محتوى سوشيال ميديا وخدمات إنتاج في جميع الإمارات السبع.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "آراء العملاء | باكيارد ستوديو أوفيشيال دبي",
    description: "أكثر من 100 تقييم خمس نجوم من عملاء الإمارات. أكثر استوديوهات الإنتاج ثقة في دبي.",
    url: "https://www.backyardstudioofficial.com/ar/testimonials",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "آراء عملاء باكيارد ستوديو أوفيشيال" }],
  },
};

const TESTIMONIALS = [
  { name: "أحمد", service: "تصوير الفعاليات",     stars: 5, quote: "فريق احترافي بكل معنى الكلمة. غطّوا فعاليتنا بمستوى سينمائي رفيع وسلّموا المواد في وقت أقل من المتوقع. الجودة تفوق السعر بمراحل." },
  { name: "سارة", service: "محتوى السوشيال ميديا", stars: 5, quote: "الريلز التي أنتجوها لنا حصدت ملايين المشاهدات بشكل عضوي. يفهمون الجمهور الإماراتي ويعرفون ما الذي يشتغل على المنصات الرقمية." },
  { name: "محمد", service: "أفلام مؤسسية",         stars: 5, quote: "الفيلم التعريفي الذي أنتجوه لنا أصبح أقوى أداة تسويقية لدينا. الفريق محترف، منظم، ومبدع في كل مرحلة من مراحل الإنتاج." },
  { name: "نورة", service: "تصوير الأعراس",        stars: 5, quote: "التصوير السينمائي ليلة زفافي فاق كل توقعاتي. كل لحظة وُثّقت بعدسة فنانة حقيقية. شكر لا يكفي هذا الفريق الرائع." },
  { name: "خالد", service: "إعلانات DVC",           stars: 5, quote: "أنتجوا إعلانًا تجاريًا رفع مبيعاتنا الرقمية بشكل ملحوظ خلال الأشهر الأولى. الإبداع والتنفيذ في مستوى عالمي." },
  { name: "ليلى", service: "ريلز",                  stars: 5, quote: "حوّلوا أفكاري البسيطة إلى محتوى بصري مذهل. كل ريل ينتجونه يحمل بصمة إبداعية مميزة ويحقق تفاعلاً عالياً." },
  { name: "فيصل", service: "تصوير جوي GCAA",        stars: 5, quote: "أطلقونا على ارتفاعات مذهلة بتصريح GCAA رسمي. اللقطات الجوية أضافت بُعداً آخر لمحتوى مشروعنا العقاري." },
  { name: "مريم", service: "تصوير المنتجات",        stars: 5, quote: "صور المنتجات التي التقطوها رفعت معدل التحويل في متجرنا الإلكتروني بشكل واضح. جودة جوية في كل إطار." },
  { name: "عمر",  service: "تصوير الفعاليات",      stars: 5, quote: "وثّقوا مؤتمرنا السنوي بكل احترافية واتسام بالدقة. ثلاث كاميرات، صوت مثالي، ومونتاج سريع في اليوم التالي مباشرة." },
];

export default function ArTestimonialsPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "Cairo, sans-serif", paddingTop: "6rem" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center", borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" }}>آراء العملاء</p>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>ماذا يقول عملاؤنا</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
          ))}
          <span style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", marginRight: "0.5rem", fontSize: "0.85rem" }}>5.0 — أكثر من 100 تقييم</span>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ padding: "1.5rem", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "2px", display: "flex", flexDirection: "column" }}>
              <span style={{ color: "rgba(212,175,55,0.25)", fontSize: "2rem", lineHeight: 1, marginBottom: "1rem" }}>"</span>
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "0.75rem" }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.88rem", lineHeight: 1.85, flex: 1, fontStyle: "italic", marginBottom: "1.25rem" }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.4rem" }}>{t.name}</p>
                <span style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.65rem", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.3)", padding: "0.2rem 0.6rem", borderRadius: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>هل أنت مستعد للانضمام إلى أكثر من 500 عميل سعيد في الإمارات؟</p>
          <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>ابدأ مشروعك الآن ←</a>
        </div>
      </section>
    </div>
  );
}
