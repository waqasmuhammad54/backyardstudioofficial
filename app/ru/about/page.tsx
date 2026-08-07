import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас — Backyard Studio Official | Фахад Икбал Батт и Сайед Мазар Зайди — Дубай",
  description: "Узнайте о Backyard Studio Official — ведущей креативной продюсерской компании в Дубае. Основана в 2019 году Фахадом Икбалом Баттом и Саедом Мазаром Зайди. Более 2 400 проектов. Аэросъёмка, одобренная GCAA.",
  keywords: ["Фахад Икбал Батт", "Сайед Мазар Зайди", "продюсерская компания Дубай", "команда Backyard Studio", "история студии", "лучшая фотостудия Дубай"],
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
    description: "Ведущая креативная продюсерская компания Дубая. Основана 2019. Более 2 400 проектов, аэросъёмка одобрена GCAA, команда с опытом 20+ лет.",
    url: "https://www.backyardstudioofficial.com/ru/about",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Команда Backyard Studio Official — Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О нас — Backyard Studio Official — Дубай",
    description: "Основана в 2019 году Фахадом Икбалом Баттом. Более 2 400 проектов.. Аэросъёмка, одобренная GCAA.",
    images: ["/og-image.jpg"],
  },
};

const TEAM_RU = [
  { name: "Фахад Икбал Батт", role: "Основатель и Генеральный директор", photo: "/images/team/fahad.webp", bio: "Кинорежиссёр и креативный предприниматель, изучавший кино и телевидение в Национальном колледже искусств Лахора. Основал студию в 2019 году с видением, объединяющим эмоцию, мастерство и кинематографическое повествование." },
  { name: "Сайед Мазар Зайди", role: "Сооснователь и Творческий директор", photo: "/images/team/mazhar.webp", bio: "Кинорежиссёр и документалист с 20+ годами опыта. Задокументировал 900+ историй жертв раздела Индии и 84 сикхских храма. Кинооператор более чем в 50 музыкальных клипах. Сотрудничал с 40+ международными брендами.", link: { label: "Профиль на IMDB", href: "https://www.imdb.com/name/nm14029494/" } },
  { name: "Шабана Башир", role: "Арт-директор", photo: "/images/team/shabana.webp", bio: "Руководит визуальной идентичностью и творческим направлением во всех проектах студии, обеспечивая последовательность и изысканность в каждом кадре." },
  { name: "Бехрам Шахид", role: "Директор по продажам", photo: "/images/team/behram.webp", bio: "Возглавляет стратегию продаж и привлечение клиентов на рынке ОАЭ, выстраивая долгосрочные партнёрства с брендами и агентствами." },
  { name: "Вакас Мухаммад", role: "Директор по стратегии", photo: "/images/team/waqas.webp", bio: "Определяет направление роста студии — от позиционирования на рынке и цифровой стратегии до операционных рамок, обеспечивших выполнение 2 400+ проектов." },
  { name: "Рим", role: "Менеджер по развитию бизнеса", photo: "/images/team/reem.webp", bio: "Руководит партнёрствами с клиентами и развитием бизнеса на рынке ОАЭ, связывая бренды с кинематографическими производственными возможностями студии." },
  { name: "Раджа", role: "Менеджер по развитию бизнеса", photo: "/images/team/rajaa.webp", bio: "Открывает новые деловые возможности и строит стратегические отношения, помогая брендам по всем 7 эмиратам получить доступ к мировому уровню производства." },
];

const MILESTONES_RU = [
  { year: "2019", event: "Основание в Лахоре — музыкальные клипы, фэшн-фильмы и рекламные ролики" },
  { year: "2021", event: "Расширение на корпоративный и брендированный контент по всему Пакистану" },
  { year: "2023", event: "Запуск операций в ОАЭ — штаб-квартира в Дубае" },
  { year: "2024", event: "Добавлена аэросъёмка — сервис, одобренный GCAA, по всему ОАЭ" },
  { year: "2025", event: "Более 2 400 реализованных проектов по всем 7 эмиратам" },
  { year: "2026", event: "Выход на международные рынки — Европа и Азия" },
];

