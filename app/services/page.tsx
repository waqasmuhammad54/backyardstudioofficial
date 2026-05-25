import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Film, Video, Smartphone, Megaphone, MessageSquare, Image, Plane, Building2, Clapperboard, Car, Home, Mic, Youtube, Utensils, Package, Users, Shirt, MapPin, Tv, BookOpen, Hotel, Play, Star, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Video & Photography Production Services Dubai UAE | Backyard Studio Official",
  description: "Full-service video and photography production in Dubai — events, weddings, DVCs, social media, automotive, real estate, food, product, podcast, YouTube & corporate shoots across all UAE emirates.",
  keywords: [
    "production company services Dubai",
    "video production services UAE",
    "photography services Dubai",
    "social media videography Dubai",
    "automotive photography Dubai",
    "real estate videography UAE",
    "food photography Dubai",
    "product photography Dubai",
    "podcast production Dubai",
    "YouTube video production UAE",
    "corporate videography Dubai",
    "event videography photography Dubai",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com/services" },
};

const SERVICES = [
  // Photography & Videography Verticals
  { icon: Camera,       slug: "event-videography",      label: "Event Videography & Photography",        desc: "Full-service event coverage — galas, conferences, brand launches, and weddings across all UAE emirates." },
  { icon: Image,        slug: "photo-shoots",            label: "Wedding & Photo Shoots",                 desc: "Dubai's best wedding shoot company. Pre-wedding, editorial, and lifestyle photography across UAE." },
  { icon: Smartphone,   slug: "social-media-shoots",     label: "Social Media Videography & Photography", desc: "Combined photo + video shoot days for Instagram, TikTok and YouTube — all assets in one session." },
  { icon: Car,          slug: "automotive",              label: "Automotive Videography & Photography",   desc: "Studio and on-road car shoots, dynamic footage, and GCAA drone aerials for UAE auto brands." },
  { icon: Home,         slug: "real-estate",             label: "Real Estate Videography & Photography",  desc: "Property walkthroughs, architectural photography, and drone aerials for UAE listings and developers." },
  { icon: Users,        slug: "corporate-videography",  label: "Corporate Videography & Photography",    desc: "Executive headshots, team portraits, office shoots, and LinkedIn video content for UAE businesses." },
  { icon: Utensils,     slug: "food",                    label: "Food Videography & Photography",         desc: "Styled food photography and video for UAE restaurants, delivery apps, and F&B brands." },
  { icon: Package,      slug: "product-shoots",          label: "Product Videography & Photography",      desc: "E-commerce listing shots, lifestyle product photography, and product reveal videos for UAE brands." },
  { icon: Shirt,        slug: "fashion-shoots",          label: "Fashion Shoots",                         desc: "Luxury campaigns, editorial shoots, retail lookbooks, kids fashion, and seasonal collections in UAE." },
  { icon: MapPin,       slug: "travel-lifestyle",        label: "Travel & Lifestyle Campaigns",           desc: "Hotel, resort, wellness, and tourism content for UAE hospitality brands and tourism boards." },
  { icon: Hotel,        slug: "hotel-photography",       label: "Hotel Photography & Resort Campaigns",   desc: "Full hotel photography packages — rooms, F&B, spa, resort campaigns, and real estate video tours." },
  // Commercial Production
  { icon: Tv,           slug: "tv-commercials",          label: "TV Commercials",                         desc: "Broadcast-quality brand and product commercials for UAE national broadcast and GCC markets." },
  { icon: Clapperboard, slug: "dvcs",                    label: "DVCs — Digital Video Commercials",       desc: "High-production digital video commercials for UAE brands — scripted, shot, and delivered on time." },
  { icon: Car,          slug: "car-commercials",         label: "Car Commercials",                        desc: "Cinematic automotive brand campaigns, luxury car shoots, and dynamic on-road commercial production." },
  { icon: Megaphone,    slug: "ads-shooting",            label: "Ads Shooting",                           desc: "Meta, TikTok, YouTube, OOH and broadcast ad production for high-performing UAE campaigns." },
  // Content & Social
  { icon: Play,         slug: "reels-production",        label: "Reels Production",                       desc: "TikTok videos, short-form content, and influencer campaign shoots for UAE brands and creators." },
  { icon: Video,        slug: "reels",                   label: "Reels & Short Films",                    desc: "Algorithm-optimised short-form content for Instagram, TikTok and YouTube Shorts." },
  { icon: Smartphone,   slug: "social-media-content",   label: "TikTok & Instagram Content",             desc: "Monthly content packages, strategy, and production for UAE brands and creators." },
  { icon: Mic,          slug: "podcast",                 label: "Podcast Videography",                    desc: "Multi-camera studio podcast production with broadcast audio and social clip cutting." },
  { icon: Youtube,      slug: "youtube-content",         label: "YouTube Videography",                    desc: "Full-service YouTube video production — scripting, filming, editing, thumbnails, and SEO." },
  // Corporate & Brand
  { icon: Building2,    slug: "corporate-brand-films",  label: "Corporate Brand Films",                  desc: "Company profile videos, team photography, office branding shoots, and investor films." },
  { icon: Building2,    slug: "corporate-films",         label: "Corporate Films",                        desc: "Brand documentaries, investor films, culture videos and annual report content." },
  { icon: BookOpen,     slug: "documentary",             label: "Documentary Films",                      desc: "Brand documentaries, magazine editorials, behind-the-scenes, and culture storytelling films." },
  { icon: Star,         slug: "brand-events",            label: "Brand Launch Events",                    desc: "Fashion events, corporate events, concert aftermovies — with same-day social media delivery." },
  { icon: MessageSquare,slug: "testimonial-videos",      label: "Testimonial Videos",                     desc: "Authentic client testimonials that build trust and drive conversion across UAE." },
  // Specialist
  { icon: Plane,        slug: "aerial-drone",            label: "Aerial / Drone (GCAA Licensed)",         desc: "Legally licensed drone cinematography across all 7 UAE emirates — cinematic 4K aerials." },
  { icon: Settings,     slug: "pre-post-production",    label: "Pre & Post Production",                  desc: "Location scouting, casting, styling, video editing, colour grading, and retouching services." },
  { icon: Film,         slug: "event-video-editing",     label: "Event Video Editing",                    desc: "48-hour polished highlight reels from your raw footage — colour-graded and sound-designed." },
];

