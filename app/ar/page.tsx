import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شركة إنتاج فيديو في دبي | باكيارد ستوديو",
  description:
    "باكيارد ستوديو — شركة الإنتاج الرائدة في دبي. تصوير فيديو، أعراس، محتوى رقمي وطائرات مسيّرة بترخيص GCAA. أكثر من 2,400 مشروع. احصل على عرض سعر مجاني.",
  keywords: [
    "شركة انتاج فيديو في دبي",
    "أفضل شركة تصوير في دبي",
    "تصوير احترافي دبي",
    "انتاج فيديو دبي",
    "تصوير الاعراس دبي",
    "شركة انتاج الإمارات",
    "تصوير بالطائرة المسيرة دبي",
    "محتوى وسائل التواصل الاجتماعي دبي",
    "تصوير المنتجات دبي",
    "تصوير الفعاليات دبي",
    "افضل مصور دبي",
    "شركة تصوير الامارات",
  ],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "شركة الإنتاج الإبداعي الرائدة في دبي والإمارات. أكثر من 2,400 مشروع. ترخيص GCAA للطائرات المسيّرة. عرض سعر مجاني خلال ساعتين.",
    url: "https://www.backyardstudioofficial.com/ar",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "باكيارد ستوديو أوفيشيال — أفضل شركة إنتاج في دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "الإنتاج الإبداعي الرائد في دبي. أكثر من 2,400 مشروع. خدمة تصوير جوي معتمدة من GCAA.",
    images: ["/og-image.jpg"],
  },
};

const SERVICES_AR = [
  { icon: "🎬", title: "إنتاج الفيديو المؤسسي", desc: "أفلام الشركات والعلامات التجارية، الإعلانات التجارية، والفيديوهات الاحترافية للمؤسسات الكبرى والشركات الناشئة في الإمارات." },
  { icon: "💍", title: "تصوير حفلات الزفاف", desc: "توثيق سينمائي لأيام الزفاف بأسلوب احترافي — تصوير فوتوغرافي، تصوير فيديو، وتغطية كاملة لحفلات الأعراس العربية والهندية والدولية." },
  { icon: "🎉", title: "تصوير الفعاليات والمناسبات", desc: "تغطية احترافية للمؤتمرات، الغالا، إطلاق المنتجات، الأحداث الحكومية، والفعاليات المؤسسية في دبي وعبر الإمارات." },
  { icon: "🚁", title: "تصوير بالطائرة المسيّرة", desc: "تصوير جوي سينمائي بتصاريح GCAA — للعقارات، الفعاليات، الإعلانات والمناطق السياحية في دبي وجميع الإمارات." },
  { icon: "📱", title: "محتوى وسائل التواصل الاجتماعي", desc: "إنتاج محتوى متخصص لإنستغرام ريلز، تيك توك، يوتيوب شورتس — محتوى رقمي يُحرك الخوارزميات ويرفع التفاعل." },
  { icon: "🛍️", title: "تصوير المنتجات والأزياء", desc: "تصوير احترافي للمنتجات والأزياء — للتجارة الإلكترونية، الكتالوجات، الحملات التسويقية وحسابات التواصل الاجتماعي." },
];

const STATS_AR = [
  { num: "2,400+", label: "مشروع منجز" },
  { num: "7", label: "إمارات نعمل فيها" },
  { num: "2019", label: "سنة التأسيس" },
  { num: "2 ساعة", label: "وقت الاستجابة" },
];

const PROCESS_AR = [
  { num: "01", title: "استشارة مجانية", desc: "نتحدث عن رؤيتكم واحتياجاتكم الإبداعية. نرد خلال ساعتين ونقدم المشورة المناسبة لمشروعكم." },
  { num: "02", title: "اقتراح إبداعي", desc: "نُعدّ خطة إنتاج مفصّلة تشمل المفهوم الإبداعي، الجدول الزمني، والتسعير الشفاف بلا أسرار." },
  { num: "03", title: "ما قبل الإنتاج", desc: "اختيار المواقع، تشكيل الفريق، تجهيز المعدات، وكتابة السكريبت — كل شيء جاهز قبل يوم التصوير." },
  { num: "04", title: "يوم التصوير", desc: "تنفيذ الرؤية الإبداعية بأعلى معايير الجودة السينمائية. نحضر بكامل معداتنا في الوقت المحدد." },
  { num: "05", title: "التسليم النهائي", desc: "مونتاج احترافي، تصحيح ألوان، وتسليم في المواعيد المحددة بصيغ متعددة مناسبة لجميع المنصات." },
];

