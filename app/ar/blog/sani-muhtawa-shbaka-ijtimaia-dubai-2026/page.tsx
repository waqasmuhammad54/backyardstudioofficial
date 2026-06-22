import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صانع محتوى وسائل التواصل الاجتماعي في دبي 2026 | باكيارد ستوديو",
  description:
    "إنتاج محتوى احترافي لإنستغرام وتيك توك ويوتيوب في دبي. صور وريلز وفيديوهات تسويقية من AED 1,200. نساعدك تنمو رقمياً.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/sani-muhtawa-shbaka-ijtimaia-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/sani-muhtawa-shbaka-ijtimaia-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/social-media-content-creator-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "إنتاج محتوى وسائل التواصل في دبي 2026 | باكيارد ستوديو",
    description: "محتوى إبداعي لإنستغرام وتيك توك من فريق متخصص في دبي. نمو حقيقي على الشبكات الاجتماعية.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SocialMediaContentArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة إنتاج محتوى السوشيال ميديا في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ حزم إنتاج المحتوى من AED 1,200 لجلسة نصف يوم تشمل 20 صورة محررة و3 ريلز. الحزم الشهرية المستمرة تبدأ من AED 3,500 شهرياً وتشمل 4 جلسات و60 قطعة محتوى.",
        },
      },
      {
        "@type": "Question",
        name: "هل تساعدون في استراتيجية المحتوى أم فقط التصوير؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نقدم خدمة متكاملة: نبدأ بتحليل حسابك الحالي ونضع خطة محتوى شهرية، ثم التصوير والمونتاج والنشر. يمكنك أيضاً الاستعانة بخدمة التصوير فقط إذا كان لديك فريق تسويق داخلي.",
        },
      },
      {
        "@type": "Question",
        name: "هل تعملون مع المؤثرين في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نعمل مع المؤثرين في مراحل مختلفة من مسيرتهم — من النانو إنفلونسر الذي يبني جمهوره إلى المؤثر الكبير الذي يحتاج محتوى بجودة إنتاجية عالية لشراكاته مع العلامات التجارية.",
        },
      },
      {
        "@type": "Question",
        name: "ما المنصات التي تتخصصون في إنتاج محتوى لها؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "إنستغرام (بوست + ريلز + ستوريز)، تيك توك، يوتيوب (شورتس وفيديوهات طويلة)، ولينكد إن للمحتوى المهني. كل منصة لها متطلبات شكلية ومحتوى مختلف ونفهم هذا الفرق جيداً.",
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
          <span>صانع محتوى السوشيال ميديا</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          إنتاج محتوى رقمي
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          صانع محتوى السوشيال ميديا في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>محتوى يبني جمهوراً حقيقياً</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="صانع محتوى السوشيال ميديا في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في عالم تزداد فيه المنافسة على الشاشة كل يوم، المحتوى العشوائي لم يعد يكفي.
          الخوارزميات تكافئ المحتوى الذي يحجز الانتباه، والجمهور يتابع الحسابات التي تعطيه
          قيمة بصرية حقيقية. هذا ما نبنيه معك في باكيارد ستوديو.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          نعمل مع المؤثرين وأصحاب العلامات التجارية والمشاريع الصغيرة في دبي لإنتاج محتوى
          يعكس هويتهم ويجذب الجمهور المناسب. ليس فقط صوراً جميلة — بل محتوى له استراتيجية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ماذا يشمل إنتاج محتوى السوشيال ميديا معنا؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          نبدأ بتحليل حسابك الحالي — ما يعمل وما لا يعمل — ونضع خطة محتوى شهرية بناء على
          هويتك وجمهورك المستهدف. ثم ننفذ جلسات التصوير بانتظام.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          كل جلسة نصف يوم تنتج 20 صورة احترافية محررة و3 ريلز جاهزة للنشر. نهتم بالتفاصيل:
          الألوان المتناسقة، الكابشن المناسب، وأوقات النشر المثلى لكل منصة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          للعملاء الذين يريدون حضوراً مستمراً، نقدم حزم شهرية تشمل 4 جلسات وإدارة المحتوى.
          كثير من عملائنا لاحظوا نمواً ملموساً في متابعيهم ومعدلات التفاعل خلال الشهرين الأولين.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار إنتاج محتوى السوشيال ميديا في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة واحدة", detail: "نصف يوم / 20 صورة / 3 ريلز", price: "AED 1,200" },
            { pkg: "حزمة شهرية أساسية", detail: "4 جلسات / 60 قطعة محتوى", price: "AED 3,500" },
            { pkg: "حزمة شهرية متكاملة", detail: "8 جلسات + إدارة المحتوى", price: "AED 6,000" },
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
            { q: "كم تكلفة إنتاج محتوى السوشيال ميديا في دبي؟", a: "من AED 1,200 لجلسة واحدة. الحزم الشهرية من AED 3,500 تشمل 4 جلسات وإدارة المحتوى." },
            { q: "هل تساعدون في الاستراتيجية أم التصوير فقط؟", a: "نقدم الاثنين — تحليل الحساب وخطة المحتوى والتصوير والمونتاج. أو التصوير فقط إذا كان لديك فريق داخلي." },
            { q: "هل تعملون مع المؤثرين في دبي؟", a: "نعم، من النانو إنفلونسر الناشئ إلى المؤثر الكبير الذي يحتاج محتوى احترافياً لشراكاته." },
            { q: "ما المنصات التي تخصصون فيها؟", a: "إنستغرام، تيك توك، يوتيوب، ولينكد إن. كل منصة لها متطلباتها الخاصة ونفهمها جيداً." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>ابدأ رحلة المحتوى الاحترافي</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نحلل حسابك ونقترح خطة محتوى مناسبة لأهدافك.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
