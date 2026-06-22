import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير أطفال في دبي 2026 | باكيارد ستوديو",
  description:
    "مصوّر أطفال محترف في دبي. جلسات استوديو وخارجية للرضع والأطفال الصغار والمدرسيين. أسلوب طبيعي وحيوي. من AED 800.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/kids-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير أطفال في دبي 2026",
    description: "جلسة تصوير أطفال في دبي — استوديو، شاطئ، حديقة. مصوّر خبير في التعامل مع الأطفال من كل الأعمار.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function KidsPhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الأطفال في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسة تصوير الأطفال في الاستوديو من AED 800 (ساعة ونصف، 20–25 صورة معدّلة). الجلسة الخارجية في الحديقة أو الشاطئ من AED 1,200. جلسة الأسرة مع الأطفال من AED 1,500.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل عمر لتصوير الأطفال؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "كل مرحلة عمرية لها جمالها الخاص. الرضّع (الأسبوعان الأولان) — أوضاع النوم والتفاصيل الدقيقة. 3–6 أشهر — أول الابتسامات. 9–12 شهراً — الجلوس والزحف. السنة الأولى — قيام وخطوات. ننصح بالتصوير سنوياً لأن الأطفال يتغيّرون بسرعة مذهلة.",
        },
      },
      {
        "@type": "Question",
        name: "هل يعرف مصوّركم كيف يتعامل مع الأطفال الصعبين؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد — التعامل مع الأطفال مهارة مستقلة يتقنها مصوّرونا. نحوّل الجلسة إلى لعبة، نمشي بإيقاع الطفل، ونصبر حتى تأتي اللحظة الحقيقية. الصور الأجمل دائماً تلك التي يبتسم فيها الطفل من تلقاء نفسه.",
        },
      },
      {
        "@type": "Question",
        name: "متى أفضل وقت للتصوير الخارجي في دبي مع الأطفال؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الصباح الباكر (7:00–9:00) أو بعد العصر (17:00–19:00) من أكتوبر حتى أبريل. في الصيف، يُفضَّل الاستوديو المكيّف للراحة التامة.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير أطفال في دبي 2026 — لحظات حقيقية، ذكريات دائمة",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "المدير الإبداعي — باكيارد ستوديو أوفيشيال" },
    publisher: { "@type": "Organization", name: "باكيارد ستوديو أوفيشيال", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-18",
    dateModified: "2026-06-18",
    inLanguage: "ar",
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير أطفال في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الأطفال
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.4, marginBottom: "1rem" }}>
          تصوير أطفال في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>لحظات حقيقية — ذكريات لا تُنسى</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>فهد إقبال بت</span>
          <span>18 يونيو 2026</span>
          <span>5 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1471286174890-9c112ac6476d?w=1200&q=80" alt="Kids Photographer Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          يكبر الأطفال بسرعة لا تُصدَّق. الطفل الرضيع الذي لا يستطيع الجلوس اليوم سيسير ويتكلم
          قريباً. جلسة تصوير الأطفال المحترفة ليست مجرد صور جميلة — هي ذكريات ستعود إليها بعد
          عشرين عاماً وتشعر أنها كانت بالأمس.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نلتقط لحظات حقيقية وطبيعية — لا وضعيات مصطنعة أو ابتسامات مفروضة.
          مصوّرونا متخصصون في التعامل مع الأطفال من كل الأعمار، وهم يعرفون كيف يخلقون جواً
          من المرح والراحة يجعل الطفل ينسى الكاميرا ويكون نفسه.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          خيارات التصوير في دبي
        </h2>

        {[
          { title: "الاستوديو", desc: "خلفيات نظيفة وإضاءة محترفة — مثالي للرضّع والأطفال الصغار. خلفيات بيضاء ومحايدة وداكنة حسب المزاج المطلوب." },
          { title: "الشاطئ (JBR / جميرا)", desc: "الهواء المفتوح والبحر والرمال يعطيان صوراً نضرة ومليئة بالحيوية. أفضل التصوير في الصباح الباكر." },
          { title: "الحدائق والمتنزهات", desc: "الخضرة والأجواء المفتوحة مثالية لأطفال ما قبل المدرسة وطلاب المدارس. طبيعية وعفوية." },
          { title: "منزلكم", desc: "للعائلات التي تفضّل الراحة — نأتي إليكم ونصوّر في بيئة الطفل الطبيعية لصور أكثر دفئاً وأصالة." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ borderRight: "2px solid var(--gold)", paddingRight: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{desc}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          باقات تصوير الأطفال في دبي
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة استوديو مصغّرة", detail: "45 دقيقة / 15–20 صورة", price: "من AED 800" },
            { pkg: "جلسة استوديو كاملة", detail: "90 دقيقة / 25–35 صورة", price: "من AED 1,200" },
            { pkg: "جلسة خارجية", detail: "90 دقيقة / 30–40 صورة", price: "من AED 1,400" },
            { pkg: "جلسة عائلية مع أطفال", detail: "ساعتان / 40–50 صورة", price: "من AED 1,800" },
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
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>احجز جلسة تصوير أطفالك في دبي</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>تواصل معنا — نختار الوقت والمكان المناسبَين لطفلك.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            واتساب +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
