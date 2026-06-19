import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير أعراس الوجهة في دبي 2026 | باكيارد ستوديو",
  description:
    "دبي وجهة أعراس عالمية — تصوير احترافي لحفلات الزفاف في فنادق دبي الفاخرة والمواقع الأيقونية. باقات شاملة من 8,000 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-wajiha-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-wajiha-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/destination-wedding-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير أعراس الوجهة في دبي 2026",
    description: "احتفل بزفافك في دبي — فنادق فاخرة، مناظر أيقونية، وفريق تصوير محترف يوثّق كل لحظة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function DestinationWeddingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "لماذا تُعدّ دبي وجهة مثالية للأعراس الدولية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "دبي تجمع بين الفنادق الفاخرة، الطقس المثالي (أكتوبر–مارس)، سهولة الوصول من أي مكان في العالم، والمناظر الأيقونية كبرج خليفة والنخلة. كما توفّر المدينة بنية تحتية متكاملة للأعراس الكبيرة والصغيرة على حدٍّ سواء.",
        },
      },
      {
        "@type": "Question",
        name: "كم تكلفة تصوير زفاف الوجهة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ باقات تصوير أعراس الوجهة في دبي من AED 8,000 ليوم واحد مع مصوّر واحد. الباقة الشاملة مع فيديو سينمائي وطائرة مسيّرة تبدأ من AED 25,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكنكم التصوير في برج خليفة أو النخلة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، لدينا خبرة واسعة في التصوير في أبرز مواقع دبي بما فيها برج خليفة، النخلة، الصحراء، وأرقى فنادق المدينة. ننسّق التصاريح اللازمة مسبقاً لضمان سير التصوير بسلاسة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تساعدون في تنسيق أعراس الوجهة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نتعاون مع أفضل منسّقي الأعراس في دبي ويمكننا التوصية بمنسّق يناسب ميزانيتك وذوقك. مهمتنا هي توثيق كل لحظة من لحظات يومك الاستثنائي.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير أعراس الوجهة في دبي 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-wajiha-dubai-2026",
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
          <span>أعراس الوجهة في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          أعراس الوجهة
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير أعراس الوجهة في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>فنادق فاخرة، مناظر أيقونية، ذكريات أبدية</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🏙️</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي ليست مجرد مدينة — هي خلفية سينمائية لزفافك. برج خليفة يضيء السماء، صحراء الخيبيصي
          توفّر صوراً لا تُنسى عند الغروب، وفنادق من الدرجة الأولى تحوّل كل لحظة إلى لقطة
          ستبهر كل من يراها.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          صوّر فريق باكيارد ستوديو أوفيشيال عشرات أعراس الوجهة لأزواج قادمين من أوروبا، آسيا،
          والشرق الأوسط. نعرف أفضل المواقع، أفضل أوقات الإضاءة، وكيف نوثّق يوم زفافك بأسلوب
          يعكس فخامة اختيارك لدبي.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أفضل مواقع التصوير في دبي للأعراس
        </h2>

        {[
          { title: "برج خليفة والداون تاون", desc: "الخلفية الأيقونية بامتياز — ضوء الغروب الذهبي مع أطول برج في العالم خلفك لقطات لا تُصدَّق." },
          { title: "نخلة جميرا", desc: "المناظر البحرية الرائعة وأرقى فنادق العالم تجعل النخلة وجهة أعراس لا بديل عنها." },
          { title: "صحراء دبي", desc: "الكثبان الرملية عند الغروب — ألوان برتقالية دافئة وأجواء رومانسية لا تجدها في أي مكان آخر." },
          { title: "دبي مارينا والواجهة البحرية", desc: "تصوير على الماء مع أفق المدينة — مثالي للأزواج الذين يحبون الجمع بين المدينة والطبيعة." },
          { title: "فنادق دبي الفاخرة", desc: "برج العرب، أتلانتس، فور سيزونز — نعمل بانتظام في هذه الفنادق ونعرف كل زاوية وكل لحظة ضوء مثالية." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير أعراس الوجهة في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "باقة الجلسة التذكارية", detail: "3 ساعات / مصوّر واحد / موقعان", price: "من AED 3,500" },
            { pkg: "يوم الزفاف الكامل", detail: "مصوّر واحد / 10 ساعات", price: "من AED 8,000" },
            { pkg: "الباقة الفاخرة", detail: "مصوّران + فيديو سينمائي", price: "من AED 18,000" },
            { pkg: "الباقة الملكية", detail: "طائرة مسيّرة + كاميرا ثالثة + ألبوم", price: "من AED 30,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>خطّط لزفاف وجهتك في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>نردّ خلال ساعتين ونساعدك في اختيار المواقع والباقة المثالية.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
