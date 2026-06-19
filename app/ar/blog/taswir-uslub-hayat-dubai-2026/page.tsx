import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير أسلوب الحياة في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير لايف ستايل احترافي في دبي — للأفراد، العلامات التجارية، المؤثرين. جلسات في أجمل مواقع دبي تعكس أسلوب حياتك الحقيقي. من 1,200 درهم.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-uslub-hayat-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-uslub-hayat-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/lifestyle-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير أسلوب الحياة في دبي 2026",
    description: "جلسات تصوير لايف ستايل في أجمل مواقع دبي — للأفراد والعلامات التجارية والمؤثرين.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LifestylePhotoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هو تصوير الليف ستايل (أسلوب الحياة) في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تصوير الليف ستايل يوثّق الحياة اليومية بأسلوب طبيعي وأصيل — قهوة الصباح، التمارين، التسوق، الأصدقاء، السفر. يختلف عن التصوير الرسمي بكونه يحكي قصة حياتك لا مجرد وقفة أمام الكاميرا.",
        },
      },
      {
        "@type": "Question",
        name: "كم تكلفة جلسة الليف ستايل في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات الليف ستايل في دبي من AED 1,200 لجلسة ساعتين في موقع واحد مع 25 صورة معدّلة. الجلسة الكاملة ليوم في مواقع متعددة تبدأ من AED 3,500.",
        },
      },
      {
        "@type": "Question",
        name: "أين تُجرى جلسات الليف ستايل في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أشهر مواقعنا: الصحراء عند الغروب، مارينا دبي، جميرا بيتش، مدينة جميرا الأريبيان، داون تاون، القرية العالمية موسمياً. نساعدك في اختيار الموقع الذي يناسب أسلوبك وهدفك من الجلسة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تناسب هذه الجلسات المؤثرين على السوشيال ميديا؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم — نصوّر بمحتوى مُهيَّأ لكل منصة: ريلز عمودية لإنستغرام وتيك توك، صور مربعة وأفقية، ستوريز مؤقتة. نعمل مع كثير من المؤثرين العرب المقيمين في دبي.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير أسلوب الحياة في دبي 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-uslub-hayat-dubai-2026",
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
          <span>تصوير أسلوب الحياة في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير لايف ستايل
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير أسلوب الحياة في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>جلسات تعكس حياتك الحقيقية في أجمل مدينة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>19 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🌅</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي مدينة تصنع لحظات استثنائية كل يوم — الغروب على الخور، القهوة في كافيه مارينا، الجري
          على الكورنيش. تصوير الليف ستايل يحوّل هذه اللحظات العادية إلى محتوى بصري يحكي قصتك
          ويبني حضورك الرقمي.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          سواء كنت مؤثراً يبني محتواه، رائد أعمال يريد صوراً تعكس شخصيته، أو شخصاً يريد ذكريات
          جميلة من مرحلة حياته في دبي — فريقنا يعمل معك لإنتاج صور تبدو طبيعية وتُنفَّذ باحترافية.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أفضل مواقع تصوير الليف ستايل في دبي
        </h2>

        {[
          { title: "الصحراء عند الغروب", desc: "الضوء الذهبي على الكثبان — لحظة سينمائية تجعل كل صورة فنية بامتياز." },
          { title: "مارينا دبي والواجهة البحرية", desc: "المياه الزرقاء وأفق الأبراج — خلفية عصرية مثالية للمحتوى الحضري الراقي." },
          { title: "جميرا بيتش", desc: "الشاطئ، السماء، النخيل — مريح وطبيعي ومناسب لكل أنواع جلسات اللايف ستايل." },
          { title: "داون تاون وبرج خليفة", desc: "للمحتوى الحضري المتطور — أسلوب حياة المدينة بأيقوناتها المعمارية في الخلفية." },
          { title: "المقاهي والمطاعم الراقية", desc: "نعمل مع أرقى كافيهات دبي لجلسات تعكس أسلوب حياة مريح وأنيق." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير الليف ستايل في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة سريعة", detail: "ساعتان / موقع واحد / 25 صورة", price: "من AED 1,200" },
            { pkg: "جلسة متوسطة", detail: "4 ساعات / موقعان / 50 صورة + ريلز", price: "من AED 2,200" },
            { pkg: "جلسة يوم كامل", detail: "8 ساعات / 3 مواقع / 100 صورة + 3 ريلز", price: "من AED 3,800" },
            { pkg: "باقة المحتوى الشهري", detail: "جلستان شهرياً + محتوى مستمر", price: "من AED 6,000 / شهر" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز جلسة الليف ستايل في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا واختر موقعك وموعدك — نردّ في ساعتين.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
