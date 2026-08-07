import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Film, Video, Smartphone, Megaphone, MessageSquare, Image, Plane, Building2, Clapperboard, Car, Home, Mic, Youtube, Utensils, Package, Users, Shirt, MapPin, Tv, BookOpen, Hotel, Play, Star, Settings } from "lucide-react";
import { faqSchema, itemListSchema, breadcrumbSchema, speakableSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Production Services Dubai | Backyard Studio" },
  description: "28+ production services in Dubai. Events, weddings, DVCs, Reels, corporate films, product and real estate. Free itemised quote in 2 hours.",
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

const SERVICES_FAQS = [
  {
    question: "What video and photography services does Backyard Studio offer in Dubai?",
    answer: "Backyard Studio Official offers 28+ production services in Dubai and UAE: event videography & photography, wedding photography & videography, DVCs (digital video commercials), TV commercials, Instagram Reels production, TikTok content creation, social media content, aerial drone (GCAA-approved), corporate films, corporate brand films, real estate photography & videography, product photography, fashion shoots, food photography, hotel photography, automotive video production, podcast videography, YouTube content production, testimonial videos, documentary films, brand launch events, ads shooting, pre & post production, and event video editing.",
  },
  {
    question: "Does Backyard Studio produce Instagram Reels and TikTok content in Dubai?",
    answer: "Yes. Backyard Studio Official is one of Dubai's leading social media content studios. We produce Instagram Reels, TikTok videos, YouTube Shorts, and full social media content packages for UAE brands — from one-off shoots to monthly retainer packages. Our social content starts from AED 2,500 per shoot day.",
  },
  {
    question: "What are the prices for production services in Dubai?",
    answer: "Backyard Studio Official's production services start from AED 1,500 for product photography, AED 3,000 for event coverage, AED 2,500 for Instagram Reels and social media content, AED 7,500 for wedding photography and videography packages, and AED 15,000 for DVCs and TV commercials. Final scope is confirmed in an itemised quote.",
  },
  {
    question: "Does Backyard Studio offer drone or aerial filming across the UAE?",
    answer: "Yes — aerial coverage is available within our productions, such as real estate, resort, event and launch shoots, under GCAA-licensed drone operation and the required permits. We provide it as part of a production rather than as a standalone drone booking. Aerial work is flown under a GCAA (General Civil Aviation Authority) drone operator licence, with airspace approvals across all 7 UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
  },
  {
    question: "How quickly does Backyard Studio deliver production content?",
    answer: "Our standard delivery is 48–72 hours for photography and 5–7 working days for video production. Rush delivery is available for same-day social media highlights and 24-hour photography. Event highlights can be delivered on the night of the event for immediate social posting.",
  },
  {
    question: "Can Backyard Studio produce content for all industries in UAE?",
    answer: "Yes. Backyard Studio Official produces specialist content for 13 industries across the UAE: hospitality, real estate, fashion, food & beverage, corporate, sports, automotive, healthcare, technology, music & entertainment, fitness & wellness, e-commerce & retail, and education. Each industry vertical has a dedicated production approach.",
  },
];

const SERVICES_ITEM_LIST = [
  { name: "Event Videography & Photography Dubai", url: "https://www.backyardstudioofficial.com/services/event-videography", description: "Full event coverage across all UAE emirates." },
  { name: "Wedding Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/wedding-photography", description: "Wedding photography and videography packages from AED 7,500." },
  { name: "DVCs Digital Video Commercials Dubai", url: "https://www.backyardstudioofficial.com/services/dvcs", description: "High-production DVCs from AED 8,000." },
  { name: "Instagram Reels Production Dubai", url: "https://www.backyardstudioofficial.com/services/reels-production", description: "Algorithm-optimised Reels from AED 2,500." },
  { name: "TikTok Content Creation Dubai", url: "https://www.backyardstudioofficial.com/services/social-media-content", description: "Monthly TikTok content packages for UAE brands." },
  { name: "Corporate Films Dubai", url: "https://www.backyardstudioofficial.com/services/corporate-films", description: "Brand films from AED 15,000." },
  { name: "Real Estate Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/real-estate", description: "Property content from AED 1,500." },
  { name: "Product Photography Dubai", url: "https://www.backyardstudioofficial.com/services/product-shoots", description: "E-commerce product photography from AED 1,500." },
  { name: "Hotel Photography Dubai", url: "https://www.backyardstudioofficial.com/services/hotel-photography", description: "Full hotel photography packages for UAE properties." },
  { name: "Automotive Video Production Dubai", url: "https://www.backyardstudioofficial.com/services/automotive", description: "Car commercials and automotive content in UAE." },
  { name: "Corporate Photography & Videography Dubai", url: "https://www.backyardstudioofficial.com/services/corporate-videography", description: "Executive headshots and company photography." },
  { name: "Food Photography Dubai", url: "https://www.backyardstudioofficial.com/services/food", description: "Restaurant and F&B photography from AED 2,500." },
  { name: "Fashion Photography Dubai", url: "https://www.backyardstudioofficial.com/services/fashion-shoots", description: "Editorial and lookbook shoots in UAE." },
  { name: "Testimonial Videos Dubai", url: "https://www.backyardstudioofficial.com/services/testimonial-videos", description: "Client testimonial video production UAE." },
  { name: "Podcast Videography Dubai", url: "https://www.backyardstudioofficial.com/services/podcast", description: "Multi-camera video podcast production from AED 1,800." },
];

const SERVICES = [
  // Weddings
  { icon: Camera,       slug: "wedding-photography",     label: "Wedding Photography Dubai",              desc: "Current photo and video packages from AED 7,500, with crew, deliverables and delivery terms listed clearly." },
  { icon: Film,         slug: "wedding-videography",     label: "Wedding Videography",                    desc: "Cinematic wedding films by a real production house — cinema cameras, clean vow audio, drone aerials across UAE." },
  { icon: Star,         slug: "pre-wedding-shoot",       label: "Pre-Wedding Shoots",                     desc: "Desert, Burj Khalifa, Madinat Jumeirah & beach pre-wedding photoshoots from AED 1,500 with golden-hour planning." },
  { icon: Image,        slug: "flying-dress-photoshoot", label: "Flying Dress Photoshoot",                desc: "Dubai's iconic flying dress experience from AED 1,499 — dress included, desert & beach locations, 48-hour delivery." },
  { icon: Camera,       slug: "affordable-wedding-photography", label: "Wedding Package Guide",  desc: "Compare the Essential package and learn what to check before choosing a lower-cost wedding production option." },
  { icon: MapPin,       slug: "wedding-photography-abu-dhabi",  label: "Wedding Photographer Abu Dhabi",  desc: "Emirates Palace, Saadiyat & Yas Island wedding coverage at Dubai prices — zero travel fees." },
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
    slugs: ["pre-post-production","event-video-editing"],
  },
];

