import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас | Фахад Икбал Батт и Сайед Мазхар Зайди — Backyard Studio Дубай",
  description: "Backyard Studio Official основана в 2019 году Фахадом Икбалом Баттом (НКИ) и Сайедом Мазхаром Зайди (IMDB nm14029494). Более 2,400 проектов по всем эмиратам ОАЭ. Лицензия GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "О нас — Backyard Studio Official | Дубай",
    description: "Основатели Фахад Икбал Батт и Сайед Мазхар Зайди. 2,400+ проектов, лицензия GCAA.",
    url: "https://www.backyardstudioofficial.com/ru/about",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Команда Backyard Studio Official — Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О нас — Backyard Studio Official Дубай",
    description: "Фахад Икбал Батт и Сайед Мазхар Зайди. 2,400+ проектов. Лицензия GCAA.",
    images: ["/og-image.jpg"],
  },
};

export default function RuAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "О нас", "item": "https://www.backyardstudioofficial.com/ru/about" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        "@id": "https://www.backyardstudioofficial.com/#fahad-iqbal-butt",
        "name": "Фахад Икбал Батт",
        "alternateName": "Fahad Iqbal Butt",
        "jobTitle": "Директор и главный фотограф",
        "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
        "description": "Режиссёр и фэшн-фотограф, выпускник кинофакультета Национального колледжа искусств. Основатель Backyard Studio Official.",
        "url": "https://www.backyardstudioofficial.com/ru/about",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        "@id": "https://www.backyardstudioofficial.com/#syed-mazhar-zaidi",
        "name": "Сайед Мазхар Зайди",
        "alternateName": "Syed Mazhar Zaidi",
        "jobTitle": "Директор постпродакшна",
        "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
        "description": "Режиссёр и документалист с 20+ летним опытом. Магистр массовых коммуникаций, Университет GC. 50+ музыкальных клипов и рекламных роликов.",
        "sameAs": "https://www.imdb.com/name/nm14029494/",
        "url": "https://www.backyardstudioofficial.com/ru/about",
      }) }} />

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

      {/* Studio BTS */}
      <img src="/images/team/studio-bts.webp" alt="Backyard Studio Official — закулисье съёмок в Дубае" style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} loading="lazy" />

      {/* Founders detail */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "2.5rem", textAlign: "center" }}>Руководство студии</h2>

          <div style={{ marginBottom: "3rem", display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <img src="/images/team/fahad.webp" alt="Фахад Икбал Батт — основатель Backyard Studio" style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "4px", border: "2px solid rgba(212,175,55,0.3)" }} loading="lazy" />
            <div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>Фахад Икбал Батт — Творческий директор и основатель</h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1rem" }}>
                Фахад Икбал Батт окончил факультет кино и телевидения Национального колледжа искусств (NCA) в Лахоре — одного из ведущих художественных вузов Южной Азии. После многолетней работы в области фэшн-фотографии и кинопроизводства он основал Backyard Studio Official в 2019 году с чёткой миссией: создавать визуальный контент мирового уровня для рынков Персидского залива.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                С момента переезда студии в Дубай в 2023 году Фахад лично руководит более чем 800 проектами в ОАЭ — от брендовых фильмов для компаний в DIFC до съёмок в пустынных кемпах и на прибрежных локациях.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <img src="/images/team/mazhar.webp" alt="Сайед Мазхар Зайди — Backyard Studio" style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "4px", border: "2px solid rgba(212,175,55,0.3)" }} loading="lazy" />
            <div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>Сайед Мазхар Зайди — Директор по постпродакшну</h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1rem" }}>
                Сайед Мазхар Зайди — режиссёр и документалист с более чем 20-летним опытом. Магистр массовых коммуникаций Университета GC. Более 50 музыкальных клипов, рекламных роликов и документальных фильмов. Профиль на IMDB: <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>nm14029494</a>.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                В Backyard Studio Мазхар руководит всем постпродакшном: монтаж, цветокоррекция, звуковой дизайн, моушн-графика.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>Наш подход</h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Мы работаем по модели полного цикла (Full-Service): начинаем с детального брифинга для понимания целей проекта, переходим к препродакшну (сценарий, раскадровка, подбор команды и локаций), затем съёмочные дни и наконец полный постпродакшн. Финальный проект передаётся в нескольких форматах, подходящих для всех цифровых платформ и телевещания.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            Мы работаем по всем 7 эмиратам ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Наши съёмки охватывают деловые центры, роскошные отели, пустынные локации и побережье Аравийского залива. Лицензия GCAA позволяет нам легально снимать с дрона во всех разрешённых зонах страны.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            Прозрачность в ценообразовании — один из наших ключевых принципов. Никаких скрытых платежей. Детализированная смета предоставляется в течение 2 часов после запроса и включает каждую статью расходов: съёмочная группа, оборудование, постпродакшн и транспорт. После подписания договора каждый клиент получает персонального менеджера проекта, который сопровождает его от первого письма до финальной передачи файлов.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "3rem 2rem", background: "#111", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2 400+", label: "реализованных проектов" },
            { num: "7", label: "эмиратов ОАЭ" },
            { num: "8+", label: "лет опыта" },
            { num: "2 часа", label: "время ответа" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "2.25rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
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
