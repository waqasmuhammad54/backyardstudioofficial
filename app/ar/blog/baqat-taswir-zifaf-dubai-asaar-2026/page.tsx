import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "باقات تصوير الأعراس في دبي 2026 — الأسعار | باكيارد",
  description:
    "باقات تصوير الأعراس في دبي 2026 من 7,500 إلى 65,000 درهم. مقارنة كاملة لباقات Essential وSilver وGold وPlatinum مع تسليم الـRAW في نفس اليوم.",
  keywords: [
    "باقات تصوير الأعراس دبي",
    "أسعار تصوير الأعراس في دبي",
    "كم تكلفة مصور أعراس في دبي",
    "تصوير زفاف دبي أسعار",
    "باقات تصوير زفاف الإمارات",
  ],
  alternates: {
    canonical:
      "https://www.backyardstudioofficial.com/ar/blog/baqat-taswir-zifaf-dubai-asaar-2026",
    languages: {
      ar: "https://www.backyardstudioofficial.com/ar/blog/baqat-taswir-zifaf-dubai-asaar-2026",
      en: "https://www.backyardstudioofficial.com/blog/wedding-photography-packages-in-dubai-real-2026-pricing-guide-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    type: "article",
    title: "باقات تصوير الأعراس في دبي 2026 — الأسعار الحقيقية",
    description:
      "أربع باقات واضحة من 7,500 إلى 65,000 درهم. ما الذي يشمله كل مستوى بالضبط، وأي باقة تناسب حفلك.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function WeddingPackagesPricingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة مصور الأعراس في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تتراوح باقات تصوير وتصوير فيديو الأعراس في دبي مع باكيارد ستوديو من 7,500 درهم لباقة Essential إلى 65,000 درهم لباقة Platinum، فيما تبلغ باقة Gold الأكثر طلباً 22,500 درهم.",
        },
      },
      {
        "@type": "Question",
        name: "ما الذي تشمله باقة Gold لتصوير الأعراس؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تشمل باقة Gold بسعر 22,500 درهم مصوّرَين اثنين ومصوّرَي فيديو، وألبوماً مطبوعاً، وفيديو كامل للحفل، ومقاطع أبرز اللحظات، وثلاثة ريلز، وجلسة تصوير للعروسين، وفيلماً وثائقياً قصيراً، وفيديو أغنية للعروسين، مع تسليم بيانات الـRAW في نفس اليوم.",
        },
      },
      {
        "@type": "Question",
        name: "هل تسلّمون الصور الخام (RAW) في يوم الزفاف نفسه؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم. تسليم بيانات الـRAW في نفس اليوم متاح في جميع باقات الأعراس، ما يمنح العروسين معاينة فورية بينما يجري إنجاز التحرير الكامل للصور والفيديو.",
        },
      },
      {
        "@type": "Question",
        name: "كم يستغرق استلام الصور والفيديو النهائي بعد الزفاف؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تُسلَّم الصور والفيديو المحرَّرة عادةً خلال 10 إلى 15 يوم عمل لباقات Essential وSilver وGold، بينما تُحدَّد مدة تسليم باقة Platinum حسب عدد أيام التصوير.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين باقة Silver وباقة Gold؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تشمل الباقتان مصوّرَين ومصوّرَي فيديو، لكن باقة Gold تضيف ألبوماً مطبوعاً وثلاثة ريلز وجلسة تصوير منفصلة للعروسين وفيلماً وثائقياً قصيراً وفيديو أغنية للعروسين، وهي عناصر غير متوفرة في باقة Silver.",
        },
      },
      {
        "@type": "Question",
        name: "هل توفّرون فرق تصوير نسائية بالكامل للأعراس؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم. للحفلات النسائية والأعراس ذات الفصل بين الرجال والنساء، يوفّر باكيارد ستوديو فرق تصوير فوتوغرافي وفيديو نسائية بالكامل في دبي وجميع إمارات الدولة، بنفس المستوى الاحترافي لفرقنا الأساسية.",
        },
      },
      {
        "@type": "Question",
        name: "هل الأسعار نفسها في باقي إمارات الدولة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم. تتوفر الباقات الأربع بالأسعار نفسها في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين، مع تسليم الـRAW في نفس اليوم بغض النظر عن الموقع.",
        },
      },
    ],
  };

  const gold = "var(--gold)";
  const h2 = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: gold,
    marginBottom: "1.2rem",
    marginTop: "3rem",
  } as const;
  const p = { marginBottom: "1.2rem" } as const;
  const cell = {
    border: "1px solid rgba(245,240,225,0.12)",
    padding: "0.75rem 1rem",
    textAlign: "right" as const,
    fontSize: "0.92rem",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ar" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>الرئيسية</a>
          {" / "}
          <a href="/ar/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>المدوّنة</a>
          {" / "}
          <span>باقات تصوير الأعراس في دبي 2026</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: gold, padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "1.5rem" }}>
          تصوير الأعراس
        </span>

        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          باقات تصوير الأعراس في دبي 2026
          <br />
          <span style={{ color: gold }}>الأسعار الحقيقية وما تشمله كل باقة</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "2.5rem" }}>
          <span>بقلم: فريق باكيارد ستوديو</span>
          <span>30 يوليو 2026</span>
          <span>8 دقائق للقراءة</span>
        </div>

        {/* ── Direct answer block — this is what AI engines quote ── */}
        <div style={{ background: "rgba(212,175,55,0.08)", borderRight: `3px solid ${gold}`, padding: "1.5rem 1.75rem", marginBottom: "2.5rem", borderRadius: "2px" }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: gold, marginBottom: "0.75rem", marginTop: 0 }}>
            الإجابة المختصرة
          </h2>
          <p style={{ margin: 0, fontSize: "1.05rem" }}>
            تتراوح باقات تصوير الأعراس في دبي من <strong>7,500 درهم</strong> لحفل صغير
            إلى <strong>65,000 درهم</strong> لإنتاج متعدد الأيام. يقدّم باكيارد ستوديو أربع
            باقات ثابتة لتصوير الأعراس فوتوغرافياً وفيديو — Essential وSilver وGold
            وPlatinum — تغطي كل شيء من عقد القران إلى الاحتفالات الممتدة على عدة أيام،
            في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين، مع تسليم
            بيانات الـRAW في نفس اليوم في جميع الباقات.
          </p>
        </div>

        <h2 style={h2}>لماذا لا تكفي مقارنة الأسعار وحدها</h2>
        <p style={p}>
          عرضان بسعر متقارب قد يشملان أشياء مختلفة تماماً — عدد المصوّرين، وساعات التغطية،
          ووجود ألبوم مطبوع من عدمه، وسرعة استلام الصور والفيديو. الأجدى أن تقارن ما تحصل
          عليه فعلياً في كل باقة، لأن الاختيار الصحيح يعتمد على حجم الحفل وشكله (عقد قران،
          أو حفل نصف يوم، أو احتفال متعدد الأيام) أكثر مما يعتمد على الرقم وحده.
        </p>

        <h2 style={h2}>باقات تصوير الأعراس — باكيارد ستوديو 2026</h2>
        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
            <thead>
              <tr style={{ background: "rgba(212,175,55,0.12)" }}>
                <th style={{ ...cell, fontWeight: 700, color: gold }}>الباقة</th>
                <th style={{ ...cell, fontWeight: 700, color: gold }}>السعر (درهم)</th>
                <th style={{ ...cell, fontWeight: 700, color: gold }}>الفريق</th>
                <th style={{ ...cell, fontWeight: 700, color: gold }}>أبرز ما تشمله</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cell}><strong>Essential</strong></td>
                <td style={cell}>7,500</td>
                <td style={cell}>مصوّر + مصوّر فيديو</td>
                <td style={cell}>30–40 صورة محرَّرة، فيديو كامل للحفل، RAW في نفس اليوم</td>
              </tr>
              <tr>
                <td style={cell}><strong>Silver</strong></td>
                <td style={cell}>15,500</td>
                <td style={cell}>مصوّران + مصوّرا فيديو</td>
                <td style={cell}>70–100 صورة محرَّرة، فيديو كامل، مقاطع أبرز اللحظات</td>
              </tr>
              <tr style={{ background: "rgba(212,175,55,0.06)" }}>
                <td style={cell}><strong>Gold</strong> — الأكثر طلباً</td>
                <td style={cell}>22,500</td>
                <td style={cell}>مصوّران + مصوّرا فيديو</td>
                <td style={cell}>ألبوم مطبوع، فيديو كامل، 3 ريلز، جلسة عروسين، فيلم وثائقي، فيديو أغنية</td>
              </tr>
              <tr>
                <td style={cell}><strong>Platinum</strong></td>
                <td style={cell}>65,000</td>
                <td style={cell}>3 مصوّرين + 3 مصوّري فيديو</td>
                <td style={cell}>فيلم وثائقي بمقابلات، ألبومان مطبوعان، 3–5 ريلز، نسخة USB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize: "0.9rem", color: "rgba(245,240,225,0.7)" }}>
          جميع الباقات تشمل تسليم بيانات الـRAW في نفس اليوم، وتُسلَّم الصور والفيديو
          المحرَّرة عادةً خلال 10–15 يوم عمل (تُحدَّد مدة Platinum حسب عدد أيام التصوير).
        </p>

        <h2 style={h2}>أي باقة تناسب أي نوع من الأعراس</h2>
        <ul style={{ paddingRight: "1.2rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.7rem" }}>
            <strong>Essential (7,500 درهم)</strong> — للحفلات الصغيرة وعقد القران والمناسبات
            العائلية المحدودة التي تحتاج توثيقاً أنيقاً ومباشراً.
          </li>
          <li style={{ marginBottom: "0.7rem" }}>
            <strong>Silver (15,500 درهم)</strong> — مناسبة للحفلات المتوسطة التي تريد مصوّراً
            ومصوّر فيديو إضافيين لتغطية أوسع وزوايا أكثر.
          </li>
          <li style={{ marginBottom: "0.7rem" }}>
            <strong>Gold (22,500 درهم)</strong> — الخيار الأكثر طلباً ليوم زفاف كامل، إذ يضيف
            ألبوماً مطبوعاً وريلز للسوشيال ميديا وجلسة تصوير منفصلة للعروسين.
          </li>
          <li style={{ marginBottom: "0.7rem" }}>
            <strong>Platinum (65,000 درهم)</strong> — للأعراس الممتدة على عدة أيام (حنّة، عقد
            قران، حفل استقبال) التي تحتاج فريقاً أكبر وألبومين وفيلماً وثائقياً بمقابلات.
          </li>
        </ul>

        <h2 style={h2}>لماذا باقة Gold هي الأكثر طلباً</h2>
        <p style={p}>
          تناسب باقة Gold الطريقة التي تُقام بها معظم أعراس دبي فعلياً — حفل رئيسي واحد
          يستحق ذكرى متكاملة: ألبوم مطبوع، وفيلم كامل، ومقاطع قصيرة للمشاركة على السوشيال
          ميديا، وجلسة تصوير للعروسين إلى جانب تغطية اليوم نفسه. وهي تقع عند سعر يغطي ذكرى
          زفاف كاملة دون الانتقال إلى نطاق Platinum متعدد الأيام والفريق الأكبر.
        </p>

        <h2 style={h2}>الأعراس العربية والفصل بين الرجال والنساء</h2>
        <p style={p}>
          نوفّر فرق تصوير فوتوغرافي وفيديو نسائية بالكامل للحفلات النسائية والأعراس ذات
          الفصل، بنفس المستوى الاحترافي لفرقنا الأساسية. هذا ترتيب يُتفق عليه مسبقاً عند
          الحجز حتى نضمن توفّر الفريق المناسب في تاريخ الحفل.
        </p>

        <h2 style={h2}>كيف تسير العملية</h2>
        <ol style={{ paddingRight: "1.2rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>استشارة لتحديد شكل الحفل وعدد المناسبات وعدد الضيوف</li>
          <li style={{ marginBottom: "0.5rem" }}>اختيار الباقة الأقرب، مع إمكانية التعديل عند الحاجة</li>
          <li style={{ marginBottom: "0.5rem" }}>تغطية يوم الزفاف بالساعات واللحظات المتفق عليها</li>
          <li style={{ marginBottom: "0.5rem" }}>تسليم بيانات الـRAW في نفس اليوم كمعاينة وضمان</li>
          <li style={{ marginBottom: "0.5rem" }}>التحرير: الصور والفيديو الكامل ومقاطع الأبرز والريلز</li>
          <li style={{ marginBottom: "0.5rem" }}>التسليم النهائي خلال 10–15 يوم عمل</li>
        </ol>

        <h2 style={h2}>التغطية في جميع إمارات الدولة</h2>
        <p style={p}>
          الباقات الأربع نفسها متاحة بالأسعار نفسها في دبي وأبوظبي والشارقة وعجمان ورأس
          الخيمة والفجيرة وأم القيوين، مع تسليم الـRAW في نفس اليوم بغض النظر عن موقع الحفل.
        </p>

        {/* FAQ (visible) */}
        <h2 style={h2}>الأسئلة الشائعة</h2>
        {faqSchema.mainEntity.map((q, i) => (
          <div key={i} style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              {q.name}
            </h3>
            <p style={{ margin: 0, color: "rgba(245,240,225,0.85)" }}>{q.acceptedAnswer.text}</p>
          </div>
        ))}

        {/* CTA */}
        <div style={{ background: "rgba(212,175,55,0.08)", padding: "2rem", borderRadius: "2px", marginTop: "3rem", textAlign: "center" }}>
          <h2 style={{ ...h2, marginTop: 0 }}>احجز باقة تصوير زفافك</h2>
          <p style={p}>
            أربع باقات واضحة من 7,500 إلى 65,000 درهم، مع تسليم الـRAW في نفس اليوم.
            اتصل أو راسلنا على واتساب <strong dir="ltr">+971 58 588 2685</strong> للتأكد من
            توفّر التاريخ.
          </p>
          <a
            href="https://wa.me/971585882685"
            style={{ display: "inline-block", background: gold, color: "#181818", padding: "0.8rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", marginTop: "0.5rem" }}
          >
            تواصل عبر واتساب
          </a>
        </div>

        {/* Internal links */}
        <div style={{ marginTop: "2.5rem", fontSize: "0.9rem" }}>
          <p style={{ marginBottom: "0.6rem", color: "rgba(245,240,225,0.6)" }}>اقرأ أيضاً:</p>
          <a href="/ar/blog/taswir-zifaf-arabi-dubai-2026" style={{ color: gold, textDecoration: "none", marginLeft: "1.2rem" }}>تصوير الأعراس العربية في دبي</a>
          <a href="/ar/blog/asear-tasswirvideo-dubai-2026" style={{ color: gold, textDecoration: "none", marginLeft: "1.2rem" }}>أسعار تصوير الفيديو في دبي</a>
          <a href="/ar/pricing" style={{ color: gold, textDecoration: "none" }}>جميع الأسعار</a>
        </div>
      </article>
    </>
  );
}
