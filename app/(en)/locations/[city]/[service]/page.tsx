import type { Metadata } from "next";
import EmirateContext from "@/components/shared/EmirateContext";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { stripBrandSuffix, withBrand } from "@/lib/seoTitle";

// ─── Data ────────────────────────────────────────────────────────────────────

interface ServicePage {
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string[];
  highlights: { heading: string; body: string }[];
  pricing: { pkg: string; detail: string; price: string }[];
  faqs: { q: string; a: string }[];
  sources?: { title: string; url: string; note: string }[];
  category: string;
}

const PAGES: Record<string, ServicePage> = {

  // ── DUBAI ─────────────────────────────────────────────────────────────────

  "dubai/wedding-photography": {
    title: "Wedding Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Dubai — Atlantis The Palm, Burj Al Arab, Armani Hotel, Palace Downtown, One&Only. Arabic, Indian & destination weddings. From AED 5,000.",
    h1: "Wedding Photography in Dubai",
    subtitle: "Atlantis. Burj Al Arab. Palace Downtown. Dubai's most cinematic weddings, documented.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Dubai is the UAE's wedding capital — and Backyard Studio Official has been one of its leading wedding photography teams since 2019. Atlantis The Palm, Burj Al Arab, Armani Hotel Downtown, Palace Downtown, One&Only The Palm, W Dubai, Address Sky View, The Ritz-Carlton DIFC — we have produced weddings at every major venue in the city, and we know each one's permit requirements, best camera positions, and lighting conditions at every time of day.",
      "We cover every wedding format in Dubai: Arabic weddings with gender-separated coverage and all-female crews for ladies-only ceremonies, Indian multi-day events spanning Mehendi through Reception, Western destination weddings with international guest lists, and intimate nikah ceremonies at mosques or private residences. Our Dubai wedding teams shoot on cinema-grade camera systems and deliver same-day Teaser reels that guests expect before the event ends.",
    ],
    highlights: [
      { heading: "Atlantis & Palm Jumeirah Venues", body: "Atlantis The Palm, Waldorf Astoria Palm, One&Only The Palm — the gold standard of Dubai's luxury wedding portfolio. We have produced hundreds of weddings across these properties and know every corridor, ballroom, and beach setup." },
      { heading: "Downtown & DIFC", body: "Armani Hotel, Address Downtown, The Ritz-Carlton DIFC, Four Seasons DIFC — Dubai's most cinematic urban skyline as your wedding backdrop. Our teams know exactly where to position for the Burj Khalifa at golden hour." },
      { heading: "Indian Multi-Day Weddings", body: "300+ Indian weddings delivered in Dubai. We understand Mehendi energy, Sangeet stage choreography, Barat positioning, and Reception first-dance moments. Two photographers, same-day Teaser, 48-hour full delivery." },
      { heading: "Same-Day Teaser Delivery", body: "Our editing team starts cutting the Teaser reel during the reception itself. Most Dubai weddings receive a 90-second highlight clip before midnight. It's what the market expects and what we deliver." },
    ],
    pricing: [
      { pkg: "Essential", detail: "Photo + video for intimate ceremonies & court weddings", price: "From AED 7,500" },
      { pkg: "Silver", detail: "2 photographers + 2 videographers / half-day coverage", price: "From AED 15,500" },
      { pkg: "Gold", detail: "Full-day wedding — album, highlights, 3 reels, couple shoot", price: "From AED 22,500" },
      { pkg: "Platinum", detail: "Premium multi-day — 3 photographers + 3 videographers, documentary", price: "From AED 65,000" },
    ],
    faqs: [
      { q: "Which wedding venues in Dubai does Backyard Studio Official cover?", a: "We cover every major Dubai wedding venue including Atlantis The Palm, Burj Al Arab, Armani Hotel, Palace Downtown, Address Downtown, One&Only The Palm, W Dubai, The Ritz-Carlton DIFC, Waldorf Astoria Palm, Jumeirah Al Qasr, Bulgari Resort Dubai, and private villas across the emirate." },
      { q: "Do you provide same-day Teaser reels for Dubai weddings?", a: "Yes. Same-day Teaser delivery is standard for Dubai weddings. Our editing team starts cutting during the event using wireless transfer from cameras to editor. Most clients receive a 60–90 second highlight reel before midnight on the wedding day. Full film delivery is within 48 hours." },
      { q: "How much does wedding photography in Dubai cost?", a: "Wedding photography in Dubai starts from AED 7,500 for our Essential photo + video package and AED 22,500 for the most popular Gold full-day package with two photographers, two videographers, album, highlights, and reels. Premium multi-day Platinum productions are AED 65,000. We provide exact quotes within 2 hours." },
      { q: "Can you provide all-female photography crews for Arabic weddings in Dubai?", a: "Yes. For ladies-only ceremonies and gender-separated Arabic wedding formats, Backyard Studio Official provides fully all-female photography and videography crews in Dubai. We are one of the few production companies in Dubai able to assemble experienced all-female crews at the same professional level as our main teams." },
    ],
  },

  "dubai/corporate-video": {
    title: "Corporate Video Production in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Dubai — brand films, company profiles, DVCs, DIFC, Business Bay, D3. Government & enterprise grade. Same-day social cuts available. From AED 7,000.",
    h1: "Corporate Video Production in Dubai",
    subtitle: "DIFC. Business Bay. D3. Dubai's leading brands trust us with their story.",
    category: "CORPORATE VIDEO",
    intro: [
      "Dubai's corporate video market is among the most competitive in the world. Every major multinational, regional champion, and fast-growing SME in DIFC, Business Bay, Dubai Internet City, and Dubai Media City produces corporate content — and the bar is set by the best production companies in London, New York, and Singapore. Backyard Studio Official produces Dubai corporate video that competes at that level.",
      "We produce company profile films, DVC brand films, investor relations videos, product launch campaigns, testimonial series, executive interview content, and social media brand videos for Dubai's private and public sector. Our clients include Fortune 500 regional offices, UAE government-adjacent entities, and high-growth startups using video to establish credibility in international markets.",
    ],
    highlights: [
      { heading: "DIFC & Business Bay", body: "Dubai's two primary corporate districts, each with its own visual character. Glass towers and financial-district energy for DIFC. Modern mixed-use density for Business Bay. We know both environments and how to make your brand look at home in either." },
      { heading: "Dubai Media City & D3", body: "Creative industry content for agencies, tech companies, and design brands in DMC and Dubai Design District. Brand films that feel editorial rather than corporate." },
      { heading: "Government & Semi-Government", body: "Content for Dubai government entities, free zone authorities, and semi-government bodies — meeting the specific communication standards, approval processes, and visual conventions of the UAE public sector." },
      { heading: "Same-Day Social Cuts", body: "For product launches and press events where social momentum matters, our editing team delivers a 60-second social cut within 3 hours of filming ending. Full film follows within 48 hours." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 7,000" },
      { pkg: "DVC / Brand Film", detail: "Multi-day production / script to delivery", price: "From AED 15,000" },
      { pkg: "Social Media Sprint", detail: "1 day / 5–8 short-form clips / branded edit", price: "From AED 6,000" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / social + long-form", price: "From AED 8,000 / mo" },
    ],
    faqs: [
      { q: "What types of corporate video does Backyard Studio Official produce in Dubai?", a: "We produce company profile films, DVC brand films, product launch videos, testimonial series, executive interviews, event highlight reels, social media content sprints, investor relations video, government communications content, and training or internal communications films across Dubai." },
      { q: "Can you produce corporate video for DIFC-registered financial services companies in Dubai?", a: "Yes. Backyard Studio Official produces corporate video for financial services companies registered in DIFC, including fund launch films, executive profile content, investor briefings, and company profile productions that meet international financial services communication standards." },
      { q: "How much does corporate video production cost in Dubai?", a: "A standard single-day corporate profile film in Dubai ranges from AED 7,000 to AED 18,000 depending on crew size, duration, and post-production. DVC and brand film productions start from AED 15,000. Monthly content retainer packages from AED 8,000 per month. Exact quotes within 2 hours of brief receipt." },
      { q: "Do you handle Dubai filming permits for corporate video productions?", a: "Yes. Backyard Studio Official manages all Dubai filming permits as part of our production service, including Dubai Film and TV Commission permits, DIFC media coordinator approvals, Emaar and Nakheel property permissions, and DWTC facility access. Most Dubai commercial locations can be permitted in 24–72 hours through our established relationships." },
    ],
  },

  "dubai/event-photography": {
    title: "Event Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Dubai — DWTC, Madinat Jumeirah, Coca-Cola Arena, DIFC, hotel galas. Same-day social delivery. Corporate, brand & gala events. From AED 3,000.",
    h1: "Event Photography in Dubai",
    subtitle: "DWTC. Madinat Jumeirah. Atlantis. Every Dubai event, documented at the highest level.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Dubai hosts more major events per square kilometre than almost any other city in the world. GITEX, Cityscape, Arabian Travel Market, Dubai Airshow, Art Dubai, Fashion Forward — the trade show and conference calendar alone generates thousands of photography requirements every year. Add corporate galas at Madinat Jumeirah, product launches at Coca-Cola Arena, brand activations at City Walk, and government ceremonies at Dubai World Trade Centre, and you have one of the world's most demanding event photography markets.",
      "Backyard Studio Official has been covering Dubai events since 2019, with teams that scale from a single photographer at an intimate DIFC networking evening to a 6-person crew at a multi-day conference. We deliver same-day social media content for time-sensitive events and full image galleries within 24–48 hours.",
    ],
    highlights: [
      { heading: "DWTC & Trade Shows", body: "Dubai World Trade Centre events require teams experienced in multi-hall navigation, VIP arrival protocol, and the specific logistics of covering conferences with hundreds of simultaneous sessions. We've covered GITEX, Arabian Travel Market, and dozens of DWTC events." },
      { heading: "Madinat Jumeirah & Hotel Galas", body: "The most photographed gala venue in Dubai. We know every corner of Madinat Jumeirah's souk, theatre, and arena spaces — where to position for the arrival shot, the stage moment, and the dinner atmosphere." },
      { heading: "Brand Activations & Product Launches", body: "City Walk, Box Park, JBR The Walk, La Mer — Dubai's lifestyle event spaces. Our teams work fast in crowded environments and capture the energy that makes activations feel alive on social media." },
      { heading: "Same-Day Social Content", body: "30 polished images delivered within 2 hours of your Dubai event ending. For launches, activations, and awards nights where social momentum matters most." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 3,000" },
      { pkg: "Full Day (8–10 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 5,000" },
      { pkg: "Conference Package", detail: "2 photographers / multi-day / same-day delivery", price: "From AED 8,000 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 7,500" },
    ],
    faqs: [
      { q: "Do you cover events at Dubai World Trade Centre and GITEX?", a: "Yes. Backyard Studio Official is an experienced DWTC event photographer, covering trade shows including GITEX, Arabian Travel Market, Cityscape Dubai, and ADIPEC when held in Dubai. We manage multi-hall coverage, accreditation logistics, and same-day social media delivery for large-scale DWTC events." },
      { q: "Can you deliver event photos on the same day in Dubai?", a: "Yes. For Dubai events requiring same-day social media content, we operate a real-time editing workflow. A selection of 20–30 polished images is delivered within 2 hours of the event ending. The full gallery follows within 24–48 hours." },
      { q: "How many photographers do you provide for large Dubai events?", a: "We scale from 1 photographer for intimate evening events to 6-person crews for multi-hall conferences and large-scale galas. Every event brief is assessed individually and we recommend the right team size based on venue layout, run-of-show, and simultaneous sessions." },
      { q: "Do you cover government and official events in Dubai?", a: "Yes. Backyard Studio Official covers official events in Dubai including government ceremony photography, ministerial press events, and UAE national day coverage. We have experience with media accreditation requirements and the protocol awareness that official events demand." },
    ],
  },

  "dubai/real-estate-photography": {
    title: "Real Estate Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Dubai — Emaar, Nakheel, Meraas, DAMAC, show apartments, drone aerial, Palm Jumeirah, Downtown, JBR. From AED 1,000.",
    h1: "Real Estate Photography in Dubai",
    subtitle: "Emaar. DAMAC. Nakheel. Palm Jumeirah. Dubai real estate demands exceptional photography.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Dubai's real estate market is one of the most competitive content environments in the world. Emaar, Nakheel, Meraas, DAMAC, Sobha, Ellington, Select Group — the developer roster generates extraordinary volumes of photography requirements across unit shoots, show apartment campaigns, project launches, and lifestyle imagery for international buyer audiences from Europe, South Asia, Russia, and China.",
      "Backyard Studio Official produces real estate photography for Dubai's developer and agency market across the full spectrum — from individual unit shoots for real estate agencies listing on Property Finder and Bayut, to full-scale developer launch campaigns covering show apartment hero photography, drone aerial documentation of masterplan sites, and lifestyle imagery placing Dubai properties in their broader community context.",
    ],
    highlights: [
      { heading: "Show Apartment Photography", body: "Hero shots for Emaar, DAMAC, Nakheel, and boutique developer show apartments — styled, precision-lit, and delivered for both print brochures and international digital marketing campaigns." },
      { heading: "Aerial Drone Documentation", body: "Aerial coverage of Dubai development sites and completed communities. Palm Jumeirah drone permits, Downtown Dubai airspace, and JBR coastal aerial — managed by our team." },
      { heading: "Agency & Listing Photography", body: "Fast-turnaround unit photography for Dubai real estate agencies listing on Property Finder, Bayut, and international portals — delivered within 24 hours of the shoot." },
      { heading: "International Investor Content", body: "Photography formatted for international investor audiences: high-dynamic-range interiors, twilight exteriors, community lifestyle imagery, and aerial context shots that sell Dubai remotely." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,000" },
      { pkg: "Show Apartment", detail: "Full-day shoot / hero shots + detail images", price: "From AED 3,000" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior", price: "From AED 4,000" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 12,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Dubai developers like Emaar and DAMAC?", a: "Yes. Backyard Studio Official produces real estate photography for Dubai developers across project launch campaigns, show apartment shoots, unit photography for marketing materials, and aerial drone documentation. We work within developer briefing and approval processes." },
      { q: "How quickly do you deliver real estate photography in Dubai?", a: "Standard delivery for Dubai real estate photography is 24–48 hours. For agency listings requiring same-day turnaround, we offer rush delivery within 6–8 hours of the shoot for an additional fee. Drone footage delivery is within 24 hours of the aerial session." },
      { q: "Do you provide drone photography over Dubai real estate sites?", a: "Yes. Aerial work is fully permitted, with permits coordinated with Dubai Film and TV Commission, Emaar, Nakheel, and relevant property authorities for aerial photography over Dubai development sites, the Palm Jumeirah, Downtown Dubai, and JBR." },
      { q: "How much does real estate photography cost in Dubai?", a: "Unit photography starts from AED 1,000 for 3 units with 30 images. Show apartment shoots start from AED 3,000. Aerial drone packages from AED 2,000 for a 2-hour session. Full developer launch packages from AED 12,000. Exact quotes within 2 hours." },
    ],
  },

  "dubai/drone-videography": {
    title: "Drone Videography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Drone videography in Dubai — Burj Khalifa, Palm Jumeirah, Marina, JBR, Downtown. 4K aerial photography & cinematic video. Legal, permitted, fast. From AED 2,000.",
    h1: "Drone Videography in Dubai",
    subtitle: "Burj Khalifa district. Palm Jumeirah. Marina. Every zone covered legally.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Dubai produces more aerial video content than almost any other city in the world — and for good reason. The Burj Khalifa at golden hour, the Palm Jumeirah from altitude, the Dubai Marina skyline reflected in the Gulf at dusk — these are images that no ground-level camera can replicate. Backyard Studio Official produces fully permitted aerial video in Dubai's most photographed zones legally, with all permits coordinated before any camera leaves the ground.",
      "We produce drone videography for Dubai's real estate, tourism, events, construction documentation, wedding, and commercial advertising sectors. Our aerial team operates cinema-grade drone systems in 4K and 6K with cinema colour profiles, delivering footage that integrates seamlessly into broadcast, online, and social media productions.",
    ],
    highlights: [
      { heading: "Burj Khalifa District", body: "One of the world's most filmed aerial environments. Drone operations in the Downtown Dubai zone require DTCM and Dubai Film Commission coordination. Our team has the permits and the experience to deliver exceptional footage from this airspace." },
      { heading: "Palm Jumeirah & JBR", body: "Coastal aerial footage of the Palm, Jumeirah Beach, and the JBR waterfront — the images that define Dubai's luxury lifestyle brand globally. We coordinate Nakheel and DTCM permits for Palm Jumeirah aerial sessions." },
      { heading: "Dubai Marina & City Skyline", body: "The Marina at dawn from altitude, the skyline at golden hour, the Creek Harbour towers reflected in the water — our aerial team knows the exact times and positions for each iconic Dubai aerial shot." },
      { heading: "Real Estate & Construction", body: "Development site documentation, masterplan aerials, community overview footage — coordinated with Dubai Land Department and individual developer site teams." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "Licensed pilot / 4K footage / colour-graded edit", price: "From AED 2,000" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / full edit", price: "From AED 3,500" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground team / integrated edit", price: "From AED 5,500" },
      { pkg: "Real Estate Aerial", detail: "Development documentation / same-day delivery", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Is drone flying legal in Dubai and do you have the required licences?", a: "Drone operations in Dubai require a commercial operator certificate and location-specific permits from the Dubai Film and TV Commission, relevant property authorities, and in some zones, Dubai Civil Aviation Authority. Backyard Studio Official holds all required licences and manages every permit before any flight. We do not operate without complete legal clearance." },
      { q: "Can you fly a drone near the Burj Khalifa in Dubai?", a: "Aerial filming in the Burj Khalifa district requires specific DTCM, Emaar, and Dubai Film Commission coordination. Backyard Studio Official has produced aerial content in the Downtown Dubai zone and manages the full permit process for Burj Khalifa-area shoots. Lead time is typically 3–5 business days for Downtown Dubai aerial permits." },
      { q: "How much does drone videography cost in Dubai?", a: "Drone sessions in Dubai start from AED 2,000 for a 2-hour session with a licensed pilot, 4K footage, and colour-graded edit. Half-day aerial packages with multiple locations start from AED 3,500. Combined drone and ground camera packages from AED 5,500." },
      { q: "Can you produce drone content for Dubai social media and advertising campaigns?", a: "Yes. Our Dubai drone team produces aerial content specifically formatted for social media: vertical Reels, square cuts, and horizontal widescreen — all from a single flight session. We can deliver same-day rough cuts for time-sensitive social media campaigns." },
    ],
  },

  "dubai/food-photography": {
    title: "Food Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Dubai — restaurant menus, hotel F&B, JBR, DIFC, Downtown, Jumeirah. Instagram Reels, menu shoots, brand campaigns. From AED 1,500.",
    h1: "Food Photography in Dubai",
    subtitle: "From JBR restaurants to DIFC fine dining — content that fills reservation books.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Dubai has one of the world's most competitive restaurant markets, with thousands of new openings each year across Downtown, JBR, DIFC, Business Bay, La Mer, City Walk, and the Palm. In this environment, professional food photography isn't a marketing luxury — it's the primary tool that separates a fully-booked restaurant from an empty one. Every dish that looks extraordinary on Instagram is a reservation waiting to happen.",
      "Backyard Studio Official is one of Dubai's leading food photography studios, producing content for restaurant menus, hotel F&B outlets, cloud kitchens, delivery platforms, social media campaigns, and franchise launch materials. We shoot with natural and controlled light, styled for the specific visual aesthetic each restaurant brand requires — from casual street food to Michelin-calibre fine dining.",
    ],
    highlights: [
      { heading: "Dubai Restaurant Menu Shoots", body: "Every dish shot at its absolute best for printed menus, QR codes, Talabat and Deliveroo thumbnails, and the restaurant website. We work before opening or between service sessions to minimise disruption." },
      { heading: "Hotel F&B Content", body: "Full-service food and beverage photography for Dubai's hotel restaurants, rooftop venues, and beach clubs — ambient atmosphere, hero dishes, cocktail campaigns, and seasonal menu updates." },
      { heading: "Instagram Reels & TikTok", body: "Short-form video of plating moments, chef action, and service theatrics — the format that drives the most new customer traffic for Dubai restaurants right now." },
      { heading: "Delivery Platform Optimisation", body: "Thumbnail-optimised photography for Talabat, Deliveroo, and Noon Food listings — sized and styled to maximise click-through rate in Dubai's ultra-competitive food delivery market." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats included", price: "From AED 1,500" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / food + interior / digital delivery", price: "From AED 3,000" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,500 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + brand film", price: "From AED 5,500" },
    ],
    faqs: [
      { q: "Do you produce food photography for Dubai hotel restaurants and beach clubs?", a: "Yes. We produce food and beverage photography for hotel F&B outlets, rooftop restaurants, and beach clubs across Dubai, including properties in JBR, Palm Jumeirah, Downtown, and DIFC. We work within venue operational schedules and coordinate with F&B managers to shoot efficiently without disrupting service." },
      { q: "Can you create Instagram Reels content for my Dubai restaurant?", a: "Yes. In addition to still photography, we produce short-form video content — plating moments, chef action, table service theatrics — in vertical Reel format for Instagram and TikTok. Most Dubai restaurant packages include both photography and video content from a single shoot session." },
      { q: "How much does food photography cost in Dubai?", a: "Food photography in Dubai starts from AED 1,500 for a 3-hour session covering 20 dishes. A full menu shoot covering 50 dishes starts from AED 3,000. Monthly social media content packages from AED 2,500 per month. Restaurant launch packages from AED 5,500." },
      { q: "How quickly do you deliver food photography content in Dubai?", a: "Standard delivery is 2–4 business days. Rush delivery within 24 hours is available for menu launches or time-sensitive seasonal campaigns. Social media Reels are typically delivered within 48 hours of the shoot." },
    ],
  },

  "dubai/product-photography": {
    title: "Product Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Dubai — Amazon UAE, Noon, e-commerce, brand campaigns, studio & lifestyle shoots. Same-day rush available. From AED 800.",
    h1: "Product Photography in Dubai",
    subtitle: "Amazon UAE. Noon. Brand campaigns. Your product, converted into sales.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Dubai is the UAE's e-commerce and retail hub, and the quality of product photography directly determines conversion rates on Amazon UAE, Noon, Namshi, Ounass, and direct-to-consumer Shopify stores. Poor product images cost sales. Our studio in Dubai produces photography that meets marketplace technical requirements while delivering the brand-quality lifestyle imagery that differentiates products from commodity competitors.",
      "We work with Dubai-based brands across every category — from luxury fashion accessories and premium beauty products to consumer electronics, specialty food, and industrial equipment. Whether you need clean white-background shots for Amazon compliance or editorial-quality lifestyle imagery for a brand campaign, Backyard Studio Official delivers both from the same production relationship.",
    ],
    highlights: [
      { heading: "Amazon UAE & Marketplace Compliance", body: "Pure white background, minimum 1000px, no prohibited overlays — delivered in Amazon-ready formats the first time. No back-and-forth with marketplace compliance teams." },
      { heading: "Lifestyle & Context Photography", body: "Products in use, on models, in environments — the content that builds brand desire on Instagram and drives purchase intent beyond the marketplace listing." },
      { heading: "Luxury & Fashion Products", body: "For Dubai's luxury retail brands, high-end fashion accessories, watches, and jewellery — editorial-quality imagery that meets the standards of international luxury advertising." },
      { heading: "Same-Day Rush Delivery", body: "Product photography in Dubai with same-day or next-morning delivery for time-sensitive launches. Rush rate applies; standard delivery is 2–3 business days." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles per product / 2–3 days", price: "From AED 800" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / styled / 3 days", price: "From AED 2,200" },
      { pkg: "Premium Campaign", detail: "20 products + model + lifestyle context", price: "From AED 4,500" },
      { pkg: "Catalogue (100+ SKUs)", detail: "Custom quote / volume pricing", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce Amazon UAE and Noon compliant product photography in Dubai?", a: "Yes. We produce product photography meeting Amazon UAE and Noon technical requirements: pure white background, minimum image dimensions, correct angle coverage, no prohibited overlays. Files delivered ready for direct upload to each marketplace without further editing required." },
      { q: "How quickly can you deliver product photography in Dubai?", a: "Standard delivery is 2–3 business days. Rush delivery within 24 hours is available for urgent product launches. Same-day hero shot delivery for individual key products is available on request. We will confirm exact timeline at time of booking." },
      { q: "Can you shoot luxury products and fashion accessories in Dubai?", a: "Yes. Our Dubai studio produces editorial-quality photography for luxury goods, fashion accessories, jewellery, watches, and premium beauty products. We use specialist lighting setups for reflective, transparent, and fabric materials that maintain quality across all product categories." },
      { q: "How much does product photography cost in Dubai?", a: "Product photography in Dubai starts from AED 800 for 10 SKUs on white background. Standard 30-SKU packages from AED 2,200. Lifestyle and campaign packages from AED 4,500. Large catalogues of 100+ products are quoted individually with volume discounts. Exact quotes within 2 hours." },
    ],
  },

  "dubai/personal-branding-photography": {
    title: "Personal Branding Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Dubai — entrepreneurs, executives, coaches, influencers. LinkedIn portraits, brand sessions, DIFC & Marina locations. From AED 1,200.",
    h1: "Personal Branding Photography in Dubai",
    subtitle: "DIFC executives. Marina entrepreneurs. Dubai influencers. Your image is your brand.",
    category: "PERSONAL BRANDING",
    intro: [
      "Dubai is one of the world's most ambitious cities — and its professionals know that how they look online determines how they're perceived before anyone reads a word they've written. A blurry LinkedIn photo, an inconsistent brand aesthetic, or an image that doesn't match the calibre of work you deliver costs you credibility in a market where first impressions travel at the speed of a Google search.",
      "Backyard Studio Official has produced personal branding photography for hundreds of Dubai professionals: DIFC fund managers, Business Bay consultants, Marina entrepreneurs, JBR influencers, healthcare professionals, lawyers, coaches, and keynote speakers preparing for international stages. Our pre-session brief process ensures every shoot is strategically aligned with where you want to be positioned — not just what you look like.",
    ],
    highlights: [
      { heading: "DIFC & Downtown Shoots", body: "The visual shorthand for Dubai professional credibility. Glass towers, polished lobbies, and the financial district's architectural character — the context that tells your audience what level you operate at." },
      { heading: "Marina & JBR Lifestyle Sessions", body: "For entrepreneurs and personal brands that want the Dubai lifestyle aesthetic — Marina waterfront, JBR beach, rooftop venues, and the city's most Instagram-recognisable backdrops." },
      { heading: "LinkedIn & Speaker Profile", body: "Professional headshots for LinkedIn, speaking bureau profiles, board biographies, and press kits. Images that create instant credibility and get used consistently across every platform." },
      { heading: "Full Brand Day", body: "Multiple looks, multiple locations, 100+ final images — a complete content bank that fuels a full quarter of LinkedIn posting, website updates, and media kit refreshes without another shoot." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,200" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / 2 locations / 50 images", price: "From AED 2,500" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 locations / 100 images", price: "From AED 4,500" },
      { pkg: "Brand Day + Social Video", detail: "Photos + 3 x LinkedIn video clips", price: "From AED 6,000" },
    ],
    faqs: [
      { q: "Where do you shoot personal branding photography in Dubai?", a: "Popular Dubai personal branding locations include DIFC and Downtown Dubai for corporate professionals, Dubai Marina and JBR for lifestyle-oriented brands, Al Fahidi and the Creek area for heritage context, and modern café and co-working environments across Business Bay and D3. We help you choose locations during the pre-session brief based on your audience and positioning." },
      { q: "What does a personal branding photography session in Dubai include?", a: "Every session includes a pre-session brief call, guidance on outfits and preparation, the agreed number of looks and locations, full professional editing of selected images, and delivery in both web-optimised and high-resolution formats for LinkedIn, website, and print use." },
      { q: "How much does personal branding photography cost in Dubai?", a: "Personal branding photography in Dubai starts from AED 1,200 for executive headshots covering 1.5 hours and 20 final images. Personal brand sessions covering multiple looks and locations from AED 2,500. Full brand day packages from AED 4,500." },
      { q: "Do you produce LinkedIn profile videos in addition to photography in Dubai?", a: "Yes. Our Dubai brand day packages can include short LinkedIn video clips — a 60-second introduction video, a behind-the-scenes work clip, or a talking-head expert content piece. These are produced in the same session as the photography and delivered in formats ready for direct LinkedIn upload." },
    ],
  },

  // ── ABU DHABI ──────────────────────────────────────────────────────────────

  "abu-dhabi/wedding-photography": {
    title: "Wedding Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Abu Dhabi — Emirates Palace, Yas Hotel, St. Regis Saadiyat, W Abu Dhabi. Arabic, Indian & destination weddings. From AED 7,500. Free quote in 2 hrs.",
    h1: "Wedding Photography in Abu Dhabi",
    subtitle: "Emirates Palace. Yas Hotel. St. Regis Saadiyat. We cover every venue in the capital.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Abu Dhabi's wedding venue portfolio is among the most prestigious in the world. Emirates Palace Mandarin Oriental, St. Regis Saadiyat Island, Rosewood Abu Dhabi, Grand Hyatt Abu Dhabi, and the W Abu Dhabi on Yas Island set a standard that only a handful of production companies in the UAE can match with their camera work. Backyard Studio Official is one of them.",
      "We have documented weddings in Abu Dhabi across every format — Arabic multi-day events with gender-separated celebration coverage, Indian ceremonies spanning Mehendi through Reception at Yas Island venues, Western destination weddings at Saadiyat Beach Club, and intimate nikah ceremonies near the Sheikh Zayed Grand Mosque. Our Abu Dhabi wedding teams include both male and female photographers, which allows us to cover all-ladies gatherings without compromise.",
    ],
    highlights: [
      { heading: "Emirates Palace & Mandarin Oriental", body: "Shooting at Abu Dhabi's most iconic hotel requires a team that knows the permit process, the preferred camera positions for the grand ballroom, and how to navigate the property's formal photography coordination. We have it covered." },
      { heading: "Saadiyat Island Resorts", body: "St. Regis, Park Hyatt Saadiyat, and Saadiyat Beach Club offer some of the most photogenic outdoor ceremony settings in the UAE — beach ceremonies with the Louvre Abu Dhabi's dome visible across the water." },
      { heading: "Yas Island Venues", body: "W Abu Dhabi Yas Island, Yas Hotel, and Yas Marina are high-energy settings ideal for multi-day Indian weddings and contemporary Arabic receptions. We know the venue layout and light conditions at every time of day." },
      { heading: "All-Female Photography Teams", body: "For ladies-only ceremonies and gender-separated Arabic or South Asian wedding formats, we provide an all-female photography and videography crew — the same production quality, fully culturally appropriate." },
    ],
    pricing: [
      { pkg: "Essential", detail: "Photo + video for intimate ceremonies & nikah", price: "From AED 7,500" },
      { pkg: "Silver", detail: "2 photographers + 2 videographers / half-day coverage", price: "From AED 15,500" },
      { pkg: "Gold", detail: "Full-day wedding — album, highlights, 3 reels, couple shoot", price: "From AED 22,500" },
      { pkg: "Platinum", detail: "Premium multi-day — 3 photographers + 3 videographers, documentary", price: "From AED 65,000" },
    ],
    faqs: [
      { q: "Which Abu Dhabi wedding venues does Backyard Studio Official cover?", a: "We cover all major Abu Dhabi wedding venues including Emirates Palace Mandarin Oriental, St. Regis Saadiyat Island, Rosewood Abu Dhabi, Grand Hyatt Abu Dhabi, W Abu Dhabi Yas Island, Park Hyatt Saadiyat, Yas Hotel, and private estates across the capital." },
      { q: "Do you provide all-female wedding photography crews in Abu Dhabi?", a: "Yes. For Arabic weddings and events requiring gender-separated coverage, Backyard Studio Official provides fully all-female photography and videography crews in Abu Dhabi. Our female photographers cover ladies-only ceremony halls at the same professional standard as our main teams." },
      { q: "How much does wedding photography in Abu Dhabi cost?", a: "Abu Dhabi wedding photography starts from AED 7,500 for our Essential photo + video package and AED 22,500 for the most popular Gold full-day package with two photographers and two videographers. Premium multi-day Platinum productions are AED 65,000. We provide exact quotes within 2 hours of receiving your brief." },
      { q: "How far in advance should I book a wedding photographer in Abu Dhabi?", a: "We recommend booking 6 to 12 months in advance, especially for the October to March peak season. Abu Dhabi's premium venues are heavily booked during this period and the best photography teams fill up quickly. Contact us as soon as your venue and date are confirmed." },
    ],
  },

  "abu-dhabi/corporate-video": {
    title: "Corporate Video Production in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Abu Dhabi — government entities, ADGM, Mubadala, Aldar, Yas Island brands. Company profiles, brand films, institutional content. From AED 8,000.",
    h1: "Corporate Video Production in Abu Dhabi",
    subtitle: "Government entities. ADGM. Sovereign wealth. We produce to the capital's highest standards.",
    category: "CORPORATE VIDEO",
    intro: [
      "Corporate video production in Abu Dhabi operates at a different level of expectation to most markets. Government entities, semi-government organisations, sovereign wealth funds, and the institutional brands connected to ADGM, Mubadala, ADQ, and Aldar Properties expect content that meets international broadcast standards — not typical agency work dressed up as professional production.",
      "Backyard Studio Official has produced corporate video content for Abu Dhabi's public and private sector across company profile films, investor relations video, national day communications content, product launch campaigns, and institutional brand films. We understand Abu Dhabi's specific communication protocols, including the tone requirements and visual conventions for government-adjacent content that distinguishes it from Dubai's more commercially-driven production market.",
    ],
    highlights: [
      { heading: "Government & Institutional Films", body: "Annual reports, ministerial communications, national day content, and strategy launch films for Abu Dhabi's government sector require a team that understands protocol, Arabic language production, and the specific visual standards of UAE institutional communications." },
      { heading: "ADGM Financial Services Content", body: "Fund launches, executive profiles, investor briefings, and fintech product demonstrations for ADGM-registered firms — produced to the quality benchmarks of London, Singapore, or New York financial services content." },
      { heading: "Aldar & Developer Brand Films", body: "Project launch videos, community lifestyle content, and investor-facing films for Abu Dhabi's real estate sector. Our drone team captures Yas Island, Al Reem Island, and Saadiyat Island developments from permitted altitude." },
      { heading: "Yas Island & Miral Content", body: "Theme park attraction launches, hotel opening campaigns, F1 Abu Dhabi Grand Prix coverage, and Yas Bay Waterfront activations — we know Yas Island's production environment and accreditation processes." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revision rounds", price: "From AED 8,000" },
      { pkg: "Government / Institutional", detail: "Multi-day production / Arabic + English delivery", price: "From AED 18,000" },
      { pkg: "Event + Brand Film", detail: "Event coverage + brand story edit", price: "From AED 12,000" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / social + long-form", price: "From AED 9,000 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate video for Abu Dhabi government entities?", a: "Yes. Backyard Studio Official produces corporate and institutional content for Abu Dhabi's government and semi-government sector, including entity brand films, event coverage, Arabic-language communications content, and investor-facing productions that meet the UAE government's communication standards and protocol requirements." },
      { q: "Can you produce content at ADGM or Al Maryah Island?", a: "Yes. We regularly produce corporate film and photography content for companies based in Abu Dhabi Global Market and across Al Maryah Island. Our ADGM content meets international financial services production standards with fast turnaround for time-sensitive investor communications and event coverage." },
      { q: "What is the cost of corporate video production in Abu Dhabi?", a: "A standard single-day corporate profile film in Abu Dhabi ranges from AED 8,000 to AED 20,000 depending on crew size, duration, and post-production complexity. Government and institutional productions with multi-day filming and bilingual delivery are quoted individually. We provide exact proposals within 2 hours of receiving a brief." },
      { q: "How do you handle Abu Dhabi production permits for corporate shoots?", a: "Backyard Studio Official manages all Abu Dhabi production permits as part of our standard service. Most commercial locations require coordination through the relevant property or authority. Government facilities and certain public spaces require prior approval. We build permit timelines into our pre-production schedule — typically 72 to 96 hours for most Abu Dhabi commercial locations." },
    ],
  },

  "abu-dhabi/event-photography": {
    title: "Event Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Abu Dhabi — ADNEC, Yas Bay, ADGM, luxury hotel events, government galas, corporate conferences. Same-day delivery available. From AED 3,500.",
    h1: "Event Photography in Abu Dhabi",
    subtitle: "ADNEC. Yas Bay Arena. ADGM. We cover every venue in the UAE capital.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Abu Dhabi hosts some of the region's most significant events — from ministerial summits at Abu Dhabi National Exhibition Centre to Formula 1 Abu Dhabi Grand Prix activations on Yas Island, from gala dinners at Emirates Palace to investment conferences at ADGM. Event photography in this context demands a team with the access, protocol awareness, and technical capability to deliver images that match the calibre of the events themselves.",
      "Backyard Studio Official covers Abu Dhabi events across the full spectrum: corporate conferences and product launches, government ceremony and press events, brand activations, gala dinners, and the steady rhythm of hospitality and cultural events across Saadiyat Island, Yas Bay Waterfront, and the Corniche. We deliver same-day social media content when required and full event galleries within 48 hours of the event closing.",
    ],
    highlights: [
      { heading: "ADNEC & Conference Events", body: "Abu Dhabi National Exhibition Centre hosts some of the Middle East's largest trade shows and government conferences. We cover multi-day events with teams scaled to the event size, from single photographers to 6-person crews." },
      { heading: "Government Ceremony & Press", body: "Ministerial announcements, signing ceremonies, national day events, and official inaugurations require photographers with media accreditation experience, protocol awareness, and the discretion that government contexts demand." },
      { heading: "Yas Island & Entertainment Events", body: "F1 Abu Dhabi activations, Yas Bay Waterfront events, theme park launches — high-energy environments where speed and positioning make the difference between ordinary and outstanding event images." },
      { heading: "Same-Day Social Delivery", body: "For launches, activations, and events where social momentum matters, we deliver 20–30 edited images within 2–3 hours of the event ending. Full gallery follows within 48 hours." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 3,500" },
      { pkg: "Full Day (8–10 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 5,500" },
      { pkg: "Conference Package", detail: "2 photographers / multi-day / same-day delivery", price: "From AED 9,000 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 8,000" },
    ],
    faqs: [
      { q: "Do you cover events at Abu Dhabi National Exhibition Centre (ADNEC)?", a: "Yes. Backyard Studio Official is an experienced ADNEC event photography provider, covering trade shows, government conferences, product launches, and award galas at Abu Dhabi's primary exhibition and convention venue. We have ADNEC accreditation experience and understand the logistics of large multi-hall events." },
      { q: "Can you deliver event photos on the same day in Abu Dhabi?", a: "Yes. For Abu Dhabi events requiring same-day social media content, we operate a real-time editing workflow that delivers a selection of 20–30 polished images within 2–3 hours of the event ending. Full gallery delivery follows within 24–48 hours of the event." },
      { q: "Do you photograph government events and official ceremonies in Abu Dhabi?", a: "Yes. Backyard Studio Official has experience covering government and semi-government events in Abu Dhabi, including ministerial press events, national day ceremonies, and official inaugurations. We understand the protocol requirements and accreditation processes for government-adjacent productions in the UAE capital." },
      { q: "How many photographers do you deploy for large Abu Dhabi events?", a: "For events at venues such as ADNEC, Yas Arena, or Emirates Palace involving multiple simultaneous sessions, we deploy teams of 2 to 6 photographers depending on scope. Every large event is preceded by a briefing covering the run-of-show, key moments, VIP shots required, and individual photographer assignments." },
    ],
  },

  "abu-dhabi/real-estate-photography": {
    title: "Real Estate Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Abu Dhabi — Aldar, Saadiyat Island, Yas Island, Al Reem, ADGM. Interior, aerial drone, developer campaigns. From AED 1,200.",
    h1: "Real Estate Photography in Abu Dhabi",
    subtitle: "Aldar. Saadiyat Island. Yas Island. Al Reem. Every development, professionally documented.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Abu Dhabi's real estate market is one of the most dynamic in the world, driven by major developers including Aldar Properties, IMKAN, Modon, and a growing pipeline of international development names entering the UAE capital. Real estate photography in this market must satisfy two very different audiences: local and GCC buyers who know the Abu Dhabi landscape, and international investors from Europe, South Asia, and Asia who are evaluating Abu Dhabi property remotely.",
      "Backyard Studio Official produces real estate photography and videography for Abu Dhabi's property sector across unit photography, show apartment campaigns, project launch content, aerial drone documentation, and lifestyle imagery that positions developments within their surrounding environment. Aerial work is fully permitted for drone operations across Abu Dhabi's development zones, including the Saadiyat Island cultural district, Yas Island, Al Reem Island, and Al Maryah Island.",
    ],
    highlights: [
      { heading: "Unit & Show Apartment Photography", body: "Precision interior photography of Abu Dhabi residential and commercial units, styled for developer marketing brochures, online listings, and international investor presentations." },
      { heading: "Aerial Drone Documentation", body: "Aerial coverage of Abu Dhabi development sites, masterplans, and completed communities. Drone permits coordinated with ADAC and relevant authority for each location zone." },
      { heading: "Developer Launch Campaigns", body: "Full photography production for project launches: CGI lifestyle composites preparation, show apartment hero shots, community aerial footage, and lifestyle imagery for Saadiyat, Yas, and Al Reem Island projects." },
      { heading: "Saadiyat & Yas Island Specialists", body: "Years of experience shooting in Abu Dhabi's premium development zones. We know permit processes, ideal shooting times, and how to capture these extraordinary environments at their best." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,200" },
      { pkg: "Show Apartment", detail: "Full-day shoot / hero shots + detail images", price: "From AED 3,500" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed pilot", price: "From AED 4,500" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 15,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Aldar Properties developments?", a: "Yes. Backyard Studio Official produces real estate photography and videography for Abu Dhabi developer projects including residential communities, show apartments, project launch campaigns, and aerial documentation. We work within the specific briefing and approval processes that major developers like Aldar operate." },
      { q: "Are you licensed for drone photography over Abu Dhabi real estate developments?", a: "Yes. Aerial work is fully permitted, with airspace permissions for Abu Dhabi locations including Saadiyat Island, Yas Island, Al Reem Island, and Al Maryah Island. Abu Dhabi Civil Aviation Authority (ADAC) coordination is managed by our team as part of the production service." },
      { q: "How much does real estate photography cost in Abu Dhabi?", a: "Unit photography in Abu Dhabi starts from AED 1,200 for up to 3 units with 30 images. Show apartment campaigns start from AED 3,500 for a full-day shoot. Aerial drone packages start from AED 2,500 for a 2-hour drone session. Developer launch packages covering multi-day photography and video are quoted individually." },
      { q: "Do you produce real estate content for international investor audiences?", a: "Yes. Backyard Studio Official produces Abu Dhabi real estate content calibrated for international investor audiences in Europe, South Asia, and Southeast Asia. This includes English-language video with international narration, photography formatted for international property portals, and developer brand films designed for investor roadshow use." },
    ],
  },

  "abu-dhabi/drone-videography": {
    title: "Drone Videography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Drone videography in Abu Dhabi — Sheikh Zayed Grand Mosque, Yas Island, Saadiyat, Corniche, ADGM. Aerial photography & 4K video. From AED 2,500.",
    h1: "Drone Videography in Abu Dhabi",
    subtitle: "ADAC coordinated. Every zone in the capital covered legally.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Drone videography in Abu Dhabi requires more than a camera in the sky. The UAE capital's airspace is among the most regulated in the region, with Abu Dhabi Civil Aviation Authority (ADAC) overseeing commercial drone operations and additional permissions required for filming near government buildings, sensitive zones, and the Sheikh Zayed Grand Mosque environs. Backyard Studio Official arranges all required approvals and manages all Abu Dhabi airspace coordination as a standard part of every aerial production.",
      "Our Abu Dhabi drone team captures the capital's extraordinary architecture — the Corniche skyline, the Louvre Abu Dhabi's perforated dome, the Yas Marina Circuit's race track curve, and the natural mangrove systems of Eastern Mangroves and Jubail Island. We produce aerial content for real estate developers, tourism campaigns, government communications, event documentation, and commercial advertising in 4K with cinema-grade colour grading.",
    ],
    highlights: [
      { heading: "Sheikh Zayed Grand Mosque", body: "One of the world's most photographed buildings from the air. Aerial filming of SZGM requires specific ADAC coordination and restricted airspace clearance — which our team manages on your behalf." },
      { heading: "Corniche & City Skyline", body: "The Abu Dhabi Corniche from altitude reveals the city's striking waterfront geometry. Dawn and dusk aerials over the capital are among the most compelling aerial footage available anywhere in the Gulf." },
      { heading: "Yas & Saadiyat Islands", body: "Development documentation, resort launches, and event coverage on both islands with same-day drone footage delivery for time-sensitive productions." },
      { heading: "Mangroves & Natural Environments", body: "The Eastern Mangroves, Jubail Island, and Abu Dhabi's coastline offer dramatic natural aerial perspectives. Conservation area permits coordinated with relevant environmental authorities." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "Licensed pilot / 4K footage / basic edit", price: "From AED 2,500" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / colour-graded edit", price: "From AED 4,000" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground camera team / full edit", price: "From AED 6,500" },
      { pkg: "Real Estate Aerial", detail: "Development documentation", price: "From AED 3,500" },
    ],
    faqs: [
      { q: "Is drone flying legal in Abu Dhabi and do you have the required permits?", a: "Drone operations in Abu Dhabi require a commercial operator certificate and, for specific zones, additional clearance from Abu Dhabi Civil Aviation Authority (ADAC). Backyard Studio Official holds all required licences and manages every permit application as part of our standard service. We do not fly without complete legal clearance." },
      { q: "Can you fly a drone near the Sheikh Zayed Grand Mosque?", a: "Aerial filming near the Sheikh Zayed Grand Mosque is restricted airspace requiring specific ADAC clearance and coordination with the Mosque's management. Backyard Studio Official has experience navigating this process and has produced aerial content in the SZGM zone for tourism and institutional clients. Lead time for SZGM-adjacent drone permits is typically 5 to 7 business days." },
      { q: "How much does drone videography cost in Abu Dhabi?", a: "Drone sessions in Abu Dhabi start from AED 2,500 for a 2-hour session with a licensed pilot, 4K footage, and basic colour edit. Full-day aerial packages with multiple locations and a colour-graded edit start from AED 4,000. Packages combining aerial and ground camera teams start from AED 6,500." },
      { q: "Can you produce drone content for Abu Dhabi tourism campaigns?", a: "Yes. Backyard Studio Official produces drone and aerial content for Abu Dhabi tourism and hospitality brands, including destination overview films, resort aerial footage for Yas and Saadiyat Island properties, and campaign content for Abu Dhabi Tourism marketing in international markets. We are familiar with DCT Abu Dhabi's visual guidelines for tourism content." },
    ],
  },

  "abu-dhabi/food-photography": {
    title: "Food Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Abu Dhabi — restaurant menus, hotel F&B, social media content, Saadiyat & Yas Island venues. Same-day Instagram content available. From AED 1,800.",
    h1: "Food Photography in Abu Dhabi",
    subtitle: "From Corniche restaurants to Saadiyat beach clubs — your dishes deserve professional photography.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Abu Dhabi's restaurant and hospitality market is growing rapidly, with premium F&B concepts opening across Saadiyat Island, Yas Bay Waterfront, the Corniche, and Al Maryah Island. In this competitive environment, professional food photography is the difference between a packed reservation list and empty tables — and the content needs to perform on Instagram and TikTok, not just look good in a printed menu.",
      "Backyard Studio Official produces food photography for Abu Dhabi restaurants, hotel F&B outlets, cloud kitchens, and F&B brands that need content to perform across every platform. We understand the visual standard that Abu Dhabi's premium hospitality market demands and produce imagery that competes with the best F&B content from anywhere in the world.",
    ],
    highlights: [
      { heading: "Restaurant Menu Photography", body: "Every dish photographed at its best — for printed menus, QR digital menus, delivery platforms, and the restaurant website. Delivered in all required formats." },
      { heading: "Instagram & TikTok Reels", body: "Short-form video content of plating, serving moments, and chef action — the format that brings new customers through the door on social media." },
      { heading: "Hotel F&B Campaigns", body: "Full-service photography for Abu Dhabi's hotel restaurants and beach clubs — ambient atmosphere, hero dishes, cocktails, and lifestyle imagery." },
      { heading: "Saadiyat & Yas Island Venues", body: "We are familiar with the production environments at Abu Dhabi's premium hospitality zones and work within venue schedules without disrupting service." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats", price: "From AED 1,800" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / interior + food / digital delivery", price: "From AED 3,500" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,800 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + brand film", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Do you produce food photography for Abu Dhabi hotels and resorts?", a: "Yes. Backyard Studio Official produces food and F&B photography for hotel restaurants, beach clubs, and hospitality brands across Abu Dhabi, including properties on Saadiyat Island, Yas Island, and the Corniche. We work within hotel operational hours and coordinate with F&B managers and chefs to maximise shooting efficiency." },
      { q: "Can you create Instagram Reels and TikTok content for my Abu Dhabi restaurant?", a: "Yes. In addition to still photography, we produce short-form video content — plating moments, chef action, service shots — in vertical format for Instagram Reels, TikTok, and Stories. Most of our Abu Dhabi restaurant packages include both photo and video content in a single shoot day." },
      { q: "How much does food photography cost in Abu Dhabi?", a: "Food photography in Abu Dhabi starts from AED 1,800 for a 3-hour session covering 20 dishes. A full menu shoot covering 50 dishes with interior photography costs from AED 3,500. Monthly social content packages start from AED 2,800 per month. Restaurant launch packages from AED 6,500." },
      { q: "How quickly do you deliver food photography content?", a: "Standard delivery for Abu Dhabi food photography is 2–4 business days from the shoot date. Rush delivery within 24 hours is available for time-sensitive social media or menu launches at an additional fee. Social media Reels are typically delivered within 48 hours of the shoot." },
    ],
  },

  "abu-dhabi/product-photography": {
    title: "Product Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Abu Dhabi — e-commerce, Amazon UAE, brand campaigns, packaging shoots. Studio & lifestyle options. ADGM-based brands welcome. From AED 900.",
    h1: "Product Photography in Abu Dhabi",
    subtitle: "E-commerce. Amazon UAE. Brand campaigns. Your product, professionally presented.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Abu Dhabi has a growing e-commerce and retail sector, with brands across ADGM, Khalidiyah commercial strip, Yas Mall, and the capital's expanding retail scene needing product content that performs on Amazon UAE, Noon, Shopify, and social media. Product photography in Abu Dhabi needs to meet the technical requirements of online marketplaces while also delivering brand-quality lifestyle imagery for advertising.",
      "Backyard Studio Official produces product photography for Abu Dhabi brands across all product categories — from luxury goods and fashion accessories to consumer electronics, health and wellness products, and specialty food items. We deliver content ready for Amazon UAE and Noon marketplace requirements, brand website use, and social media campaigns.",
    ],
    highlights: [
      { heading: "E-Commerce & Marketplace Photography", body: "White-background product shots meeting Amazon UAE and Noon technical requirements: minimum size, angle coverage, no prohibited text overlays." },
      { heading: "Lifestyle & Context Photography", body: "Products in use, in environment, with models — the content that differentiates your brand from commodity competitors and drives purchase intent on social media." },
      { heading: "Luxury & Premium Products", body: "For ADGM-based luxury brands, high-end retail, and premium consumer goods, we produce editorial-quality product photography that meets international advertising standards." },
      { heading: "Packaging & Brand Campaigns", body: "Full campaign production for product launches: packaging hero shots, brand story imagery, social media campaign photography, and advertising-ready deliverables." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles per product / 2 days", price: "From AED 900" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / 3 angles / styled", price: "From AED 2,500" },
      { pkg: "Premium Campaign", detail: "20 products + model + lifestyle context", price: "From AED 5,000" },
      { pkg: "Catalogue (100+ SKUs)", detail: "Custom quote / priority processing", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce Amazon UAE and Noon compliant product photography in Abu Dhabi?", a: "Yes. Backyard Studio Official produces product photography meeting Amazon UAE and Noon technical requirements: pure white background (RGB 255), minimum image dimensions, angle coverage, and compliance with each platform's content guidelines. We deliver files ready for direct upload without further editing." },
      { q: "Can you do product photography for luxury goods and premium brands in Abu Dhabi?", a: "Yes. We produce editorial-quality product photography for luxury and premium brands in Abu Dhabi, including jewellery, watches, perfume, leather goods, and high-end consumer products. Our lighting setups and colour grading meet the quality standard used by international luxury brands in campaign imagery." },
      { q: "How much does product photography cost in Abu Dhabi?", a: "Product photography in Abu Dhabi starts from AED 900 for 10 SKUs on a white background with 3 angles per product. Lifestyle packages including model and context photography start from AED 2,500 for 30 SKUs. Large catalogue shoots of 100+ products are quoted individually with volume discounts." },
      { q: "Do you offer same-day or next-day product photography delivery?", a: "Standard product photography delivery is 2–4 business days. Rush delivery within 24 hours is available for urgent launches at an additional fee. We can prioritise key hero shots for same-day delivery when product launch timing requires it." },
    ],
  },

  "dubai/headshot-photography": {
    title: "Headshot Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Dubai — LinkedIn profiles, corporate team days, executive portraits, DIFC and Business Bay. Fast 48-hour delivery. From AED 900.",
    h1: "Headshot Photography in Dubai",
    subtitle: "LinkedIn. Corporate profiles. Executive portraits. Dubai professionals, professionally represented.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Dubai's professional market runs on LinkedIn and digital first impressions. Backyard Studio Official produces headshot photography for Dubai professionals across every industry — from DIFC fund managers to Business Bay startup founders, Media City executives to JLT consultants. A great headshot in Dubai is not a luxury; it is a basic requirement for being taken seriously in one of the world's most networked professional environments.",
      "We run every headshot session with a pre-shoot brief that covers your industry, your target audience, and what you want people to feel when they see your photo. The result is not a generic corporate pose — it is an image calibrated to the specific professional context you operate in. We deliver edited images within 48 hours, and we offer on-site corporate team days across Dubai for companies that need consistent headshots for their full team.",
    ],
    highlights: [
      { heading: "DIFC & Business Bay", body: "Dubai's two primary professional districts offer architectural backdrops that immediately communicate corporate credibility. We know the best shooting positions, permit requirements, and optimal lighting times for both districts." },
      { heading: "Corporate Team Headshot Days", body: "We set up a portable studio at your Dubai office and photograph your full team in a single day — from junior staff to C-suite executives — delivering consistent, professional imagery for company websites, LinkedIn, and press kits." },
      { heading: "48-Hour Turnaround", body: "Standard headshot delivery in 48 hours. Rush same-day or next-day delivery available for conference speaker profiles, press interviews, or urgent media deadlines." },
      { heading: "Studio & Outdoor Options", body: "Clean studio backgrounds for maximum versatility, or outdoor architectural environments that provide visual context and industry positioning. We advise on the right approach for your specific professional brand." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 900" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,800" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 500 / person" },
      { pkg: "Personal Brand Package", detail: "3 hrs / 3 looks / 40 images / social media ready", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Dubai?", a: "We shoot at outdoor architectural environments in DIFC, Business Bay, Downtown Dubai, and Dubai Marina; studio backgrounds in our Dubai studio; and on-site at client offices for corporate team days. We advise on location based on your industry and intended use of the images." },
      { q: "How long does a Dubai headshot session take?", a: "Individual headshot sessions run for 90 minutes to 2 hours. Corporate team days are scheduled based on the number of team members — we photograph 10 to 20 people per day in most corporate environments. We work efficiently and never sacrifice quality for speed." },
      { q: "How quickly do you deliver headshots in Dubai?", a: "Standard delivery is 48 hours from the shoot date. Rush delivery within 24 hours or same-day is available for urgent media, conference, or PR deadlines at an additional fee." },
      { q: "What should I wear for a professional headshot in Dubai?", a: "Solid colours photograph better than patterns. Business professional or smart casual depending on your industry. We send a full preparation guide before every session. Most clients bring 2 to 3 outfit options and we advise on which photographs best in the session environment." },
    ],
  },

  "dubai/newborn-photography": {
    title: "Newborn Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Dubai — posed studio sessions and in-home lifestyle photography for UAE families. Safe, gentle, experienced. From AED 1,800.",
    h1: "Newborn Photography in Dubai",
    subtitle: "The first two weeks. Captured before they change.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "Newborn photography in Dubai captures the most fleeting period of a child's life — the 5 to 14 days after birth when babies sleep deeply, curl naturally, and exist in a state of complete newness that photographs cannot revisit once it passes. Backyard Studio Official produces posed studio newborn photography and in-home lifestyle sessions for Dubai families, with safety as the absolute first principle of every session we run.",
      "Dubai's expatriate families are often far from extended family networks, which makes professional newborn documentation particularly meaningful. The images we produce are frequently the first detailed record of a new child that grandparents and family members in other countries receive. We approach every session with this in mind — both in the care we take with the photography and the care we take with the baby.",
    ],
    highlights: [
      { heading: "Posed Studio Sessions (5–14 Days)", body: "The classic newborn photography aesthetic — sleeping baby in wraps and props, controlled studio light, neutral backgrounds. We work entirely at the baby's pace with no time pressure and unlimited settling time." },
      { heading: "In-Home Lifestyle Sessions", body: "We come to your home and document your baby in the natural environment of your first days as a family — the nursery, the family together, the natural light in your space. Documentary rather than posed." },
      { heading: "Safety First Approach", body: "Our newborn photographers follow established safe posing guidelines at all times. A parent is present throughout every session. We never compromise a baby's comfort for an image." },
      { heading: "Sibling and Family Portraits", body: "We include sibling and family portraits within the same session — parents holding the baby, older children meeting their new sibling — producing a complete set of family images alongside the newborn portraits." },
    ],
    pricing: [
      { pkg: "Studio Newborn", detail: "2–4 hrs / wraps + props / 20 edited images", price: "From AED 1,800" },
      { pkg: "Premium Studio", detail: "Full session / family + siblings / 35 images", price: "From AED 2,800" },
      { pkg: "In-Home Lifestyle", detail: "90 min / natural light / 25 images", price: "From AED 2,200" },
      { pkg: "Studio + In-Home Combo", detail: "Both sessions / complete documentation", price: "From AED 3,800" },
    ],
    faqs: [
      { q: "When should I book a newborn photographer in Dubai?", a: "Book during your second trimester to secure dates around your due date. We hold a provisional date and confirm once the baby arrives. The ideal shoot window is 5 to 14 days after birth for posed sessions." },
      { q: "Is newborn photography safe in Dubai?", a: "Yes, when performed by trained photographers following established safe posing protocols. Our newborn photographers hold specialist newborn posing training. We never attempt unsafe poses, and a parent is present at every moment of the session." },
      { q: "How long does a newborn session take in Dubai?", a: "Studio sessions run 2 to 4 hours — working entirely at the baby's pace with breaks for feeding and settling. We do not rush. In-home lifestyle sessions run 90 minutes to 2 hours." },
      { q: "Do you do in-home newborn photography in Dubai?", a: "Yes. We travel to your home and document your new baby in your family environment — the nursery, natural light, family together. Many Dubai families choose both a studio session for posed images and an in-home session for lifestyle documentation." },
    ],
  },

  "dubai/maternity-photography": {
    title: "Maternity Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Dubai for elegant bump shoots, desert golden hour sessions, beach photography and studio portraits. From AED 1,500.",
    h1: "Maternity Photography in Dubai",
    subtitle: "Desert dunes. Golden hour beach. Downtown skyline. Your bump, beautifully documented.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Dubai offers a visual environment for maternity photography that most cities in the world cannot match. The desert landscape 30 minutes from the city produces editorial-quality backdrops at golden hour. The beach environments at JBR, Jumeirah, and Palm Jumeirah deliver extraordinary light at sunrise and sunset. The city's skyline provides an urban architectural context that few other pregnancy photograph locations can replicate. We use all of these environments for maternity photography at Backyard Studio Official.",
      "The ideal timing for a maternity shoot is 28 to 34 weeks — when the bump is prominently visible and the mother is typically still comfortable and mobile enough for a relaxed session. We advise on location based on the season: outdoor beach and desert sessions in Dubai's cooler months from October through April, sunrise sessions during the summer months when morning temperatures are comfortable before the day heats up.",
    ],
    highlights: [
      { heading: "Desert Golden Hour Sessions", body: "The Al Qudra and Lahbab desert areas outside Dubai produce some of the most dramatic maternity photography backdrops available anywhere — warm amber dunes, extraordinary sunset light, and a scale that makes every image feel editorial." },
      { heading: "Beach and Coastal Sessions", body: "JBR, Jumeirah Beach, and Palm Jumeirah offer beautiful sunrise and golden-hour light for maternity photography. The combination of water, sky, and soft natural light is consistently flattering and produces timeless images." },
      { heading: "Studio Maternity Portraits", body: "For a controlled, polished aesthetic or when outdoor conditions are not suitable, our Dubai studio provides a private, comfortable environment with professional lighting and a small wardrobe of maternity gowns available to borrow." },
      { heading: "Family Inclusion", body: "Partners and existing children are included in sessions at no additional per-person fee up to 3 family members. We structure the session to get the best from each combination — individual maternity portraits, couple shots, and family group imagery." },
    ],
    pricing: [
      { pkg: "Outdoor Session", detail: "90 min / 1 location / 20–25 edited images", price: "From AED 1,500" },
      { pkg: "Studio Session", detail: "90 min / controlled light / gown wardrobe", price: "From AED 1,800" },
      { pkg: "Premium Outdoor", detail: "2.5 hrs / 2 locations / outfit change / 40 images", price: "From AED 2,500" },
      { pkg: "Full Desert Session", detail: "Golden hour dunes / 2 hrs / 35 images", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "When is the best time for a maternity shoot in Dubai?", a: "28 to 34 weeks of pregnancy. The bump is fully visible and prominent, and the mother is typically still comfortable for a session lasting 90 minutes to 2 hours. Booking during the second trimester ensures availability of preferred time slots." },
      { q: "What locations are best for maternity photography in Dubai?", a: "Desert golden hour sessions at Al Qudra or Lahbab for dramatic editorial imagery; JBR and Jumeirah Beach for coastal natural light; Downtown Dubai for urban architectural backdrops; and our studio for controlled indoor portrait sessions. We advise on location based on your preferred aesthetic and the time of year." },
      { q: "Can my partner and children be in the maternity shoot?", a: "Yes. We include partners and existing children in maternity sessions. We structure the shoot to work at a pace that suits young children — starting with the most active participants while their energy is highest and moving to individual portraits once they have finished." },
      { q: "How much does maternity photography cost in Dubai?", a: "Sessions start from AED 1,500 for a 90-minute outdoor session. Premium sessions with multiple locations and outfit changes start from AED 2,500. Desert golden hour sessions start from AED 2,800. Studio sessions from AED 1,800." },
    ],
  },

  "dubai/fashion-photography": {
    title: "Fashion Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Dubai for editorial shoots, e-commerce, lookbooks, model portfolios and brand campaigns. DIFC, Downtown, desert, hotel locations. From AED 3,500.",
    h1: "Fashion Photography in Dubai",
    subtitle: "Editorial. E-commerce. Campaigns. Dubai's fashion photography at international standard.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Dubai's fashion photography market operates at a genuinely international level. The city's architecture, its desert proximity, its year-round shooting weather, and its diverse and highly experienced modelling community make it a production location that international fashion brands choose specifically — not just use by default because it is where the client is based. Backyard Studio Official produces fashion photography in Dubai that is benchmarked against international editorial standards, not local market conventions.",
      "We produce editorial fashion photography for magazines and digital media, e-commerce model photography for fashion retail brands, lookbook and campaign content for seasonal collections, and model portfolio shoots for Dubai-based talent. Our production team manages the full creative process — from location scouting and model casting through to post-production retouching — as a single deliverable.",
    ],
    highlights: [
      { heading: "Editorial Fashion", body: "Campaign and editorial imagery with a visual narrative — using Dubai's architecture, desert landscape, and luxury hotel environments as the backdrop for fashion content that communicates more than just the clothes." },
      { heading: "E-Commerce Photography", body: "High-volume, consistent product-on-model photography for fashion retail brands selling on their own websites, Amazon UAE, or Noon. Clean, technically precise, and delivered efficiently." },
      { heading: "Model Casting & Styling", body: "We have working relationships with Dubai's leading modelling agencies and experienced freelance stylists. We manage casting and crew coordination as part of our production service." },
      { heading: "Full Production Management", body: "Brief to delivery — we manage location scouting, model booking, styling, make-up, photography, and post-production as an integrated service rather than as separate hires." },
    ],
    pricing: [
      { pkg: "Half-Day Shoot", detail: "Photographer + assistant / 1 location", price: "From AED 3,500" },
      { pkg: "Full Production Day", detail: "Crew / location / post-production included", price: "From AED 6,000" },
      { pkg: "E-Commerce Day Rate", detail: "Model photography / per-outfit pricing", price: "From AED 5,000 / day" },
      { pkg: "Campaign Production", detail: "Multi-day / full crew / model + styling", price: "On request" },
    ],
    faqs: [
      { q: "What types of fashion photography does Backyard Studio produce in Dubai?", a: "Editorial fashion for magazines and digital media, e-commerce model photography for fashion retail, lookbook and campaign photography for seasonal collections, and model portfolio shoots. We manage the full production process including model casting, styling, location, photography, and post-production." },
      { q: "Which fashion photography locations do you use in Dubai?", a: "DIFC and Downtown Dubai for architectural editorial imagery; desert and dune locations for dramatic outdoor campaigns; Palm Jumeirah and JBR beach clubs for coastal fashion work; luxury hotel pools and interiors; and studio environments for clean e-commerce photography. Location is chosen based on the brand aesthetic and collection." },
      { q: "Can you source models for fashion photography in Dubai?", a: "Yes. We work with Dubai's leading modelling agencies and can source models across all demographics, looks, and specialisms. We manage model bookings, fees, and coordination as part of our full production service." },
      { q: "How much does fashion photography cost in Dubai?", a: "Half-day shoots start from AED 3,500. Full production days including crew and location from AED 6,000. E-commerce model photography from AED 5,000 per day. Multi-day campaign productions are quoted individually based on the brief." },
    ],
  },

  "dubai/social-media-content": {
    title: "Social Media Content Creation in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Social media content production in Dubai — Instagram Reels, TikTok, LinkedIn video, brand campaigns. Monthly packages for UAE businesses and creators. From AED 2,500.",
    h1: "Social Media Content Creation in Dubai",
    subtitle: "Instagram. TikTok. LinkedIn. Dubai brands and creators, consistently showing up.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Dubai is one of the world's highest-density social media markets. UAE consumers are among the most active social media users globally, and the standard of professional content produced by Dubai's leading brands and creators sets a benchmark that phone photography and amateur video cannot compete with. Backyard Studio Official produces social media content for Dubai businesses and creators — from individual Instagram influencers to corporate brands producing LinkedIn video — at a professional production standard that drives actual results.",
      "We produce photo and video in the same sessions, delivering content banks that cover Instagram, TikTok, LinkedIn, and YouTube from a single shoot day. Our team understands the platform-specific requirements — vertical video native to TikTok and Reels, hook-structured short-form content, algorithm-aware pacing — and we build these into the production approach rather than retrofitting general footage to platform needs after the fact.",
    ],
    highlights: [
      { heading: "Instagram & TikTok Reels", body: "Short-form vertical video produced natively in the format that Instagram and TikTok algorithms reward — not repurposed horizontal footage cropped to fit. We direct the content, manage on-camera talent briefing, and deliver platform-ready files." },
      { heading: "Monthly Content Retainers", body: "Regular shoot sessions producing a rolling bank of content that keeps Dubai brands and creators posting consistently. Retainer clients never run out of material and maintain a consistent visual identity across platforms." },
      { heading: "Photo + Video in One Day", body: "We produce static photography, Reels, Stories content, and LinkedIn video in the same session day — maximising output and reducing the number of shoot days required to keep all channels fed." },
      { heading: "Hospitality & Restaurant Content", body: "Food, F&B, and hospitality social media content is among the most in-demand work we produce in Dubai. Menu photography, chef reels, guest experience content, and seasonal campaign material — all in a single visit." },
    ],
    pricing: [
      { pkg: "Half-Day Content Shoot", detail: "Photo + Reels / 1–2 platforms", price: "From AED 2,500" },
      { pkg: "Full-Day Content Sprint", detail: "Multi-platform / photo + video / 3+ deliverables", price: "From AED 4,500" },
      { pkg: "Creator Monthly Retainer", detail: "2 sessions / month / consistent content bank", price: "From AED 2,500 / mo" },
      { pkg: "Brand Monthly Retainer", detail: "4 sessions / month / multi-platform / strategy", price: "From AED 4,000 / mo" },
    ],
    faqs: [
      { q: "What social media content do you produce in Dubai?", a: "Instagram Reels, TikTok videos, YouTube Shorts, LinkedIn video content, Instagram static posts and carousels, Stories content, and brand campaign content. We produce both photography and video in the same sessions to maximise output per shoot day." },
      { q: "Do you offer monthly content packages for Dubai businesses?", a: "Yes. Monthly retainer packages cover 2 to 4 shoot sessions per month producing a rolling bank of content. Creator retainers start from AED 2,500 per month. Brand retainers covering multi-platform output start from AED 4,000 per month." },
      { q: "Do you produce TikTok and Instagram Reels natively?", a: "Yes. We shoot vertical content natively rather than repurposing horizontal footage. Our team understands TikTok and Reels hook structures, pacing, and the visual rhythm that performs on each platform's algorithm." },
      { q: "Can you produce content for my Dubai restaurant or hotel?", a: "Yes. Food, hospitality, and lifestyle social media content is a core part of our Dubai production work. We produce Instagram and TikTok content for restaurants, hotels, cafes, beach clubs, and lifestyle brands — typically covering photo and video in a single visit." },
    ],
  },

  "dubai/birthday-photography": {
    title: "Birthday Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Dubai for kids parties, milestone adult birthdays, private celebrations and styled birthday shoots. Hotels, beach clubs, private venues. From AED 1,200.",
    h1: "Birthday Photography in Dubai",
    subtitle: "Kids parties. Milestone birthdays. Private celebrations. Dubai moments, professionally documented.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday photography in Dubai covers two very different briefs. The first is event documentation — a photographer present at the celebration itself, covering the party as it happens and capturing the genuine moments that make the event memorable. The second is a styled birthday shoot — a dedicated photography session in a beautiful Dubai location, producing professional portrait-quality images that mark a milestone birthday with the seriousness it deserves.",
      "Backyard Studio Official handles both. We photograph kids birthday parties at Dubai hotels, beach clubs, and private venue spaces with the patience and experience that the chaotic but meaningful environment of a children's party demands. And we produce milestone birthday shoots — 18th, 21st, 30th, 40th, 50th — at Dubai's most visually dramatic locations, from desert dunes at golden hour to heritage districts and rooftop skyline environments.",
    ],
    highlights: [
      { heading: "Kids Party Coverage", body: "We arrive early to document the setup before guests arrive, cover the party throughout its natural arc, and capture the genuine moments — the cake expression, the games, the group interactions — that parents actually want to remember." },
      { heading: "Milestone Birthday Shoots", body: "Styled photography sessions at Dubai's most visually dramatic locations: desert dunes, Palm Jumeirah beach, Downtown skyline, Al Fahidi heritage district. Two to three outfit changes, 2 locations, delivered in 90 minutes to 2 hours." },
      { heading: "Hotel & Venue Events", body: "We are experienced with the production logistics of birthday events at Dubai's hotels, beach clubs, and private venues — coordinating with venue event managers to ensure coverage access and timing." },
      { heading: "Same-Day Sneak Peek", body: "10 to 15 highlight images delivered within 6 hours of the event for immediate social media sharing and guest distribution. Full gallery follows in 3 to 5 business days." },
    ],
    pricing: [
      { pkg: "Party Coverage", detail: "2 hrs / 50–80 edited images / digital gallery", price: "From AED 1,200" },
      { pkg: "Full Event Coverage", detail: "3–4 hrs / reception to cake cutting", price: "From AED 1,800" },
      { pkg: "Milestone Birthday Shoot", detail: "90 min / styled / 2 locations / 30 images", price: "From AED 1,500" },
      { pkg: "Party + Same-Day Sneak Peek", detail: "Coverage + 15 highlights within 6 hrs", price: "From AED 1,800" },
    ],
    faqs: [
      { q: "Do you photograph kids birthday parties in Dubai?", a: "Yes. Children's birthday party photography is one of our most frequently booked personal event services. We document kids parties at Dubai hotels, beach clubs, private villas, and home parties — capturing the genuine moments with patience and experience in the fast-moving environment of children's celebrations." },
      { q: "Can you photograph a styled milestone birthday shoot in Dubai?", a: "Yes. We produce milestone birthday photography sessions at Dubai's most visually dramatic locations — desert dunes, Palm Jumeirah beach, Downtown skyline, Al Fahidi heritage district. Sessions run 90 minutes to 2 hours and include outfit changes and 2 locations." },
      { q: "Do you photograph birthday events at Dubai hotels and beach clubs?", a: "Yes. We are experienced with the logistics of hotel and venue birthday events in Dubai and coordinate with venue event coordinators in advance. We cover receptions, private dining rooms, pool decks, and beach club events across the emirate." },
      { q: "How much does birthday photography cost in Dubai?", a: "Party coverage starts from AED 1,200 for 2 hours. Full event coverage for 3 to 4 hours starts from AED 1,800. Milestone birthday shoots start from AED 1,500. Same-day sneak peek add-on from AED 300." },
    ],
  },

  "dubai/kids-photography": {
    title: "Kids Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Dubai for family portrait sessions, kids photoshoots, sibling sessions and school-age portraits. Beach, garden, studio locations. From AED 1,200.",
    h1: "Kids Photography in Dubai",
    subtitle: "Toddlers to teens. Genuine moments, not forced poses.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Children's photography in Dubai requires a fundamentally different approach to adult portrait work. Children do not respond to direction the way adults do. They move unpredictably, their moods change within minutes, and the best images are almost always the unguarded moments — the genuine expressions and natural interactions — rather than anything posed or structured. At Backyard Studio Official, we approach children's photography with patience, experience, and the understanding that the session works best when we follow the child rather than trying to make the child follow a plan.",
      "We photograph children of all ages in Dubai — from babies through to teenagers — in outdoor beach and garden environments, in architectural Dubai settings for older children, and in studio environments when a more controlled portrait aesthetic is required. Family sessions including parents are structured to give everyone the best conditions for their images, and we include sibling portrait combinations within the session at no additional cost.",
    ],
    highlights: [
      { heading: "Beach & Outdoor Sessions", body: "JBR, Kite Beach, Jumeirah, and Dubai parks provide space for children to move naturally — producing the spontaneous, genuine imagery that makes children's photography meaningful. We work with the environment rather than against it." },
      { heading: "Patient, Child-Led Approach", body: "We spend the first part of every session building rapport with the child before we pick up a camera. Sessions are paced around the child's energy and engagement, not a fixed schedule. We never rush a children's session." },
      { heading: "Family Sessions", body: "Parents and siblings included in sessions at no additional charge up to 4 family members. We structure the session for the best results with young children — covering the most active participants first while their energy is highest." },
      { heading: "Studio Option", body: "Our Dubai studio provides a controlled, comfortable environment for portrait-quality imagery that works for wall prints, framed gifts, and formal family portraits. Clean backgrounds, professional lighting, and a child-friendly space." },
    ],
    pricing: [
      { pkg: "Kids Session", detail: "60 min / outdoor / 20–30 edited images", price: "From AED 1,200" },
      { pkg: "Family Session", detail: "90 min / kids + parents / 35 images", price: "From AED 1,800" },
      { pkg: "Studio Portrait", detail: "60 min / studio / 15 final images", price: "From AED 1,500" },
      { pkg: "Toddler Mini Session", detail: "45 min / child-paced / 15 images", price: "From AED 950" },
    ],
    faqs: [
      { q: "What is the best approach for photographing young children in Dubai?", a: "Give children something to do rather than asking them to pose. We engage with children at their level, use activities and props that naturally draw their interest, and capture the genuine expressions and movements that result. The first 5 to 10 minutes of every session are spent building rapport before we pick up a camera." },
      { q: "What locations do you use for kids photography in Dubai?", a: "Beach settings at JBR, Kite Beach, and Jumeirah for natural outdoor imagery; parks and garden environments; Downtown Dubai for older children; the Dubai Miracle Garden for colour and visual interest; and our studio for controlled portrait sessions. Location is chosen based on the children's ages and the family's preferred aesthetic." },
      { q: "How long should a children's photography session be?", a: "45 to 60 minutes for toddlers; 60 to 90 minutes for school-age children; 90 minutes to 2 hours for family sessions including parents and multiple children. We work flexibly around the child's energy rather than rigidly adhering to a schedule." },
      { q: "How much does kids photography cost in Dubai?", a: "Children's sessions start from AED 1,200 for a 60-minute outdoor session delivering 20 to 30 edited images. Family sessions including parents start from AED 1,800. Toddler mini sessions from AED 950. Studio portrait sessions from AED 1,500." },
    ],
  },

  "dubai/engagement-photography": {
    title: "Engagement Photography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Dubai for pre-wedding couple shoots, proposal photography and anniversary sessions. Desert, beach, skyline locations. From AED 2,000.",
    h1: "Engagement Photography in Dubai",
    subtitle: "Desert golden hour. Palm Jumeirah. Downtown skyline. Dubai's most romantic locations, professionally shot.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Dubai's engagement photography locations are among the best in the world. The desert dunes at golden hour produce imagery that is genuinely extraordinary — warm amber light, dramatic scale, and a visual atmosphere that most cities cannot replicate. The beach environments at Jumeirah, JBR, and Palm Jumeirah offer soft coastal light at sunrise and sunset. The Downtown Dubai skyline, Al Fahidi Heritage District, and Dubai Marina provide a range of architectural contexts that work beautifully for couple photography. Backyard Studio Official uses all of these environments for engagement and pre-wedding photography.",
      "Our approach to couple photography is built around comfort and direction rather than rigid posing. Most couples are not naturally comfortable being photographed together, and the images from uncomfortable people are visible immediately — the stiffness, the forced smiles, the absence of genuine connection. We spend the warm-up phase of every session getting the couple comfortable before we start working toward the images that matter.",
    ],
    highlights: [
      { heading: "Desert Golden Hour Sessions", body: "Al Qudra and Lahbab desert areas at golden hour produce Dubai's most dramatic couple photography. The light in the 45 minutes before sunset turns dune surfaces amber and copper — a shooting window we plan precisely and use efficiently." },
      { heading: "Beach & Coastal Sessions", body: "Jumeirah Beach, JBR, and Palm Jumeirah for soft coastal light at sunrise and golden hour. Popular with couples who prefer a natural, romantic aesthetic over urban or desert imagery." },
      { heading: "Downtown & Skyline", body: "Burj Khalifa views from Downtown Dubai, DIFC's architectural intensity, Dubai Marina's urban waterfront — for couples who want Dubai's modern city character in their engagement images." },
      { heading: "Proposal Photography", body: "We work covertly — positioned at the proposal location in advance — to capture the genuine moment of the proposal and immediate reaction. Precise timing coordination managed through close pre-event communication." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 2,000" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 3,000" },
      { pkg: "Desert Golden Hour", detail: "2 hrs / dunes / sunset / 40 images", price: "From AED 2,500" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "What are the best locations for an engagement shoot in Dubai?", a: "Desert dunes at Al Qudra or Lahbab at golden hour for dramatic editorial imagery; JBR, Jumeirah, and Palm Jumeirah beach for coastal natural light; Downtown Dubai with Burj Khalifa views; Al Fahidi Heritage District for historic architectural texture; and Dubai Marina for contemporary urban imagery. We advise based on the couple's preferred aesthetic." },
      { q: "When should we schedule an engagement shoot in Dubai?", a: "Book 2 to 4 months in advance, particularly for golden-hour desert and beach time slots during Dubai's cooler months from October through April. Summer outdoor sessions are only practical at sunrise (5:30 to 7:00am) to avoid heat. Indoor and studio sessions are available year-round." },
      { q: "Do you photograph proposals in Dubai?", a: "Yes. We position covertly at the proposal location in advance and capture the genuine proposal moment and reaction. We manage all timing and positioning through close coordination with the proposing partner before the event. Popular proposal locations book far in advance." },
      { q: "How much does engagement photography cost in Dubai?", a: "Engagement photography starts from AED 2,000 for a 90-minute single-location session. Two-location sessions start from AED 3,000. Desert golden hour sessions from AED 2,500. Proposal photography from AED 2,500." },
    ],
  },

  // ── DUBAI AREAS ───────────────────────────────────────────────────────────
  // Area-level pages. These target "video production [area]" searches, which are
  // higher-intent and far less contested than city-level "video production Dubai".

  "dubai/dubai-marina": {
    title: "Video Production in Dubai Marina 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography in Dubai Marina — events, corporate, real estate, weddings and social content. Marina Walk, JBR, Bluewaters. Free quote in 2 hours.",
    h1: "Video Production in Dubai Marina",
    subtitle: "Marina Walk. JBR. Bluewaters. The most filmed waterfront in the UAE.",
    category: "DUBAI MARINA",
    intro: [
      "Dubai Marina is one of the densest and most visually distinctive districts in the UAE — a canyon of towers around a man-made waterway, with JBR beach on one side and Bluewaters Island across the water. For production, it is also one of the busiest: residents, restaurants, yacht operators, real estate brokerages, fitness studios and retail brands here all need content, and most of them need it monthly rather than once.",
      "Backyard Studio Official covers Dubai Marina, JBR, Marina Walk, Bluewaters Island and Dubai Harbour. We produce restaurant and F&B content along Marina Walk and The Beach at JBR, property films for Marina towers and Bluewaters residences, yacht and charter content from Marina berths, event coverage at Marina hotels, and the ongoing social media content that Marina-based businesses run on.",
      "The Marina rewards knowing it. Light moves fast between the towers, the waterfront changes character completely between morning and blue hour, and filming access varies significantly between the public promenade, private tower podiums, Bluewaters and Dubai Harbour — each with different permission requirements. We plan around all of that before the shoot day rather than discovering it on arrival.",
    ],
    highlights: [
      { heading: "Marina Walk & JBR F&B", body: "Restaurant, café and lounge content along Marina Walk and The Beach at JBR — food, interiors, ambience and the short-form social content the F&B scene here runs on." },
      { heading: "Marina Tower Property Films", body: "Apartment walkthroughs and building content across Marina towers, Bluewaters Residences and Dubai Harbour — including the water and skyline views that sell these units." },
      { heading: "Yacht & Charter Content", body: "Yacht, charter and marine content shot from Marina berths and on the water — for charter operators, brokers and marine businesses." },
      { heading: "Blue Hour Skyline", body: "The Marina's defining look is the 25-minute window after sunset when the towers light and the water reflects them. We schedule for it deliberately rather than hoping to catch it." },
    ],
    pricing: [
      { pkg: "Social Content Day", detail: "Half-day shoot / photo + video / social cuts", price: "From AED 2,500" },
      { pkg: "Property Film", detail: "Apartment or tower walkthrough + stills", price: "From AED 3,000" },
      { pkg: "Event Coverage", detail: "Marina venue or hotel event coverage", price: "From AED 3,000" },
      { pkg: "F&B Content Package", detail: "Food, interiors, ambience + reels", price: "From AED 3,500" },
    ],
    faqs: [
      { q: "Do you cover Dubai Marina, JBR and Bluewaters?", a: "Yes. We cover the whole Marina district including Marina Walk, JBR and The Beach, Bluewaters Island and Dubai Harbour. These sit under different access and permission regimes — public promenade, private podium, and island management — so we confirm what is required for your specific location before the shoot." },
      { q: "How much does video production in Dubai Marina cost?", a: "A half-day social content shoot starts from AED 2,500. Property films start from AED 3,000, event coverage from AED 3,000, and full F&B content packages from AED 3,500. Marina-based businesses on monthly retainers pay a lower per-shoot rate." },
      { q: "Can you film restaurants and cafés on Marina Walk?", a: "Yes, and it is a large part of our Marina work. F&B content here needs to work for both the venue's own channels and delivery-platform listings, so we shoot food, interiors and ambience in one session and deliver both stills and short-form vertical video." },
      { q: "Do you need a permit to film in Dubai Marina?", a: "It depends entirely on where you stand. The public promenade, a private tower podium, Bluewaters and Dubai Harbour each have different requirements, and commercial filming generally needs permission from the relevant authority or property management. We handle this as part of pre-production." },
      { q: "Can you shoot yacht and boat content from the Marina?", a: "Yes. We produce yacht, charter and marine content both dockside and on the water for charter operators and brokers. On-water shoots need coordination with the operator on timing and route, which we arrange in advance." },
      { q: "What is the best time of day to film in Dubai Marina?", a: "Blue hour — roughly 25 minutes after sunset — is the Marina's strongest look, when the towers light up and reflect on the water. Early morning is best for clean promenade shots without crowds. Midday is the weakest window because the towers cast harsh, contrasting shadows across the walkway." },
    ],
  },

  "dubai/downtown-dubai": {
    title: "Video Production in Downtown Dubai 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography in Downtown Dubai — corporate films, events, hotels and Burj Khalifa backdrops. DIFC-adjacent, Dubai Mall, Boulevard. Free quote in 2 hours.",
    h1: "Video Production in Downtown Dubai",
    subtitle: "Burj Khalifa. The Boulevard. Dubai's most recognised backdrop.",
    category: "DOWNTOWN DUBAI",
    intro: [
      "Downtown Dubai is the emirate's showcase district — Burj Khalifa, Dubai Mall, Dubai Opera, the Boulevard, and a concentration of five-star hotels and corporate headquarters. It is also the most photographed square kilometre in the Middle East, which creates a specific production problem: the obvious shots have all been taken.",
      "Backyard Studio Official produces content across Downtown for corporate clients, hotels, restaurants, retail brands and private clients. We cover corporate films and executive content for Downtown-headquartered businesses, hotel and hospitality content across the district's properties, event coverage at Dubai Opera and hotel ballrooms, and the Burj Khalifa-backdrop work that clients specifically come to Downtown for.",
      "The value of Downtown as a location is instant recognition — a single frame communicates Dubai to a global audience with no explanation needed. The cost is that it is crowded, heavily regulated and expensive to film in properly. Knowing which vantage points are accessible, which require permission, and which times of day are workable is most of the job here.",
    ],
    highlights: [
      { heading: "Burj Khalifa Backdrops", body: "The shot clients come to Downtown for. We know the vantage points that are accessible, the ones that need permission, and the times of day the tower photographs best." },
      { heading: "Corporate & Executive Content", body: "Executive interviews, corporate films and brand content for Downtown-headquartered businesses, filmed in-office or at hotel locations." },
      { heading: "Hotel & Hospitality", body: "Property, F&B and event content across Downtown's five-star hotels — rooms, restaurants, ballrooms and rooftop venues." },
      { heading: "Dubai Opera & Events", body: "Event coverage at Dubai Opera, hotel ballrooms and Boulevard venues, including multi-camera coverage for conferences and galas." },
    ],
    pricing: [
      { pkg: "Corporate Film", detail: "Half-day corporate or executive content", price: "From AED 5,500" },
      { pkg: "Event Coverage", detail: "Conference, gala or Opera event coverage", price: "From AED 3,000" },
      { pkg: "Hotel Content Package", detail: "Rooms, F&B, facilities — photo + video", price: "From AED 6,500" },
      { pkg: "Social Content Day", detail: "Half-day shoot / photo + video / social cuts", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "Can you film with the Burj Khalifa in the background?", a: "Yes, and it is one of the most requested shots in Dubai. Which vantage point we use depends on the look you want and what is accessible — some positions are public, others sit on hotel or private property and need permission. We arrange access as part of pre-production rather than turning up and hoping." },
      { q: "How much does video production in Downtown Dubai cost?", a: "Corporate films start from AED 5,500 for a half-day. Event coverage starts from AED 3,000, hotel content packages from AED 6,500, and social content days from AED 2,500. Downtown shoots sometimes carry location or permit costs on top, which we identify upfront rather than after the fact." },
      { q: "Do you need a permit to film in Downtown Dubai?", a: "Commercial filming in Downtown generally requires permission, and the Boulevard, Dubai Mall area and hotel properties each have their own process. Emaar manages much of the district. We handle permit applications in pre-production and build the lead time into the schedule." },
      { q: "Do you cover events at Dubai Opera?", a: "Yes. We cover events at Dubai Opera, Downtown hotel ballrooms and Boulevard venues, typically with multi-camera coverage for conferences, galas and awards. Venue-specific rules on camera positions and lighting are confirmed with the venue before the event." },
      { q: "Can you produce corporate video for Downtown-based companies?", a: "Yes. We produce executive interviews, corporate films, recruitment content and brand films for businesses headquartered in Downtown and the adjacent DIFC area — filmed either in your own offices or at a hotel or studio location." },
      { q: "When is the best time to film in Downtown Dubai?", a: "Early morning gives the cleanest Boulevard and Burj Khalifa shots before crowds build. Blue hour is strongest for the tower and fountain. Midday is difficult — harsh overhead light, heavy footfall, and the hardest window for permits at busy locations." },
    ],
  },

  "dubai/business-bay": {
    title: "Video Production in Business Bay 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography in Business Bay Dubai — corporate films, office content, product shoots and social media for Business Bay companies. Free quote in 2 hours.",
    h1: "Video Production in Business Bay",
    subtitle: "Dubai's working district — where the corporate content actually gets made.",
    category: "BUSINESS BAY",
    intro: [
      "Business Bay is where a very large share of Dubai's small and mid-sized businesses actually operate. It has none of Downtown's postcard recognition and all of its commercial density: thousands of companies across dozens of towers, from two-person consultancies to regional headquarters, plus a growing residential population and a canal-side F&B strip.",
      "That makes Business Bay the single most productive district in Dubai for corporate content. Backyard Studio Official produces corporate films, executive interviews, recruitment content, product photography, office culture films and social media content for Business Bay companies — usually shot in the client's own office, which is faster and considerably cheaper than a studio hire.",
      "We also cover the district's other content demand: canal-side restaurants and cafés, property content across Business Bay towers, and the co-working and business centre operators who need facility content to attract tenants.",
    ],
    highlights: [
      { heading: "In-Office Corporate Films", body: "Executive interviews, company films and culture content shot in your own Business Bay office — no studio hire, minimal disruption, usually a half-day." },
      { heading: "Product & E-commerce Photography", body: "Product photography for Business Bay-based brands and e-commerce sellers, shot on location or in studio depending on volume." },
      { heading: "Office & Facility Content", body: "Office, co-working and business centre content for operators marketing space to tenants across Business Bay towers." },
      { heading: "Canal-Side F&B", body: "Restaurant and café content along the Business Bay canal — food, interiors and short-form social." },
    ],
    pricing: [
      { pkg: "Corporate Half-Day", detail: "In-office film / interviews / B-roll", price: "From AED 5,500" },
      { pkg: "Social Content Day", detail: "Half-day shoot / photo + video / social cuts", price: "From AED 2,500" },
      { pkg: "Product Photography", detail: "Studio or on-location product shoot", price: "From AED 2,500" },
      { pkg: "Office & Facility Film", detail: "Office or business centre walkthrough", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "Can you film in our Business Bay office?", a: "Yes, and most of our Business Bay work is shot in the client's own office. We bring our own lighting and audio, work around the working day, and typically need a half-day. Some towers require building management notification for equipment access, which we sort in advance." },
      { q: "How much does corporate video production cost in Business Bay?", a: "In-office corporate films start from AED 5,500 for a half-day, which usually covers executive interviews plus office B-roll. Social content days start from AED 2,500 and product photography from AED 2,500. Ongoing retainers are priced per shoot day at a lower rate." },
      { q: "Do you produce content for co-working spaces and business centres?", a: "Yes. Facility content is what fills desks — prospective tenants want to see the actual meeting rooms, desk areas and common spaces rather than renders. We shoot these to feel occupied and functional rather than empty." },
      { q: "Can you do product photography for Business Bay e-commerce brands?", a: "Yes. We shoot on white for marketplace listings and lifestyle for brand channels and ads, either on location or in studio depending on volume and setup requirements." },
      { q: "Do you cover restaurants along the Business Bay canal?", a: "Yes. The canal-side F&B strip is an active part of our Business Bay work — food photography, interiors, ambience and the short-form vertical content restaurants need for social and delivery platforms." },
      { q: "How quickly can you deliver corporate content?", a: "Standard delivery is 48 to 72 hours for a half-day corporate shoot. Faster turnaround is available when a deadline requires it and is arranged at booking so an editor is scheduled." },
    ],
  },

  "dubai/palm-jumeirah": {
    title: "Video Production on Palm Jumeirah 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography on Palm Jumeirah — luxury villas, resorts, weddings, events and property films. Atlantis, One&Only, Five Palm. Free quote in 2 hours.",
    h1: "Video Production on Palm Jumeirah",
    subtitle: "Villas, resorts and weddings on Dubai's most exclusive address.",
    category: "PALM JUMEIRAH",
    intro: [
      "Palm Jumeirah concentrates more luxury inventory into one location than anywhere else in Dubai — Atlantis The Palm and Atlantis The Royal, One&Only, Waldorf Astoria, Five Palm, Anantara and W Dubai, alongside the Fronds' signature villas and the Palm's apartment buildings.",
      "Backyard Studio Official covers Palm Jumeirah for luxury property content, resort and hospitality films, weddings, events and lifestyle production. Villa content on the Fronds is a particular specialism: these properties are marketed to an international buyer who will very likely never walk through before committing, so the film has to do the work a viewing normally would.",
      "Filming on the Palm requires more planning than most of Dubai. Access to the Fronds is controlled, individual resorts have their own filming policies and rates, and aerial coverage over parts of the Palm sits in restricted airspace requiring specific approvals. All of this is arranged before the shoot day.",
    ],
    highlights: [
      { heading: "Frond Villa Films", body: "Signature villa content — twilight exteriors, pool and beach frontage, interior walkthroughs — built for international buyers purchasing without a physical viewing." },
      { heading: "Resort & Hospitality", body: "Rooms, suites, restaurants, spa and facilities content across the Palm's resorts, shot to each property's brand standard." },
      { heading: "Palm Weddings", body: "Wedding coverage at Atlantis, One&Only, Waldorf Astoria, Five Palm and Anantara — venues we have worked repeatedly and know the logistics of." },
      { heading: "Aerial Where Permitted", body: "Aerial coverage with the required approvals arranged in advance — parts of the Palm sit in restricted airspace, which we clear in advance." },
    ],
    pricing: [
      { pkg: "Villa Film + Stills", detail: "Full villa film, twilight exteriors, photography", price: "From AED 5,500" },
      { pkg: "Resort Content Package", detail: "Rooms, F&B, facilities — photo + video", price: "From AED 8,000" },
      { pkg: "Wedding — Silver", detail: "2 photographers + 2 videographers / half day", price: "From AED 15,500" },
      { pkg: "Event Coverage", detail: "Resort or private event coverage", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Do you film luxury villas on Palm Jumeirah?", a: "Yes, Frond villa content is one of our specialisms. These properties are typically marketed to overseas buyers who will not view in person before committing, so we shoot a complete film — twilight exteriors, pool and beach frontage, full interior walkthrough — that answers what a viewing would." },
      { q: "How much does video production on Palm Jumeirah cost?", a: "Villa films with stills start from AED 5,500. Resort content packages start from AED 8,000, event coverage from AED 3,000, and wedding packages from AED 15,500 for the Silver tier. Some resorts charge their own location fees, which are additional and confirmed upfront." },
      { q: "Can you fly a drone over Palm Jumeirah?", a: "Aerial coverage is available within our productions with the required permits arranged in advance, but parts of the Palm fall within restricted airspace and some areas need additional clearance. We confirm what is achievable for your specific location before the shoot rather than assuming." },
      { q: "Which Palm Jumeirah resorts do you cover for weddings?", a: "We cover weddings at Atlantis The Palm and The Royal, One&Only The Palm, Waldorf Astoria, Five Palm Jumeirah, Anantara and W Dubai. Each has its own supplier rules, timing constraints and preferred setups, which we work to as part of planning." },
      { q: "Do you need permission to film on Palm Jumeirah?", a: "Usually yes. Access to the Fronds is controlled, resorts have their own filming policies and often charge location fees, and public areas may still require permission for commercial shoots. We handle these approvals in pre-production." },
      { q: "What is the best time to film villas on the Palm?", a: "Twilight — the short window just after sunset — is the strongest look for villa exteriors, because interior lighting balances against the remaining sky and pools read beautifully. We usually pair a twilight exterior session with a daytime interior session on the same booking." },
    ],
  },

  "dubai/difc": {
    title: "Video Production in DIFC Dubai 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography in DIFC — corporate films, executive portraits, finance sector content and events. Gate Village, Gate Avenue, ICD Brookfield. Free quote in 2 hours.",
    h1: "Video Production in DIFC",
    subtitle: "Dubai's financial district — corporate content held to a higher standard.",
    category: "DIFC",
    intro: [
      "DIFC is the region's financial centre: banks, asset managers, law firms, family offices, fintech and professional services, concentrated across the Gate District, Gate Avenue, Gate Village, ICD Brookfield Place and Central Park Towers. It also holds a serious restaurant and gallery scene that operates alongside the business district.",
      "Content expectations in DIFC are different from the rest of Dubai. The audience is institutional, often international, and frequently regulated — which means production values matter, but restraint matters more. Overproduced content actively damages credibility with this audience.",
      "Backyard Studio Official produces corporate films, executive portraits and interviews, thought-leadership content, event coverage and recruitment films for DIFC firms. We also cover the district's F&B and gallery scene. Filming inside DIFC is managed by the DIFC Authority and requires permits for commercial work in public areas, which we handle in pre-production.",
    ],
    highlights: [
      { heading: "Executive Portraits & Interviews", body: "Partner and executive headshots and interview films for finance, legal and professional services firms — consistent, restrained, and usable across LinkedIn, website and pitch materials." },
      { heading: "Thought-Leadership Content", body: "Market commentary and insight films for asset managers, advisors and consultancies — built for LinkedIn where this audience actually is." },
      { heading: "Corporate & Recruitment Films", body: "Firm films and recruitment content for DIFC businesses competing for regional talent." },
      { heading: "DIFC Events & Galleries", body: "Conference, panel and event coverage across DIFC venues, plus content for the district's restaurants and art galleries." },
    ],
    pricing: [
      { pkg: "Executive Portraits", detail: "Team headshot session in-office", price: "From AED 2,500" },
      { pkg: "Corporate Half-Day", detail: "Interviews, B-roll, firm film", price: "From AED 5,500" },
      { pkg: "Thought-Leadership Series", detail: "Batch-filmed insight films for LinkedIn", price: "From AED 6,500" },
      { pkg: "Event Coverage", detail: "Conference, panel or gala coverage", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Do you need a permit to film in DIFC?", a: "Commercial filming in DIFC public areas is managed by the DIFC Authority and requires a permit. Filming inside a firm's own leased office is generally straightforward, though building management may need notification for equipment access. We handle permits in pre-production and build the lead time in." },
      { q: "How much does corporate video production cost in DIFC?", a: "Executive portrait sessions start from AED 2,500. Corporate half-days start from AED 5,500, thought-leadership series from AED 6,500, and event coverage from AED 3,000. Multi-partner portrait sessions and ongoing content programmes are quoted per engagement." },
      { q: "Can you produce content for regulated financial firms?", a: "Yes. We work to the firm's own compliance and brand requirements, and expect content to go through internal review before publication. Practically, that means building in a review cycle and avoiding claims or comparative language in the edit, which we plan for from the brief stage." },
      { q: "Do you shoot executive headshots for law firms and banks?", a: "Yes, and consistency is the whole point — partners photographed months apart need to look like they belong to the same firm. We use a repeatable lighting setup and shoot in-office so we can return and match earlier sessions exactly." },
      { q: "Can you batch-film thought-leadership content?", a: "Yes, and it is the efficient way to do it. A single half-day with an executive can produce six to ten short insight films, which sustains a LinkedIn content programme for months. Filming one at a time is significantly more expensive per asset." },
      { q: "Do you cover DIFC restaurants and galleries?", a: "Yes. Alongside corporate work we produce content for DIFC's restaurants and art galleries — F&B and interiors content for venues, and exhibition and opening coverage for galleries." },
    ],
  },

  "dubai/al-quoz": {
    title: "Video Production in Al Quoz Dubai 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography in Al Quoz — studio shoots, warehouse and industrial content, product photography and gallery coverage. Alserkal Avenue. Free quote in 2 hours.",
    h1: "Video Production in Al Quoz",
    subtitle: "Dubai's studio and warehouse district — where production actually happens.",
    category: "AL QUOZ",
    intro: [
      "Al Quoz is Dubai's production district. It holds most of the city's film studios, equipment rental houses, post facilities, art galleries and creative warehouses, alongside a genuine industrial base of manufacturing, logistics and automotive businesses. Alserkal Avenue anchors the creative side; Al Quoz Industrial 1 through 4 anchors the working side.",
      "Backyard Studio Official works across both. We produce studio-based content — product photography, controlled-set commercial shoots and interviews — as well as industrial and warehouse content for the manufacturing, logistics and automotive businesses based here, and gallery and exhibition coverage across Alserkal Avenue.",
      "For clients, Al Quoz has a practical advantage: it is where the space is. Product shoots, set builds and vehicle shoots that would be impossible or ruinously expensive in Downtown are straightforward here, and studio and warehouse space is available at a fraction of the cost.",
    ],
    highlights: [
      { heading: "Studio & Product Photography", body: "Controlled-set product photography and commercial shoots in Al Quoz studio space — white-background e-commerce through to full lifestyle sets." },
      { heading: "Industrial & Warehouse Content", body: "Factory, warehouse and logistics content for Al Quoz industrial businesses — filmed with the lighting these low-lit, large-volume spaces require." },
      { heading: "Alserkal Avenue & Galleries", body: "Exhibition, opening and artist content across Alserkal Avenue's galleries and creative spaces." },
      { heading: "Automotive & Vehicle Shoots", body: "Vehicle photography and film in Al Quoz warehouse and studio space — the practical alternative to closing a road." },
    ],
    pricing: [
      { pkg: "Product Photography", detail: "Studio session / white or lifestyle", price: "From AED 2,500" },
      { pkg: "Industrial Film", detail: "Factory or warehouse film + stills", price: "From AED 5,500" },
      { pkg: "Automotive Shoot", detail: "Vehicle photography and film in studio", price: "From AED 4,500" },
      { pkg: "Gallery & Event Coverage", detail: "Exhibition or opening coverage", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Do you have studio space in Al Quoz?", a: "We work with studio and warehouse space across Al Quoz depending on what the shoot needs — a small product setup and a full vehicle shoot have very different requirements. Studio hire is arranged as part of the booking and quoted transparently rather than marked up invisibly." },
      { q: "How much does product photography cost in Al Quoz?", a: "Studio product photography starts from AED 2,500 for a session. Cost depends on product count, whether you need white-background e-commerce shots, lifestyle sets, or both, and how much set building is involved. High-volume catalogue work is priced per SKU." },
      { q: "Can you film in warehouses and factories?", a: "Yes, and Al Quoz industrial businesses are a regular client base. Warehouses are technically demanding — large volumes, low ambient light, mixed colour temperature — so we bring lighting rather than relying on what is installed, and we work to the site's safety requirements." },
      { q: "Do you cover Alserkal Avenue galleries and exhibitions?", a: "Yes. We cover exhibition openings, artist features and gallery content across Alserkal Avenue. Gallery work needs a light touch — minimal intrusion during openings and careful handling of artwork reproduction rights, which we confirm with the gallery." },
      { q: "Can you do automotive shoots in Al Quoz?", a: "Yes. Al Quoz warehouse and studio space is the practical place to shoot vehicles in Dubai — full lighting control, no permits, no road closures, and no heat-haze problems. It is usually both better and cheaper than shooting on location." },
      { q: "Why shoot in Al Quoz rather than Downtown or the Marina?", a: "Space and cost. Al Quoz has the studios, warehouses and equipment houses, no filming permit complexity for indoor work, and dramatically cheaper space. Anything that needs a controlled set — product, automotive, interviews, commercial — is better made here." },
    ],
  },

  "abu-dhabi/personal-branding-photography": {
    title: "Personal Branding Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Abu Dhabi — professionals, entrepreneurs, coaches, executives. LinkedIn, speaker profiles, website portraits. ADGM & Corniche locations. From AED 1,500.",
    h1: "Personal Branding Photography in Abu Dhabi",
    subtitle: "Executives. Entrepreneurs. Coaches. Your professional image in Abu Dhabi's business capital.",
    category: "PERSONAL BRANDING",
    intro: [
      "Abu Dhabi's professional landscape is exceptionally competitive. ADGM-based executives, government officials, Aldar and Mubadala professionals, Saadiyat Island entrepreneurs, and the capital's growing startup and coaching community all compete for visibility in a market where visual presentation shapes professional credibility before a single word is spoken.",
      "Backyard Studio Official produces personal branding photography for Abu Dhabi professionals that translates expertise, authority, and personality into images that work on LinkedIn, speaker profiles, website About pages, and press kits. We run a pre-session brief to understand your audience, your positioning, and what you want people to feel when they see your photo — because the objective isn't just to look professional, it's to look like you.",
    ],
    highlights: [
      { heading: "ADGM & Business District Shoots", body: "Professional portraits in and around Abu Dhabi Global Market, Al Maryah Island, and ADNEC — the visual setting that says 'this person operates at the capital's highest level'." },
      { heading: "Saadiyat & Lifestyle Context", body: "For entrepreneurs and personal brands that want something beyond the corporate portrait — Saadiyat Island's beach clubs, NYU Abu Dhabi campus surroundings, and the Louvre Abu Dhabi environment." },
      { heading: "LinkedIn & Executive Profiles", body: "Professional headshots and environmental portraits for LinkedIn profiles, speaking bios, board profiles, and media kits — images that create instant credibility." },
      { heading: "Brand Story Sessions", body: "Full personal branding sessions covering multiple looks, locations, and contexts — delivering a content bank of images that support an entire quarter of LinkedIn and social media posting." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,500" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / 2 locations / 50 images", price: "From AED 2,800" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 locations / 100 images", price: "From AED 5,000" },
      { pkg: "Brand Day + Social Video", detail: "Photos + 3 x LinkedIn video clips", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Where do you shoot personal branding photography in Abu Dhabi?", a: "Popular personal branding locations in Abu Dhabi include ADGM and Al Maryah Island (for finance and professional services), Saadiyat Island (for creative and entrepreneurial brands), the Corniche (for lifestyle-oriented profiles), and neutral studio environments for clean LinkedIn headshots. We help you choose the right locations for your brand positioning during the pre-session brief." },
      { q: "What is included in a personal branding photography session in Abu Dhabi?", a: "Every session includes a pre-session brief call to align on brand, audience, and visual goals. The shoot covers agreed locations and outfit changes. Delivery includes a curated selection of edited images in standard formats, ready for immediate use on LinkedIn, website, and social media. We provide guidance on image selection and usage for different platforms." },
      { q: "How much does personal branding photography cost in Abu Dhabi?", a: "Personal branding photography in Abu Dhabi starts from AED 1,500 for an executive headshot session covering 1.5 hours and 20 final images. Full personal brand sessions covering multiple looks and locations start from AED 2,800. All-day brand content sessions start from AED 5,000." },
      { q: "How long does it take to receive personal branding photos after the shoot?", a: "Delivery is typically 3–5 business days after the shoot. Rush delivery within 48 hours is available. We provide an online gallery for review and selection, and the final edited images are delivered in web-optimised and high-resolution versions suitable for all platforms and print use." },
    ],
  },

  // ── ABU DHABI — Sprint 14 niches ──────────────────────────────────────────

  "abu-dhabi/headshot-photography": {
    title: "Headshot Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Abu Dhabi — LinkedIn profiles, corporate team days, executive portraits, ADGM and Corniche locations. 48-hour delivery. From AED 900.",
    h1: "Headshot Photography in Abu Dhabi",
    subtitle: "ADGM. Corniche. Government district. Abu Dhabi professionals, professionally represented.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Abu Dhabi's professional market is built on credibility. ADGM executives, government officials, Aldar and Mubadala professionals, Abu Dhabi Chamber members, and the capital's growing entrepreneurial community all operate in an environment where visual professional presentation shapes how seriously you are taken before a single conversation happens. Backyard Studio Official produces professional headshots in Abu Dhabi that communicate the right level of authority, approachability, and credibility for your specific professional context.",
      "We run a brief before every headshot session covering your industry, your target audience, and the platforms where the image will appear. A government consultant in the Abu Dhabi National Exhibition Centre area needs a different image to a creative entrepreneur on Saadiyat Island. We shoot at ADGM, the Corniche, Al Maryah Island, and our studio, and we advise on the right environment for your brand.",
    ],
    highlights: [
      { heading: "ADGM & Al Maryah Island", body: "Abu Dhabi Global Market and the surrounding Al Maryah Island financial district provide corporate architectural backdrops that immediately communicate capital-level professional credibility." },
      { heading: "Corporate Team Days", body: "We set up a portable studio at your Abu Dhabi office and photograph your full team in a single day, delivering consistent professional headshots for website, LinkedIn, and internal directories." },
      { heading: "Government & Semi-Government", body: "Experienced producing headshots for Abu Dhabi government entities, free zone authorities, and semi-government organisations — meeting the visual communication standards of the UAE public sector." },
      { heading: "48-Hour Standard Delivery", body: "Standard headshot delivery in 48 hours. Rush same-day or next-day delivery available for conference speaker profiles, press interviews, or urgent media requirements." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 900" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,800" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 500 / person" },
      { pkg: "Personal Brand Package", detail: "3 hrs / 3 looks / 40 images / social media ready", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Abu Dhabi?", a: "We shoot at ADGM and Al Maryah Island for finance and professional services contexts, the Corniche for lifestyle-oriented professional profiles, Saadiyat Island for creative and entrepreneurial brands, and our studio for clean seamless background headshots. We advise on location based on your industry and how the images will be used." },
      { q: "Do you do corporate team headshot days in Abu Dhabi?", a: "Yes. We set up a portable studio at your Abu Dhabi office and photograph your full team systematically, delivering consistent professional headshots for the entire organisation. We have produced team headshot days for government entities, free zone companies, banks, and professional services firms across Abu Dhabi." },
      { q: "How quickly do you deliver headshots in Abu Dhabi?", a: "Standard delivery is 48 hours from the shoot date. Rush delivery within 24 hours is available for urgent conference, media, or PR deadlines at an additional fee." },
      { q: "How much does a professional headshot cost in Abu Dhabi?", a: "Individual headshot sessions start from AED 900 for 90 minutes delivering 10 to 15 edited images. Executive sessions from AED 1,800. Corporate team days from AED 500 per person with a minimum session fee." },
    ],
  },

  "abu-dhabi/newborn-photography": {
    title: "Newborn Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Abu Dhabi — posed studio sessions and in-home lifestyle photography for UAE families. Safe, gentle, experienced team. From AED 1,800.",
    h1: "Newborn Photography in Abu Dhabi",
    subtitle: "The first days. Before they change.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "Newborn photography captures the specific physical reality of the first two weeks of a child's life — the way babies curl naturally, the size of their hands, the particular softness of that first fortnight that passes faster than memory can keep pace with. Backyard Studio Official produces newborn photography for Abu Dhabi families in both posed studio sessions and in-home lifestyle formats, with safety as the non-negotiable first principle of every session.",
      "Abu Dhabi's expatriate community has a strong relationship with newborn photography — families living in the capital who are far from extended family networks find that professional newborn documentation gives grandparents and relatives abroad their first meaningful connection to a new child. We take this dimension of our work seriously in both the quality of the images we produce and the care we bring to the session itself.",
    ],
    highlights: [
      { heading: "Posed Studio Sessions (5–14 Days)", body: "The classic posed newborn aesthetic: sleeping baby in wraps and props, professional studio lighting, neutral backgrounds. We work at the baby's pace with no time pressure and unlimited settling breaks." },
      { heading: "In-Home Lifestyle Sessions", body: "We travel to your Abu Dhabi home and document your baby in your family environment — the nursery you prepared, the natural light in your space, the family together. Documentary imagery that studio sessions cannot replicate." },
      { heading: "Safety First", body: "All sessions follow established safe posing protocols. A parent is present throughout every session. We never compromise a baby's comfort for a photograph." },
      { heading: "Sibling and Family Portraits", body: "Parents and existing children included within the same session — the interactions between siblings and new baby produce some of the most meaningful images in newborn photography." },
    ],
    pricing: [
      { pkg: "Studio Newborn", detail: "2–4 hrs / wraps + props / 20 edited images", price: "From AED 1,800" },
      { pkg: "Premium Studio", detail: "Full session / family + siblings / 35 images", price: "From AED 2,800" },
      { pkg: "In-Home Lifestyle", detail: "90 min / natural light / 25 images", price: "From AED 2,200" },
      { pkg: "Studio + In-Home Combo", detail: "Both sessions / complete documentation", price: "From AED 3,800" },
    ],
    faqs: [
      { q: "When should I book a newborn photographer in Abu Dhabi?", a: "Book during your second trimester to secure dates around your due date. We hold provisional dates and confirm once the baby arrives. The ideal shoot window for posed sessions is 5 to 14 days after birth." },
      { q: "Is newborn photography safe for my baby?", a: "Yes, when performed by trained photographers following safe posing protocols. Our newborn photographers hold specialist training. We never attempt unsafe poses, and a parent is present throughout every session. Temperature and environment are managed throughout." },
      { q: "How long does a newborn session take in Abu Dhabi?", a: "Studio sessions run 2 to 4 hours — working entirely at the baby's pace with breaks for feeding and settling. We never rush. In-home lifestyle sessions run 90 minutes to 2 hours." },
      { q: "How much does newborn photography cost in Abu Dhabi?", a: "Studio sessions start from AED 1,800 delivering 20 edited images. Premium sessions including siblings and family from AED 2,800. In-home lifestyle sessions from AED 2,200. Studio and in-home combination packages from AED 3,800." },
    ],
  },

  "abu-dhabi/maternity-photography": {
    title: "Maternity Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Abu Dhabi for elegant bump shoots, Saadiyat beach sessions, Corniche photography and studio portraits. From AED 1,500.",
    h1: "Maternity Photography in Abu Dhabi",
    subtitle: "Saadiyat. Corniche. Desert. Abu Dhabi bump photography at its most beautiful.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Abu Dhabi's maternity photography environments are genuinely distinctive. Saadiyat Island's beaches — white sand, calm turquoise water, and some of the most beautiful natural light in the UAE — produce maternity images that look editorial in quality. The Corniche at golden hour delivers a long, open coastal backdrop with the Abu Dhabi skyline. The desert outside the city provides the same dramatic dune landscape as Dubai but with fewer crowds and easier access. We use all of these environments depending on the aesthetic the client wants and the time of year.",
      "The ideal timing for a maternity shoot is 28 to 34 weeks of pregnancy. We recommend booking during the second trimester to secure preferred outdoor slots during Abu Dhabi's excellent cooler season from October through April. Summer sessions are possible at sunrise before temperatures rise.",
    ],
    highlights: [
      { heading: "Saadiyat Island Beach Sessions", body: "Saadiyat's beaches are among the most beautiful in the UAE — white sand, calm water, and extraordinary natural light at sunrise and golden hour. A standout location for maternity photography that produces genuinely special imagery." },
      { heading: "Corniche Golden Hour", body: "The Abu Dhabi Corniche offers a long open coastal promenade with the city skyline as backdrop — a beautiful and distinctly Abu Dhabi setting for maternity photography at sunset." },
      { heading: "Desert Sessions", body: "The desert areas outside Abu Dhabi at golden hour provide the same dramatic dune landscape and extraordinary light as Dubai's desert sessions, with excellent access and fewer competing productions." },
      { heading: "Studio Sessions", body: "Year-round availability regardless of season or weather. Professional lighting, private comfortable environment, and a wardrobe of maternity gowns available to borrow." },
    ],
    pricing: [
      { pkg: "Outdoor Session", detail: "90 min / 1 location / 20–25 edited images", price: "From AED 1,500" },
      { pkg: "Studio Session", detail: "90 min / controlled light / gown wardrobe", price: "From AED 1,800" },
      { pkg: "Premium Outdoor", detail: "2.5 hrs / 2 locations / outfit change / 40 images", price: "From AED 2,500" },
      { pkg: "Saadiyat Beach Session", detail: "Golden hour / 2 hrs / 35 images", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "What are the best maternity photography locations in Abu Dhabi?", a: "Saadiyat Island beach for white sand and extraordinary natural light; the Corniche at golden hour for coastal skyline imagery; the desert outside Abu Dhabi for dramatic dune backdrops; and our studio for controlled indoor portrait sessions. We advise on location based on your preferred aesthetic and the time of year." },
      { q: "When is the best time for a maternity shoot in Abu Dhabi?", a: "28 to 34 weeks of pregnancy. Book during your second trimester to secure preferred outdoor slots. Cooler months October through April are ideal for outdoor sessions. Summer sunrise sessions (5:30 to 7:00am) are also available." },
      { q: "Can my partner and children join the maternity shoot?", a: "Yes. We include partners and existing children in maternity sessions. We structure the shoot to work at a pace that suits young children — covering the most active participants first and moving to individual portraits once they have finished." },
      { q: "How much does maternity photography cost in Abu Dhabi?", a: "Outdoor sessions from AED 1,500. Saadiyat beach and premium outdoor sessions from AED 2,500. Studio sessions from AED 1,800. All sessions include an online gallery with high-resolution downloads." },
    ],
  },

  "abu-dhabi/fashion-photography": {
    title: "Fashion Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Abu Dhabi for editorial shoots, e-commerce, lookbooks and brand campaigns. Saadiyat, Louvre Abu Dhabi, desert and studio locations. From AED 3,500.",
    h1: "Fashion Photography in Abu Dhabi",
    subtitle: "Saadiyat. Louvre Abu Dhabi. Desert. Abu Dhabi fashion photography at international standard.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Abu Dhabi offers fashion photography environments that are visually distinct from Dubai and genuinely competitive with international production locations. The Louvre Abu Dhabi's Jean Nouvel architecture provides a unique geometric backdrop for fashion editorial. Saadiyat Island's beaches deliver white-sand coastal imagery that most fashion markets cannot access. The desert and Eastern Mangroves provide dramatic natural environments. Backyard Studio Official produces fashion photography in Abu Dhabi for regional and international fashion brands that want something visually distinctive.",
      "We produce editorial fashion photography, e-commerce model photography, lookbook and campaign content, and model portfolio work. Our production approach covers the full creative process — brief to delivery — as a single integrated service, including model sourcing from Abu Dhabi and Dubai agencies, styling coordination, and post-production retouching.",
    ],
    highlights: [
      { heading: "Louvre Abu Dhabi Architecture", body: "Jean Nouvel's iconic geometric dome and surrounding waterfront provide fashion photography backdrops that are visually unique and immediately associated with cultural credibility." },
      { heading: "Saadiyat Island Beach", body: "Pristine white sand beaches and turquoise water produce coastal fashion imagery comparable to the world's best beach production locations." },
      { heading: "Eastern Mangroves & Desert", body: "Abu Dhabi's mangrove waterways and desert edges provide natural editorial environments that create visually striking fashion content unlike anything available in urban production." },
      { heading: "Full Production Management", body: "Brief to delivery: model casting from Abu Dhabi and Dubai agencies, styling coordination, location management, photography, and post-production retouching handled as a single service." },
    ],
    pricing: [
      { pkg: "Half-Day Shoot", detail: "Photographer + assistant / 1 location", price: "From AED 3,500" },
      { pkg: "Full Production Day", detail: "Crew / location / post-production included", price: "From AED 6,000" },
      { pkg: "E-Commerce Day Rate", detail: "Model photography / per-outfit pricing", price: "From AED 5,000 / day" },
      { pkg: "Campaign Production", detail: "Multi-day / full crew / model + styling", price: "On request" },
    ],
    faqs: [
      { q: "What fashion photography locations are available in Abu Dhabi?", a: "Louvre Abu Dhabi and Saadiyat Cultural District for architectural editorial; Saadiyat Island beach for coastal fashion; Eastern Mangroves for natural dramatic environments; the Corniche and Al Maryah Island for urban contemporary imagery; and studio environments for clean e-commerce photography. Location is selected based on the brand aesthetic and collection." },
      { q: "Can you source models for fashion shoots in Abu Dhabi?", a: "Yes. We work with modelling agencies in both Abu Dhabi and Dubai and can source talent appropriate for your campaign brief. We manage model bookings, fees, and scheduling as part of our full production service." },
      { q: "Do you produce e-commerce fashion photography in Abu Dhabi?", a: "Yes. We produce high-volume consistent model photography for fashion retail brands — meeting the technical requirements for online marketplaces and brand websites. E-commerce day rates start from AED 5,000." },
      { q: "How much does fashion photography cost in Abu Dhabi?", a: "Half-day shoots start from AED 3,500. Full production days from AED 6,000. E-commerce model photography from AED 5,000 per day. Campaign productions with full crew are quoted per project." },
    ],
  },

  "abu-dhabi/social-media-content": {
    title: "Social Media Content Creation in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Social media content production in Abu Dhabi — Instagram Reels, TikTok, LinkedIn video, brand campaigns. Monthly packages for UAE businesses and creators. From AED 2,500.",
    h1: "Social Media Content Creation in Abu Dhabi",
    subtitle: "Instagram. TikTok. LinkedIn. Abu Dhabi brands and creators, consistently showing up.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Abu Dhabi's business and hospitality landscape is generating significant demand for professional social media content. Government entities, Saadiyat Island hospitality brands, ADGM-based financial services firms, Yas Island entertainment brands, and a growing community of Abu Dhabi-based entrepreneurs and content creators all need a consistent flow of professional photography and video content across Instagram, TikTok, and LinkedIn.",
      "Backyard Studio Official produces social media content for Abu Dhabi businesses and creators — delivering photo and video in the same sessions, working to platform-specific formats, and providing monthly retainer packages for clients who need consistent content output without managing separate shoots each month.",
    ],
    highlights: [
      { heading: "Instagram & TikTok Reels", body: "Short-form vertical video produced natively for TikTok and Instagram Reels algorithms. We shoot in vertical format, direct on-camera talent, and deliver platform-ready files with fast turnaround." },
      { heading: "Hospitality & F&B Content", body: "Abu Dhabi's hotel restaurants, Saadiyat beach clubs, and Yas Bay F&B brands are a core part of our social media content work — food photography, chef reels, guest experience content, and seasonal campaign material." },
      { heading: "Monthly Content Retainers", body: "Regular shoot sessions producing a rolling bank of content for Abu Dhabi businesses who need consistent social media output without managing individual shoot days every month." },
      { heading: "Government & Corporate Social", body: "LinkedIn and professional social media content for Abu Dhabi government entities, free zone companies, and professional services brands — content that builds institutional credibility." },
    ],
    pricing: [
      { pkg: "Half-Day Content Shoot", detail: "Photo + Reels / 1–2 platforms", price: "From AED 2,500" },
      { pkg: "Full-Day Content Sprint", detail: "Multi-platform / photo + video / 3+ deliverables", price: "From AED 4,500" },
      { pkg: "Creator Monthly Retainer", detail: "2 sessions / month / consistent content bank", price: "From AED 2,500 / mo" },
      { pkg: "Brand Monthly Retainer", detail: "4 sessions / month / multi-platform / strategy", price: "From AED 4,000 / mo" },
    ],
    faqs: [
      { q: "What social media content do you produce in Abu Dhabi?", a: "Instagram Reels, TikTok videos, YouTube Shorts, LinkedIn video content, Instagram static posts and carousels, Stories content, and brand campaign content. We produce both photography and video in the same sessions to maximise output per shoot day." },
      { q: "Do you offer monthly social media content packages in Abu Dhabi?", a: "Yes. Monthly retainer packages cover 2 to 4 shoot sessions per month producing a rolling content bank. Creator retainers start from AED 2,500 per month. Brand retainers covering multi-platform output start from AED 4,000 per month." },
      { q: "Can you produce content for Abu Dhabi hotels and hospitality brands?", a: "Yes. Hotel F&B, beach club, and hospitality social media content is a major part of our Abu Dhabi production work. We produce Instagram and TikTok content for Saadiyat Island properties, Yas Bay venues, Corniche hotels, and hospitality brands across the emirate." },
      { q: "How much does social media content creation cost in Abu Dhabi?", a: "Half-day content shoots start from AED 2,500. Full-day multi-platform content sprints from AED 4,500. Monthly creator retainers from AED 2,500 per month. Brand retainers from AED 4,000 per month." },
    ],
  },

  "abu-dhabi/birthday-photography": {
    title: "Birthday Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Abu Dhabi for kids parties, milestone birthdays, private celebrations and styled shoots. Hotels, beach clubs, private venues. From AED 1,200.",
    h1: "Birthday Photography in Abu Dhabi",
    subtitle: "Kids parties. Milestone birthdays. Private celebrations. Abu Dhabi moments documented.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday photography in Abu Dhabi covers both event documentation and styled milestone shoots. For parties and celebrations — kids birthdays at Abu Dhabi hotel venues, beach clubs on Saadiyat or Yas Island, or private villa events — we provide event coverage that captures the genuine moments: the setup before guests arrive, the celebration arc, the cake, the interactions that parents actually want to remember. For milestone birthdays, we produce styled photography sessions at Abu Dhabi's most beautiful locations.",
      "We are experienced with the logistics of birthday events across Abu Dhabi's hotel and venue landscape, coordinating with event managers to ensure coverage access and timing are confirmed before the day. For styled milestone shoots, we use Saadiyat beach, the Corniche, the Al Ain Road desert approaches, and other locations based on the birthday person's aesthetic preferences.",
    ],
    highlights: [
      { heading: "Kids Party Coverage", body: "We arrive early to document setup, cover the full party arc, and capture the genuine moments that make children's birthday photography meaningful — the expressions, the games, the interactions — at Abu Dhabi hotel and venue events." },
      { heading: "Milestone Birthday Shoots", body: "Styled photography sessions for 18th, 21st, 30th, 40th, and 50th birthdays at Abu Dhabi's best locations — Saadiyat beach at golden hour, Corniche sunset, desert landscape, or heritage environments in Al Ain." },
      { heading: "Hotel & Beach Club Events", body: "Experienced with Abu Dhabi's major venue and hospitality event environments — Saadiyat Island beach clubs, Yas Island venues, Corniche hotels, and private villa properties across the emirate." },
      { heading: "Same-Day Sneak Peek", body: "15 highlight images delivered within 6 hours of the event for immediate social media sharing. Full gallery in 3 to 5 business days." },
    ],
    pricing: [
      { pkg: "Party Coverage", detail: "2 hrs / 50–80 edited images / digital gallery", price: "From AED 1,200" },
      { pkg: "Full Event Coverage", detail: "3–4 hrs / reception to cake cutting", price: "From AED 1,800" },
      { pkg: "Milestone Birthday Shoot", detail: "90 min / styled / 2 locations / 30 images", price: "From AED 1,500" },
      { pkg: "Party + Same-Day Sneak Peek", detail: "Coverage + 15 highlights within 6 hrs", price: "From AED 1,800" },
    ],
    faqs: [
      { q: "Do you photograph kids birthday parties in Abu Dhabi?", a: "Yes. We photograph children's birthday parties at Abu Dhabi hotels, beach clubs on Saadiyat and Yas Island, private villa venues, and home parties across the emirate. We are experienced in the fast-moving environment of children's parties and focus on capturing genuine moments." },
      { q: "Can you do a milestone birthday shoot in Abu Dhabi?", a: "Yes. We produce styled milestone birthday photography sessions at Abu Dhabi's most visually striking locations — Saadiyat Island beach at golden hour, the Corniche at sunset, desert landscape, and heritage environments. Sessions run 90 minutes to 2 hours with outfit changes and 2 locations." },
      { q: "How quickly do you deliver birthday photos in Abu Dhabi?", a: "Standard delivery is 3 to 5 business days. Same-day sneak peek of 15 highlights within 6 hours is available as an add-on. Rush full delivery within 24 hours is available at an additional fee." },
      { q: "How much does a birthday photographer cost in Abu Dhabi?", a: "Party coverage starts from AED 1,200 for 2 hours. Full event coverage from AED 1,800. Milestone birthday shoots from AED 1,500. Same-day sneak peek add-on from AED 300." },
    ],
  },

  "abu-dhabi/kids-photography": {
    title: "Kids Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Abu Dhabi for family portraits, kids sessions, sibling photography and school-age portraits. Saadiyat, Corniche, studio locations. From AED 1,200.",
    h1: "Kids Photography in Abu Dhabi",
    subtitle: "Toddlers to teens. Genuine moments, not forced poses.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Children's photography in Abu Dhabi requires patience, flexibility, and an approach built around the child rather than a rigid session plan. Backyard Studio Official photographs children of all ages in Abu Dhabi — from babies through to teenagers — with a consistent philosophy: we work with the child's energy and natural behaviour rather than trying to make them perform for the camera. The best children's images are always the genuine, unguarded moments, and creating the conditions for those moments to happen is what we focus on.",
      "Abu Dhabi's beach and outdoor environments work exceptionally well for children's photography. Saadiyat Island beach gives children space to run, play, and move naturally. The Corniche parks provide green outdoor context. The Eastern Mangroves offer a distinctive natural environment unlike anything in Dubai. We use these environments alongside studio sessions for families who want a range of imagery styles.",
    ],
    highlights: [
      { heading: "Saadiyat Beach Sessions", body: "White sand, clear water, and extraordinary natural light. Saadiyat Island beach gives children space to move naturally and produces beautiful, spontaneous imagery that studio sessions cannot replicate." },
      { heading: "Corniche & Park Sessions", body: "Abu Dhabi's Corniche parks and waterfront gardens offer green outdoor environments for children's photography — a visual contrast to the city's predominantly architectural landscape." },
      { heading: "Patient, Child-Led Approach", body: "We spend the first part of every session building rapport before picking up a camera. Sessions are paced around the child's energy, not a fixed schedule. We never rush or force a moment." },
      { heading: "Family & Sibling Sessions", body: "Parents and siblings included at no additional charge up to 4 family members. We structure sessions to get the best from young children — active outdoor phases for children, then quieter portrait time for parents." },
    ],
    pricing: [
      { pkg: "Kids Session", detail: "60 min / outdoor / 20–30 edited images", price: "From AED 1,200" },
      { pkg: "Family Session", detail: "90 min / kids + parents / 35 images", price: "From AED 1,800" },
      { pkg: "Studio Portrait", detail: "60 min / studio / 15 final images", price: "From AED 1,500" },
      { pkg: "Toddler Mini Session", detail: "45 min / child-paced / 15 images", price: "From AED 950" },
    ],
    faqs: [
      { q: "What locations do you use for children's photography in Abu Dhabi?", a: "Saadiyat Island beach for natural outdoor imagery with space for children to move; Corniche parks and waterfront for green outdoor context; Eastern Mangroves for a distinctive natural environment; and our studio for controlled portrait sessions. Location is chosen based on the children's ages and the family's preferred aesthetic." },
      { q: "How do you approach photographing young children in Abu Dhabi?", a: "We give children something to do rather than asking them to pose. We engage at their level, use activities and props that draw natural interest, and capture what happens rather than directing what should happen. The first 5 to 10 minutes of every session are rapport-building before we pick up a camera." },
      { q: "How long should a children's photography session in Abu Dhabi be?", a: "45 to 60 minutes for toddlers; 60 to 90 minutes for school-age children; 90 minutes to 2 hours for family sessions including parents and multiple children. We work flexibly around the child's energy rather than adhering to a rigid schedule." },
      { q: "How much does kids photography cost in Abu Dhabi?", a: "Children's outdoor sessions start from AED 1,200 for 60 minutes delivering 20 to 30 edited images. Family sessions from AED 1,800. Toddler mini sessions from AED 950. Studio portraits from AED 1,500." },
    ],
  },

  "abu-dhabi/engagement-photography": {
    title: "Engagement Photography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Abu Dhabi for pre-wedding couple shoots, proposal photography and anniversary sessions. Saadiyat, desert, Corniche and Louvre AD locations. From AED 2,000.",
    h1: "Engagement Photography in Abu Dhabi",
    subtitle: "Saadiyat beach. Desert dunes. Louvre Abu Dhabi. Couple photography in the UAE's capital.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Abu Dhabi offers engagement photography environments that are visually distinct from Dubai and genuinely extraordinary. Saadiyat Island's white sand beaches produce couple photography with a coastal quality that is unmatched in the UAE. The Louvre Abu Dhabi's Jean Nouvel architecture provides a backdrop that is simultaneously modern and culturally significant. The desert outside Abu Dhabi at golden hour delivers the same extraordinary dune light as Dubai's desert sessions but with less competition for shooting space. The Corniche at sunset offers a long open vista with the Abu Dhabi skyline.",
      "We work with couples across all backgrounds and nationalities in Abu Dhabi — from Emirati couples to international expats, and couples who have travelled specifically for an Abu Dhabi engagement shoot. Our approach to couple photography is built on direction and comfort rather than rigid posing: we spend the first part of every session helping couples relax before we start working toward the images that matter.",
    ],
    highlights: [
      { heading: "Saadiyat Island Beach", body: "Abu Dhabi's most beautiful beach environment — white sand, calm clear water, extraordinary natural light. One of the UAE's best engagement photography locations, with a different aesthetic to Dubai's beach sessions." },
      { heading: "Louvre Abu Dhabi", body: "Jean Nouvel's iconic geometric architecture and the surrounding Saadiyat Cultural District provide a visually unique backdrop for engagement photography that communicates cultural sophistication." },
      { heading: "Desert Golden Hour", body: "The desert approaches outside Abu Dhabi at golden hour produce the same amber dune light and dramatic scale as Dubai's desert sessions — with more solitude and less competing production activity." },
      { heading: "Proposal Photography", body: "We position covertly at the proposal location in advance to capture the genuine proposal moment and immediate reaction. Close pre-event coordination with the proposing partner." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 2,000" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 3,000" },
      { pkg: "Saadiyat Beach Session", detail: "2 hrs / golden hour / 40 images", price: "From AED 2,500" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Abu Dhabi?", a: "Saadiyat Island beach for white-sand coastal imagery; Louvre Abu Dhabi and the Saadiyat Cultural District for architectural editorial; the Corniche at golden hour for skyline couple photography; the desert outside Abu Dhabi for dramatic dune backdrops; and Eastern Mangroves for a unique natural environment. We advise based on the couple's aesthetic preferences." },
      { q: "When should we book an engagement shoot in Abu Dhabi?", a: "Book 2 to 4 months in advance, particularly for golden-hour beach and desert slots during Abu Dhabi's cooler months from October through April. Summer outdoor sessions are only practical at sunrise. Indoor and studio options are available year-round." },
      { q: "Do you photograph proposals in Abu Dhabi?", a: "Yes. We position covertly at the proposal location in advance and capture the genuine moment and immediate reaction. All timing and positioning is coordinated through close communication with the proposing partner. Popular proposal locations — Saadiyat beach, Louvre AD waterfront — should be booked well in advance." },
      { q: "How much does engagement photography cost in Abu Dhabi?", a: "Single-location sessions start from AED 2,000. Two-location sessions from AED 3,000. Saadiyat beach golden-hour sessions from AED 2,500. Proposal photography from AED 2,500." },
    ],
  },

  // ── ABU DHABI AREAS ───────────────────────────────────────────────────────

  "abu-dhabi/yas-island": {
    title: "Video Production on Yas Island 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography on Yas Island Abu Dhabi — events at Etihad Arena, Yas Marina Circuit, theme parks, hotels and conferences. Free quote in 2 hours.",
    h1: "Video Production on Yas Island",
    subtitle: "Etihad Arena. Yas Marina Circuit. Abu Dhabi's entertainment engine.",
    category: "YAS ISLAND",
    intro: [
      "Yas Island is the UAE's densest concentration of large-scale entertainment infrastructure: Yas Marina Circuit and the Abu Dhabi Grand Prix, Etihad Arena, Ferrari World, Warner Bros. World, Yas Waterworld, SeaWorld Abu Dhabi, Yas Mall and a full strip of hotels built to service them.",
      "That makes it an events district first and foremost. Backyard Studio Official covers Yas Island for conference and exhibition coverage at Etihad Arena and the hotel ballrooms, motorsport and track content at Yas Marina Circuit, hospitality and F&B content across the island's hotels, and brand activations at the theme parks and Yas Bay waterfront.",
      "Yas is also the most access-controlled district we work in. Every venue here — circuit, arena, parks, hotels — is a managed property with its own filming policy, accreditation process and often its own media rates. Nothing gets shot on Yas Island by turning up; it gets shot by arranging it properly in advance, which is exactly what we do in pre-production.",
    ],
    highlights: [
      { heading: "Etihad Arena & Conferences", body: "Multi-camera coverage of conferences, exhibitions, awards and live events at Etihad Arena and Yas hotel ballrooms." },
      { heading: "Yas Marina Circuit", body: "Track day, race weekend and motorsport content at the circuit, filmed within race control's permitted positions." },
      { heading: "Hotel & Hospitality", body: "Rooms, F&B, facilities and event content across the Yas hotel cluster and Yas Bay waterfront venues." },
      { heading: "Brand Activations", body: "Activation and campaign content at Ferrari World, Warner Bros. World, Yas Waterworld and Yas Mall, arranged through venue media teams." },
    ],
    pricing: [
      { pkg: "Event Coverage", detail: "Conference, exhibition or arena event", price: "From AED 3,000" },
      { pkg: "Multi-Camera Conference", detail: "3+ cameras, full-day, edited recap", price: "From AED 7,500" },
      { pkg: "Hotel Content Package", detail: "Rooms, F&B, facilities — photo + video", price: "From AED 6,500" },
      { pkg: "Motorsport Day", detail: "Trackside, pit and paddock coverage", price: "From AED 5,500" },
    ],
    faqs: [
      { q: "Do you cover events at Etihad Arena?", a: "Yes. We cover conferences, exhibitions, awards nights and live events at Etihad Arena, typically with multi-camera coverage plus stills. Arena events require accreditation through the venue and the event organiser, which we arrange before the date — camera positions and rigging are agreed with the venue in advance." },
      { q: "How much does video production on Yas Island cost?", a: "Event coverage starts from AED 3,000, full-day multi-camera conference coverage from AED 7,500, hotel content packages from AED 6,500, and motorsport days from AED 5,500. Yas venues sometimes charge their own media or location fees, which are additional and identified upfront." },
      { q: "Can you film at Yas Marina Circuit?", a: "Yes, subject to the circuit's accreditation and safety process. Trackside access is tightly controlled and major events may carry exclusive broadcast rights that limit third-party filming, so we confirm permitted positions with race control and the organiser before the day." },
      { q: "Do you need permission to film on Yas Island?", a: "Almost always, yes. Yas is made up of managed properties — the circuit, Etihad Arena, the theme parks, the hotels, Yas Mall — and each has its own filming policy and approval route. We handle these approvals in pre-production and build the lead time into the schedule." },
      { q: "Can you cover theme park brand activations?", a: "Yes. Activations at Ferrari World, Warner Bros. World, Yas Waterworld and SeaWorld are arranged through each park's media and marketing team. Park filming usually has constraints on guest visibility and ride access, which we plan around." },
      { q: "Do you cover Yas Bay and the waterfront venues?", a: "Yes. Yas Bay's restaurants, waterfront promenade and Etihad Arena precinct are all part of our Yas coverage — F&B content, venue films and event work." },
    ],
  },

  "abu-dhabi/saadiyat-island": {
    title: "Video Production on Saadiyat Island 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography on Saadiyat Island Abu Dhabi — Louvre Abu Dhabi district, luxury resorts, cultural venues, weddings and beach content. Free quote in 2 hours.",
    h1: "Video Production on Saadiyat Island",
    subtitle: "Louvre Abu Dhabi. Cultural District. The UAE's most architectural address.",
    category: "SAADIYAT ISLAND",
    intro: [
      "Saadiyat Island is Abu Dhabi's cultural and luxury district — the Louvre Abu Dhabi, the Saadiyat Cultural District, NYU Abu Dhabi, Manarat Al Saadiyat, and a run of beachfront resorts including the St. Regis, Park Hyatt, Rixos, Jumeirah and Saadiyat Rotana, set against one of the last stretches of natural white-sand beach in the UAE.",
      "Backyard Studio Official covers Saadiyat for luxury hospitality content, weddings, cultural and exhibition coverage, editorial and fashion shoots, and property content across the island's villa and apartment developments.",
      "Saadiyat's defining production quality is architectural. The Louvre's dome, Manarat Al Saadiyat and the Cultural District buildings are among the most photogenic structures in the region, and the natural beach gives a genuinely different look from Dubai's engineered coastline. Filming near the cultural institutions requires their permission and is generally restricted around exhibitions, which we clear in advance.",
    ],
    highlights: [
      { heading: "Luxury Resort Content", body: "Rooms, suites, beach, F&B and spa content across the St. Regis, Park Hyatt, Rixos, Jumeirah and Saadiyat Rotana properties." },
      { heading: "Saadiyat Weddings", body: "Beach and resort wedding coverage on the island's white-sand frontage — including all-female crews for gender-separated ceremonies." },
      { heading: "Cultural & Architectural", body: "Exhibition, gallery and architectural content around the Louvre Abu Dhabi district and Manarat Al Saadiyat, arranged with venue permission." },
      { heading: "Editorial & Fashion", body: "Fashion and editorial shoots using the natural beach and Cultural District architecture — a genuinely distinct look from Dubai." },
    ],
    pricing: [
      { pkg: "Resort Content Package", detail: "Rooms, F&B, beach, facilities", price: "From AED 8,000" },
      { pkg: "Wedding — Silver", detail: "2 photographers + 2 videographers / half day", price: "From AED 15,500" },
      { pkg: "Editorial / Fashion Shoot", detail: "Half-day shoot / location + studio", price: "From AED 4,500" },
      { pkg: "Event Coverage", detail: "Resort or cultural venue event", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Can you film at the Louvre Abu Dhabi?", a: "Filming at the Louvre Abu Dhabi requires the museum's own permission, and it is generally restricted — particularly inside galleries and around active exhibitions. Exterior and public-plaza filming may be possible with approval. We apply through the museum's media team in advance rather than assuming access." },
      { q: "How much does video production on Saadiyat Island cost?", a: "Resort content packages start from AED 8,000, wedding coverage from AED 15,500 for the Silver package, editorial and fashion shoots from AED 4,500, and event coverage from AED 3,000. Resort location fees, where they apply, are additional and confirmed upfront." },
      { q: "Do you cover weddings on Saadiyat beach?", a: "Yes. Saadiyat's natural white-sand beach and resort venues are among the strongest wedding locations in the UAE. We cover weddings at the St. Regis, Park Hyatt, Rixos, Jumeirah and Saadiyat Rotana, and can provide fully all-female crews for gender-separated ceremonies." },
      { q: "Is Saadiyat better than Dubai for beach shoots?", a: "For a natural-coastline look, yes. Saadiyat has genuine undeveloped white-sand beach, whereas most of Dubai's accessible coastline is engineered and considerably busier. For editorial, wedding and lifestyle work where you want clean sand and open horizon, Saadiyat is the stronger choice." },
      { q: "Do you need a permit to film on Saadiyat Island?", a: "It depends on location. Resort property requires the hotel's permission and sometimes a location fee. The Cultural District and museum areas require institutional approval. Public beach areas may still need permission for commercial filming. We establish which applies before the shoot." },
      { q: "Can you shoot architectural content in the Cultural District?", a: "Yes, subject to approval. The Louvre's dome, Manarat Al Saadiyat and the district's buildings are exceptional architectural subjects. Exterior architectural work is generally more achievable than interior, and we arrange permissions through the relevant institution." },
    ],
  },

  "abu-dhabi/al-maryah-island": {
    title: "Video Production in Al Maryah Island & ADGM 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography on Al Maryah Island Abu Dhabi — ADGM financial district, corporate films, executive portraits, Galleria Mall and conference coverage.",
    h1: "Video Production on Al Maryah Island",
    subtitle: "ADGM. Abu Dhabi's financial centre — corporate content at institutional standard.",
    category: "AL MARYAH ISLAND",
    intro: [
      "Al Maryah Island is Abu Dhabi's financial and business centre, home to Abu Dhabi Global Market (ADGM), the Abu Dhabi Securities Exchange, Cleveland Clinic Abu Dhabi, Rosewood and Four Seasons hotels, and The Galleria Al Maryah Island.",
      "The client base here is institutional — banks, asset managers, sovereign-linked entities, law firms, healthcare and professional services. Content expectations follow: high production values, restrained presentation, and internal compliance review before anything publishes. Overproduced content actively costs credibility with this audience.",
      "Backyard Studio Official produces corporate films, executive portraits and interviews, thought-leadership content, conference and event coverage, and healthcare content for Cleveland Clinic-adjacent practices. We also cover The Galleria's retail and F&B tenants and the island's hotel properties.",
    ],
    highlights: [
      { heading: "Executive Portraits & Interviews", body: "Board and executive portraits and interview films for ADGM-registered firms, shot in-office to a repeatable standard." },
      { heading: "Corporate & Institutional Films", body: "Firm films, annual review content and thought-leadership pieces for financial and professional services clients." },
      { heading: "Conference & Event Coverage", body: "Multi-camera coverage of conferences, panels and institutional events at ADGM venues and island hotels." },
      { heading: "Healthcare & Retail", body: "Healthcare content around the Cleveland Clinic cluster, plus retail and F&B content for Galleria tenants." },
    ],
    pricing: [
      { pkg: "Executive Portraits", detail: "Team or board headshot session in-office", price: "From AED 2,500" },
      { pkg: "Corporate Half-Day", detail: "Interviews, B-roll, firm film", price: "From AED 5,500" },
      { pkg: "Conference Coverage", detail: "Multi-camera, full day, edited recap", price: "From AED 7,500" },
      { pkg: "Thought-Leadership Series", detail: "Batch-filmed insight films", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Do you produce content for ADGM-registered firms?", a: "Yes. We work with financial and professional services firms across ADGM on corporate films, executive portraits, thought-leadership content and event coverage. We expect content to pass through internal compliance review and plan for that cycle from the brief onward." },
      { q: "How much does corporate video production cost on Al Maryah Island?", a: "Executive portrait sessions start from AED 2,500, corporate half-days from AED 5,500, thought-leadership series from AED 6,500, and full-day multi-camera conference coverage from AED 7,500." },
      { q: "Can you work within financial-sector compliance requirements?", a: "Yes. Practically that means avoiding performance claims and comparative language in the edit, keeping disclaimers where required, and building a review cycle into the timeline. We are a production company rather than a compliance advisor, so your own compliance team signs off before publication." },
      { q: "Do you shoot executive and board portraits?", a: "Yes, and consistency matters most here — executives photographed months apart must look like the same firm. We use a repeatable lighting setup, shoot in-office, and can return to match earlier sessions exactly as people join." },
      { q: "Do you cover conferences at ADGM venues?", a: "Yes. We cover conferences, panels and institutional events with multi-camera setups, delivering both full-session recordings and edited recap films. Venue rules on positions, lighting and audio feed are confirmed in advance." },
      { q: "Can you produce healthcare content near Cleveland Clinic?", a: "Yes. We produce healthcare and medical content for practices and providers in the Al Maryah cluster, working to patient-consent and health-advertising requirements as standard." },
    ],
  },

  "abu-dhabi/corniche": {
    title: "Video Production at Abu Dhabi Corniche 2026 | Backyard Studio Official",
    metaDescription: "Video production and photography at Abu Dhabi Corniche — waterfront events, skyline content, running and cycling events, family shoots and city films. Free quote in 2 hours.",
    h1: "Video Production at Abu Dhabi Corniche",
    subtitle: "Eight kilometres of waterfront — Abu Dhabi's most accessible location.",
    category: "CORNICHE",
    intro: [
      "The Corniche is Abu Dhabi's waterfront spine: eight kilometres of promenade, cycle track, public beach and park running along the western edge of the city, with the downtown skyline on one side and open Gulf water on the other.",
      "Practically, it is the most usable location in Abu Dhabi. Unlike Yas or Saadiyat — where almost everything sits on managed private property — much of the Corniche is public space, which makes it far more workable for lifestyle, family, sports and city content, though commercial filming still requires permission from Abu Dhabi's authorities.",
      "Backyard Studio Official covers the Corniche for waterfront event coverage, running and cycling event production, family and portrait sessions on the public beach, skyline and city films, and social content for the restaurants and cafés along the promenade.",
    ],
    highlights: [
      { heading: "Running & Cycling Events", body: "Race coverage along the Corniche cycle track and promenade — mass starts, finish lines and participant content." },
      { heading: "Skyline & City Films", body: "Abu Dhabi skyline content shot from the Corniche waterfront, including blue hour and sunrise city films." },
      { heading: "Family & Portrait Sessions", body: "Beach and promenade family, maternity and portrait sessions on Abu Dhabi's public waterfront." },
      { heading: "Waterfront F&B", body: "Restaurant and café content along the Corniche and Corniche Beach venues." },
    ],
    pricing: [
      { pkg: "Portrait / Family Session", detail: "90 min / promenade or beach / edited gallery", price: "From AED 2,000" },
      { pkg: "Event Coverage", detail: "Waterfront event or race coverage", price: "From AED 3,000" },
      { pkg: "Social Content Day", detail: "Half-day shoot / photo + video / social cuts", price: "From AED 2,500" },
      { pkg: "City Film", detail: "Skyline and city film — multi-location", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "Do you need a permit to film at Abu Dhabi Corniche?", a: "Commercial filming on the Corniche generally requires permission from the relevant Abu Dhabi authority, even though much of it is public space. Personal portrait sessions are usually more straightforward than commercial shoots with crew and lighting. We confirm and arrange what is required before the shoot." },
      { q: "How much does photography at the Corniche cost?", a: "Portrait and family sessions start from AED 2,000, social content days from AED 2,500, event coverage from AED 3,000, and multi-location city films from AED 4,500." },
      { q: "Can you cover running and cycling events on the Corniche?", a: "Yes. The Corniche cycle track and promenade host regular races and mass-participation events. We cover mass starts, finish lines, key course points and participant content, coordinating positions with the event organiser in advance." },
      { q: "What is the best time to shoot at the Corniche?", a: "Sunrise for clean promenade and skyline shots with almost no footfall, and blue hour for the city skyline reflecting on the water. Midday is difficult for most of the year — harsh overhead light and, in summer, genuinely unworkable heat." },
      { q: "Can you do family photography on Corniche Beach?", a: "Yes. Corniche Beach is one of the best family and portrait locations in Abu Dhabi — clean sand, calm water and an open horizon. We shoot in the cooler months and at golden hour, and advise on the quieter beach sections." },
      { q: "Is the Corniche easier to film than Yas or Saadiyat?", a: "Generally yes, because much of it is public space rather than managed private property. Yas and Saadiyat locations almost always sit on a resort, circuit, arena or institution with its own approval process and often a location fee. The Corniche still needs permission for commercial work, but the process is simpler." },
    ],
  },

  // ── SHARJAH ───────────────────────────────────────────────────────────────









  // ── AJMAN ─────────────────────────────────────────────────────────────────










  // ── RAS AL KHAIMAH ────────────────────────────────────────────────────────










  // ── FUJAIRAH ──────────────────────────────────────────────────────────────











  // ── UMM AL QUWAIN ─────────────────────────────────────────────────────────










};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(PAGES).map((key) => {
    const [city, service] = key.split("/");
    return { city, service };
  });
}

