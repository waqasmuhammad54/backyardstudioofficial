import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أسعار الإنتاج دبي 2026 | باكيارد ستوديو أوفيشيال — عروض وباقات",
  description: "أسعار الإنتاج في دبي 2026: تصوير أعراس يبدأ من 7,500 درهم، إعلانات تجارية من 15,000 درهم، تصوير جوي من 2,000 درهم، محتوى سوشيال ميديا من 2,500 درهم. رخصة GCAA.",
  keywords: ["أسعار تصوير أعراس دبي", "تكلفة الإنتاج التجاري الإمارات", "سعر التصوير الجوي دبي", "أسعار محتوى السوشيال ميديا دبي", "باقات الإنتاج دبي 2026"],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "أسعار الإنتاج دبي 2026 | باكيارد ستوديو أوفيشيال",
    description: "أسعار شفافة: أعراس من 7,500 درهم، إعلانات تجارية من 15,000 درهم، تصوير جوي من 2,000 درهم. عرض سعر مجاني خلال ساعتين.",
    url: "https://www.backyardstudioofficial.com/ar/pricing",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "أسعار الإنتاج دبي — باكيارد ستوديو أوفيشيال" }],
  },
};

const PACKAGES_AR = [
  {
    category: "تصوير وتصوير فيديو الأعراس",
    anchor: "wedding",
    intro: "الباقات الأكثر طلباً في دبي لتصوير الأعراس — من التصوير الاحترافي حتى الإنتاجات الفاخرة متعددة الأيام. بيانات RAW تُسلَّم في نفس اليوم في جميع الباقات.",
    plans: [
      { name: "الأساسية", price: "7,500 درهم", label: "تصوير اقتصادي", desc: "تغطية صور وفيديو احترافية للمناسبات الصغيرة وحفلات الزفاف المدنية.", includes: ["مصوّر واحد محترف", "مصوّر فيديو واحد", "3 ساعات تغطية", "30–40 صورة معدّلة", "رابط درايف إلكتروني (الصور) + بيانات RAW", "فيديو حفل كامل معدّل (1920×1080)", "تسليم خلال 10–15 يوم عمل", "بيانات RAW تُسلَّم نفس اليوم"], featured: false },
      { name: "الفضية", price: "15,500 درهم", label: "تغطية نصف يوم", desc: "مثالية للمناسبات المدنية والعقود الدينية والاحتفالات الصغيرة.", includes: ["2 مصوّر محترف", "2 مصوّر فيديو", "3 ساعات تغطية", "70–100 صورة معدّلة", "فيديو حفل كامل معدّل (1920×1080)", "فيديو أبرز اللحظات معدّل", "تسليم خلال 10–15 يوم عمل", "بيانات RAW تُسلَّم نفس اليوم"], featured: false },
      { name: "الذهبية", price: "22,500 درهم", label: "زفاف يوم كامل", desc: "الباقة الأكثر طلباً — صور وفيديو وأبرز اللحظات وريلز وجلسة الزوجين.", includes: ["2 مصوّر محترف", "2 مصوّر فيديو", "3 ساعات تغطية", "ألبوم 1 (تصميم + طباعة + تجليد + لصق + صندوق الألبوم)", "فيديو حفل كامل معدّل (1920×1080)", "فيديو أبرز اللحظات معدّل", "3 ريلز معدّلة", "جلسة تصوير الزوجين", "فيلم قصة + مقابلة (فيلم وثائقي أسلوب تعبيري 1920×1080)", "فيديو أغنية الزوجين + جلسة تصوير", "تسليم خلال 10–15 يوم عمل", "بيانات RAW تُسلَّم نفس اليوم"], featured: true },
      { name: "البلاتينية", price: "65,000 درهم", label: "متعدد الأيام الفاخر", desc: "الإنتاج الأمثل — 3 مصوّرين، 3 مصوّري فيديو، ألبومان، فيلم وثائقي.", includes: ["3 مصوّرين محترفين (1× بورتريه، 1× ألبوم، 1× كانديد)", "3 مصوّري فيديو (1× رئيسي، 1× كانديد)", "فيديو مقابلات وثائقية 1×", "تغطية 3–5 ساعات", "2 ألبوم (تصميم + طباعة + تجليد + لصق + صندوق الألبوم)", "3–5 ريلز معدّلة", "نسخة USB", "مدة التسليم حسب مدة التصوير"], featured: false },
    ],
  },
  {
    category: "محتوى السوشيال ميديا",
    anchor: "social-media",
    intro: "باقات محتوى شهرية وجلسات تصوير سوشيال ميديا للعلامات التجارية في الإمارات. صور وفيديو في كل جلسة.",
    plans: [
      { name: "المبتدئة", price: "2,500 درهم", label: "جلسة نصف يوم", desc: "موقع واحد، إطلالة واحدة — مثالية لإطلاق منتج أو تجديد حملة.", includes: ["4 ساعات إنتاج", "3–4 ريلز/تيك توك معدّلة", "20–30 صورة معدّلة", "صيغ ستوري وفيد", "تسليم خلال 48 ساعة"], featured: false },
      { name: "النمو", price: "5,500 درهم", label: "يوم محتوى كامل", desc: "الأكثر طلباً للعلامات التجارية التي تحتاج محتوى شهراً كاملاً من يوم واحد.", includes: ["8 ساعات إنتاج", "6–8 ريلز/تيك توك معدّلة", "50–80 صورة معدّلة", "مواقع وإطلالات متعددة", "صيغ ستوري وفيد وإعلان", "استراتيجية هاشتاق وكابشن", "تسليم خلال 48 ساعة"], featured: true },
      { name: "باقة شهرية", price: "من 8,000 درهم/شهر", label: "محتوى دائم", desc: "يومَا تصوير كل شهر — علامتك التجارية لن تنفد أبداً من محتوى عالي الجودة.", includes: ["2 يوم تصوير شهرياً", "12–16 ريلز/تيك توك شهرياً", "100+ صورة شهرياً", "تخطيط تقويم المحتوى", "اختيار المقاطع الصوتية الرائجة", "مونتاج مخصص للمنصة", "تسليم أولوية خلال 24 ساعة"], featured: false },
    ],
  },
  {
    category: "إعلانات DVC والتلفزيون",
    anchor: "dvcs",
    intro: "إنتاج إعلانات تجارية بجودة البث لعلامات الإمارات. خدمة إبداعية كاملة من الفكرة حتى التسليم.",
    plans: [
      { name: "الرقمي", price: "15,000 درهم", label: "إعلان سوشيال ميديا DVC", desc: "إعلان تجاري عالي الجودة لحملات ميتا وتيك توك ويوتيوب المدفوعة.", includes: ["الفكرة الإبداعية والسيناريو", "يوم تصوير واحد", "ممثلون محترفون", "إعلان رئيسي 30 ثانية", "مقطع مختصر 15 ثانية", "تسليم 9:16 + 16:9 + 1:1", "جولتان مراجعة"], featured: false },
      { name: "البث", price: "45,000 درهم", label: "إعلان TV ورقمي", desc: "إعلان إنتاجي متكامل للبث على تلفزيون الإمارات والحملات الرقمية.", includes: ["تطوير إبداعي متكامل", "2–3 أيام تصوير", "اختيار ممثلين محترف", "استطلاع مواقع", "TVC 30 ثانية + مقاطع", "مواصفات تسليم البث", "نسختان عربية وإنجليزية", "ثلاث جولات مراجعة"], featured: true },
      { name: "المتميزة", price: "150,000+ درهم", label: "فيلم علامة تجارية فاخر", desc: "حملة علامة تجارية سينمائية للعملاء الفاخرين والحكوميين والمؤسسات الكبرى.", includes: ["إنتاج متعدد الأيام عبر الإمارات", "تصميم إنتاج وتوجيه فني كامل", "طاقم وممثلون كبار", "مؤثرات بصرية وموشن غرافيك", "موسيقى أصيلة مؤلّفة", "جميع صيغ المنصات", "تسليم دولي"], featured: false },
    ],
  },
  {
    category: "تغطية الفعاليات",
    anchor: "events",
    intro: "تصوير وتصوير فيديو احترافي للفعاليات عبر إمارات الدولة. تسليم مواد سوشيال ميديا نفس اليوم.",
    plans: [
      { name: "الأساسية", price: "3,000 درهم", label: "فعالية نصف يوم", desc: "تغطية بكاميرا واحدة حتى 4 ساعات مع مقطع تسليط ضوء معدّل.", includes: ["1 مصوّر أو مصوّر فيديو", "4 ساعات تغطية", "150+ صورة معدّلة أو", "فيديو تسليط ضوء 3 دقائق", "تسليم خلال 48 ساعة"], featured: false },
      { name: "الاحترافية", price: "7,500 درهم", label: "فعالية يوم كامل", desc: "تغطية صور وفيديو بكاميرات متعددة — الباقة الكاملة لتوثيق الفعاليات.", includes: ["1 مصوّر + 1 مصوّر فيديو", "8 ساعات تغطية", "300+ صورة معدّلة", "ريل تسليط ضوء 5 دقائق", "مقطع سوشيال ميديا نفس اليوم", "ريلز/تيك توك مختصرة", "تسليم كامل خلال 48 ساعة"], featured: true },
      { name: "الإنتاج", price: "20,000+ درهم", label: "فعالية كبيرة النطاق", desc: "تغطية بطاقم متعدد للمؤتمرات والحفلات وإطلاقات المنتجات والفعاليات الكبرى.", includes: ["طاقم كاميرات متعدد", "تغطية متعددة الأيام عند الحاجة", "إنتاج بث مباشر", "باقة تصوير صحفي", "مواد سوشيال ميديا نفس اليوم", "فيلم وصور معدّلة كاملة", "تسليم جاهز للبث"], featured: false },
    ],
  },
  {
    category: "تصوير جوي بطائرة مسيّرة (رخصة GCAA)",
    anchor: "drone",
    intro: "تصوير جوي مرخّص قانونياً عبر إمارات الدولة. جميع الجلسات مؤمّنة ومنسّقة مع الجهات المختصة.",
    plans: [
      { name: "إضافي", price: "2,000 درهم", label: "أضف لأي جلسة", desc: "أضف تصوير جوي مرخّص GCAA لأي حجز إنتاجي قائم.", includes: ["ساعتان تغطية جوية", "لقطات بدقة 4K", "مقطع جوي ملوَّن", "ملفات RAW مرفقة", "معاينة نفس اليوم"], featured: false },
      { name: "منفصل", price: "4,500 درهم", label: "يوم طائرة مسيّرة كامل", desc: "يوم إنتاج جوي كامل — مثالي للعقارات والفعاليات والحملات.", includes: ["يوم تصوير جوي كامل", "لقطات سينمائية 4K", "تنسيق جميع تصاريح الإمارات", "مقطع تسليط ضوء ملوَّن", "تسليم ملفات 4K الخام", "تسليم خلال 24 ساعة"], featured: true },
      { name: "حملة", price: "12,000+ درهم", label: "جوي متعدد المواقع", desc: "حملة طائرة مسيّرة متعددة المواقع للمطورين العقاريين والسياحة والأفلام.", includes: ["جدول جوي متعدد الأيام", "مواقع متعددة في الإمارات", "تنسيق تصاريح كاملة", "لقطات 4K وسلوموشن", "تسليم مواد ملوّنة", "تكامل مع الطاقم الأرضي"], featured: false },
    ],
  },
];

