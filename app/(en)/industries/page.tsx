import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { faqSchema, itemListSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: { absolute: "Industry Video Production Dubai | All Sectors UAE" },
  description:
    "Specialist video and photography for hospitality, real estate, fashion, F&B, automotive, corporate, healthcare and tech sectors across Dubai and UAE.",
  keywords: [
    "sports video production Dubai",
    "automotive video production UAE",
    "healthcare photography Dubai",
    "technology video production Dubai",
    "music video production UAE",
    "fitness content creation Dubai",
    "hospitality video production Dubai",
    "real estate photography UAE",
    "fashion photography Dubai",
    "food photography UAE",
    "corporate video production Dubai",
    "e-commerce photography UAE",
    "education video production Dubai",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com/industries" },
};

const INDUSTRIES_FAQS = [
  {
    question: "Which industries does Backyard Studio serve in Dubai and UAE?",
    answer: "Backyard Studio Official produces content for 13 industries across the UAE: hospitality, real estate, fashion, food & beverage, corporate, sports, automotive, healthcare, technology, music & entertainment, fitness & wellness, e-commerce & retail, and education. We cover all 7 UAE emirates with a dedicated team and GCAA-licensed drone operation.",
  },
  {
    question: "Does Backyard Studio do video production for hospitality brands in Dubai?",
    answer: "Yes. Backyard Studio Official is one of Dubai's leading hospitality production studios. We produce hotel photography, resort campaigns, F&B shoots, room tours, restaurant photography, and social media content for 5-star properties including Atlantis, Jumeirah Group, Four Seasons, Marriott, and Hilton across the UAE. Same-day social highlight delivery available.",
  },
  {
    question: "Which production company in UAE handles sports video production?",
    answer: "Backyard Studio Official covers UAE sports events including Formula 1 at Yas Marina, the Dubai Duty Free Tennis Championships, Dubai Rugby Sevens, Meydan Horse Racing, UAE Pro League football, ICC Cricket, and major padel and jiu-jitsu championships. We provide multi-camera live coverage, GCAA drone aerials, athlete branding, and same-day social media cuts.",
  },
  {
    question: "Can Backyard Studio produce content for real estate developers in UAE?",
    answer: "Yes. Backyard Studio Official is a specialist real estate production company in Dubai. We handle property photography, walkthrough videos, off-plan launch films, developer brand campaigns, aerial drone (GCAA-approved), and social media content for major UAE developers including Emaar, DAMAC, Aldar, and Sobha. Our real estate packages start from AED 1,500.",
  },
  {
    question: "Does Backyard Studio produce healthcare and medical content in Dubai?",
    answer: "Yes. Backyard Studio Official produces healthcare content for hospitals, clinics, specialist centres, and pharmaceutical brands across the UAE. Services include doctor profile videos, patient testimonial films, hospital photography, medical tourism campaigns, and health app explainer videos. We work with providers in Dubai Healthcare City, Abu Dhabi, and across all UAE emirates.",
  },
  {
    question: "What technology and startup content does Backyard Studio produce in Dubai?",
    answer: "Backyard Studio Official is the production partner for Dubai's tech ecosystem — covering GITEX Global, Dubai Future Forum, startup pitch events, and product launches. Services include product demo videos, app launch campaigns, founder interview series, SaaS explainer animations, and LinkedIn video content for startups, scaleups, and enterprise tech brands.",
  },
];

const INDUSTRIES_ITEM_LIST = [
  { name: "Hospitality Video & Photography Dubai", url: "https://www.backyardstudioofficial.com/industries/hospitality", description: "Hotel photography, resort videos, F&B shoots for UAE's top 5-star properties." },
  { name: "Real Estate Video & Photography Dubai", url: "https://www.backyardstudioofficial.com/industries/real-estate", description: "Property photography, walkthroughs, developer films and drone for UAE listings." },
  { name: "Fashion Photography & Video Dubai", url: "https://www.backyardstudioofficial.com/industries/fashion", description: "Editorial shoots, lookbooks and campaign films for UAE fashion brands." },
  { name: "Food & Beverage Photography Dubai", url: "https://www.backyardstudioofficial.com/industries/food-beverage", description: "Menu photography, restaurant shoots and F&B brand films across UAE." },
  { name: "Corporate Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/corporate", description: "Company films, headshots, office photography and testimonials for UAE businesses." },
  { name: "Sports Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/sports", description: "Event coverage, athlete branding and highlight reels for UAE sporting events." },
  { name: "Automotive Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/automotive", description: "Car launch films, dealership campaigns and dynamic on-road shoots in UAE." },
  { name: "Healthcare Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/healthcare", description: "Hospital photography, doctor profiles and patient testimonials in UAE." },
  { name: "Technology Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/tech", description: "Product demos, startup brand films and tech event coverage in Dubai." },
  { name: "Music & Entertainment Production Dubai", url: "https://www.backyardstudioofficial.com/industries/music-entertainment", description: "Music videos, artist branding and concert coverage in UAE." },
  { name: "Fitness & Wellness Video Dubai", url: "https://www.backyardstudioofficial.com/industries/fitness-wellness", description: "Gym branding, trainer content and supplement campaigns in Dubai." },
  { name: "E-Commerce Photography Dubai", url: "https://www.backyardstudioofficial.com/industries/ecommerce-retail", description: "Product photography, Amazon UAE shoots and social commerce content." },
  { name: "Education Video Production Dubai", url: "https://www.backyardstudioofficial.com/industries/education", description: "Campus photography, student testimonials and e-learning video in UAE." },
];

const INDUSTRIES = [
  // ── ORIGINAL 5 ─────────────────────────────────────────────────────────────
  {
    slug: "hospitality",
    label: "Hospitality",
    desc: "Hotel photography, resort videos, F&B shoots, and tourism campaigns for 5-star UAE properties. Same-day social highlights for events.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    tags: ["Hotel Photography", "Resort Video", "F&B Shoots", "Drone Aerials"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    desc: "Property photography, walkthrough videos, developer brand films, and aerial drone for UAE listings and off-plan launches.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tags: ["Listing Photography", "Walkthrough Video", "Developer Films", "Drone Aerials"],
  },
  {
    slug: "fashion",
    label: "Fashion",
    desc: "Editorial shoots, lookbooks, campaign films, and social media content for UAE fashion brands and regional designers.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    tags: ["Editorial", "Lookbooks", "Campaign Video", "TikTok & Reels"],
  },
  {
    slug: "food-beverage",
    label: "Food & Beverage",
    desc: "Menu photography, delivery app content, restaurant shoots, and F&B brand films for UAE restaurants, cafes and FMCG brands.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Menu Photography", "Talabat & Deliveroo", "Restaurant Shoots", "FMCG"],
  },
  {
    slug: "corporate",
    label: "Corporate",
    desc: "Company profile films, executive photography, office shoots, and investor content for UAE businesses and multinationals.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Company Films", "Headshots", "Office Photography", "Testimonials"],
  },

  // ── NEW: SPORTS ─────────────────────────────────────────────────────────────
  {
    slug: "sports",
    label: "Sports",
    desc: "Event coverage, athlete branding, highlight reels and social media content for UAE's biggest sporting events and teams.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    tags: ["Event Coverage", "Athlete Branding", "Highlight Reels", "Social Reels"],
    detail: {
      events: [
        "Dubai Duty Free Tennis Championships",
        "Abu Dhabi Grand Prix — Formula 1",
        "Dubai Rugby Sevens (HSBC World Rugby)",
        "Meydan Horse Racing — Dubai World Cup",
        "UAE Pro League Football — Al Ain, Al Wasl, Sharjah FC",
        "Dubai FC & Arabian Gulf League Matches",
        "UAE Warriors MMA & Boxing Nights",
        "Padel UAE League & Club Tournaments",
        "DP World Tour Golf — Jumeirah Golf Estates",
        "Dubai Marathon & UAE Athletics Events",
        "UAE Jiu-Jitsu Championship (Abu Dhabi World Pro)",
        "ICC Cricket Tournaments — Dubai & Abu Dhabi",
        "Dubai Basketball League",
        "Emirates Motorsport — Dubai Autodrome",
        "Al Ain Swim — Open Water & Pool Events",
        "Traditional Sports: Camel Racing, Falconry Displays",
      ],
      services: [
        "Match & Event Highlight Films",
        "Athlete Profile & Branding Shoots",
        "Sponsor Activation Content",
        "Multi-Camera Live Event Coverage",
        "Drone Aerials (GCAA-Licensed) — Stadium & Outdoor Events",
        "Social Media Reels & TikTok Cuts",
        "Press Conference & Interview Coverage",
        "Sports Brand Campaign Production",
        "Pre-Season & Training Ground Content",
        "Trophy & Awards Ceremony Coverage",
        "Fan Engagement & Social Content",
        "Broadcast-Ready Event Packages",
      ],
    },
  },

  // ── NEW: AUTOMOTIVE ─────────────────────────────────────────────────────────
  {
    slug: "automotive",
    label: "Automotive",
    desc: "Car launch films, dealership campaigns, dynamic on-road shoots, and UAE automotive brand content from desert to skyline.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    tags: ["Car Launch Films", "Dealership Shoots", "Dynamic On-Road", "Drone Aerials"],
    detail: {
      events: [
        "New Model Launch Events — Luxury & Mass Market",
        "Dealership Grand Opening Campaigns",
        "Dubai Motor Show Coverage",
        "Abu Dhabi International Motor Show",
        "UAE Test Drive Day Content",
        "Motorsport Sponsorship Activations",
        "Showroom Campaign Shoots",
        "EV & Hybrid Brand Campaigns",
      ],
      services: [
        "Cinematic Car Commercial Films",
        "Dynamic On-Road Driving Footage",
        "Desert & Dune Automotive Shoots (Al Qudra)",
        "City Skyline Night Sequences",
        "Drone Aerial Automotive Content",
        "360° Interior Showroom Photography",
        "Dealership Photography & Video",
        "Social Media Reels — Car Reveals & Reviews",
        "Brand Campaign Production",
        "EV & Luxury Brand Films",
        "TikTok & Instagram Automotive Content",
      ],
    },
  },

  // ── NEW: HEALTHCARE ─────────────────────────────────────────────────────────
  {
    slug: "healthcare",
    label: "Healthcare",
    desc: "Hospital photography, doctor profiles, patient testimonials, and medical brand campaigns for UAE's leading healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Clinic Photography", "Doctor Profiles", "Patient Testimonials", "Brand Campaigns"],
    detail: {
      events: [
        "Hospital Openings & New Department Launches",
        "Medical Conference & CME Event Coverage",
        "Dubai Healthcare City Brand Campaigns",
        "Medical Tourism Destination Content",
        "Annual Reports & Stakeholder Films",
        "Awareness Campaign Days — Health Initiatives",
        "Clinic & Specialist Centre Grand Openings",
      ],
      services: [
        "Hospital & Clinic Photography",
        "Doctor & Specialist Profile Videos",
        "Patient Testimonial Films",
        "Medical Tourism Campaign Content",
        "Pharmaceutical Brand Films",
        "Health App & MedTech Explainer Videos",
        "Annual Report & CSR Film Production",
        "Social Media Health Content",
        "Instagram Reels — Wellness & Education",
        "Wellness Brand Photography & Video",
        "Supplement & Nutraceutical Brand Shoots",
      ],
    },
  },

  // ── NEW: TECHNOLOGY & STARTUPS ──────────────────────────────────────────────
  {
    slug: "technology",
    label: "Technology",
    desc: "Product demos, startup brand films, app launches, and tech event coverage for Dubai's rapidly growing tech ecosystem.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["Product Demos", "App Launch Films", "Startup Branding", "Tech Event Coverage"],
    detail: {
      events: [
        "GITEX Global — Dubai World Trade Centre",
        "GITEX Expand North Star (Startup Track)",
        "Dubai Future Forum",
        "Step Conference Beirut & Dubai",
        "UAE Blockchain & AI Summit",
        "FinTech Festival UAE",
        "Product Launch Events",
        "Hackathon & Accelerator Demo Days",
        "Tech Startup Pitch Events",
        "Smart Dubai Initiative Campaigns",
      ],
      services: [
        "Product Demo & Explainer Videos",
        "App Launch Campaign Films",
        "Startup Brand & Culture Films",
        "Investor Pitch Video Production",
        "Tech Conference & Event Coverage",
        "SaaS & Platform Explainer Animations",
        "Founder & CEO Interview Series",
        "Social Media Tech Content",
        "LinkedIn Video Strategy & Production",
        "Website & Landing Page Hero Videos",
        "AI & Innovation Campaign Content",
      ],
    },
  },

  // ── NEW: MUSIC & ENTERTAINMENT ──────────────────────────────────────────────
  {
    slug: "music-entertainment",
    label: "Music & Entertainment",
    desc: "Music videos, artist branding, concert coverage, and entertainment content for UAE-based and regional artists and labels.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    tags: ["Music Videos", "Artist Branding", "Concert Coverage", "Lyric & EPK Videos"],
    detail: {
      events: [
        "Dubai Concerts — Coca-Cola Arena & Expo City",
        "Abu Dhabi Festivals — CLAP & Flash Entertainment",
        "Dubai Jazz Festival",
        "Sole DXB & Urban Culture Events",
        "UAE National Day Entertainment Campaigns",
        "Album Launch Events",
        "Artist Tour & Meet & Greet Coverage",
        "Radio & Streaming Platform Campaigns",
        "Brand × Artist Collaboration Shoots",
        "Regional Arabic Music Video Productions",
      ],
      services: [
        "Cinematic Music Video Production",
        "Artist Profile & EPK Films",
        "Concert & Live Event Multi-Camera Coverage",
        "Backstage & BTS Content",
        "Lyric Video Production",
        "Artist Branding & Promo Shoots",
        "Social Media Reels — Instagram & TikTok",
        "Podcast & Interview Studio Production",
        "Record Label Campaign Content",
        "DJ & Producer Promo Videos",
        "Streaming Platform Pitchbook Films",
      ],
    },
  },

  // ── NEW: FITNESS & WELLNESS ─────────────────────────────────────────────────
  {
    slug: "fitness-wellness",
    label: "Fitness & Wellness",
    desc: "Gym branding, personal trainer content, supplement campaigns, and transformation films for UAE's booming fitness industry.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tags: ["Gym Branding", "Trainer Content", "Supplement Films", "Transformation Reels"],
    detail: {
      events: [
        "Fitness Expo UAE & BodyPower Dubai",
        "Spartan Race & Tough Mudder UAE",
        "Dubai CrossFit Championship",
        "UAE Strength & Powerlifting Championships",
        "Gym Grand Openings",
        "Brand Ambassador Launch Days",
        "Corporate Wellness Day Coverage",
        "Yoga & Mindfulness Retreat Content",
      ],
      services: [
        "Gym & Studio Brand Films",
        "Personal Trainer Profile & Promo Videos",
        "Supplement Brand Campaign Shoots",
        "Transformation Story Films",
        "Exercise Demonstration & Tutorial Reels",
        "Fitness App & Platform Content",
        "Influencer & Ambassador Collaboration Shoots",
        "Social Media Reels — Workout & Lifestyle",
        "TikTok Fitness Content Strategy",
        "Activewear Brand Campaigns",
        "Sports Nutrition Photography",
        "Wellness & Meditation Brand Content",
      ],
    },
  },

  // ── NEW: E-COMMERCE & RETAIL ────────────────────────────────────────────────
  {
    slug: "ecommerce-retail",
    label: "E-Commerce & Retail",
    desc: "Product photography, Amazon & Noon content, lifestyle shoots, and social commerce for UAE e-commerce brands and retailers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Product Photography", "Amazon & Noon", "Lifestyle Shoots", "Social Commerce"],
    detail: {
      events: [
        "Black Friday & White Friday Campaign Shoots",
        "Ramadan & Eid Campaign Content",
        "Dubai Shopping Festival Activations",
        "National Day Sales Campaigns",
        "Brand Launch on Amazon UAE & Noon",
        "Pop-Up Store & Mall Activation Coverage",
        "Seasonal Collection Campaign Shoots",
      ],
      services: [
        "E-Commerce Product Photography (White & Lifestyle)",
        "Amazon UAE & Noon Main Image Shoots",
        "Lifestyle & Model Product Photography",
        "Unboxing & Product Review Videos",
        "Social Commerce Reels — Instagram & TikTok",
        "Brand Lookbook Production",
        "Packaging & Label Photography",
        "360° Product Spin Photography",
        "UGC-Style Ad Content Creation",
        "Seasonal Campaign Production",
        "Direct-to-Consumer Brand Films",
        "Meta & TikTok Paid Ad Creative",
      ],
    },
  },

  // ── NEW: EDUCATION ──────────────────────────────────────────────────────────
  {
    slug: "education",
    label: "Education",
    desc: "Campus photography, student testimonials, e-learning video production, and institutional brand campaigns for UAE schools and universities.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    tags: ["Campus Photography", "Student Testimonials", "E-Learning Video", "Institution Branding"],
    detail: {
      events: [
        "University Open Days & Admissions Campaigns",
        "GITEX Education & EdTech Summit",
        "Graduation Ceremony Coverage",
        "Student Awards & Recognition Events",
        "New Campus / Facility Opening Films",
        "Annual Day & Sports Day Coverage",
        "Faculty & Research Showcase Films",
        "School Brand Campaign Shoots",
      ],
      services: [
        "University & School Brand Films",
        "Campus Tour & Facility Photography",
        "Student Testimonial & Life Videos",
        "E-Learning Course Video Production",
        "Online Tutorial & Educational Content",
        "Faculty Profile Photography & Video",
        "Graduation Day Coverage",
        "Admissions Campaign Films",
        "Social Media Reels — Student Life",
        "Research & Innovation Showcase Films",
        "International Student Recruitment Content",
        "Annual Report & Prospectus Photography",
      ],
    },
  },
];

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(INDUSTRIES_FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(INDUSTRIES_ITEM_LIST)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "Industries", url: "https://www.backyardstudioofficial.com/industries" },
      ])) }} />

      {/* HERO */}
      <section className="section-pad pt-40" style={{ background: "var(--black)" }}>
        <div className="container-xl text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Industry Expertise</p>
          <h1 className="font-display text-6xl sm:text-8xl leading-none mb-8" style={{ color: "var(--cream)" }}>
            WE SPEAK<br />YOUR INDUSTRY
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--silver)" }}>
            Generic production doesn't cut it. Every industry has different visual language, buyer psychology,
            and platform requirements. We've mastered the content that works for yours.
          </p>
          <p className="text-sm mt-4" style={{ color: "var(--muted)" }}>13 industries · 2,400+ projects · All 7 UAE emirates</p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group block border overflow-hidden transition-all duration-300 hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.85), transparent)" }} />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-display text-2xl" style={{ color: "var(--cream)" }}>{ind.label.toUpperCase()}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{ind.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ind.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-widest uppercase px-2 py-1 border"
                        style={{ borderColor: "var(--border)", color: "var(--silver)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                    <span>Explore</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS CALLOUT — featured since it's the biggest new addition */}
      <section className="py-16 border-t" style={{ background: "var(--ink)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">New — Sports Production</p>
              <h2 className="font-display text-5xl mb-6" style={{ color: "var(--cream)" }}>
                UAE SPORTS.<br />COVERED.
              </h2>
              <p className="mb-6" style={{ color: "var(--silver)" }}>
                From Formula 1 at Yas Marina to the Dubai Rugby Sevens, the Dubai Duty Free Tennis Championships
                to UAE Pro League football — we cover every major sport in the Emirates with broadcast-quality
                multi-camera rigs, drone aerials flown under GCAA licence, and same-day social delivery.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Formula 1", "Tennis", "Football", "Cricket", "Horse Racing", "Golf", "Rugby Sevens", "MMA & Boxing", "Padel", "Jiu-Jitsu"].map((s) => (
                  <span key={s} className="text-[10px] tracking-widest uppercase px-3 py-1 border"
                    style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>{s}</span>
                ))}
              </div>
              <Link href="/industries/sports" className="btn-gold inline-flex items-center gap-2">
                <span>See Sports Services</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80"
                alt="Sports event coverage Dubai" className="w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
                alt="Athlete photography UAE" className="w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                alt="Sports drone filming Dubai" className="w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&q=80"
                alt="Sports social media content UAE" className="w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 border-t" style={{ background: "var(--ink)", borderColor: "var(--border)" }}>
        <div className="container-xl max-w-4xl mx-auto">
          <p className="eyebrow mb-4 text-center">Common Questions</p>
          <h2 className="font-display text-4xl text-center mb-12 speakable" style={{ color: "var(--cream)" }}>
            INDUSTRY PRODUCTION FAQ
          </h2>
          <div className="space-y-6">
            {INDUSTRIES_FAQS.map((faq) => (
              <div key={faq.question} className="border-b pb-6" style={{ borderColor: "var(--border)" }}>
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--cream)" }}>{faq.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-14 border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <p className="text-center text-[10px] tracking-widest uppercase mb-8 opacity-60" style={{ color: "var(--silver)" }}>
            Production Services by Industry — Dubai &amp; UAE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {INDUSTRIES_ITEM_LIST.map((ind) => (
              <Link key={ind.url} href={ind.url.replace("https://www.backyardstudioofficial.com", "")}
                className="text-xs opacity-70 hover:opacity-100 transition-opacity" style={{ color: "var(--silver)" }}>
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <p className="eyebrow mb-6">Not Sure Where to Start?</p>
        <h2 className="font-display text-5xl mb-8" style={{ color: "var(--cream)" }}>TALK TO OUR TEAM</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            <span>Get a Free Quote</span>
            <ArrowUpRight size={14} />
          </Link>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
            className="btn-gold inline-flex items-center gap-2"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}>
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
