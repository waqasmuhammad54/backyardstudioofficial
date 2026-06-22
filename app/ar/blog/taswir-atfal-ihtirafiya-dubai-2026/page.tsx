import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الأطفال الاحترافي في دبي 2026 | باكيارد ستوديو",
  description:
    "تصوير الأطفال في دبي — استديو وخارجي. مصور متخصص يتعامل مع الأطفال بطريقة ممتعة وطبيعية. من AED 800، تسليم 48 ساعة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-ihtirafiya-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-atfal-ihtirafiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/kids-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الأطفال الاحترافي في دبي 2026 | باكيارد ستوديو",
    description: "لحظات طفلك الحقيقية بعدسة مصور متخصص في دبي. مرح، طبيعي، لا تكليف.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function KidsPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الأطفال في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات تصوير الأطفال في دبي من AED 800 للجلسة الاستديو الأساسية (ساعة، 20 صورة). الجلسات الخارجية في الحدائق والشاطئ تبدأ من AED 1,200.",
        },
      },
      {
        "@type": "Question",
        name: "كيف تتعاملون مع الأطفال الخجولين أو غير المتعاونين؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الصبر وسر العمل مع الأطفال. نبدأ بأنشطة وألعاب لكسر الحاجز، ونسمح للطفل بالتجول والاستكشاف بدلاً من إجباره على الوقوف. أفضل صور الأطفال تأتي حين يكونون منشغلين باللعب لا حين يحاولون الابتسام للكاميرا.",
        },
      },
      {
        "@type": "Question",
        name: "ما أفضل وقت لتصوير الأطفال في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الصباح الباكر بعد وجبة الفطور هو الوقت المثالي للأطفال — مزاجهم يكون أفضل ومستوى الطاقة مناسب. للتصوير الخارجي في دبي: من أكتوبر إلى مارس في الصباح (7:30-9:30 صباحاً).",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير الأطفال مع الأسرة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "بالتأكيد. الصور العائلية المشتركة هي من أكثر الصور قيمة مع مرور الوقت. نبدأ عادة بصور الأطفال وحدهم ثم نضيف الوالدين والأشقاء لصور عائلية طبيعية وجميلة.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article dir="rtl" lang="ar" style={{ fontFamily: "Cairo, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>{" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>{" / "}
          <span>تصوير الأطفال في دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير أطفال
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          تصوير الأطفال الاحترافي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>لحظاتهم الحقيقية، ذكريات للأبد</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>6 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80" alt="تصوير الأطفال الاحترافي في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          الأطفال يكبرون. هذه الحقيقة التي تضربك بقوة حين تنظر إلى صورة طفلك من قبل سنتين
          وتتساءل كيف مر الوقت بهذه السرعة. تصوير الأطفال ليس ترفاً — إنه توثيق حقيقي للمراحل
          التي لن تعود.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو، نلتقط الأطفال كما هم — صاخبين، فضوليين، خجولين أحياناً، ومليئين
          بالحيوية. لا نطلب منهم الجلوس بهدوء أو الابتسام للكاميرا. نتبعهم ونصوّر عالمهم.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          أفضل مواقع تصوير الأطفال في دبي
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          الاستديو مثالي للأطفال دون السنتين والرضع — بيئة محكومة، إضاءة ناعمة، ودرجة حرارة
          مناسبة. للأطفال من عمر 2 سنوات وما فوق، الخروج للطبيعة يعطي صوراً أكثر حيوية.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          حديقة الخور في دبي، شواطئ جميرا، وحدائق العائلة في السطوة والقرهود — كلها مواقع
          رائعة للتصوير الخارجي. الوقت المثالي هو الصباح الباكر في أشهر الشتاء.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          للتصوير في الصيف، نلجأ للمواقع الداخلية — الاستديو، المراكز التجارية، وبعض
          المتاحف الفنية التي تعطي خلفيات إبداعية ومثيرة للأطفال.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الأطفال في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة استديو أساسية", detail: "60 دقيقة / 20 صورة محررة", price: "AED 800" },
            { pkg: "جلسة استديو موسّعة", detail: "90 دقيقة / 30 صورة + صور عائلية", price: "AED 1,200" },
            { pkg: "جلسة خارجية", detail: "90 دقيقة / 25 صورة / موقع طبيعي", price: "AED 1,200" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
              <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>أسئلة شائعة</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "كم تكلفة تصوير الأطفال في دبي؟", a: "من AED 800 للجلسة الاستديو الأساسية. الخارجية من AED 1,200." },
            { q: "كيف تتعاملون مع الأطفال الخجولين؟", a: "الصبر وسر النجاح. نبدأ بأنشطة وألعاب ونتبع إيقاع الطفل لا العكس." },
            { q: "ما أفضل وقت لتصوير الأطفال في دبي؟", a: "الصباح بعد الفطور. خارجياً من أكتوبر إلى مارس بين 7:30 و9:30 صباحاً." },
            { q: "هل يمكن تصوير الأطفال مع الأسرة؟", a: "نعم، نبدأ بصور الأطفال ثم نضيف الوالدين والأشقاء لصور عائلية طبيعية." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة تصوير الأطفال</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نختار الموقع والوقت الأنسب لعمر طفلك.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
