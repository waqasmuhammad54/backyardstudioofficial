import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";

/* ─── Industry Data ─────────────────────────────────────────────────── */

const INDUSTRY_DATA: Record<string, {
  name: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  challenge: string;
  solution: string;
  services: { label: string; href: string; desc: string }[];
  results: { stat: string; label: string }[];
  caseStudy: { title: string; client: string; result: string; body: string };
  faqs: { q: string; a: string }[];
  relatedLocations: { label: string; href: string }[];
  relatedPosts: { title: string; href: string }[];
}> = {
  "hospitality": {
    name: "Hospitality",
    tagline: "Hotel, Resort & Tourism Content That Fills Rooms",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    metaTitle: "Hotel Photography & Hospitality Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading hospitality content studio. Hotel photography, resort video tours, F&B shoots, and tourism campaigns for 5-star properties across UAE. GCAA drone included.",
    keywords: [
      "hotel photography Dubai UAE",
      "hospitality video production Dubai",
      "resort photography UAE",
      "hotel video tour Dubai",
      "F&B photography Dubai",
      "tourism content production UAE",
      "hotel room photography Dubai",
      "spa photography UAE",
      "hotel marketing content Dubai",
      "resort campaign production UAE",
    ],
    intro: "In UAE's ultra-competitive hospitality market, your content is your first impression. Backyard Studio Official has produced visual content for 5-star hotels, beach resorts, boutique properties, and luxury F&B brands across all seven emirates — from flagship Jumeirah properties to Saadiyat Island retreats. We understand what drives booking decisions and we shoot accordingly.",
    challenge: "Most hotel photography looks the same — overlit rooms, empty lobbies, and stock-feeling pool shots. Travellers scrolling Booking.com or Instagram in seconds need to feel the experience before they arrive.",
    solution: "We shoot hotels the way guests experience them: golden-hour pool scenes, atmospheric restaurant evenings, amenity lifestyle photography, and GCAA drone aerials that show location and scale. Every asset is optimised for web, OTA, social, and print.",
    services: [
      { label: "Hotel Photography", href: "/services/hotel-photography", desc: "Full hotel photography packages — rooms, suites, lobby, pool, spa, F&B, and exterior with drone." },
      { label: "Resort Video Tours", href: "/services/travel-lifestyle", desc: "Cinematic resort walkthrough videos for website, YouTube, and OTA listings." },
      { label: "F&B Photography & Video", href: "/services/food", desc: "Restaurant, bar, and in-room dining — styled shoots for menus, delivery apps, and social media." },
      { label: "Aerial Drone", href: "/services/aerial-drone", desc: "GCAA-licensed drone aerials showing beachfront access, pool decks, and location proximity." },
      { label: "Social Media Content", href: "/services/social-media-content", desc: "Monthly Instagram Reels, TikTok, and Stories content packages for hotel social channels." },
      { label: "TV & DVC Commercials", href: "/services/dvcs", desc: "Broadcast-quality brand films for UAE national TV, YouTube, and OOH campaigns." },
    ],
    results: [
      { stat: "3×", label: "Avg. booking rate uplift after content refresh" },
      { stat: "48h", label: "Standard delivery for photography packages" },
      { stat: "100+", label: "Hospitality properties shot across UAE" },
      { stat: "4K", label: "All video delivered in 4K with drone" },
    ],
    caseStudy: {
      title: "Full Visual Identity Refresh",
      client: "Luxury Beach Resort, Ras Al Khaimah",
      result: "OTA click-through rate increased 2.8× within 90 days",
      body: "A 5-star RAK resort approached us after their existing photography was preventing them from ranking higher on Booking.com against Dubai competitors. We delivered a complete 2-day shoot: hero exterior aerials at sunrise, lifestyle pool scenes with models, F&B campaigns for their beach restaurant, spa imagery, and suite photography across all room categories. The content refresh drove a 2.8× improvement in OTA CTR and was featured in Condé Nast Traveller's UAE roundup.",
    },
    faqs: [
      { q: "How much does hotel photography cost in Dubai?", a: "Hotel photography in Dubai typically starts from AED 8,000–12,000 for a half-day room and exterior package, up to AED 25,000+ for a comprehensive 2-day shoot covering all hotel zones, F&B, spa, and lifestyle with drone. Contact us for a custom quote based on your property." },
      { q: "Do you include drone photography in hotel packages?", a: "Yes. All our hotel photography packages include GCAA-licensed drone aerials — typically at golden hour for maximum visual impact. We handle all permit coordination for your property location." },
      { q: "How quickly can you deliver hotel photography?", a: "Standard delivery is 48–72 hours for photography. Video editing takes 5–7 working days. Rush delivery is available for urgent OTA listing updates." },
      { q: "Do you work with international hotel chains in UAE?", a: "Yes. We have worked with properties under international brand management agreements and understand brand guideline compliance, brand review processes, and the specific content requirements of major hotel groups operating in UAE." },
    ],
    relatedLocations: [
      { label: "Dubai Hotels", href: "/locations/dubai" },
      { label: "Abu Dhabi Resorts", href: "/locations/abu-dhabi" },
      { label: "Ras Al Khaimah", href: "/locations/ras-al-khaimah" },
      { label: "Fujairah", href: "/locations/fujairah" },
    ],
    relatedPosts: [
      { title: "Hotel Photography Guide UAE 2026", href: "/blog/hotel-photography-guide-dubai-2026" },
      { title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
    ],
  },

  "real-estate": {
    name: "Real Estate",
    tagline: "Property Content That Sells Listings Faster",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    metaTitle: "Real Estate Photography & Videography Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading real estate production studio. Property photography, walkthrough videos, aerial drone, and developer brand films for UAE's top agencies and developers.",
    keywords: [
      "real estate photography Dubai",
      "property photography UAE",
      "real estate videography Dubai",
      "property video tour Dubai",
      "real estate drone photography UAE",
      "developer marketing video Dubai",
      "property listing photography UAE",
      "architectural photography Dubai",
      "off-plan property marketing UAE",
      "real estate content production Dubai",
    ],
    intro: "UAE's property market moves fast. Listings with professional photography and video sell for up to 20% more and move 3× faster than those with phone photos. Backyard Studio Official is the production partner of choice for Dubai's leading real estate agencies, off-plan developers, and property marketing teams — producing listing photography, walkthrough videos, aerial drone tours, and developer brand films at scale.",
    challenge: "With thousands of listings competing for buyer attention on Bayut, Property Finder, and Instagram, poor-quality photography means your property gets scrolled past — regardless of how well it's priced or located.",
    solution: "We shoot every property to maximise perceived space, natural light, and lifestyle appeal. Our GCAA drone team adds location context and community overviews. Our walkthrough videos give remote buyers — especially international investors — the confidence to enquire and view.",
    services: [
      { label: "Property Photography", href: "/services/real-estate", desc: "Interior, exterior, and lifestyle photography for residential, commercial, and off-plan properties." },
      { label: "Walkthrough Videos", href: "/services/real-estate", desc: "Smooth stabilised walkthrough tours with voiceover and background music — delivered in 48h." },
      { label: "Aerial Drone", href: "/services/aerial-drone", desc: "GCAA-licensed community overviews, building exteriors, and location proximity aerials." },
      { label: "Developer Brand Films", href: "/services/corporate-brand-films", desc: "Project launch films, off-plan community videos, and investor presentation reels." },
      { label: "Virtual Tour Production", href: "/services/real-estate", desc: "360° virtual tour photography and video for Bayut, Property Finder, and developer websites." },
      { label: "Social Media Content", href: "/services/social-media-content", desc: "Instagram Reels, TikTok, and YouTube content for property and developer social channels." },
    ],
    results: [
      { stat: "3×", label: "Faster average listing time with professional content" },
      { stat: "500+", label: "Properties photographed across UAE" },
      { stat: "24h", label: "Rush listing photography available" },
      { stat: "20%", label: "Higher sale price achieved with pro photography" },
    ],
    caseStudy: {
      title: "Off-Plan Launch Campaign",
      client: "Tier-1 UAE Developer, Dubai",
      result: "AED 2.1bn in sales enquiries generated in launch week",
      body: "A major UAE developer engaged us to produce the full content suite for an off-plan residential tower launch. We produced architectural CGI photography integration, lifestyle video with actors in show unit, GCAA drone aerials of the community masterplan, and a 3-minute launch film screened at the sales event. The campaign drove AED 2.1bn in enquiries in the first week and was adapted for Bahrain and Saudi Arabia market launches.",
    },
    faqs: [
      { q: "How much does real estate photography cost in Dubai?", a: "Real estate photography in Dubai starts from AED 1,200 for a standard apartment shoot (1–2 bedrooms), AED 2,500–4,000 for villas and townhouses, and AED 5,000+ for full property marketing packages with drone and video. Contact us for volume pricing if you have multiple listings." },
      { q: "How quickly can you deliver real estate photos?", a: "Standard delivery is 24–48 hours after the shoot. We offer same-day rush delivery for urgent listings at an additional fee." },
      { q: "Do you shoot off-plan properties and developer projects?", a: "Yes. We are experienced in off-plan marketing content — including show unit photography, masterplan drone aerials, CGI integration, and launch film production for developers operating across UAE and GCC." },
      { q: "Can you shoot properties across all UAE emirates?", a: "Yes. We cover all 7 UAE emirates for real estate photography and video — Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain — with our own GCAA-licensed drone team." },
    ],
    relatedLocations: [
      { label: "Dubai Properties", href: "/locations/dubai" },
      { label: "Abu Dhabi Properties", href: "/locations/abu-dhabi" },
      { label: "Sharjah Properties", href: "/locations/sharjah" },
      { label: "Ajman Properties", href: "/locations/ajman" },
    ],
    relatedPosts: [
      { title: "Real Estate Photography Guide Dubai 2026", href: "/blog/real-estate-photography-guide-dubai" },
      { title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
    ],
  },

  "fashion": {
    name: "Fashion",
    tagline: "Campaign-Quality Fashion Content in Dubai",
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80",
    metaTitle: "Fashion Photography & Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading fashion content studio. Editorial shoots, lookbooks, campaign photography, kids fashion, and runway video for UAE fashion brands. Studio and on-location.",
    keywords: [
      "fashion photography Dubai",
      "fashion videography Dubai UAE",
      "editorial photography Dubai",
      "lookbook photography UAE",
      "fashion campaign Dubai",
      "kids fashion photography Dubai",
      "model photography Dubai",
      "fashion video production UAE",
      "luxury fashion shoot Dubai",
      "abaya fashion photography Dubai",
    ],
    intro: "Dubai has become one of the Middle East's leading fashion production destinations — with world-class photographers, diverse talent pools, and extraordinary locations that no other market can replicate. Backyard Studio Official produces fashion content for local designers, GCC brands, international labels entering the UAE market, and multi-brand retailers — from editorial shoots to full campaign productions.",
    challenge: "Fashion content in the UAE must navigate cultural nuance, seasonal timing, and a highly visual audience that instantly distinguishes brand-quality photography from amateur work. Many brands underestimate the production quality needed to compete for attention in UAE's fashion market.",
    solution: "We bring a full creative team to every fashion shoot — art direction, styling coordination, professional models, and post-production colour grading to match your brand identity. Whether you need a full campaign or a seasonal lookbook, we deliver content that works across print, e-commerce, Instagram, and TikTok.",
    services: [
      { label: "Editorial Photography", href: "/services/fashion-shoots", desc: "Magazine-quality editorial shoots for brand campaigns, press, and editorial placement." },
      { label: "Lookbook Photography", href: "/services/fashion-shoots", desc: "Seasonal and product lookbooks for e-commerce, retail, and wholesale presentations." },
      { label: "Campaign Video", href: "/services/dvcs", desc: "Fashion campaign films, brand videos, and seasonal hero content for digital and broadcast." },
      { label: "Social Media Content", href: "/services/reels-production", desc: "Instagram Reels, TikTok, and YouTube content for fashion brand channels." },
      { label: "Kids Fashion Shoots", href: "/services/fashion-shoots", desc: "Family-friendly, compliant kids fashion photography for UAE brands and retailers." },
      { label: "Abaya & Modest Fashion", href: "/services/fashion-shoots", desc: "Culturally sensitive modest fashion photography for Gulf-market brands." },
    ],
    results: [
      { stat: "200+", label: "Fashion campaigns produced across UAE" },
      { stat: "2×", label: "Engagement uplift with campaign-quality creative" },
      { stat: "1 Day", label: "Turnaround available for social-first content" },
      { stat: "GCC", label: "Content distributed across Gulf markets" },
    ],
    caseStudy: {
      title: "E-commerce Lookbook Campaign",
      client: "UAE Modest Fashion Brand",
      result: "Instagram following grew 40% in 30 days post-launch",
      body: "A Dubai-based modest fashion brand needed a full seasonal lookbook and social media content suite to launch their Ramadan collection. We produced a 3-day shoot across two locations — an Emirati heritage interior and a beach sunrise setting — delivering 120 edited product images, 6 Instagram Reels, and a 90-second campaign video. The launch content drove their Instagram growth from 28,000 to 39,000 followers in 30 days.",
    },
    faqs: [
      { q: "How much does fashion photography cost in Dubai?", a: "Fashion photography in Dubai typically starts from AED 4,000–6,000 for a half-day editorial shoot (photographer + lighting), up to AED 15,000–25,000 for a full campaign day with creative direction, styling, models, and multiple locations. Contact us for a custom production quote." },
      { q: "Do you provide models and stylists for fashion shoots?", a: "We can coordinate professional models and stylists from our network of UAE-based talent, or work with your existing team. We also work with international model agencies based in Dubai." },
      { q: "Do you shoot abaya and modest fashion?", a: "Yes. We have extensive experience producing modest fashion photography for Gulf-market brands — with a deep understanding of cultural requirements, appropriate styling, and imagery guidelines for brands targeting UAE and GCC audiences." },
      { q: "Can you produce fashion content for TikTok and Instagram?", a: "Yes. We produce social-first fashion content specifically optimised for Instagram Reels and TikTok — with vertical framing, trending audio integration, and fast-paced edits that perform in fashion's highly visual social media landscape." },
    ],
    relatedLocations: [
      { label: "Dubai Fashion Shoots", href: "/locations/dubai" },
      { label: "Abu Dhabi Fashion Shoots", href: "/locations/abu-dhabi" },
    ],
    relatedPosts: [
      { title: "Fashion Photography Guide Dubai 2026", href: "/blog/fashion-photography-guide-dubai" },
      { title: "Social Media Content Strategy UAE 2026", href: "/blog/social-media-content-strategy-uae-2026" },
    ],
  },

  "food-beverage": {
    name: "Food & Beverage",
    tagline: "F&B Photography & Video That Drives Covers",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    metaTitle: "Food Photography & F&B Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading food & beverage content studio. Restaurant photography, menu shoots, delivery app content, and F&B brand films for UAE restaurants and FMCG brands.",
    keywords: [
      "food photography Dubai",
      "food videography Dubai UAE",
      "restaurant photography Dubai",
      "menu photography UAE",
      "F&B photography Dubai",
      "food delivery app photography UAE",
      "cafe photography Dubai",
      "beverage photography UAE",
      "FMCG product photography Dubai",
      "food brand content production UAE",
    ],
    intro: "Dubai's F&B market is one of the world's most competitive — with thousands of restaurants, cafes, and food brands fighting for attention on Talabat, Deliveroo, Instagram, and Google. Backyard Studio Official has produced food content for 150+ UAE restaurants, FMCG brands, delivery platforms, and hospitality groups — from fast-casual concepts to Michelin-recognised fine dining.",
    challenge: "Bad food photography kills appetite and booking conversions instantly. In a market where customers decide whether to order or book within 3 seconds of seeing your image, the difference between a professional shoot and a phone photo directly impacts your revenue.",
    solution: "We shoot food the way it should be experienced — with proper styling, precise lighting, and an understanding of colour temperature that makes dishes look irresistible on screen. Every shoot produces assets optimised for menus, delivery apps, social media, and OOH.",
    services: [
      { label: "Menu Photography", href: "/services/food", desc: "Full menu shoots — all dishes styled, lit, and delivered print-ready and web-optimised." },
      { label: "Delivery App Content", href: "/services/food", desc: "Talabat, Deliveroo, and Noon Food optimised photography for maximum CTR on listings." },
      { label: "Restaurant Photography", href: "/services/food", desc: "Ambience, interior, exterior, and team photography for restaurant websites and marketing." },
      { label: "Social Media Food Content", href: "/services/reels-production", desc: "Instagram Reels, TikTok recipe videos, and food content series for brand channels." },
      { label: "FMCG Product Photography", href: "/services/product-shoots", desc: "Packaged food product photography for retail listings, e-commerce, and brand campaigns." },
      { label: "F&B Brand Films", href: "/services/dvcs", desc: "Concept-to-screen brand films for restaurant launches, food brand campaigns, and investor decks." },
    ],
    results: [
      { stat: "150+", label: "F&B brands and restaurants shot across UAE" },
      { stat: "40%", label: "Average delivery order uplift with professional photos" },
      { stat: "24h", label: "Express delivery for urgent delivery app listings" },
      { stat: "5★", label: "Average Google review score from F&B clients" },
    ],
    caseStudy: {
      title: "Full Menu & Brand Overhaul",
      client: "Multi-branch UAE Restaurant Group",
      result: "Delivery orders increased 43% in 60 days",
      body: "A 12-branch UAE restaurant group needed to refresh all their delivery app listings and launch on Noon Food. We produced a 3-day food styling shoot covering 180 menu items, ambience photography for all 12 branches, and a 60-second brand launch video. The new delivery app listing images drove a 43% increase in order volume within 60 days of going live — more than covering the shoot cost in the first month.",
    },
    faqs: [
      { q: "How much does food photography cost in Dubai?", a: "Food photography in Dubai starts from AED 2,500 for a half-day shoot (15–25 dishes), AED 5,000–8,000 for a full-day menu shoot (40–60 dishes), and AED 12,000+ for comprehensive F&B brand packages with video and social content. We offer volume pricing for multi-branch groups." },
      { q: "Do you provide food styling for shoots?", a: "We can coordinate professional food stylists from our network, or work with your kitchen team. We advise on portion presentation, colour contrast, and garnish styling to ensure every dish looks its absolute best on camera." },
      { q: "Can you optimise photos for Talabat and Deliveroo?", a: "Yes. We understand the image specifications, aspect ratios, and visual requirements of UAE's major delivery platforms — and we shoot and deliver files in the correct formats for Talabat, Deliveroo, Noon Food, and Careem Now listings." },
      { q: "How quickly can you deliver food photography?", a: "Standard delivery is 24–48 hours for photography. We offer same-day express delivery for urgent delivery platform launches at an additional fee." },
    ],
    relatedLocations: [
      { label: "Dubai Restaurants", href: "/locations/dubai" },
      { label: "Abu Dhabi F&B", href: "/locations/abu-dhabi" },
      { label: "Sharjah Restaurants", href: "/locations/sharjah" },
    ],
    relatedPosts: [
      { title: "Food Photography Tips for UAE Restaurants", href: "/blog/food-photography-tips-uae-restaurants" },
      { title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
    ],
  },

  "corporate": {
    name: "Corporate",
    tagline: "Corporate Films & Photography That Build Authority",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    metaTitle: "Corporate Video Production & Photography Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading corporate production studio. Company profile films, executive photography, office shoots, annual reports, and internal communications videos for UAE businesses.",
    keywords: [
      "corporate video production Dubai",
      "corporate photography Dubai UAE",
      "company profile film Dubai",
      "executive photography Dubai",
      "office photography UAE",
      "corporate event videography Dubai",
      "annual report photography UAE",
      "internal communications video Dubai",
      "LinkedIn video production UAE",
      "investor film Dubai",
    ],
    intro: "In UAE's business-first market, your corporate content signals your company's credibility before a single word is read. Backyard Studio Official produces corporate content for multinationals, government entities, SMEs, and startups across all sectors — from executive headshots and team photography to investor films, government entity profiles, and internal communications videos.",
    challenge: "Generic corporate content is forgettable — and forgettable corporate content means lost pitches, weaker hiring, and lower investor confidence. UAE's corporate market demands a level of production quality that matches the ambition of the businesses operating here.",
    solution: "We bring a cinematic approach to corporate content — treating every company profile film as a brand story worth watching. Our corporate photography captures people authentically, not stiffly. The result is content that strengthens brand positioning, supports recruitment, and impresses stakeholders.",
    services: [
      { label: "Company Profile Films", href: "/services/corporate-brand-films", desc: "Brand documentaries, company profile videos, and investor films that tell your story compellingly." },
      { label: "Executive & Team Photography", href: "/services/corporate-videography", desc: "Professional headshots, team portraits, and executive lifestyle photography for LinkedIn and press." },
      { label: "Office & Workplace Photography", href: "/services/corporate-videography", desc: "Authentic office photography showing culture, workspace, and brand environment." },
      { label: "Testimonial Videos", href: "/services/testimonial-videos", desc: "Client and employee testimonial videos that build trust with prospects and new hires." },
      { label: "Event Coverage", href: "/services/event-videography", desc: "Corporate events, AGMs, product launches, and team day coverage with same-day highlights." },
      { label: "LinkedIn & Social Content", href: "/services/youtube-content", desc: "Thought leadership videos, interview series, and LinkedIn video content for executives and brands." },
    ],
    results: [
      { stat: "300+", label: "Corporate clients across UAE and GCC" },
      { stat: "48h", label: "Standard delivery for corporate photography" },
      { stat: "8+", label: "Years serving UAE's corporate market" },
      { stat: "Gov", label: "Government entities among our client base" },
    ],
    caseStudy: {
      title: "Full Corporate Content Suite",
      client: "ADGM-Registered Financial Services Firm",
      result: "LinkedIn engagement increased 3× post-launch; 2 new enterprise clients attributed content",
      body: "A leading financial services firm based in Abu Dhabi Global Market needed to elevate their brand presence ahead of a GCC expansion. We produced a one-day shoot covering executive portraits for all 12 C-suite members, team photography across 3 office floors, a 4-minute company profile film with client testimonials, and a LinkedIn content series of 8 short videos. The content launched across LinkedIn, their website, and an investor deck — and the firm attributed two new enterprise clients directly to the elevated brand presentation.",
    },
    faqs: [
      { q: "How much does corporate video production cost in Dubai?", a: "Corporate video production in Dubai starts from AED 5,000 for a simple testimonial or talking-head video, AED 12,000–18,000 for a company profile film (half-day shoot with full edit), and AED 25,000+ for premium documentary-style brand films. Contact us for a custom quote based on your brief." },
      { q: "How quickly can you deliver executive headshots?", a: "Executive headshot photography is typically delivered within 24 hours. For a team of up to 10 people, we can complete the shoot and deliver edited images within the same business day on request." },
      { q: "Do you work with government entities in UAE?", a: "Yes. Backyard Studio Official has worked with UAE government entities and government-related entities (GREs) across the emirate level and federal level — and we understand the approval processes, content guidelines, and brand standards required for government content production." },
      { q: "Can you produce content in both Arabic and English?", a: "Yes. We produce corporate content in both Arabic and English — including Arabic voiceover recording, bilingual lower-thirds, and content cut for both language markets. We work with professional Arabic voice talent for broadcast-quality narration." },
    ],
    relatedLocations: [
      { label: "Dubai Corporate", href: "/locations/dubai" },
      { label: "Abu Dhabi ADGM", href: "/locations/abu-dhabi" },
      { label: "Sharjah Business", href: "/locations/sharjah" },
    ],
    relatedPosts: [
      { title: "Corporate Video Production Guide Dubai", href: "/blog/corporate-video-production-guide-dubai" },
      { title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
    ],
  },
};

const SLUGS = Object.keys(INDUSTRY_DATA);

export function generateStaticParams() {
  return SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: { params: { industry: string } }): Promise<Metadata> {
  const data = INDUSTRY_DATA[params.industry];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `https://www.backyardstudioofficial.com/industries/${params.industry}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: [{ url: data.heroImage, width: 1920, height: 1080 }],
      type: "website",
    },
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = INDUSTRY_DATA[params.industry];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.name} Production Services — Backyard Studio Official`,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
      telephone: "+971585882685",
      address: { "@type": "PostalAddress", addressCountry: "AE", addressRegion: "Dubai" },
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: `https://www.backyardstudioofficial.com/industries/${params.industry}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden" style={{ paddingTop: "120px" }}>
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 30%, rgba(5,5,5,0.4) 70%, transparent)" }} />
        </div>
        <div className="container-xl relative pb-20">
          <p className="eyebrow mb-4">Industry Solutions</p>
          <h1 className="font-display text-5xl sm:text-7xl leading-none mb-6" style={{ color: "var(--cream)" }}>
            {data.name.toUpperCase()}
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: "var(--silver)" }}>{data.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Get a Free Quote</span>
              <ArrowUpRight size={14} />
            </Link>
            <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer"
              className="btn-gold" style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}>
              <span>WhatsApp Us</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── RESULTS BAR ── */}
      <section className="py-12 border-b" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-display text-4xl mb-1" style={{ color: "var(--gold)" }}>{r.stat}</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO + CHALLENGE / SOLUTION ── */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl max-w-4xl">
          <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--silver)" }}>{data.intro}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border" style={{ borderColor: "var(--border)" }}>
              <p className="eyebrow mb-4">The Challenge</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{data.challenge}</p>
            </div>
            <div className="p-8 border" style={{ borderColor: "rgba(212,160,23,0.3)" }}>
              <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>Our Solution</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{data.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <p className="eyebrow mb-4 text-center">What We Deliver</p>
          <h2 className="font-display text-4xl text-center mb-16" style={{ color: "var(--cream)" }}>
            PRODUCTION SERVICES FOR {data.name.toUpperCase()}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <Link key={s.href + s.label} href={s.href}
                className="group p-6 border transition-all duration-300 hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg" style={{ color: "var(--cream)" }}>{s.label}</h3>
                  <ArrowUpRight size={16} className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="section-pad border-t" style={{ background: "rgba(212,160,23,0.03)", borderColor: "var(--border)" }}>
        <div className="container-xl max-w-4xl">
          <p className="eyebrow mb-4">Case Study</p>
          <h2 className="font-display text-3xl mb-2" style={{ color: "var(--cream)" }}>{data.caseStudy.title}</h2>
          <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>{data.caseStudy.client}</p>
          <div className="inline-block px-4 py-2 mb-8 border" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
            <p className="text-xs tracking-widest uppercase">Result: {data.caseStudy.result}</p>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>{data.caseStudy.body}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl max-w-3xl">
          <p className="eyebrow mb-4 text-center">FAQ</p>
          <h2 className="font-display text-4xl text-center mb-12" style={{ color: "var(--cream)" }}>
            COMMON QUESTIONS
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="group border" style={{ borderColor: "var(--border)" }}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium pr-6" style={{ color: "var(--cream)" }}>{faq.q}</span>
                  <ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" style={{ color: "var(--gold)" }} />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED: LOCATIONS + POSTS ── */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-6">We Cover</p>
            <div className="space-y-3">
              {data.relatedLocations.map((l) => (
                <Link key={l.href} href={l.href}
                  className="flex items-center gap-3 group transition-colors"
                  style={{ color: "var(--muted)" }}>
                  <ArrowUpRight size={14} className="group-hover:text-[var(--gold)] transition-colors" />
                  <span className="group-hover:text-[var(--gold)] transition-colors text-sm">{l.label}</span>
                </Link>
              ))}
              <Link href="/locations" className="flex items-center gap-3 group transition-colors mt-4" style={{ color: "var(--gold)" }}>
                <ArrowUpRight size={14} />
                <span className="text-sm">All UAE Emirates →</span>
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-6">Further Reading</p>
            <div className="space-y-4">
              {data.relatedPosts.map((p) => (
                <Link key={p.href} href={p.href}
                  className="block group p-4 border transition-all hover:border-[var(--gold)]"
                  style={{ borderColor: "var(--border)" }}>
                  <span className="text-sm group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--silver)" }}>{p.title}</span>
                </Link>
              ))}
              <Link href="/blog" className="flex items-center gap-2 text-sm mt-2" style={{ color: "var(--gold)" }}>
                <ArrowUpRight size={14} />
                All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <p className="eyebrow mb-6">Ready to Start?</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-8" style={{ color: "var(--cream)" }}>
          LET'S CREATE SOMETHING
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold">
            <span>Get a Free Quote</span>
            <ArrowUpRight size={14} />
          </Link>
          <a href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%27m%20interested%20in%20your%20{data.name}%20services"
            target="_blank" rel="noreferrer"
            className="btn-gold" style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}>
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