const FAQS_AR = [
  { q: "كم تبلغ أسعار تصوير الأعراس في دبي؟", a: "تتراوح أسعار تصوير وتصوير فيديو الأعراس في دبي من 7,500 درهم للباقة الأساسية (مصوّر + مصوّر فيديو، 3 ساعات تغطية، صور معدّلة + فيديو حفل كامل) وحتى 65,000 درهم للباقة البلاتينية الفاخرة (3 مصوّرين، 3 مصوّري فيديو، ألبومان، فيلم وثائقي، 3–5 ريلز). الباقة الأكثر طلباً (الذهبية) بسعر 22,500 درهم تشمل مصوّرَين ومصوّرَي فيديو وألبوماً وأبرز اللحظات و3 ريلز وجلسة الزوجين وبيانات RAW نفس اليوم." },
  { q: "ما تكلفة الإنتاج الفيديو في دبي والإمارات؟", a: "تتفاوت تكاليف إنتاج الفيديو في دبي حسب النوع: ريلز السوشيال ميديا من 2,500 درهم ليوم التصوير؛ تغطية الفعاليات من 3,000 درهم؛ الأفلام المؤسسية من 15,000 درهم؛ إنتاج DVC من 15,000 درهم رقمياً حتى 150,000+ درهم للإعلانات التلفزيونية الفاخرة. نقدّم عروض أسعار مجانية خلال ساعتين لجميع أحجام المشاريع." },
  { q: "ما تكلفة إعلان DVC في الإمارات؟", a: "تتراوح تكلفة إعلان DVC في الإمارات من 15,000 درهم للإعلانات الرقمية المبسّطة وحتى 150,000+ درهم للأفلام الإعلانية الفاخرة. العوامل الرئيسية للتكلفة: أيام التصوير وحجم الطاقم والمواقع ومتطلبات ما بعد الإنتاج وعدد اللغات." },
  { q: "ما تكلفة التصوير الجوي بطائرة مسيّرة في دبي؟", a: "التصوير الجوي المرخّص بـ GCAA في دبي يبدأ من 2,000 درهم إضافة لأي جلسة، و4,500 درهم ليوم طائرة مسيّرة كامل، و12,000+ درهم للحملات متعددة المواقع. جميع جلساتنا تشمل تصاريح GCAA الكاملة والتأمين والمواد الملوّنة." },
  { q: "ما تكلفة إنتاج محتوى السوشيال ميديا في دبي؟", a: "جلسات السوشيال ميديا في دبي تبدأ من 2,500 درهم لنصف يوم تصوير ينتج 3–4 ريلز و20–30 صورة. يوم المحتوى الكامل 5,500 درهم يُسلّم محتوى شهر كامل عبر إنستغرام وتيك توك ويوتيوب شورتس. الباقات الشهرية تبدأ من 8,000 درهم شهرياً ليومَي تصوير و100+ منتج قابل للتسليم." },
  { q: "هل تقدّمون عروض أسعار مخصّصة لمشاريع غير واردة في الباقات؟", a: "نعم — معظم مشاريعنا تُسعَّر مخصّصاً بناءً على موجز محدد. الباقات أعلاه هي نقاط انطلاق. أرسل لنا موجزك عبر واتساب أو نموذج التواصل وسنردّ بعرض سعر مفصّل خلال ساعتين." },
];

