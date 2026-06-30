import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создатель контента для соцсетей в Дубае 2026 | Backyard Studio",
  description:
    "Производство контента для Instagram, TikTok и YouTube в Дубае. Фото, Reels, видео для брендов и инфлюенсеров. От AED 1 200 за сессию.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/kreator-kontenta-sotssetey-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/kreator-kontenta-sotssetey-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/social-media-content-creator-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Создатель контента для соцсетей в Дубае 2026 | Backyard Studio",
    description: "Профессиональный контент для Instagram и TikTok. Снимаем, монтируем, помогаем расти.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SocialMediaContentRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит производство контента для соцсетей в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Разовая контент-сессия в Дубае начинается от AED 1 200 за полдня (20 фото + 3 Reel). Ежемесячный пакет из 4 сессий — от AED 3 500. Комплексное ведение с контент-стратегией и публикациями — от AED 6 000 в месяц.",
        },
      },
      {
        "@type": "Question",
        name: "Вы только снимаете или помогаете и со стратегией?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Предлагаем оба варианта. Анализируем ваш текущий аккаунт, составляем контент-план на месяц, снимаем, монтируем и публикуем. Или только съёмка и монтаж, если у вас есть свой маркетинг-отдел.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы с инфлюенсерами в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, от nano-инфлюенсеров, которые только строят аудиторию, до крупных блогеров, которым нужен продакшн-уровень для брендовых коллабораций. Контент адаптируем под нишу и стиль конкретного блогера.",
        },
      },
      {
        "@type": "Question",
        name: "Для каких платформ вы производите контент?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instagram (посты, Reels, Stories), TikTok, YouTube (Shorts и длинные видео), LinkedIn для профессионального контента. У каждой платформы свои требования к формату — мы их все знаем.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Контент для соцсетей в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          КОНТЕНТ ДЛЯ СОЦСЕТЕЙ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Создатель контента для соцсетей в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Контент, который строит реальную аудиторию</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>7 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="Social Media Content Creator Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Случайный контент больше не работает. Алгоритмы продвигают то, что удерживает
          внимание. Аудитория остаётся с теми, кто даёт визуальную ценность и последовательность.
          Именно это мы строим вместе с вами в Backyard Studio.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          Мы работаем с инфлюенсерами, малым бизнесом и крупными брендами в Дубае — производим
          контент, который отражает их идентичность и привлекает нужную аудиторию. Не просто
          красивые снимки, а контент со стратегией.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что включает наш контент-сервис?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Начинаем с анализа вашего текущего аккаунта — что работает, что не работает, какая
          аудитория у вас сейчас и какая нужна. Составляем контент-план на месяц с темами,
          форматами и частотой публикаций.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Каждая полудневная сессия производит 20 фотографий и 3 готовых Reel с субтитрами.
          Мы контролируем единый визуальный стиль, цветовую палитру и соответствие вашей нише.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Клиенты на ежемесячном пакете обычно видят заметный рост вовлечённости в первые
          два месяца работы. Дубайская аудитория ценит качественный визуал и отзывается на него.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Разовая сессия", detail: "полдня / 20 фото / 3 Reel", price: "от AED 1 200" },
            { pkg: "Базовый месяц", detail: "4 сессии / 60 единиц контента", price: "от AED 3 500" },
            { pkg: "Полное ведение", detail: "8 сессий + стратегия + публикации", price: "от AED 6 000" },
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

        
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что даёт сотрудничество с профессиональной студией?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Работа с профессиональной студией вместо самостоятельного производства контента 
          имеет три ключевых преимущества: качество картинки, которое соответствует уровню 
          самых популярных аккаунтов в вашей нише; время — пока мы снимаем и монтируем, 
          вы занимаетесь бизнесом; и стратегия — наша команда понимает, какой тип контента 
          работает на алгоритм TikTok и Instagram в 2026 году.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Один съёмочный день с Backyard Studio даёт 6–10 Reels-видео и 20–30 фотографий. 
          Это контент на 5–8 недель активного постинга с сохранением консистентного качества. 
          По сравнению с тем, что уходит на самостоятельное производство этого объёма, 
          профессиональная студия оказывается не только лучше по результату, но и выгоднее 
          по времени.
        </p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Как выглядит процесс съёмочного дня?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Процесс начинается с контент-брифа за неделю до съёмки — мы обсуждаем хуки, 
          форматы и темы для каждого видео. В день съёмки команда приезжает на локацию или 
          вы приходите в студию. Средний темп: одно Reels-видео снимается за 30–45 минут 
          с несколькими дублями. После съёмки файлы монтируются в течение 5–7 рабочих дней 
          и доставляются через приватную ссылку.
        </p>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Начать производство контента</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Бесплатная консультация — проанализируем ваш аккаунт и предложим план.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
