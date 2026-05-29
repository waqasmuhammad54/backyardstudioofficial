import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Backyard Studio Official — продакшн-студия в Дубае",
  description: "Backyard Studio Official — творческая продакшн-студия, основанная в 2019 году. Узнайте о нашей команде, опыте и ценностях.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/about" },
};

export default function RuAboutPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
          О Backyard Studio Official
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "1rem" }}>Дубай, ОАЭ — с 2019 года</p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>Наша история</h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            Backyard Studio Official основана в 2019 году в Лахоре, Пакистан, режиссёром и фэшн-фотографом{" "}
            <strong style={{ color: "var(--cream)" }}>Фахадом Икбалом Баттом</strong>,
            окончившим факультет кино и телевидения Национального колледжа искусств. В 2023 году студия переехала в Дубай и стала одной из ведущих творческих продакшн-компаний ОАЭ.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            Постпродакшн возглавляет{" "}
            <strong style={{ color: "var(--cream)" }}>Сайед Мазхар Зайди</strong> —
            режиссёр и документалист с более чем 20-летним опытом, магистр массовых коммуникаций Университета GC. На его счету более 50 музыкальных клипов, рекламных роликов и документальных фильмов.
            Профиль IMDB:{" "}
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>nm14029494</a>.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem" }}>
            Сегодня в нашем портфолио более{" "}
            <strong style={{ color: "var(--cream)" }}>2,400 реализованных проектов</strong> по всем 7 эмиратам ОАЭ.
            Мы имеем лицензию{" "}
            <strong style={{ color: "var(--cream)" }}>GCAA</strong> на коммерческую аэросъёмку и придерживаемся мировых кинематографических стандартов в каждом проекте.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#111", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          Хотите работать с нами?
        </h2>
        <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
          Связаться с командой
        </a>
      </section>
    </>
  );
}
