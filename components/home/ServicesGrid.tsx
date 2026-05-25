"use client";
import Link from "next/link";
import { useState } from "react";
import { Camera, Film, Video, Smartphone, Megaphone, MessageSquare, ImageIcon, Plane, Building2, Clapperboard, Car, Home, Mic, Youtube, Utensils, Package, Users, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Camera,        slug: "event-videography",      label: "Event Videography & Photography",       num: "01", desc: "Full-service event coverage — galas, conferences, launches and weddings across all UAE emirates." },
  { icon: ImageIcon,     slug: "photo-shoots",            label: "Wedding & Photo Shoots",                num: "02", desc: "Dubai's best wedding shoot company. Pre-wedding, editorial, and lifestyle photography across UAE." },
  { icon: Smartphone,    slug: "social-media-shoots",     label: "Social Media Videography & Photography",num: "03", desc: "Combined photo + video shoot days for Instagram, TikTok and YouTube — all assets in one session." },
  { icon: Car,           slug: "automotive",              label: "Automotive Videography & Photography",  num: "04", desc: "Studio and on-road car shoots, dynamic footage, and GCAA drone aerials for UAE auto brands." },
  { icon: Home,          slug: "real-estate",             label: "Real Estate Videography & Photography", num: "05", desc: "Property walkthroughs, architectural photography, and drone aerials for UAE listings and developers." },
  { icon: Users,         slug: "corporate-videography",  label: "Corporate Videography & Photography",   num: "06", desc: "Executive headshots, team portraits, office shoots, and LinkedIn video content for UAE businesses." },
  { icon: Mic,           slug: "podcast",                 label: "Podcast Videography",                   num: "07", desc: "Multi-camera studio podcast production with broadcast audio and social clip cutting." },
  { icon: Youtube,       slug: "youtube-content",         label: "YouTube Videography",                   num: "08", desc: "Full-service YouTube video production for UAE brands — scripting, filming, editing, thumbnails." },
  { icon: Utensils,      slug: "food",                    label: "Food Videography & Photography",        num: "09", desc: "Styled food photography and cinematic video for UAE restaurants, delivery apps, and F&B brands." },
  { icon: Package,       slug: "product-shoots",          label: "Product Videography & Photography",     num: "10", desc: "E-commerce listing shots, lifestyle product photography, and product reveal videos." },
  { icon: Clapperboard,  slug: "dvcs",                    label: "DVCs & TV Commercials",                 num: "11", desc: "High-production digital video commercials that make UAE audiences stop, watch, and act." },
  { icon: Video,         slug: "reels",                   label: "Reels & Short Films",                   num: "12", desc: "Algorithm-optimised short-form content built for maximum organic reach on Instagram & TikTok." },
  { icon: Megaphone,     slug: "ads-shooting",            label: "Ads Shooting",                          num: "13", desc: "High-production ad content for Meta, TikTok, YouTube, OOH & broadcast campaigns." },
  { icon: Plane,         slug: "aerial-drone",            label: "Aerial / Drone (GCAA Licensed)",        num: "14", desc: "GCAA-licensed drone cinematography across all 7 UAE emirates — from desert to coastline." },
  { icon: Building2,     slug: "corporate-films",         label: "Corporate Films",                       num: "15", desc: "Brand documentaries, investor films, culture content & annual report videos." },
  { icon: MessageSquare, slug: "testimonial-videos",      label: "Testimonial Videos",                    num: "16", desc: "Authentic client testimonials that build instant trust and drive measurable conversion." },
  { icon: Film,          slug: "event-video-editing",     label: "Event Video Editing",                   num: "17", desc: "48-hour polished highlight reels from raw footage. Colour-graded, sound-designed, ready to post." },
];

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="section-pad bg-ink relative overflow-hidden">
      <div className="section-num">02</div>

      {/* Top gold line */}
      <div className="gold-line-full mb-0" />

      <div className="container-xl pt-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-cream leading-none">
              OUR<br /><span className="gold-text">SERVICES</span>
            </h2>
          </div>
          <p className="text-silver/60 max-w-xs text-sm font-light leading-relaxed md:text-right">
            Full-spectrum creative production for UAE brands. Available across all 7 emirates, 365 days a year.
          </p>
        </div>

        {/* Services list — editorial row layout */}
        <div className="border-t border-white/5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hovered === s.slug;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`}
                onMouseEnter={() => setHovered(s.slug)}
                onMouseLeave={() => setHovered(null)}
                className={`group flex items-center gap-6 py-5 px-4 border-b border-white/5 transition-all duration-500 relative overflow-hidden
                  ${isHovered ? "bg-gold/[0.04] border-gold/20" : "hover:bg-white/[0.015]"}`}
              >
                {/* Gold sweep bg */}
                <div className={`absolute inset-0 bg-gradient-to-r from-gold/[0.06] to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                {/* Number */}
                <span className={`font-display text-sm transition-colors duration-300 w-8 shrink-0 ${isHovered ? "text-gold" : "text-white/20"}`}>{s.num}</span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? "bg-gold/20" : "bg-white/5"}`}>
                  <Icon size={18} className={`transition-colors duration-300 ${isHovered ? "text-gold" : "text-silver/60"}`} />
                </div>

                {/* Label */}
                <h3 className={`font-display text-xl md:text-2xl tracking-wide flex-1 transition-colors duration-300 ${isHovered ? "text-cream" : "text-silver/70"}`}>
                  {s.label.toUpperCase()}
                </h3>

                {/* Description (desktop only) */}
                <p className={`hidden lg:block text-xs text-silver/50 max-w-xs font-light leading-relaxed transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isHovered ? "border-gold bg-gold/10 text-gold" : "border-white/10 text-silver/30"}`}>
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/services"  className="btn-gold"><span>All Services</span></Link>
          <Link href="/contact"   className="btn-outline"><span>Get a Quote</span><ArrowUpRight size={13} /></Link>
        </div>
      </div>
    </section>
  );
}
