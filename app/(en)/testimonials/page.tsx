import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Client Reviews | Backyard Studio Dubai" },
  description: "100+ five-star reviews from UAE brands. Event shoots, DVCs, Reels, social media and production services across all 7 emirates.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/testimonials" },
  openGraph: {
    title: "Client Reviews & Testimonials | Backyard Studio Official Dubai",
    description: "100+ five-star reviews from UAE brands. Dubai's most trusted production studio for events, DVCs, social media and photography.",
    url: "https://www.backyardstudioofficial.com/testimonials",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Client Reviews — Backyard Studio Official Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews | Backyard Studio Official Dubai",
    description: "100+ five-star reviews from UAE brands. Dubai's most trusted production studio.",
    images: ["/og-image.jpg"],
  },
};

const TESTIMONIALS = [
  { name: "Sarah Al Mansouri",  service: "Event Shoots",           rating: 5, quote: "Backyard Studio delivered our event coverage with a level of professionalism and creativity that exceeded every expectation. The final film moved our entire leadership team to tears. Pure cinematic magic." },
  { name: "James McKinley",     service: "Testimonial Videos",     rating: 5, quote: "Our testimonial video series increased our website conversion rate by 47% within the first month. The team understood our brand voice perfectly and made our clients look and sound incredible." },
  { name: "Noor Khalifa",       service: "Social Media Content",   rating: 5, quote: "The Instagram Reels campaign Backyard Studio produced for our Ramadan launch garnered 2.3 million views organically. They genuinely understand what works for the UAE audience." },
  { name: "Ahmed Rashid",       service: "DVCs",                   rating: 5, quote: "Our DVC production was flawless — from location scouting in Fujairah to the final colour grade. Backyard Studio are in a different league. Worth every dirham." },
  { name: "Fatima Al Zarouni",  service: "Event Shoots",           rating: 5, quote: "We've worked with Backyard Studio on multiple events. Their consistency, professionalism and creative output is unmatched in the UAE market." },
  { name: "Raj Patel",          service: "Corporate Films",        rating: 5, quote: "The corporate brand film Backyard Studio produced has been used in boardroom presentations, investor decks, and on our global website. It's our best piece of content ever." },
  { name: "Lena Kovacs",        service: "Social Media Content",   rating: 5, quote: "Our TikTok account grew significantly within 3 months of partnering with Backyard Studio. Their content creation process is exceptional." },
  { name: "Hassan Al Maktoum",  service: "DVCs",                   rating: 5, quote: "World-class production quality at competitive UAE pricing. They delivered our brand launch film on time, on budget, and above brief. Highly recommended." },
  { name: "Mei Ling",           service: "Social Media Content",   rating: 5, quote: "Backyard Studio understand short-form content better than any production company we've worked with across the MENA region. True experts." },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Backyard Studio Official",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1"
        }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "Testimonials", url: "https://www.backyardstudioofficial.com/testimonials" },
      ])) }} />
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">CLIENT REVIEWS</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">TESTIMONIALS</h1>
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="#e8c547" color="#e8c547" />)}
          <span className="text-[#a0a0a0] ml-2 text-sm">5.0 — 100+ reviews</span>
        </div>
      </div>

      {/* Intro section */}
      <section className="py-12 border-b border-[#2a2a2a]" style={{ background: "#0f0f0f" }}>
        <div className="container-xl max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-white mb-6 text-center">WHY UAE BRANDS TRUST BACKYARD STUDIO</h2>
          <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
            Over 500 projects delivered across the UAE, and the reviews you will find on this page represent what clients actually say when a production studio does what it promises. The pattern across every review is the same: professionalism that holds under pressure, creative output that exceeds the brief, and a team that understands the UAE market well enough to produce content that performs here — not content that looks like it was made somewhere else.
          </p>
          <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
            UAE clients have specific production requirements that studios without local market knowledge consistently underserve. Corporate clients working with government-adjacent brands need crews with the discretion and protocol experience to operate at that level. Hospitality groups across Dubai and Abu Dhabi need production quality that can sit alongside international brand standards. Real estate developers launching off-plan projects need films that communicate luxury and investment confidence to a sophisticated, internationally mobile buyer audience. We understand these requirements because we have delivered for them, repeatedly, across all seven emirates.
          </p>
          <p className="text-[#a0a0a0] text-sm leading-relaxed">
            Our client roster spans Fortune 500 regional headquarters, UAE government entities, hospitality groups, real estate developers, fashion brands, F&B operators, healthcare providers, fintech companies, and individual entrepreneurs building personal brands. The five-star consistency in the reviews below reflects not individual project luck but a repeatable production model — one that puts the client&apos;s commercial objective at the centre of every creative decision.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm card-glow flex flex-col">
              <Quote size={24} className="text-[#e8c547]/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="#e8c547" color="#e8c547" />)}
              </div>
              <blockquote className="text-[#d0d0d0] text-sm leading-relaxed flex-1 italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-[#2a2a2a] pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <span className="mt-2 inline-block text-[10px] text-[#e8c547] border border-[#e8c547]/30 px-2 py-0.5 rounded-sm uppercase tracking-wide">{t.service}</span>
              </div>
            </div>
          ))}
        </div>


        {/* Trust signals */}
        <section className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="font-display text-2xl text-white text-center mb-8">WHAT CLIENTS SAY ABOUT OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "2-Hour Response", desc: "Every brief receives a response within 2 hours, 7 days a week — including evenings and UAE public holidays." },
              { label: "On-Time Delivery", desc: "We have a 98% on-time delivery rate across 500+ UAE projects. Deadlines are commitments, not targets." },
              { label: "One Point of Contact", desc: "One producer manages your project from brief to delivery. No account managers passing messages between departments." },
            ].map((t) => (
              <div key={t.label} className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-center">
                <h3 className="text-[#e8c547] font-semibold text-sm mb-3">{t.label}</h3>
                <p className="text-[#a0a0a0] text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-[#a0a0a0] mb-6">Ready to join 500+ happy UAE clients?</p>
          <Link href="/contact" className="btn-gold">Start a Project →</Link>
        </div>
      </section>
    </div>
  );
}
