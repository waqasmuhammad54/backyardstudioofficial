import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рилсы и контент для соцсетей в Дубае 2026 | Backyard Studio",
  description:
    "Съёмка Reels и TikTok в Дубае от AED 1 800. Контент для Instagram, TikTok и YouTube Shorts — монтаж, цветокоррекция и публикация. Для брендов и блогеров.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/rily-socsietey-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/rily-socsietey-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/social-media-content-creation-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Рилсы и контент для соцсетей в Дубае 2026 | Backyard Studio",
    description: "Профессиональная съёмка Reels и TikTok в Дубае — контент, который смотрят и которым делятся. От AED 1 800.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SocialMediaRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит съёмка Reels для Instagram в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены на съёмку Reels и TikTok в Дубае начинаются от AED 1 800 за одну сессию. Ежемесячные пакеты с 8–12 роликами и регулярными съёмками обходятся от AED 4 500 до AED 12 000 в месяц в зависимости от объёма и сложности контента.",
        },
      },
      {
        "@type": "Question",
        name: "Что входит в пакет контента для соцсетей от Backyard Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В наши пакеты входит: разработка контент-плана, съёмка в локациях Дубая или у вас в помещении, монтаж с субтитрами и текстовыми накладками, цветокоррекция, форматирование для каждой платформы (Instagram, TikTok, YouTube Shorts, LinkedIn) и опционально — публикация по расписанию.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы Reels для русскоязычных блогеров в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Мы регулярно работаем с русскоязычными блогерами, инфлюенсерами и брендами в Дубае. Наша команда понимает эстетику и формат, который работает на русскоязычную аудиторию, и умеет создавать контент для двуязычных аккаунтов.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько роликов можно снять за один съёмочный день?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "За полный съёмочный день в Дубае (8 часов) мы обычно производим 6–10 готовых роликов в зависимости от количества смен локаций и сложности каждого ролика. При предварительном планировании это число может достигать 12–15 простых форматов.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Рилсы и контент для соцсетей в Дубае 2026",
    author: { "@type": "Person", name: "Syed Mazhar Zaidi", jobTitle: "Режиссёр — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/rily-socsietey-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a> / <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a> / <span>Рилсы и контент для соцсетей</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          КОНТЕНТ ДЛЯ СОЦСЕТЕЙ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
          Рилсы и контент для соцсетей в Дубае 2026
          <br /><span style={{ color: "var(--gold)" }}>Снимаем то, что смотрят и которым делятся</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Syed Mazhar Zaidi</span><span>Июнь 2026</span><span>8 мин. чтения</span>
        </div>

        <div style={{ width: "100%", height: "380px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>📱</span>
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Дубай — один из самых фотогеничных городов планеты. Это не просто красивые слова — это конкурентное преимущество для любого бренда или блогера, который здесь живёт и работает. Небоскрёбы Downtown, пляжи Джумейры, пустыня в 30 минутах езды, Gold Souk с его вечным золотым светом — всё это у вас под рукой. Вопрос только в том, умеет ли ваш контент использовать это богатство.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы производим контент для Instagram, TikTok, YouTube Shorts и LinkedIn для брендов, ресторанов, отелей, блогеров и B2B-компаний. Режиссёр Syed Mazhar Zaidi и команда подходят к каждому ролику как к мини-фильму — с раскадровкой, продуманным светом и монтажом, который держит внимание с первой секунды.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Почему большинство брендового контента в Дубае не работает
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Главная проблема — визуальный шаблон. Торт на белом фоне. Лобби-пространство без людей. Основатель компании в офисе, смотрящий в ноутбук. Алгоритмы давно научились распознавать и понижать такой контент — и пользователи тоже. Первые 1,5 секунды ролика решают всё: если крюка нет, ролик пролистывают.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Наша команда начинает каждый проект с вопроса: что заставит человека остановить скролл? Ответ всегда разный — иногда это неожиданный ракурс, иногда быстрый монтаж, иногда звук до появления картинки. Мы тестируем и отслеживаем, что работает для вашей аудитории конкретно.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Форматы контента, которые мы производим
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { format: "Instagram Reels и TikTok", detail: "15–90-секундные ролики с монтажом, текстовыми вставками, субтитрами и звуком, оптимизированные под алгоритм каждой платформы" },
            { format: "YouTube Shorts", detail: "Вертикальные ролики до 60 секунд — репурпозинг длинного контента или самостоятельные форматы для роста канала" },
            { format: "Stories-пакеты", detail: "Серии Stories для продукта, события или кампании — с анимированными текстовыми накладками и единым визуальным языком" },
            { format: "LinkedIn-видео для B2B", detail: "Корпоративный контент, thought leadership-ролики и кейсы — профессиональная эстетика, адаптированная к деловой аудитории" },
            { format: "UGC-стиль для рекламы", detail: "Ролики, имитирующие органический пользовательский контент — наиболее конвертируемый формат для таргетированной рекламы" },
          ].map(({ format, detail }) => (
            <div key={format} style={{ padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderLeft: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.25rem" }}>{format}</div>
              <div style={{ color: "rgba(245,240,225,0.65)", fontSize: "0.875rem" }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Контент для русскоязычного рынка в Дубае
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Русскоязычная аудитория в Дубае — несколько сотен тысяч человек. Они потребляют контент на русском языке, следят за русскоязычными блогерами и принимают решения о покупке под влиянием доверенных источников. Если ваш бренд работает с этой аудиторией, контент должен говорить с ней на её языке — не только буквально, но и визуально.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Мы помогаем русскоязычным брендам, инфлюенсерам и агентствам создавать контент, который органично работает и на русскую, и на международную аудиторию. Двуязычные субтитры, правильное кастомизирование текстовых накладок, понимание нюансов — всё это часть работы.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>
          Цены на съёмку контента для соцсетей в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              { pkg: "Разовая сессия", detail: "Полдня / 3–5 готовых роликов / монтаж + субтитры", price: "AED 1 800 – 3 000" },
              { pkg: "Дневной пакет", detail: "Полный день / 6–10 роликов / разные локации", price: "AED 4 500 – 7 000" },
              { pkg: "Ежемесячный пакет", detail: "2 съёмочных дня / 12–16 роликов / контент-план", price: "AED 7 500 – 12 000/мес" },
              { pkg: "Рекламный UGC-пакет", detail: "Ролики под таргет / A/B-форматы / без водяного знака", price: "AED 2 500 – 5 000" },
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
            { q: "Сколько стоит съёмка Reels в Дубае?", a: "От AED 1 800 за разовую сессию (3–5 роликов). Ежемесячные пакеты от AED 7 500 за 12–16 роликов в месяц." },
            { q: "Вы работаете с русскоязычными блогерами?", a: "Да. Мы регулярно сотрудничаем с русскоязычными инфлюенсерами и понимаем специфику контента для этой аудитории." },
            { q: "Сколько роликов за съёмочный день?", a: "6–10 готовых роликов за полный день, в зависимости от формата и количества смен локаций." },
            { q: "Помогаете ли вы с контент-планом?", a: "Да. В ежемесячные пакеты входит разработка контент-плана, брифинг перед съёмкой и опционально — публикация по расписанию." },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>Готовы начать снимать?</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>Напишите нам в WhatsApp — ответим в течение двух часов.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp</a>
            <a href="/ru/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>Цены</a>
          </div>
        </div>
      </article>
    </>
  );
}
