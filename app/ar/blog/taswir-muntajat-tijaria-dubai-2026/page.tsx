import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير المنتجات التجارية في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير منتجات احترافي في دبي — إكومرس، أمازون، شوبيفاي، حملات إعلانية. خلفيات بيضاء، تصوير إبداعي، وفيديو منتج. من 800 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-muntajat-tijaria-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-muntajat-tijaria-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/product-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير المنتجات التجارية في دبي 2026",
    description: "تصوير منتجات احترافي لمتاجر الإكومرس والحملات الإعلانية في دبي.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductPhotoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير المنتجات في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ تصوير المنتجات في دبي من AED 800 لـ 10 منتجات على خلفية بيضاء. الجلسة الكاملة مع تصوير إبداعي وأسلوب حياة (Lifestyle) تبدأ من AED 2,500.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون منتجات أمازون والإكومرس؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نتخصص في تصوير منتجات أمازون UAE والإمارات بمعايير المنصة — خلفية بيضاء بحتة (RGB 255,255,255)، قياسات معتمدة، وزوايا متعددة لكل منتج.",
        },
      },
      {
        "@type": "Question",
        name: "هل تشمل الخدمة تصوير فيديو المنتج (Unboxing / Reels)؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نقدم تصوير فيديو المنتج بما يشمل: فيديو 360 درجة، فيديو إبداعي للسوشيال ميديا، فيديو Unboxing، وريلز منتجات للإعلانات على إنستغرام وتيك توك.",
        },
      },
      {
        "@type": "Question",
        name: "كم منتجاً يمكن تصويره في يوم واحد؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "في الاستوديو يمكننا تصوير 20–40 منتجاً في يوم واحد بالأسلوب البسيط (خلفية بيضاء). للتصوير الإبداعي مع تغيير الإعدادات والإضاءة، نصوّر 8–15 منتجاً يومياً.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير المنتجات التجارية في دبي 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-muntajat-tijaria-dubai-2026",
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
          <span>تصوير المنتجات في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          التصوير التجاري
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير المنتجات التجارية في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>إكومرس، إعلانات، سوشيال ميديا</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80" alt="Product Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في سوق الإكومرس بالإمارات، الصورة هي البائع الصامت. منتج جيد بصورة رديئة يُباع أقل من
          منتج متوسط بصورة احترافية. هذه ليست مبالغة — هذه بيانات حقيقية تؤكدها منصات كأمازون
          وشوبيفاي.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          نحن في باكيارد ستوديو أوفيشيال صوّرنا آلاف المنتجات لعلامات تجارية إماراتية وخليجية —
          من العطور والمجوهرات إلى إلكترونيات والمنتجات الغذائية. نفهم المعايير التقنية لكل منصة
          ونضمن أن صور منتجاتك تجتاز مراجعات القبول بالمرة الأولى.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أنواع تصوير المنتجات التي نقدمها
        </h2>

        {[
          { title: "خلفية بيضاء (E-commerce Standard)", desc: "المعيار الذي تطلبه أمازون وشوبيفاي — خلفية بيضاء بحتة، قياسات محددة، زوايا متعددة." },
          { title: "تصوير إبداعي (Creative/Lifestyle)", desc: "المنتج في بيئته الطبيعية أو مع إعدادات مصممة خصيصاً — يحكي قصة ويبني رغبة." },
          { title: "تصوير 360 درجة", desc: "مجموعة صور تُتيح للزبون رؤية المنتج من كل الزوايا — يزيد الثقة ويقلل الإرجاع." },
          { title: "فيديو المنتج وريلز الإعلانات", desc: "15–60 ثانية تُظهر المنتج بحركة وحيوية — مثالي للإعلانات على إنستغرام وتيك توك وسناب." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير المنتجات في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "خلفية بيضاء — 10 منتجات", detail: "3 زوايا لكل منتج / ملف رقمي عالي الدقة", price: "من AED 800" },
            { pkg: "تصوير إبداعي — 5 منتجات", detail: "خلفيات مخصصة + إضاءة درامية", price: "من AED 2,500" },
            { pkg: "الباقة الكاملة (20 منتجاً)", detail: "خلفية بيضاء + lifestyle + فيديو", price: "من AED 5,500" },
            { pkg: "حملة إطلاق المتجر", detail: "تصوير + فيديو + محتوى سوشيال ميديا", price: "من AED 10,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>صوّر منتجاتك احترافياً في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>أرسل لنا قائمة منتجاتك للحصول على عرض سعر فوري.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
