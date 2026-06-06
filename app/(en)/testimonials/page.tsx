import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — Dubai Production Studio | Backyard Studio Official",
  description: "100+ five-star reviews from UAE brands — Emaar, Noon, GITEX, luxury hotels & more. See what clients say about Backyard Studio Official's event shoots, DVCs, Reels and production services.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/testimonials" },
  openGraph: {
    title: "Client Reviews & Testimonials | Backyard Studio Official Dubai",
    description: "100+ five-star reviews from UAE brands including Emaar, Noon, and luxury hotels. Dubai's most trusted production studio.",
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

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] r