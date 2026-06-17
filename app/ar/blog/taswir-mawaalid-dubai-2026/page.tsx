import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير المواليد في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير حديثي الولادة في دبي من AED 900. جلسة نيوبورن آمنة في الاستديو، طاقم متخصص، تسليم خلال 5 أيام. احجز الآن قبل الولادة بـ 4 أسابيع.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-mawaalid-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-mawaalid-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/newborn-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير المواليد في دبي 2026 | باكيارد ستوديو",
    description:
      "وثّق أول أيام طفلك بجلسة نيوبورن احترافية. مصور متخصص في دبي، بيئة آمنة ودافئة، نتائج تستحق الإطار.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NewbornPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير حديثي الولادة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار جلسة النيوبورن في دبي من AED 900 للجلسة الأساسية (3 وضعيات، 20 صورة محررة). الجلسات الشاملة مع صور الأسرة وطباعة ألبوم تتراوح بين AED 1,800 وAED 3,200.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل وقت لتصوير المولود الجديد؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أفضل وقت هو بين اليوم الخامس واليوم الرابع عشر من عمر المولود. في هذه الفترة يكون الطفل نائماً معظم الوقت ومرناً بما يكفي للوضعيات الخاصة بجلسة النيوبورن. نوصي بحجز الجلسة قبل الولادة بـ 4 أسابيع لضمان التوفر.",
        },
      },
      {
        "@type": "Question",
        name: "هل جلسة تصوير المواليد آمنة للطفل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "السلامة أولويتنا الأولى. استديونا مدفأ باستمرار، وجميع الإكسسوارات والأقمشة معقمة وآمنة للجلد الحساس. مصورتنا المتخصصة تُدار وضعيات الطفل بعناية فائقة، ولا نضغط أبداً على جسم الطفل بأي شكل غير طبيعي.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير أفراد الأسرة في جلسة النيوبورن؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. جلسة الأسرة الكاملة مشمولة في الحزم المتوسطة والشاملة. نصوّر المولود مع الأم والأب، مع الأشقاء، ومع الأجداد أحياناً — لقطات عائلية لا تُقدَّر بثمن.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير المواليد في دبي 2026 — جلسة النيوبورن المثالية",
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
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-mawaalid-dubai-2026",
    description: "دليل شامل لتصوير المواليد في دبي — التوقيت، الأسعار، السلامة، وكيف تحجز جلستك قبل ولادة طفلك.",
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
          <span>تصوير المواليد في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير المواليد
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير المواليد في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>وثّق أول أيام طفلك بصور تدوم للأبد</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>17 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "360px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>👶</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          الأيام العشرة الأولى في حياة طفلك تمر بسرعة لا تتخيلها. ما يبدو وكأنه ثانية من الأمس
          سيصبح ذكرى بعيدة في غمضة عين. جلسة تصوير المواليد — أو ما يُعرف بـ "نيوبورن فوتوغرافي"
          — هي الطريقة الوحيدة لحفظ هذه اللحظات الصغيرة للأبد.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، صوّرنا أكثر من 400 مولود في دبي خلال السنوات الخمس الماضية. نعرف
          كيف نتعامل مع الرضّع بحنان وأمان، وكيف نصنع الوضعيات الجميلة دون أن نُزعج الطفل.
          الحرارة اللازمة، الهدوء المطلوب، والصبر الكافي — كلها موجودة في استديونا.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          متى تكون جلسة النيوبورن؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          النافذة المثالية لجلسة تصوير المولود هي من اليوم الخامس إلى اليوم الرابع عشر. في هذا الوقت:
        </p>
        <ul style={{ paddingRight: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>الطفل ينام معظم الوقت ويسهل توجيهه للوضعيات المختلفة</li>
          <li style={{ marginBottom: "0.5rem" }}>جسمه رطب ومرن وخالٍ من البثور المبكرة التي قد تظهر بعد الأسبوع الثاني</li>
          <li style={{ marginBottom: "0.5rem" }}>صغر حجمه يسمح بالوضعيات الكلاسيكية الأجمل</li>
          <li style={{ marginBottom: "0.5rem" }}>الأم لا تزال في إجازة الولادة ومتاحة للجلسة</li>
        </ul>
        <p style={{ marginBottom: "2.5rem" }}>
          نوصي بحجز الجلسة قبل الولادة بـ 4 أسابيع. هذا يضمن وجود مكان متاح في جدولنا في النافذة
          الزمنية المثالية لمولودك. سيد مظهر زيدي، مدير العمليات، يتعامل شخصياً مع الحجوزات
          ويرتب الجدول بعد إخبارنا بتاريخ الولادة المتوقع.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          السلامة أولاً — كيف نحمي مولودك أثناء الجلسة
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          كثير من الأمهات تسألنا: "هل هذه الوضعيات آمنة؟" الجواب: نعم، بشرط أن يقوم بها متخصص
          مدرّب. لدينا مصورة متخصصة في جلسات النيوبورن تحضر كل جلسة وتتولى وضع الطفل وتحريكه.
          لا نترك الطفل في وضعية دون يد تحته أبداً.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          الاستديو يُدفأ إلى 28–30 درجة مئوية طوال الجلسة. جميع الإكسسوارات — الأقمشة والقفف
          والأغطية — مغسولة ومعقمة قبل كل جلسة. نستخدم أقمشة طبيعية (قطن وموسلين) فقط ونتجنب
          أي مواد اصطناعية قد تُهيج الجلد الحساس.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ماذا نصوّر في جلسة النيوبورن؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          جلستنا الكاملة تشمل ثلاثة أجزاء: الطفل وحده بالوضعيات الكلاسيكية، الطفل مع الأم،
          والطفل مع الأسرة كاملة. نُركّز على اللقطات التفصيلية التي يفضّلها الآباء أكثر من
          الوضعيات المعقدة — الأصابع الصغيرة، حواف الأذن، التجاعيد الصغيرة على الوجه،
          يد الأم وهي تحتضن قدم الطفل.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          هذه اللقطات التفصيلية هي ما ستنظر إليه بعد عشرين سنة وتتمنى أن تعود إليها.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار جلسة تصوير المواليد في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "جلسة أساسية", detail: "3 ساعات / الطفل وحده / 20 صورة محررة", price: "AED 900" },
              { pkg: "جلسة متوسطة", detail: "4 ساعات / طفل + أسرة / 40 صورة", price: "AED 1,800" },
              { pkg: "جلسة شاملة", detail: "5 ساعات / كل الوضعيات + ألبوم طباعة", price: "AED 3,200" },
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
            { q: "كم تكلفة تصوير حديثي الولادة في دبي؟", a: "من AED 900 للجلسة الأساسية. الجلسات الشاملة مع ألبوم طباعة تصل إلى AED 3,200." },
            { q: "ما أفضل وقت لجلسة النيوبورن؟", a: "من اليوم 5 إلى اليوم 14 من عمر المولود. احجزوا قبل الولادة بـ 4 أسابيع لضمان الجدول المناسب." },
            { q: "هل الجلسة آمنة لحديثي الولادة؟", a: "نعم، السلامة أولويتنا. مصورة متخصصة تُشرف على كل وضعية، والاستديو مدفأ باستمرار، وجميع الأقمشة معقمة." },
            { q: "هل نحضر الطفل أم تحضرون الإكسسوارات؟", a: "نحضر نحن جميع الإكسسوارات — أقمشة، قفف، وإطارات. أنتم تأتون بالطفل ومستلزماته اليومية فقط." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة مولودك الآن</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>احجزي قبل الولادة بشهر لضمان توفر موعدك المثالي.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
