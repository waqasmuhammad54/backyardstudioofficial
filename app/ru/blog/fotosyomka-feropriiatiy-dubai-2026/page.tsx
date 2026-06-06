import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосъёмка мероприятий в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональный фотограф на мероприятие в Дубае от AED 2 500. Корпоративы, конференции, выставки, вечеринки — быстрая доставка, хайлайт-пакет в тот же день.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotosyomka-feropriiatiy-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotosyomka-feropriiatiy-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/conference-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосъёмка мероприятий в Дубае 2026 | Backyard Studio",
    description: "Корпоративы, конференции, выставки в Дубае — профессиональный фотограф от AED 2 500. Хайлайт в тот же день.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EventsPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотограф на корпоратив в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены на фотосъёмку корпоративных мероприятий в Дубае начинаются от AED 2 500 за полдня (до 4 часов). Полный день (8 часов) обходится от AED 4 500 до AED 7 500 в зависимости от масштаба события, количества фотографов и требований к скорости обработки материала.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро вы доставляете фотографии с мероприятия?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Хайлайт-пакет из 20–30 обработанных фотографий — в тот же день, в течение 4–6 часов после завершения мероприятия. Полная галерея доставляется в течение 3–5 рабочих дней. Для срочных заказов (24 часа) доступна экспресс-обработка.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы в DWTC и других крупных площадках Дубая?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Мы регулярно работаем в Dubai World Trade Centre (DWTC), Madinat Jumeirah, Atlantis The Palm, JW Marriott Marquis, Armani Hotel, Conrad Dubai и других ведущих площадках. У нас есть опыт работы с требованиями безопасности и протоколом этих объектов.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли заказать и фото, и видео на одно мероприятие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, и это наш самый востребованный формат. Комбо-пакет «фото + видео» экономически выгоднее раздельного заказа и гарантирует единый визуальный стиль обоих материалов. Подробнее — на странице цен.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотосъёмка мероприятий в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Ведущий фотограф — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotosyomka-feropriiatiy-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a> / <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a> / <span>Фотосъёмка мероприятий</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СЪЁМКА МЕРОПРИЯТИЙ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          Фотосъёмка мероприятий в Дубае 2026
          <br /><span style={{ color: "var(--gold)" }}>Корпоративы, конференции, запуски продуктов</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Fahad Iqbal Butt</span><span>Июнь 2026</span><span>7 мин. чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>📸</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Каждое мероприятие — это инвестиция. Аренда площадки, кейтеринг, décor, спикеры — всё это стоит денег и времени. Но если фотографии после события выглядят посредственно, вся работа теряет половину своей ценности: нет материала для пресс-релиза, нет контента для соцсетей, нет портфолио для следующего события.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Фотограф на мероприятие в Дубае — это не просто человек с камерой. Это понимание протокола, умение работать в условиях сложного смешанного освещения больших залов, скорость ориентирования в незнакомом пространстве и способность доставить хайлайт-галерею, пока ваши гости ещё обсуждают событие в соцсетях.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Какие мероприятия мы снимаем в Дубае
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { icon: "🏢", label: "Корпоративные мероприятия", sub: "Годовые вечеринки, тимбилдинги, награждения" },
            { icon: "🎤", label: "Конференции и форумы", sub: "Спикеры, сессии, нетворкинг" },
            { icon: "🚀", label: "Запуск продуктов", sub: "Product launch, пресс-конференции" },
            { icon: "🎪", label: "Выставки", sub: "DWTC, Expo City, стенды и экспозиции" },
            { icon: "🎊", label: "Торжественные вечера", sub: "Гала-ужины, charity events" },
            { icon: "🏨", label: "Открытие объектов", sub: "Отели, рестораны, офисы" },
          ].map(({ icon, label, sub }) => (
            <div key={label} style={{ padding: "1.25rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "4px", textAlign: "center" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{icon}</div>
              <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>{label}</div>
              <div style={{ color: "rgba(245,240,225,0.5)", fontSize: "0.8rem" }}>{sub}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Площадки Дубая, где мы работаем регулярно
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          У нас есть опыт работы на крупнейших event-площадках эмирата. Это важно: каждая площадка имеет свои правила аккредитации, особенности освещения и логистику для съёмочных бригад. Мы знаем, как работать в Dubai World Trade Centre (DWTC) во время крупных выставок — GITEX, Arab Health, Big 5, Cityscape — и умеем добывать сильные кадры в условиях толпы.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {["Dubai World Trade Centre (DWTC)", "Madinat Jumeirah", "Atlantis The Palm", "JW Marriott Marquis", "Armani Hotel Downtown", "Conrad Dubai", "Bulgari Resort", "Sofitel Downtown", "Expo City Dubai", "Address Hotels"].map((venue) => (
            <div key={venue} style={{ padding: "0.6rem 1rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "2px", color: "rgba(245,240,225,0.7)", fontSize: "0.875rem" }}>
              {venue}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Хайлайт в тот же день — почему это важно
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Пик вовлечённости в соцсетях приходится на первые 2–3 часа после события. Публикация хайлайт-галереи на следующий день — это потерянный момент. Наша стандартная услуга включает пакет из 20–30 полностью обработанных фотографий, готовых к публикации, в течение 4–6 часов после завершения мероприятия.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Для крупных событий с несколькими залами мы задействуем двух фотографов с чётким разделением зон. Это гарантирует полное покрытие без пробелов — от регистрации гостей до финального фуршета.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          Цены на фотосъёмку мероприятий в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "Полдня", detail: "До 4 часов / 1 фотограф / 100–150 фото / доставка 24 ч", price: "AED 2 500" },
              { pkg: "Полный день", detail: "До 8 часов / 1 фотограф / 250+ фото / хайлайт в тот же день", price: "AED 4 500 – 6 000" },
              { pkg: "2 фотографа", detail: "Полный день / многозальные мероприятия / 400+ фото", price: "AED 8 000 – 11 000" },
              { pkg: "Фото + Видео", detail: "1 фотограф + 1 видеограф / хайлайт-ролик 2–3 мин", price: "AED 7 500 – 12 000" },
            ].map(({ pkg, detail, price }) => (
              <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
                <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
                <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "right" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>Частые вопросы</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит фотограф на корпоратив в Дубае?", a: "От AED 2 500 за полдня. Полный день — от AED 4 500. Комбо-пакет фото+видео от AED 7 500." },
            { q: "Как быстро доставляются фотографии?", a: "Хайлайт-пакет (20–30 фото) — в тот же день. Полная галерея — в течение 3–5 рабочих дней." },
            { q: "Работаете ли вы в DWTC и других крупных площадках?", a: "Да. У нас есть опыт работы во всех ведущих event-площадках Дубая, включая DWTC, Madinat Jumeirah, Atlantis и Expo City." },
            { q: "Можно ли заказать фото и видео вместе?", a: "Да. Комбо-пакеты экономически выгоднее и гарантируют единый визуальный стиль." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>Планируете мероприятие в Дубае?</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>Свяжитесь с нами заранее — лучшие даты бронируются за 2–4 недели.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp</a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>Цены</a>
          </div>
        </div>
      </article>
    </>
  );
}
