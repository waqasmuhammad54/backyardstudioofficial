import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на производство в Дубае 2026 | Backyard Studio Official — Пакеты",
  description: "Цены на производство в Дубае 2026: свадебная съёмка от 7 500 AED, DVС от 15 000 AED, аэросъёмка от 2 000 AED, контент для соцсетей от 2 500 AED. Лицензия GCAA.",
  keywords: ["стоимость свадебной съёмки Дубай", "цена видеопроизводства ОАЭ", "аэросъёмка цена Дубай", "контент для соцсетей цена Дубай", "пакеты производства Дубай 2026"],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "Цены на производство в Дубае 2026 | Backyard Studio Official",
    description: "Прозрачные цены: свадьбы от 7 500 AED, DVC от 15 000 AED, аэросъёмка от 2 000 AED. Бесплатный расчёт за 2 часа.",
    url: "https://www.backyardstudioofficial.com/ru/pricing",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Цены на производство в Дубае — Backyard Studio Official" }],
  },
};

const PACKAGES_RU = [
  {
    category: "Свадебная фото- и видеосъёмка",
    anchor: "wedding",
    intro: "Самые востребованные свадебные пакеты в Дубае — от профессиональной фотографии до многодневного премиального производства. RAW-файлы доставляются в тот же день по каждому пакету.",
    plans: [
      { name: "Эссеншл", price: "7 500 AED", label: "Доступная фотография", desc: "Профессиональное фото + видео для камерных церемоний и регистраций.", includes: ["1 профессиональный фотограф", "1 видеограф", "3 часа съёмки", "30–40 обработанных фото", "Онлайн Drive ссылка (фото) + RAW-данные", "Полный видеофильм с мероприятия (1920×1080)", "Доставка за 10–15 рабочих дней", "RAW-данные доставляются в тот же день"], featured: false },
      { name: "Сильвер", price: "15 500 AED", label: "Съёмка полдня", desc: "Идеально для гражданских, никах-церемоний и камерных торжеств.", includes: ["2 профессиональных фотографа", "2 видеографа", "3 часа съёмки", "70–100 обработанных фото", "Полный видеофильм с мероприятия (1920×1080)", "Highlight-видео (лучшие моменты)", "Доставка за 10–15 рабочих дней", "RAW-данные доставляются в тот же день"], featured: false },
      { name: "Голд", price: "22 500 AED", label: "Полный день свадьбы", desc: "Наш самый популярный пакет — фото, видео, highlights, Reels и съёмка пары.", includes: ["2 профессиональных фотографа", "2 видеографа", "3 часа съёмки", "1 альбом (дизайн + печать + переплёт + наклейка + коробка)", "Полный видеофильм с мероприятия (1920×1080)", "Highlight-видео (лучшие моменты)", "3 обработанных Reel", "Съёмка пары", "Story-telling film + интервью (документальный фильм в стиле экспозиции 1920×1080)", "Видео + фотосессия пары под песню", "Доставка за 10–15 рабочих дней", "RAW-данные доставляются в тот же день"], featured: true },
      { name: "Платинум", price: "65 000 AED", label: "Премиальный многодневный", desc: "Идеальное свадебное производство — 3 фотографа, 3 видеографа, 2 альбома, документальный фильм.", includes: ["3 профессиональных фотографа (1× портрет, 1× альбом, 1× кандид)", "3 видеографа (1× главный, 1× кандид)", "1× документальное интервью-видео", "3–5 часов съёмки", "2 альбома (дизайн + печать + переплёт + наклейка + коробка)", "3–5 обработанных Reels", "USB с копией материалов", "Срок доставки — по длительности мероприятия"], featured: false },
    ],
  },
  {
    category: "Контент для социальных сетей",
    anchor: "social-media",
    intro: "Ежемесячные контент-пакеты и разовые съёмки для брендов ОАЭ. Фото + видео на каждой сессии.",
    plans: [
      { name: "Стартер", price: "2 500 AED", label: "Съёмка полдня", desc: "Одна локация, один образ — идеально для запуска продукта или обновления кампании.", includes: ["4 часа производства", "3–4 обработанных Reels/TikTok", "20–30 обработанных фото", "Форматы Stories и лента", "Доставка за 48 часов"], featured: false },
      { name: "Гроуз", price: "5 500 AED", label: "Полный контент-день", desc: "Самый популярный для брендов, которым нужен контент на полный месяц из одного дня.", includes: ["8 часов производства", "6–8 обработанных Reels/TikTok", "50–80 обработанных фото", "Несколько локаций и образов", "Форматы Stories, лента и реклама", "Стратегия хэштегов и подписей", "Доставка за 48 часов"], featured: true },
      { name: "Ежемесячный ретейнер", price: "от 8 000 AED/мес.", label: "Постоянный контент", desc: "2 съёмочных дня в месяц — ваш бренд никогда не останется без качественного контента.", includes: ["2 съёмочных дня в месяц", "12–16 Reels/TikTok в месяц", "100+ фото в месяц", "Планирование контент-календаря", "Подбор трендовых аудио", "Монтаж под каждую платформу", "Приоритетная доставка за 24 часа"], featured: false },
    ],
  },
  {
    category: "DVС и телевизионные рекламные ролики",
    anchor: "dvcs",
    intro: "Производство рекламных роликов вещательного качества для брендов ОАЭ. Полный творческий сервис от брифа до доставки.",
    plans: [
      { name: "Диджитал", price: "15 000 AED", label: "Цифровой DVС", desc: "Качественный коммерческий ролик для платных кампаний в Meta, TikTok и YouTube.", includes: ["Творческая концепция и сценарий", "1 съёмочный день", "Профессиональные актёры", "Основной ролик 30 сек.", "Укороченный 15 сек.", "Доставка 9:16 + 16:9 + 1:1", "2 раунда правок"], featured: false },
      { name: "Броадкаст", price: "45 000 AED", label: "ТВ и цифровой ролик", desc: "Полноформатный рекламный ролик для ТВ-вещания в ОАЭ и цифровых кампаний.", includes: ["Полная творческая разработка", "2–3 съёмочных дня", "Профессиональный кастинг", "Разведка локаций", "TVC 30 сек. + монтажи", "Спецификации для вещания", "Версии на арабском и английском", "3 раунда правок"], featured: true },
      { name: "Премиум", price: "150 000+ AED", label: "Высокобюджетный брендовый фильм", desc: "Кинематографическая брендовая кампания для люксового, государственного или корпоративного клиента.", includes: ["Многодневное производство по ОАЭ", "Полный производственный дизайн и арт-дирекция", "Большой актёрский состав и съёмочная группа", "VFX и моушн-графика", "Оригинальная музыкальная композиция", "Все форматы платформ", "Международная доставка"], featured: false },
    ],
  },
  {
    category: "Съёмка мероприятий",
    anchor: "events",
    intro: "Профессиональная фото- и видеосъёмка мероприятий по всем эмиратам ОАЭ. Доставка материалов для соцсетей в тот же день.",
    plans: [
      { name: "Эссеншл", price: "3 000 AED", label: "Мероприятие полдня", desc: "До 4 часов съёмки одной камерой с обработанным highlight-роликом.", includes: ["1 фотограф или видеограф", "4 часа съёмки", "150+ обработанных фото ИЛИ", "Highlight-видео 3 мин.", "Доставка за 48 часов"], featured: false },
      { name: "Профессиональный", price: "7 500 AED", label: "Мероприятие полный день", desc: "Фото + видео с несколькими камерами — полный пакет документации мероприятия.", includes: ["1 фотограф + 1 видеограф", "8 часов съёмки", "300+ обработанных фото", "Highlight-ролик 5 мин.", "Тизер для соцсетей в тот же день", "Нарезки Reels/TikTok", "Полная доставка за 48 часов"], featured: true },
      { name: "Производство", price: "20 000+ AED", label: "Крупномасштабное мероприятие", desc: "Съёмка полной командой для конференций, гала-вечеров, запусков продуктов и крупных событий.", includes: ["Полная мультикамерная команда", "Многодневное покрытие при необходимости", "Производство прямой трансляции", "Пакет пресс-фотографии", "Контент для соцсетей в тот же день", "Полный смонтированный фильм + фото", "Доставка в вещательном качестве"], featured: false },
    ],
  },
  {
    category: "Аэросъёмка дроном (лицензия GCAA)",
    anchor: "drone",
    intro: "Юридически лицензированная аэросъёмка по всем эмиратам ОАЭ. Все съёмки застрахованы и согласованы с властями.",
    plans: [
      { name: "Дополнение", price: "2 000 AED", label: "Добавить к любой съёмке", desc: "Добавьте лицензированный GCAA дрон к любому существующему бронированию.", includes: ["2 часа аэросъёмки", "Видеозапись в 4K", "Цветокоррекция аэронарезки", "RAW-файлы включены", "Превью в тот же день"], featured: false },
      { name: "Отдельный", price: "4 500 AED", label: "Полный день аэросъёмки", desc: "Полноформатный день аэросъёмки — идеально для недвижимости, мероприятий и кампаний.", includes: ["Полный день аэросъёмки", "Кинематографическая запись 4K", "Все разрешения ОАЭ согласованы", "Цветокоррекция highlight-нарезки", "Доставка RAW 4K файлов", "Доставка за 24 часа"], featured: true },
      { name: "Кампания", price: "12 000+ AED", label: "Мультилокационная аэросъёмка", desc: "Мультилокационная дроун-кампания для девелоперов, туризма и кино.", includes: ["Многодневный аэрорасписание", "Несколько локаций по ОАЭ", "Полная координация разрешений", "Съёмка 4K + замедленная", "Цветокоррекция материалов", "Интеграция с наземной командой"], featured: false },
    ],
  },
];

