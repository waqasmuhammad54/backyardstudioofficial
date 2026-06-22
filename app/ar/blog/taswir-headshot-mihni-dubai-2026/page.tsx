import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الهيد شوت الاحترافي في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير البورتريه والهيد شوت الاحترافي في دبي من AED 900. صور لينكد إن، جواز سفر المهني، ملف الممثل. تسليم خلال 48 ساعة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-headshot-mihni-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-headshot-mihni-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/headshot-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الهيد شوت الاحترافي في دبي 2026 | باكيارد ستوديو",
    description: "صور بورتريه احترافية للشركات والممثلين والمهنيين في دبي. من AED 900، تسليم سريع.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HeadshotArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الهيد شوت الاحترافي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الهيد شوت في دبي من AED 900 للجلسة الفردية (30 دقيقة، 5 صور محررة). جلسات الشركات لفرق العمل تبدأ من AED 500 للشخص الواحد عند حجز 5 أشخاص فأكثر.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين تصوير الهيد شوت وتصوير البورتريه؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الهيد شوت هو صورة تركز على الوجه والكتفين، مصممة للاستخدام المهني كلينكد إن وملفات الأعمال. البورتريه أوسع ويشمل تعبيرات وأجواء متنوعة. في باكيارد ستوديو نقدم النوعين بحسب هدفك.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصلح صور الهيد شوت للينكد إن وملف الممثل معاً؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم عند التخطيط المسبق. نأخذ مجموعة صور بخلفيات وأوضاع مختلفة خلال الجلسة الواحدة — بعضها للاستخدام المهني الرسمي وبعضها أكثر حيوية وتعبيراً للملفات الإبداعية.",
        },
      },
      {
        "@type": "Question",
        name: "كم صورة محررة أحصل عليها في جلسة الهيد شوت؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الجلسة الأساسية تتضمن 5 صور محررة بالكامل. يمكن إضافة صور إضافية بسعر AED 100 للصورة. جلسات الشركات عادة تشمل 10 صور لكل موظف.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير الهيد شوت الاحترافي في دبي 2026 — كل ما تحتاج معرفته",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-headshot-mihni-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article
        dir="rtl"
        lang="ar"
        style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}
      >
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير الهيد شوت الاحترافي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير احترافي
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الهيد شوت الاحترافي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صورة تعكس ثقتك واحترافيتك</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="تصوير الهيد شوت الاحترافي في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في دبي — مدينة الأعمال والفرص — صورتك المهنية هي أول انطباع يتركه اسمك قبل أن
          تتحدث. سواء كنت تبحث عن وظيفة، تطلق علامة تجارية شخصية، أو تحدّث ملفك على لينكد
          إن، جلسة الهيد شوت الصحيحة تفعل ما لا تفعله آلاف الكلمات.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نصوّر يومياً مديرين تنفيذيين، ممثلين، مستشارين، وأصحاب مشاريع
          يريدون صورة تعكس شخصيتهم الحقيقية لا مجرد وجه مبتسم أمام كاميرا. كل جلسة نبدأها
          بفهم من أنت وما الصورة التي تريد إيصالها.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ماذا يجعل صورة الهيد شوت احترافية؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الإضاءة هي العامل الأول. إضاءة الاستديو المضبوطة تُظهر الوجه بشكل ثلاثي الأبعاد دون
          ظلال قاسية. نستخدم إضاءة رامبرانت الكلاسيكية للمهنيين في قطاع الأعمال، وإضاءة
          عريضة أكثر للممثلين الذين يحتاجون نطاقاً واسعاً من التعبيرات.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          الخلفية لها دور أكبر مما تتوقع. الخلفية الرمادية المحايدة أو البيضاء الناعمة هي الأنسب
          للاستخدام الرسمي على لينكد إن وملفات الشركات. الخلفيات الداكنة تعطي نكهة أكثر قوة
          وحضوراً للصور الإبداعية والتسويقية.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          التعبير هو الروح. أفضل صور الهيد شوت ليست تلك التي يكون فيها الشخص مبتسماً ابتسامة
          مثالية، بل تلك التي تشعر فيها بالثقة والحضور. نعمل معك خلال الجلسة لنصل إلى هذه
          اللحظة الطبيعية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          جلسات الهيد شوت لفرق الشركات
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          نقدم خدمة الهيد شوت الجماعي للشركات في دبي. نحضر إلى مقر شركتك بإضاءتنا المحمولة
          ونصوّر الفريق بأكمله في يوم واحد. التوحيد البصري في ملفات الموظفين يعكس احترافية
          الشركة ويقوي هوية العلامة التجارية.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          عملت مع فرق من 5 إلى 50 موظفاً في قطاعات المال والتقنية والاستشارات. كل فرد يحصل
          على 5 صور محررة بتنسيقات متعددة خلال 48 ساعة من يوم التصوير.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الهيد شوت في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "جلسة فردية", detail: "30 دقيقة / 5 صور محررة / خلفيتان", price: "AED 900" },
              { pkg: "جلسة مهنية", detail: "60 دقيقة / 10 صور / 3 خلفيات + تعديل ملابس", price: "AED 1,500" },
              { pkg: "جلسة شركات", detail: "للشخص الواحد (5+ أشخاص)", price: "AED 500/شخص" },
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
            { q: "كم تكلفة تصوير الهيد شوت الاحترافي في دبي؟", a: "تبدأ من AED 900 للجلسة الفردية مع 5 صور محررة. جلسات الشركات من AED 500 للشخص عند الحجز الجماعي." },
            { q: "ما الفرق بين الهيد شوت والبورتريه؟", a: "الهيد شوت يركز على الوجه والكتفين للاستخدام المهني. البورتريه أوسع وأكثر تعبيراً. نقدم النوعين." },
            { q: "هل تصلح للينكد إن وملف الممثل معاً؟", a: "نعم عند التخطيط المسبق نأخذ مجموعة صور بأوضاع وخلفيات مختلفة لتغطية الاستخدامين." },
            { q: "كم من الوقت تستغرق الجلسة؟", a: "الجلسة الأساسية 30 دقيقة. الجلسة المهنية 60 دقيقة. جلسات الشركات تُحسب بحسب حجم الفريق." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة الهيد شوت</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نساعدك في اختيار الإضاءة والخلفية المناسبة لهدفك المهني.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
