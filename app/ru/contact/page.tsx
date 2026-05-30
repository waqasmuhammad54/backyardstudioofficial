import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Backyard Studio Official — видеосъёмка в Дубае",
  description: "Свяжитесь с Backyard Studio Official в Дубае. Ответим в течение 2 часов. WhatsApp: +971 58 588 2685.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ru/contact" },
};

export default function RuContactPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
          Контакты
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          Отвечаем на все запросы в течение 2 часов, 7 дней в неделю.
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "2rem" }}>Контактная информация</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "📞", label: "Телефон и WhatsApp", val: "+971 58 588 2685", href: "tel:+971585882685" },
                { icon: "✉️", label: "Электронная почта", val: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
                { icon: "📍", label: "Адрес", val: "Дубай, ОАЭ", href: null },
                { icon: "⏰", label: "Время ответа", val: "в течение 2 часов", href: null },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", marginBottom: "0.2rem" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", textDecoration: "none", fontWeight: 500 }}>{item.val}</a>
                    ) : (
                      <span style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 500 }}>{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "2rem" }}>Написать нам</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", padding: "1rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, textAlign: "center" }}>
                💬 WhatsApp — написать сейчас
              </a>
              <a href="mailto:info@backyardstudioofficial.com"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", color: "var(--gold)", padding: "1rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, textAlign: "center" }}>
                ✉️ Отправить письмо
              </a>
            </div>
            <div style={{ marginTop: "2rem", fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.875rem", lineHeight: 1.6 }}>
              Работаем во всех 7 эмиратах ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
