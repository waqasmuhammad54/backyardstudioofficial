import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Съёмка недвижимости в Дубае 2026 — Цены на фото и видео | Backyard Studio",
  description: "Профессиональная съёмка недвижимости в Дубае от 2 500 AED. Видеотуры по объектам, аэросъёмка (лицензия GCAA), застройщики, элитная недвижимость. Реальные цены 2026.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/blog/semka-nedvizhimosti-dubai-2026" },
  openGraph: {
    title: "Съёмка недвижимости в Дубае 2026 | Backyard Studio",
    description: "От квартир до элитных вилл и проектов застройщиков — полный гид по съёмке недвижимости в Дубае и ОАЭ.",
    type: "article",
    locale: "ru_RU",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит съёмка недвижимости в Дубае?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Профессиональная фотосъёмка недвижимости в Дубае начинается от 2 500 AED. Видеотур по квартире — от 3 500 AED. Полное производство видео для элитной виллы с аэросъёмкой и съёмкой на закате — 8 000–25 000 AED. Рекламные кампании для застройщиков и строящихся объектов начинаются от 25 000 AED в зависимости от масштаба проекта."
      }
    },
    {
      "@type": "Question",
      "name": "Нужна ли лицензия для аэросъёмки недвижимости в Дубае?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да, коммерческая аэросъёмка в ОАЭ требует лицензии GCAA (Генеральное управление гражданской авиации). Для съёмки в центральных районах Дубая — Downtown, Palm Jumeirah, Marina — также требуется предварительное разрешение DCAA (Авиационное управление Дубая). Backyard Studio имеет полную коммерческую лицензию GCAA и берёт на себя оформление всех разрешений для каждого объекта."
      }
    },
    {
      "@type": "Question",
      "name": "Что включает профессиональная съёмка элитной недвижимости в Дубае?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Для элитной недвижимости в Дубае стандартный пакет включает: полный кинематографический видеотур по интерьеру (2–4 минуты), аэросъёмку с дрона для показа расположения и масштаба, съёмку на закате для внешнего вида объекта, профессиональный монтаж с цветокоррекцией, лицензированную музыку и версии для разных платформ — 16:9 для сайта, 9:16 для Instagram Stories, 4:5 для Instagram-ленты."
      }
    },
    {
      "@type": "Question",
      "name": "Какие районы Дубая вы покрываете для съёмки недвижимости?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Мы снимаем по всему Дубаю: Downtown Dubai, Dubai Marina, Palm Jumeirah, DIFC, Jumeirah Bay Island, Emirates Hills, Dubai Hills Estate, Arabian Ranches, Business Bay. Также работаем в Абу-Даби (остров Саадийат, остров Яс, Al Raha Beach), Рас-эль-Хайме (Al Marjan Island) и по всем ОАЭ для крупных проектов застройщиков."
      }
    },
  ]
};

const SECTIONS = [
  {
    heading: "Почему рынок недвижимости Дубая требует профессионального видео",
    body: `Рынок недвижимости Дубая в 2026 году по-настоящему глобален. Покупатель пентхауса на Palm Jumeirah может принимать решение из Москвы, Лондона или Мумбаи — видя объект только на экране. Эта реальность кардинально изменила роль фото и видеосъёмки для застройщиков и агентов. Стандартного фотоальбома больше недостаточно. Покупатель хочет «пройтись» по объекту виртуально, прежде чем назначить просмотр.

В нашей практике — более 2 400 проектов по всем ОАЭ — мы видим чёткую закономерность: объекты с профессиональным кинематографическим видео продаются быстрее и привлекают более серьёзные запросы. В сегменте выше 5 миллионов AED объект без профессионального видео фактически невидим для международного покупателя, который формирует спрос на элитном рынке Дубая.`
  },
  {
    heading: "Что входит в профессиональную съёмку недвижимости",
    body: `Стандартный пакет съёмки недвижимости в Дубае включает полный интерьерный видеотур на кинооборудовании, профессиональный монтаж с цветокоррекцией, лицензированную музыку и доставку в нескольких форматах. Для квартир — обычно 60–90 минут съёмки и финальное видео 1,5–3 минуты плюс 30-секундная версия для соцсетей.

Аэросъёмка добавляет два элемента, которые наземная съёмка не может передать: контекст расположения — близость к Marina, горизонту, морю — и масштаб. Обзор виллы площадью 1000 кв. м с земли не передаёт ощущение территории и окружения так, как это делает аэросъёмка. Сид Мазхар Заиди руководит нашими съёмками недвижимости и за несколько лет работы в этом сегменте выработал специализированный подход к брифам застройщиков.`
  },
  {
    heading: "Как правильно подготовить объект к профессиональной съёмке",
    body: `Подготовка объекта к съёмке — один из ключевых факторов качества финального результата. Объект должен быть подготовлен до профессионального стандарта стейджинга: убраны все личные вещи и лишние предметы с поверхностей, все светильники работают и настроены на тёплый свет, бассейн чист, территория вокруг объекта убрана. Занавески и жалюзи подняты или открыты для максимального проникновения естественного света.

Мы просим передать нам планировку или описание объекта минимум за 24 часа до съёмки, чтобы спланировать логистику дня, последовательность помещений и оптимальное направление съёмки с учётом солнечного света в разное время дня. Объекты, правильно подготовленные к съёмке, дают результат на 30–40% лучше по восприятию, чем те, где подготовка была минимальной.`
  },
];