export default function RuAboutPage() {
  const personSchemaFahad = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fahad Iqbal Butt",
    "jobTitle": "Основатель и Генеральный директор",
    "url": "https://www.backyardstudioofficial.com/ru/about",
    "image": "https://www.backyardstudioofficial.com/images/team/fahad.webp",
    "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
    "alumniOf": [{ "@type": "EducationalOrganization", "name": "National College of Arts, Lahore" }],
  };
  const personSchemaMazhar = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Mazhar Zaidi",
    "jobTitle": "Сооснователь и Творческий директор",
    "url": "https://www.backyardstudioofficial.com/ru/about",
    "image": "https://www.backyardstudioofficial.com/images/team/mazhar.webp",
    "sameAs": ["https://www.imdb.com/name/nm14029494/"],
    "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaFahad) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaMazhar) }} />

      {/* HERO */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1.5rem", textTransform: "uppercase" }}>Наша история</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.15, marginBottom: "2rem" }}>
            Построены на<br /><span style={{ color: "var(--gold)" }}>Видении.</span><br />Движимы Мастерством.
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "680px" }}>
            Backyard Studio Official основана в 2019 году режиссёром и фэшн-фотографом Фахадом Икбалом Баттом. За несколько лет студия выросла из небольшого творческого пространства в Лахоре в один из ведущих продюсерских домов Дубая — обслуживая бренды, артистов и компании по всем 7 эмиратам.
          </p>
        </div>
      </section>

      {/* FAHAD SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", textTransform: "uppercase" }}>Основатель</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.1 }}>Фахад Икбал Батт</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Фахад Икбал Батт — креативный предприниматель, кинорежиссёр и фэшн-фотограф, сочетающий академическую подготовку в области моды и кинопроизводства. Он получил степень бакалавра по дизайну одежды под руководством UK Excel и прошёл специализированное обучение в области кино и телевидения в Национальном колледже искусств (NCA) Лахора — одном из старейших и наиболее уважаемых творческих учебных заведений Пакистана.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Фахад основал Backyard Studio в Лахоре в 2019 году с чёткой целью: создавать визуальный контент, который сочетает творчество, эмоцию и современное повествование. Студия работала над музыкальными клипами, рекламными роликами, короткометражками, корпоративным контентом, свадебными и брендовыми съёмками.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Помимо режиссуры, Фахад накопил обширный опыт в фэшн-фотографии, сотрудничая с журнальными фотографами и креативными специалистами в индустрии моды. Сегодня он воплощает кинематографические концепции для брендов, компаний, артистов и творческих личностей в ОАЭ.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>Связаться с нами</a>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>WhatsApp Фахад</a>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/fahad.webp" alt="Фахад Икбал Батт — Основатель и CEO Backyard Studio Official Дубай" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.2rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>Фахад Икбал Батт</p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", marginTop: "0.25rem", textTransform: "uppercase" }}>Основатель и CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAZHAR SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/mazhar.webp" alt="Сайед Мазар Зайди — Сооснователь Backyard Studio Дубай" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1.2rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>Сайед Мазар Зайди</p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.15em", marginTop: "0.25rem", textTransform: "uppercase" }}>Сооснователь и Creative Head</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", textTransform: "uppercase" }}>Сооснователь</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.1 }}>Сайед Мазар Зайди</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Сайед Мазар Зайди — кинорежиссёр, документалист и продюсер с более чем 20-летним опытом работы в Пакистане и Персидском заливе. Окончил Национальный колледж искусств (NCA) в Лахоре и получил степень магистра по массовым коммуникациям в GC University — одном из наиболее уважаемых академических учреждений Пакистана.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Его знаковая документальная работа охватывает более 900 историй жертв индо-пакистанского раздела и 84 сикхских гурудвары по всему Пакистану — один из самых глубоких проектов культурной документации в истории южноазиатского кинематографа.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Мазар работал оператором, монтажёром и колористом в более чем 50 музыкальных клипах и рекламных роликах, а также сотрудничал с более чем 40 отечественными и международными брендами. Его верифицированные кредиты на IMDB охватывают рекламу, короткометражки, музыкальные клипы и документальный брендированный контент.
              </p>
            </div>
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noreferrer" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", marginTop: "2rem" }}>Профиль на IMDB →</a>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", textTransform: "uppercase" }}>Наш путь</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>Ключевые Вехи</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {MILESTONES_RU.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--gold)", minWidth: "56px", lineHeight: 1 }}>{m.year}</div>
                <div style={{ flex: 1, paddingTop: "0.2rem" }}>
                  <div style={{ width: "100%", height: "1px", background: "rgba(212,175,55,0.15)", marginBottom: "0.75rem" }} />
                  <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", textTransform: "uppercase" }}>Команда</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>Познакомьтесь с Нашей Командой</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {TEAM_RU.map((member) => (
              <div key={member.name} style={{ border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", position: "relative" }}>
                  <img src={member.photo} alt={member.name + " — " + member.role + " — Backyard Studio Дубай"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.75rem", textTransform: "uppercase" }}>{member.role}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
                  {member.link && (
                    <a href={member.link.href} target="_blank" rel="noreferrer" style={{ display: "inline-block", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.75rem", textDecoration: "none" }}>{member.link.label} →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "3.5rem 2rem", background: "#111", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2 400+", label: "выполненных проектов" },
            { num: "7", label: "эмиратов покрытия" },
            { num: "6+", label: "лет опыта" },
            { num: "2 часа", label: "гарантия ответа" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", marginTop: "0.5rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a", textAlign: "center" }}>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem", textTransform: "uppercase" }}>✦ Создадим вместе</p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem" }}>Начните Ваш Проект<br /><span style={{ color: "var(--gold)" }}>с Нами Сегодня</span></h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>Получить бесплатное предложение</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>WhatsApp Фахад</a>
        </div>
      </section>
    </>
  );
}
