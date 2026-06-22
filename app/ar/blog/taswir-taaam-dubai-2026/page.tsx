import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الطعام في دبي 2026 | F&B الإمارات | باكيارد ستوديو",
  description:
    "تصوير الطعام في دبي من 1,500 درهم. تصوير المنيو، حملات F&B، محتوى منصات التوصيل للمطاعم وسلاسل الفنادق في الإمارات. احجز الآن.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-taaam-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-taaam-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الطعام في دبي 2026 | باكيارد ستوديو",
    description: "تصوير احترافي للطعام والمشروبات في دبي — مطاعم، فنادق، ماركات F&B. أسعار تبدأ من AED 1,500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FoodPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الطعام في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الطعام في دبي من AED 1,500 لجلسة التصوير الأساسية. تصوير المنيو الكامل للمطاعم يتراوح بين AED 3,500 وAED 12,000 حسب عدد الأطباق والإضاءة المطلوبة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون في موقع المطعم أم في الاستوديو؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نقدم الخيارين. التصوير في موقع المطعم يُعطي صوراً تعكس البيئة الحقيقية ومزاج المكان. الاستوديو يُتيح تحكماً أكبر في الإضاءة وخلفيات نظيفة مثالية للمنيو الرقمي ومحتوى التوصيل.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون محتوى منصات التوصيل مثل Talabat و Deliveroo؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نحن متخصصون في تصوير محتوى منصات التوصيل. الصور تلتزم بمتطلبات كل منصة من حيث الأبعاد والإضاءة وتبرز الطبق بشكل يزيد معدلات الطلب.",
        },
      },
      {
        "@type": "Question",
        name: "كم من الوقت تستغرق جلسة تصوير المنيو الكامل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "المنيو المتوسط من 20-30 طبقاً يحتاج يوم تصوير كامل (6-8 ساعات). المنيوهات الكبيرة قد تحتاج يومين. نرسل جدول زمنياً مفصلاً قبل اليوم بأسبوع.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير الطعام في دبي 2026 — دليل المطاعم والعلامات التجارية",
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
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-taaam-dubai-2026",
    description: "دليل شامل لتصوير الطعام في دبي للمطاعم والفنادق وماركات F&B — الأسعار والأساليب ومتطلبات المنصات الرقمية.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير الطعام في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الطعام والمشروبات
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الطعام في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صور تُباع وتُقنع قبل أول قضمة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>8 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Food Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في دبي، قبل أن يقرأ الزبون قائمة الطعام، يرى الصورة. وفي عالم منصات التواصل الاجتماعي وتطبيقات
          التوصيل، الصورة لا تعكس الطبق فحسب — بل هي التجربة كاملة قبل أن يبدأ. المطاعم التي تستثمر في
          تصوير احترافي للطعام تلاحظ فارقاً واضحاً في معدلات الطلب وتفاعل المتابعين.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          باكيارد ستوديو عملت مع أكثر من 120 مطعماً وعلامة تجارية في قطاع الأغذية والمشروبات بدبي والإمارات.
          من مطاعم الشاورما الشعبية في ديرة إلى مطاعم المائدة الواحدة في فنادق نخلة جميرا — نعرف كيف
          نجعل كل طبق يبدو كما يستحق.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          لماذا تصوير الطعام الاحترافي قرار تجاري لا رفاهية؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الأرقام واضحة: الطلبات على المنصات ترتفع بمعدل 30-40% عندما تُستبدل صور الهاتف بصور احترافية.
          حساب إنستغرام بصور عالية الجودة يجذب متابعين أكثر ويحقق مبيعات مباشرة. المنيو الرقمي ذو الصور
          الجذابة يزيد متوسط الطلب للزبون الواحد.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          فهد إقبال بت يقول: "حين يسألني أصحاب المطاعم عن جدوى الاستثمار في تصوير الطعام، أطرح سؤالاً
          واحداً: هل تريد الزبون أن يختار طبقك أم طبق المنافس على التطبيق؟ الصورة الاحترافية ليست خياراً
          — هي فارق المبيعات."
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          نقدم تصوير الطعام لثلاثة أنواع رئيسية من العملاء: المطاعم المستقلة التي تحتاج محتوى سوشيال
          ومنيو رقمي، سلاسل الفنادق التي تحتاج صوراً موحدة لمطاعمها المتعددة، وماركات المواد الغذائية
          التي تحتاج صوراً للتغليف والإعلانات الرقمية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          خدمات تصوير الطعام التي نقدمها
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { service: "تصوير المنيو الكامل", detail: "تصوير جميع أطباق المطعم لاستخدامها في المنيو الرقمي والطباعة" },
            { service: "محتوى السوشيال ميديا", detail: "صور وريلز وفيديو قصير للإنستغرام والتيك توك يومياً أو أسبوعياً" },
            { service: "تصوير منصات التوصيل", detail: "صور متوافقة مع متطلبات Talabat وDeliveroo وCareem لزيادة الطلبات" },
            { service: "حملات إعلانية F&B", detail: "صور ومقاطع فيديو كاملة للحملات الإعلانية الرقمية والمطبوعة" },
            { service: "تصوير تجربة المطعم", detail: "توثيق أجواء المطعم والفريق لبناء هوية بصرية متكاملة" },
          ].map(({ service, detail }) => (
            <div key={service} style={{ display: "flex", gap: "1.5rem", padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderRight: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{service}</div>
                <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الطعام في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "جلسة أساسية", detail: "حتى 10 أطباق / نصف يوم / تسليم رقمي", price: "AED 1,500 – 3,000" },
              { pkg: "منيو متوسط", detail: "20-30 طبق / يوم كامل / تحرير كامل", price: "AED 3,500 – 7,000" },
              { pkg: "منيو شامل", detail: "+40 طبق / يومان / صور + ريلز", price: "AED 7,000 – 14,000" },
              { pkg: "حزمة سوشيال شهرية", detail: "30 صورة + 8 ريلز شهرياً بالاشتراك", price: "AED 3,500 / شهر" },
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
            { q: "كم تكلفة تصوير الطعام في دبي؟", a: "تبدأ من AED 1,500 لجلسة أساسية. تصوير المنيو الكامل يتراوح بين AED 3,500 وAED 14,000 حسب الحجم." },
            { q: "هل تصوّرون في موقع المطعم؟", a: "نعم، نصوّر في الموقع أو في الاستوديو. الموقع يعطي أجواء حقيقية، الاستوديو يُتيح تحكماً أكبر." },
            { q: "هل تصوّرون محتوى Talabat وDeliveroo؟", a: "نعم، نحن متخصصون في تصوير محتوى منصات التوصيل وفق المعايير المطلوبة من كل منصة." },
            { q: "كم وقت يستغرق تسليم الصور؟", a: "7 أيام للتسليم الاعتيادي. نوفر تسليماً سريعاً خلال 48 ساعة عند الحاجة بتكلفة إضافية بسيطة." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احصل على عرض سعر مجاني</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>أرسل لنا قائمة طعامك عبر واتساب ونُرسل إليك عرضاً خلال ساعتين.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
