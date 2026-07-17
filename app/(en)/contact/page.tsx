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
    description: "Request a Dubai production quote by form, WhatsApp or email. Commercial video, events, weddings, photography and social content.",
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
    answer: "Backyard Studio aims to respond to project briefs within 2 hours. For urgent or same-day requirements, call or WhatsApp +971-58-588-2685 directly.",
  },
  {
    question: "Where is Backyard Studio based in Dubai?",
    answer: "Backyard Studio Official is based in Dubai, UAE, and covers all 7 UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We can mobilise production teams across the UAE within 24–48 hours.",
  },
  {
    question: "What information should I include in my production brief?",
    answer: "To get the most accurate quote, include: your shoot date (or approximate timeline), location preference, type of content needed (video/photography/both), approximate duration or deliverables, and any reference content or mood boards you have. The more detail you provide, the faster we can respond with a tailored proposal.",
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
