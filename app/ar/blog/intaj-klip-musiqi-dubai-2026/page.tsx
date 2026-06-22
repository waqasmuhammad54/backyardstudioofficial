import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إنتاج كليب موسيقي في دبي | باكيارد ستوديو الإمارات",
  description:
    "إنتاج كليب موسيقي في دبي من 8,000 درهم. فيديو سينمائي لفنانين الإمارات ودول الخليج. معالجة المخرج، التصاريح، التدرج اللوني والتسليم. استشارة مجانية.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/intaj-klip-musiqi-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/music-video-production-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/intaj-klip-musiqi-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "إنتاج كليب موسيقي في دبي 2026 | باكيارد ستوديو",
    description: "إنتاج كليبات موسيقية احترافية في دبي للفنانين العرب — سينمائي، تصاريح، مناطق إنتاج متنوعة. من AED 8,000.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function MusicVideoArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة إنتاج كليب موسيقي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ تكلفة إنتاج كليب موسيقي في دبي من AED 8,000 للكليبات الأساسية ذات الموقع الواحد. الكليبات السينمائية المتكاملة مع معالجة إخراجية وتدرج لوني احترافي تتراوح بين AED 18,000 وAED 55,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل تساعدون الفنانين في التصاريح وإيجاد المواقع في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، نتولى جميع التصاريح اللازمة في دبي — من تصاريح التصوير في الأماكن العامة إلى تصاريح إغلاق المواقع. نوفر قاعدة بيانات مواقع تصوير متنوعة تشمل الصحراء والمدينة والشواطئ والمباني الحديثة.",
        },
      },
      {
        "@type": "Question",
        name: "كم يوماً تستغرق كتابة المعالجة الإخراجية والتصوير؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "المعالجة الإخراجية (Treatment) تستغرق 3-5 أيام عمل بعد الاجتماع الأول. يوم التصوير يحتاج تحضيراً لمدة أسبوع. التحرير والتدرج اللوني يستغرقان 2-3 أسابيع. إجمالي العملية 4-6 أسابيع.",
        },
      },
      {
        "@type": "Question",
        name: "هل تنتجون كليبات للفنانين العرب والخليجيين؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، لدينا خبرة واسعة في إنتاج كليبات للفنانين العرب والخليجيين. نفهم الذوق الفني العربي، الإيقاع البصري الملائم للأغاني الشرقية والخليجية والكلاسيكية الحديثة.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "إنتاج كليب موسيقي في دبي 2026 — الدليل الكامل للفنانين",
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
    url: "https://www.backyardstudioofficial.com/ar/blog/intaj-klip-musiqi-dubai-2026",
    description: "دليل شامل لإنتاج كليبات موسيقية احترافية في دبي — الأسعار، المراحل، المواقع والتصاريح من باكيارد ستوديو.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>إنتاج كليب موسيقي في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          إنتاج الكليبات الموسيقية
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          إنتاج كليب موسيقي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>رؤية إخراجية واضحة، تنفيذ سينمائي لا تنازل فيه</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>10 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80" alt="Music Video Production Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          دبي باتت منصة إطلاق حقيقية للفنانين العرب والدوليين. الفنان الذي يُصوّر كليباً في دبي لا يحصل
          على خلفية جميلة فحسب — بل يحصل على رسالة تتحدث عن طموح لا حدود له. ناطحات السحاب والصحراء
          والمياه الفيروزية والمعمار المستقبلي — دبي تُضيف بُعداً بصرياً لا تملكه مدن أخرى.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، أنتجنا كليبات لفنانين من الإمارات والكويت ولبنان ومصر وباكستان والهند.
          كل فنان يأتينا برؤيته وأسلوبه الموسيقي، وعملنا هو ترجمة هذه الرؤية السمعية إلى مشاهد بصرية
          تُضاعف تأثير الأغنية وتبقى في الذاكرة.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          كيف نعمل مع الفنانين — من الفكرة إلى التسليم
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { step: "١. اجتماع الاستكشاف", detail: "نستمع للأغنية، نناقش مزاج الكليب والرؤية الفنية. لا نبدأ بالكتابة قبل أن نُصغي." },
            { step: "٢. المعالجة الإخراجية (Treatment)", detail: "وثيقة مفصّلة تشرح السرد البصري، المشاهد، الأزياء، والأماكن المقترحة." },
            { step: "٣. التحضير والتصاريح", detail: "نُحضّر المواقع ونستخرج التصاريح ونؤكد الاستعدادات اللوجستية." },
            { step: "٤. يوم/أيام التصوير", detail: "تنفيذ الكليب بأفضل المعدات وفريق تقني متكامل." },
            { step: "٥. التحرير والتدرج اللوني", detail: "تحرير إبداعي وتدرج ألوان يُعطي الكليب هويته البصرية النهائية." },
            { step: "٦. التسليم والتوزيع", detail: "نُسلّم بصيغ جاهزة ليوتيوب وإنستغرام والمنصات الموسيقية مع بيانات التعريف." },
          ].map(({ step, detail }) => (
            <div key={step} style={{ display: "flex", gap: "1.5rem", padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderRight: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{step}</div>
                <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          مواقع تصوير الكليبات في دبي — ما يجعلها فريدة
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          دبي تمتلك تنوعاً مذهلاً من البيئات ضمن مسافة قصيرة. الصحراء على بعد 30 دقيقة من برج خليفة.
          سوق البستكية التاريخي على بعد دقائق من أحياء المستقبل. هذا التنوع يمنحنا حرية في تصميم
          الكليب دون الحاجة للسفر الطويل.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          من المواقع التي صوّرنا فيها: كثبان رمال الصحراء عند الغروب، سطح مباني وسط المدينة مقابل
          برج خليفة، شوارع ديرة الأصيلة، مارينا دبي ليلاً، واجهة الواتر فرونت، بحيرات تصوير خاصة
          في الإمارة، واستوديوهات مجهزة بالكامل للمشاهد الداخلية.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          التدرج اللوني — الروح الخفية للكليب
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          كثيرون يتحدثون عن التصوير وينسون التدرج اللوني (Color Grading) الذي يُضاعف أثر الكليب.
          المدرج اللوني في باكيارد ستوديو يعمل مع كل مدير إبداعي على مزاج بصري فريد لكل كليب —
          ليس مجرد تطبيق فلتر، بل معالجة تجعل الصورة تتحدث مع الموسيقى لا بجانبها.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار إنتاج الكليبات الموسيقية في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "كليب أساسي", detail: "موقع واحد / يوم تصوير / تحرير + تدرج لوني", price: "AED 8,000 – 14,000" },
              { pkg: "كليب متوسط", detail: "2-3 مواقع / يومان تصوير / معالجة إخراجية كاملة", price: "AED 16,000 – 28,000" },
              { pkg: "كليب سينمائي", detail: "مواقع متعددة + ممثلون + درون + تدرج لوني بريميوم", price: "AED 28,000 – 55,000" },
              { pkg: "بيتزا سوشيال", detail: "مقاطع ريلز وتيك توك مشتقة من الكليب الرئيسي", price: "AED 3,500 إضافية" },
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
            { q: "كم تكلفة إنتاج كليب موسيقي في دبي؟", a: "تبدأ من AED 8,000 للكليبات الأساسية. الكليبات السينمائية الكاملة تتراوح بين AED 28,000 وAED 55,000." },
            { q: "هل تنتجون كليبات للفنانين العرب والخليجيين؟", a: "نعم، أنتجنا لفنانين من الإمارات والكويت ولبنان ومصر وغيرها. نفهم الذوق الفني العربي والخليجي." },
            { q: "كم يستغرق إنتاج الكليب من الفكرة للتسليم؟", a: "4-6 أسابيع في العادة. نوفر جدولاً تفصيلياً لكل مرحلة بعد الاجتماع الأول." },
            { q: "هل تساعدون في التصاريح واختيار المواقع؟", a: "نعم، نتولى جميع التصاريح اللازمة ونوفر قائمة بمواقع التصوير الأنسب لأسلوب الكليب." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>ابدأ رحلة كليبك الآن</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>أرسل الأغنية ورؤيتك عبر واتساب وسنرد بمعالجة إخراجية أولية خلال 48 ساعة.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