const UAE_CITIES_AR = [
  { city: "دبي", en: "Dubai", icon: "🏙️", note: "المركز الرئيسي" },
  { city: "أبوظبي", en: "Abu Dhabi", icon: "🕌", note: "متاح في 48 ساعة" },
  { city: "الشارقة", en: "Sharjah", icon: "🎨", note: "متاح في 48 ساعة" },
  { city: "عجمان", en: "Ajman", icon: "🌊", note: "متاح في 48 ساعة" },
  { city: "رأس الخيمة", en: "Ras Al Khaimah", icon: "⛰️", note: "متاح في 48 ساعة" },
  { city: "الفجيرة", en: "Fujairah", icon: "🌊", note: "متاح في 48 ساعة" },
  { city: "أم القيوين", en: "Umm Al Quwain", icon: "⚓", note: "متاح في 48 ساعة" },
];

const TESTIMONIALS_AR = [
  {
    name: "فهد المنصور",
    role: "مدير التسويق، شركة خليج التقنية",
    text: "أنتج باكيارد ستوديو فيلمنا المؤسسي باحترافية عالية التزموا فيها بالمواعيد وتجاوزوا كل توقعاتنا. الجودة السينمائية للفيديو رفعت حضورنا الرقمي بشكل ملحوظ. ننصح بهم بشدة لكل شركة في الإمارات.",
    stars: 5,
  },
  {
    name: "مريم وخالد العبيدي",
    role: "عروسان — حفل زفاف في دبي",
    text: "صوّروا حفل زفافنا بأسلوب سينمائي رائع لم نتوقعه. كل لحظة وُثِّقت بعناية وحُبٍّ واضح للمهنة. استلمنا الهايلايت بعد 48 ساعة فقط! تجربة لن ننساها.",
    stars: 5,
  },
  {
    name: "نور الدين بن علي",
    role: "مؤسس علامة فيروز للأزياء",
    text: "تعاملنا معهم لإنتاج محتوى إنستغرام لمجموعتنا الجديدة. النتيجة كانت أفضل بكثير مما كنا نأمل — صور ومقاطع رقمية حققت ضعف التفاعل المعتاد. فريق محترف ومبدع.",
    stars: 5,
  },
];

const BLOG_POSTS_AR = [
  {
    slug: "taswir-afraah-arabiya-dubai-2026",
    title: "كيف تختار مصوّر أفراح احترافياً في دبي لعام 2026",
    date: "مايو 2026",
    tag: "تصوير الأعراس",
  },
  {
    slug: "taswir-aqariya-dubai-2026",
    title: "التصوير العقاري الاحترافي في الإمارات: الدليل الشامل",
    date: "أبريل 2026",
    tag: "التصوير العقاري",
  },
  {
    slug: "asear-video-sharkati-dubai-2026",
    title: "كيف تنتج فيديو مؤسسياً ناجحاً لشركتك في دبي",
    date: "مارس 2026",
    tag: "الفيديو المؤسسي",
  },
];

