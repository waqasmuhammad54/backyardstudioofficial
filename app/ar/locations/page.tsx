import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مواقع التصوير في الإمارات | باكيارد ستوديو أوفيشيال",
  description: "نصوّر في جميع إمارات الدولة السبع — دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة وأم القيوين. بدون رسوم تنقل.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/locations" },
};

const EMIRATES = [
  { name: "دبي", slug: "dubai", desc: "وسط المدينة، المارينا، نخلة جميرا، DIFC، Business Bay وأكثر من 25 منطقة." },
  { name: "أبوظبي", slug: "abu-dhabi", desc: "جزيرة ياس، جزيرة السعديات، الكورنيش، الريم، ADGM وأكثر." },
  { name: "الشارقة", slug: "sharjah", desc: "الماجاز، القصباء، واجهة الشارقة المائية، الخان." },
  { name: "عجمان", slug: "ajman", desc: "كورنيش عجمان، الجرف، الراشدية." },
  { name: "رأس الخيمة", slug: "ras-al-khaimah", desc: "مدينة RAK، قرية الحمراء، جبل جيس." },
  { name: "الفجيرة", slug: "fujairah", desc: "مدينة الفجيرة، دبا، شاطئ خورفكان." },
  { name: "أم القيوين", slug: "umm-al-quwain", desc: "مدينة UAQ، منطقة دريملاند أكوا بارك." },
];

export default function ArLocationsPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>تغطية وطنية</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>مواقع التصوير في الإمارات</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          نصوّر في جميع الإمارات السبع — بدون رسوم تنقل داخل الدولة. نصل إليك أينما كنت.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`}
              style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem", textDecoration: "none" }}>
              <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{e.name}</h2>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{e.desc}</p>
              <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.8rem", marginTop: "1rem", display: "block" }}>تفاصيل المنطقة &larr;</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem 2rem", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            هل تحتاج تصوير في موقع محدد؟
          </h3>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            تواصل معنا وسنصل إليك في أي مكان في الإمارات. نعمل في المواقع الخارجية، الداخلية، والجوية بطائرات مسيّرة مرخصة من هيئة الطيران المدني.
          </p>
          <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
            احصل على عرض سعر
          </a>
        </div>
      </section>
    </>
  );
}
