import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Стоимость видеосъёмки в Дубае 2026 — реальные цены на видеопродакшн",
  description:
    "Сколько стоит профессиональная видеосъёмка в Дубае в 2026 году? Корпоративное видео, реклама, контент для соцсетей, съёмка мероприятий. Цены в дирхамах, что влияет на бюджет и как сэкономить.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/stoimost-videosemki-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/stoimost-videosemki-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Стоимость видеосъёмки в Дубае 2026",
    description:
      "Реальные цены на профессиональную видеосъёмку в Дубае — корпоративное видео, реклама, соцсети, дрон. Честный разбор от Backyard Studio.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function VideoCostRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит корпоративное видео в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Корпоративное видео в Дубае стоит от AED 8 000 за простой имиджевый ролик (2-3 минуты) до AED 80 000 за полноценный бренд-фильм с постпродакшном и графикой.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит снять контент для Instagram и TikTok в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Видео для Reels или TikTok в профессиональном исполнении стоит от AED 2 500 за один ролик. Ежемесячные пакеты из 4-8 видео выгоднее — от AED 8 000 в месяц.",
        },
      },
      {
        "@type": "Question",
        name: "Что входит в стоимость видеосъёмки в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В базовую стоимость входят: съёмочный день, монтаж, цветокоррекция и передача файлов. Дополнительно оплачиваются: разрешения на съёмку в публичных местах, аэросъёмка дроном, актёры или дикторы, лицензионная музыка, анимация и субтитры.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снять рекламный ролик в Дубае за AED 10 000?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, цифровая реклама на 15-30 секунд вполне реализуема за AED 10 000–15 000. Это подходит для digital-кампаний в соцсетях и на YouTube. Телевизионный рекламный ролик потребует бюджет от AED 40 000.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article
        style={{
          fontFamily: "Inter, sans-serif",
          maxWidth: "860px",
          margin: "0 auto",
          padding: "4rem 2rem",
          color: "var(--cream)",
          lineHeight: "1.85",
        }}
      >
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>
          {" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>
          {" / "}
          <span>Стоимость видеосъёмки в Дубае 2026</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ВИДЕОПРОДАКШН
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Стоимость видеосъёмки в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Реальные цены без воды</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Сайед Мазхар Зайди</span>
          <span>15 мая 2026</span>
          <span>9 минут чтения</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          "Сколько стоит снять видео в Дубае?" — этот вопрос нам задают ежедневно. И каждый раз мы
          замечаем одно и то же: большинство студий уклоняются от конкретики, прячась за формулировки
          вроде "зависит от задачи". Всё верно, зависит. Но это не повод не давать хотя бы ориентиры.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official работает в Дубае с 2018 года. За это время мы реализовали более
          2 400 проектов — от коротких видео для Instagram до полнометражных рекламных кампаний для
          международных брендов. Вот что мы знаем о ценах на видеопродакшн в ОАЭ в 2026 году.
        </p>

        {/* Social Media */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.25rem", marginTop: "3rem" }}>
          Контент для соцсетей (Reels, TikTok, YouTube)
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Это сейчас самый востребованный сегмент. Бренды в Дубае конкурируют за внимание
          в Инстаграм и TikTok, и планка качества выросла за последние два года.
        </p>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
          {[
            { type: "Один Reels / TikTok (30-60 сек)", price: "AED 2 500 – 5 000" },
            { type: "Пакет 4 видео в месяц", price: "AED 8 000 – 15 000" },
            { type: "YouTube-ролик (5-15 мин, full production)", price: "AED 6 000 – 18 000" },
            { type: "Контент-план на месяц (10+ видео)", price: "AED 20 000 – 40 000" },
          ].map(({ type, price }) => (
            <div key={type} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)", gap: "1rem" }}>
              <span style={{ color: "rgba(245,240,225,0.85)" }}>{type}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>{price}</span>
            </div>
          ))}
        </div>

        {/* Corporate */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.25rem", marginTop: "3rem" }}>
          Корпоративное видео
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Имиджевый ролик компании — это визитная карточка для сайта, презентаций и LinkedIn.
          Сайед Мазхар Зайди, операционный директор Backyard Studio: "Хорошее корпоративное видео
          работает 3-5 лет. Это не расход, это инвестиция, которая окупается сторицей."
        </p>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
          {[
            { type: "Имиджевое видео компании (2-3 мин)", price: "AED 8 000 – 20 000" },
            { type: "Обучающее или презентационное видео", price: "AED 6 000 – 15 000" },
            { type: "Съёмка мероприятия или конференции", price: "AED 5 000 – 25 000" },
            { type: "Бренд-фильм (Brand Film, полный цикл)", price: "AED 25 000 – 80 000" },
          ].map(({ type, price }) => (
            <div key={type} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)", gap: "1rem" }}>
              <span style={{ color: "rgba(245,240,225,0.85)" }}>{type}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>{price}</span>
            </div>
          ))}
        </div>

        {/* Commercials */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.25rem", marginTop: "3rem" }}>
          Рекламные ролики (Commercial Production)
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.25rem 1.5rem", marginBottom: "2.5rem" }}>
          {[
            { type: "Digital-реклама (15-30 сек)", price: "AED 12 000 – 35 000" },
            { type: "ТВ-рекламный ролик (30-60 сек)", price: "AED 40 000 – 120 000" },
            { type: "Автомобильная реклама (Car Commercial)", price: "AED 35 000 – 90 000" },
            { type: "Реклама недвижимости или отеля", price: "AED 25 000 – 70 000" },
          ].map(({ type, price }) => (
            <div key={type} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)", gap: "1rem" }}>
              <span style={{ color: "rgba(245,240,225,0.85)" }}>{type}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>{price}</span>
            </div>
          ))}
        </div>

        {/* What's included */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что входит в стоимость — а что нет
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Частая причина недопонимания — расхождение между «ценой съёмки» и итоговой суммой проекта.
          Вот что обычно включено:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ background: "rgba(0,180,0,0.06)", border: "1px solid rgba(0,180,0,0.2)", borderRadius: "4px", padding: "1.25rem" }}>
            <h3 style={{ color: "#4caf50", fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem" }}>✓ Обычно включено</h3>
            <ul style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.875rem", color: "rgba(245,240,225,0.75)" }}>
              <li>Съёмочный день (команда + оборудование)</li>
              <li>Базовый монтаж и цветокоррекция</li>
              <li>Передача финальных файлов</li>
              <li>Два раунда правок</li>
            </ul>
          </div>
          <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "1.25rem" }}>
            <h3 style={{ color: "var(--gold)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem" }}>+ Оплачивается отдельно</h3>
            <ul style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.875rem", color: "rgba(245,240,225,0.75)" }}>
              <li>Разрешения на съёмку в публичных местах</li>
              <li>Аэросъёмка дроном (GCAA-лицензия)</li>
              <li>Актёры, модели, дикторы</li>
              <li>Лицензионная музыка и анимация</li>
            </ul>
          </div>
        </div>

        {/* How to save */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как сэкономить на видеопродакшне в Дубае
        </h2>
        <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}>
          {[
            { tip: "Снимайте несколько задач за один съёмочный день", detail: "Имиджевый ролик + контент для соцсетей за один день — экономия 20-30%." },
            { tip: "Бронируйте в низкий сезон", detail: "Апрель–август — не пиковое время в Дубае. Многие студии дают скидки 15-25%." },
            { tip: "Готовьте чёткий бриф заранее", detail: "Расплывчатое задание = переработки и правки. Конкретный бриф экономит до 30% постпродакшн-времени." },
            { tip: "Заключайте ежемесячный договор", detail: "Контент-партнёрство на 3-6 месяцев выгоднее разовых заказов на 25-35%." },
          ].map(({ tip, detail }, i) => (
            <li key={i} style={{ color: "rgba(245,240,225,0.85)" }}>
              <strong style={{ color: "var(--cream)" }}>{tip}.</strong> {detail}
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Часто задаваемые вопросы
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит корпоративное видео в Дубае?", a: "От AED 8 000 за имиджевый ролик до AED 80 000 за бренд-фильм с полным постпродакшном." },
            { q: "Сколько стоит контент для Instagram и TikTok?", a: "От AED 2 500 за один ролик или от AED 8 000 за ежемесячный пакет из 4 видео." },
            { q: "Что входит в стоимость?", a: "Съёмочный день, монтаж и цветокоррекция входят в базовую цену. Разрешения, дрон, актёры и лицензионная музыка — дополнительно." },
            { q: "Можно ли снять рекламу за AED 10 000?", a: "Да — digital-ролик для соцсетей (15-30 сек) реализуем за AED 10 000–15 000. ТВ-реклама потребует от AED 40 000." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.7" }}>{a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
            Рассчитайте стоимость своего проекта
          </h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>
            Опишите задачу в WhatsApp — пришлём детальную смету в течение двух часов.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>
              Написать в WhatsApp
            </a>
            <a href="/ru/services" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>
              Наши услуги
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
