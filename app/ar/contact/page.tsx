import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | باكيارد ستوديو أوفيشيال دبي",
  description: "تواصل مع استوديو باكيارد أوفيشيال في دبي. نرد على جميع الاستفسارات خلال ساعتين. واتساب: +971 58 588 2685.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/contact" },
};

export default function ArContactPage() {
  return (
    <>
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
    </>
  );
}
