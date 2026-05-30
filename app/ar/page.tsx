import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أفضل شركة إنتاج فيديو في دبي 2026 | باكيارد ستوديو أوفيشيال",
  description:
    "باكيارد ستوديو أوفيشيال — شركة الإنتاج الإبداعي الأولى في دبي. تصوير فيديو احترافي، تصوير الأعراس، إنتاج المحتوى الرقمي، تصوير بالطائرة المسيّرة (رخصة GCAA). أكثر من 2,400 مشروع. تواصل معنا الآن.",
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
    },
  },
  openGraph: {
    title: "أفضل شركة إنتاج فيديو في دبي | باكيارد ستوديو أوفيشيال",
    description: "شركة الإنتاج الإبداعي الرائدة في دبي. أكثر من 2,400 مشروع. رخصة GCAA.",
    url: "https://www.backyardstudioofficial.com/ar",
    locale: "ar_AE",
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

      {/* ABOUT */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1.25rem" }}>
              من نحن
            </h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              تأسس استوديو باكيارد أوفيشيال عام 2019 على يد{" "}
              <strong style={{ color: "var(--cream)" }}>فهد إقبال بط</strong>،
              المخرج السينمائي ومصور الأزياء الذي درس الفيلم والتلفزيون في الكلية الوطنية للفنون في لاهور. اليوم، نحن من أبرز شركات الإنتاج الإبداعي في دبي.
            </p>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              يترأس فريق ما بعد الإنتاج{" "}
              <strong style={{ color: "var(--cream)" }}>سيد مظهر زيدي</strong>،
              المخرج السينمائي والمصور الوثائقي بخبرة تتجاوز 20 عاماً. نمتلك رخصة GCAA للتصوير الجوي التجاري ونعمل في جميع إمارات الدولة.
            </p>
            <a href="/ar/about" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600 }}>
              اقرأ قصتنا ←
            </a>
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

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            أسئلة شائعة
          </h2>
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
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          هل أنت مستعد لمشروعك القادم؟
        </h2>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "2rem", fontSize: "1rem" }}>
          نرد على جميع الاستفسارات خلال ساعتين. تواصل معنا الآن للحصول على عرض سعر مجاني.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
            تواصل معنا
          </a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600 }}>
            واتساب: +971 58 588 2685
          </a>
        </div>
      </section>
    </>
  );
}
