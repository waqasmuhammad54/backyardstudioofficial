import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير البراند الشخصي في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير احترافي للبراند الشخصي في دبي — رواد الأعمال، المؤثرون، المديرون التنفيذيون. صور تعكس شخصيتك وتبني حضوراً رقمياً قوياً. من 1,500 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-brand-shakhsi-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-brand-shakhsi-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/personal-branding-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير البراند الشخصي في دبي 2026",
    description: "ابنِ حضوراً رقمياً قوياً بصور احترافية تعكس شخصيتك وأهدافك المهنية في دبي.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PersonalBrandingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة جلسة تصوير البراند الشخصي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير البراند الشخصي في دبي من AED 1,500 لجلسة ساعتين مع تسليم 30 صورة معدّلة. الباقة الشاملة مع عدة خلفيات وملابس تبدأ من AED 3,500.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين تصوير البراند الشخصي والتصوير الوظيفي (هيدشوت)؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الهيدشوت صورة بروفايل واحدة على خلفية بسيطة. تصوير البراند الشخصي يشمل مجموعة صور متنوعة تعكس شخصيتك، بيئة عملك، أسلوب حياتك المهني، ومحتوى يصلح للموقع الإلكتروني ووسائل التواصل الاجتماعي.",
        },
      },
      {
        "@type": "Question",
        name: "من يستفيد من تصوير البراند الشخصي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "رواد الأعمال، المؤثرون على وسائل التواصل، المديرون التنفيذيون، المحامون، الأطباء، المدرّبون الشخصيون، والمستشارون — أي شخص يبني علامة شخصية ويريد حضوراً مهنياً مقنعاً.",
        },
      },
      {
        "@type": "Question",
        name: "أين تُجرى جلسات تصوير البراند الشخصي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نصوّر في الاستوديو، في مكان عملك، في فنادق دبي الفاخرة، أو في مواقع خارجية مختارة. نساعدك في اختيار الأماكن التي تعكس براندك الشخصي بشكل أفضل.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير البراند الشخصي في دبي 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-brand-shakhsi-dubai-2026",
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
          <span>تصوير البراند الشخصي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          التصوير التجاري
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير البراند الشخصي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صورة تساوي ألف فرصة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="Personal Branding Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في دبي، الانطباع الأول يُصنع رقمياً. قبل أن يتحدث أحد معك، يرى صورتك على لينكدإن، موقعك،
          أو إنستغرام. صورة احترافية لا تعكس وجهك فقط — بل تعكس مستوى جديتك، احترافيتك، وجمهورك المستهدف.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو أوفيشيال، صوّرنا رواد أعمال إماراتيين وعرباً، مؤثرين خليجيين،
          ومديرين تنفيذيين من مؤسسات دولية في دبي. نفهم الفرق بين صورة تجذب الزبائن وصورة تبعد الفرص.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما تحتوي عليه جلسة البراند الشخصي
        </h2>

        {[
          { title: "صور البروفايل المهني", desc: "لينكدإن، الموقع الإلكتروني، بطاقة العمل — خلفيات نظيفة وإضاءة ناعمة تبرز ملامحك." },
          { title: "صور بيئة العمل", desc: "في مكتبك، في اجتماع، خلف الكمبيوتر — صور تُظهرك في عملك الحقيقي وتضيف مصداقية." },
          { title: "صور الأسلوب الشخصي", desc: "قهوة الصباح، الكتاب في يدك، المشي في مارينا — تفاصيل تبني شخصيتك ككل لا مجرد مهنة." },
          { title: "محتوى وسائل التواصل", desc: "صور متعددة الزوايا والأحجام تصلح للريلز، الكاروسيل، والستوريز — مكتبة محتوى كاملة." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير البراند الشخصي في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "الباقة الأساسية", detail: "ساعتان / موقع واحد / 30 صورة معدّلة", price: "من AED 1,500" },
            { pkg: "الباقة المتوسطة", detail: "4 ساعات / موقعان / 60 صورة", price: "من AED 2,800" },
            { pkg: "الباقة المتكاملة", detail: "يوم كامل / مواقع متعددة / 120 صورة + ريلز", price: "من AED 5,000" },
            { pkg: "الباقة التنفيذية", detail: "يومان + استوديو + خبير مكياج + تصوير فيديو", price: "من AED 9,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>ابنِ براندك الشخصي بصور تُقنع</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>احجز جلستك اليوم — نردّ في خلال ساعتين.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
