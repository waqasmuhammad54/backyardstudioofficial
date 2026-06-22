import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الحمل في دبي 2026 | باكيارد ستوديو",
  description:
    "جلسات تصوير الحمل في دبي من AED 1,000. أجواء رومانسية ودافئة، استديو أو خارجي، مصورة متخصصة. احجزي في الشهر السابع أو الثامن.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-haml-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-haml-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/maternity-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الحمل في دبي 2026 | باكيارد ستوديو",
    description: "جلسة حمل تحتفي بأجمل مرحلة في حياتك. من AED 1,000، استديو أو خارجي.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MaternityArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "متى هو الوقت المثالي لتصوير الحمل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الشهر السابع أو الثامن من الحمل هو الوقت المثالي. البطن تكون واضحة وجميلة، والأم لا تزال تشعر بالراحة الكافية للتحرك والتعبير. نوصي بتجنب الشهر التاسع لأن الحركة تكون أصعب.",
        },
      },
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الحمل في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير الحمل في دبي من AED 1,000 للجلسة الأساسية في الاستديو. الجلسات الخارجية في الشاطئ أو الحدائق تبدأ من AED 1,400.",
        },
      },
      {
        "@type": "Question",
        name: "ماذا أرتدي في جلسة تصوير الحمل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الفساتين الطويلة الناعمة تعطي أجمل صور — خاصة الشيفون والحرير بألوان هادئة كالكريمي والأبيض والوردي الفاتح. لدينا في الاستديو مجموعة من الفساتين للاستعارة إذا أردت.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير الأسرة كاملة في جلسة الحمل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. صور مع الزوج وصور مع الأطفال الكبار تضيف بعداً عائلياً رائعاً للجلسة. كثير من عملائنا يطلبون صوراً ثنائية مع الزوج وصوراً مع أشقاء المولود المنتظر.",
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
          <span>تصوير الحمل في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير أمومة
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الحمل في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>احتفلي بأجمل مرحلة في حياتك</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80" alt="تصوير الحمل في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          الحمل تجربة لا تتكرر بنفس الشكل مرتين. كل حمل له شكله الخاص، وأجواؤه، وأحاسيسه.
          جلسة تصوير الحمل هي طريقة لتقول للمولود القادم: كنت ننتظرك بكل هذا الحب قبل أن
          تأتي إلى العالم.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نحول جلسة تصوير الحمل إلى تجربة تستمتعين بها من أولها إلى آخرها.
          لا ضغط، لا توجيهات مصطنعة — فقط أنتِ وجمالك الطبيعي في هذه المرحلة الاستثنائية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الاستديو أم الخارج؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          جلسات الاستديو تعطي تحكماً كاملاً في الإضاءة والخلفية، مثالية للصور الفنية النظيفة
          بالأبيض والأسود أو الألوان الناعمة. لدينا فساتين متنوعة للاستعارة وديكور مخصص
          لجلسات الأمومة.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          الجلسات الخارجية في شاطئ جميرا أو حدائق دبي تضيف حيوية وطبيعية للصور. أفضل توقيت
          هو ساعة الغروب من أكتوبر إلى أبريل للاستمتاع بالضوء الذهبي الناعم دون حرارة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          كثير من عملائنا يختارن مزيجاً من الاثنين: نبدأ في الاستديو ثم ننهي بالخارج عند الغروب.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الحمل في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة استديو أساسية", detail: "60 دقيقة / 15 صورة محررة / فستان مشمول", price: "AED 1,000" },
            { pkg: "جلسة استديو متكاملة", detail: "90 دقيقة / 25 صورة / صور ثنائية مع الزوج", price: "AED 1,500" },
            { pkg: "جلسة خارجية", detail: "90 دقيقة / 20 صورة / موقع من اختيارك", price: "AED 1,400" },
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
            { q: "متى هو الوقت المثالي لتصوير الحمل؟", a: "الشهر السابع أو الثامن — البطن واضحة وجميلة والأم لا تزال مرتاحة للتحرك." },
            { q: "كم تكلفة جلسة تصوير الحمل في دبي؟", a: "من AED 1,000 للجلسة الاستديو الأساسية. الجلسات الخارجية من AED 1,400." },
            { q: "ماذا أرتدي في جلسة الحمل؟", a: "الفساتين الطويلة الناعمة بألوان هادئة. لدينا فساتين للاستعارة في الاستديو." },
            { q: "هل يمكن تصوير الزوج والأطفال معاً؟", a: "بالتأكيد. الصور العائلية جزء طبيعي من جلسة الحمل وتضيف بعداً رائعاً للذكريات." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجزي جلسة الحمل</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نساعدك في اختيار التوقيت والموقع المثالي.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
