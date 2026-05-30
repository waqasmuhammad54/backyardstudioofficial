import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آراء العملاء | باكيارد ستوديو أوفيشيال — دبي",
  description: "اقرأ آراء عملائنا من الشركات والأفراد في دبي والإمارات. أكثر من 2,400 مشروع منجز بثقة.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/testimonials" },
};

const TESTIMONIALS = [
  { name: "أحمد الرشيدي", role: "المدير التنفيذي، مجموعة بريميوم للعقارات", text: "فريق باكيارد ستوديو يفهم متطلبات السوق الإماراتي تماماً. جودة الإنتاج والالتزام بالمواعيد كانا استثنائيين. الفيديو الذي أنتجوه لمشروع فللنا الفاخرة رفع مبيعاتنا بشكل ملحوظ.", stars: 5 },
  { name: "سارة المنصوري", role: "مديرة التسويق، فندق جراند بلازا دبي", text: "أنتجوا لنا محتوى مرئياً احترافياً لمنصات التواصل الاجتماعي بأسرع وقت وأعلى جودة. العمل معهم كان تجربة سلسة ومثمرة.", stars: 5 },
  { name: "محمد الهاشمي", role: "مؤسس، شركة الابتكار للتكنولوجيا", text: "طلبنا فيديو تعريفي للشركة وتجاوز التوقعات بكثير. الفريق محترف، ملتزم، ومبدع. سنتعاون معهم في كل مشاريعنا القادمة.", stars: 5 },
  { name: "نورة الكعبي", role: "مصممة أزياء، دبي", text: "صوّروا مجموعتي الجديدة بأسلوب راقٍ يعكس هوية العلامة التجارية بدقة. الصور والفيديوهات كانت أفضل مما تخيّلت.", stars: 5 },
  { name: "خالد الشامسي", role: "مدير عمليات، مجموعة الضيافة الدولية", text: "أعمل معهم منذ ثلاث سنوات لإنتاج محتوى فنادقنا في دبي وأبوظبي. الاحترافية والإبداع ثابتان في كل مشروع.", stars: 5 },
  { name: "ليلى عبدالله", role: "صاحبة Leil Bridal", text: "التصوير السينمائي لحفل زفافي كان أجمل من أحلامي. سيد مظهر زيدي أمسك كل لحظة بعدسته بمهارة استثنائية.", stars: 5 },
];

export default function ArTestimonialsPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>آراء عملائنا</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>ماذا يقول عملاؤنا</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          أكثر من 2,400 مشروع في الإمارات — من الشركات الكبرى إلى الأفراد الذين وثقوا أهم لحظاتهم معنا.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ color: "var(--gold)", fontSize: "1.2rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>"{t.text}"</p>
              <div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
            احجز استشارة مجانية
          </a>
        </div>
      </section>
    </>
  );
}
