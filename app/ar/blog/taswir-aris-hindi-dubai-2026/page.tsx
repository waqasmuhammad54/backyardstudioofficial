import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير أعراس هندية في دبي 2026 | باكيارد ستوديو",
  description:
    "مصور متخصص في الأعراس الهندية بدبي. تصوير المهندي، السانغيت، البارات والاحتفالات متعددة الأيام. خبرة 300+ زفاف هندي. من 5,000 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-aris-hindi-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-aris-hindi-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/indian-wedding-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير أعراس هندية في دبي 2026",
    description: "مصور محترف للأعراس الهندية في دبي — مهندي، سانغيت، بارات، ريسبشن. فريق ذو خبرة واسعة بالتقاليد الهندية.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function IndianWeddingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير زفاف هندي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يبدأ تصوير الزفاف الهندي من AED 5,000 ليوم واحد مع مصور واحد لمدة 8–10 ساعات. الحزمة الشاملة لثلاثة أيام (مهندي + سانغيت + حفل الزفاف + ريسبشن) مع مصورَين ومصوّر فيديو تبدأ من AED 18,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون جميع مراحل الزفاف الهندي المتعدد الأيام؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نصوّر كامل الاحتفالات: ليلة المهندي، حفل الهالدي، السانغيت، البارات (موكب العريس)، حفل النيكاح أو الزفاف، وحفل الاستقبال. لكل مناسبة أسلوبها الخاص ونحن نعرف كيف نوثّقها بشكل مثالي.",
        },
      },
      {
        "@type": "Question",
        name: "هل تستخدمون الطائرة المسيّرة في تصوير البارات؟",
        acceptedAnswer: {
          "@type": "Answer",
 text: "نعم — التصوير الجوي يُنفَّذللتصوير الجوي التجاري في الإمارات. تصوير البارات من الجو يضيف بُعداً سينمائياً رائعاً لموكب العريس، ونحن من أكثر الفرق خبرةً في هذا الأسلوب بدبي.",
        },
      },
      {
        "@type": "Question",
        name: "كم مبكراً يجب الحجز لتصوير الزفاف الهندي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ننصح بالحجز قبل 8–12 شهراً على الأقل، خاصةً في موسم الأعراس (أكتوبر–مارس). الطلب على أفضل المصورين في دبي كبير جداً والمواعيد تُحجز مبكراً.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير أعراس هندية في دبي 2026 — دليلك الكامل",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-aris-hindi-dubai-2026",
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
          <span>تصوير أعراس هندية في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الأعراس
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير أعراس هندية في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>مهندي، بارات، ريسبشن — توثيق كامل</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1200&q=80" alt="Indian Wedding Photographer Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          يُعدّ الزفاف الهندي في دبي من أكثر الاحتفالات بهجةً وتعقيداً في العالم. ليس حفلاً واحداً،
          بل سلسلة من المراسم الممتدة على 2–4 أيام، كل منها يحمل طابعه الثقافي الخاص وتفاصيله البصرية
          التي يجب توثيقها بعناية ومعرفة.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          صوّر فريق باكيارد ستوديو أوفيشيال أكثر من 300 زفاف هندي في الإمارات — من احتفالات النيكاح
          الصغيرة في عجمان، إلى أفراح ضخمة من ثلاثة أيام في أرقى فنادق دبي. هذا الدليل يشرح كيف
          تختار المصوّر المناسب وما الذي يجب مناقشته قبل الحجز.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          مراسم الزفاف الهندي التي نصوّرها
        </h2>

        {[
          { title: "ليلة المهندي", desc: "احتفال حميم بنقش الحناء، الموسيقى والرقص العائلي. نصوّر يدي العروس عن قرب وتفاصيل الزينة وردود فعل الأهل." },
          { title: "حفل الهالدي", desc: "طقس العجينة الصفراء — لحظات تلقائية وضحكات حقيقية. هذه الجلسات من أكثر ما يحبه العملاء في التصوير." },
          { title: "السانغيت", desc: "سهرة الموسيقى والرقص قبل يوم الزفاف. ألوان زاهية، حركة وطاقة عالية تتطلب مصوراً يلتقط الحركة بدقة." },
          { title: "البارات (موكب العريس)", desc: "الأكثر ديناميكية في الزفاف الهندي. نستخدم المثبّت الجيمبال والطائرة المسيّرة لنقل الحيوية الكاملة للموكب." },
          { title: "حفل الزفاف والريسبشن", desc: "كاميرتان على الأقل، زاويتا تصوير مختلفتان، لا لحظة تفوتنا — من تبادل الأكاليل إلى الرقصة الأولى." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير الأعراس الهندية في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "يوم واحد (مهندي / سانغيت)", detail: "مصوّر واحد / 6 ساعات", price: "من AED 5,000" },
            { pkg: "يوم الزفاف (بارات + حفل)", detail: "مصوّران / 10 ساعات", price: "من AED 9,000" },
            { pkg: "الباقة الشاملة (3 أيام)", detail: "تصوير + فيديو / مصوّران + فيديوغراف", price: "من AED 18,000" },
            { pkg: "الباقة الفاخرة (3–4 أيام)", detail: "طائرة مسيّرة + فيديو سينمائي + ألبوم", price: "من AED 30,000" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز مصوّر زفافك الهندي في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>المواعيد في موسم الأعراس تُحجز قبل عام. تواصل معنا الآن.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