const FAQS_RU = [
  { q: "Сколько стоит свадебный фотограф в Дубае?", a: "Стоимость свадебной фото- и видеосъёмки в Дубае варьируется от 7 500 AED за пакет Эссеншл (1 фотограф, 1 видеограф, 3 часа съёмки, обработанные фото + полный видеофильм) до 65 000 AED за премиальный пакет Платинум (3 фотографа, 3 видеографа, 2 альбома, документальный фильм, 3–5 Reels). Наш самый популярный пакет Голд стоит 22 500 AED и включает 2 фотографа, 2 видеографа, 1 альбом, highlights, 3 Reels, съёмку пары и RAW-данные в тот же день." },
  { q: "Сколько стоит видеопроизводство в Дубае и ОАЭ?", a: "Стоимость видеопроизводства в Дубае широко варьируется по типу: Reels для соцсетей от 2 500 AED за съёмочный день; покрытие мероприятий от 3 000 AED; корпоративные фильмы от 15 000 AED; производство DVC от 15 000 AED для цифровых до 150 000+ AED для высокобюджетных ТВ-роликов. Бесплатный расчёт за 2 часа для любого масштаба проекта." },
  { q: "Сколько стоит DVC-ролик в ОАЭ?", a: "Цифровой видеоролик (DVC) в ОАЭ стоит от 15 000 AED за упрощённый цифровой коммерческий до 150 000+ AED за полностью произведённый брендовый фильм телевизионного класса. Основные факторы стоимости: съёмочные дни, размер актёрского состава, сложность локаций, требования к постпродакшну (VFX, анимация) и количество языковых версий." },
  { q: "Сколько стоит аэросъёмка дроном в Дубае?", a: "Лицензированная GCAA аэросъёмка дроном в Дубае начинается от 2 000 AED как дополнение к существующей съёмке, 4 500 AED за отдельный день аэросъёмки, и 12 000+ AED за мультилокационные дроун-кампании. Все наши аэросъёмки включают полные разрешения GCAA, страховку и цветокоррекцию материалов." },
  { q: "Сколько стоит создание контента для соцсетей в Дубае?", a: "Съёмки для соцсетей в Дубае начинаются от 2 500 AED за полдня, производя 3–4 Reels и 20–30 фото. Полные контент-дни — 5 500 AED, создавая месяц контента для Instagram, TikTok и YouTube Shorts. Ежемесячные ретейнер-пакеты от 8 000 AED в месяц за 2 съёмочных дня и 100+ материалов." },
  { q: "Делаете ли вы индивидуальные расчёты для проектов вне ваших пакетов?", a: "Да — большинство наших проектов рассчитывается индивидуально на основе вашего брифа. Приведённые пакеты являются отправными точками. Пришлите нам ваш бриф через WhatsApp или форму обратной связи, и мы ответим детальным расчётом в течение 2 часов." },
];

