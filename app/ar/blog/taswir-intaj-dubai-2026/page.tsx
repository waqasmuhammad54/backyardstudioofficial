import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير منتجات في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير منتجات احترافي في دبي للتجارة الإلكترونية، الكتالوجات وحملات العلامات التجارية. مجوهرات، عطور، مستحضرات تجميل، منتجات غذائية. من AED 75/صورة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-intaj-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-intaj-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/product-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير منتجات في دبي 2026",
    description: "تصوير منتجات احترافي في دبي — أمازون، نون، كتالوجات وحملات. مجوهرات، عطور، مستحضرات تجميل وأغذية.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير المنتجات في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ تصوير المنتجات في دبي من AED 75 للصورة الواحدة (خلفية بيضاء، 3 زوايا، معدّلة). باقة الكتالوج الكاملة من AED 2,500 ليوم استوديو (15–25 منتجاً). تصوير منتج واحد على أمازون من AED 500 (7 صور كاملة).",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون المنتجات لأمازون الإمارات ونون؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نصوّر وفق مواصفات أمازون الدقيقة (خلفية بيضاء نقية، دقة عالية، بدون نص أو شعارات). نغطّي أمازون الإمارات، نون، إضافةً إلى متاجر الويب الخاصة بعلاماتكم التجارية.",
        },
      },
      {
        "@type": "Question",
        name: "ما أنواع المنتجات التي تصوّرونها في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نصوّر كل أنواع المنتجات: مجوهرات وعطور وزيت العود، مستحضرات تجميل وعناية بالبشرة، منتجات غذائية ومشروبات، إلكترونيات وأجهزة، ملابس وأزياء، منتجات منزلية، مستحضرات صيدلانية ومكمّلات غذائية.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين تصوير المنتج للتجارة الإلكترونية وتصوير الحملات الإعلانية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تصوير التجارة الإلكترونية يُركّز على الوضوح والدقة على خلفية بيضاء — صورة تُري المنتج كما هو. تصوير الحملات يضع المنتج في سياق إبداعي وبصري يروي قصة العلامة التجارية ويخلق ارتباطاً عاطفياً. الشركات الناجحة تحتاج الاثنين.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير منتجات في دبي 2026 — دليلك الشامل",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-intaj-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير منتجات في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير المنتجات
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير منتجات في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صور تبيع — لأمازون والكتالوجات والحملات</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>📦</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          في عالم التجارة الإلكترونية، الصورة هي البائع الأول. المستهلك في دبي لا يستطيع لمس المنتج
          قبل شرائه — صورتك هي ما يقرّر إن كان سيضغط "أضف إلى السلة" أم سيتجاوز لمنافسك.
          تصوير المنتجات الاحترافي ليس رفاهية — هو استثمار يُعيد عليك أضعافاً مضاعفة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          باكيارد ستوديو يصوّر المنتجات في دبي للشركات الصغيرة والعلامات التجارية الكبيرة على حدٍّ
          سواء — من متجر واحد بحاجة لصور أمازون، إلى علامة تجارية دولية تطلق كتالوجاً جديداً
          في السوق الخليجي.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أنواع تصوير المنتجات التي نقدّمها
        </h2>

        {[
          { type: "تصوير التجارة الإلكترونية (خلفية بيضاء)", desc: "صور نظيفة بخلفية بيضاء أو فاتحة، مطابقة لمواصفات أمازون ونون. 3–5 زوايا لكل منتج، دقة عالية للطباعة والرقمي." },
          { type: "تصوير الكتالوج", desc: "أسلوب موحّد عبر مجموعة كاملة من المنتجات مع خلفيات متنوّعة وإكسسوارات. مثالي للكتالوجات الموسمية ومواد التسويق." },
          { type: "تصوير اللايف ستايل", desc: "المنتج في سياقه الطبيعي — عطر في مشهد فندقي، منتج تجميل على رداء أبيض، طعام على طاولة ريسورت. يخلق ارتباطاً عاطفياً." },
          { type: "تصوير الحملات الإعلانية", desc: "توجيه إبداعي كامل، إكسسوارات ومؤثرات، تصوير على مستوى حملة وطنية. للعلامات التجارية الطامحة للتميّز." },
        ].map(({ type, desc }) => (
          <div key={type} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{type}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير المنتجات في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "منتج واحد (أمازون)", detail: "7 صور / خلفية بيضاء / معدّلة", price: "من AED 500" },
            { pkg: "تجارة إلكترونية (للصورة)", detail: "خلفية بيضاء / 3 زوايا / الحد الأدنى 5 منتجات", price: "من AED 75/صورة" },
            { pkg: "يوم كتالوج", detail: "15–25 منتجاً / استوديو يوم كامل", price: "من AED 2,500" },
            { pkg: "حملة إعلانية", detail: "توجيه إبداعي / 10–15 صورة / حقوق استخدام", price: "من AED 4,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز جلسة تصوير منتجاتك في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا للحصول على عرض سعر مخصّص لاحتياجاتك.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
