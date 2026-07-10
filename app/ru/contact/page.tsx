import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Backyard Studio Official Дубай — Бесплатный расчёт",
  description: "Получите бесплатный расчёт за 2 часа. Съёмка мероприятий, свадеб, DVC, Reels, корпоративных фильмов, дроном. Все 7 эмиратов ОАЭ. WhatsApp +971 58 588 2685.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/contact",
    languages: {
      "en": "https://www.backyardstudioofficial.com/contact",
      "ar": "https://www.backyardstudioofficial.com/ar/contact",
      "ru": "https://www.backyardstudioofficial.com/ru/contact",
      "zh": "https://www.backyardstudioofficial.com/zh/contact",
      "x-default": "https://www.backyardstudioofficial.com/contact",
    },
  },
  openGraph: {
    title: "Контакты Backyard Studio Official | Бесплатный расчёт — Дубай ОАЭ",
    description: "Бесплатный расчёт за 2 часа. Мероприятия, свадьбы, DVC, Reels, TikTok, корпоративные фильмы и аэросъёмка по всем 7 эмиратам ОАЭ. WhatsApp доступен.",
    url: "https://www.backyardstudioofficial.com/ru/contact",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Контакты Backyard Studio Official — Дубай ОАЭ" }],
  },
};

const CONTACT_FAQS = [
  { q: "Как получить расчёт от Backyard Studio в Дубае?", a: "Вы можете получить бесплатный расчёт тремя способами: заполните контактную форму на этой странице, отправьте сообщение в WhatsApp на +971 58 588 2685 или напишите на info@backyardstudioofficial.com. Мы отвечаем в течение 2 часов 7 дней в неделю." },
  { q: "Как быстро Backyard Studio отвечает на запросы?", a: "Backyard Studio Official гарантирует ответ на все запросы в течение 2 часов — включая вечера и выходные. Для срочных съёмок в тот же день звоните или пишите в WhatsApp напрямую на +971 58 588 2685." },
  { q: "Где находится Backyard Studio в Дубае?", a: "Backyard Studio Official базируется в Дубае, ОАЭ, и охватывает все 7 эмиратов: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Мы можем развернуть съёмочную группу в любом эмирате за 24–48 часов." },
  { q: "Что включить в бриф на производство?", a: "Для точного расчёта укажите: дату съёмки (или примерные сроки), предпочтительную локацию, тип контента (видео/фото/оба), примерный хронометраж или список материалов, а также референсы или мудборды, если есть." },
];

export default function RuContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CONTACT_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center", borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" }}>Свяжитесь с нами</p>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem", textTransform: "uppercase" }}>Начать проект</h1>
        <p style={{ color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>Отправьте нам бриф — ответим в течение 2 часов. Давайте создадим что-то кинематографическое.</p>
      </div>

      {/* Contact grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Отправить бриф</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Полное имя", type: "text", placeholder: "Ваше полное имя" },
                { label: "Электронная почта", type: "email", placeholder: "Ваш email" },
                { label: "Телефон / WhatsApp", type: "tel", placeholder: "+971 5X XXX XXXX" },
              ].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", color: "var(--cream)", padding: "0.75rem 1rem", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", outline: "none", borderRadius: "2px", boxSizing: "border-box" as const }} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>Тип услуги</label>
                <select style={{ width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", color: "var(--cream)", padding: "0.75rem 1rem", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", outline: "none", borderRadius: "2px", boxSizing: "border-box" as const }}>
                  <option value="">Выберите услугу</option>
                  {["Свадебная съёмка","Съёмка мероприятий","Контент для соцсетей","Reels / TikTok","DVC реклама","Корпоративные фильмы","Аэросъёмка GCAA","Съёмка продуктов","Съёмка недвижимости","Другое"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>Детали проекта</label>
                <textarea rows={5} placeholder="Расскажите о проекте — дата, локация, желаемые материалы..." style={{ width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", color: "var(--cream)", padding: "0.75rem 1rem", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", outline: "none", borderRadius: "2px", resize: "vertical" as const, boxSizing: "border-box" as const }} />
              </div>
              <button type="submit" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem", border: "none", borderRadius: "2px", cursor: "pointer", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                Отправить бриф
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Контактная информация</h2>
              {[
                { icon: "📱", label: "WhatsApp", value: "+971 58 588 2685", href: "https://wa.me/971585882685" },
                { icon: "📧", label: "Email", value: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
                { icon: "📍", label: "Главный офис", value: "Дубай, ОАЭ", href: null },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.2rem" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "0.9rem", textDecoration: "none" }}>{c.value}</a>
                    ) : (
                      <p style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "0.9rem", margin: 0 }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid var(--gold)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>Время ответа</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--cream)", marginBottom: "0.25rem" }}>2 ЧАСА</p>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", margin: 0 }}>Гарантируем ответ на все запросы 7 дней в неделю</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>Работаем во всех эмиратах</p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                {["Дубай","Абу-Даби","Шарджа","Аджман","РАК","Фуджейра","УАК"].map((e) => (
                  <span key={e} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(245,240,225,0.55)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px" }}>{e}</span>
                ))}
              </div>
            </div>
            <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center" as const, background: "#25D366", color: "#fff", padding: "1rem 2rem", fontFamily: "Inter, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>
              Написать в WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center" as const, marginBottom: "2.5rem", textTransform: "uppercase" as const }}>Частые вопросы</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
