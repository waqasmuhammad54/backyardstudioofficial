import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الخطوبة في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير جلسة الخطوبة في دبي من AED 1,500. مواقع مميزة، مصور متخصص بالمناسبات العاطفية، تسليم الصور خلال 48 ساعة. استشارة مجانية.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-khetuba-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-khetuba-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/engagement-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الخطوبة في دبي 2026 | باكيارد ستوديو",
    description:
      "جلسة خطوبة لا تُنسى في أجمل مواقع دبي. مصور متخصص، أسعار من AED 1,500، تسليم سريع.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EngagementPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير جلسة الخطوبة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير جلسة الخطوبة في دبي من AED 1,500 للجلسة الأساسية (ساعتان، موقع واحد، 30 صورة محررة). الجلسات الممتدة مع موقعين وجلسة ذهاب الشمس تتراوح بين AED 2,800 وAED 4,500.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل مواقع تصوير الخطوبة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أجمل مواقع تصوير الخطوبة في دبي: دبي كريك هاربر بأجواء المدينة الراقية، منطقة البستكية بطابعها التراثي، شواطئ جميرا عند الغروب، منطقة الداون تاون مع برج خليفة خلفية، والمرسى للأجواء الساحلية. نساعدكم في اختيار الموقع المناسب لشخصيتكم.",
        },
      },
      {
        "@type": "Question",
        name: "متى يُنصح بتصوير جلسة الخطوبة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أفضل أوقات التصوير في دبي هي الساعة الأولى بعد الشروق أو الساعة الأخيرة قبل الغروب — الضوء يكون ذهبياً وناعماً. من أكتوبر إلى مارس هو موسم التصوير المثالي بسبب الطقس المعتدل.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن دمج جلسة الخطوبة مع حزمة زفاف؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، عملاؤنا الذين يحجزون حزمة الزفاف يحصلون على جلسة الخطوبة بسعر مخفض. هذا يتيح لنا كذلك التعرف على الزوجين قبل يوم الزفاف لضمان أفضل النتائج.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير الخطوبة في دبي 2026 — دليلك الكامل للجلسة المثالية",
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
    datePublished: "2026-06-17",
    dateModified: "2026-06-17",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-khetuba-dubai-2026",
    description: "دليل شامل لتصوير جلسة الخطوبة في دبي — الأسعار، المواقع، التوقيت، ونصائح من فريق باكيارد ستوديو.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article
        dir="rtl"
        lang="ar"
        style={{
          fontFamily: "Cairo, sans-serif",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 2rem",
          color: "var(--cream)",
          lineHeight: "1.9",
        }}
      >
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير الخطوبة في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الخطوبة
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الخطوبة في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>جلسة لا تُنسى في أجمل مواقع المدينة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>17 يونيو 2026</span>
          <span>8 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "360px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>💍</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          جلسة الخطوبة هي أول لقطة مشتركة لزوجي المستقبل — وهي الصورة التي ستُعلق في المنازل،
          تُشارَك مع الأهل والأصدقاء، وتبقى ذكرى الخطوة الأولى نحو بداية جديدة. في دبي، مدينة الضوء
          والمعمار الاستثنائي، خيارات تصوير الخطوبة لا حدود لها.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، يقود جلسات الخطوبة فهد إقبال بت بنفسه — مدير إبداعي قضى أكثر من
          عشر سنوات في تصوير المناسبات العاطفية. أسلوبه يجمع بين الطبيعية والإبداع: لا إرشادات
          مصطنعة، بل محادثة هادئة تذوب معها الكاميرا في الخلفية وتبرز المشاعر الحقيقية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أفضل مواقع تصوير الخطوبة في دبي
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          دبي كريك هاربر هو خيارنا الأول للأزواج الذين يريدون مزج الحداثة بالأصالة. المباني الزجاجية
          المنعكسة على الخور، الجسر المضيء، المشاة من كل الجنسيات — هذا المزيج يصنع خلفيات استثنائية
          لا تجدها في أي مدينة أخرى.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          البستكية ودبي القديمة تعطيان للصور روحاً تراثية دافئة. الأبواب الخشبية القديمة، الأزقة
          الضيقة، ضوء الشمس الذهبي الذي يتسلل بين المباني — هذا هو المكان المثالي للأزواج الذين
          يفضلون الأجواء الكلاسيكية والعاطفية.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          شاطئ جميرا عند الغروب يمنح لقطات لا تُقدَّر بثمن. الضوء الذهبي الأخير، أمواج البحر
          الهادئة، الرمال الناعمة — ثلاثية تصنع صوراً تشبه أغلفة المجلات الفاخرة. نوصي بالوصول
          قبل الغروب بساعة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          للأزواج الذين يريدون برج خليفة خلفية لا يُنسى، منطقة الداون تاون وبحيرة دبي هي الوجهة.
          الساعة الزرقاء بعد الغروب مباشرة هي اللحظة السحرية — الأضواء تبدأ بالظهور والسماء تتحول
          إلى لوحة ألوان بنفسجية وبرتقالية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          كيف نُعِدّ لجلسة الخطوبة معكم
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          قبل أي جلسة، نجلس مع الزوجين لمحادثة خفيفة — نسألهم عن قصتهم، أين التقيا، ما الذي
          يجعلهم يضحكان معاً. هذه التفاصيل الصغيرة هي التي تُحوّل الجلسة من صور "عروسين" إلى
          توثيق حقيقي لشخصيتكم معاً.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          نصيحتنا للملابس: اختاروا ألواناً متناسقة لا متطابقة. الأزرق الداكن مع الكريمي، الأبيض
          مع الذهبي الخافت، الأخضر الزيتوني مع البيج. تجنبوا المطبوعات الكبيرة لأنها تشتت انتباه
          العين عن التعبيرات.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار جلسة الخطوبة في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "جلسة أساسية", detail: "ساعتان / موقع واحد / 30 صورة محررة", price: "AED 1,500" },
              { pkg: "جلسة موسّعة", detail: "3 ساعات / موقعان / 60 صورة + ريلز", price: "AED 2,800" },
              { pkg: "جلسة غروب مميزة", detail: "4 ساعات / 3 مواقع / 100 صورة + فيديو", price: "AED 4,500" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)" }}>
            * عملاء حزمة الزفاف يحصلون على جلسة الخطوبة الأساسية مجاناً.
          </p>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>أسئلة شائعة</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "كم تكلفة تصوير جلسة الخطوبة في دبي؟", a: "تبدأ من AED 1,500 للجلسة الأساسية. الجلسات الممتدة مع أكثر من موقع تتراوح بين AED 2,800 وAED 4,500." },
            { q: "ما أفضل مواقع تصوير الخطوبة في دبي؟", a: "دبي كريك هاربر، البستكية، شاطئ جميرا، والداون تاون مع برج خليفة. نساعدكم في اختيار ما يناسب شخصيتكم." },
            { q: "متى يُنصح بجلسة تصوير الخطوبة؟", a: "الساعة الأولى بعد الشروق أو الساعة الأخيرة قبل الغروب — الضوء الذهبي يصنع الفارق. أكتوبر إلى مارس هو الموسم المثالي." },
            { q: "هل يمكن تصوير الخطوبة داخل الفندق أو الاستديو؟", a: "بالتأكيد. لدينا إمكانية التصوير في مواقع داخلية فاخرة أو بإضاءة الاستديو إذا كانت الطبيعة لا تناسب ذوقكم." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة الخطوبة</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نساعدكم في اختيار الموقع والتوقيت المثالي.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