export default function ArPricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_AR.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HEADER */}
      <section style={{ background: "#111", padding: "6rem 2rem 4rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>أسعار شفافة</p>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>الأسعار والباقات</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
          باقات نقطة انطلاق لكل نوع إنتاج. جميع الأسعار بالدرهم الإماراتي وتخضع لضريبة القيمة المضافة. عروض أسعار مخصّصة خلال ساعتين.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>واتساب للحصول على عرض سعر</a>
          <a href="/ar/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>طلب عرض سعر</a>
        </div>
      </section>

      {/* PACKAGES */}
      {PACKAGES_AR.map((pkg, pi) => (
        <section key={pkg.anchor} id={pkg.anchor} style={{ padding: "4rem 2rem", background: pi % 2 === 0 ? "#0a0a0a" : "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>0{pi + 1}</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem" }}>{pkg.category}</h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem", maxWidth: "700px", lineHeight: 1.7 }}>{pkg.intro}</p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${pkg.plans.length >= 4 ? "230px" : "260px"}, 1fr))`, gap: "1.25rem" }}>
              {pkg.plans.map((plan) => (
                <div key={plan.name} style={{ position: "relative", padding: "2rem", border: plan.featured ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", background: "#1a1a1a" }}>
                  {plan.featured && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", fontSize: "0.65rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, padding: "3px 12px", borderRadius: "2px", whiteSpace: "nowrap" }}>الأكثر طلباً</div>
                  )}
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{plan.label}</p>
                  <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.25rem" }}>{plan.name}</h3>
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{plan.price}</p>
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{plan.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {plan.includes.map((item, ii) => (
                      <li key={ii} style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", display: "flex", gap: "0.5rem", alignItems: "flex-start", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href={"/ar/contact"} style={{ display: "block", textAlign: "center", padding: "0.7rem 1rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "0.8rem", borderRadius: "2px", textDecoration: "none", background: plan.featured ? "var(--gold)" : "transparent", color: plan.featured ? "#000" : "rgba(245,240,225,0.5)", border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)" }}>طلب عرض سعر</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* OTHER SERVICES */}
      <section style={{ padding: "4rem 2rem", background: "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem" }}>خدمات أخرى — ابتداءً من</h2>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>عروض أسعار مخصّصة لجميع المشاريع خلال ساعتين.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { service: "تصوير الطعام", from: "2,500 درهم" },
              { service: "تصوير المنتجات", from: "1,800 درهم" },
              { service: "صور الشركات", from: "1,500 درهم" },
              { service: "تصوير العقارات", from: "2,000 درهم" },
              { service: "فيديوهات الشهادات", from: "3,500 درهم" },
              { service: "إنتاج بودكاست", from: "4,000 درهم" },
              { service: "إنتاج يوتيوب", from: "3,500 درهم" },
              { service: "تصوير السيارات", from: "3,000 درهم" },
              { service: "جلسات الأزياء", from: "5,000 درهم" },
              { service: "تصوير الفنادق", from: "8,000 درهم" },
              { service: "إعلانات السيارات", from: "25,000 درهم" },
              { service: "ريلز (ليوم التصوير)", from: "2,500 درهم" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{s.service}</p>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem" }}>{s.from}</p>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", marginTop: "0.25rem" }}>ابتداءً من</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2.5rem" }}>أسئلة شائعة حول الأسعار</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS_AR.map((faq, i) => (
              <div key={i} style={{ padding: "1.5rem", background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>{faq.q}</p>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#111", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>✦ مستعد للبدء؟</p>
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>احصل على عرض سعرك<br /><span style={{ color: "var(--gold)" }}>خلال ساعتين</span></h2>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>أخبرنا بمشروعك والتواريخ وميزانيتك التقريبية. نردّ على كل استفسار خلال ساعتين — 7 أيام في الأسبوع.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>واتساب الآن</a>
          <a href="/ar/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>نموذج التواصل</a>
        </div>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginTop: "2rem" }}>جميع الأسعار بالدرهم الإماراتي. تُطبَّق ضريبة القيمة المضافة. الأسعار صحيحة اعتباراً من 2026.</p>
      </section>
    </>
  );
}
