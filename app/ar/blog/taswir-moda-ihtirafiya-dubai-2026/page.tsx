import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الموضة الاحترافي في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير موضة احترافي في دبي للعلامات التجارية والمصممين والمؤثرين. استديو وخارجي، أسعار من AED 1,500. تسليم خلال 72 ساعة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-moda-ihtirafiya-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-moda-ihtirafiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/fashion-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الموضة الاحترافي في دبي 2026 | باكيارد ستوديو",
    description: "صور موضة تحكي قصة علامتك التجارية. استديو مجهز ومواقع دبي الأيقونية.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FashionPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الموضة الاحترافي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير الموضة في دبي من AED 1,500 للجلسة الاستديو نصف اليوم. جلسات الموضة الخارجية في مواقع دبي تبدأ من AED 2,200. الحزم اليومية الكاملة مع طاقم كامل تبدأ من AED 4,500.",
        },
      },
      {
        "@type": "Question",
        name: "هل تعملون مع مصممين ومحلات ملابس محلية في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نعمل مع مصممي الأزياء، بوتيكات الملابس، والعلامات التجارية المحلية والدولية في دبي. نفهم احتياجات كل علامة ونصمم الجلسة لتعكس هويتها البصرية.",
        },
      },
      {
        "@type": "Question",
        name: "هل تحتاج العارضة إلى وكالة أم يمكنني إحضار عارضتي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يمكنك إحضار عارضتك أو نساعدك في التنسيق مع وكالات النماذج في دبي. نعمل مع وكالات معتمدة ويمكن إضافة تكلفة النموذج بالتنسيق معنا مسبقاً.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل مواقع تصوير الموضة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "دبي كريك هاربر، المدينة القديمة البستكية، شوارع دبي المال، وأسطح المباني في وسط المدينة. لكل موقع جماليته المميزة وكلها تعطي خلفيات استثنائية لصور الموضة.",
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
          <span>تصوير الموضة الاحترافي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير موضة
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الموضة الاحترافي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صور تحكي قصة علامتك التجارية</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80" alt="تصوير الموضة الاحترافي في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي واحدة من أكثر مدن العالم جاذبية في عالم الموضة. مهرجانات الأزياء، أسابيع الموضة،
          والعلامات التجارية الفاخرة التي تتخذ منها مقراً جعلت المدينة مركزاً إبداعياً حقيقياً
          لصور الموضة الاحترافية.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نقدم خدمة تصوير موضة متكاملة — من التخطيط البصري إلى التصوير
          والتحرير — للمصممين المحليين، بوتيكات الملابس، والمؤثرين الذين يريدون محتوى يميزهم.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الاستديو مقابل التصوير الخارجي
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الاستديو يمنحك تحكماً كاملاً في الإضاءة والخلفية، ومثالي للكتالوجات والمجموعات
          الكاملة حيث تريد تركيز الانتباه على الملبس. إضاءتنا الاحترافية قابلة للتكيف مع
          أسلوب الموضة الذي تريده — ناعم، حاد، أو درامي.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          التصوير الخارجي في شوارع دبي وأحيائها يضيف عمقاً سردياً للصورة. البستكية لموضة
          التراث والعبايات، كريك هاربر للموضة العصرية، والمناطق الصناعية القديمة لموضة
          الشارع ذات الطابع الخام.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          الجلسات الأفضل تجمع بين المكانين — بعض اللقطات في الاستديو وبعضها في الخارج —
          لتحصل على تنويع بصري يخدم احتياجات المحتوى الرقمي المتعدد.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الموضة في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة استديو نصف يوم", detail: "4 ساعات / 30 صورة محررة", price: "AED 1,500" },
            { pkg: "جلسة خارجية", detail: "4 ساعات / 25 صورة / موقع واحد", price: "AED 2,200" },
            { pkg: "يوم تصوير كامل", detail: "8 ساعات / 60+ صورة / موقعان", price: "AED 4,500" },
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
            { q: "كم تكلفة تصوير الموضة في دبي؟", a: "من AED 1,500 لجلسة الاستديو نصف اليوم. اليوم الكامل من AED 4,500." },
            { q: "هل تعملون مع مصممين محليين؟", a: "نعم، نعمل مع المصممين والبوتيكات والعلامات التجارية المحلية والدولية." },
            { q: "هل أحتاج عارضة من وكالة؟", a: "يمكنك إحضار عارضتك أو نساعدك في التنسيق مع وكالات معتمدة في دبي." },
            { q: "ما أفضل مواقع الموضة في دبي؟", a: "دبي كريك هاربر، البستكية، وسط المدينة، والمناطق الصناعية. لكل موقع جماليته." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة موضة</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>نناقش رؤيتك ونصمم الجلسة التي تعكس علامتك التجارية.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
