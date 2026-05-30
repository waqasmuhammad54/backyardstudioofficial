import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "معرض الأعمال | باكيارد ستوديو أوفيشيال — دبي",
  description: "تصفح أعمالنا في تصوير الفيديو والصور الاحترافية في دبي والإمارات. أكثر من 2,400 مشروع منجز.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/portfolio" },
};

const CATEGORIES = [
  { label: "الشركات والأعمال", href: "/portfolio", icon: "🏢" },
  { label: "حفلات الزفاف", href: "/portfolio", icon: "💍" },
  { label: "العقارات", href: "/portfolio", icon: "🏙️" },
  { label: "الفنادق والضيافة", href: "/portfolio", icon: "🏨" },
  { label: "السيارات", href: "/portfolio", icon: "🚗" },
  { label: "الأزياء والموضة", href: "/portfolio", icon: "👗" },
  { label: "الإعلانات التجارية", href: "/portfolio", icon: "📺" },
  { label: "محتوى السوشيال ميديا", href: "/portfolio", icon: "📱" },
];

export default function ArPortfolioPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>معرض الأعمال</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>أعمالنا</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          من فيديوهات الشركات إلى تصوير الأعراس والعقارات — نصنع محتوى يترك أثراً.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => (
              <a key={cat.label} href={cat.href}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", textDecoration: "none", gap: "0.75rem" }}>
                <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
                <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontSize: "0.9rem", fontWeight: 600, textAlign: "center" }}>{cat.label}</span>
              </a>
            ))}
          </div>

          <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", padding: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>
              شاهد معرض الأعمال الكامل
            </h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
              تصفح جميع مشاريعنا المنجزة عبر المعرض الكامل باللغة الإنجليزية.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/portfolio" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
                معرض الأعمال الكامل
              </a>
              <a href="/ar/contact" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
