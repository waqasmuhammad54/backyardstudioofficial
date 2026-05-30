import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Локации для съёмки в ОАЭ | Backyard Studio Official",
  description: "Профессиональная видеосъёмка во всех 7 эмиратах ОАЭ — Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Без доплаты за выезд.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/locations" },
};

const EMIRATES = [
  { name: "Дубай", slug: "dubai", desc: "Даунтаун, Марина, Пальма Джумейра, DIFC, Бизнес Бэй и более 25 районов." },
  { name: "Абу-Даби", slug: "abu-dhabi", desc: "Остров Яс, Саадият, Корниш, Аль-Рим, ADGM и другие." },
  { name: "Шарджа", slug: "sharjah", desc: "Аль-Маджаз, Аль-Касба, набережная Шарджи, Аль-Хан." },
  { name: "Аджман", slug: "ajman", desc: "Набережная Аджмана, Аль-Джурф, Аль-Рашидия." },
  { name: "Рас-эль-Хайма", slug: "ras-al-khaimah", desc: "Город RAK, деревня Аль-Хамра, Джебель-Джайс." },
  { name: "Фуджейра", slug: "fujairah", desc: "Город Фуджейра, Дибба, побережье Хорфаккан." },
  { name: "Умм-эль-Кайвайн", slug: "umm-al-quwain", desc: "Город UAQ, район Dreamland Aqua Park." },
];

export default function RuLocationsPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>ГЕОГРАФИЯ СЪЁМОК</div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>Локации в ОАЭ</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          Снимаем во всех 7 эмиратах без дополнительной платы за выезд. Приедем туда, где нужно вам.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`}
              style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem", textDecoration: "none" }}>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{e.name}</h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>{e.desc}</p>
              <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.8rem", marginTop: "1rem", display: "block" }}>Подробнее →</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2.5rem 2rem", background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            Нужна съёмка в конкретной локации?
          </h3>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Свяжитесь с нами — выедем в любую точку ОАЭ. Работаем на натуре, в интерьере и с дроном (лицензия GCAA).
          </p>
          <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>
            Запросить стоимость →
          </a>
        </div>
      </section>
    </>
  );
}