export default function SemkaNedvizhimostiDubai2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Съёмка недвижимости в Дубае 2026",
        "author": { "@type": "Person", "name": "Syed Mazhar Zaidi", "url": "https://www.backyardstudioofficial.com/about" },
        "publisher": { "@type": "Organization", "name": "Backyard Studio Official", "url": "https://www.backyardstudioofficial.com" },
        "datePublished": "2026-05-29",
        "inLanguage": "ru",
        "url": "https://www.backyardstudioofficial.com/ru/blog/semka-nedvizhimosti-dubai-2026",
      }) }} />

      {/* Hero */}
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>
          СЪЁМКА НЕДВИЖИМОСТИ · МАЙ 2026
        </div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1.5rem", lineHeight: 1.25 }}>
          Съёмка недвижимости в Дубае 2026
          <br /><span style={{ color: "var(--gold)" }}>Цены, форматы и аэросъёмка</span>
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1rem", lineHeight: 1.75 }}>
          От 2 500 AED: фото и видео для квартир, вилл и проектов застройщиков. Аэросъёмка с лицензией GCAA. Реальные цены и что входит в каждый пакет — опыт Backyard Studio из 2 400+ проектов.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem" }}>
          <span>⏱ 8 мин. чтения</span>
          <span>✍ Syed Mazhar Zaidi</span>
        </div>
      </section>

      <article style={{ padding: "3rem 2rem 5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>

          {SECTIONS.map((s, i) => (
            <div key={i} style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontWeight: 700, marginBottom: "1.25rem", lineHeight: 1.4 }}>
                {s.heading}
              </h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.75)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "1.1rem" }}>{para}</p>
              ))}
            </div>
          ))}

          {/* Pricing Table */}
          <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", padding: "2rem", margin: "2rem 0" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.35rem", marginBottom: "1.5rem" }}>
              Цены на съёмку недвижимости в Дубае 2026
            </h2>
            {[
              { type: "Фотосъёмка квартиры", price: "2 500 – 4 500 AED", desc: "Профессиональные фото с монтажом + версия для соцсетей" },
              { type: "Видеотур по квартире", price: "3 500 – 7 000 AED", desc: "Кинематографический интерьерный видеотур 1,5–3 мин." },
              { type: "Аэросъёмка (доп.)", price: "+ 1 500 – 2 500 AED", desc: "Дрон с разрешением DCAA включён в стоимость" },
              { type: "Полное производство для виллы", price: "8 000 – 20 000 AED", desc: "Аэро + съёмка на закате + кинематографический монтаж" },
              { type: "Кампания застройщика", price: "25 000 – 80 000 AED", desc: "Полный цикл: фото + видео + аэросъёмка + несколько дней" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1rem 0", borderBottom: i < 4 ? "1px solid rgba(212,175,55,0.08)" : "none", gap: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 600, fontSize: "0.95rem" }}>{row.type}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{row.desc}</div>
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "0.95rem", whiteSpace: "nowrap" }}>{row.price}</div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", marginTop: "3rem" }}>
            Часто задаваемые вопросы
          </h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} style={{ marginBottom: "1.5rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "4px" }}>
              <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.name}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.8 }}>{faq.acceptedAnswer.text}</p>
            </div>
          ))}

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem", padding: "3rem 2rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px" }}>
            <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
              Нужна съёмка недвижимости в Дубае?
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Свяжитесь с командой Backyard Studio для бесплатной консультации и расчёта стоимости вашего объекта.
            </p>
            <a href="/ru/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
              Получить предложение →
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