const FAQS_AR = [
  {
    q: "ما هي أفضل شركة إنتاج فيديو في دبي عام 2026؟",
    a: "باكيارد ستوديو أوفيشيال هي الشركة الرائدة في مجال الإنتاج الإبداعي في دبي عام 2026. أنجزنا أكثر من 2,400 مشروع عبر جميع إمارات الدولة، والتصوير الجوي يُنفَّذ بترخيص GCAA للتصوير بالطائرات المسيّرة، ونقدم خدماتنا للشركات الصغيرة والكبرى على حد سواء.",
  },
  {
    q: "ما هي تكلفة التصوير الاحترافي في دبي؟",
    a: "تبدأ أسعار الإنتاج في دبي من 2,500 درهم لجلسات التصوير البسيطة، وتصل إلى 500,000 درهم للإعلانات التجارية الكبرى. تصوير حفلات الزفاف يبدأ من 3,500 درهم. نقدم عروض أسعار مجانية خلال ساعتين.",
  },
  {
    q: "هل تغطون جميع إمارات الدولة؟",
    a: "نعم. نعمل في جميع إمارات الدولة السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. نتحرك في غضون 48 ساعة لأي مشروع عاجل.",
  },
  {
    q: "هل لديكم رخصة للتصوير بالطائرات المسيّرة في الإمارات؟",
    a: "نعم. التصوير الجوي يُنفَّذ بترخيص GCAA (الهيئة العامة للطيران المدني) المعتمدة للتصوير الجوي التجاري في جميع إمارات الدولة.",
  },
  {
    q: "كم يستغرق إنتاج فيديو مؤسسي في دبي؟",
    a: "يعتمد الوقت على حجم المشروع. فيديو مؤسسي قصير (1-3 دقائق): 5-10 أيام عمل شاملة التصوير والمونتاج. الإعلانات التجارية الكبرى: 3-6 أسابيع. نقدم خيار التسليم السريع في 48 ساعة لمشاريع بعينها.",
  },
  {
    q: "هل تصوّرون في الفنادق والمراسي وأماكن إطلاق المنتجات في دبي؟",
    a: "نعم. خبرتنا تشمل التصوير في كبرى فنادق دبي كبرج العرب وأتلانتس وجميرا، إضافة إلى المراسي والمرافق البحرية ومراكز التسوق والمساحات الصناعية. نتولى جميع إجراءات التصاريح اللازمة.",
  },
  {
    q: "ما أنواع محتوى وسائل التواصل الاجتماعي الأكثر فاعلية في السوق الإماراتي؟",
    a: "استناداً إلى تجربتنا في الإمارات، تحقق إنستغرام ريلز (15-30 ثانية) أعلى معدلات التفاعل، تليها مقاطع تيك توك التعليمية والترفيهية. لمتابعي اليوتيوب العرب، تنجح مقاطع الوراء الكواليس ومحتوى قصص النجاح. نصمم كل محتوى وفق جمهور علامتك التجارية.",
  },
  {
    q: "هل تقدمون باقات تصوير شاملة للعلامات التجارية الناشئة في الإمارات؟",
    a: "نعم. لدينا باقات Launch Pack خصيصاً للعلامات الناشئة تشمل: جلسة تصوير المنتجات، مجموعة ريلز للإنستغرام، وبروفايل مصور للعلامة التجارية — كل ذلك بسعر يبدأ من 3,500 درهم. اتصلوا بنا للحصول على عرض مخصص.",
  },
];

