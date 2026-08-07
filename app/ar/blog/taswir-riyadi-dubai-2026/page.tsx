import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير رياضي في دبي 2026 | باكيارد ستوديو",
  description:
    "مصوّر رياضي محترف في دبي. تصوير كرة القدم، الكريكيت، التنس، اللياقة، الماراثون والفنون القتالية. خدمة تصوير جوي معتمدة من GCAA. من AED 1,500.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-riyadi-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-riyadi-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/sports-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير رياضي في دبي 2026",
    description: "تصوير احترافي للفعاليات والرياضيين في دبي — كرة قدم، لياقة، ماراثون، فنون قتالية. ديناميكية حقيقية.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SportsPhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة المصوّر الرياضي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ تصوير الفعاليات الرياضية في دبي من AED 1,500 لمباراة أو فعالية واحدة (3–4 ساعات، 60–80 صورة معدّلة). جلسة الرياضي الشخصية للبورتفوليو والسوشيال ميديا من AED 1,200. تصوير يوم كامل للبطولات من AED 2,500.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون جلسات اللياقة البدنية في الصالات الرياضية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نصوّر محتوى للمدرّبين الشخصيين، صالات الكروسفيت، استوديوهات اليوغا والفنون القتالية. الجلسة تتضمن صور تمارين ديناميكية وبورتريهات احترافية ومحتوى للإنستغرام والتيك توك.",
        },
      },
      {
        "@type": "Question",
        name: "هل تستخدمون الطائرة المسيّرة في تصوير الفعاليات الرياضية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — التصوير الجوي يُنفَّذ بترخيص GCAA للتصوير التجاري بالطائرة المسيّرة في الإمارات. تصوير الماراثون والملاعب المفتوحة والفعاليات الشاطئية من الجو يضيف بُعداً استثنائياً.",
        },
      },
      {
        "@type": "Question",
        name: "ما سرعة التسليم بعد التصوير الرياضي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "التسليم القياسي 48–72 ساعة. للصحافة والسوشيال ميديا العاجلة، نُسلّم مجموعة أولية من 15–20 صورة في نفس يوم التصوير.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير رياضي في دبي 2026 — الديناميكية الحقيقية في اللحظة المناسبة",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-riyadi-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير رياضي في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          التصوير الرياضي
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير رياضي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>القوة والحركة — اللحظة الحقيقية</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>5 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80" alt="Sports Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي عاصمة الرياضة في الشرق الأوسط. بطولة دبي للتنس، سباقات الفورمولا E، ماراثون دبي،
          دوريات الكريكيت، بطولات البادل — كلها تجري هنا. والتصوير الرياضي الاحترافي يحتاج مصوّراً
          يعرف ميكانيكا الرياضة قبل أن يضغط زر الشاتر.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          يصوّر فريق باكيارد ستوديو الرياضة في دبي منذ 2017 — مباريات احترافية، بطولات نادية،
          جلسات شخصية للرياضيين ومحتوى لعلامات اللياقة البدنية. نصطاد اللحظة الذروة قبل أن تحدث.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الرياضات التي نصوّرها في دبي
        </h2>

        {[
          { sport: "كرة القدم وكرة القدم الشاطئية", desc: "مباريات، تدريبات، صور جماعية للفرق في الملاعب والصالات." },
          { sport: "الكريكيت", desc: "أكاديمية ICC دبي، بطولات DSC. جمهور واسع في مجتمع جنوب آسيا بدبي." },
          { sport: "التنس", desc: "ملعب دبي للتنس وأندية خاصة. مباريات أكاديمية واحترافية." },
          { sport: "اللياقة البدنية والكروسفيت", desc: "تصوير المدرّبين والصالات والمسابقات. محتوى لإنستغرام وتيك توك." },
          { sport: "الماراثون والجري", desc: "ماراثون دبي، سلسلة سباقات Run Series، الجري الجبلي في حتّا. تصوير بالطائرة المسيّرة." },
          { sport: "الفنون القتالية (BJJ، MMA، الملاكمة)", desc: "الحلبة، القفص، التمارين المشتركة. تصوير الأبطال والأكاديميات." },
        ].map(({ sport, desc }) => (
          <div key={sport} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.2rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.2rem" }}>{sport}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات التصوير الرياضي في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "فعالية / مباراة", detail: "3–4 ساعات / 60–80 صورة / تسليم 48ساعة", price: "من AED 1,500" },
            { pkg: "جلسة رياضي شخصية", detail: "ساعتان / استوديو + موقع / 30–40 صورة", price: "من AED 1,200" },
            { pkg: "بطولة (يوم كامل)", detail: "8 ساعات / 150+ صورة / معرض إلكتروني", price: "من AED 2,500" },
            { pkg: "محتوى لياقة + ريلز", detail: "ساعتان / 20–25 صورة + 2–3 ريلز", price: "من AED 1,800" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.95rem" }}>{pkg}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.5)", marginTop: "0.2rem" }}>{detail}</div>
              </div>
              <div style={{ color: "var(--gold)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز مصوّرك الرياضي في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا لنحدد الموعد والموقع المناسبَين لفعاليتك.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
