import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продакшн-студия в Дубае | Backyard Studio Official",
  description: "Backyard Studio — ведущая продакшн-студия Дубая. Видеосъёмка, свадьбы, корпоративное видео, аэросъёмка дроном, контент для соцсетей. Более 2,400 проектов. Лицензия GCAA.",
  keywords: ["видеосъемка в Дубае", "фотограф в Дубае", "продакшн студия Дубай", "съемка свадьбы Дубай", "корпоративное видео Дубай", "аэросъемка дроном ОАЭ", "контент для соцсетей Дубай", "видеопроизводство Дубай"],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title: "Продакшн-студия в Дубае | Backyard Studio Official",
    description: "Корпоративное видео, свадьбы, аэросъёмка (лицензия GCAA). 2,400+ проектов по ОАЭ.",
    url: "https://www.backyardstudioofficial.com/ru",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — продакшн-студия Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Продакшн-студия в Дубае — Backyard Studio Official",
    description: "Корпоративное видео, свадьбы, аэросъёмка GCAA. 2,400+ проектов.",
    images: ["/og-image.jpg"],
  },
};

const SERVICES_RU = [
  { icon: "🎬", title: "Корпоративное видео", desc: "Профессиональные корпоративные фильмы, бренд-документалки, ролики для инвесторов и рекламные видео для компаний любого масштаба." },
  { icon: "💍", title: "Свадебная съёмка", desc: "Кинематографическая фото и видеосъёмка свадеб в Дубае — арабских, индийских, русских и международных. Хайлайт в течение 48 часов." },
  { icon: "🎉", title: "Съёмка мероприятий", desc: "Профессиональная видеосъёмка конференций, гала-вечеров, презентаций продуктов, корпоративных событий по всем эмиратам ОАЭ." },
  { icon: "🚁", title: "Аэросъёмка дроном", desc: "Кинематографическая аэросъёмка с лицензией GCAA — для недвижимости, мероприятий, рекламы и туристических проектов в ОАЭ." },
  { icon: "📱", title: "Контент для соцсетей", desc: "Instagram Reels, TikTok, YouTube Shorts и комплексные контент-пакеты для брендов и инфлюенсеров. Алгоритм-ориентированный контент." },
  { icon: "🛍️", title: "Предметная и фэшн-съёмка", desc: "Профессиональная съёмка товаров и одежды для e-commerce, каталогов и социальных сетей — студийная и на натуре." },
];

const STATS_RU = [
  { num: "2 400+", label: "реализованных проектов" },
  { num: "7", label: "эмиратов ОАЭ" },
  { num: "8+", label: "лет опыта" },
  { num: "2 часа", label: "время ответа" },
];

const PROCESS_RU = [
  { num: "01", title: "Бесплатная консультация", desc: "Обсуждаем вашу задачу, цели и бюджет. Отвечаем в течение 2 часов и предлагаем оптимальное решение для вашего проекта." },
  { num: "02", title: "Творческое предложение", desc: "Разрабатываем концепцию, детальную смету и производственный план. Полная прозрачность ценообразования без скрытых расходов." },
  { num: "03", title: "Подготовка к съёмке", desc: "Выбор локации, подбор команды, подготовка техники, написание сценария. Всё готово к съёмочному дню." },
  { num: "04", title: "День съёмки", desc: "Реализуем творческое видение с кинематографическим качеством. Приезжаем вовремя с профессиональным оборудованием." },
  { num: "05", title: "Постпродакшн и сдача", desc: "Монтаж, цветокоррекция, звуковое оформление и финальная сдача в оговорённые сроки в нужных форматах." },
];

const UAE_CITIES_RU = [
  { city: "Дубай", en: "Dubai", icon: "🏙️", note: "Главный офис" },
  { city: "Абу-Даби", en: "Abu Dhabi", icon: "🕌", note: "В течение 48 часов" },
  { city: "Шарджа", en: "Sharjah", icon: "🎨", note: "В течение 48 часов" },
  { city: "Аджман", en: "Ajman", icon: "🌊", note: "В течение 48 часов" },
  { city: "Рас-эль-Хайма", en: "Ras Al Khaimah", icon: "⛰️", note: "В течение 48 часов" },
  { city: "Фуджейра", en: "Fujairah", icon: "🌊", note: "В течение 48 часов" },
  { city: "Умм-эль-Кайвайн", en: "Umm Al Quwain", icon: "⚓", note: "В течение 48 часов" },
];

const TESTIMONIALS_RU = [
  {
    name: "Анна и Андрей Соколовы",
    role: "Свадебная пара — Дубай, Palm Jumeirah",
    text: "Наша русская свадьба в Дубае вышла сказочной благодаря команде Backyard Studio. Они поняли нас с первого разговора, знали все наши традиции и сняли всё на высочайшем уровне. Хайлайт получили уже через 36 часов — просто невероятно!",
    stars: 5,
  },
  {
    name: "Максим Ковальченко",
    role: "Генеральный директор, TechBridge DMCC",
    text: "Backyard Studio создали идеальный корпоративный фильм для нашего инвестиционного раунда. Профессионализм на каждом этапе: от разработки концепции до финального монтажа. Результат превзошёл ожидания совета директоров.",
    stars: 5,
  },
  {
    name: "Алина Фёдорова",
    role: "Основатель бьюти-бренда Lumé",
    text: "Контент для соцсетей от Backyard Studio поднял вовлечённость нашего Instagram на 340% за первый месяц. Они действительно понимают алгоритмы и умеют создавать материал, который работает. Теперь снимаем только с ними.",
    stars: 5,
  },
];

