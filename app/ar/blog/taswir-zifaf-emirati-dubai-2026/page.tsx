import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير حفلات الزفاف الإماراتية في دبي | باكيارد ستوديو",
  description:
    "تصوير حفلات الزفاف الإماراتية من 8,000 درهم. فريق يتحدث العربية، رخصة طيران مسيّر من هيئة الطيران المدني، خبرة في الأعراس الخليجية والإماراتية. استشارة مجانية.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-emirati-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/emirati-wedding-photography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-emirati-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير حفلات الزفاف الإماراتية في دبي 2026",
    description:
      "خبرة متخصصة في تصوير الأعراس الإماراتية — العادات الخليجية، الحناء، الليلة والصبحة. فريق عربي متمرس من باكيارد ستوديو.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EmiratiWeddingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير حفل الزفاف الإماراتي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الأعراس الإماراتية في دبي من AED 8,000 للحزم الأساسية التي تشمل تغطية الليلة والصبحة. الحزم الشاملة مع الفيديو السينمائي وتصوير جلسة الحناء وطيران مسيّر تتراوح بين AED 18,000 وAED 45,000.",
        },
      },
      {
        "@type": "Question",
        name: "هل فريق باكيارد ستوديو ملم بتقاليد الأعراس الإماراتية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم. فريقنا العربي يعمل في الإمارات منذ سنوات ويفهم كل تفاصيل العرس الإماراتي — من جلسة الحناء وليلة الحنة، إلى الصبحة وطقوس القهوة العربية. نحرص دائماً على احترام الخصوصية وفصل مناطق التصوير.",
        },
      },
      {
        "@type": "Question",
        name: "هل يمكن تصوير حفل الزفاف الإماراتي بالطائرات المسيّرة؟",
        acceptedAnswer: {
          "@type": "Answer",
 text: "نعم، التصوير الجوي يُنفَّذمن هيئة الطيران المدني الإماراتية لتشغيل الطائرات المسيّرة. اللقطات الجوية لقاعات الأفراح والفلل تُضيف بُعداً استثنائياً، مع مراعاة الأعراف والخصوصية الكاملة.",
        },
      },
      {
        "@type": "Question",
        name: "كم من الوقت تستغرق معالجة صور وفيديو الزفاف الإماراتي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نسلّم الصور المعدّلة خلال 21 يوماً والفيديو السينمائي خلال 45 يوماً. نوفر أيضاً خدمة التسليم السريع خلال أسبوع عند الحاجة.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "تصوير حفلات الزفاف الإماراتية في دبي 2026 — دليلك الكامل",
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
    url: "https://www.backyardstudioofficial.com/ar/blog/taswir-zifaf-emirati-dubai-2026",
    description:
      "دليل شامل لتصوير الأعراس الإماراتية في دبي — التقاليد الخليجية، الأسعار، وكيف يتعامل فريق باكيارد ستوديو مع كل تفاصيل يومك المميز.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article
        dir="rtl"
        lang="ar"
        style={{
          fontFamily: "Cairo, sans-serif",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 2rem",
          color: "var(--cream)",
          lineHeight: "1.9",
        }}
      >
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>
          {" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>
          {" / "}
          <span>تصوير الزفاف الإماراتي في دبي</span>
        </nav>

        <span
          style={{
            display: "inline-block",
            background: "rgba(212,175,55,0.15)",
            color: "var(--gold)",
            padding: "0.3rem 0.9rem",
            borderRadius: "2px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}
        >
          تصوير الأعراس الإماراتية
        </span>

        <h1
          style={{
            fontFamily: "Cairo, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.3,
            marginBottom: "1rem",
          }}
        >
          تصوير حفلات الزفاف الإماراتية في دبي 2026
          <br />
          <span style={{ color: "var(--gold)" }}>خبرة خليجية أصيلة، فريق عربي متخصص</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>بقلم: فهد إقبال بت</span>
          <span>15 مايو 2026</span>
          <span>9 دقائق للقراءة</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" alt="Taswir Zifaf Emirati Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          العرس الإماراتي ليس مجرد احتفال — هو تعبير عن هوية راسخة وتقاليد ممتدة عبر أجيال. من ليلة الحناء
          إلى الصبحة، من القهوة العربية المُقدَّمة في أباريق الذهب إلى رقصات الشبابة والطبل، كل لحظة تحمل
          معنى عميقاً يستحق أن يُحفظ بعين تفهم ثقافتها وتحترم خصوصيتها.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          في باكيارد ستوديو أوفيشيال، نفخر بفريق عربي يعمل في دبي وسائر إمارات الدولة منذ سنوات طويلة.
          فهمنا للعرس الخليجي الإماراتي لا يأتي من الكتب — بل من حضور أكثر من 600 حفل زفاف إماراتي
          ومن العلاقات الإنسانية التي بنّيناها مع العائلات على مدار هذه السنوات.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          ما الذي يميز تصوير العرس الإماراتي عن غيره؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          العرس الإماراتي يمتد على مراحل متعددة، كل منها له طابعها الخاص وتحدياتها البصرية. ليلة الحناء
          تُقام عادةً في إضاءة دافئة بالشموع والفوانيس — وهذا يتطلب عدسات سريعة وخبرة في التصوير في
          الإضاءة المنخفضة دون فلاش مزعج. الصبحة في الصباح الباكر تحتاج مصوراً يعرف كيف يستغل الضوء
          الطبيعي ويوثّق تقديم القهوة والتمر وطقوس الاستقبال.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          فهد إقبال بت، المدير الإبداعي لدينا، يقول: "أحب الأعراس الإماراتية لأنها تعطيني فرصاً لا تُعوَّض
          للتصوير الإنساني الحقيقي. نظرة العروس وهي تضع الحناء على يدها أمام جدتها، ابتسامة العريس مع
          والده في لحظة الوداع — هذه اللحظات لا تُخطَّط لها، تُشعَر وتُلتقط."
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          خبرتنا بالمواقع الإماراتية المفضلة في دبي — من قصر الإمارات وأرماني هوتيل إلى قاعات الأفراح
          الخاصة في الخوانيج والمرابع — تعني أننا نعرف أفضل زوايا التصوير قبل أن نصل، وكيف نتعامل مع
          إضاءة كل قاعة بالتحديد.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          مراحل العرس الإماراتي التي نُغطيها
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { phase: "ليلة الحناء", detail: "تصوير وفيديو طقوس الحناء التقليدية، الموسيقى، الحضور الأنثوي والأسري" },
            { phase: "الصبحة", detail: "توثيق صباح العرس — استقبال الضيوف، القهوة العربية، الملابس التقليدية" },
            { phase: "حفل الزفاف الرئيسي", detail: "تغطية كاملة متعددة الكاميرات، فيديو سينمائي، تصوير جوي بالدرون" },
            { phase: "جلسة تصوير ما قبل الزفاف", detail: "Pre-wedding في مواقع دبي الأيقونية — سوق بستكية، كريك هاربر، ميناء خور دبي" },
          ].map(({ phase, detail }) => (
            <div key={phase} style={{ display: "flex", gap: "1.5rem", padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderRight: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{phase}</div>
                <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          الخصوصية في الأعراس الإماراتية — كيف نتعامل معها؟
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          نفهم تماماً أن الأعراس الإماراتية تتطلب فصلاً تاماً بين مناطق الرجال والنساء في كثير من الأحيان.
          فريقنا يضم مصوّرات نساءً يمكنهن تغطية مناطق النساء بالكامل، ومصورون رجال لمناطق الرجال. نتناسق
          مع الأسرة مسبقاً لتحديد الحدود والمناطق وضمان التزام الفريق التام.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          سيد مظهر زيدي، مدير العمليات في باكيارد ستوديو، يشرح: "قبل كل عرس إماراتي، نجري اجتماعاً
          تنسيقياً مفصّلاً مع الأسرة نستفسر فيه عن الحدود المطلوبة، ومن يُسمح بتصويره، وما المناطق
          التي يُفضّل تصويرها أو تجنّبها. هذا الاحترام المسبق هو ما يجعل العائلات تعود إلينا لتصوير
          أفراح أبنائها وأحفادها."
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          أسعار تصوير الزفاف الإماراتي في دبي 2026
        </h2>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
            📋 حزم تصوير الأعراس الإماراتية
          </h3>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "حزمة اليوم الواحد", detail: "تصوير + فيديو / 10 ساعات / تسليم رقمي كامل", price: "AED 8,000 – 12,000" },
              { pkg: "حزمة المراحل المتعددة", detail: "الحناء + الصبحة + الزفاف / فريق مختلط", price: "AED 16,000 – 24,000" },
              { pkg: "الحزمة الشاملة", detail: "3 مراحل + فيديو سينمائي + درون + ألبوم طباعة", price: "AED 28,000 – 45,000" },
              { pkg: "حزمة Pre-Wedding", detail: "جلسة قبل الزفاف في مواقع دبي الأيقونية", price: "AED 3,500 – 6,000" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "left" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          أسئلة شائعة
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            {
              q: "كم تكلفة تصوير حفل الزفاف الإماراتي في دبي؟",
              a: "تبدأ من AED 8,000 للتغطية الأساسية. الحزم الشاملة للمراحل المتعددة (حناء + صبحة + زفاف) تتراوح بين AED 16,000 وAED 45,000.",
            },
            {
              q: "هل فريقكم متمرس في تصوير الأعراس الخليجية الإماراتية؟",
              a: "نعم، صوّرنا أكثر من 600 حفل إماراتي وخليجي. فريقنا يفهم كل مرحلة من مراحل العرس ويحترم الخصوصية الثقافية تماماً.",
            },
            {
              q: "هل تتوفر مصوّرات نساء لأقسام السيدات؟",
              a: "نعم، لدينا مصوّرات متخصصات يغطين مناطق النساء بالكامل مع الحفاظ على الخصوصية الكاملة.",
            },
            {
              q: "متى يجب حجز فريق تصوير الزفاف الإماراتي؟",
              a: "يُنصح بالحجز قبل 6-12 شهراً، خاصة في موسم الأعراس من أكتوبر إلى مارس حيث تمتلئ مواعيدنا بسرعة.",
            },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}
                <span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: "4px",
            padding: "2.5rem",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            احجز استشارتك المجانية الآن
          </h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>
            تحدّث مع فريقنا العربي عبر واتساب — نرد خلال ساعتين.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971585882685"
              style={{
                background: "var(--gold)",
                color: "#000",
                padding: "0.8rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "Cairo, sans-serif",
              }}
            >
              تواصل عبر واتساب
            </a>
            <a
              href="/ar/pricing"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "0.8rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "Cairo, sans-serif",
              }}
            >
              عرض الأسعار
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