const CATEGORIES = [
  {
    label: "Photography & Videography",
    slugs: ["event-videography","photo-shoots","social-media-shoots","automotive","real-estate","corporate-videography","food","product-shoots","fashion-shoots","travel-lifestyle","hotel-photography"],
  },
  {
    label: "Commercial Production",
    slugs: ["tv-commercials","dvcs","car-commercials","ads-shooting"],
  },
  {
    label: "Content & Social Media",
    slugs: ["reels-production","reels","social-media-content","podcast","youtube-content"],
  },
  {
    label: "Corporate & Brand",
    slugs: ["corporate-brand-films","corporate-films","documentary","brand-events","testimonial-videos"],
  },
  {
    label: "Specialist Services",
    slugs: ["aerial-drone","pre-post-production","event-video-editing"],
  },
];

const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">WHAT WE DO</p>
        <h1 className="font-display text-6xl md:text-7xl text-white">SERVICES</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Dubai's most comprehensive production studio. Video, photography, commercials, social media, events, and specialist services — all delivered to broadcast standard across all 7 UAE emirates.
        </p>
      </div>

      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl space-y-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-8 border-b border-[#2a2a2a] pb-4">{cat.label}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.slugs.map((slug) => {
                  const s = SERVICE_MAP[slug];
                  if (!s) return null;
                  const Icon = s.icon;
                  return (
                    <Link key={slug} href={`/services/${slug}`}
                      className="group p-7 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm card-glow">
                      <div className="w-12 h-12 bg-[#e8c547]/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#e8c547]/20 transition-colors">
                        <Icon size={22} className="text-[#e8c547]" />
                      </div>
                      <h2 className="text-white font-bold text-base mb-2">{s.label}</h2>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">{s.desc}</p>
                      <span className="text-[#e8c547] text-xs font-semibold tracking-wide">Learn More →</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111] text-center border-t border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-4">READY TO START?</p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">GET A QUOTE IN 2 HOURS</h2>
        <p className="text-[#a0a0a0] mb-8 max-w-md mx-auto text-sm">Tell us about your project and we&apos;ll respond with a custom production plan within 2 hours.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="btn-gold">Request a Quote →</Link>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
