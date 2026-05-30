import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن باكيارد ستوديو أوفيشيال | شركة انتاج فيديو دبي",
  description: "تعرّف على استوديو باكيارد أوفيشيال — شركة الإنتاج الإبداعي الرائدة في دبي. تأسست عام 2019 على يد فهد إقبال بط وسيد مظهر زيدي.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/about" },
};

export default function ArAboutPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          عن استوديو باكيارد أوفيشيال
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "1rem" }}>دبي، الإمارات العربية المتحدة — منذ 2019</p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>قصتنا</h2>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            تأسس استوديو باكيارد أوفيشيال عام 2019 في لاهور، باكستان، على يد <strong style={{color:"var(--cream)"}}>فهد إقبال بط</strong>،
            المخرج السينمائي ومصور الأزياء الذي درس الفيلم والتلفزيون في الكلية الوطنية للفنون. انتقلنا إلى دبي عام 2023، ومنذ ذلك الحين أصبحنا واحدة من أبرز شركات الإنتاج الإبداعي في الإمارات.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            يترأس فريق ما بعد الإنتاج لدينا <strong style={{color:"var(--cream)"}}>سيد مظهر زيدي</strong>،
            المخرج السينمائي والمصور الوثائقي بخبرة تتجاوز 20 عاماً. حاصل على الماجستير في الاتصال الجماهيري من جامعة GC، وأنجز أكثر من 50 مقطع موسيقي وإعلاناً تجارياً وفيلماً وثائقياً.
            يمكنك الاطلاع على ملفه في IMDB:{" "}
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>nm14029494</a>.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem" }}>
            أنجزنا حتى اليوم أكثر من <strong style={{color:"var(--cream)"}}>2,400 مشروع</strong> عبر جميع إمارات الدولة السبع.
            نحمل رخصة <strong style={{color:"var(--cream)"}}>GCAA</strong> للتصوير الجوي التجاري، ونلتزم بمعايير الإنتاج السينمائي العالمية في كل مشروع.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#111", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
            هل تريد العمل معنا؟
          </h2>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700 }}>
            تواصل مع فريقنا
          </a>
        </div>
      </section>
    </>
  );
}