const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(SERVICES_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(SERVICES_ITEM_LIST)) }} />
      {/* speakable — marks which parts of the page a voice assistant should read
          aloud. Low-cost, and this is a money page that answers "what do you do". */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema("https://www.backyardstudioofficial.com/services")) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
      ])) }} />
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

      {/* BY INDUSTRY */}
      <section className="py-16 border-t border-[#2a2a2a]" style={{ background: "var(--black)" }}>
        <div className="container-xl">
          <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-3 text-center">PRODUCTION BY INDUSTRY</p>
          <h2 className="font-display text-3xl text-white text-center mb-10">WE KNOW YOUR SECTOR</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Hospitality",     slug: "hospitality",   desc: "Hotels, resorts & F&B" },
              { label: "Real Estate",     slug: "real-estate",   desc: "Listings & developer films" },
              { label: "Fashion",         slug: "fashion",       desc: "Editorial & campaigns" },
              { label: "Food & Beverage", slug: "food-beverage", desc: "Menus & delivery apps" },
              { label: "Corporate",       slug: "corporate",     desc: "Films & executive photos" },
            ].map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`}
                className="group p-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm text-center card-glow">
                <p className="text-white font-bold text-sm mb-1 group-hover:text-[#e8c547] transition-colors">{i.label}</p>
                <p className="text-[#666] text-xs">{i.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-[#2a2a2a]" style={{ background: "var(--ink)" }}>
        <div className="container-xl max-w-4xl mx-auto">
          <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3 text-center">FAQ</p>
          <h2 className="font-display text-4xl text-white text-center mb-12">PRODUCTION SERVICES FAQ</h2>
          <div className="space-y-6">
            {SERVICES_FAQS.map((faq) => (
              <div key={faq.question} className="border-b border-[#2a2a2a] pb-6">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
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
