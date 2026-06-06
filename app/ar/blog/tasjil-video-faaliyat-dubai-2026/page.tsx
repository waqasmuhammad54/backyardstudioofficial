import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير فيديو الفعاليات في دبي 2026 | الإمارات | باكيارد ستوديو",
  description:
    "تصوير فيديو الفعاليات في دبي من 3,500 درهم. هايلايت في نفس اليوم، تصوير متعدد الكاميرات، لقطات جوية GCAA. مؤتمرات، حفلات غالا، فعاليات الماركات.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/tasjil-video-faaliyat-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/event-videography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/tasjil-video-faaliyat-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير فيديو الفعاليات في دبي 2026 | باكيارد ستوديو",
    description: "فيديو احترافي للفعاليات في دبي — هايلايت سوشيال بنفس اليوم، كاميرات متعددة، لقطات جوية. من AED 3,500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EventVideographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير فيديو الفعاليات في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير فيديو الفعاليات في دبي من AED 3,500 لنصف يوم مع مصور فيديو واحد. الفعاليات الكاملة مع كاميرات متعددة وهايلايت جاهز تتراوح بين AED 8,000 وAED 25,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تسليم هايلايت فيديو الفعالية في نفس اليوم؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نقدم خدمة الهايلايت السريع — مقطع 60-90 ثانية جاهز للنشر على السوشيال ميديا خلال ساعات من انتهاء الفعالية. وهو خيار مثالي لإطلاق المنتجات والفعاليات التي تريد تأثيراً فورياً.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين التصوير بكاميرا واحدة ومتعددة الكاميرات؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "كاميرا واحدة مناسبة للفعاليات الصغيرة والمتوسطة. كاميرات متعددة تُتيح تصوير المتحدث والحضور وردود الأفعال في آنٍ واحد — مما يُنتج فيديو أغنى وأكثر حيوية لحفلات الغالا والمؤتمرات الكبرى.",
        },
      },
      {
        "@type": "Question",
        name: "هل تتضمن الخدمة لقطات جوية بالطائرات المسيّرة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، فريقنا مرخّص من GCAA ويمكن إضافة لقطات جوية للفعاليات الخارجية والمواقع التي تسمح بالطيران. اللقطات الجوية تُضيف بُعداً بصرياً استثنائياً لفيديو الفعالية.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير فيديو الفعاليات في دبي 2026 — الدليل الكامل",
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
    url: "https://www.backyardstudioofficial.com/ar/blog/tasjil-video-faaliyat-dubai-2026",
    description: "دليل شامل لتصوير فيديو الفعاليات في دبي — الأسعار، أنواع الفعاليات، وخدمة الهايلايت السريع من باكيارد ستوديو.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير فيديو الفعاليات في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير فيديو الفعاليات
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير فيديو الفعاليات في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>هايلايت يُنشر قبل نهاية الليلة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>9 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "400px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🎬</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          فيديو الفعالية اليوم لم يعد مجرد توثيق للأرشيف — هو أداة تسويقية تحيا لأشهر بعد انتهاء الحدث.
          الهايلايت الذي يُنشر على لينكد إن في الليلة ذاتها، الريل الذي يُشارَك على إنستغرام في
          الصباح، الفيلم الكامل الذي يُستخدم في عروض المستثمرين والشراكات — كل هذه نتاج فريق واحد
          يعرف كيف يُفكر في الناتج النهائي قبل أن يضغط زر التسجيل.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          باكيارد ستوديو وثّق أكثر من 400 فعالية تجارية في دبي خلال السنوات الماضية. من المؤتمرات
          التقنية في GITEX إلى حفلات الجوائز الفندقية الفاخرة إلى إطلاق المنتجات على شاطئ الجميرا —
          نعرف كيف تختلف متطلبات كل نوع وكيف نُنتج محتوى يستحق أن يُشاهَد.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          خدمة الهايلايت السريع — نفس اليوم
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          هذه الخدمة من أكثر ما يطلبه العملاء منّا. الفكرة بسيطة: بينما يستمر الحفل أو بعده مباشرة،
          يبدأ مُحرر الفيديو بتجميع اللقطات الأقوى وإضافة الموسيقى والنص. بحلول نهاية الفعالية أو
          في الساعات الأولى بعدها، يكون لديكم مقطع 60-90 ثانية جاهز للنشر الفوري.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          هذا التوقيت مهم لأن الخوارزميات تُكافئ المحتوى الذي يُنشر في وقت ذروة التفاعل — وذروة
          التفاعل مع فعاليتكم هي في الساعات التي تلي انتهاءها مباشرة. الهايلايت الذي يُنشر غداً
          يفقد نصف قوته.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أنواع الفيديو الذي نُنتجه للفعاليات
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { type: "هايلايت سوشيال (60-90 ثانية)", detail: "للنشر الفوري على إنستغرام ولينكد إن وتيك توك — تصاميم مخصصة لكل منصة" },
            { type: "الفيلم الكامل (10-20 دقيقة)", detail: "توثيق شامل للفعالية للأرشيف والعروض التقديمية والاستخدام الداخلي" },
            { type: "مقاطع المتحدثين", detail: "تقطيع كلمات المتحدثين إلى مقاطع مستقلة للمشاركة الفردية" },
            { type: "فيديو إعلاني للفعالية", detail: "مقطع مصنوع للتسويق لفعاليات مستقبلية بنفس المستوى" },
          ].map(({ type, detail }) => (
            <div key={type} style={{ display: "flex", gap: "1.5rem", padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderRight: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{type}</div>
                <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير فيديو الفعاليات في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "نصف يوم", detail: "مصور فيديو واحد / 4 ساعات / تسليم رقمي", price: "AED 3,500 – 5,000" },
              { pkg: "يوم + هايلايت", detail: "مصور فيديو / يوم كامل / هايلايت 90 ثانية", price: "AED 7,000 – 11,000" },
              { pkg: "حزمة متكاملة", detail: "2 كاميرا + هايلايت + فيلم كامل + درون", price: "AED 14,000 – 22,000" },
              { pkg: "حزمة مجموعة أيام", detail: "فريق كامل / معارض ومؤتمرات متعددة الأيام", price: "AED 6,000/يوم" },
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
            { q: "كم تكلفة تصوير فيديو الفعاليات في دبي؟", a: "تبدأ من AED 3,500 لنصف يوم. الحزمة المتكاملة مع كاميرات متعددة وهايلايت تتراوح بين AED 14,000 وAED 22,000." },
            { q: "هل الهايلايت جاهز في نفس اليوم؟", a: "نعم، نقدم هايلايت سريع خلال ساعات من انتهاء الفعالية للنشر الفوري على السوشيال ميديا." },
            { q: "هل تتضمن الخدمة لقطات درون؟", a: "نعم، الدرون خيار إضافي متاح للفعاليات الخارجية مع رخصة GCAA كاملة." },
            { q: "كم من الوقت يستغرق تسليم الفيلم الكامل؟", a: "14-21 يوماً للفيلم الكامل. الهايلايت السريع متاح في نفس اليوم بسعر إضافي." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز فريق الفيديو لفعاليتك</h3>
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
