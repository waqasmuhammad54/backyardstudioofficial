import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { faqSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Contact Backyard Studio | Free Quote Dubai" },
  description:
    "Get a free production quote in 2 hours. Events, weddings, DVCs, Reels, corporate films, drone. All 7 UAE emirates. WhatsApp +971 58 588 2685.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/contact" },
  openGraph: {
    title: "Contact Backyard Studio Official | Free Production Quote — Dubai UAE",
    description: "Get a free quote in 2 hours. Events, weddings, DVCs, Reels, TikTok, corporate & drone across all 7 UAE emirates. WhatsApp available.",
    url: "https://www.backyardstudioofficial.com/contact",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Backyard Studio Official — Dubai UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Backyard Studio Official | Free Quote in 2 Hours",
    description: "Dubai's best production studio. WhatsApp +971-58-588-2685. Free quote in 2 hours.",
    images: ["/og-image.jpg"],
  },
};

const CONTACT_FAQS = [
  {
    question: "How do I get a quote from Backyard Studio in Dubai?",
    answer: "You can get a free production quote from Backyard Studio Official in three ways: fill out the contact form on this page, send us a WhatsApp message at +971-58-588-2685, or email info@backyardstudioofficial.com. We respond within 2 hours, 7 days a week.",
  },
  {
    question: "How quickly does Backyard Studio respond to enquiries?",
    answer: "Backyard Studio Official guarantees a response to all project briefs within 2 hours — including evenings and weekends. For urgent same-day shoots, call or WhatsApp us directly at +971-58-588-2685.",
  },
  {
    question: "Where is Backyard Studio based in Dubai?",
    answer: "Backyard Studio Official is based in Dubai, UAE, and covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We can mobilise production teams across the UAE within 24–48 hours.",
  },
  {
    question: "What information should I include in my production brief?",
    answer: "To get the most accurate quote, include: your shoot date (or approximate timeline), location preference, type of content needed (video/photography/both), approximate duration or deliverables, and any reference content or mood boards you have. The more detail you provide, the faster we can respond with a tailored proposal.",
  },,
  {
    question: "What is Backyard Studio's minimum project budget?",
    answer: "Backyard Studio Official works with projects across a wide range of budgets. A social media shoot or product photography session starts from AED 1,500. A full DVC or corporate brand film typically ranges from AED 15,000 to AED 200,000 depending on scope, crew size, locations, and post-production requirements. We provide detailed, transparent quotes within 2 hours of receiving your brief.",
  },
  {
    question: "Do you offer same-day or urgent production services in Dubai?",
    answer: "Yes. Backyard Studio Official maintains standby crews in Dubai for urgent same-day productions. Whether you need an emergency event shoot, a last-minute product photography session, or a quick social media content day, contact us via WhatsApp at +971 58 588 2685 for immediate scheduling. Urgent booking fees may apply depending on crew availability and equipment requirements.",
  },
  {
    question: "Can Backyard Studio handle both video and photography for the same project?",
    answer: "Yes. Backyard Studio Official is a full-service production house that handles video and photography simultaneously within the same shoot. This is more cost-efficient than hiring separate video and photography crews, and ensures visual consistency across all your deliverables — same lighting setup, same locations, same art direction, delivered together.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(CONTACT_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "Contact", url: "https://www.backyardstudioofficial.com/contact" },
      ])) }} />
      {/* Header */}
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">REACH OUT</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">CONTACT US</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-md mx-auto text-sm">
          Send us your brief and we&apos;ll respond within 2 hours. Let&apos;s make something cinematic.
        </p>
      </div>


      {/* What to expect section */}
      <section className="py-12 border-b border-[#2a2a2a]" style={{ background: "#0f0f0f" }}>
        <div className="container-xl max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-white mb-8 text-center">WHAT HAPPENS WHEN YOU GET IN TOUCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { step: "01", title: "You Send Your Brief", desc: "Fill in the form below, WhatsApp us, or email. Tell us what you need, when you need it, and where. The more detail, the faster we can quote." },
              { step: "02", title: "We Respond in 2 Hours", desc: "A senior producer reviews your brief and sends a detailed quote within 2 hours — including crew structure, equipment, timeline, and a clear breakdown of costs." },
              { step: "03", title: "We Get to Work", desc: "Once you confirm, we handle everything from pre-production planning and permits to shoot day execution and final delivery. One contact. Zero chasing." },
            ].map((s) => (
              <div key={s.step} className="p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
                <div className="text-[#e8c547] font-display text-3xl mb-3">{s.step}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-[#a0a0a0] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#a0a0a0] text-sm leading-relaxed text-center max-w-2xl mx-auto">
            We work with corporate clients, government entities, hospitality groups, real estate developers, fashion brands, F&B operators, social media creators, and individuals across all 7 UAE emirates. No project is too large or too small — every brief gets the same 2-hour response commitment and the same professional attention.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Contact FAQ */}
      <section className="py-16 border-t border-[#2a2a2a]" style={{ background: "var(--ink)" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-white text-center mb-10">CONTACT FAQ</h2>
          <div className="space-y-5">
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-[#2a2a2a] pb-5">
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.question}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <div className="h-72 bg-[#1a1a1a] border-t border-[#2a2a2a] flex items-center justify-center">
        <p className="text-[#666] text-sm">📍 Google Maps embed — add your API key in .env.local</p>
      </div>
    </div>
  );
}
