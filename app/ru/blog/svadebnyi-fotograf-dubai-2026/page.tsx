import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Свадебный фотограф и видеограф в Дубае 2026 — как выбрать и сколько стоит",
  description:
    "Полный гид по выбору свадебного фотографа и видеографа в Дубае. Реальные цены в дирхамах, чем отличается кинематографическое видео от репортажного, и почему команда Backyard Studio снимает более 250 свадеб в год.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Свадебный фотограф в Дубае 2026",
    description:
      "Как найти идеального свадебного фотографа в Дубае — цены, стиль съёмки и главные вопросы перед бронированием.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WeddingPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит свадебная съёмка в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены на свадебную съёмку в Дубае начинаются от AED 3 500 за базовый пакет с одним фотографом на несколько часов. Комплексные пакеты с кинематографическим видео, предсвадебной фотосессией и фотокнигой обойдутся от AED 12 000 до AED 35 000 и выше.",
        },
      },
      {
        "@type": "Question",
        name: "Чем отличается кинематографическое свадебное видео от репортажного?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Репортажное видео фиксирует весь день в хронологическом порядке. Кинематографическое монтируется как короткий фильм — с тщательно подобранной музыкой, художественными переходами и акцентом на эмоциональные моменты. Именно его смотрят снова и снова.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли в Backyard Studio русскоговорящие сотрудники?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наша команда работает с клиентами на русском, арабском и английском языках. Мы понимаем культурные традиции русскоязычных пар и умеем снимать как европейские, так и смешанные церемонии.",
        },
      },
      {
        "@type": "Question",
        name: "За сколько нужно бронировать свадебного фотографа в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Рекомендуем бронировать минимум за 6 месяцев, а в высокий сезон (октябрь–март) — за год. Ранее бронирование гарантирует вам предпочтительную команду и возможность провести предсвадебную фотосессию.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Свадебный фотограф и видеограф в Дубае 2026 — как выбрать и сколько стоит",
    author: {
      "@type": "Person",
      name: "Fahad Iqbal Butt",
      jobTitle: "Творческий директор — Backyard Studio Official",
    },
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
    },
    datePublished: "2026-05-01",
    dateModified: "2026-05-29",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
          <span>Свадебный фотограф в Дубае 2026</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СВАДЕБНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Свадебный фотограф и видеограф в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Как выбрать и сколько это стоит</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>1 мая 2026</span>
          <span>10 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>💍</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — один из самых популярных городов мира для свадеб среди русскоговорящих пар.
          Тёплый климат с октября по март, роскошные отели, потрясающая архитектура и близость к морю
          создают для фотографа идеальные условия. Но именно здесь совершить ошибку при выборе
          фотографа особенно обидно — ведь поменять результат уже не получится.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          За семь лет работы команда Backyard Studio Official сняла более 2 400 проектов в ОАЭ,
          из которых несколько сотен — свадьбы и помолвки. Этот гид — честный разбор того, как
          устроен рынок свадебной съёмки в Дубае, сколько это стоит и как не пожалеть о выборе.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Почему снимать свадьбу в Дубае — особая задача?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Первое, с чем сталкивается любой фотограф в Дубае — это свет. Летом он безжалостно резкий,
          зимой даётся золотой час после 16:00, который делает любую фотографию сказочной. Опытный
          фотограф строит весь план съёмки вокруг этого момента.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Второе — культурный контекст. Дубай — мультинациональный город, и свадьбы здесь бывают
          очень разными: арабские традиционные церемонии, европейские свадьбы в ресторанах на 40 человек,
          грандиозные индийские торжества с тремя днями и тысячей гостей, смешанные пары с элементами
          нескольких культур. Каждый формат требует разного подхода и опыта.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Фахад Икбал Батт, творческий директор Backyard Studio: "Мы не приходим на свадьбу незнакомцами.
          Минимум за две недели до торжества мы проводим встречу с парой — иногда две-три встречи.
          Нам важно понять не только хронологию дня, но и то, как вы смеётесь, кто из гостей точно
          должен попасть в кадр, и какую историю вы хотите рассказать своим детям через двадцать лет."
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Кинематографическое видео или репортаж — что выбрать?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Репортажное видео фиксирует всё подряд: утренние сборы, церемонию, банкет, первый танец,
          торт. Хронологически, максимально полно. Это ценный архив, но смотреть его целиком через
          год захочет не каждый.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Кинематографическое видео — это уже работа режиссёра монтажа. Из нескольких часов съёмки
          выбираются самые сильные эмоциональные моменты, выстраивается нарратив, подбирается музыка,
          которая попадает точно в настроение. Итог — 5-10 минут, которые вы будете смотреть с
          мурашками каждый год в годовщину.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Наша рекомендация — брать оба формата. Репортаж даёт полноту, кинофильм даёт эмоцию.
          В наших пакетах мы часто объединяем их в одно предложение.
        </p>

        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem", marginTop: "2rem" }}>
          Аэросъёмка дроном — когда это действительно нужно?
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          Сайед Мазхар Зайди, операционный директор Backyard Studio, объясняет: "Дрон оправдан,
          когда у вас красивый внешний вид площадки — вилла с бассейном, ресторан на крыше,
          пляжная церемония или большой парк. В зале отеля снимать дроном нет смысла. Наша команда
          лицензирована GCAA и знает, в каких зонах Дубая полёты разрешены без дополнительных
          согласований." Стоимость аэросъёмки — от AED 1 500 как дополнение к любому пакету.
        </p>

        {/* Pricing */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Цены на свадебную съёмку в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
            Сравнение пакетов
          </h3>
          {[
            { pkg: "Базовый", detail: "1 фотограф / 4 часа / цифровые фото", price: "AED 3 500 – 5 500" },
            { pkg: "Стандарт", detail: "Фото + видео / 8 часов / видео 5 мин", price: "AED 8 000 – 14 000" },
            { pkg: "Комплексный", detail: "Полный день / кинофильм + фотокнига", price: "AED 16 000 – 28 000" },
            { pkg: "Премиум", detail: "Предсвадебная съёмка + дрон + highlight reel", price: "AED 28 000 – 45 000" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
              <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>{price}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.875rem", color: "rgba(245,240,225,0.55)", marginBottom: "2.5rem" }}>
          * Цены ориентировочные. Точный расчёт — по запросу в WhatsApp, ответим в течение двух часов.
        </p>

        {/* Checklist */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          8 вопросов, которые нужно задать фотографу перед подписанием договора
        </h2>
        <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {[
            "Есть ли у вас опыт съёмки в нашей локации?",
            "Кто будет снимать, если вы заболеете в день свадьбы?",
            "Есть ли резервная техника на случай поломки?",
            "Сколько времени займёт обработка и передача материала?",
            "Каковы условия отмены и возврата предоплаты?",
            "Лицензирован ли ваш дрон для съёмки в ОАЭ (GCAA)?",
            "Сколько готовых фотографий мы получим в итоге?",
            "Можно ли встретиться до свадьбы, чтобы познакомиться лично?",
          ].map((q, i) => (
            <li key={i} style={{ color: "rgba(245,240,225,0.85)" }}>{q}</li>
          ))}
        </ol>

        {/* Locations */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Лучшие локации для свадебной фотосессии в Дубае
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Не все красивые места в Дубае одинаково доступны для съёмки. Вот несколько проверенных локаций:
        </p>
        <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem" }}>
          {[
            { loc: "Дубайская Рамка (Dubai Frame)", note: "Нужно разрешение, лучший час — час до заката" },
            { loc: "Пляж Мерсер (Meraas La Mer Beach)", note: "Открытый доступ, идеален для золотого часа" },
            { loc: "Бухта Дубай-Крик (Dubai Creek Harbour)", note: "Город на фоне воды, фантастический фон" },
            { loc: "Аль-Кудра, пустыня", note: "60 км от центра, дюны и безлюдные просторы" },
            { loc: "Downtown Dubai / Бурдж-Халифа", note: "Тербует разрешение муниципалитета Дубая" },
          ].map(({ loc, note }) => (
            <li key={loc} style={{ color: "rgba(245,240,225,0.85)" }}>
              <strong style={{ color: "var(--cream)" }}>{loc}</strong> — {note}
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Часто задаваемые вопросы
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "Сколько стоит свадебная съёмка в Дубае?", a: "От AED 3 500 за базовый пакет до AED 45 000+ за премиум с дроном, предсвадебной сессией и кинофильмом." },
            { q: "Чем отличается кинематографическое видео от репортажного?", a: "Репортаж снимает всё подряд. Кинофильм — монтируется как короткое кино с музыкой и лучшими моментами. Оба формата в нашей студии можно заказать вместе." },
            { q: "Есть ли в Backyard Studio русскоговорящие сотрудники?", a: "Да, мы работаем с клиентами на русском, арабском и английском языках." },
            { q: "За сколько нужно бронировать?", a: "Минимум за 6 месяцев, в высокий сезон (октябрь–март) — желательно за год." },
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
            Нужна бесплатная консультация?
          </h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>
            Напишите нам в WhatsApp — ответим в течение двух часов. Обсудим вашу свадьбу, локацию и бюджет.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>
              Написать в WhatsApp
            </a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>
              Посмотреть цены
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
