import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير المؤتمرات والفعاليات في دبي | باكيارد ستوديو",
  description:
    "تصوير المؤتمرات والفعاليات في دبي من 3,500 درهم. تغطية DWTC وMadinat وAtlantis. هايلايت سوشيال في نفس اليوم. معارض، إطلاق منتجات، حفلات شركات.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-muatamart-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/conference-photographer-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-muatamart-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير المؤتمرات في دبي 2026 | باكيارد ستوديو",
    description: "تصوير احترافي للمؤتمرات والفعاليات التجارية في دبي — DWTC، Madinat، Atlantis. أسعار تبدأ من AED 3,500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ConferencePhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير المؤتمرات في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير المؤتمرات في دبي من AED 3,500 ليوم تصوير كامل مع مصور واحد. الفعاليات الكبرى التي تتطلب فريقاً متعدد الكاميرات وفيديو هايلايت تتراوح بين AED 8,000 وAED 20,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل توفرون هايلايت سوشيال في نفس يوم المؤتمر؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نقدم خدمة الهايلايت السريع — مقطع فيديو 60-90 ثانية جاهز للنشر على السوشيال ميديا خلال ساعات من انتهاء الفعالية. هذا الخيار مناسب للشركات التي تريد تغطية فورية.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون في مركز دبي للمؤتمرات DWTC؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، لدينا خبرة واسعة في التصوير بمركز دبي التجاري العالمي DWTC، وفندق مدينة جميرا، وأتلانتيس ذا بالم، وسائر المواقع الكبرى في دبي. نعرف خصائص إضاءة كل قاعة مسبقاً.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون حفلات الشركات والغالا الليلية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نغطي كامل دورة الفعاليات التجارية — من المؤتمرات النهارية إلى حفلات الغالا الليلية وحفلات الجوائز. لدينا خبرة في التصوير في إضاءات المسرح والقاعات المظلمة.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير المؤتمرات والفعاليات في دبي 2026 — الدليل الكامل للشركات",
    author: {
      "@type": "Person",
      name: "Fahad Iqbal Butt",
      jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال",
    },
    publisher: {
      "@type": "Organization",
      name: "باكيارد ستوديو أوفيشيال",
      url: "https://www.backyardstudioofficial.com",
    },
    datePublished: "2026-05-15",
    dateModified: "2026-06-01",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-muatamart-dubai-2026",
    description: "دليل شامل لتصوير المؤتمرات والفعاليات في دبي — الأسعار، المواقع، وخدمات الهايلايت السريع من باكيارد ستوديو.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير المؤتمرات في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير المؤتمرات والفعاليات
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير المؤتمرات والفعاليات في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>هايلايت سريع، جودة احترافية، حضور كامل</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>8 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "400px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🎤</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي من أكثر مدن العالم استضافةً للمؤتمرات والفعاليات التجارية — من قمم GITEX العالمية إلى حفلات
          الشركات الخاصة في القصور الفندقية. كل فعالية تمثل فرصة لبناء صورة الشركة وتوثيق إنجازاتها
          وخلق محتوى يُستخدم لأشهر بعد انتهاء الحدث.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نفهم أن تصوير المؤتمرات يختلف تماماً عن أنواع التصوير الأخرى. المتحدث على
          المنصة، التفاعل بين الحضور، لحظة تسليم الجائزة، صافحة العقد بين المسؤولين — كل هذه لحظات
          لا تُعاد وتحتاج عيناً يقظة وكاميرا في المكان الصحيح.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما أنواع الفعاليات التي نُغطيها؟
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { type: "المؤتمرات والقمم", detail: "تصوير متعدد الكاميرات للمتحدثين والحضور، صور الكواليس، بورتريه احترافي" },
            { type: "حفلات الغالا والجوائز", detail: "تصوير ليلي في قاعات فندقية، لحظات تسليم الجوائز، البورتريه الرسمي" },
            { type: "إطلاق المنتجات والعلامات التجارية", detail: "تصوير وفيديو مع هايلايت 60-90 ثانية للسوشيال جاهز في اليوم ذاته" },
            { type: "المعارض والمؤتمرات التجارية", detail: "تصوير الأجنحة والزيارات والاجتماعات، صور ترويجية للشركة" },
            { type: "حفلات الشركات والتيم بيلدينج", detail: "توثيق الأنشطة الترفيهية والفعاليات الداخلية للموظفين" },
          ].map(({ type, detail }) => (
            <div key={type} style={{ display: "flex", gap: "1.5rem", padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderRight: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{type}</div>
                <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          خبرتنا في مواقع دبي الكبرى
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          سيد مظهر زيدي يشرح: "حين نتعامل مع DWTC أو مدينة جميرا أو أتلانتيس، لا نحتاج جولة استكشافية
          طويلة. نعرف أين تقع مخارج الطوارئ التي تصنع خلفية مميزة، ونعرف الزاوية التي تُظهر قاعة المؤتمر
          بامتلائها وليس بفراغها، ونعرف كيف نتعامل مع الإضاءة الخاضعة لشركات الإضاءة المسرحية المختلفة."
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          هذه المعرفة المسبقة تترجم إلى وقت أقل في الإعداد وصور أفضل في الخرج. لعملائنا المتكررين،
          نوفر ملفاً تقنياً لكل موقع يُحدَّث بعد كل فعالية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير المؤتمرات في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "نصف يوم", detail: "مصور واحد / 4 ساعات / تسليم رقمي", price: "AED 3,500 – 5,000" },
              { pkg: "يوم كامل", detail: "مصور واحد / 8 ساعات / 150+ صورة معدّلة", price: "AED 6,000 – 9,000" },
              { pkg: "حزمة تصوير + فيديو", detail: "مصور + مصور فيديو / يوم كامل / هايلايت 90 ثانية", price: "AED 10,000 – 16,000" },
              { pkg: "تغطية متعددة الأيام", detail: "فريق متكامل / معارض وقمم كبرى", price: "AED 5,500/يوم" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>أسئلة شائعة</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "كم تكلفة تصوير المؤتمرات في دبي؟", a: "تبدأ من AED 3,500 لنصف يوم. الفعاليات الكاملة مع فيديو تتراوح بين AED 10,000 وAED 20,000." },
            { q: "هل توفرون هايلايت سوشيال بنفس اليوم؟", a: "نعم، نقدم مقطع هايلايت جاهز للنشر خلال ساعات من انتهاء الفعالية كجزء من الحزمة المتكاملة." },
            { q: "هل تصوّرون في DWTC وأتلانتيس ومدينة جميرا؟", a: "نعم، هذه من مواقعنا الأكثر تكراراً ونعرف تفاصيلها التقنية جيداً." },
            { q: "كم من الوقت مسبقاً يجب الحجز؟", a: "نوصي بالحجز قبل أسبوعين لمؤتمرات العملاء الجدد. للعملاء المتكررين نقبل حجوزات يومين مسبقاً." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز فريق التصوير لفعاليتك</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>أرسل تفاصيل الفعالية ونُرسل عرضاً خلال ساعتين.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
