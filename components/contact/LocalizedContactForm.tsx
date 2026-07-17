"use client";

import { useState } from "react";

type Locale = "ar" | "ru" | "zh";

const COPY = {
  ar: {
    font: "Cairo, sans-serif",
    fields: { name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف / واتساب", service: "نوع الخدمة", message: "تفاصيل المشروع" },
    placeholders: { name: "اسمك الكامل", email: "بريدك الإلكتروني", phone: "+971 5X XXX XXXX", message: "أخبرنا عن مشروعك — التاريخ، الموقع، المخرجات المطلوبة..." },
    choose: "اختر الخدمة",
    services: ["تصوير الأعراس", "تصوير الفعاليات", "محتوى السوشيال ميديا", "ريلز", "إعلانات DVC", "أفلام مؤسسية", "تصوير جوي GCAA", "تصوير المنتجات", "تصوير العقارات", "خدمات أخرى"],
    submit: "إرسال الموجز", sending: "جارٍ الإرسال...", success: "شكراً — تم استلام موجزك وسيتواصل معك فريقنا قريباً.", error: "تعذر إرسال الموجز. حاول مرة أخرى أو تواصل معنا عبر واتساب.",
  },
  ru: {
    font: "Inter, sans-serif",
    fields: { name: "Полное имя", email: "Электронная почта", phone: "Телефон / WhatsApp", service: "Тип услуги", message: "Детали проекта" },
    placeholders: { name: "Ваше полное имя", email: "Ваш email", phone: "+971 5X XXX XXXX", message: "Расскажите о проекте — дата, локация, желаемые материалы..." },
    choose: "Выберите услугу",
    services: ["Свадебная съёмка", "Съёмка мероприятий", "Контент для соцсетей", "Reels / TikTok", "DVC реклама", "Корпоративные фильмы", "Аэросъёмка GCAA", "Съёмка продуктов", "Съёмка недвижимости", "Другое"],
    submit: "Отправить бриф", sending: "Отправка...", success: "Спасибо — бриф получен. Наша команда скоро свяжется с вами.", error: "Не удалось отправить бриф. Попробуйте ещё раз или напишите нам в WhatsApp.",
  },
  zh: {
    font: "'Noto Sans SC', sans-serif",
    fields: { name: "姓名", email: "电子邮箱", phone: "电话 / WhatsApp", service: "服务类型", message: "项目详情" },
    placeholders: { name: "您的姓名", email: "您的邮箱地址", phone: "+971 5X XXX XXXX", message: "告诉我们您的项目——日期、地点、所需交付物..." },
    choose: "选择服务",
    services: ["婚礼摄影", "活动摄影", "社交媒体内容", "Reels / TikTok", "DVC广告", "企业影片", "GCAA无人机航拍", "产品摄影", "房产摄影", "其他服务"],
    submit: "提交简报", sending: "正在提交...", success: "谢谢——我们已收到您的项目简报，团队将尽快与您联系。", error: "提交失败。请重试或通过 WhatsApp 联系我们。",
  },
} as const;

const FIELD_STYLE = {
  width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", color: "var(--cream)",
  padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", borderRadius: "2px", boxSizing: "border-box",
} as const;

export default function LocalizedContactForm({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, budget: "", source: `website_${locale}` }),
      });
      if (!response.ok) throw new Error("Lead submission failed");

      window.gtag?.("event", "generate_lead", {
        lead_source: `website_contact_form_${locale}`,
        service: form.service || "not_selected",
        page_path: window.location.pathname,
      });
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return <p role="status" style={{ color: "#4ade80", lineHeight: 1.8, fontFamily: copy.font }}>{copy.success}</p>;
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {(["name", "email", "phone"] as const).map((field) => (
        <div key={field}>
          <label htmlFor={`${locale}-${field}`} style={{ display: "block", fontFamily: copy.font, color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{copy.fields[field]}</label>
          <input id={`${locale}-${field}`} name={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} required={field !== "phone"} value={form[field]} onChange={(e) => update(field, e.target.value)} placeholder={copy.placeholders[field]} style={{ ...FIELD_STYLE, fontFamily: copy.font }} />
        </div>
      ))}
      <div>
        <label htmlFor={`${locale}-service`} style={{ display: "block", fontFamily: copy.font, color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{copy.fields.service}</label>
        <select id={`${locale}-service`} name="service" value={form.service} onChange={(e) => update("service", e.target.value)} style={{ ...FIELD_STYLE, fontFamily: copy.font }}>
          <option value="">{copy.choose}</option>
          {copy.services.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${locale}-message`} style={{ display: "block", fontFamily: copy.font, color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{copy.fields.message}</label>
        <textarea id={`${locale}-message`} name="message" rows={5} required value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={copy.placeholders.message} style={{ ...FIELD_STYLE, fontFamily: copy.font, resize: "vertical" }} />
      </div>
      <button type="submit" disabled={state === "sending"} style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2rem", fontFamily: copy.font, fontWeight: 700, fontSize: "0.9rem", border: "none", borderRadius: "2px", cursor: state === "sending" ? "wait" : "pointer", opacity: state === "sending" ? 0.7 : 1 }}>
        {state === "sending" ? copy.sending : copy.submit}
      </button>
      {state === "error" && <p role="alert" style={{ color: "#f87171", margin: 0, lineHeight: 1.6, fontFamily: copy.font }}>{copy.error}</p>}
    </form>
  );
}