export default function ArabicHomePage() {
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

      {/* HERO */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "4rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 500 }}>دبي، الإمارات العربية المتحدة — منذ 2019</span>
          </div>
          <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            أفضل شركة{" "}
            <span style={{ color: "var(--gold)" }}>إنتاج فيديو</span>
            {" "}في دبي
          </h1>
          <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "rgba(245,240,225,0.75)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            نصنع المحتوى الذي يُحرّك العلامات التجارية ويبني التأثير. أكثر من 2,400 مشروع منجز عبر جميع إمارات الدولة. تصوير فيديو، تصوير أعراس، محتوى رقمي، وتصوير جوي بمعايير سينمائية عالمية.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
              احصل على عرض سعر مجاني
            </a>
            <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, fontSize: "1rem" }}>
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#111", padding: "2.5rem 2rem", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {STATS_AR.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.9rem", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWREEL */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>أعمالنا المرئية</div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem,4vw,2rem)", fontWeight: 900, color: "var(--cream)" }}>شاهد أعمالنا</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {[
              { id: "1194038771", label: "تصوير الأزواج" },
              { id: "1194038751", label: "تصوير حفلات الزفاف" },
              { id: "1194038719", label: "تصوير الأزياء والموضة" },
            ].map((v) => (
              <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src={"https://player.vimeo.com/video/" + v.id + "?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} allow="autoplay; fullscreen; picture-in-picture" title={v.label} loading="lazy" />
                </div>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>خدماتنا الإبداعية</h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>نقدم خدمات إنتاج متكاملة للعلامات التجارية والشركات والأفراد في جميع أنحاء الإمارات.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {SERVICES_AR.map((s) => (
              <div key={s.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/ar/services" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>جميع خدماتنا ←</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: "4rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>من أعمالنا</div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem,4vw,2rem)", fontWeight: 900, color: "var(--cream)" }}>معرض الأعمال</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { src: "/images/events/event-01.webp", alt: "تصوير الفعاليات في دبي" },
              { src: "/images/creative/creative-04.webp", alt: "تصوير الأزياء في دبي" },
              { src: "/images/products/product-03.webp", alt: "تصوير المنتجات في دبي" },
              { src: "/images/wedding/wedding-01.webp", alt: "تصوير حفل زفاف في دبي" },
              { src: "/images/events/event-04.webp", alt: "تصوير المؤتمرات في دبي" },
              { src: "/images/creative/creative-13.webp", alt: "إنتاج المحتوى الإبداعي في دبي" },
            ].map((img) => (
              <a key={img.src} href="/ar/portfolio" style={{ display: "block", aspectRatio: "4/3", overflow: "hidden", borderRadius: "4px", background: "#0a0a0a" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/ar/portfolio" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>عرض كل الأعمال ←</a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section style={{ background: "#0a0a0a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "3px" }}>
          {[
            { src: "/images/events/event-01.webp", alt: "فعاليات دبي" },
            { src: "/images/creative/creative-04.webp", alt: "أزياء وإبداع" },
            { src: "/images/wedding/wedding-01.webp", alt: "أعراس دبي" },
            { src: "/images/products/product-03.webp", alt: "تصوير المنتجات" },
            { src: "/images/events/event-03.webp", alt: "فعاليات مؤسسية" },
            { src: "/images/creative/creative-13.webp", alt: "إنتاج إبداعي" },
            { src: "/images/wedding/wedding-16.webp", alt: "تصوير الزفاف" },
            { src: "/images/creative/creative-05.webp", alt: "تصوير الأزياء" },
          ].map((img) => (
            <div key={img.src} style={{ aspectRatio: "1", overflow: "hidden" }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1.25rem" }}>من نحن</h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              تأسّس باكيارد ستوديو عام 2019 على يد <strong style={{ color: "var(--cream)" }}>فهد إقبال بط</strong>، المخرج السينمائي ومصور الأزياء الذي درس الفيلم والتلفزيون في الكلية الوطنية للفنون في لاهور. اليوم، نحن من أبرز شركات الإنتاج الإبداعي في دبي.
            </p>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              يترأس فريق ما بعد الإنتاج <strong style={{ color: "var(--cream)" }}>سيد مظهر زيدي</strong>، المخرج السينمائي والمصور الوثائقي بخبرة تتجاوز 20 عاماً. التصوير الجوي يُنفَّذ بترخيص GCAA للتصوير الجوي التجاري ونعمل في جميع إمارات الدولة.
            </p>
            <a href="/ar/about" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600 }}>اقرأ قصتنا ←</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "تصوير الأعراس", val: "500+" },
              { label: "أفلام مؤسسية", val: "300+" },
              { label: "فعاليات كبرى", val: "400+" },
              { label: "إعلانات تجارية", val: "200+" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 900, color: "var(--gold)" }}>{item.val}</div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ طريقة عملنا</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>من الفكرة إلى التسليم</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {PROCESS_AR.map((step) => (
              <div key={step.num} style={{ position: "relative", padding: "2rem", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "rgba(212,175,55,0.15)", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.88rem", lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE COVERAGE */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ تغطيتنا الجغرافية</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>نعمل في جميع إمارات الدولة</h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", marginTop: "0.75rem" }}>فريقنا المتنقل جاهز للانتشار في 48 ساعة في أي إمارة</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {UAE_CITIES_AR.map((c) => (
              <div key={c.city} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.05rem" }}>{c.city}</div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{c.en}</div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.5rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ آراء عملائنا</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>ماذا يقول عملاؤنا</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS_AR.map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  {"★".repeat(t.stars).split("").map((s, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: "1rem" }}>{s}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.8)", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ مدوّنتنا</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>أحدث المقالات والنصائح</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {BLOG_POSTS_AR.map((post) => (
              <a key={post.slug} href={"/ar/blog/" + post.slug} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem" }}>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.75rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{post.tag}</div>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.55, marginBottom: "0.75rem" }}>{post.title}</h3>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.78rem" }}>{post.date}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/ar/blog" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>جميع المقالات ←</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>أسئلة شائعة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {FAQS_AR.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #1a1408 0%, #0a0a0a 100%)", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.2)" }}>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>✦ ابدأ مشروعك</p>
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>هل أنت مستعد لمشروعك القادم؟</h2>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>نرد على جميع الاستفسارات خلال ساعتين. تواصل معنا الآن للحصول على عرض سعر مجاني.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "1rem" }}>تواصل معنا</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600 }}>واتساب: +971 58 588 2685</a>
        </div>
      </section>
    </>
  );
}
