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
    description: "شركة الإنتاج الإبداعي الرائدة في دبي. أكثر من 2,400 مشروع. رخصة GCAA للطائرات المسيّرة. عرض سعر مجاني خلال ساعتين.",
    url: "https://www.backyardstudioofficial.com/ar",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "باكيارد ستوديو أوفيشيال — أفضل شركة إنتاج في دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "الإنتاج الإبداعي الرائد في دبي. أكثر من 2,400 مشروع. رخصة GCAA.",
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
  { num: "8+", label: "سنوات من الخبرة" },
  { num: "2 ساعة", label: "وقت الاستجابة" },
];

const FAQS_AR = [
  {
    q: "ما هي أفضل شركة إنتاج فيديو في دبي عام 2026؟",
    a: "باكيارد ستوديو أوفيشيال هي الشركة الرائدة في مجال الإنتاج الإبداعي في دبي عام 2026. أنجزنا أكثر من 2,400 مشروع عبر جميع إمارات الدولة، ونحمل رخصة GCAA للتصوير بالطائرات المسيّرة، ونقدم خدماتنا للشركات الصغيرة والكبرى على حد سواء.",
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
    a: "نعم. نحمل رخصة GCAA (الهيئة العامة للطيران المدني) المعتمدة للتصوير الجوي التجاري في جميع إمارات الدولة.",
  },
];

export default function ArabicHomePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_AR.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          padding: "4rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 500 }}>دبي، الإمارات العربية المتحدة — منذ 2019</span>
          </div>
          <h1
            style={{
              fontFamily: "Cairo, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "var(--cream)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            أفضل شركة{" "}
            <span style={{ color: "var(--gold)" }}>إنتاج فيديو</span>
            {" "}في دبي
          </h1>
          <p
            style={{
              fontFamily: "Cairo, sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(245,240,225,0.75)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "700px",
              margin: "0 auto 2.5rem",
            }}
          >
            نصنع المحتوى الذي يُحرّك العلامات التجارية ويبني التأثير. أكثر من 2,400 مشروع منجز
            عبر جميع إمارات الدولة. تصوير فيديو، تصوير أعراس، محتوى رقمي، وتصوير جوي
            بمعايير سينمائية عالمية.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/ar/contact"
              style={{
                background: "var(--gold)",
                color: "#000",
                padding: "0.9rem 2.25rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "Cairo, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                transition: "opacity 0.2s",
              }}
            >
              احصل على عرض سعر مجاني
            </a>
            <a
              href="https://wa.me/971585882685"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid rgba(212,175,55,0.5)",
                color: "var(--gold)",
                padding: "0.9rem 2.25rem",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "Cairo, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
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
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>أعمالنا</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", margin: 0 }}>شاهد إنتاجنا</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {[
              { id: "1194038771", label: "تصوير الأزواج" },
              { id: "1194038751", label: "تصوير حفلات الزفاف" },
              { id: "1194038719", label: "تصوير الأزياء والموضة" },
            ].map((v) => (
              <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1`}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={v.label}
                    loading="lazy"
                  />
                </div>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/ar/portfolio" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>
              مشاهدة كامل أعمالنا ←
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
              خدماتنا الإبداعية
            </h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
              نقدم خدمات إنتاج متكاملة للعلامات التجارية والشركات والأفراد في جميع أنحاء الإمارات.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {SERVICES_AR.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,175,55,0.12)",
                  borderRadius: "4px",
                  padding: "2rem",
                  transition: "border-color 0.3s",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/ar/services" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>
              جميع خدماتنا ←
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: "4rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>معرض الأعمال</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", margin: 0 }}>من أعمالنا</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
            {[
              { src: "/images/events/event-01.webp", alt: "تصوير الفعاليات في دبي" },
              { src: "/images/creative/creative-04.webp", alt: "تصوير الأزياء والموضة في دبي" },
              { src: "/images/products/product-03.webp", alt: "تصوير المنتجات الاحترافي" },
              { src: "/images/wedding/wedding-01.webp", alt: "تصوير حفلات الزفاف في دبي" },
              { src: "/images/events/event-04.webp", alt: "تغطية المناسبات الكبرى" },
              { src: "/images/creative/creative-13.webp", alt: "إنتاج المحتوى الإبداعي" },
            ].map((img) => (
              <a key={img.src} href="/ar/portfolio" style={{ display: "block", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", position: "relative", border: "1px solid rgba(212,175,55,0.08)" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/ar/portfolio" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
              عرض جميع الأعمال
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section style={{ background: "#0a0a0a", paddingBottom: "0.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "3px" }}>
          {[
            { src: "/images/events/event-01.webp", alt: "فعاليات دبي" },
            { src: "/images/creative/creative-04.webp", alt: "إبداع وأزياء" },
            { src: "/images/wedding/wedding-01.webp", alt: "أعراس دبي" },
            { src: "/images/products/product-03.webp", alt: "تصوير المنتجات" },
            { src: "/images/events/event-03.webp", alt: "تغطية الفعاليات" },
            { src: "/images/creative/creative-13.webp", alt: "إنتاج إبداعي" },
            { src: "/images/wedding/wedding-16.webp", alt: "تصوير الزفاف" },
     