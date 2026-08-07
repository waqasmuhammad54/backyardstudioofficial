import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Индийская свадьба фотосъёмка в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фотосъёмка индийских свадеб в Дубае — мехенди, халди, сангит, бараат, рецепшн. Полная документация многодневной свадьбы. От AED 5 000.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/indiyskaya-svadba-fotografiya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/indiyskaya-svadba-fotografiya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/indian-wedding-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Индийская свадьба фотосъёмка в Дубае 2026",
    description: "Полная документация индийской свадьбы в Дубае — все церемонии, все дни, все эмоции.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function IndianWeddingPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка индийской свадьбы в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фотосъёмка индийской свадьбы в Дубае начинается от AED 5 000 на один день (1 фотограф, 8–10 часов). Комплексный пакет на 3 дня — мехенди, сангит, церемония и рецепшн — с двумя фотографами и видеографом стоит от AED 18 000.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы все церемонии многодневной индийской свадьбы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы снимаем полный цикл: мехенди (вечер хны), халди (куркумный ритуал), сангит (вечер танцев), бараат (процессия жениха), никах или ведийскую церемонию, и свадебный рецепшн. Каждый формат требует своего подхода.",
        },
      },
      {
        "@type": "Question",
        name: "Используете ли вы дрон на индийских свадьбах в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, аэросъёмка выполняется по лицензии GCAA на коммерческую аэросъёмку. Дрон-съёмка процессии бараат добавляет кинематографический размах, который невозможно получить наземными камерами.",
        },
      },
      {
        "@type": "Question",
        name: "Когда нужно бронировать фотографа на индийскую свадьбу в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Рекомендуем бронировать за 8–12 месяцев, особенно на сезон свадеб (октябрь–март). Лучшие фотографы Дубая расписаны заранее, а трёхдневные торжества — особенно высокий спрос.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Индийская свадьба фотосъёмка в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/indiyskaya-svadba-fotografiya-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>
          {" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>
          {" / "}
          <span>Фотосъёмка индийской свадьбы в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СВАДЕБНАЯ СЪЁМКА
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Индийская свадьба: фотосъёмка в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Мехенди, бараат, рецепшн — полное сопровождение</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80" alt="Indian Wedding Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Индийская свадьба в Дубае — это не одно событие, а целая неделя торжеств, каждое из которых
          требует отдельного внимания и экспертизы. Вибрирующие краски, традиционные ритуалы, сотни
          гостей — документировать это нужно с командой, которая понимает культурный контекст каждой церемонии.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio Official сняла более 300 индийских свадеб в ОАЭ. Мы знаем, когда жених появится
          на барааткой процессии, как поймать реакцию невесты во время jai mala, и где встать, чтобы
          никакой гость не перекрыл кадр. Это не теория — это опыт.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что мы снимаем на индийской свадьбе
        </h2>

        {[
          { title: "Мехенди", detail: "Нанесение хны, семейные перфомансы, детали декора — в тёплой домашней атмосфере." },
          { title: "Халди", detail: "Спонтанный, весёлый, наполненный смехом ритуал. Наши лучшие неформальные кадры — именно отсюда." },
          { title: "Сангит", detail: "Вечер танцев и музыки — работаем с быстрыми выдержками, чтобы не упустить движение." },
          { title: "Бараат", detail: "Самый динамичный момент: гимбал + дрон + ночные вспышки = кинематографическая процессия." },
          { title: "Церемония и рецепшн", detail: "Минимум два фотографа с разных позиций. Ни одного пропущенного момента от обмена гирляндами до первого танца." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фотосъёмки индийской свадьбы в Дубае 2026
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "День 1 (Мехенди / Сангит)", detail: "1 фотограф / 6 часов", price: "от AED 5 000" },
            { pkg: "День 2 (Бараат + Церемония)", detail: "2 фотографа / 10 часов", price: "от AED 9 000" },
            { pkg: "Полный пакет (3 дня)", detail: "Фото + видео / 2 фотографа + видеограф", price: "от AED 18 000" },
            { pkg: "Премиум (3–4 дня)", detail: "Дрон + синематик-видео + фотокнига", price: "от AED 30 000" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.95rem" }}>{pkg}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.5)", marginTop: "0.2rem" }}>{detail}</div>
              </div>
              <div style={{ color: "var(--gold)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Забронировать фотографа на индийскую свадьбу в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Популярные даты расходятся за 8–12 месяцев. Свяжитесь сейчас.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
