import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مصور حفلات عيد الميلاد في دبي 2026 | باكيارد ستوديو",
  description:
    "مصور احترافي لحفلات أعياد الميلاد في دبي من AED 800. أطفال وبالغين، حفلات منزلية وقاعات، تسليم خلال 48 ساعة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/musawir-eid-milad-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/musawir-eid-milad-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/birthday-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "مصور عيد الميلاد في دبي 2026 | باكيارد ستوديو",
    description: "مصور حفلات عيد الميلاد في دبي. لحظات لا تُنسى بعدسة محترفة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BirthdayPhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة مصور عيد الميلاد في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير حفلات أعياد الميلاد في دبي من AED 800 لساعتين من التصوير مع 50 صورة محررة. الحفلات الكبيرة أو الطويلة تبدأ من AED 1,500 لليوم الكامل.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون أعياد ميلاد الأطفال وكذلك البالغين؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نغطي أعياد ميلاد لجميع الأعمار — من الأول وحتى السبعين. للأطفال لدينا مصورون متخصصون في التعامل معهم. للبالغين، نركز على اللحظات التلقائية والتفاصيل التي تحكي قصة الاحتفال.",
        },
      },
      {
        "@type": "Question",
        name: "هل تحتاجون إلى حد أدنى من الوقت في الحفلة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نوصي بساعتين على الأقل للحصول على تغطية شاملة — الضيوف في وصولهم، التفاصيل، قطع الكيكة، اللعب، والصور العائلية. الحفلات الكبيرة تحتاج 3 ساعات فأكثر.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن إضافة جلسة بورتريه للمحتفى به/بها بجانب تصوير الحفلة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. كثير من عملائنا يطلبون جلسة بورتريه قبل الحفلة بساعة — نصور المحتفى بها بلباسها وإكسسواراتها قبل أن تبدأ ضجة الحفلة، ثم ننتقل لتغطية الحدث.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>مصور عيد الميلاد دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير مناسبات
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          مصور عيد الميلاد في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>لحظات الاحتفال تستحق عدسة محترفة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="مصور عيد الميلاد في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          حفلة عيد الميلاد تمر في طرفة عين. وسط الضحكات والموسيقى والكيكة وصرخات المفاجأة،
          اللحظات تُصنع وتختفي. مصور محترف متخصص في حفلات أعياد الميلاد هو من يمسك هذه
          اللحظات بالكاميرا قبل أن تضيع في الذاكرة.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نغطي أعياد الميلاد في دبي بأسلوب وثائقي طبيعي — لا نوقف الحفلة
          لنأخذ الصور، بل نذوب في الأجواء ونلتقط كل لحظة حقيقية كما حدثت.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ماذا يلتقط مصور عيد الميلاد؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          تفاصيل الديكور قبل وصول الضيوف، التعابير الأولى لحظة المفاجأة، الضحكات بين الأصدقاء،
          قطع الكيكة، النفخ على الشموع، الهدايا، رقصات الأطفال، وعناق النهاية.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          نلتقط كذلك صوراً جماعية منظمة للأسرة والأصدقاء بطريقة سلسة لا تقاطع تدفق الحفلة.
          في نهاية الجلسة يكون لديك ألبوم كامل يحكي قصة اليوم من البداية حتى النهاية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير عيد الميلاد في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "تغطية أساسية", detail: "ساعتان / 50 صورة محررة", price: "AED 800" },
            { pkg: "تغطية موسّعة", detail: "3 ساعات / 80 صورة + ريل", price: "AED 1,300" },
            { pkg: "تغطية يوم كامل", detail: "6 ساعات / 150+ صورة + فيديو", price: "AED 2,200" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
              <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>أسئلة شائعة</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "كم تكلفة مصور عيد الميلاد في دبي؟", a: "من AED 800 لتغطية ساعتين. اليوم الكامل من AED 2,200." },
            { q: "هل تصوّرون أعياد ميلاد الأطفال والبالغين؟", a: "نعم لجميع الأعمار. للأطفال لدينا مصورون متخصصون في التعامل معهم." },
            { q: "ما الحد الأدنى للوقت في الحفلة؟", a: "ساعتان كحد أدنى للتغطية الشاملة. الحفلات الكبيرة تحتاج 3 ساعات." },
            { q: "هل يمكن إضافة جلسة بورتريه للمحتفى به؟", a: "نعم، كثير من عملائنا يطلبون جلسة بورتريه قبل بدء الحفلة بساعة." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز مصور عيد الميلاد</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>أخبرنا عن تاريخ وموقع الحفلة ونؤكد لك الحجز.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
