import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير المواليد الجدد في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير جلسات المواليد الجدد في دبي من AED 1,200. في أول 14 يوماً من الولادة، مصورة متخصصة، أجواء آمنة ودافئة. استشارة مجانية.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-mawludeen-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-mawludeen-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/newborn-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير المواليد الجدد في دبي 2026 | باكيارد ستوديو",
    description: "احتفظي بذكريات أول أيام طفلك. جلسات مواليد متخصصة في دبي بأجواء دافئة وآمنة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NewbornArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "متى أحجز جلسة تصوير المولود الجديد في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الأفضل حجز الجلسة قبل الولادة بشهرين على الأقل، والتصوير خلال أول 5 إلى 14 يوماً من الولادة. في هذه الفترة يكون المولود أكثر نعاساً وأكثر قابلية للأوضاع اللطيفة المميزة لتصوير المواليد.",
        },
      },
      {
        "@type": "Question",
        name: "كم تكلفة تصوير المولود الجديد في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير المواليد من AED 1,200 وتشمل 15 صورة محررة. الجلسات المتكاملة مع صور عائلية وتفاصيل إضافية تبدأ من AED 1,800.",
        },
      },
      {
        "@type": "Question",
        name: "هل التصوير آمن للمولود؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "السلامة أولويتنا الأولى. نحافظ على درجة حرارة الاستديو دافئة للمولود، ولا نضع طفلاً في أي وضع إلا بعد التأكد التام من راحته وأمانه. أي وضعية تبدو محفوفة بالمخاطر يتم تجنبها تماماً.",
        },
      },
      {
        "@type": "Question",
        name: "كم تستغرق جلسة تصوير المولود؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "من ساعتين إلى أربع ساعات بحسب احتياجات المولود. لا نتعجل — إذا احتاج الطفل للرضاعة أو التغيير أو النوم، نتوقف ونكمل عندما يكون جاهزاً.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article
        dir="rtl"
        lang="ar"
        style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}
      >
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير المواليد الجدد</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير مواليد
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير المواليد الجدد في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>أول أيام طفلك تستحق أن تُحفظ للأبد</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=1200&q=80" alt="تصوير المواليد الجدد في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          الأيام الأولى بعد الولادة تمر بسرعة لا تصدق. الأصابع الصغيرة، الأنف الصغير، طريقة
          التجعد أثناء النوم — تفاصيل لن تتذكرها الذاكرة وحدها بعد سنوات. جلسة تصوير المولود
          الجديد هي هبة تعطيها لنفسك وللطفل: ذاكرة بصرية لبدايته على هذه الأرض.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نتخصص في جلسات المواليد ضمن بيئة دافئة ومدروسة. نعمل بهدوء وبطء،
          نتبع إيقاع الطفل، ولا نضعه في أي وضعية إلا بعد التأكد التام من ارتياحه وأمانه.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          لماذا التصوير في أول 14 يوماً؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          المولود في أول أسبوعين من عمره يقضي معظم وقته نائماً عميقاً، وهو ما يسمح بالحصول على
          الأوضاع الكلاسيكية المميزة لتصوير المواليد — المجعّد في سلة، مستلقياً في راحة اليد،
          ملتفاً بقماش ناعم. بعد ذلك يصبح الطفل أكثر يقظة وتنبهاً وتقل قابليته لهذه الأوضاع.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          نوصي بحجز الجلسة قبل الولادة بشهرين لضمان التوقيت المثالي. كثير من الأمهات يحجزن
          خلال الشهر السابع أو الثامن من الحمل.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ماذا تشمل جلسة تصوير المولود؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          نبدأ الجلسة بصور المولود وحده بأوضاع وأكسسوارات متنوعة. ثم صور مع الأم، مع الأب، ومع
          الأسرة كاملة. نهتم بأدق التفاصيل: صورة القدمين الصغيرة، صورة الأصابع، صورة المولود
          في حضن الوالدين.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          لدينا مجموعة من القمصلان، الأكسسوارات، والسلال التي تناسب جلسات المواليد. الألوان دافئة
          ومحايدة تتناسب مع ديكور غرف الأطفال التقليدية والعصرية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير المواليد في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة مواليد أساسية", detail: "ساعتان / 15 صورة محررة / أكسسوارات الاستديو", price: "AED 1,200" },
            { pkg: "جلسة مواليد متكاملة", detail: "3 ساعات / 25 صورة / صور عائلية مشمولة", price: "AED 1,800" },
            { pkg: "باقة المولود + الحمل", detail: "جلسة حمل + جلسة مولود بخصم خاص", price: "AED 2,500" },
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
            { q: "متى أحجز جلسة تصوير المولود؟", a: "قبل الولادة بشهرين. التصوير في أول 5-14 يوم من الولادة للحصول على أفضل النتائج." },
            { q: "كم تكلفة جلسة المولود في دبي؟", a: "من AED 1,200 للجلسة الأساسية مع 15 صورة محررة. الجلسة المتكاملة مع صور عائلية من AED 1,800." },
            { q: "هل التصوير آمن للمولود؟", a: "السلامة أولويتنا. نحافظ على درجة حرارة الاستديو دافئة ولا نضع أي وضعية إلا بعد التأكد من أمانها." },
            { q: "كم تستغرق الجلسة؟", a: "من ساعتين إلى أربع ساعات. لا نتعجل — نتوقف عند الرضاعة أو النوم وننتظر جاهزية الطفل." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجزي جلسة المولود</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — يُفضل الحجز قبل الولادة بشهرين.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
