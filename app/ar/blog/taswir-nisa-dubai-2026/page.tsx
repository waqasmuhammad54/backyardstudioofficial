import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير نساء في دبي 2026 | باكيارد ستوديو",
  description:
    "جلسات تصوير نسائية احترافية في دبي — بورتريه، برسونال براندينج، حمل، مناسبات. بيئة آمنة ومريحة. من AED 900.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-nisa-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-nisa-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/portrait-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير نساء في دبي 2026",
    description: "جلسات تصوير نسائية في دبي — بورتريه، برسونال براندينج، حمل، ذكريات خاصة. بيئة مريحة ومحترمة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WomenPhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "هل لديكم مصوّرة نسائية في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نوفّر مصوّرات نسائيات لجلسات التصوير الخاصة بالنساء. يُرجى الإشارة عند الحجز إذا كنتِ تفضّلين التصوير مع مصوّرة.",
        },
      },
      {
        "@type": "Question",
        name: "كم تكلفة جلسة تصوير المرأة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسة البورتريه النسائية في الاستوديو من AED 900 (90 دقيقة، 20–25 صورة). جلسة البرسونال براندينج من AED 1,500. جلسة الحمل من AED 1,200. جلسة تذكارية خاصة أو مناسبة من AED 1,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل بيئة الاستوديو مريحة للنساء المحجبات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. استوديونا المغلق يوفّر بيئة آمنة ومريحة تماماً. يمكن طلب مصوّرة وطاقم نسائي لجلسات خاصة. نحترم جميع أساليب اللباس والتفضيلات الشخصية.",
        },
      },
      {
        "@type": "Question",
        name: "ما المناسبات المناسبة لجلسة تصوير نسائية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "جلسة تصوير نسائية تناسب: البورتريه الشخصي للينكدإن وسوشيال ميديا، البرسونال براندينج لرائدات الأعمال، جلسات الحمل والأمومة، مناسبة خاصة أو هدية لنفسك، وصور لجوازات السفر والوثائق الرسمية.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير نساء في دبي 2026 — جمالك، قصتك، بيئة تحترمك",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-nisa-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير نساء في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير نسائي
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير نساء في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>جمالك — قصتك — بيئة تحترمك</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>5 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>✨</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          تصوير المرأة فن يتطلّب مهارةً واحتراماً وفهماً عميقاً لكيفية نقل الجمال والشخصية والقوة
          في صورة واحدة. في باكيارد ستوديو، نخلق بيئة آمنة ومريحة تُمكّن كل امرأة من الظهور
          بأجمل صورة لها — بلا تصنّع وبلا افتعال.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          سواء كنتِ سيدة أعمال تبحثين عن صور برسونال براندينج، أماً تودّين توثيق لحظة حملك،
          أو شخصاً يريد فقط صوراً جميلة يستحقها — نحن هنا.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أنواع جلسات التصوير النسائية في دبي
        </h2>

        {[
          { type: "البورتريه الشخصي", desc: "صور عالية الجودة لبروفايل لينكدإن، سوشيال ميديا، أو للحفظ الشخصي. أسلوب نظيف ومضيء يُبرز الملامح بشكل طبيعي." },
          { type: "البرسونال براندينج", desc: "للسيدات رائدات الأعمال والمؤثّرات والمتحدثات العامة. جلسة تغطّي عدة إطلالات ومواقع لتوفير محتوى شهور." },
          { type: "تصوير الحمل", desc: "جلسة تحتفي بهذه المرحلة الاستثنائية — نعيد رؤية المدة في أفضل جلسات الحمل بدبي." },
          { type: "مناسبة خاصة", desc: "عيد ميلاد، ذكرى، تخرّج، مناسبة احتفالية — نصوّر المرحلة ونخلد اللحظة." },
        ].map(({ type, desc }) => (
          <div key={type} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{type}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          الباقات
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "بورتريه مصغّر", detail: "60 دقيقة / 15–20 صورة", price: "من AED 900" },
            { pkg: "بورتريه كامل", detail: "90 دقيقة / 25–35 صورة / إطلالتان", price: "من AED 1,400" },
            { pkg: "برسونال براندينج", detail: "3 ساعات / 3 إطلالات + موقعان / 50+ صورة", price: "من AED 1,800" },
            { pkg: "تصوير الحمل", detail: "90 دقيقة / استوديو أو خارجي / 25–30 صورة", price: "من AED 1,200" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجزي جلسة تصويرك في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصلي معنا — نختار الموعد والأسلوب المناسبَين لكِ.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
