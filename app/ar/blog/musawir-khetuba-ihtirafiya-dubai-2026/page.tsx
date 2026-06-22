import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مصور جلسات الخطوبة الاحترافي في دبي 2026 | باكيارد ستوديو",
  description:
    "مصور خطوبة احترافي في دبي. جلسات رومانسية في أجمل مواقع المدينة من AED 1,500. ضوء طبيعي، أسلوب تلقائي، تسليم خلال 48 ساعة.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/musawir-khetuba-ihtirafiya-dubai-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/musawir-khetuba-ihtirafiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/engagement-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "مصور الخطوبة الاحترافي في دبي 2026 | باكيارد ستوديو",
    description: "جلسة خطوبة تعكس شخصيتكما. مصور متخصص، مواقع دبي الأيقونية، أسعار تبدأ AED 1,500.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EngagementPhotographerArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة مصور الخطوبة الاحترافي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ جلسات الخطوبة الاحترافية في دبي من AED 1,500 لجلسة ساعتين في موقع واحد مع 30 صورة محررة. الجلسات الممتدة في أكثر من موقع تتراوح بين AED 2,500 وAED 4,000.",
        },
      },
      {
        "@type": "Question",
        name: "ما الذي يميز أسلوب تصوير الخطوبة لدى باكيارد ستوديو؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أسلوبنا وثائقي وتلقائي — لا نطلب منكم وضعيات مصطنعة. نقود محادثة خفيفة، نعطيكم أنشطة بسيطة تشجع على التفاعل الحقيقي، والكاميرا تلتقط ما يحدث بشكل طبيعي. النتيجة صور تشعرون فيها أنكم أنتم.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير الخطوبة في مواقع متعددة في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، جلساتنا الممتدة تشمل موقعين أو ثلاثة — مثلاً البستكية للروح التراثية، ثم دبي كريك هاربر للغروب. نتيجة ذلك تنويع بصري رائع يخدم الاستخدامات المختلفة: إنستغرام، الإعلان عن الخطوبة، بطاقات الدعوة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تضمنون أن نحصل على صور جميلة حتى لو كنا خجولين أمام الكاميرا؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "هذا ما نتخصص فيه. أكثر عملائنا يقولون لنا في البداية أنهم لا يجيدون التصوير — وفي نهاية الجلسة لا يريدون إيقاف الكاميرا. نخلق بيئة مريحة وممتعة تذوب فيها الكاميرا في الخلفية.",
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
          <span>مصور الخطوبة الاحترافي دبي</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          تصوير الخطوبة
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          مصور الخطوبة الاحترافي في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>صور تعكس قصة حبكما بأسلوب حقيقي</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>22 يونيو 2026</span>
          <span>7 دقائق للقراءة</span>
        </div>

        <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&q=80" alt="مصور الخطوبة الاحترافي في دبي 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          جلسة الخطوبة هي أكثر من مجرد صور — إنها الفرصة الأولى لتوثيق بدايتكما الرسمية
          كزوجين. في دبي، مدينة الخلفيات البصرية الاستثنائية، جلسة الخطوبة الصحيحة تصنع
          محتوى يرافقكما من إعلان الخطوبة حتى ألبوم الزفاف.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          أعمل مع الأزواج منذ أكثر من عشر سنوات. والشيء المشترك بين كل جلسة ناجحة ليس
          الموقع ولا الملابس — بل مدى تأسيس جو من الراحة والمرح يُنسي الزوجين وجود الكاميرا.
          هذا ما أبنيه في كل جلسة.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          مواقع جلسات الخطوبة في دبي التي أوصي بها
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          دبي كريك هاربر هو أحد المواقع التي تعطي فيها كل لقطة روعة بصرية تلقائية. الواجهة
          الزجاجية المنعكسة في الماء، جسر المشاة، البواخر التراثية في الخلفية — كل زاوية صورة.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          الداون تاون مع برج خليفة في الخلفية هو الاختيار للأزواج الذين يريدون الصورة الأيقونية
          التي لا لبس فيها: هذا دبي. ساعة الغروب مباشرة هي اللحظة السحرية لهذا الموقع.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          للأزواج الذين يفضلون الأجواء الأكثر هدوءاً وخصوصية، الشواطئ الجنوبية أو المناطق
          الخضراء في مردف تعطي لحظات أكثر حميمية وأقل ازدحاماً.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار مصور الخطوبة في دبي 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "جلسة كلاسيكية", detail: "ساعتان / موقع واحد / 30 صورة", price: "AED 1,500" },
            { pkg: "جلسة موسّعة", detail: "3 ساعات / موقعان / 50 صورة + ريل", price: "AED 2,500" },
            { pkg: "جلسة غروب مميزة", detail: "4 ساعات / 3 مواقع / 80 صورة + فيديو", price: "AED 4,000" },
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
            { q: "كم تكلفة مصور الخطوبة الاحترافي في دبي؟", a: "من AED 1,500 لجلسة ساعتين. الجلسات الممتدة في أكثر من موقع من AED 2,500." },
            { q: "ما أسلوبكم في تصوير الخطوبة؟", a: "وثائقي وتلقائي — لا وضعيات مصطنعة. نخلق جواً مريحاً ونلتقط ما يحدث بشكل طبيعي." },
            { q: "هل يمكن تصوير الخطوبة في مواقع متعددة؟", a: "نعم، الجلسات الممتدة تشمل موقعين أو ثلاثة لتنويع بصري يخدم احتياجاتكم المختلفة." },
            { q: "ماذا لو كنا خجولين أمام الكاميرا؟", a: "أكثر عملائنا يقولون هذا في البداية. نخلق بيئة مريحة تذوب فيها الكاميرا في الخلفية." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>احجز جلسة الخطوبة</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>استشارة مجانية — نختار الموقع والتوقيت الذي يعكس شخصيتكما.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700, fontFamily: "Cairo, sans-serif" }}>تواصل عبر واتساب</a>
            <a href="/ar/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600, fontFamily: "Cairo, sans-serif" }}>عرض الأسعار</a>
          </div>
        </div>
      </article>
    </>
  );
}
