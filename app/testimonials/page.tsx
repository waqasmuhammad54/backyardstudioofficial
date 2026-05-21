import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | Backyard Studio Official UAE",
  description: "See what UAE brands say about Backyard Studio Official — 100+ 5-star reviews for event shoots, DVCs, Reels, ads and video production across the UAE.",
};

const TESTIMONIALS = [
  { name: "Sarah Al Mansouri",  role: "Marketing Director",    company: "Emaar Properties",         service: "Event Shoots",           rating: 5, quote: "Backyard Studio delivered our event coverage with a level of professionalism and creativity that exceeded every expectation. The final film moved our entire leadership team to tears. Pure cinematic magic." },
  { name: "James McKinley",     role: "CEO",                   company: "FinTech Hub UAE",           service: "Testimonial Videos",     rating: 5, quote: "Our testimonial video series increased our website conversion rate by 47% within the first month. The team understood our brand voice perfectly and made our clients look and sound incredible." },
  { name: "Noor Khalifa",       role: "Brand Manager",         company: "Noon.com",                 service: "Social Media Content",   rating: 5, quote: "The Instagram Reels campaign Backyard Studio produced for our Ramadan launch garnered 2.3 million views organically. They genuinely understand what works for the UAE audience." },
  { name: "Ahmed Rashid",       role: "Founder",               company: "Luxury Motors Dubai",      service: "DVCs",                   rating: 5, quote: "Our DVC production was flawless — from location scouting in Fujairah to the final colour grade. Backyard Studio are in a different league. Worth every dirham." },
  { name: "Fatima Al Zarouni",  role: "Events Manager",        company: "DIFC Authority",           service: "Event Shoots",           rating: 5, quote: "We've worked with Backyard Studio on 12 DIFC events now. Their consistency, professionalism and creative output is unmatched in the UAE market." },
  { name: "Raj Patel",          role: "Head of Marketing",     company: "Majid Al Futtaim",         service: "Corporate Films",        rating: 5, quote: "The corporate brand film Backyard Studio produced has been used in boardroom presentations, investor decks, and on our global website. It's our best piece of content ever." },
  { name: "Lena Kovacs",        role: "Digital Director",      company: "Jumeirah Group",           service: "Social Media Content",   rating: 5, quote: "Our TikTok account went from 8k to 200k followers within 3 months of partnering with Backyard Studio. Their content creation process is exceptional." },
  { name: "Hassan Al Maktoum",  role: "Managing Partner",      company: "Al Maktoum Ventures",      service: "DVCs",                   rating: 5, quote: "World-class production quality at competitive UAE pricing. They delivered our brand launch film on time, on budget, and above brief. Highly recommended." },
  { name: "Mei Ling",           role: "Brand Partnerships",    company: "TikTok MENA",              service: "Social Media Content",   rating: 5, quote: "Backyard Studio understand short-form content better than any production company we've worked with across the MENA region. True experts." },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">CLIENT REVIEWS</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">TESTIMONIALS</h1>
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="#e8c547" color="#e8c547" />)}
          <span className="text-[#a0a0a0] ml-2 text-sm">5.0 — 100+ reviews</span>
        </div>
      </div>

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
                <p className="text-[#a0a0a0] text-xs">{t.role} — {t.company}</p>
                <span className="mt-2 inline-block text-[10px] text-[#e8c547] border border-[#e8c547]/30 px-2 py-0.5 rounded-sm uppercase tracking-wide">{t.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#a0a0a0] mb-6">Ready to join 500+ happy UAE clients?</p>
          <Link href="/contact" className="btn-gold">Start a Project →</Link>
        </div>
      </section>
    </div>
  );
}
