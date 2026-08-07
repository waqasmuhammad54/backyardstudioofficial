import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير حفلات الزفاف العربية في دبي | باكيارد ستوديو",
  description:
    "تصوير الأعراس العربية في دبي من 6,000 درهم. خبرة في الأعراس اللبنانية والخليجية والمصرية. فريق يتحدث العربية، تصوير جوي معتمد من GCAA. استشارة مجانية.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-arabi-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/arabic-wedding-photography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-arabi-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير حفلات الزفاف العربية في دبي 2026",
    description:
      "خبرة واسعة في تصوير الأعراس العربية بدبي — لبنانية، خليجية، مصرية، سورية. فريق عربي يفهم تفاصيل كل ثقافة.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ArabicWeddingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير حفل الزفاف العربي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الأعراس العربية في دبي من AED 6,000. الحزم الشاملة التي تتضمن فيديو سينمائي وتصوير ما قبل الزفاف وألبوم طباعة تتراوح بين AED 14,000 وAED 35,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل فريق باكيارد ستوديو خبير بالأعراس اللبنانية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، صوّرنا مئات الأعراس اللبنانية في دبي. نفهم طبيعة الحفلات اللبنانية — الزفة، الموسيقى الشرقية، الفرح والرقص العفوي. فريقنا يتقن التوقيت الصحيح لالتقاط كل لحظة حيّة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تصوّرون الأعراس المختلطة بين جنسيات عربية مختلفة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالطبع. دبي مدينة متنوعة وكثيراً ما تجمع أعراسها تقاليد من بلدان عربية متعددة. فريقنا يتعامل مع كل هذا التنوع بحساسية واهتمام، ويضمن توثيق كل طقس وكل تقليد بالشكل الصحيح.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل مواقع تصوير الأعراس العربية في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "دبي تمتلئ بمواقع استثنائية للأعراس العربية — المدينة القديمة وسوق البستكية بأجوائها التراثية، شواطئ الجميرة، قصور الأفراح في الخوانيج، والفنادق الفاخرة مثل أتلانتيس وواحة الكمال.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير حفلات الزفاف العربية في دبي 2026 — دليلك الكامل",
    author: {
      "@type": "Person",
      name: "Fahad Iqbal Butt",
      jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال",
    },
    publisher: {
      "@type": "Organization",
      name: "باكيارد ستوديو أوفيشيال",
      url: "https://www.backyardstudioofficial.com",
    },
    datePublished: "2026-05-15",
    dateModified: "2026-06-01",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-arabi-dubai-2026",
    description: "دليل شامل لتصوير الأعراس العربية في دبي — لبنانية، خليجية، مصرية. الأسعار والتفاصيل من باكيارد ستوديو.",
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
          <span>تصوير الزفاف العربي في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الأعراس العربية
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير حفلات الزفاف العربية في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>لبنانية، خليجية، مصرية — فريق يفهم ثقافتك</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>10 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" alt="Arabic Wedding Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي تضم مئات الآلاف من العرب من جنسيات مختلفة — لبنانيون، مصريون، سوريون، أردنيون، خليجيون
          من الكويت والبحرين وقطر. وكل جالية من هؤلاء تحمل معها طقوس زفافها الخاصة وجمالها الفريد.
          تصوير هذا التنوع يتطلب فريقاً لا يكتفي بالتقنية وحدها — بل يحتاج إلى ثقافة وفهم وحضور حقيقي.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، صوّرنا بحمد الله أكثر من 800 عرس عربي بدبي على مدار السنوات الماضية.
          نعرف الفرق بين الزفة اللبنانية بموسيقاها الصاخبة ودبكتها العفوية، وبين مراسم العرس المصري
          بأفراحه الممتدة ولحظاته الإنسانية العميقة، وبين الوقار والأناقة في حفلات الخليجيين.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الأعراس اللبنانية في دبي — حيوية تستحق التوثيق
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الحفلات اللبنانية معروفة بطاقتها العالية وموسيقاها الشرقية الأصيلة والرقص العفوي الذي يمتد
          حتى الفجر. تحدي المصور هنا هو التحرك السريع والتقاط اللحظات الحيّة دون إيقافها للتأطير.
          نحن نؤمن بأسلوب التصوير الوثائقي في هذه الحفلات — الكاميرا تتبع، لا تقاطع.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          لقطاتنا المفضلة في الأعراس اللبنانية: الأم تبكي من الفرح وهي ترقص، العريس يُفاجئ العروس
          بأغنيتها المفضلة، الجد يجلس في الزاوية يراقب بابتسامة كأنه يرى عمره كله أمامه. هذه اللحظات
          لا تُشترى — تُحسّ.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الأعراس الخليجية غير الإماراتية — أناقة وتقاليد
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الأعراس الخليجية من الكويت والبحرين وقطر والسعودية تشترك في كثير من التقاليد الإماراتية لكنها
          تحمل نكهتها الخاصة. المرأة الخليجية في حفلها تُعبّر عن نفسها بحرية أكبر مما يظن كثيرون —
          الموضة والجمال والفرح الحقيقي كلها حاضرة. فريقنا يعرف كيف يصوّر هذا الجانب المضيء.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الأعراس المصرية والشامية في دبي
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          مصريو دبي والشاميون (لبنانيون وسوريون وأردنيون) يجلبون معهم حفلات تمتاز بالدفء الأسري
          الحميم والموسيقى الغنية والأطعمة التي تصنع حالة بذاتها. الزيارات العائلية قبل الحفل، توزيع
          الحلوى، اللقطات الجماعية مع العائلة الممتدة — كل هذا جزء من الصورة التي نوثّقها.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          الأعراس الشامية بالذات تتميز بالحضور الكثيف والعلاقات الأسرية المتشعبة — نجد دائماً أن
          الصور الجماعية تحتاج مهارة خاصة لترتيب المجموعات الكبيرة وإعطاء كل شخص مكانته في اللقطة.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الأعراس العربية في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "حزمة أساسية", detail: "مصور واحد / 6 ساعات / تسليم رقمي", price: "AED 6,000 – 9,000" },
              { pkg: "حزمة متوسطة", detail: "تصوير + فيديو / 10 ساعات / فيديو 5 دقائق", price: "AED 12,000 – 18,000" },
              { pkg: "حزمة شاملة", detail: "فريق كامل + درون + فيديو سينمائي + ألبوم", price: "AED 20,000 – 35,000" },
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
            { q: "كم تكلفة تصوير الزفاف العربي في دبي؟", a: "تبدأ من AED 6,000. الحزم الشاملة مع الفيديو السينمائي تتراوح بين AED 14,000 وAED 35,000." },
            { q: "هل تصوّرون الزفة اللبنانية؟", a: "نعم، نحبّ الزفة اللبنانية ونتخصص في توثيقها. نتحرك بحرية وسط الحضور لنلتقط أجواء الفرح الحقيقي." },
            { q: "هل الفريق يتحدث العربية؟", a: "نعم، فريقنا الأساسي عربي بالكامل ويتواصل بسهولة مع الأسرة والضيوف." },
            { q: "هل يمكن تصوير حفل الزفاف العربي في الهواء الطلق؟", a: "بالطبع. كريك هاربر والمناطق التراثية في دبي القديمة توفر خلفيات استثنائية للأعراس العربية في الهواء الطلق." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز استشارتك المجانية</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>فريقنا العربي جاهز للإجابة على كل أسئلتك.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
