import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";

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

  /* ── HOSPITALITY ───────────────────────────────────────────────────── */
  "hospitality": {
    name: "Hospitality",
    tagline: "Hotel, Resort & Tourism Content That Fills Rooms",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    metaTitle: "Hotel Photography & Hospitality Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading hospitality content studio. Hotel photography, resort video tours, F&B shoots, and tourism campaigns for 5-star properties across UAE. GCAA drone included.",
    keywords: ["hotel photography Dubai UAE","hospitality video production Dubai","resort photography UAE","hotel video tour Dubai","F&B photography Dubai","tourism content production UAE","hotel room photography Dubai","spa photography UAE"],
    intro: "In UAE's ultra-competitive hospitality market, your content is your first impression. Backyard Studio Official has produced visual content for 5-star hotels, beach resorts, boutique properties, and luxury F&B brands across all seven emirates — from flagship Jumeirah properties to Saadiyat Island retreats.",
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
    caseStudy: { title: "Full Visual Identity Refresh", client: "Luxury Beach Resort, Ras Al Khaimah", result: "OTA click-through rate increased 2.8× within 90 days", body: "A 5-star RAK resort approached us after their existing photography was preventing them from ranking higher on Booking.com. We delivered a complete 2-day shoot: hero exterior aerials at sunrise, lifestyle pool scenes, F&B campaigns for their beach restaurant, spa imagery, and suite photography. The content refresh drove a 2.8× improvement in OTA CTR and was featured in Condé Nast Traveller's UAE roundup." },
    faqs: [
      { q: "How much does hotel photography cost in Dubai?", a: "Hotel photography in Dubai typically starts from AED 8,000–12,000 for a half-day package, up to AED 25,000+ for a comprehensive 2-day shoot covering all hotel zones, F&B, spa, and lifestyle with drone." },
      { q: "Do you include drone photography in hotel packages?", a: "Yes. All our hotel photography packages include GCAA-licensed drone aerials — typically at golden hour for maximum visual impact." },
      { q: "How quickly can you deliver hotel photography?", a: "Standard delivery is 48–72 hours for photography. Video editing takes 5–7 working days. Rush delivery is available." },
    ],
    relatedLocations: [{ label: "Dubai Hotels", href: "/locations/dubai" },{ label: "Abu Dhabi Resorts", href: "/locations/abu-dhabi" },{ label: "Ras Al Khaimah", href: "/locations/ras-al-khaimah" }],
    relatedPosts: [{ title: "Hotel Photography Guide UAE 2026", href: "/blog/hotel-photography-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── REAL ESTATE ───────────────────────────────────────────────────── */
  "real-estate": {
    name: "Real Estate",
    tagline: "Property Content That Sells Listings Faster",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    metaTitle: "Real Estate Photography & Videography Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading real estate production studio. Property photography, walkthrough videos, aerial drone, and developer brand films for UAE's top agencies and developers.",
    keywords: ["real estate photography Dubai","property photography UAE","real estate videography Dubai","property video tour Dubai","real estate drone photography UAE","developer marketing video Dubai"],
    intro: "UAE's property market moves fast. Listings with professional photography and video sell for up to 20% more and move 3× faster than those with phone photos. Backyard Studio Official is the production partner of choice for Dubai's leading real estate agencies, off-plan developers, and property marketing teams.",
    challenge: "With thousands of listings competing on Bayut, Property Finder, and Instagram, poor-quality photography means your property gets scrolled past — regardless of how well it's priced or located.",
    solution: "We shoot every property to maximise perceived space, natural light, and lifestyle appeal. Our GCAA drone team adds location context and community overviews. Our walkthrough videos give remote buyers the confidence to enquire and view.",
    services: [
      { label: "Property Photography", href: "/services/real-estate", desc: "Interior, exterior, and lifestyle photography for residential, commercial, and off-plan properties." },
      { label: "Walkthrough Videos", href: "/services/real-estate", desc: "Smooth stabilised walkthrough tours with voiceover and music — delivered in 48h." },
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
    caseStudy: { title: "Off-Plan Launch Campaign", client: "Tier-1 UAE Developer, Dubai", result: "AED 2.1bn in sales enquiries generated in launch week", body: "A major UAE developer engaged us to produce the full content suite for an off-plan residential tower launch — including lifestyle video, GCAA drone aerials of the community masterplan, and a 3-minute launch film screened at the sales event. The campaign drove AED 2.1bn in enquiries in launch week." },
    faqs: [
      { q: "How much does real estate photography cost in Dubai?", a: "Real estate photography starts from AED 1,200 for a standard apartment, AED 2,500–4,000 for villas, and AED 5,000+ for full property marketing packages with drone and video." },
      { q: "How quickly can you deliver real estate photos?", a: "Standard delivery is 24–48 hours. We offer same-day rush delivery for urgent listings at an additional fee." },
      { q: "Can you shoot properties across all UAE emirates?", a: "Yes. We cover all 7 UAE emirates with our own GCAA-licensed drone team." },
    ],
    relatedLocations: [{ label: "Dubai Properties", href: "/locations/dubai" },{ label: "Abu Dhabi Properties", href: "/locations/abu-dhabi" },{ label: "Sharjah Properties", href: "/locations/sharjah" }],
    relatedPosts: [{ title: "Real Estate Photography Guide Dubai 2026", href: "/blog/real-estate-photography-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── FASHION ───────────────────────────────────────────────────────── */
  "fashion": {
    name: "Fashion",
    tagline: "Campaign-Quality Fashion Content in Dubai",
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80",
    metaTitle: "Fashion Photography & Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading fashion content studio. Editorial shoots, lookbooks, campaign photography, kids fashion, and runway video for UAE fashion brands. Studio and on-location.",
    keywords: ["fashion photography Dubai","editorial photography Dubai","lookbook photography UAE","fashion campaign Dubai","kids fashion photography Dubai","model photography Dubai","abaya fashion photography Dubai"],
    intro: "Dubai has become one of the Middle East's leading fashion production destinations. Backyard Studio Official produces fashion content for local designers, GCC brands, international labels entering the UAE market, and multi-brand retailers — from editorial shoots to full campaign productions.",
    challenge: "Fashion content in the UAE must navigate cultural nuance, seasonal timing, and a highly visual audience that instantly distinguishes brand-quality photography from amateur work.",
    solution: "We bring a full creative team to every fashion shoot — art direction, styling coordination, professional models, and post-production colour grading to match your brand identity.",
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
    caseStudy: { title: "E-commerce Lookbook Campaign", client: "UAE Modest Fashion Brand", result: "Instagram following grew 40% in 30 days post-launch", body: "A Dubai-based modest fashion brand needed a full seasonal lookbook for their Ramadan collection. We produced a 3-day shoot across two locations delivering 120 edited product images, 6 Instagram Reels, and a 90-second campaign video. The launch drove their Instagram from 28,000 to 39,000 followers in 30 days." },
    faqs: [
      { q: "How much does fashion photography cost in Dubai?", a: "Fashion photography starts from AED 4,000–6,000 for a half-day editorial, up to AED 15,000–25,000 for a full campaign day with creative direction, styling, models, and multiple locations." },
      { q: "Do you shoot abaya and modest fashion?", a: "Yes. We have extensive experience producing modest fashion photography for Gulf-market brands with a deep understanding of cultural requirements." },
      { q: "Can you produce fashion content for TikTok and Instagram?", a: "Yes. We produce social-first fashion content specifically optimised for Instagram Reels and TikTok with vertical framing and fast-paced edits." },
    ],
    relatedLocations: [{ label: "Dubai Fashion Shoots", href: "/locations/dubai" },{ label: "Abu Dhabi Fashion", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Fashion Photography Guide Dubai 2026", href: "/blog/fashion-photography-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── FOOD & BEVERAGE ───────────────────────────────────────────────── */
  "food-beverage": {
    name: "Food & Beverage",
    tagline: "F&B Photography & Video That Drives Covers",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    metaTitle: "Food Photography & F&B Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading food & beverage content studio. Restaurant photography, menu shoots, delivery app content, and F&B brand films for UAE restaurants and FMCG brands.",
    keywords: ["food photography Dubai","restaurant photography Dubai","menu photography UAE","F&B photography Dubai","food delivery app photography UAE","FMCG product photography Dubai"],
    intro: "Dubai's F&B market is one of the world's most competitive — with thousands of restaurants, cafes, and food brands fighting for attention on Talabat, Deliveroo, Instagram, and Google. Backyard Studio Official has produced food content for 150+ UAE restaurants, FMCG brands, and hospitality groups.",
    challenge: "Bad food photography kills appetite and booking conversions instantly. In a market where customers decide whether to order in 3 seconds, professional imagery directly impacts your revenue.",
    solution: "We shoot food the way it should be experienced — with proper styling, precise lighting, and an understanding of colour temperature that makes dishes look irresistible on screen.",
    services: [
      { label: "Menu Photography", href: "/services/food", desc: "Full menu shoots — all dishes styled, lit, and delivered print-ready and web-optimised." },
      { label: "Delivery App Content", href: "/services/food", desc: "Talabat, Deliveroo, and Noon Food optimised photography for maximum CTR on listings." },
      { label: "Restaurant Photography", href: "/services/food", desc: "Ambience, interior, exterior, and team photography for restaurant websites and marketing." },
      { label: "Social Media Food Content", href: "/services/reels-production", desc: "Instagram Reels, TikTok recipe videos, and food content series for brand channels." },
      { label: "FMCG Product Photography", href: "/services/product-shoots", desc: "Packaged food product photography for retail listings, e-commerce, and brand campaigns." },
      { label: "F&B Brand Films", href: "/services/dvcs", desc: "Concept-to-screen brand films for restaurant launches and food brand campaigns." },
    ],
    results: [
      { stat: "150+", label: "F&B brands and restaurants shot across UAE" },
      { stat: "40%", label: "Average delivery order uplift with professional photos" },
      { stat: "24h", label: "Express delivery for urgent delivery app listings" },
      { stat: "5★", label: "Average Google review score from F&B clients" },
    ],
    caseStudy: { title: "Full Menu & Brand Overhaul", client: "Multi-branch UAE Restaurant Group", result: "Delivery orders increased 43% in 60 days", body: "A 12-branch UAE restaurant group needed to refresh all delivery app listings and launch on Noon Food. We produced a 3-day food styling shoot covering 180 menu items, ambience photography for all branches, and a 60-second brand launch video. The new listing images drove 43% more orders within 60 days." },
    faqs: [
      { q: "How much does food photography cost in Dubai?", a: "Food photography starts from AED 2,500 for a half-day shoot (15–25 dishes), AED 5,000–8,000 for a full-day menu shoot (40–60 dishes), and AED 12,000+ for comprehensive F&B brand packages with video and social content." },
      { q: "Can you optimise photos for Talabat and Deliveroo?", a: "Yes. We understand the image specifications and visual requirements of UAE's major delivery platforms and shoot and deliver files in the correct formats." },
    ],
    relatedLocations: [{ label: "Dubai Restaurants", href: "/locations/dubai" },{ label: "Abu Dhabi F&B", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Food Photography Guide Dubai 2026", href: "/blog/food-photography-guide-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── CORPORATE ─────────────────────────────────────────────────────── */
  "corporate": {
    name: "Corporate",
    tagline: "Corporate Films & Photography That Build Authority",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    metaTitle: "Corporate Video Production & Photography Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading corporate production studio. Company profile films, executive photography, office shoots, annual reports, and internal communications videos for UAE businesses.",
    keywords: ["corporate video production Dubai","corporate photography Dubai UAE","company profile film Dubai","executive photography Dubai","office photography UAE","LinkedIn video production UAE"],
    intro: "In UAE's business-first market, your corporate content signals your company's credibility before a single word is read. Backyard Studio Official produces corporate content for multinationals, government entities, SMEs, and startups across all sectors.",
    challenge: "Generic corporate content is forgettable — and forgettable corporate content means lost pitches, weaker hiring, and lower investor confidence.",
    solution: "We bring a cinematic approach to corporate content — treating every company profile film as a brand story worth watching. Our corporate photography captures people authentically, not stiffly.",
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
    caseStudy: { title: "Full Corporate Content Suite", client: "ADGM-Registered Financial Services Firm", result: "LinkedIn engagement 3× post-launch; 2 new enterprise clients attributed", body: "A leading financial services firm based in ADGM needed to elevate their brand presence ahead of GCC expansion. We produced executive portraits for all 12 C-suite members, team photography, a 4-minute company profile film, and a LinkedIn content series of 8 short videos. The firm attributed two new enterprise clients directly to the elevated brand presentation." },
    faqs: [
      { q: "How much does corporate video production cost in Dubai?", a: "Corporate video production starts from AED 5,000 for a simple testimonial, AED 12,000–18,000 for a company profile film, and AED 25,000+ for premium documentary-style brand films." },
      { q: "Can you produce content in both Arabic and English?", a: "Yes. We produce corporate content in both Arabic and English — including Arabic voiceover recording and bilingual lower-thirds." },
    ],
    relatedLocations: [{ label: "Dubai Corporate", href: "/locations/dubai" },{ label: "Abu Dhabi ADGM", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Corporate Video Production Guide Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── SPORTS ────────────────────────────────────────────────────────── */
  "sports": {
    name: "Sports",
    tagline: "UAE Sports Coverage — From Pitch to Podium",
    heroImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920&q=80",
    metaTitle: "Sports Video Production & Event Photography Dubai UAE | Backyard Studio Official",
    metaDescription: "UAE's leading sports production studio. Event coverage, athlete branding, highlight reels, drone aerials and social media content for Formula 1, football, cricket, tennis, horse racing, MMA and all UAE sports events.",
    keywords: ["sports video production Dubai","sports photography UAE","sports event coverage Dubai","athlete photography UAE","sports highlight reel Dubai","Formula 1 video production UAE","football event coverage Dubai","cricket photography UAE","horse racing photography Dubai","sports drone filming UAE","padel video Dubai","MMA event coverage UAE"],
    intro: "The UAE is one of the world's great sporting destinations — hosting Formula 1 at Yas Marina, the Dubai Duty Free Tennis Championships, Dubai Rugby Sevens, Meydan's Dubai World Cup (the world's richest horse race), the UAE Pro League, ICC cricket tournaments, and major MMA events. Backyard Studio Official provides broadcast-quality sports production for federations, clubs, sponsors, and brands across every sport in the Emirates.",
    challenge: "Sports content has the shortest shelf life of any content category — but the highest virality potential. A 90-second highlight reel posted within hours of a match can generate millions of impressions. Miss the window and the moment is gone forever.",
    solution: "We bring multi-camera live event rigs, GCAA-licensed drone aerials, and a dedicated social media team to every sports production — delivering same-day highlight reels, next-day full edits, and a social content pipeline that keeps your audience engaged long after the final whistle.",
    services: [
      { label: "Event Coverage — Multi-Camera", href: "/services/event-videography", desc: "Broadcast-ready multi-camera coverage of matches, races, tournaments, and sporting events across UAE." },
      { label: "Athlete Branding & Photography", href: "/services/photo-shoots", desc: "Athlete profile shoots, action photography, sponsorship content, and personal brand campaigns." },
      { label: "Highlight Reels & Match Films", href: "/services/event-video-editing", desc: "Same-day social highlights and full match/event films delivered within 24 hours." },
      { label: "Drone Aerials — GCAA Licensed", href: "/services/aerial-drone", desc: "Stadium overviews, race track aerials, outdoor event coverage — fully licensed for UAE airspace." },
      { label: "Sponsor Activation Content", href: "/services/dvcs", desc: "Brand activation films, sponsor logo integration, and co-branded content for event sponsors." },
      { label: "Social Media Sports Reels", href: "/services/reels-production", desc: "TikTok, Instagram Reels and YouTube Shorts — vertical-optimised sports content for fan engagement." },
    ],
    results: [
      { stat: "48h", label: "Full event film delivery after shoot" },
      { stat: "Same Day", label: "Social highlight reels available" },
      { stat: "4K", label: "All sports content delivered in 4K" },
      { stat: "GCAA", label: "Licensed drone for all outdoor venues" },
    ],
    caseStudy: { title: "UAE Pro League Match Coverage", client: "UAE Football Club, Arabian Gulf League", result: "Match highlight reel reached 2.1M views in 48 hours", body: "A UAE Pro League club engaged us for season-long match coverage after their in-house team struggled with production quality and delivery speed. We deployed a 4-camera live rig, pitch-side photographer, and GCAA drone for aerial stadium shots. The same-day highlight reel — 90 seconds of best moments — reached 2.1M views on Instagram and YouTube within 48 hours, becoming the club's highest-performing social post that season." },
    faqs: [
      { q: "Do you cover Formula 1 at Abu Dhabi Grand Prix?", a: "Yes. We provide accredited media production services for F1-adjacent events, sponsor activations, and fan zone coverage at Yas Marina Circuit. Full circuit access filming requires Formula 1 media accreditation which we assist clients in obtaining." },
      { q: "Can you cover cricket matches at Dubai and Abu Dhabi international stadiums?", a: "Yes. We have covered ICC tournaments and franchise cricket events at Dubai International Cricket Stadium and Zayed Cricket Stadium, Abu Dhabi. We understand venue media access requirements and coordinate accordingly." },
      { q: "Do you provide same-day highlight reels for sports events?", a: "Yes. Our standard sports event package includes a same-day 60–90 second social highlight reel delivered before midnight on event day, plus a full match/event film within 48 hours." },
      { q: "Can you film at Meydan Racecourse for horse racing events?", a: "Yes. We have produced content at Meydan for racing events including Dubai World Cup season fixtures. We understand Meydan's media access protocols and can coordinate full event coverage." },
    ],
    relatedLocations: [{ label: "Dubai Sports Venues", href: "/locations/dubai" },{ label: "Abu Dhabi Yas Island", href: "/locations/abu-dhabi" },{ label: "Sharjah Stadium", href: "/locations/sharjah" }],
    relatedPosts: [{ title: "Event Videography Guide Dubai 2026", href: "/blog/best-event-videographers-dubai-2026" },{ title: "Drone Filming Rules UAE 2026", href: "/blog/drone-videography-rules-dubai-2026" }],
  },

  /* ── AUTOMOTIVE ────────────────────────────────────────────────────── */
  "automotive": {
    name: "Automotive",
    tagline: "Car Content Built for Dubai's Roads",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
    metaTitle: "Automotive Video Production & Car Photography Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading automotive content studio. Car commercial films, dealership photography, dynamic on-road shoots, and UAE automotive brand campaigns — desert, city, and aerial drone.",
    keywords: ["automotive video production Dubai","car photography Dubai UAE","car commercial film UAE","dealership photography Dubai","automotive brand content UAE","car launch video Dubai","luxury car photography UAE","EV brand film Dubai","automotive drone filming UAE","car commercial Dubai"],
    intro: "Dubai is one of the world's great automotive markets — with a concentration of luxury vehicles, performance cars, and automotive enthusiasm unmatched almost anywhere. The visual standards for car content in UAE are correspondingly high. Backyard Studio Official has produced automotive content for car brands, dealerships, automotive media, and luxury car owners — from cinematic commercials to social media campaigns.",
    challenge: "UAE car buyers are among the most visually sophisticated in the world. Phone footage or generic studio shots won't move metal here. Buyers expect cinematic quality — the kind you see in international brand campaigns — applied to UAE's extraordinary locations.",
    solution: "We bring cinema-grade cameras, precision rigging, GCAA drone certification, and a deep knowledge of UAE's best automotive shooting locations to every car production. Desert dunes, Sheikh Zayed Road at night, mountain switchbacks — we know where to shoot and when the light is right.",
    services: [
      { label: "Car Commercial Films", href: "/services/dvcs", desc: "Cinematic car commercials for broadcast, YouTube, and social media — from AED 8,000." },
      { label: "Dealership Photography", href: "/services/photo-shoots", desc: "Showroom photography, stock photography, and dealership campaign shoots." },
      { label: "Dynamic On-Road Filming", href: "/services/automotive", desc: "Moving car shots, pursuit vehicles, speed ramps, and location driving sequences." },
      { label: "Drone Aerial Automotive", href: "/services/aerial-drone", desc: "GCAA-licensed aerial car shots — desert flyovers, highway sequences, location reveals." },
      { label: "EV & Luxury Brand Content", href: "/services/corporate-brand-films", desc: "Electric vehicle and luxury brand films that communicate innovation and prestige." },
      { label: "Social Media Car Content", href: "/services/reels-production", desc: "Instagram Reels, TikTok, and YouTube Shorts for car brands and dealership channels." },
    ],
    results: [
      { stat: "50+", label: "Automotive brands and dealerships shot" },
      { stat: "4 Locations", label: "Desert, city, mountain & coastal shoots" },
      { stat: "GCAA", label: "Licensed drone team for all aerial car shots" },
      { stat: "4K", label: "All automotive content in cinema-grade 4K" },
    ],
    caseStudy: { title: "Luxury SUV Launch Campaign", client: "UAE Luxury Car Dealership", result: "Instagram Reel reached 1.8M views; test drive enquiries up 60%", body: "A Dubai luxury car dealership needed a full launch campaign for a new SUV model. We produced a full day shoot across Al Qudra desert at sunrise, Dubai skyline at night, and a stadium car park sequence — delivering a 90-second hero commercial, 6 social media Reels, and 200 static photography assets. The hero Reel reached 1.8M organic views on Instagram and drove a 60% increase in test drive bookings compared to the previous model launch." },
    faqs: [
      { q: "How much does a car commercial cost in Dubai?", a: "Automotive video production in Dubai starts from AED 8,000 for a 1-day shoot with a 60-second social video, AED 15,000–35,000 for a full automotive commercial with multiple locations and drone, and AED 35,000+ for broadcast-standard brand films with talent." },
      { q: "What are the best locations for car shoots in Dubai?", a: "Our most-used automotive locations are Al Qudra desert road (golden hour dunes), Sheikh Zayed Road (night city sequences), Hatta mountain road (switchbacks), Dubai Design District (architectural backdrop), and Jumeirah Beach Road (coastal lifestyle)." },
      { q: "Can you film moving car shots on UAE roads?", a: "Yes. We have the equipment and experience for moving car sequences including pursuit vehicle setups, magnetic camera rigging, and stabilised gimbal shots from alongside moving vehicles on permitted UAE road locations." },
    ],
    relatedLocations: [{ label: "Dubai Car Shoots", href: "/locations/dubai" },{ label: "Abu Dhabi Automotive", href: "/locations/abu-dhabi" },{ label: "Hatta Mountain Road", href: "/locations/dubai" }],
    relatedPosts: [{ title: "Car Commercial Production Dubai 2026", href: "/blog/car-commercial-production-dubai-2026" },{ title: "Drone Photography Guide UAE 2026", href: "/blog/drone-photography-dubai-2026" }],
  },

  /* ── HEALTHCARE ────────────────────────────────────────────────────── */
  "healthcare": {
    name: "Healthcare",
    tagline: "Medical Content That Builds Patient Trust",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80",
    metaTitle: "Healthcare Photography & Medical Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "UAE's leading healthcare content studio. Hospital photography, doctor profile videos, patient testimonials, medical tourism campaigns, and health brand content for UAE clinics, hospitals and wellness brands.",
    keywords: ["healthcare photography Dubai","medical video production UAE","hospital photography Dubai","doctor profile video UAE","patient testimonial video Dubai","medical tourism content UAE","clinic photography Dubai","health brand video UAE","pharmaceutical brand content Dubai","wellness photography UAE"],
    intro: "Dubai has become a global medical tourism destination — with world-class hospitals, specialist clinics, and wellness centres competing for patients from across the GCC, Asia, Europe, and beyond. In healthcare, content is trust. Backyard Studio Official produces clinical photography, doctor profile videos, patient testimonial films, and medical brand campaigns for UAE's leading healthcare providers.",
    challenge: "Healthcare content must balance clinical credibility with human warmth — difficult to achieve without experienced production teams who understand medical environments, patient privacy requirements, and the specific visual language that builds confidence in healthcare brands.",
    solution: "We approach every healthcare shoot with discretion, professionalism, and a thorough understanding of clinical environments. Our healthcare content humanises medical expertise — making complex capabilities accessible and building the patient trust that drives bookings.",
    services: [
      { label: "Hospital & Clinic Photography", href: "/services/photo-shoots", desc: "Facility, equipment, and environmental photography for websites, OTA, and marketing materials." },
      { label: "Doctor Profile Videos", href: "/services/testimonial-videos", desc: "Specialist profile films that communicate expertise and build patient confidence." },
      { label: "Patient Testimonial Films", href: "/services/testimonial-videos", desc: "Authentic patient journey and success stories — ethically produced with patient consent." },
      { label: "Medical Tourism Campaigns", href: "/services/dvcs", desc: "Destination healthcare content targeting international patients from GCC, India, and Europe." },
      { label: "Health Brand Films", href: "/services/corporate-brand-films", desc: "Hospital brand films, pharmaceutical campaigns, and health initiative videos." },
      { label: "Social Media Health Content", href: "/services/reels-production", desc: "Instagram Reels, YouTube health education series, and LinkedIn doctor thought leadership." },
    ],
    results: [
      { stat: "50+", label: "Healthcare brands and clinics served" },
      { stat: "24h", label: "Photography delivery for urgent campaigns" },
      { stat: "GCC", label: "Medical tourism content for Gulf markets" },
      { stat: "Bilingual", label: "Arabic & English content production" },
    ],
    caseStudy: { title: "Medical Tourism Brand Campaign", client: "Multi-Specialty Hospital, Dubai Healthcare City", result: "International patient enquiries up 35% in 90 days", body: "A major DHCC hospital needed to position itself as the GCC's destination of choice for orthopedic surgery. We produced a 2-day shoot covering 8 specialist doctor profiles, state-of-the-art operating theatre photography (with full clinical team coordination), patient testimonial films in Arabic, English, Hindi and Urdu, and a 3-minute brand film. The campaign drove a 35% increase in international patient enquiries within 90 days of launch." },
    faqs: [
      { q: "Can you film inside operating theatres and clinical environments?", a: "Yes. We have experience filming inside clinical environments and understand the infection control protocols, PPE requirements, and procedural coordination required for operating theatre and specialist unit photography." },
      { q: "How do you handle patient privacy in healthcare shoots?", a: "All patient testimonial productions involve full written consent from patients and comply with UAE health data regulations. We never photograph or film patients without explicit documented consent and always provide all parties with copies of consent documentation." },
      { q: "Can you produce healthcare content in Arabic, Hindi and Urdu?", a: "Yes. We produce healthcare content in Arabic, English, Hindi, and Urdu — including native-language voiceover recording, bilingual lower-thirds, and culturally appropriate content tailored to each target patient market." },
    ],
    relatedLocations: [{ label: "Dubai Healthcare City", href: "/locations/dubai" },{ label: "Abu Dhabi Clinics", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Corporate Photography Dubai 2026", href: "/blog/corporate-photography-dubai-2026" },{ title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── TECHNOLOGY ────────────────────────────────────────────────────── */
  "technology": {
    name: "Technology",
    tagline: "Tech Content That Converts — Dubai's Startup & Enterprise Scene",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
    metaTitle: "Technology Video Production & Startup Brand Content Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading tech content studio. Product demo videos, startup brand films, app launch content, investor pitch videos, and tech event coverage for UAE's growing technology ecosystem — GITEX, FinTech, AI and more.",
    keywords: ["technology video production Dubai","startup brand film UAE","product demo video Dubai","app launch content UAE","tech event coverage Dubai","GITEX video production","investor pitch video UAE","SaaS explainer video Dubai","AI brand content UAE","fintech video production Dubai"],
    intro: "Dubai has positioned itself as the Middle East's technology hub — with GITEX Global, the Dubai Future Accelerators, D33 economic plan, and a thriving startup ecosystem backed by global VCs. Technology companies in UAE need content that communicates innovation, builds investor confidence, and drives user acquisition. Backyard Studio Official produces tech content for startups, scaleups, enterprise technology brands, and government technology initiatives.",
    challenge: "Technology is abstract — the hardest thing to communicate visually. Most tech content fails because it shows screens and keyboards instead of the human problem being solved. In UAE's competitive tech landscape, generic content means lost deals, weaker fundraising, and slower growth.",
    solution: "We approach tech content with a storytelling lens — leading with the human problem, showing the solution in action, and ending with the transformation. Whether it's a 60-second app demo or a 5-minute investor film, every piece is built to convert.",
    services: [
      { label: "Product Demo Videos", href: "/services/dvcs", desc: "Screen recording, device mockup filming, and live demo videos for apps, platforms, and SaaS products." },
      { label: "Startup Brand Films", href: "/services/corporate-brand-films", desc: "Founder stories, team culture films, and company overview videos for startups and scaleups." },
      { label: "App Launch Campaigns", href: "/services/reels-production", desc: "Social media campaign content for app launches — iOS, Android, and web platform launches." },
      { label: "Investor Pitch Videos", href: "/services/corporate-brand-films", desc: "Professional pitch video production for VC fundraising rounds and investor presentations." },
      { label: "Tech Event Coverage", href: "/services/event-videography", desc: "GITEX, Step Conference, hackathons, and demo days — professional multi-camera coverage." },
      { label: "LinkedIn Tech Content", href: "/services/youtube-content", desc: "Thought leadership series, founder interviews, and LinkedIn video for tech executives and brands." },
    ],
    results: [
      { stat: "100+", label: "Tech startups and brands served" },
      { stat: "GITEX", label: "Official GITEX season production partner" },
      { stat: "48h", label: "Standard delivery for tech content packages" },
      { stat: "GCC", label: "Content deployed across Gulf tech markets" },
    ],
    caseStudy: { title: "Series A Fundraising Content Suite", client: "Dubai FinTech Startup", result: "Series A round closed at AED 36M; 3 investors cited video in decision", body: "A Dubai-based fintech startup needed an investor content suite ahead of their Series A round. We produced a 90-second company overview film, 5-minute founder story documentary, product demo video for their payments platform, and a team culture photo series. Three investors in the final round explicitly cited the video content as a factor in their confidence to close — and the round closed at AED 36M." },
    faqs: [
      { q: "Can you produce content for GITEX Global?", a: "Yes. We have produced event coverage, booth content, and conference films for brands exhibiting at GITEX Global and GITEX Expand North Star. We understand the DWTC venue requirements, filming access procedures, and the fast turnaround needed for event-day social content." },
      { q: "Do you produce explainer animations for tech products?", a: "We produce live-action product demos, screen recording integrations, and device mockup videos. For fully animated explainers we work with our trusted animation partners and oversee the creative direction." },
      { q: "Can you help with an app launch social media campaign?", a: "Yes. We produce complete app launch content packages — including hero video, 6 social media Reels optimised for Instagram and TikTok, YouTube Shorts, and static photography for app store listings and press kits." },
    ],
    relatedLocations: [{ label: "Dubai Tech Ecosystem", href: "/locations/dubai" },{ label: "Abu Dhabi Tech", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },{ title: "Social Media Content Dubai 2026", href: "/blog/social-media-content-creation-dubai-2026" }],
  },

  /* ── MUSIC & ENTERTAINMENT ─────────────────────────────────────────── */
  "music-entertainment": {
    name: "Music & Entertainment",
    tagline: "Music Videos, Artist Branding & Concert Coverage — UAE",
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
    metaTitle: "Music Video Production & Artist Photography Dubai UAE | Backyard Studio Official",
    metaDescription: "UAE's leading music and entertainment production studio. Music videos, artist branding, concert coverage, EPK production, and entertainment brand content for artists, labels, and event promoters in Dubai and across the UAE.",
    keywords: ["music video production Dubai","artist photography UAE","music video Dubai","concert coverage UAE","entertainment video production Dubai","EPK production UAE","artist branding Dubai","album launch video UAE","DJ promo video Dubai","Arabic music video production UAE"],
    intro: "Dubai has emerged as a major music and entertainment hub — with world-class venues, international touring artists, and a thriving local music scene spanning Arabic pop, hip-hop, electronic, and South Asian music. Backyard Studio Official produces music videos, artist content, concert coverage, and entertainment brand campaigns for artists, labels, and promoters operating in the UAE and broader MENA region.",
    challenge: "In 2026, a music artist's visual identity is as important as their sound. Poor quality music videos, inconsistent content, and weak visual branding are invisible barriers to playlist placement, venue bookings, and brand deals — regardless of how strong the music is.",
    solution: "We approach every music production with the same creative ambition we bring to commercial brand films. Whether it's a narrative music video with full art direction or a stripped-back performance piece, we deliver content that elevates an artist's visual identity and performs on every platform.",
    services: [
      { label: "Music Video Production", href: "/services/dvcs", desc: "Concept-to-delivery music video production — narrative, performance, and experimental formats." },
      { label: "Artist Branding & Photography", href: "/services/photo-shoots", desc: "Press photography, album artwork, social media assets, and visual identity shoots." },
      { label: "Concert & Live Event Coverage", href: "/services/event-videography", desc: "Multi-camera concert coverage with same-day social highlights for artists and promoters." },
      { label: "EPK & Promo Videos", href: "/services/corporate-brand-films", desc: "Electronic press kit production, artist introduction films, and radio/TV promo content." },
      { label: "Social Media Artist Content", href: "/services/reels-production", desc: "Instagram Reels, TikTok content, and YouTube Shorts optimised for music discovery algorithms." },
      { label: "Lyric & Visualiser Videos", href: "/services/event-video-editing", desc: "Lyric videos, audio visualisers, and animated artist content for Spotify, Apple Music, and YouTube." },
    ],
    results: [
      { stat: "50+", label: "Artists and labels served" },
      { stat: "Same Day", label: "Concert highlight reels delivered" },
      { stat: "MENA", label: "Content distributed across Arab markets" },
      { stat: "4K", label: "All music content in cinema-grade 4K" },
    ],
    caseStudy: { title: "Debut Music Video Campaign", client: "UAE-Based Arabic Pop Artist", result: "Music video reached 3.2M views in 14 days; secured major label meeting", body: "A UAE-based Arabic pop artist needed a debut music video to establish their visual identity and attract label interest. We developed the concept, scouted Dubai locations, coordinated talent and wardrobe, and produced a 3-day shoot across old Dubai, a luxury interior, and a desert sunset sequence. The video reached 3.2M views in 14 days and directly secured a meeting with a major GCC record label." },
    faqs: [
      { q: "How much does a music video cost in Dubai?", a: "Music video production in Dubai starts from AED 8,000 for a performance-focused single-location shoot, AED 15,000–25,000 for a narrative video with multiple locations and wardrobe, and AED 40,000+ for cinematic productions with full art direction, casting, and post-production." },
      { q: "Do you produce Arabic music videos?", a: "Yes. We have produced music video content for Arabic-language artists and have a deep understanding of the cultural context, visual language, and distribution channels relevant to Arab music markets across UAE and GCC." },
      { q: "Can you cover concerts at Coca-Cola Arena and other Dubai venues?", a: "Yes. We have produced concert coverage content at major Dubai venues including Coca-Cola Arena, Expo City Dubai, and various hospitality venues. We coordinate with venue media teams for access and understand the technical requirements of live music environments." },
    ],
    relatedLocations: [{ label: "Dubai Entertainment", href: "/locations/dubai" },{ label: "Abu Dhabi Events", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Event Photography Dubai 2026", href: "/blog/event-photography-dubai-2026" },{ title: "Social Media Content UAE 2026", href: "/blog/social-media-content-creation-dubai-2026" }],
  },

  /* ── FITNESS & WELLNESS ────────────────────────────────────────────── */
  "fitness-wellness": {
    name: "Fitness & Wellness",
    tagline: "Fitness Content That Builds Brands & Communities",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80",
    metaTitle: "Fitness Photography & Wellness Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading fitness and wellness content studio. Gym branding, personal trainer videos, supplement brand campaigns, transformation films, and fitness social media content for UAE's booming health and wellness industry.",
    keywords: ["fitness photography Dubai","gym video production UAE","personal trainer content Dubai","supplement brand video UAE","fitness brand film Dubai","wellness photography UAE","gym branding content Dubai","fitness social media UAE","workout video production Dubai","transformation video UAE"],
    intro: "Dubai's fitness and wellness industry has exploded — with world-class gyms, boutique fitness studios, wellness brands, and a community of health-conscious residents who consume fitness content at scale. Backyard Studio Official produces gym branding, personal trainer content, supplement campaigns, and fitness social media for UAE's most ambitious health and wellness brands.",
    challenge: "The UAE fitness content space is crowded — but most of it looks the same. Generic workout videos, forgettable supplement ads, and fitness content that disappears into algorithmic noise. Standing out requires a production quality and creative approach that matches the ambition of the brands themselves.",
    solution: "We bring cinema-grade production quality to fitness content — treating every supplement campaign like a luxury brand film and every gym branding shoot like an editorial. The result is fitness content that stops thumbs, builds communities, and drives commercial outcomes.",
    services: [
      { label: "Gym Branding & Photography", href: "/services/photo-shoots", desc: "Full gym photography packages — equipment, facilities, atmosphere, and member lifestyle." },
      { label: "Personal Trainer Content", href: "/services/reels-production", desc: "Personal brand content, promo videos, client testimonials, and social media packages for PTs." },
      { label: "Supplement Brand Films", href: "/services/dvcs", desc: "Product photography, lifestyle campaigns, and brand films for supplement and nutrition brands." },
      { label: "Fitness Transformation Films", href: "/services/testimonial-videos", desc: "Client transformation story films that build brand credibility and drive conversions." },
      { label: "Exercise & Tutorial Reels", href: "/services/reels-production", desc: "Instagram Reels, TikTok, and YouTube Shorts — workout demonstrations and exercise tutorials." },
      { label: "Fitness Event Coverage", href: "/services/event-videography", desc: "Spartan Race, CrossFit, powerlifting, and fitness expo coverage with same-day highlights." },
    ],
    results: [
      { stat: "80+", label: "Fitness brands and gyms served in UAE" },
      { stat: "2×", label: "Average membership enquiry uplift from branding content" },
      { stat: "48h", label: "Standard content delivery" },
      { stat: "TikTok", label: "Specialised in fitness-first social platforms" },
    ],
    caseStudy: { title: "Premium Gym Launch Campaign", client: "Boutique Fitness Studio, Business Bay Dubai", result: "350 founding memberships sold in launch month", body: "A new premium boutique gym in Business Bay needed launch content to fill founding memberships before opening. We produced a 2-day shoot covering facility photography, 6 trainer profile videos, 12 social media Reels showing unique equipment and class formats, and a 90-second brand launch film. The content drove 350 founding memberships sold in the launch month — beating the studio's 6-month target in 30 days." },
    faqs: [
      { q: "How much does gym photography cost in Dubai?", a: "Gym photography in Dubai starts from AED 3,000 for a half-day facility shoot (exterior, main floor, equipment highlights), AED 6,000–10,000 for a comprehensive brand package including facility photography, trainer profiles, and member lifestyle content, and AED 15,000+ for full brand campaign with video content." },
      { q: "Can you help personal trainers build their social media content?", a: "Yes. We offer personal trainer social media content packages — typically a monthly shoot day producing 12–16 Reels, workout demonstrations, lifestyle content, and client testimonial clips. Packages start from AED 4,500 per month." },
      { q: "Do you produce supplement brand content for UAE brands?", a: "Yes. We produce product photography, lifestyle campaigns, and brand films for supplement and nutrition brands — including product flat lay photography, lifestyle model shoots, and social campaign content optimised for Instagram, TikTok, and Amazon UAE listings." },
    ],
    relatedLocations: [{ label: "Dubai Gyms & Studios", href: "/locations/dubai" },{ label: "Abu Dhabi Fitness", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Product Photography Dubai 2026", href: "/blog/product-photography-dubai-2026" },{ title: "Social Media Content UAE 2026", href: "/blog/social-media-content-creation-dubai-2026" }],
  },

  /* ── E-COMMERCE & RETAIL ───────────────────────────────────────────── */
  "ecommerce-retail": {
    name: "E-Commerce & Retail",
    tagline: "Product Content That Converts Browsers to Buyers",
    heroImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80",
    metaTitle: "E-Commerce Photography & Product Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "Dubai's leading e-commerce content studio. Product photography, Amazon UAE and Noon content, lifestyle shoots, social commerce reels, and retail brand campaigns for UAE e-commerce brands and online retailers.",
    keywords: ["e-commerce photography Dubai","product photography UAE","Amazon UAE product photography","Noon photography Dubai","product video production UAE","e-commerce content Dubai","lifestyle product photography UAE","social commerce content Dubai","retail brand campaign UAE","product shoot Dubai"],
    intro: "UAE's e-commerce market is growing at 25%+ annually — with Amazon UAE, Noon, Careem Shop, and direct-to-consumer brands competing for a digitally sophisticated consumer who makes purchasing decisions in seconds based primarily on visual content. Backyard Studio Official is the production partner for UAE's fastest-growing e-commerce brands — producing product photography, lifestyle campaigns, and social commerce content that drives conversion at scale.",
    challenge: "E-commerce product photography is a performance channel — every image is either earning or costing you money. Poor main images on Amazon UAE or Noon suppress listing visibility before a single buyer even sees your product. Weak lifestyle photography fails to create the purchase desire that moves inventory.",
    solution: "We approach every e-commerce shoot with a conversion mindset. Every image we produce is designed to maximise click-through rate, reduce returns, and increase add-to-cart conversion — because we understand the platforms our clients sell on and what their buyers respond to.",
    services: [
      { label: "Product Photography", href: "/services/product-shoots", desc: "White background, styled, and lifestyle product photography for all e-commerce platforms." },
      { label: "Amazon UAE & Noon Content", href: "/services/product-shoots", desc: "Platform-optimised main images, A+ content, infographics, and lifestyle images for UAE marketplaces." },
      { label: "Lifestyle Product Photography", href: "/services/photo-shoots", desc: "On-model and environmental product photography for DTC brands and social media." },
      { label: "Product Video & Reels", href: "/services/reels-production", desc: "Product reveal videos, unboxing reels, and social commerce content for Instagram and TikTok." },
      { label: "Meta & TikTok Ad Creative", href: "/services/ads-shooting", desc: "Paid social ad content — UGC-style, direct response, and brand creative for Meta and TikTok." },
      { label: "Seasonal Campaign Production", href: "/services/dvcs", desc: "Ramadan, Eid, National Day, Black Friday, and DSF campaign photography and video." },
    ],
    results: [
      { stat: "200+", label: "E-commerce brands served in UAE" },
      { stat: "40%", label: "Average conversion uplift with professional photography" },
      { stat: "24h", label: "Rush delivery for urgent platform launches" },
      { stat: "All Platforms", label: "Amazon, Noon, Talabat, Shopify, DTC" },
    ],
    caseStudy: { title: "Amazon UAE Launch Campaign", client: "UAE Beauty & Skincare Brand", result: "Amazon UAE BSR (Best Seller Rank) reached Top 5 in category within 30 days", body: "A UAE skincare brand was launching on Amazon UAE and needed content to compete with established international brands. We produced a full e-commerce content package: white background photography for all 18 SKUs, 6 lifestyle images per SKU, A+ content photography, and 3 product reveal videos. The brand's hero SKU reached the Top 5 Best Seller Rank in its category within 30 days of launch — driving AED 180,000 in first-month Amazon revenue." },
    faqs: [
      { q: "How much does product photography cost in Dubai?", a: "Product photography in Dubai starts from AED 75–150 per product for white background e-commerce shots (minimum 10 products), AED 150–250 per product for styled flat lay photography, and AED 300–500 per product for full lifestyle shoots with models or environmental settings. Volume pricing is available for larger catalogues." },
      { q: "Do you understand Amazon UAE and Noon content requirements?", a: "Yes. We are fully up to date with Amazon UAE and Noon's image requirements — including main image specifications, background requirements, zoom standards, A+ content dimensions, and the visual best practices that maximise listing CTR on both platforms." },
      { q: "Can you produce content for Ramadan and Eid campaigns?", a: "Yes. We plan and shoot seasonal campaign content for Ramadan, Eid Al Fitr, Eid Al Adha, National Day, Dubai Shopping Festival, and other key UAE retail moments — with advance planning sessions typically 8–12 weeks before each key date." },
    ],
    relatedLocations: [{ label: "Dubai E-Commerce Brands", href: "/locations/dubai" },{ label: "UAE Retail Content", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Product Photography Dubai 2026", href: "/blog/product-photography-dubai-2026" },{ title: "Social Media Content UAE 2026", href: "/blog/social-media-content-creation-dubai-2026" }],
  },

  /* ── EDUCATION ─────────────────────────────────────────────────────── */
  "education": {
    name: "Education",
    tagline: "Education Content That Attracts Students & Builds Authority",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
    metaTitle: "Education Photography & Video Production Dubai UAE | Backyard Studio Official",
    metaDescription: "UAE's leading education content studio. University and school photography, student testimonial videos, e-learning content production, graduation coverage, and institutional brand films for UAE's schools, universities, and EdTech companies.",
    keywords: ["education video production Dubai","university photography UAE","school photography Dubai","student testimonial video UAE","e-learning video production Dubai","graduation photography UAE","education brand film Dubai","EdTech content UAE","institution photography Dubai","online course video UAE"],
    intro: "UAE's education market is one of the most competitive in the world — with over 200 private schools in Dubai alone, 70+ higher education institutions, and a rapidly growing EdTech sector. In education, content is the primary driver of enrolment decisions. Parents choose schools and universities based largely on how they appear online — and Backyard Studio Official produces the content that wins those decisions.",
    challenge: "Most education content is forgettable — stiff classroom photography, generic prospectus shots, and video testimonials that lack authenticity. In a market where parents research schools and universities extensively online before making any contact, weak content is an invisible barrier to enrolment.",
    solution: "We approach education content with genuine storytelling — capturing the authentic energy of learning environments, the real personalities of faculty, and the compelling testimony of students. The result is content that builds confidence and drives enquiry.",
    services: [
      { label: "Campus & Facility Photography", href: "/services/photo-shoots", desc: "Full campus photography for schools and universities — classrooms, labs, sports, and life on campus." },
      { label: "Student Testimonial Videos", href: "/services/testimonial-videos", desc: "Authentic student journey and success story films for admissions campaigns and websites." },
      { label: "E-Learning Course Videos", href: "/services/youtube-content", desc: "Professional online course video production — recorded lectures, tutorials, and interactive content." },
      { label: "Graduation Coverage", href: "/services/event-videography", desc: "Multi-camera graduation ceremony coverage with same-day highlight films for social media." },
      { label: "Admissions Campaign Films", href: "/services/dvcs", desc: "Open day campaign videos, international student recruitment content, and brand films." },
      { label: "Faculty Profile Videos", href: "/services/corporate-videography", desc: "Department head and professor profile videos for websites, research profiles, and LinkedIn." },
    ],
    results: [
      { stat: "60+", label: "Schools and universities served in UAE" },
      { stat: "30%", label: "Average enquiry uplift after brand film launch" },
      { stat: "Multilingual", label: "Arabic, English, Hindi, Urdu content" },
      { stat: "Annual", label: "Long-term partnerships with UAE institutions" },
    ],
    caseStudy: { title: "Admissions Campaign — International Students", client: "Private University, Dubai", result: "International student applications increased 28% year-on-year", body: "A Dubai private university needed to increase international student applications from India, Pakistan, and the wider South Asian diaspora. We produced a 3-day campus shoot covering student life, faculty, labs, and accommodation, plus 8 student testimonial videos in English, Hindi, and Urdu, and a 4-minute admissions film. The campaign drove a 28% year-on-year increase in international applications in the following admissions cycle." },
    faqs: [
      { q: "How much does school photography cost in Dubai?", a: "School photography in Dubai starts from AED 4,000 for a half-day campus shoot (key facilities and one activity), AED 8,000–12,000 for a comprehensive full-day package covering all departments, student life, and sports, and AED 15,000+ for packages that include video content and student testimonials." },
      { q: "Can you produce e-learning and online course video content?", a: "Yes. We produce professional e-learning video content — including recorded lecture presentations, greenscreen studio production, animated slide integration, and multi-camera discussion formats. We work with universities and private course creators." },
      { q: "Can you film graduation ceremonies at UAE universities?", a: "Yes. We have filmed graduation ceremonies at UAE universities and understand the logistical complexity of large-venue graduation coverage — including multi-camera placement, official ceremony sequence coordination, and same-day social highlight production." },
    ],
    relatedLocations: [{ label: "Dubai Schools", href: "/locations/dubai" },{ label: "Abu Dhabi Universities", href: "/locations/abu-dhabi" },{ label: "Sharjah Education", href: "/locations/sharjah" }],
    relatedPosts: [{ title: "Corporate Photography Dubai 2026", href: "/blog/corporate-photography-dubai-2026" },{ title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
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
      images: [{ url: data.heroImage, width: 1920, height: 1080, alt: `${data.name} Production Services Dubai UAE — Backyard Studio Official` }],
      type: "website",
      url: `https://www.backyardstudioofficial.com/industries/${params.industry}`,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.heroImage],
    },
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = INDUSTRY_DATA[params.industry];
  if (!data) notFound();

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Industries", url: "https://www.backyardstudioofficial.com/industries" },
    { name: data.name, url: `https://www.backyardstudioofficial.com/industries/${params.industry}` },
  ]);
  const industryFaqJsonLd = data.faqs.length > 0
    ? faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.name} Production Services — Backyard Studio Official`,
    description: data.metaDescription,
    serviceType: `${data.name} Video & Photography Production`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.backyardstudioofficial.com/#localbusiness",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
      telephone: "+971-58-588-2685",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127", bestRating: "5" },
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: `https://www.backyardstudioofficial.com/industries/${params.industry}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.name} Production Services UAE`,
      itemListElement: data.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.label,
          description: s.desc,
          url: `https://www.backyardstudioofficial.com${s.href}`,
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {industryFaqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industryFaqJsonLd) }} />
      )}

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
              <Link key={s.label} href={s.href}
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
          <h2 className="font-display text-4xl text-center mb-12" style={{ color: "var(--cream)" }}>COMMON QUESTIONS</h2>
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

      {/* ── RELATED ── */}
      <section className="section-pad border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-6">We Cover</p>
            <div className="space-y-3">
              {data.relatedLocations.map((l) => (
                <Link key={l.href + l.label} href={l.href}
                  className="flex items-center gap-3 group transition-colors" style={{ color: "var(--muted)" }}>
                  <ArrowUpRight size={14} className="group-hover:text-[var(--gold)] transition-colors" />
                  <span className="group-hover:text-[var(--gold)] transition-colors text-sm">{l.label}</span>
                </Link>
              ))}
              <Link href="/locations" className="flex items-center gap-3 mt-4" style={{ color: "var(--gold)" }}>
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
                <ArrowUpRight size={14} />All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <p className="eyebrow mb-6">Ready to Start?</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-8" style={{ color: "var(--cream)" }}>LET'S CREATE SOMETHING</h2>
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
