"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowUpRight } from "lucide-react";

const SERVICES_LIST = [
  "Event Shoots", "Event Video Editing", "DVCs", "Reels & Short Films",
  "Photo Shoots", "TikTok & Instagram Reels", "Testimonial Videos",
  "Ads Shooting", "Aerial / Drone", "Corporate Films",
];

const BUDGETS = [
  "Under AED 5,000", "AED 5,000 â 20,000", "AED 20,000 â 50,000",
  "AED 50,000 â 100,000", "AED 100,000+", "Let's discuss",
];

const INFO = [
  {
    icon: <Phone size={18} />,
    label: "Call / WhatsApp",
    value: "+971 58 588 2685",
    href: "tel:+971585882685",
  },
  {
    icon: <Mail size={18} />,
    label: "Email Us",
    value: "info@backyardstudioofficial.com",
    href: "mailto:info@backyardstudioofficial.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Studio Base",
    value: "Dubai, United Arab Emirates",
    href: null,
  },
];

const inputBase =
  "w-full bg-transparent border-b py-4 text-sm placeholder-[#444] focus:outline-none transition-colors duration-300 focus:border-current";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--black-2)" }}
    >
      {/* Atmospheric background glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div ref={ref} className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.5em] uppercase mb-6 font-medium"
            style={{ color: "var(--gold)" }}
          >
            â¦ Work With Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display leading-none mb-4"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)", color: "var(--cream)" }}
          >
            LET&apos;S CREATE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display leading-none gold-text"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}
          >
            SOMETHING EPIC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Drop us a brief and our production team responds within 2 hours â
            because great projects start fast.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20">
          {/* Left â Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact details */}
            <div className="space-y-10 mb-16">
              {INFO.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5 group">
                  <div
                    className="w-11 h-11 flex items-center justify-center shrink-0 border transition-colors duration-300 group-hover:border-current"
                    style={{ borderColor: "var(--border)", color: "var(--gold)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ color: "var(--muted)" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-base transition-colors duration-300 hover:text-current"
                        style={{ color: "var(--cream)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-base" style={{ color: "var(--cream)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* UAE cities */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: "var(--muted)" }}>
                We Shoot Across All UAE Emirates
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dubai","Abu Dhabi","Sharjah","Ajman","RAK","Fujairah","UAQ"].map((c) => (
                  <span
                    key={c}
                    className="text-xs px-4 py-2 border font-medium transition-colors duration-300 hover:border-current"
                    style={{ borderColor: "var(--border)", color: "var(--silver)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank" rel="noreferrer"
              className="group mt-12 inline-flex items-center gap-3 btn-gold px-8 py-4 font-display tracking-[0.15em] text-sm"
              style={{ background: "var(--gold)", color: "var(--black)" }}
            >
              WHATSAPP US NOW
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Right â Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-16 h-full border"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="w-20 h-20 flex items-center justify-center mb-8 border"
                  style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                >
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display text-4xl mb-4" style={{ color: "var(--cream)" }}>
                  BRIEF RECEIVED!
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Our production team will contact you within 2 hours. Check your WhatsApp!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  <div className="border-b" style={{ borderColor: "var(--border)" }}>
                    <input
                      name="name" type="text" value={form.name} onChange={handleChange}
                      required placeholder="Full Name *"
                      className={inputBase}
                      style={{ borderColor: "var(--border)", color: "var(--cream)" }}
                    />
                  </div>
                  <div className="border-b" style={{ borderColor: "var(--border)" }}>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      required placeholder="Email Address *"
                      className={inputBase}
                      style={{ borderColor: "var(--border)", color: "var(--cream)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+971 58 588 2685"
                    className={inputBase}
                    style={{ borderColor: "var(--border)", color: "var(--cream)" }}
                  />
                </div>

                {/* Service + Budget row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  <div className="border-b" style={{ borderColor: "var(--border)" }}>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className={inputBase + " appearance-none cursor-pointer"}
                      style={{ borderColor: "var(--border)", color: form.service ? "var(--cream)" : "#444" }}
                    >
                      <option value="">Select Service</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="border-b" style={{ borderColor: "var(--border)" }}>
                    <select
                      name="budget" value={form.budget} onChange={handleChange}
                      className={inputBase + " appearance-none cursor-pointer"}
                      style={{ borderColor: "var(--border)", color: form.budget ? "var(--cream)" : "#444" }}
                    >
                      <option value="">Budget Range</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Tell us about your project, event, or idea..."
                    className={inputBase + " resize-none"}
                    style={{ borderColor: "var(--border)", color: "var(--cream)" }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-10">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold group w-full justify-center flex items-center gap-3 py-5 font-display tracking-[0.2em] text-sm transition-all duration-300"
                    style={{ background: "var(--gold)", color: "var(--black)" }}
                  >
                    {loading ? (
                      "SENDING YOUR BRIEF..."
                    ) : (
                      <>
                        SEND YOUR BRIEF
                        <Send size={15} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs mt-4" style={{ color: "var(--muted)" }}>
                    We respond within 2 hours Â· Your info is kept confidential
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