export default function RuPricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_RU.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HEADER */}
      <section style={{ background: "#111", padding: "6rem 2rem 4rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem", textTransform: "uppercase" }}>Прозрачные цены</p>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>ЦЕНЫ И ПАКЕТЫ</h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
          Стартовые пакеты для каждого типа производства. Все цены в AED без учёта НДС. Индивидуальный расчёт за 2 часа.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>WhatsApp для расчёта</a>
          <a href="/ru/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>Запросить расчёт</a>
        </div>
      </section>

      {/* PACKAGES */}
      {PACKAGES_RU.map((pkg, pi) => (
        <section key={pkg.anchor} id={pkg.anchor} style={{ padding: "4rem 2rem", background: pi % 2 === 0 ? "#0a0a0a" : "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>0{pi + 1}</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem", textTransform: "uppercase" }}>{pkg.category}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem", maxWidth: "700px", lineHeight: 1.7 }}>{pkg.intro}</p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${pkg.plans.length >= 4 ? "230px" : "260px"}, 1fr))`, gap: "1.25rem" }}>
              {pkg.plans.map((plan) => (
                <div key={plan.name} style={{ position: "relative", padding: "2rem", border: plan.featured ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", background: "#1a1a1a" }}>
                  {plan.featured && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", fontSize: "0.65rem", fontFamily: "Inter, sans-serif", fontWeight: 700, padding: "3px 12px", borderRadius: "2px", whiteSpace: "nowrap", textTransform: "uppercase" }}>Самый популярный</div>
                  )}
                  <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.5rem", textTransform: "uppercase" }}>{plan.label}</p>
                  <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.25rem", textTransform: "uppercase" }}>{plan.name}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{plan.price}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{plan.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {plan.includes.map((item, ii) => (
                      <li key={ii} style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", display: "flex", gap: "0.5rem", alignItems: "flex-start", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href={"/ru/contact"} style={{ display: "block", textAlign: "center", padding: "0.7rem 1rem", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.78rem", borderRadius: "2px", textDecoration: "none", background: plan.featured ? "var(--gold)" : "transparent", color: plan.featured ? "#000" : "rgba(245,240,225,0.5)", border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Запросить расчёт</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* OTHER SERVICES */}
      <section style={{ padding: "4rem 2rem", background: "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem", textTransform: "uppercase" }}>Другие услуги — от</h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>Индивидуальный расчёт для всех проектов за 2 часа.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { service: "Фуд-фотография", from: "2 500 AED" },
              { service: "Съёмка продуктов", from: "1 800 AED" },
              { service: "Корпоративные портреты", from: "1 500 AED" },
              { service: "Съёмка недвижимости", from: "2 000 AED" },
              { service: "Видеоотзывы", from: "3 500 AED" },
              { service: "Производство подкастов", from: "4 000 AED" },
              { service: "Производство YouTube", from: "3 500 AED" },
              { service: "Автомобильная съёмка", from: "3 000 AED" },
              { service: "Фэшн-съёмки", from: "5 000 AED" },
              { service: "Съёмка отелей", from: "8 000 AED" },
              { service: "Автомобильная реклама", from: "25 000 AED" },
              { service: "Reels (за съёмочный день)", from: "2 500 AED" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{s.service}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem" }}>{s.from}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", marginTop: "0.25rem" }}>от</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2.5rem", textTransform: "uppercase" }}>FAQ по ценам</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS_RU.map((faq, i) => (
              <div key={i} style={{ padding: "1.5rem", background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>{faq.q}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#111", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem", textTransform: "uppercase" }}>✦ Готовы начать?</p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>ПОЛУЧИТЕ РАСЧЁТ<br /><span style={{ color: "var(--gold)" }}>ЗА 2 ЧАСА</span></h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>Расскажите нам о проекте, датах и примерном бюджете. Мы отвечаем на каждый бриф в течение 2 часов — 7 дней в неделю.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>WhatsApp сейчас</a>
          <a href="/ru/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Inter, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>Форма обратной связи</a>
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginTop: "2rem" }}>Все цены в AED. НДС применяется по необходимости. Цены актуальны по состоянию на 2026 год.</p>
      </section>
    </>
  );
}