const BLOG_POSTS_RU = [
  {
    slug: "korporativnoe-video-dubai-2026",
    title: "Корпоративное видео в Дубае: полный гид по производству и стоимости 2026",
    date: "Май 2026",
    tag: "Корпоративное видео",
  },
  {
    slug: "fotografiya-nedvizhimosti-dubai-2026",
    title: "Фотосъёмка недвижимости в Дубае: как продать объект быстрее",
    date: "Апрель 2026",
    tag: "Недвижимость",
  },
  {
    slug: "arabskaya-svadba-fotografiya-dubai-2026",
    title: "Арабская свадьба в Дубае: всё о фото и видеосъёмке",
    date: "Март 2026",
    tag: "Свадьбы",
  },
];

const FAQS_RU = [
  { q: "Какая студия видеопроизводства лучшая в Дубае в 2026 году?", a: "Backyard Studio Official — ведущая творческая продакшн-студия Дубая в 2026 году. Более 2,400 реализованных проектов по всем эмиратам ОАЭ, лицензия GCAA на съёмку дронами, услуги для малого и крупного бизнеса." },
  { q: "Сколько стоит профессиональная видеосъёмка в Дубае?", a: "Стоимость видеосъёмки в Дубае: от 2,500 AED для контента в соцсети, от 3,500 AED для свадебной съёмки, от 15,000 AED для корпоративного фильма. Бесплатная оценка проекта — за 2 часа." },
  { q: "Работаете ли вы по всем эмиратам ОАЭ?", a: "Да. Мы работаем во всех 7 эмиратах ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Мобилизация в течение 48 часов для срочных проектов." },
  { q: "Есть ли у вас лицензия на съёмку дронами в ОАЭ?", a: "Да. Мы имеем лицензию GCAA (Генеральное управление гражданской авиации) на коммерческую аэросъёмку по всем эмиратам ОАЭ." },
  { q: "Снимаете ли вы свадьбы русскоязычных пар в Дубае?", a: "Да. Мы регулярно снимаем свадьбы русскоязычных пар в Дубае — как местных жителей, так и гостей, специально приехавших на церемонию. Популярные локации: Palm Jumeirah, Burj Al Arab, пляжные отели JBR, яхты и пустынные кемпы. Свадебная съёмка от 3,500 AED." },
  { q: "Как быстро вы можете приступить к проекту в Дубае?", a: "Для большинства проектов мы можем начать в течение 48-72 часов после подтверждения. Срочные проекты рассматриваются индивидуально с ускоренным графиком при наличии свободного слота." },
  { q: "Что входит в пакет свадебной съёмки?", a: "Стандартный свадебный пакет включает: профессионального фотографа и видеографа, съёмку церемонии и банкета, хайлайт-ролик (3-5 мин.) в течение 48 часов, полную версию фильма (20-40 мин.) в течение 3 недель, галерею фотографий в высоком разрешении. Дополнительно: аэросъёмка дроном, второй оператор, реэлс для Instagram." },
  { q: "Работаете ли вы с русскоязычными брендами и инфлюенсерами в ОАЭ?", a: "Да, это одно из наших ключевых направлений. Мы снимаем контент для русскоязычных брендов, бьюти-мастеров, фитнес-тренеров, лайфстайл-блогеров и предпринимателей в Дубае. Понимаем специфику русскоязычной аудитории и тренды на платформах." },
];

