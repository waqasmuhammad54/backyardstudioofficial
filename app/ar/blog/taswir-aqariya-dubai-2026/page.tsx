import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير عقاري في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير عقاري احترافي في دبي للفلل، الشقق، المشاريع على الخارطة والفنادق. تصوير داخلي خارجي + طائرة مسيّرة GCAA. من AED 600.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-aqariya-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-aqariya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/real-estate-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير عقاري في دبي 2026",
    description: "مصوّر عقاري محترف في دبي — فلل، شقق، مشاريع. تصوير داخلي + طائرة مسيّرة. توصيل سريع. من AED 600.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RealEstatePhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة التصوير العقاري في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ التصوير العقاري في دبي من AED 600 لشقة صغيرة (غرفتان، 10–15 صورة). فيلا فاخرة من AED 1,500–3,000 حسب الحجم. تصوير بالطائرة المسيّرة يُضاف من AED 800. مشاريع المطوّرين على الخارطة تُسعَّر حسب الحجم.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون العقارات على الخارطة للمطوّرين في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نوفّر تصوير شقق العرض والنماذج للمطوّرين العقاريين في دبي. تصوير العقارات على الخارطة يشمل المداخل والمناطق المشتركة والوحدات النموذجية بأعلى معايير التصوير للمواد التسويقية والمبيعات.",
        },
      },
      {
        "@type": "Question",
        name: "هل تستخدمون الطائرة المسيّرة في تصوير العقارات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — فريقنا يحمل رخصة GCAA كاملة للتصوير الجوي التجاري. التصوير الجوي يُبرز الموقع والمحيط والمساحات الخارجية بشكل لا يمكن تحقيقه من الأرض — ضروري للفلل والمجمعات السكنية الكبيرة.",
        },
      },
      {
        "@type": "Question",
        name: "ما سرعة تسليم صور العقارات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نسلّم صور إدراجات الإيجار والبيع في 24–48 ساعة. مشاريع المطوّرين الكبيرة في 3–5 أيام. للوكلاء العقاريين الذين يحتاجون صوراً لإدراج عاجل — اتصلوا بنا مباشرةً لترتيب التسليم السريع.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير عقاري في دبي 2026 — صور تبيع العقار قبل الزيارة",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-aqariya-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير عقاري في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          التصوير العقاري
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير عقاري في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صور تبيع العقار — قبل أي زيارة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🏙️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          سوق العقارات في دبي من أكثر الأسواق تنافسية في العالم. المشتري والمستأجر يتصفّح عشرات
          العروض قبل أن يختار العقار الذي سيزوره. صور عقارك الاحترافية هي ما تجعله يتوقف عند
          إعلانك — أو يتجاوزه لمنافسك.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          باكيارد ستوديو يصوّر العقارات في دبي للوكلاء والمطوّرين والملاك — من شقق الاستوديو إلى
          الفلل الفاخرة في نخلة جميرا. نسلّم في 24–48 ساعة لأن السوق لا ينتظر.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما الذي يميّز التصوير العقاري الاحترافي
        </h2>

        {[
          { aspect: "إدارة الإضاءة المختلطة", desc: "الغرف ذات النوافذ والإضاءة الاصطناعية معاً تحدياً تقنياً — نستخدم تقنية دمج HDR وفلاش محترف للحصول على صور متوازنة طبيعية." },
          { aspect: "زوايا وعدسات مناسبة", desc: "عدسات زاوية واسعة مع تصحيح التشويه للحصول على غرف تبدو فسيحة ودقيقة في آنٍ واحد — لا مبالغة، لا تضييق." },
          { aspect: "الإعداد والترتيب", desc: "ننصح باستعداد العقار قبل التصوير: إزالة المقتنيات الشخصية، ترتيب المفروشات، فتح الستائر. الفرق في النتائج كبير جداً." },
          { aspect: "التصوير الجوي بالمسيّرة", desc: "يُبرز الموقع والمحيط والمساحات الخارجية — ضروري للفلل والمشاريع والمواقع القريبة من البحر أو المعالم البارزة." },
        ].map(({ aspect, desc }) => (
          <div key={aspect} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{aspect}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات التصوير العقاري في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "شقة (استوديو / 1–2 غرفة)", detail: "10–15 صورة / تسليم 24ساعة", price: "من AED 600" },
            { pkg: "شقة كبيرة (3+ غرف)", detail: "15–20 صورة / تسليم 24ساعة", price: "من AED 900" },
            { pkg: "فيلا فاخرة", detail: "25–40 صورة + طائرة مسيّرة / تسليم 48ساعة", price: "من AED 2,000" },
            { pkg: "مشروع المطوّر", detail: "شقق نموذجية + مناطق مشتركة / يُسعَّر حسب الحجم", price: "تواصل معنا" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز مصوّرك العقاري في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>نُرتّب التصوير خلال 24–48 ساعة من الحجز.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
