import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";

// Vimeo video embeds per service slug
const SERVICE_VIDEOS: Record<string, { id: string; title: string; poster: string }> = {
  "photo-shoots":          { id: "1194038771", title: "Couple Shoots",  poster: "/images/wedding/wedding-05.webp" },
  "event-shoots":          { id: "1194038751", title: "Wedding Shoots", poster: "/images/wedding/wedding-01.webp" },
  "reels":                 { id: "1194038719", title: "Fashion Shoots", poster: "/images/creative/creative-04.webp" },
  "dvcs":                  { id: "1194038719", title: "Fashion Shoots", poster: "/images/creative/creative-04.webp" },
  "social-media-content":  { id: "1194038719", title: "Fashion Shoots", poster: "/images/creative/creative-04.webp" },
};

// Map slug -> real hero + gallery images
const SERVICE_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  "event-shoots": {
    hero: "/images/events/event-01.webp",
    gallery: ["/images/events/event-02.webp", "/images/events/event-03.webp", "/images/events/event-04.webp", "/images/events/event-05.webp", "/images/events/event-06.webp"],
  },
  "event-video-editing": {
    hero: "/images/events/event-03.webp",
    gallery: ["/images/events/event-01.webp", "/images/events/event-05.webp", "/images/events/event-06.webp"],
  },
  "dvcs": {
    hero: "/images/creative/creative-04.webp",
    gallery: ["/images/creative/creative-05.webp", "/images/creative/creative-13.webp", "/images/creative/creative-10.webp", "/images/creative/creative-01.webp"],
  },
  "reels": {
    hero: "/images/creative/creative-13.webp",
    gallery: ["/images/creative/creative-24.webp", "/images/creative/creative-04.webp", "/images/creative/creative-10.webp", "/images/creative/creative-05.webp"],
  },
  "photo-shoots": {
    hero: "/images/creative/creative-04.webp",
    gallery: ["/images/wedding/wedding-01.webp", "/images/products/product-03.webp", "/images/creative/creative-13.webp", "/images/wedding/wedding-16.webp", "/images/products/product-01.webp", "/images/creative/creative-10.webp"],
  },
  "social-media-content": {
    hero: "/images/creative/creative-05.webp",
    gallery: ["/images/creative/creative-01.webp", "/images/creative/creative-04.webp", "/images/creative/creative-13.webp", "/images/creative/creative-24.webp"],
  },
  "testimonial-videos": {
    hero: "/images/events/event-04.webp",
    gallery: ["/images/events/event-01.webp", "/images/events/event-02.webp", "/images/events/event-06.webp"],
  },
  "ads-shooting": {
    hero: "/images/events/event-02.webp",
    gallery: ["/images/creative/creative-04.webp", "/images/products/product-03.webp", "/images/events/event-03.webp", "/images/creative/creative-13.webp"],
  },
  "aerial-drone": {
    hero: "/images/wedding/wedding-01.webp",
    gallery: ["/images/wedding/wedding-02.webp", "/images/wedding/wedding-16.webp"],
  },
  "corporate-films": {
    hero: "/images/events/event-05.webp",
    gallery: ["/images/events/event-01.webp", "/images/events/event-06.webp", "/images/events/event-03.webp"],
  },
};

const DEFAULT_IMAGES = {
  hero: "/images/events/event-01.webp",
  gallery: ["/images/creative/creative-04.webp", "/images/events/event-03.webp"],
};

const SERVICE_DATA: Record<string, { title: string; description: string; includes: string[]; faqs: { q: string; a: string }[] }> = {
  "event-shoots": {
    title: "Event Shoots",
    description: "Backyard Studio Official captures your events with the same cinematic intensity we bring to major film productions. From intimate executive dinners to 5,000-person conferences in Dubai World Trade Centre, every moment is documented with purpose, precision, and a keen storytelling eye.\n\nOur event teams are UAE-native, meaning we know the venues, the light conditions, and the cultural nuances that make event coverage here different from anywhere else in the world. We operate with full redundancy, always two camera operators minimum, so nothing is ever missed.",
    includes: ["Multi-camera setup", "Professional lighting when required", "On-site audio recording", "48-hour edited highlight reel", "Full raw footage archive", "Social media cutdowns (Reels/TikTok format)", "Same-day teaser clip", "Color grading & sound design"],
    faqs: [
      { q: "How quickly can we get the highlight reel after the event?", a: "Standard delivery is 48 hours. We also offer a same-day teaser service for social media, a 60-second clip delivered within 4 hours of the event ending." },
      { q: "Do you cover events outside Dubai?", a: "Absolutely. We cover events across all 7 UAE emirates and can mobilise internationally with advance notice." },
      { q: "What's the minimum booking duration?", a: "We typically work in half-day (4hr) blocks for event coverage. Full-day rates are more cost-effective for events longer than 5 hours." },
      { q: "Can you live-stream our event?", a: "Yes. We offer fully managed live-stream production including multi-camera switching, graphics, and broadcast to YouTube, LinkedIn, or custom RTMP destinations." },
      { q: "Do you provide photographers as well?", a: "Yes, we offer combined photography and videography packages, which most clients find more cost-effective than booking separately." },
    ],
  },
  "dvcs": {
    title: "DVCs — Digital Video Commercials",
    description: "A great DVC does not just look good, it sells. At Backyard Studio Official, we approach every digital video commercial with a performance mindset: what emotion do we need to trigger, what action do we need to drive, and how do we achieve both within the first 3 seconds before a viewer can skip?\n\nOur DVC production process is built on UAE market intelligence. We understand what visual languages resonate with Arab, South Asian, and Western expat audiences across different platforms. The result is commercial content that does not just get views, it gets results.",
    includes: ["Full script & storyboard development", "Location scouting across UAE", "Professional talent casting", "Brand-aligned production design", "Multi-format delivery (16:9, 9:16, 1:1)", "Motion graphics & titles", "Professional voice-over recording", "Social media optimization"],
    faqs: [
      { q: "How long does a DVC take to produce?", a: "Typically 2 to 4 weeks from brief to delivery, depending on complexity. Expedited production is available." },
      { q: "Do you handle the script and creative concept?", a: "Yes. We offer full creative development from initial concept and scripting through to final delivery." },
      { q: "Can you produce multiple versions for A/B testing?", a: "Absolutely. We recommend producing 2 to 3 variants with different hooks for the first 3 seconds, and we can accommodate this efficiently." },
      { q: "What is included in multi-format delivery?", a: "We deliver in all key aspect ratios: 16:9 for YouTube/TV, 9:16 for TikTok/Instagram Stories/Reels, and 1:1 for Instagram feed." },
      { q: "Do you offer media buying alongside production?", a: "We focus on production excellence. For media buying and campaign management, we have trusted agency partners we can recommend." },
    ],
  },
};

