import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الأفراح العربية في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير احترافي للأفراح العربية في دبي — مجلس العرس، حفلة الحناء، مراسم الزواج التقليدية. خبرة واسعة في التقاليد الإماراتية والخليجية. من 6,000 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-afraah-arabiya-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-afraah-arabiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/arabic-wedding-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الأفراح العربية في دبي 2026",
    description: "مصور أفراح عربية في دبي — توثيق مراسم الزواج الخليجي والعربي بأسلوب سينمائي راقٍ.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ArabicWeddingPhotoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الأفراح العربية في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ تصوير الأفراح العربية في دبي من AED 6,000 ليوم واحد مع مصوّر واحد. الباقة الشاملة مع مصوّرَين وتغطية جميع المراسم تبدأ من AED 15,000 إلى AED 40,000 للأفراح الفاخرة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون المجالس والحفلات المنفصلة للرجال والنساء؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نتعامل باحترافية وحساسية ثقافية عالية مع الأفراح التي تفصل بين المجالس. لدينا مصوّرات متخصصات لتصوير قاعة النساء، ومصوّرون لقاعة الرجال، مما يضمن توثيقاً كاملاً لكلا الحفلين.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون حفلات الحناء والزفاف التقليدي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — ليلة الحناء، مجلس العريس، حفل الزفاف الرئيسي وحفل الوليمة. كل مرحلة تُوثَّق بأسلوب يناسب الأجواء سواء كانت حميمة أو احتفالية.",
        },
      },
      {
        "@type": "Question",
        name: "هل تستخدمون الطائرة المسيّرة في الأفراح العربية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم حيثما يُسمح بذلك. نحمل رخصة GCAA وننسّق مع إدارة الفندق أو القاعة مسبقاً لضمان الحصول على الإذن اللازم. المشاهد الجوية تضيف فخامة استثنائية للذكريات.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير الأفراح العربية في دبي 2026 — دليل اختيار المصوّر",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-afraah-arabiya-dubai-2026",
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
          <span>تصوير الأفراح العربية في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الأعراس
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير الأفراح العربية في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>مجلس العرس، الحناء، الوليمة — توثيق كامل</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🌙</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          الفرح العربي في دبي يجمع بين الأصالة والفخامة. من مجالس الرجال التي تعبق بالبخور، إلى حفلات
          النساء المليئة بالزياح والدبكة والعروس بثوبها الأبيض — كل لحظة تستحق مصوّراً يفهم عمق
          هذا التراث الثقافي الجميل.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو أوفيشيال، صوّرنا عشرات الأفراح الإماراتية والخليجية في أرقى فنادق دبي
          وقاعاتها. نفهم حساسية الأفراح التي تفصل بين الجنسين، ونضمن تغطية احترافية كاملة لكلا الحفلين.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما الذي نوثّقه في الفرح العربي
        </h2>

        {[
          { title: "ليلة الحناء", desc: "مراسم تقليدية دافئة — نصوّر نقش الحناء، ردود فعل العائلة، والفقرات الفنية بإضاءة تناسب الأجواء." },
          { title: "مجلس العريس", desc: "رجالة وعُدّة — نوثّق استقبال المهنئين، الأجواء البدوية الأصيلة، واللحظات الاجتماعية الحميمة." },
          { title: "حفل العروس (القاعة النسائية)", desc: "مصوّراتنا المتخصصات يلتقطن دخول العروس، الرقصات، وتفاصيل الأزياء بحرفية عالية." },
          { title: "الوليمة والتهاني", desc: "نصوّر لحظات الفرح المشترك، توزيع الهدايا، والصور العائلية التذكارية." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير الأفراح العربية في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "حفل واحد", detail: "مصوّر / مصوّرة واحدة / 6 ساعات", price: "من AED 6,000" },
            { pkg: "حفلا الرجال والنساء", detail: "مصوّر + مصوّرة / 10 ساعات", price: "من AED 12,000" },
            { pkg: "الباقة الشاملة (حناء + زفاف)", detail: "تصوير + فيديو", price: "من AED 20,000" },
            { pkg: "الباقة الفاخرة", detail: "طائرة مسيّرة + فيديو سينمائي + ألبوم", price: "من AED 35,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز مصوّر فرحك العربي في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا لمناقشة تفاصيل فرحك والحصول على عرض سعر مخصص.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