/**
 * Unbuilt city+service combinations REDIRECT rather than 404.
 *
 * ── The problem this solves ───────────────────────────────────────────────────
 *
 * Google discovers these URLs by pattern, not by following links. Dubai and Abu
 * Dhabi have /locations/<city>/wedding-photography, so Googlebot tries it for
 * every other emirate. There are 7 cities x ~20 services = ~140 possible combos
 * and only 84 are built, so ~56 URLs are guessable and every one of them was
 * returning 404.
 *
 * This has now broken the GSC "Not found (404)" validation three times in a row,
 * each time on a different URL — /locations/ajman/product-photography,
 * /locations/sharjah/personal-branding-photography, and most recently
 * /locations/sharjah/wedding-photography (crawled 14 Aug 2026). Adding a
 * one-off redirect each time is whack-a-mole; the supply of guessable URLs is
 * larger than the number of pages we have.
 *
 * ── Why redirect and not build the pages ──────────────────────────────────────
 *
 * Building 56 more thin city+service pages is exactly the programmatic-SEO
 * expansion that caused the cannibalisation problem in the first place. A
 * redirect to the city hub is honest (we do cover that city, just without a
 * dedicated page for that service) and useful to a visitor.
 *
 * `dynamicParams` must be true for this to work: with it false, Next 404s before
 * any of our code runs. Unknown combos are cheap — they redirect immediately and
 * never render.
 */