const DEFAULT_SERVICE = {
  title: "Production Service",
  description: "Backyard Studio Official delivers world-class production across the UAE. Our team combines technical excellence with deep market knowledge to create content that genuinely moves your audience and drives measurable results for your brand.",
  includes: ["Professional crew & equipment", "Creative direction", "Full post-production", "Multi-format delivery", "48hr standard turnaround", "Revisions included"],
  faqs: [
    { q: "How quickly can you start on a project?", a: "For most projects, we can mobilise within 48 to 72 hours of receiving a confirmed brief and deposit." },
    { q: "Do you work across all UAE emirates?", a: "Yes, we cover all 7 UAE emirates and can travel internationally with advance notice." },
    { q: "What is the process for getting started?", a: "Fill in our contact form with your brief, we will respond within 2 hours, and we will schedule a call to scope the project properly." },
    { q: "Are revisions included?", a: "Yes. All our packages include revision rounds, typically 2 rounds of amends on the edit." },
    { q: "Do you offer packages or custom quotes?", a: "We do both. We have starting-point packages, but most clients prefer a custom quote based on their specific needs." },
  ],
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = SERVICE_DATA[params.slug] || DEFAULT_SERVICE;
  const fmtSlug = params.slug.replace(/-/g, " ");
  return {
    title: `${s.title} in UAE | Backyard Studio Official`,
    description: `Professional ${fmtSlug} production services across Dubai, Abu Dhabi and all UAE. ${s.description.substring(0, 120)}...`,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICE_DATA[params.slug] || {
    ...DEFAULT_SERVICE,
    title: params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
  const imgs  = SERVICE_IMAGES[params.slug] || DEFAULT_IMAGES;
  const video = SERVICE_VIDEOS[params.slug] || null;

  return (
    <div className="pt-24">
      {/* Cinematic hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src={imgs.hero} alt={service.title} fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">Backyard Studio Official</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-cream">{service.title.toUpperCase()}</h1>
        </div>
      </div>

      {/* Main content */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">

          {/* Content column */}
          <div className="lg:col-span-2 space-y-6">
            {service.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-silver/70 leading-relaxed text-base">{para}</p>
            ))}

            {/* Gallery grid */}
            {imgs.gallery.length > 0 && (
              <div className="mt-12">
                <p className="eyebrow mb-6">Our Work</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {imgs.gallery.map((src, i) => (
                    <div key={i} className={`relative overflow-hidden group ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}>
                      <div className={`relative ${i === 0 ? "aspect-square md:h-full md:min-h-[280px]" : "aspect-video"}`}>
                        <Image
                          src={src}
                          alt={`${service.title} work sample ${i + 1}`}
                          fill
                          className="object-cover img-cinematic transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video embed */}
            {video && (
              <div className="mt-12">
                <p className="eyebrow mb-6">Watch It In Action</p>
                <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                  <VimeoEmbed
                    vimeoId={video.id}
                    poster={video.poster}
                    title={video.title}
                    aspectRatio="16/9"
                  />
                </div>
                <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
                  {video.title} produced by Backyard Studio Official, UAE
                </p>
              </div>
            )}

            {/* What's included */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">WHAT IS INCLUDED</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                    <span className="text-silver/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">FAQs</h2>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">GET A QUOTE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Tell us about your project. We respond within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>Available across</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((c) => (
                  <span key={c} className="text-xs px-3 py-1 border text-silver/60" style={{ borderColor: "var(--border)" }}>{c}</span>
                ))}
              </div>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Avg. Response</p>
              <p className="font-display text-3xl text-cream">2 HOURS</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>On all project briefs</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
