import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير النكاح في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير احترافي لحفلات النكاح في دبي — مراسم المسجد، النكاح المنزلي، والنكاح في القاعات. أسلوب هادئ يحترم قدسية المناسبة. من 2,500 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-nikah-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-nikah-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/nikah-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير النكاح في دبي 2026",
    description: "مصور نكاح في دبي — توثيق رقيق ومحترم لأقدس لحظات حياتك.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NikahPhotoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير النكاح في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ باقات تصوير النكاح في دبي من AED 2,500 لجلسة 3 ساعات مع مصوّر واحد. الباقة الشاملة مع تصوير فيديو وألبوم رقمي تبدأ من AED 6,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون النكاح في المسجد؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، مع احترام تام لحرمة المكان وقواعد التصوير في المساجد. نستخدم معدات صامتة وإضاءة طبيعية لا تُربك المراسم.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير النكاح في المنزل أو في قاعة صغيرة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. أجمل لقطات النكاح غالباً تكون في البيئات الحميمة. نجلب إضاءة خفيفة تناسب الأجواء المنزلية ونوثّق اللحظات بشكل طبيعي.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون فقرة العقد والتوقيع بشكل خاص؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — لحظة التوقيع على عقد الزواج والقبول والإيجاب من أكثر اللحظات التي يريد الزوجان الاحتفاظ بها. نُعدّ الزوايا مسبقاً لنضمن التقاط هذه اللحظة بأفضل شكل ممكن.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير النكاح في دبي 2026 — توثيق رقيق لأقدس المواثيق",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-nikah-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>
          {" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>
          {" / "}
          <span>تصوير النكاح في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير النكاح
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير النكاح في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>توثيق رقيق لأقدس المواثيق</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80" alt="Nikah Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          النكاح لحظة مقدسة تستحق توثيقاً يعكس روحانيتها وعمقها. سواء كان نكاحاً بسيطاً في المسجد،
          أو احتفالاً عائلياً دافئاً في المنزل، أو حفلاً في قاعة — المهم أن يلتقط المصوّر
          الجوهر لا المظهر.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو أوفيشيال، نتعامل مع جلسات النكاح باحترام ثقافي وديني كامل. نعمل بهدوء،
          بمعدات غير مقحمة، ونوثّق اللحظات الحقيقية التي ستريدون العودة إليها دائماً.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما الذي نوثّقه في جلسة النكاح
        </h2>

        {[
          { title: "لحظة العقد والتوقيع", desc: "نُعدّ الزوايا مسبقاً لنضمن التقاط لحظة الإيجاب والقبول من زاوية مثالية دون إزعاج أحد." },
          { title: "تفاصيل المجلس والديكور", desc: "الزهور، الشموع، المصحف، حلقات الزواج — تفاصيل صغيرة تصنع ذاكرة بصرية غنية." },
          { title: "لحظات الأسرة والضيوف", desc: "ردود فعل الأهل، الدعاء المشترك، الأحضان العاطفية — هذه اللحظات التلقائية هي الأثمن." },
          { title: "صور الزوجين بعد النكاح", desc: "جلسة تصوير سريعة للزوجين بعد إتمام المراسم — بسيطة، أصيلة، وعميقة." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير النكاح في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة النكاح الأساسية", detail: "مصوّر واحد / 3 ساعات / ألبوم رقمي", price: "من AED 2,500" },
            { pkg: "جلسة النكاح الكاملة", detail: "مصوّر واحد / 6 ساعات + 100 صورة معدّلة", price: "من AED 4,500" },
            { pkg: "نكاح + فيديو", detail: "مصوّر + مصوّر فيديو / يوم كامل", price: "من AED 7,000" },
            { pkg: "نكاح + حفل ريسبشن", detail: "تغطية كاملة مصوّران + فيديو", price: "من AED 12,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز مصوّر نكاحك في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا لمناقشة التفاصيل — نردّ في خلال ساعتين.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