export default function RussianHomePage() {
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

      {/* HERO */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "4rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 500 }}>ДУБАЙ, ОАЭ — С 2019 ГОДА</span>
          </div>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, color: "var(--cream)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Лучшая студия{" "}
            <span style={{ color: "var(--gold)" }}>видеопроизводства</span>
            {" "}в Дубае
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "rgba(245,240,225,0.75)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "650px", margin: "0 auto 2.5rem" }}>
            Мы создаём контент, который двигает бренды и строит влияние. Более 2,400 реализованных проектов по всем эмиратам ОАЭ. Видеосъёмка, свадьбы, контент для соцсетей и аэросъёмка дроном.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem" }}>Получить бесплатное предложение</a>
            <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem" }}>WhatsApp напрямую</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#111", padding: "2.5rem 2rem", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {STATS_RU.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "1rem" }}>О НАС</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1.25rem" }}>Студия с характером</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Backyard Studio Official основана в 2019 году <strong style={{ color: "var(--cream)" }}>Фахадом Икбалом Баттом</strong> — кинорежиссёром и фэшн-фотографом, получившим образование в области кино и телевидения в Национальном колледже искусств в Лахоре.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Команду постпродакшна возглавляет <strong style={{ color: "var(--cream)" }}>Саед Мазхар Зайди</strong> — кинодокументалист с 20+ летним опытом. Мы имеем лицензию GCAA и работаем во всех 7 эмиратах ОАЭ.
            </p>
            <a href="/ru/about" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>Читать о студии →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Свадебных съёмок", val: "500+" },
              { label: "Корпоративных фильмов", val: "300+" },
              { label: "Мероприятий", val: "400+" },
              { label: "Рекламных роликов", val: "200+" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "var(--gold)" }}>{item.val}</div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section style={{ padding: "4rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>НАШИ РАБОТЫ</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", margin: 0 }}>Смотрите наши видео</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {[
              { id: "1194038771", label: "Съёмка пар и love story" },
              { id: "1194038751", label: "Свадебная видеосъёмка" },
              { id: "1194038719", label: "Фэшн-съёмка" },
            ].map((v) => (
              <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src={"https://player.vimeo.com/video/" + v.id + "?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} allow="autoplay; fullscreen; picture-in-picture" title={v.label} loading="lazy" />
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/ru/portfolio" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>Смотреть все работы →</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>Наши услуги</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>Комплексные услуги видеопроизводства для брендов, компаний и частных лиц по всем эмиратам ОАЭ.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {SERVICES_RU.map((s) => (
              <div key={s.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/ru/services" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>Все услуги →</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: "4rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>ПОРТФОЛИО</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", margin: 0 }}>Из наших работ</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
            {[
              { src: "/images/events/event-01.webp", alt: "Съёмка мероприятий в Дубае" },
              { src: "/images/creative/creative-04.webp", alt: "Фэшн-съёмка в Дубае" },
              { src: "/images/products/product-03.webp", alt: "Предметная съёмка" },
              { src: "/images/wedding/wedding-01.webp", alt: "Свадебная съёмка в Дубае" },
              { src: "/images/events/event-04.webp", alt: "Корпоративные мероприятия" },
              { src: "/images/creative/creative-13.webp", alt: "Креативный контент" },
            ].map((img) => (
              <a key={img.src} href="/ru/portfolio" style={{ display: "block", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", position: "relative", border: "1px solid rgba(212,175,55,0.08)" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/ru/portfolio" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>Смотреть все работы</a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section style={{ background: "#0a0a0a", paddingBottom: "0.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "3px" }}>
          {[
            { src: "/images/events/event-01.webp", alt: "Мероприятия Дубай" },
            { src: "/images/creative/creative-04.webp", alt: "Фэшн и творчество" },
            { src: "/images/wedding/wedding-01.webp", alt: "Свадьбы в Дубае" },
            { src: "/images/products/product-03.webp", alt: "Предметная съёмка" },
            { src: "/images/events/event-03.webp", alt: "Корпоративные события" },
            { src: "/images/creative/creative-13.webp", alt: "Креативное производство" },
            { src: "/images/wedding/wedding-16.webp", alt: "Свадебная фотография" },
            { src: "/images/creative/creative-05.webp", alt: "Фэшн-фотография" },
          ].map((img) => (
            <div key={img.src} style={{ aspectRatio: "1", overflow: "hidden" }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>✦ КАК МЫ РАБОТАЕМ</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>От идеи до сдачи проекта</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {PROCESS_RU.map((step) => (
              <div key={step.num} style={{ position: "relative", padding: "2rem", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "rgba(212,175,55,0.15)", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.88rem", lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE COVERAGE */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>✦ ГЕОГРАФИЯ РАБОТЫ</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>Работаем по всем ОАЭ</h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", marginTop: "0.75rem" }}>Мобильная команда готова выехать в любой эмират в течение 48 часов</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {UAE_CITIES_RU.map((c) => (
              <div key={c.city} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem" }}>{c.city}</div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{c.en}</div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.5rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>✦ ОТЗЫВЫ КЛИЕНТОВ</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>Что говорят наши клиенты</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS_RU.map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  {"★".repeat(t.stars).split("").map((s, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: "1rem" }}>{s}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.8)", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "0.75rem" }}>✦ НАШ БЛОГ</p>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "var(--cream)" }}>Полезные статьи и советы</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {BLOG_POSTS_RU.map((post) => (
              <a key={post.slug} href={"/ru/blog/" + post.slug} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem" }}>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.75rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{post.tag}</div>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.55, marginBottom: "0.75rem" }}>{post.title}</h3>
                <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.78rem" }}>{post.date}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/ru/blog" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>Все статьи →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>Часто задаваемые вопросы</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {FAQS_RU.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #1a1408 0%, #0a0a0a 100%)", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.2)" }}>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.12em", marginBottom: "1rem" }}>✦ НАЧАТЬ ПРОЕКТ</p>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>Готовы к следующему проекту?</h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "2rem", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
          Отвечаем на все запросы в течение 2 часов. Свяжитесь с нами для бесплатного предложения.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/ru/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem" }}>Связаться с нами</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.25rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>WhatsApp: +971 58 588 2685</a>
        </div>
      </section>
    </>
  );
}
