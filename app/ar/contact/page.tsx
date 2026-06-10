import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل مع باكيارد ستوديو أوفيشيال | دبي — واتساب +971 58 588 2685",
  description: "تواصل مع باكيارد ستوديو في دبي لحجز تصوير الفعاليات والأعراس والإعلانات في جميع أنحاء الإمارات. نرد خلال ساعتين. واتساب: +971 58 588 2685.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/contact",
    languages: {
      "en": "https://www.backyardstudioofficial.com/contact",
      "ar": "https://www.backyardstudioofficial.com/ar/contact",
      "ru": "https://www.backyardstudioofficial.com/ru/contact",
      "zh": "https://www.backyardstudioofficial.com/zh/contact",
      "x-default": "https://www.backyardstudioofficial.com/contact",
    },
  },
  openGraph: {
    title: "تواصل مع باكيارد ستوديو أوفيشيال — دبي",
    description: "احجز تصوير الفعاليات والأعراس والإعلانات في الإمارات. نرد خلال ساعتين. واتساب: +971 58 588 2685.",
    url: "https://www.backyardstudioofficial.com/ar/contact",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "تواصل مع باكيارد ستوديو — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل مع باكيارد ستوديو أوفيشيال — دبي",
    description: "نرد خلال ساعتين. واتساب +971 58 588 2685.",
    images: ["/og-image.jpg"],
  },
};

const CONTACT_FAQS = [
  { q: "ما هو رقم واتساب باكيارد ستوديو في دبي؟", a: "يمكنك التواصل معنا عبر واتساب على الرقم +971 58 588 2685. نرد على جميع الاستفسارات خلال ساعتين، 7 أيام في الأسبوع." },
  { q: "كيف أحصل على عرض سعر لتصوير مشروعي؟", a: "تواصل معنا عبر واتساب أو البريد الإلكتروني info@backyardstudioofficial.com مع وصف موجز للمشروع وتاريخ التصوير المطلوب. نرد بعرض سعر مخصص خلال ساعتين." },
  { q: "هل تغطون مناطق خارج دبي؟", a: "نعم. نعمل في جميع إمارات الدولة السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين." },
  { q: "ما هي مدة التسليم لمشاريع التصوير؟", a: "تُسلَّم هايلايت الأعراس والفعاليات في غضون 48 ساعة. الأفلام المؤسسية والإعلانات الكاملة تُسلَّم خلال 7-14 يوم عمل حسب تعقيد المشروع." },
];

export default function ArContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "تواصل معنا", "item": "https://www.backyardstudioofficial.com/ar/contact" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": CONTACT_FAQS.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          تواصل معنا
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          نرد على جميع الاستفسارات خلال ساعتين، 7 أيام في الأسبوع.
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "2rem" }}>معلومات التواصل</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "📞", label: "الهاتف وواتساب", val: "+971 58 588 2685", href: "tel:+971585882685" },
                { icon: "✉️", label: "البريد الإلكتروني", val: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
                { icon: "📍", label: "الموقع", val: "دبي، الإمارات العربية المتحدة", href: null },
                { icon: "⏰", label: "وقت الاستجابة", val: "خلال ساعتين", href: null },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", marginBottom: "0.2rem" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}>{item.val}</a>
                    ) : (
                      <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 500 }}>{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "2rem" }}>تواصل فوري</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", padding: "1rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, textAlign: "center", fontSize: "1rem" }}>
                💬 واتساب — ابدأ محادثة الآن
              </a>
              <a href="mailto:info@backyardstudioofficial.com"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", color: "var(--gold)", padding: "1rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 600, textAlign: "center" }}>
                ✉️ أرسل بريداً إلكترونياً
              </a>
            </div>
            <div style={{ marginTop: "2rem", fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              نغطي جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            أسئلة شائعة
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CONTACT_FAQS.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
