import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير حفلات الزفاف في دبي 2026 — دليلك الكامل لاختيار أفضل مصور أعراس",
  description:
    "كيف تختار أفضل مصور أعراس في دبي؟ أسعار تصوير حفلات الزفاف، ما الفرق بين الفيديو السينمائي والتقليدي، وكيف يعمل فريق باكيارد ستوديو في يومك الأهم. دليل شامل 2026.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswirzifaf-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/wedding-photography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswirzifaf-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير حفلات الزفاف في دبي 2026",
    description:
      "دليلك الكامل لاختيار مصور الزفاف المثالي في دبي — الأسعار، الأسلوب، الأسئلة التي يجب طرحها قبل الحجز.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WeddingPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير حفل الزفاف في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الأعراس في دبي من AED 3,500 للحزم الأساسية التي تشمل مصور واحد وعدة ساعات تصوير. الحزم الشاملة التي تتضمن فيديو سينمائي وجلسة تصوير ما قبل الزفاف وطباعة ألبوم تتراوح بين AED 12,000 و AED 35,000 أو أكثر حسب عدد الساعات وحجم الفريق.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين فيديو الزفاف السينمائي والتقليدي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "فيديو الزفاف التقليدي يوثق الحفل بالترتيب الزمني — من التجهيز حتى نهاية الاحتفال. أما الفيديو السينمائي فيُخرَج كقصة قصيرة مع موسيقى مختارة ولقطات إبداعية وانتقالات سلسة، مما يجعله أقرب لفيلم قصير تشاركه مع الأصدقاء والعائلة لسنوات.",
        },
      },
      {
        "@type": "Question",
        name: "هل تتوفر خدمة التصوير بالطائرة المسيّرة في حفلات الزفاف بدبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، فريق باكيارد ستوديو حاصل على رخصة GCAA للتصوير الجوي بالطائرات المسيّرة في جميع إمارات الدولة. يمكن تصوير قصر الأفراح أو فيلا الحفل من الجو لإضافة بُعد استثنائي لألبوم الذكريات.",
        },
      },
      {
        "@type": "Question",
        name: "متى يجب حجز مصور الأعراس في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يُنصح بحجز فريق التصوير قبل موعد الزفاف بستة أشهر على الأقل، خاصة في موسم الأعراس من أكتوبر إلى مارس. يضمن الحجز المبكر توافر الفريق المناسب لك وإمكانية تنسيق جلسة تصوير ما قبل الزفاف.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير حفلات الزفاف في دبي 2026 — دليلك الكامل",
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
    datePublished: "2026-05-01",
    dateModified: "2026-05-29",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswirzifaf-dubai-2026",
    description:
      "دليل شامل لاختيار مصور الأعراس في دبي — الأسعار والأساليب والأسئلة الجوهرية قبل الحجز.",
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
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>
          {" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>
          {" / "}
          <span>تصوير حفلات الزفاف في دبي 2026</span>
        </nav>

        {/* Category */}
        <span
          style={{
            display: "inline-block",
            background: "rgba(212,175,55,0.15)",
            color: "var(--gold)",
            padding: "0.3rem 0.9rem",
            borderRadius: "2px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}
        >
          تصوير الأعراس
        </span>

        <h1
          style={{
            fontFamily: "Cairo, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.3,
            marginBottom: "1rem",
          }}
        >
          تصوير حفلات الزفاف في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>دليلك الكامل لاختيار المصور المثالي</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>1 مايو 2026</span>
          <span>10 دقائق للقراءة</span>
        </div>

        {/* Hero Image placeholder */}
        <div
          style={{
            width: "100%",
            height: "400px",
            background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)",
            borderRadius: "4px",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(212,175,55,0.12)",
          }}
        >
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>💍</span>
        </div>

        {/* Intro */}
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          يومك الأهم في حياتك يستحق أن يُحفظ بأجمل صورة ممكنة. لكن اختيار مصور الأعراس المناسب في دبي
          ليس قراراً سهلاً — فالمدينة مليئة بالخيارات، والأسعار تتفاوت تفاوتاً كبيراً، والأهم من ذلك أن
          اللحظات لا تعود. في باكيارد ستوديو أوفيشيال، نزوّج في كل مشروع زفاف بين الحرفية التقنية والإحساس
          الإنساني الذي يجعل كل قصة حب تبدو فريدة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          هذا الدليل ليس دعاية — هو ما تعلّمناه بعد أكثر من 2,400 مشروع تنفّذناه عبر سنوات في دبي
          وجميع إمارات الدولة. ستجد هنا الأسئلة الجوهرية التي يجب أن تطرحها على أي استوديو قبل التوقيع،
          وكيف تقرأ محفظة الأعمال بعيناً ناقدة، والأرقام الواقعية للميزانية.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          لماذا يختلف تصوير الأعراس في دبي عن غيره؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          دبي مدينة مميزة من زاوية التصوير — ضوء الشمس الذهبي بعد العصر يعطي ألواناً استثنائية لأفضل
          المصورين الذين يعرفون كيف يستغلونه. القاعات الفندقية في منطقة وسط المدينة كفندق أرماني وبرج
          العرب تتطلب إضاءة إضافية متقنة لأن التصميم الداخلي الفاخر يغلب عليه الألوان الداكنة. المناطق
          الخارجية مثل ميناء خور دبي أو كريك هاربر توفر خلفيات طبيعية لا مثيل لها لكنها تتطلب تصاريح مسبقة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          فهد إقبال بت، المدير الإبداعي في باكيارد ستوديو، يقول: "كل حفل زفاف له شخصية مختلفة. هناك أعراس
          إماراتية تقليدية تحتاج حساسية ثقافية عالية، وأعراس بين جنسيات مختلفة تجمع مناسك وعادات من
          بلدان متعددة، وأعراس صغيرة خاصة في المنازل والفلل. لكل نوع أسلوب تصوير مختلف."
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما الفرق بين الفيديو السينمائي والتوثيقي؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          هذا السؤال يأتينا كثيراً. الإجابة البسيطة: فيديو التوثيق يسجّل ما يحدث بالترتيب الزمني من لحظة
          الاستعداد حتى نهاية الحفل. الفيديو السينمائي يُعالَج كأنه قصة قصيرة — يبدأ بمشهد يأسر الانتباه،
          ينتقل بين اللحظات الأكثر تأثيراً، يستخدم موسيقى تُحرّك المشاعر، ويُنتهى بمشهد ختامي يُبكي
          والداكِ في كل مرة يشاهدانه.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          في باكيارد ستوديو، نقدّم الاثنين — لكننا نعتقد أن الجمع بينهما هو الأفضل. يُعطيك التوثيق الذاكرة
          الكاملة، والفيديو السينمائي يُعطيك القصة التي ستشاركها.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          الفيديو الجوي بالدرون — رفاهية أم ضرورة؟
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          فريقنا يحمل رخصة GCAA (الهيئة العامة للطيران المدني) لتشغيل الطائرات المسيّرة في جميع أنحاء
          الإمارات. اللقطات الجوية تُضيف بُعداً يستحيل الحصول عليه بأي طريقة أخرى — خاصة في حفلات
          الفيلل الخاصة والشواطئ وقصور الأفراح الكبرى. أسعار إضافة الدرون تبدأ من AED 1,500 كخدمة
          مستقلة.
        </p>

        {/* Section 3 — Pricing */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الأعراس في دبي 2026 — أرقام واقعية
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          لن نخبرك بأسعار مثالية لا تعكس الواقع. الأرقام التالية مبنية على ما يقدّمه السوق فعلاً
          في 2026:
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
            📋 جدول أسعار تصوير الزفاف في دبي
          </h3>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "حزمة أساسية", detail: "مصور واحد / 4 ساعات / تسليم رقمي", price: "AED 3,500 – 5,500" },
              { pkg: "حزمة متوسطة", detail: "مصور + مصور فيديو / 8 ساعات / فيديو 5 دقائق", price: "AED 8,000 – 14,000" },
              { pkg: "حزمة شاملة", detail: "فريق كامل / يوم كامل / فيديو سينمائي + ألبوم طباعة", price: "AED 16,000 – 28,000" },
              { pkg: "حزمة بريميوم", detail: "جلسة قبل الزفاف + طيران مسيّر + بكرة تسليط الضوء", price: "AED 28,000 – 45,000" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginBottom: "2.5rem", fontSize: "0.875rem", color: "rgba(245,240,225,0.6)" }}>
          * الأسعار تقديرية وتختلف بحسب مكان الحفل وعدد الضيوف وطول اليوم. للحصول على عرض سعر دقيق،
          تواصل مع فريقنا عبر{" "}
          <a href="https://wa.me/971585882685" style={{ color: "var(--gold)" }}>واتساب</a>.
        </p>

        {/* Section 4 — Checklist */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          10 أسئلة يجب أن تطرحها على مصور الأعراس قبل الحجز
        </h2>
        <ol style={{ paddingRight: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {[
            "كم عدد حفلات الزفاف التي صوّرتها في مكان مشابه لمكاننا؟",
            "هل لديك نسخ احتياطية من المعدات في حالة العطل؟",
            "من يصوّر إذا مرضتَ في يوم الحفل؟",
            "كم تستغرق معالجة الصور وتسليمها؟",
            "ما شروط عقد الحجز والإلغاء؟",
            "هل تملك تصاريح الطائرات المسيّرة إذا كنا نحتاجها؟",
            "كيف تتعامل مع مواقع التصوير ذات الإضاءة الصعبة؟",
            "هل يمكننا الحصول على بعض الصور الخام غير المُعدَّلة؟",
            "ما عدد الصور التي سنستلمها في النهاية؟",
            "هل أنت متاح لحضور جلسة قبل الزفاف لنتعرف عليك أولاً؟",
          ].map((q, i) => (
            <li key={i} style={{ color: "rgba(245,240,225,0.85)" }}>
              {q}
            </li>
          ))}
        </ol>

        {/* Section 5 */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          كيف يعمل فريق باكيارد ستوديو في يوم الزفاف؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          سيد مظهر زيدي، مدير العمليات لدينا، يشرح نهجنا: "نلتقي بالعروسين قبل الحفل بأسبوعين على الأقل
          — ليس فقط لمناقشة التفاصيل اللوجستية، بل لنفهم شخصيتهما وما يجعلهما يضحكان وما يريدان أن
          يتذكراه بعد خمسين عاماً. هذا اللقاء يُغيّر طريقة تصويرنا تماماً."
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          يوم الزفاف نصل قبل ساعتين من البداية. نرصد الضوء، نحدد أفضل زوايا التصوير، نتعرف على أسماء
          أفراد الأسرة الذين يجب ألا تفوتنا لحظة معهم. خلال الحفل، فريقنا لا يُلاحق اللحظات — يتوقّعها.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          بعد الحفل، تبدأ مرحلة المعالجة والتحرير التي نصفها دائماً بأنها "نصف العمل". تستلمون
          الصور المُحرَّرة خلال 21 يوماً والفيديو خلال 45 يوماً — مع إمكانية التسريع إذا كان لديكم حاجة عاجلة.
        </p>

        {/* FAQ Section */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          أسئلة شائعة
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            {
              q: "كم تكلفة تصوير حفل الزفاف في دبي؟",
              a: "تبدأ الأسعار من AED 3,500 للحزم الأساسية. الحزم الشاملة مع الفيديو السينمائي وألبوم الطباعة تتراوح بين AED 16,000 وAED 45,000 أو أكثر حسب احتياجاتكم.",
            },
            {
              q: "ما الفرق بين فيديو الزفاف السينمائي والتقليدي؟",
              a: "الفيديو التوثيقي يسجّل الحفل كاملاً بالترتيب. الفيديو السينمائي يُنتَج كفيلم قصير مؤثر مع موسيقى وتحرير إبداعي — وهو ما يُشاهَد ويُشارَك مرات ومرات.",
            },
            {
              q: "هل تتوفر خدمة التصوير الجوي بالطائرات المسيّرة؟",
              a: "نعم، فريقنا مرخّص من GCAA ويمكنه تصوير حفلكم جوياً في أي مكان ضمن الإمارات.",
            },
            {
              q: "متى يجب حجز مصور الأعراس في دبي؟",
              a: "ينصح بالحجز قبل 6 أشهر على الأقل، وقبل سنة في موسم الأعراس (أكتوبر – مارس).",
            },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}
                <span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "4px",
            padding: "2.5rem",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            هل تحتاج إلى استشارة مجانية؟
          </h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>
            تحدّث مع فريقنا الآن عبر واتساب وسنرد خلال ساعتين.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971585882685"
              style={{
                background: "var(--gold)",
                color: "#000",
                padding: "0.8rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "Cairo, sans-serif",
              }}
            >
              تواصل عبر واتساب
            </a>
            <a
              href="/ar/pricing"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "0.8rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "Cairo, sans-serif",
              }}
            >
              عرض الأسعار
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
