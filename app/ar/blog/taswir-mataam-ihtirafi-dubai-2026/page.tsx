import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الطعام الاحترافي في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير طعام ومطاعم احترافي في دبي — قوائم المطاعم، التسويق على السوشيال ميديا، إعلانات المأكولات. يجعل طعامك لا يُقاوَم بصرياً. من 1,800 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-mataam-ihtirafi-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-mataam-ihtirafi-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الطعام الاحترافي في دبي 2026",
    description: "تصوير طعام ومطاعم يجعل كل وجبة مغرية — لقوائم المطاعم والسوشيال ميديا في دبي.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FoodPhotoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الطعام الاحترافي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير الطعام في دبي من AED 1,800 لنصف يوم مع 15–20 لقطة معدّلة. الباقة الشاملة لقائمة المطعم الكاملة تبدأ من AED 4,000 إلى AED 12,000 حسب عدد الأطباق.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون داخل المطعم أم في الاستوديو؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "كلاهما. تصوير داخل المطعم يعطي أجواء أصيلة وجوية، بينما الاستوديو يمنحنا تحكماً كاملاً في الإضاءة للحصول على نتائج أكثر احترافية. نوصي بالجمع بين الأسلوبين.",
        },
      },
      {
        "@type": "Question",
        name: "هل تشمل الخدمة تجهيز الطعام وتقديمه (Food Styling)؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، باقاتنا الشاملة تشمل خدمة تجهيز الطعام (Food Stylist) الذي يجعل كل طبق يبدو في أفضل صورته دون تغيير مكوّناته.",
        },
      },
      {
        "@type": "Question",
        name: "هل تناسب صوركم منصات التواصل الاجتماعي مثل إنستغرام؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "هذا تحديداً ما نتخصص فيه. نصوّر بأحجام ونسب متعددة تناسب إنستغرام، سناب شات، تيك توك، وديليفري ستار، مع ألوان وأسلوب يتسقان مع هوية علامتك التجارية.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير الطعام الاحترافي في دبي 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-mataam-ihtirafi-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>
          {" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>
          {" / "}
          <span>تصوير الطعام في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          التصوير التجاري
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير الطعام الاحترافي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>اجعل طعامك لا يُقاوَم بصرياً</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🍽️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في سوق الأغذية والمطاعم بدبي، الصورة تبيع قبل أن يتذوّق الزبون أي شيء. قائمة طعام رديئة
          الصور تخسر طلبات. إعلان على إنستغرام بصورة احترافية يزيد الطلبات عبر الإنترنت بنسب
          كبيرة جداً.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو أوفيشيال، صوّرنا لعشرات المطاعم والعلامات الغذائية في دبي — من مطاعم
          الميشلان إلى الكلاود كيتشن وتطبيقات الديليفري. نعرف الفرق بين صورة تجعل الزبون يأمر
          وصورة تجعله يمرّ.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما نصوّره لعلامتك الغذائية
        </h2>

        {[
          { title: "قائمة المطعم", desc: "كل طبق بزاوية ثلاث ربع من الأعلى والجانب، مع الإضاءة الصحيحة التي تُظهر القوام واللون الحقيقيين." },
          { title: "محتوى السوشيال ميديا", desc: "ريلز، ستوريز، كاروسيل — محتوى مصمّم لكل منصة يزيد التفاعل ويولّد الطلبات." },
          { title: "صور تطبيقات الديليفري", desc: "تصوير يناسب طالباتك وكريم ونون — صور بيضاء نظيفة تبرز المنتج وترفع نسبة النقر." },
          { title: "صور الحملات الإعلانية", desc: "لموسم رمضان، اليوم الوطني، الإطلاقات الجديدة — صور تسويقية بمستوى الشركات الكبرى." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير الطعام في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة سريعة", detail: "نصف يوم / 15 لقطة معدّلة", price: "من AED 1,800" },
            { pkg: "قائمة متوسطة", detail: "يوم كامل / 40–50 طبقاً", price: "من AED 4,000" },
            { pkg: "الباقة الشاملة", detail: "يومان + Food Stylist + فيديو", price: "من AED 8,000" },
            { pkg: "حملة إطلاق كاملة", detail: "تصوير + فيديو + محتوى سوشيال", price: "من AED 15,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>صوّر طعامك باحترافية</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا اليوم لعرض سعر مخصص لقائمتك أو علامتك الغذائية.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
