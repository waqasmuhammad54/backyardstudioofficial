import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Film, Video, Smartphone, Megaphone, MessageSquare, Image, Plane, Building2, Clapperboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Production Services in UAE | Backyard Studio Official",
  description: "Event shoots, DVCs, Instagram Reels, TikTok, testimonials, aerial drone & ads — full-service video production across Dubai, Abu Dhabi and all UAE.",
};

const SERVICES = [
  { icon: Camera,        slug: "event-shoots",         label: "Event Shoots",           desc: "Corporate events, launches, conferences, galas — cinematic coverage of your most important moments." },
  { icon: Film,          slug: "event-video-editing",  label: "Event Video Editing",    desc: "48-hour turnaround on polished highlight reels from your raw event footage." },
  { icon: Clapperboard,  slug: "dvcs",                 label: "DVCs",                   desc: "Digital video commercials that drive brand awareness and direct response across UAE." },
  { icon: Video,         slug: "reels",                label: "Reels & Short Films",    desc: "Cinematic short-form content engineered for maximum reach on Instagram, TikTok and YouTube Shorts." },
  { icon: Image,         slug: "photo-shoots",         label: "Photo Shoots",           desc: "Lifestyle, product, editorial and architectural photography for UAE brands." },
  { icon: Smartphone,    slug: "social-media-content", label: "TikTok & Instagram",     desc: "Vertical-first content strategy and production for the UAE social media landscape." },
  { icon: MessageSquare, slug: "testimonial-videos",   label: "Testimonial Videos",     desc: "Authentic client testimonials and case study films that convert browsers into buyers." },
  { icon: Megaphone,     slug: "ads-shooting",         label: "Ads Shooting",           desc: "Commercial ad production for Meta, Google, TikTok, OOH and broadcast campaigns." },
  { icon: Plane,         slug: "aerial-drone",         label: "Aerial / Drone",         desc: "GCAA-licensed drone cinematography across all UAE emirates." },
  { icon: Building2,     slug: "corporate-films",      label: "Corporate Films",        desc: "Brand documentaries, investor films, annual report videos and culture content." },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">WHAT WE DO</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">SERVICES</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-md mx-auto text-sm">
          Full-spectrum creative production across all UAE emirates. Every service, delivered to broadcast standard.
        </p>
      </div>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group p-7 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm card-glow">
                <div className="w-14 h-14 bg-[#e8c547]/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#e8c547]/20 transition-colors">
                  <Icon size={26} className="text-[#e8c547]" />
                </div>
                <h2 className="text-white font-bold text-lg mb-3">{s.label}</h2>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="text-[#e8c547] text-xs font-semibold tracking-wide">Learn More →</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