export const dynamicParams = true;

/**
 * Cities that have a real hub page to fall back to.
 *
 * ⚠️ DELIBERATELY EXPLICIT — do not derive this from Object.keys(PAGES) again.
 *
 * It used to be derived, which created a trap: consolidating away ALL of a
 * city's sub-service pages would have removed that city from this set, so
 * `fallbackFor()` would return null and the retired URLs would have 404'd
 * instead of redirecting to the hub. That is exactly how the 5 Aug cleanup
 * destroyed the most-cited URL on the domain.
 *
 * The seven emirates all have a hub at /locations/<city> whether or not they
 * have any sub-service pages left, so the set is the seven emirates. Full stop.
 */
const KNOWN_CITIES = new Set([
  "dubai",
  "abu-dhabi",
  "sharjah",
  "ajman",
  "ras-al-khaimah",
  "fujairah",
  "umm-al-quwain",
]);

/**
 * Six emirates have a dedicated wedding page at /services/wedding-photography-<city>.
 * Sending wedding traffic there beats the generic city hub: it is the same intent,
 * and it consolidates signals onto the page that is actually built to rank.
 */
const WEDDING_CITY_PAGES = new Set([
  "abu-dhabi", "sharjah", "ajman", "ras-al-khaimah", "fujairah", "umm-al-quwain",
]);

/** Where an unbuilt combination should go. `null` means genuinely 404. */
function fallbackFor(city: string, service: string): string | null {
  if (!KNOWN_CITIES.has(city)) return null;
  if (service === "wedding-photography") {
    if (city === "dubai") return "/services/wedding-photography";
    if (WEDDING_CITY_PAGES.has(city)) return `/services/wedding-photography-${city}`;
  }
  return `/locations/${city}`;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { city: string; service: string };
}): Promise<Metadata> {
  const key = `${params.city}/${params.service}`;
  const data = PAGES[key];
  // Do NOT notFound() here. generateMetadata runs before the component, so a
  // 404 thrown at this point would pre-empt the redirect below and put us back
  // to serving 404s for guessable combos. Return nothing and let the component
  // decide — the redirect response never uses this metadata anyway.
  if (!data) return {};
  const pageUrl = `https://www.backyardstudioofficial.com/locations/${params.city}/${params.service}`;
  // Bare string -> the layout template appends " | Backyard Studio" exactly once.
  const title = stripBrandSuffix(data.title);
  return {
    title,
    description: data.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      // openGraph does NOT inherit the layout template, so the brand is added here.
      title: withBrand(data.title),
      description: data.metaDescription,
      url: pageUrl,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CityServicePage({
  params,
}: {
  params: { city: string; service: string };
}) {
  const key = `${params.city}/${params.service}`;
  const data = PAGES[key];

  if (!data) {
    // Guessed combination. Send it somewhere real instead of 404ing — see the
    // note on `dynamicParams` above. permanentRedirect emits a 308, so the
    // signal consolidates rather than the URL simply disappearing.
    const target = fallbackFor(params.city, params.service);
    if (target) permanentRedirect(target);
    notFound();
  }

  const cityLabel = params.city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const pageUrl = `https://www.backyardstudioofficial.com/locations/${params.city}/${params.service}`;

  const faqSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const serviceSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: data.h1,
        serviceType: data.h1,
        url: pageUrl,
        description: data.metaDescription,
        areaServed: {
          "@type": "AdministrativeArea",
          name: cityLabel,
          containedInPlace: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
        },
        provider: {
          "@type": "Organization",
          "@id": "https://www.backyardstudioofficial.com/#organization",
          name: "Backyard Studio Official",
          url: "https://www.backyardstudioofficial.com",
          telephone: "+971585882685",
        },
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.backyardstudioofficial.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.backyardstudioofficial.com/locations" },
      { "@type": "ListItem", position: 3, name: cityLabel, item: `https://www.backyardstudioofficial.com/locations/${params.city}` },
      { "@type": "ListItem", position: 4, name: data?.h1 ?? "Service", item: pageUrl },
    ],
  };

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}

      {/* Hero */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="container-xl">
          <nav className="flex items-center gap-2 text-[#666] text-xs mb-6">
            <Link href="/locations" className="hover:text-[#e8c547] transition-colors">Locations</Link>
            <span>→</span>
            <Link href={`/locations/${params.city}`} className="hover:text-[#e8c547] transition-colors">{cityLabel}</Link>
            <span>→</span>
            <span className="text-[#e8c547]">{data.h1}</span>
          </nav>
          <span className="inline-block bg-[#e8c547]/10 text-[#e8c547] text-xs font-semibold tracking-widest px-3 py-1 mb-4">
            {data.category}
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">{data.h1.toUpperCase()}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">{data.subtitle}</p>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {data.intro.map((p, i) => (
              <p key={i} className="text-[#a0a0a0] leading-relaxed">{p}</p>
            ))}

            {/* Emirate-specific substance — the block that stops these pages
                being duplicates of each other. Placed directly after the intro
                on purpose: it is the only genuinely differentiated content on
                the page, so it should not sit below the fold. */}
            <EmirateContext citySlug={params.city} serviceLabel={data.h1} />

            {/* Highlights */}
            <h2 className="font-display text-3xl text-white mt-10 mb-6">
              WHY BACKYARD STUDIO FOR {data.h1.toUpperCase()} IN {cityLabel.toUpperCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {data.highlights.map((h) => (
                <div key={h.heading} className="p-5 bg-[#111] border border-[#2a2a2a] rounded-sm">
                  <div className="font-display text-[#e8c547] text-sm tracking-wide mb-2">{h.heading}</div>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <h2 className="font-display text-3xl text-white mt-12 mb-6">PACKAGES & PRICING IN {cityLabel.toUpperCase()}</h2>
            <div className="border border-[#2a2a2a] rounded-sm overflow-hidden">
              {data.pricing.map(({ pkg, detail, price }, i) => (
                <div key={pkg} className={`flex justify-between items-center p-5 ${i < data.pricing.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}>
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg}</div>
                    <div className="text-[#666] text-xs mt-0.5">{detail}</div>
                  </div>
                  <div className="text-[#e8c547] font-bold text-sm whitespace-nowrap ml-4">{price}</div>
                </div>
              ))}
            </div>

            {data.sources && data.sources.length > 0 && (
              <div className="mt-12 p-6 bg-[#111] border border-[#2a2a2a] rounded-sm">
                <h2 className="font-display text-2xl text-white mb-2">OFFICIAL PLANNING REFERENCES</h2>
                <p className="text-[#777] text-sm leading-relaxed mb-5">
                  We check the current venue and authority requirements for each brief. These official resources are a useful starting point; final permissions depend on the exact event and location.
                </p>
                <ul className="space-y-4">
                  {data.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e8c547] text-sm font-semibold hover:underline"
                      >
                        {source.title} ↗
                      </a>
                      <p className="text-[#777] text-xs leading-relaxed mt-1">{source.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            <h2 className="font-display text-3xl text-white mt-12 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-5">
              {data.faqs.map((f) => (
                <div key={f.q} className="border-l-2 border-[#e8c547] pl-5">
                  <div className="text-white font-semibold text-sm mb-1">{f.q}</div>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="p-6 bg-[#111] border border-[#e8c547]/30 rounded-sm sticky top-28">
              <h3 className="font-display text-xl text-white mb-2">GET A QUOTE IN 2 HRS</h3>
              <p className="text-[#a0a0a0] text-sm mb-5">Tell us about your {cityLabel} project and we'll respond with a custom plan within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full block text-center mb-3">Request a Quote →</Link>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-outline w-full block text-center">WhatsApp +971 58 588 2685</a>
            </div>
            <div className="p-5 bg-[#111] border border-[#2a2a2a] rounded-sm">
              <p className="text-xs text-[#555] uppercase tracking-widest mb-3">More in {cityLabel}</p>
              {Object.keys(PAGES)
                .filter((k) => k.startsWith(params.city + "/") && k !== key)
                .map((k) => {
                  const s = k.split("/")[1];
                  return (
                    <Link key={k} href={`/locations/${params.city}/${s}`}
                      className="flex items-center justify-between py-2 text-[#a0a0a0] text-sm hover:text-[#e8c547] transition-colors border-b border-[#1a1a1a] last:border-0">
                      <span className="capitalize">{s.replace(/-/g, " ")}</span>
                      <span className="text-[#555] text-xs">→</span>
                    </Link>
                  );
                })}
            </div>
            <div className="p-5 bg-[#111] border border-[#2a2a2a] rounded-sm">
              <p className="text-xs text-[#555] uppercase tracking-widest mb-3">Other Emirates</p>
              {([{ label: "Dubai", slug: "dubai" }, { label: "Abu Dhabi", slug: "abu-dhabi" }, { label: "Sharjah", slug: "sharjah" }, { label: "Ajman", slug: "ajman" }, { label: "Ras Al Khaimah", slug: "ras-al-khaimah" }, { label: "Fujairah", slug: "fujairah" }, { label: "Umm Al Quwain", slug: "umm-al-quwain" }] as const).map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}`}
                  className="flex items-center justify-between py-1.5 text-[#a0a0a0] text-sm hover:text-[#e8c547] transition-colors border-b border-[#1a1a1a] last:border-0">
                  <span>{c.label}</span><span className="text-[#555] text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] text-center border-t border-[#2a2a2a]">
        <h2 className="font-display text-4xl text-white mb-4">READY TO SHOOT IN {cityLabel.toUpperCase()}?</h2>
        <p className="text-[#a0a0a0] mb-8 max-w-md mx-auto text-sm">
          Send your brief and we respond within 2 hours with a custom production plan for {cityLabel}.
        </p>
        <Link href="/contact" className="btn-gold">Start Your Project →</Link>
      </section>
    </div>
  );
}
