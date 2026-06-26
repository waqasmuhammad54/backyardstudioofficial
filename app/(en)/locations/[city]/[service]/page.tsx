import type { Metadata } from "next";
import Link from "next/link";

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
      "Dubai is the UAE's wedding capital — and Backyard Studio Official has been one of its leading wedding photography teams since 2016. Atlantis The Palm, Burj Al Arab, Armani Hotel Downtown, Palace Downtown, One&Only The Palm, W Dubai, Address Sky View, The Ritz-Carlton DIFC — we have produced weddings at every major venue in the city, and we know each one's permit requirements, best camera positions, and lighting conditions at every time of day.",
      "We cover every wedding format in Dubai: Arabic weddings with gender-separated coverage and all-female crews for ladies-only ceremonies, Indian multi-day events spanning Mehendi through Reception, Western destination weddings with international guest lists, and intimate nikah ceremonies at mosques or private residences. Our Dubai wedding teams shoot on cinema-grade camera systems and deliver same-day Teaser reels that guests expect before the event ends.",
    ],
    highlights: [
      { heading: "Atlantis & Palm Jumeirah Venues", body: "Atlantis The Palm, Waldorf Astoria Palm, One&Only The Palm — the gold standard of Dubai's luxury wedding portfolio. We have produced hundreds of weddings across these properties and know every corridor, ballroom, and beach setup." },
      { heading: "Downtown & DIFC", body: "Armani Hotel, Address Downtown, The Ritz-Carlton DIFC, Four Seasons DIFC — Dubai's most cinematic urban skyline as your wedding backdrop. Our teams know exactly where to position for the Burj Khalifa at golden hour." },
      { heading: "Indian Multi-Day Weddings", body: "300+ Indian weddings delivered in Dubai. We understand Mehendi energy, Sangeet stage choreography, Barat positioning, and Reception first-dance moments. Two photographers, same-day Teaser, 48-hour full delivery." },
      { heading: "Same-Day Teaser Delivery", body: "Our editing team starts cutting the Teaser reel during the reception itself. Most Dubai weddings receive a 90-second highlight clip before midnight. It's what the market expects and what we deliver." },
    ],
    pricing: [
      { pkg: "Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 2,500" },
      { pkg: "Wedding Day", detail: "2 photographers / 10 hrs / full gallery", price: "From AED 7,000" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 12,000" },
      { pkg: "Multi-Day Package", detail: "Mehendi + Sangeet + Ceremony / full team", price: "From AED 18,000" },
    ],
    faqs: [
      { q: "Which wedding venues in Dubai does Backyard Studio Official cover?", a: "We cover every major Dubai wedding venue including Atlantis The Palm, Burj Al Arab, Armani Hotel, Palace Downtown, Address Downtown, One&Only The Palm, W Dubai, The Ritz-Carlton DIFC, Waldorf Astoria Palm, Jumeirah Al Qasr, Bulgari Resort Dubai, and private villas across the emirate." },
      { q: "Do you provide same-day Teaser reels for Dubai weddings?", a: "Yes. Same-day Teaser delivery is standard for Dubai weddings. Our editing team starts cutting during the event using wireless transfer from cameras to editor. Most clients receive a 60–90 second highlight reel before midnight on the wedding day. Full film delivery is within 48 hours." },
      { q: "How much does wedding photography in Dubai cost?", a: "Wedding photography in Dubai starts from AED 2,500 for ceremony-only coverage and AED 7,000 for a full wedding day with two photographers. Photo and video packages start from AED 12,000. Multi-day Indian wedding packages from AED 18,000. We provide exact quotes within 2 hours." },
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
      "Backyard Studio Official has been covering Dubai events since 2016, with teams that scale from a single photographer at an intimate DIFC networking evening to a 6-person crew at a multi-day conference. We deliver same-day social media content for time-sensitive events and full image galleries within 24–48 hours.",
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
      { heading: "Aerial Drone Documentation", body: "GCAA-licensed aerial coverage of Dubai development sites and completed communities. Palm Jumeirah drone permits, Downtown Dubai airspace, and JBR coastal aerial — managed by our team." },
      { heading: "Agency & Listing Photography", body: "Fast-turnaround unit photography for Dubai real estate agencies listing on Property Finder, Bayut, and international portals — delivered within 24 hours of the shoot." },
      { heading: "International Investor Content", body: "Photography formatted for international investor audiences: high-dynamic-range interiors, twilight exteriors, community lifestyle imagery, and aerial context shots that sell Dubai remotely." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,000" },
      { pkg: "Show Apartment", detail: "Full-day shoot / hero shots + detail images", price: "From AED 3,000" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / GCAA licensed", price: "From AED 4,000" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 12,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Dubai developers like Emaar and DAMAC?", a: "Yes. Backyard Studio Official produces real estate photography for Dubai developers across project launch campaigns, show apartment shoots, unit photography for marketing materials, and aerial drone documentation. We work within developer briefing and approval processes." },
      { q: "How quickly do you deliver real estate photography in Dubai?", a: "Standard delivery for Dubai real estate photography is 24–48 hours. For agency listings requiring same-day turnaround, we offer rush delivery within 6–8 hours of the shoot for an additional fee. Drone footage delivery is within 24 hours of the aerial session." },
      { q: "Are you GCAA licensed for drone photography over Dubai real estate sites?", a: "Yes. Backyard Studio Official holds a GCAA commercial drone licence and coordinates permits with Dubai Film and TV Commission, Emaar, Nakheel, and relevant property authorities for aerial photography over Dubai development sites, the Palm Jumeirah, Downtown Dubai, and JBR." },
      { q: "How much does real estate photography cost in Dubai?", a: "Unit photography starts from AED 1,000 for 3 units with 30 images. Show apartment shoots start from AED 3,000. Aerial drone packages from AED 2,000 for a 2-hour session. Full developer launch packages from AED 12,000. Exact quotes within 2 hours." },
    ],
  },

  "dubai/drone-videography": {
    title: "Drone Videography in Dubai 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Dubai — Burj Khalifa, Palm Jumeirah, Marina, JBR, Downtown. 4K aerial photography & cinematic video. Legal, permitted, fast. From AED 2,000.",
    h1: "Drone Videography in Dubai",
    subtitle: "GCAA licensed. Burj Khalifa district. Palm Jumeirah. Marina. Every zone covered legally.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Dubai produces more aerial video content than almost any other city in the world — and for good reason. The Burj Khalifa at golden hour, the Palm Jumeirah from altitude, the Dubai Marina skyline reflected in the Gulf at dusk — these are images that no ground-level camera can replicate. Backyard Studio Official holds full GCAA commercial drone licences and produces aerial video in Dubai's most photographed zones legally, with all permits coordinated before any camera leaves the ground.",
      "We produce drone videography for Dubai's real estate, tourism, events, construction documentation, wedding, and commercial advertising sectors. Our aerial team operates cinema-grade drone systems in 4K and 6K with cinema colour profiles, delivering footage that integrates seamlessly into broadcast, online, and social media productions.",
    ],
    highlights: [
      { heading: "Burj Khalifa District", body: "One of the world's most filmed aerial environments. Drone operations in the Downtown Dubai zone require DTCM and Dubai Film Commission coordination. Our team has the permits and the experience to deliver exceptional footage from this airspace." },
      { heading: "Palm Jumeirah & JBR", body: "Coastal aerial footage of the Palm, Jumeirah Beach, and the JBR waterfront — the images that define Dubai's luxury lifestyle brand globally. We coordinate Nakheel and DTCM permits for Palm Jumeirah aerial sessions." },
      { heading: "Dubai Marina & City Skyline", body: "The Marina at dawn from altitude, the skyline at golden hour, the Creek Harbour towers reflected in the water — our aerial team knows the exact times and positions for each iconic Dubai aerial shot." },
      { heading: "Real Estate & Construction", body: "Development site documentation, masterplan aerials, community overview footage — GCAA-licensed and coordinated with Dubai Land Department and individual developer site teams." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / colour-graded edit", price: "From AED 2,000" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / full edit", price: "From AED 3,500" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground team / integrated edit", price: "From AED 5,500" },
      { pkg: "Real Estate Aerial", detail: "Development documentation / same-day delivery", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "Is drone flying legal in Dubai and do you have the required licences?", a: "Drone operations in Dubai require a GCAA commercial operator certificate and location-specific permits from the Dubai Film and TV Commission, relevant property authorities, and in some zones, Dubai Civil Aviation Authority. Backyard Studio Official holds all required licences and manages every permit before any flight. We do not operate without complete legal clearance." },
      { q: "Can you fly a drone near the Burj Khalifa in Dubai?", a: "Aerial filming in the Burj Khalifa district requires specific DTCM, Emaar, and Dubai Film Commission coordination. Backyard Studio Official has produced aerial content in the Downtown Dubai zone and manages the full permit process for Burj Khalifa-area shoots. Lead time is typically 3–5 business days for Downtown Dubai aerial permits." },
      { q: "How much does drone videography cost in Dubai?", a: "Drone sessions in Dubai start from AED 2,000 for a 2-hour session with a GCAA-licensed pilot, 4K footage, and colour-graded edit. Half-day aerial packages with multiple locations start from AED 3,500. Combined drone and ground camera packages from AED 5,500." },
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
    metaDescription: "Professional wedding photography in Abu Dhabi — Emirates Palace, Yas Hotel, St. Regis Saadiyat, W Abu Dhabi. Arabic, Indian & destination weddings. From AED 6,000. Free quote in 2 hrs.",
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
      { pkg: "Nikah / Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 3,000" },
      { pkg: "Wedding Day", detail: "2 photographers / 10 hrs / full gallery", price: "From AED 8,000" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 14,000" },
      { pkg: "Multi-Day Package", detail: "Mehendi + Sangeet + Ceremony / full team", price: "From AED 22,000" },
    ],
    faqs: [
      { q: "Which Abu Dhabi wedding venues does Backyard Studio Official cover?", a: "We cover all major Abu Dhabi wedding venues including Emirates Palace Mandarin Oriental, St. Regis Saadiyat Island, Rosewood Abu Dhabi, Grand Hyatt Abu Dhabi, W Abu Dhabi Yas Island, Park Hyatt Saadiyat, Yas Hotel, and private estates across the capital." },
      { q: "Do you provide all-female wedding photography crews in Abu Dhabi?", a: "Yes. For Arabic weddings and events requiring gender-separated coverage, Backyard Studio Official provides fully all-female photography and videography crews in Abu Dhabi. Our female photographers cover ladies-only ceremony halls at the same professional standard as our main teams." },
      { q: "How much does wedding photography in Abu Dhabi cost?", a: "Abu Dhabi wedding photography starts from AED 3,000 for a ceremony-only package and AED 8,000 for a full wedding day with two photographers. Multi-day packages covering Mehendi, Sangeet, and Reception start from AED 22,000. We provide exact quotes within 2 hours of receiving your brief." },
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
      { heading: "Aldar & Developer Brand Films", body: "Project launch videos, community lifestyle content, and investor-facing films for Abu Dhabi's real estate sector. Our drone team captures Yas Island, Al Reem Island, and Saadiyat Island developments from GCAA-licensed altitude." },
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
      "Backyard Studio Official produces real estate photography and videography for Abu Dhabi's property sector across unit photography, show apartment campaigns, project launch content, aerial drone documentation, and lifestyle imagery that positions developments within their surrounding environment. We are GCAA licensed for drone operations across Abu Dhabi's development zones, including the Saadiyat Island cultural district, Yas Island, Al Reem Island, and Al Maryah Island.",
    ],
    highlights: [
      { heading: "Unit & Show Apartment Photography", body: "Precision interior photography of Abu Dhabi residential and commercial units, styled for developer marketing brochures, online listings, and international investor presentations." },
      { heading: "Aerial Drone Documentation", body: "GCAA-licensed aerial coverage of Abu Dhabi development sites, masterplans, and completed communities. Drone permits coordinated with ADAC and relevant authority for each location zone." },
      { heading: "Developer Launch Campaigns", body: "Full photography production for project launches: CGI lifestyle composites preparation, show apartment hero shots, community aerial footage, and lifestyle imagery for Saadiyat, Yas, and Al Reem Island projects." },
      { heading: "Saadiyat & Yas Island Specialists", body: "Years of experience shooting in Abu Dhabi's premium development zones. We know permit processes, ideal shooting times, and how to capture these extraordinary environments at their best." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,200" },
      { pkg: "Show Apartment", detail: "Full-day shoot / hero shots + detail images", price: "From AED 3,500" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 4,500" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 15,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Aldar Properties developments?", a: "Yes. Backyard Studio Official produces real estate photography and videography for Abu Dhabi developer projects including residential communities, show apartments, project launch campaigns, and aerial documentation. We work within the specific briefing and approval processes that major developers like Aldar operate." },
      { q: "Are you licensed for drone photography over Abu Dhabi real estate developments?", a: "Yes. Backyard Studio Official holds a GCAA commercial drone licence and coordinates airspace permissions for Abu Dhabi locations including Saadiyat Island, Yas Island, Al Reem Island, and Al Maryah Island. Abu Dhabi Civil Aviation Authority (ADAC) coordination is managed by our team as part of the production service." },
      { q: "How much does real estate photography cost in Abu Dhabi?", a: "Unit photography in Abu Dhabi starts from AED 1,200 for up to 3 units with 30 images. Show apartment campaigns start from AED 3,500 for a full-day shoot. Aerial drone packages start from AED 2,500 for a 2-hour drone session. Developer launch packages covering multi-day photography and video are quoted individually." },
      { q: "Do you produce real estate content for international investor audiences?", a: "Yes. Backyard Studio Official produces Abu Dhabi real estate content calibrated for international investor audiences in Europe, South Asia, and Southeast Asia. This includes English-language video with international narration, photography formatted for international property portals, and developer brand films designed for investor roadshow use." },
    ],
  },

  "abu-dhabi/drone-videography": {
    title: "Drone Videography in Abu Dhabi 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Abu Dhabi — Sheikh Zayed Grand Mosque, Yas Island, Saadiyat, Corniche, ADGM. Aerial photography & 4K video. From AED 2,500.",
    h1: "Drone Videography in Abu Dhabi",
    subtitle: "GCAA licensed. ADAC coordinated. Every zone in the capital covered legally.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Drone videography in Abu Dhabi requires more than a camera in the sky. The UAE capital's airspace is among the most regulated in the region, with Abu Dhabi Civil Aviation Authority (ADAC) overseeing commercial drone operations and additional permissions required for filming near government buildings, sensitive zones, and the Sheikh Zayed Grand Mosque environs. Backyard Studio Official holds full GCAA commercial drone licences and manages all Abu Dhabi airspace coordination as a standard part of every aerial production.",
      "Our Abu Dhabi drone team captures the capital's extraordinary architecture — the Corniche skyline, the Louvre Abu Dhabi's perforated dome, the Yas Marina Circuit's race track curve, and the natural mangrove systems of Eastern Mangroves and Jubail Island. We produce aerial content for real estate developers, tourism campaigns, government communications, event documentation, and commercial advertising in 4K with cinema-grade colour grading.",
    ],
    highlights: [
      { heading: "Sheikh Zayed Grand Mosque", body: "One of the world's most photographed buildings from the air. Aerial filming of SZGM requires specific ADAC coordination and restricted airspace clearance — which our team manages on your behalf." },
      { heading: "Corniche & City Skyline", body: "The Abu Dhabi Corniche from altitude reveals the city's striking waterfront geometry. Dawn and dusk aerials over the capital are among the most compelling aerial footage available anywhere in the Gulf." },
      { heading: "Yas & Saadiyat Islands", body: "Development documentation, resort launches, and event coverage on both islands with same-day drone footage delivery for time-sensitive productions." },
      { heading: "Mangroves & Natural Environments", body: "The Eastern Mangroves, Jubail Island, and Abu Dhabi's coastline offer dramatic natural aerial perspectives. Conservation area permits coordinated with relevant environmental authorities." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 2,500" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / colour-graded edit", price: "From AED 4,000" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground camera team / full edit", price: "From AED 6,500" },
      { pkg: "Real Estate Aerial", detail: "Development documentation / licensed GCAA", price: "From AED 3,500" },
    ],
    faqs: [
      { q: "Is drone flying legal in Abu Dhabi and do you have the required permits?", a: "Drone operations in Abu Dhabi require a GCAA commercial operator certificate and, for specific zones, additional clearance from Abu Dhabi Civil Aviation Authority (ADAC). Backyard Studio Official holds all required licences and manages every permit application as part of our standard service. We do not fly without complete legal clearance." },
      { q: "Can you fly a drone near the Sheikh Zayed Grand Mosque?", a: "Aerial filming near the Sheikh Zayed Grand Mosque is restricted airspace requiring specific ADAC clearance and coordination with the Mosque's management. Backyard Studio Official has experience navigating this process and has produced aerial content in the SZGM zone for tourism and institutional clients. Lead time for SZGM-adjacent drone permits is typically 5 to 7 business days." },
      { q: "How much does drone videography cost in Abu Dhabi?", a: "Drone sessions in Abu Dhabi start from AED 2,500 for a 2-hour session with a licensed GCAA pilot, 4K footage, and basic colour edit. Full-day aerial packages with multiple locations and a colour-graded edit start from AED 4,000. Packages combining aerial and ground camera teams start from AED 6,500." },
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

  // ── SHARJAH ───────────────────────────────────────────────────────────────

  "sharjah/headshot-photography": {
    title: "Headshot Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Sharjah — LinkedIn profiles, corporate team days, executive portraits, Al Majaz and University City locations. 48-hour delivery. From AED 800.",
    h1: "Headshot Photography in Sharjah",
    subtitle: "Al Majaz Waterfront. University City. Heart of Sharjah. Credibility, photographed.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Sharjah's professional community spans government ministries, University City academia, healthcare institutions, financial services firms along Al Majaz, and a growing cohort of SME founders and entrepreneurs. Across all of these sectors, the credibility gap between a poor LinkedIn photo and a professional headshot is visible and costly. Backyard Studio Official produces professional headshots in Sharjah that accurately represent the seriousness and competence of your professional brand.",
      "We shoot at Al Majaz Waterfront for an open cityscape background, University City locations for academic professionals, the Heart of Sharjah for heritage context, and our portable studio setup for clean seamless-background corporate portraits. We brief every client before the session on wardrobe, grooming, and what the images will be used for — because those factors directly determine how we shoot.",
    ],
    highlights: [
      { heading: "Al Majaz Waterfront", body: "Sharjah's main promenade along Khalid Lagoon provides an open, modern backdrop for headshots with a distinctive Sharjah character — different from Dubai's glass-tower environment and immediately recognisable to regional professional audiences." },
      { heading: "University City Sessions", body: "Sharjah is home to the UAE's most concentrated academic cluster. We produce professional headshots for academics, researchers, and administrative staff across University City institutions — meeting the specific visual communication standards of higher education." },
      { heading: "Corporate Team Days", body: "We set up a portable studio at your Sharjah office or facility and photograph your full team in a single coordinated day, delivering consistent professional headshots for websites, directories, and internal communications." },
      { heading: "48-Hour Delivery", body: "Standard headshot delivery in 48 hours. Rush same-day or next-day delivery available for conference deadlines, press requirements, or urgent media appearances." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 800" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,500" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 400 / person" },
      { pkg: "Personal Brand Package", detail: "3 hrs / 3 looks / 40 images / social media ready", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "Where do you shoot professional headshots in Sharjah?", a: "We shoot at Al Majaz Waterfront for open cityscape backgrounds, University City for academic and institutional contexts, the Heart of Sharjah heritage quarter for culturally distinctive imagery, and portable studio setups at your office location for seamless-background corporate portraits." },
      { q: "Do you photograph corporate team headshots in Sharjah?", a: "Yes. We set up a portable studio at your Sharjah office and photograph your full team systematically in a single day, delivering consistent professional images for websites, LinkedIn, and internal staff directories. Government and semi-government entities in Sharjah are a regular part of our team headshot work." },
      { q: "How quickly are Sharjah headshots delivered?", a: "Standard delivery is 48 hours from the shoot date. Rush delivery within 24 hours is available for urgent conference, media, or press deadlines at an additional fee." },
      { q: "How much does a professional headshot cost in Sharjah?", a: "Individual headshot sessions start from AED 800. Executive sessions with two locations from AED 1,500. Corporate team days from AED 400 per person with a session minimum. Personal brand packages from AED 2,500." },
    ],
  },

  "sharjah/newborn-photography": {
    title: "Newborn Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Sharjah — posed studio sessions and in-home lifestyle photography for UAE families. Safe, gentle, experienced. From AED 1,500.",
    h1: "Newborn Photography in Sharjah",
    subtitle: "The first days. Before they change.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "Newborn photography documents the very specific physical reality of the first two weeks of life — the natural curl of a sleeping baby, the extraordinary smallness of their hands, the particular softness that parents cannot hold onto with memory alone. Backyard Studio Official produces newborn photography in Sharjah in both posed studio and in-home lifestyle formats, with safety and the baby's comfort as the absolute first principle of every session.",
      "Sharjah has one of the UAE's most family-oriented communities. Many of the families we work with in Sharjah are building their lives here while extended family remains in their home countries — professional newborn photography gives those relatives abroad their first meaningful connection to a new child. We understand the weight of that and bring the same care to the session itself as to the images we produce.",
    ],
    highlights: [
      { heading: "Posed Studio Sessions (5–14 Days)", body: "Classic posed newborn photography in wraps and props, professional studio lighting, neutral and warm backgrounds. We work entirely at the baby's pace with no time pressure and unlimited breaks for feeding and settling." },
      { heading: "In-Home Lifestyle Sessions", body: "We travel to your Sharjah home and document your baby in the environment you have prepared — the nursery, the natural light of your space, your family together. Documentary imagery that no studio can replicate." },
      { heading: "Safety First", body: "All sessions follow established safe posing protocols. A parent is present throughout. We never compromise a baby's comfort or safety for a photograph." },
      { heading: "Sibling and Family Portraits", body: "We include parents and existing children within the same session at no extra charge — the interactions between older siblings and a new baby consistently produce some of the most meaningful images in the session." },
    ],
    pricing: [
      { pkg: "Studio Newborn", detail: "2–4 hrs / wraps + props / 20 edited images", price: "From AED 1,500" },
      { pkg: "Premium Studio", detail: "Full session / family + siblings / 35 images", price: "From AED 2,500" },
      { pkg: "In-Home Lifestyle", detail: "90 min / natural light / 25 images", price: "From AED 1,800" },
      { pkg: "Studio + In-Home Combo", detail: "Both sessions / complete documentation", price: "From AED 3,200" },
    ],
    faqs: [
      { q: "When should I book a newborn photographer in Sharjah?", a: "Book during your second trimester to hold dates around your due date. We confirm the session once the baby arrives. The ideal window for posed sessions is 5 to 14 days after birth — when babies sleep most deeply and curl most naturally." },
      { q: "Is newborn photography safe for my baby in Sharjah?", a: "Yes, when performed by trained photographers following safe posing protocols, which is our consistent practice. We never attempt composite or unsafe poses. A parent is present throughout every session, and temperature and environment are actively managed." },
      { q: "How long does a newborn session take in Sharjah?", a: "Studio sessions run 2 to 4 hours, working entirely at the baby's pace with no time pressure. In-home lifestyle sessions run 90 minutes to 2 hours." },
      { q: "How much does newborn photography cost in Sharjah?", a: "Studio newborn sessions start from AED 1,500 delivering 20 edited images. Premium sessions with siblings and family from AED 2,500. In-home lifestyle sessions from AED 1,800. Studio and in-home combination packages from AED 3,200." },
    ],
  },

  "sharjah/maternity-photography": {
    title: "Maternity Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Sharjah for elegant bump shoots, Al Majaz Waterfront, Al Noor Island and studio sessions. Modest maternity photography available. From AED 1,200.",
    h1: "Maternity Photography in Sharjah",
    subtitle: "Al Majaz. Al Noor Island. Heart of Sharjah. Your bump, beautifully documented.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Sharjah offers maternity photography environments that feel genuinely different from Dubai. Al Majaz Waterfront along Khalid Lagoon at golden hour produces warm, open coastal imagery with Sharjah's characteristic skyline. Al Noor Island's botanical gardens and butterfly house give a lush, intimate natural backdrop unusual for the UAE. The Heart of Sharjah's heritage architecture provides cultural depth and warmth. These are distinct environments that produce a different aesthetic to the glass-tower or beach-resort imagery associated with Dubai.",
      "We are experienced with modest maternity photography in Sharjah — sessions designed for families who prefer covered clothing, elegant draping, and beautiful compositions that respect cultural and religious preferences without any compromise in photographic quality. We are happy to discuss your specific requirements before booking.",
    ],
    highlights: [
      { heading: "Al Majaz Waterfront", body: "Sharjah's most popular public promenade along Khalid Lagoon — open water views, the fountain, the city skyline, and consistently beautiful golden-hour light that makes this a standout location for maternity photography." },
      { heading: "Al Noor Island", body: "Sharjah's botanical island features lush tropical gardens and unique architectural elements that create intimate, green-framed maternity imagery unlike anything else available in the UAE." },
      { heading: "Heart of Sharjah", body: "The restored heritage quarter provides warm sandstone architecture, courtyard settings, and a cultural depth that works beautifully for families wanting imagery rooted in the region's identity." },
      { heading: "Modest Maternity Photography", body: "We are experienced shooting elegant covered and draped maternity sessions for families who prefer modest clothing options — equal in quality to any of our standard maternity work." },
    ],
    pricing: [
      { pkg: "Outdoor Session", detail: "90 min / 1 location / 20–25 edited images", price: "From AED 1,200" },
      { pkg: "Studio Session", detail: "90 min / controlled light / gown options", price: "From AED 1,500" },
      { pkg: "Premium Outdoor", detail: "2.5 hrs / 2 locations / outfit change / 40 images", price: "From AED 2,200" },
      { pkg: "Al Noor Island Session", detail: "Golden hour / 2 hrs / 35 images", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best maternity photography locations in Sharjah?", a: "Al Majaz Waterfront for golden-hour lagoon imagery; Al Noor Island for lush botanical garden sessions; the Heart of Sharjah for heritage architecture backdrops; and our studio for controlled indoor portrait work. We advise on location based on your aesthetic and cultural preferences." },
      { q: "Do you provide modest maternity photography in Sharjah?", a: "Yes. We are experienced shooting elegant maternity sessions for families who prefer covered or draped clothing options that respect religious and cultural preferences. Equal in creative quality and photographic care to any of our maternity work." },
      { q: "When is the best time for a maternity shoot in Sharjah?", a: "28 to 34 weeks of pregnancy. Book during your second trimester to secure preferred outdoor slots. Cooler months from October through April are ideal for outdoor sessions. Summer sunrise sessions from 5:30am are available for early risers." },
      { q: "How much does maternity photography cost in Sharjah?", a: "Outdoor sessions from AED 1,200. Studio sessions from AED 1,500. Al Noor Island golden-hour sessions from AED 2,000. Premium outdoor sessions with two locations from AED 2,200." },
    ],
  },

  "sharjah/fashion-photography": {
    title: "Fashion Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Sharjah for editorial shoots, e-commerce, modest fashion and brand campaigns. Al Majaz, Heart of Sharjah, Al Noor Island and studio. From AED 3,000.",
    h1: "Fashion Photography in Sharjah",
    subtitle: "Heart of Sharjah. Al Noor Island. Al Majaz. UAE fashion photography with cultural depth.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Sharjah offers fashion photography environments that communicate a distinctly different visual identity from Dubai. The Heart of Sharjah's restored heritage architecture — sandstone buildings, courtyard spaces, traditional geometric motifs — provides a backdrop of cultural depth and authenticity that is increasingly sought after in regional and international fashion editorial. Al Noor Island's botanical gardens and striking geometric structures offer an unusual combination of natural beauty and architectural interest. These locations produce fashion content that stands apart from the glass-and-steel aesthetic that dominates Dubai fashion production.",
      "Sharjah is also the UAE's primary hub for modest fashion brands. Backyard Studio Official produces fashion photography for abaya designers, modest fashion labels, and regional brands targeting audiences who want photography that is simultaneously elegant, aspirational, and culturally resonant. We work with model agencies in both Sharjah and Dubai and manage full production from brief to delivery.",
    ],
    highlights: [
      { heading: "Heart of Sharjah Heritage", body: "Restored heritage architecture, traditional courtyard spaces, and authentic sandstone settings that produce fashion imagery with genuine cultural weight — a visual angle that Dubai's modern architecture cannot replicate." },
      { heading: "Al Noor Island", body: "Botanical gardens, the butterfly house, and distinctive architectural structures on the water create fashion photography locations that feel editorial and distinctive." },
      { heading: "Modest Fashion Specialists", body: "Experienced producing fashion content for abaya designers, modest fashion brands, and regional labels — understanding the visual language that resonates with culturally conservative audiences while maintaining high production values." },
      { heading: "Full Production Management", body: "Brief to delivery: model sourcing from Sharjah and Dubai agencies, styling coordination, location management, photography, and post-production retouching as a single integrated service." },
    ],
    pricing: [
      { pkg: "Half-Day Shoot", detail: "Photographer + assistant / 1 location", price: "From AED 3,000" },
      { pkg: "Full Production Day", detail: "Crew / location / post-production included", price: "From AED 5,500" },
      { pkg: "E-Commerce Day Rate", detail: "Model photography / per-outfit pricing", price: "From AED 4,500 / day" },
      { pkg: "Campaign Production", detail: "Multi-day / full crew / model + styling", price: "On request" },
    ],
    faqs: [
      { q: "What fashion photography locations are available in Sharjah?", a: "The Heart of Sharjah heritage quarter for authentic cultural architecture; Al Noor Island for botanical gardens and distinctive structures; Al Majaz Waterfront for open contemporary imagery; and studio environments for clean e-commerce fashion photography. Location is selected based on the brand aesthetic and collection type." },
      { q: "Do you produce modest fashion photography in Sharjah?", a: "Yes. Modest fashion and abaya brand photography is a core part of our Sharjah production work. We understand the visual language of modest fashion — elegant draping, cultural authenticity, sophisticated styling — and produce images that work for both regional and international modest fashion audiences." },
      { q: "Can you source models for fashion shoots in Sharjah?", a: "Yes. We work with modelling agencies in both Sharjah and Dubai and source appropriate talent for your campaign brief. Model bookings, fees, and scheduling are managed as part of our full production service." },
      { q: "How much does fashion photography cost in Sharjah?", a: "Half-day shoots start from AED 3,000. Full production days from AED 5,500. E-commerce model photography from AED 4,500 per day. Campaign productions with full crew and styling are quoted per project." },
    ],
  },

  "sharjah/social-media-content": {
    title: "Social Media Content Creation in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Social media content production in Sharjah — Instagram Reels, TikTok, LinkedIn video, modest fashion brands and F&B businesses. Monthly packages available. From AED 2,000.",
    h1: "Social Media Content Creation in Sharjah",
    subtitle: "Instagram. TikTok. LinkedIn. Sharjah brands, consistently visible.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Sharjah's business and cultural landscape is generating real demand for professional social media content. Government entities, University City institutions, family businesses in the heritage quarter, F&B brands across Al Majaz and Rolla, modest fashion labels, and an active community of Sharjah-based content creators all need a consistent flow of professional photography and video for Instagram, TikTok, and LinkedIn.",
      "Backyard Studio Official produces social media content for Sharjah businesses and creators — delivering photo and video content in the same sessions, working in formats native to each platform, and providing monthly retainer packages for businesses that need consistent output without the overhead of managing individual production shoots every few weeks.",
    ],
    highlights: [
      { heading: "Instagram & TikTok Reels", body: "Short-form vertical video shot natively for Instagram Reels and TikTok — we direct on-camera talent, shoot in vertical format, and deliver platform-ready files with fast turnaround for posting while content is timely." },
      { heading: "Modest Fashion & Lifestyle Content", body: "A significant share of our Sharjah content work covers modest fashion brands, abaya designers, and lifestyle creators producing content for audiences who expect elegant, culturally resonant imagery." },
      { heading: "F&B and Heritage Quarter", body: "Restaurant and café social content across Al Majaz, Rolla, and the Heart of Sharjah — food photography, chef reels, atmosphere content, and seasonal campaign material for Sharjah's growing dining culture." },
      { heading: "Monthly Content Retainers", body: "Regular shoot sessions producing a rolling bank of content for Sharjah businesses who need consistent social media output without managing individual shoot days each month." },
    ],
    pricing: [
      { pkg: "Half-Day Content Shoot", detail: "Photo + Reels / 1–2 platforms", price: "From AED 2,000" },
      { pkg: "Full-Day Content Sprint", detail: "Multi-platform / photo + video / 3+ deliverables", price: "From AED 3,800" },
      { pkg: "Creator Monthly Retainer", detail: "2 sessions / month / consistent content bank", price: "From AED 2,000 / mo" },
      { pkg: "Brand Monthly Retainer", detail: "4 sessions / month / multi-platform / strategy", price: "From AED 3,500 / mo" },
    ],
    faqs: [
      { q: "What social media content do you produce in Sharjah?", a: "Instagram Reels, TikTok videos, YouTube Shorts, LinkedIn video content, Instagram static posts and carousels, Stories content, and brand campaign material. We produce both photography and video in the same sessions to maximise what each shoot day produces." },
      { q: "Do you offer monthly social media content packages in Sharjah?", a: "Yes. Monthly retainer packages cover 2 to 4 shoot sessions per month, producing a rolling content bank. Creator retainers start from AED 2,000 per month. Brand retainers covering multi-platform output start from AED 3,500 per month." },
      { q: "Do you produce modest fashion content in Sharjah?", a: "Yes. Modest fashion and lifestyle content is a core area of our Sharjah social media work. We understand the aesthetic and audience expectations of this segment and produce Instagram and TikTok content that resonates with modest fashion communities." },
      { q: "How much does social media content creation cost in Sharjah?", a: "Half-day content shoots from AED 2,000. Full-day multi-platform sprints from AED 3,800. Monthly creator retainers from AED 2,000 per month. Brand retainers from AED 3,500 per month." },
    ],
  },

  "sharjah/birthday-photography": {
    title: "Birthday Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Sharjah for kids parties, milestone birthdays, private celebrations. Al Majaz, Al Noor Island, private venues across Sharjah. From AED 1,000.",
    h1: "Birthday Photography in Sharjah",
    subtitle: "Kids parties. Milestone birthdays. Family celebrations. Sharjah moments, documented.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday photography in Sharjah covers both party event documentation and styled milestone sessions. For birthday parties — kids events at Al Majaz venues, private villa celebrations, community spaces, or home parties across Sharjah's residential areas — we provide event coverage that captures the real moments: the setup before guests arrive, the energy of the celebration, the cake, the genuine interactions that parents want to hold onto. For milestone birthdays, we produce styled photography sessions at Sharjah's most distinctive outdoor locations.",
      "Sharjah is one of the UAE's most family-oriented communities, and birthday photography here often involves large extended family gatherings, cultural celebrations, and multi-generational moments that require a photographer comfortable with busy, layered events. We are experienced with the full range of birthday event formats and family dynamics in Sharjah.",
    ],
    highlights: [
      { heading: "Kids Party Coverage", body: "We arrive early to document setup and cover the full arc of the celebration, capturing the genuine moments that make children's birthday documentation meaningful — the expressions, the interactions, the energy of the room." },
      { heading: "Milestone Birthday Sessions", body: "Styled photography sessions for landmark birthdays at Al Majaz Waterfront at golden hour, Al Noor Island's gardens, or the Heart of Sharjah's heritage architecture. Sessions with outfit changes and location variety." },
      { heading: "Family & Cultural Celebrations", body: "Experienced with large extended family birthday gatherings, Arabic and South Asian cultural celebration formats, and multi-generational events that require both documentary coverage and formal portrait work." },
      { heading: "Same-Day Sneak Peek", body: "15 highlight images delivered within 6 hours of the event for immediate social media sharing. Full gallery in 3 to 5 business days." },
    ],
    pricing: [
      { pkg: "Party Coverage", detail: "2 hrs / 50–80 edited images / digital gallery", price: "From AED 1,000" },
      { pkg: "Full Event Coverage", detail: "3–4 hrs / setup to celebration", price: "From AED 1,600" },
      { pkg: "Milestone Birthday Shoot", detail: "90 min / styled / 2 locations / 30 images", price: "From AED 1,400" },
      { pkg: "Party + Same-Day Sneak Peek", detail: "Coverage + 15 highlights within 6 hrs", price: "From AED 1,600" },
    ],
    faqs: [
      { q: "Do you photograph kids birthday parties in Sharjah?", a: "Yes. We photograph children's birthday parties at Al Majaz venues, private villas, home parties, community hall events, and celebrations across Sharjah. We are experienced with the fast-moving, unpredictable nature of children's parties and focus on capturing genuine moments rather than staged setups." },
      { q: "Can you do a milestone birthday shoot in Sharjah?", a: "Yes. We produce styled milestone birthday photography sessions at Al Majaz Waterfront at golden hour, Al Noor Island's botanical gardens, and the Heart of Sharjah heritage quarter. Sessions run 90 minutes with outfit changes and up to 2 locations." },
      { q: "How quickly do you deliver birthday photos in Sharjah?", a: "Standard delivery is 3 to 5 business days. Same-day sneak peek of 15 highlights within 6 hours is available as an add-on. Rush full delivery in 24 hours available at additional cost." },
      { q: "How much does a birthday photographer cost in Sharjah?", a: "Party coverage starts from AED 1,000 for 2 hours. Full event coverage from AED 1,600. Milestone birthday shoots from AED 1,400. Same-day sneak peek add-on from AED 300." },
    ],
  },

  "sharjah/kids-photography": {
    title: "Kids Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Sharjah for family portraits, kids sessions, sibling photography and newborn-to-toddler documentation. Al Majaz, Al Noor Island and studio. From AED 1,000.",
    h1: "Kids Photography in Sharjah",
    subtitle: "Toddlers to teens. Genuine moments, not forced poses.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Children's photography in Sharjah requires patience, genuine warmth with young subjects, and a session approach built around the child rather than a fixed production schedule. Backyard Studio Official photographs children of all ages across Sharjah — from newborns through to teenagers — with a consistent philosophy: we work with the child's natural behaviour and energy rather than trying to make them perform. The best children's photographs are always the unguarded, spontaneous moments, and creating the conditions for those to happen is where we focus our attention.",
      "Sharjah's outdoor environments work exceptionally well for children's photography. Al Noor Island provides botanical gardens and natural spaces that give children room to move freely. Al Majaz Waterfront offers open lagoon views that work beautifully for family sessions. The Heart of Sharjah adds cultural texture for families who want imagery rooted in the region's identity. We use all of these alongside our studio for families wanting a range of imagery styles.",
    ],
    highlights: [
      { heading: "Al Noor Island Sessions", body: "Botanical gardens, open green spaces, and distinctive island architecture give children room to move naturally and produce spontaneous, relaxed photography that feels genuinely playful — unlike any environment in Dubai." },
      { heading: "Al Majaz Waterfront", body: "Open lagoon views, the iconic fountain, and warm golden-hour light along Sharjah's main promenade provide a beautiful backdrop for family and children's sessions." },
      { heading: "Patient, Child-Led Approach", body: "We spend the first part of every session building real rapport before we start photographing. Sessions adapt to the child's pace and mood. We never force expressions or rush moments." },
      { heading: "Family & Sibling Sessions", body: "Parents and siblings included at no additional charge for groups up to 4. We structure the session around getting the best from young children — active outdoor phases first, then quieter portrait moments." },
    ],
    pricing: [
      { pkg: "Kids Session", detail: "60 min / outdoor / 20–30 edited images", price: "From AED 1,000" },
      { pkg: "Family Session", detail: "90 min / kids + parents / 35 images", price: "From AED 1,600" },
      { pkg: "Studio Portrait", detail: "60 min / studio / 15 final images", price: "From AED 1,200" },
      { pkg: "Al Noor Island Premium", detail: "90 min / 2 areas / 30 images", price: "From AED 1,800" },
    ],
    faqs: [
      { q: "What are the best kids photography locations in Sharjah?", a: "Al Noor Island for botanical garden environments that children love to explore naturally; Al Majaz Waterfront for open lagoon and fountain backdrops; the Heart of Sharjah for cultural heritage settings; and our studio for weather-independent controlled portrait work." },
      { q: "How do you get young children to cooperate for photos in Sharjah?", a: "We don't try to make children perform. We spend the opening part of every session playing and building a genuine connection before we start shooting. Once children are relaxed and comfortable with us, the real moments — the expressions, the energy, the interactions — emerge naturally." },
      { q: "Can you photograph newborns through older children in the same family session?", a: "Yes. Multi-age family sessions with children spanning a wide age range are common in our Sharjah work. We structure the session to serve each age group — active outdoor phases for energetic children, quieter portrait time for younger ones and parents." },
      { q: "How much does children's photography cost in Sharjah?", a: "Outdoor kids sessions start from AED 1,000. Family sessions from AED 1,600. Studio portrait sessions from AED 1,200. Al Noor Island premium outdoor sessions from AED 1,800." },
    ],
  },

  "sharjah/engagement-photography": {
    title: "Engagement Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Sharjah for couple shoots, proposal photography and pre-wedding sessions. Al Majaz Waterfront, Heart of Sharjah and Al Noor Island. From AED 1,800.",
    h1: "Engagement Photography in Sharjah",
    subtitle: "Al Majaz Waterfront. Heart of Sharjah. Al Noor Island. Couple photography with depth.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Sharjah's engagement photography locations offer a visual and cultural depth that is distinctly its own. Al Majaz Waterfront along Khalid Lagoon at golden hour produces warm, cinematic couple photography with the Sharjah skyline and fountain as a backdrop. The Heart of Sharjah's restored heritage quarter provides sandstone architecture, courtyard settings, and authentic cultural context that make for stunning images unlike anything produced in Dubai. Al Noor Island combines botanical gardens with striking waterside architecture. These are genuine environments with real character.",
      "We work with couples across all nationalities and backgrounds in Sharjah, and we are experienced with culturally sensitive session requirements. We take time before every session to understand what the couple wants — the aesthetic, the mood, how comfortable they are in front of a camera — and build the session around helping them feel genuinely at ease rather than directed into rigid poses.",
    ],
    highlights: [
      { heading: "Al Majaz Waterfront", body: "Sharjah's most iconic promenade setting — Khalid Lagoon, the fountain, the cityscape at golden hour. One of the most romantic and visually distinctive engagement photography locations in the UAE." },
      { heading: "Heart of Sharjah Heritage", body: "Authentic sandstone architecture, intimate courtyards, and heritage setting provide a cultural backdrop for couple photography that feels genuinely rooted in the region's identity." },
      { heading: "Al Noor Island", body: "Botanical gardens, distinctive architectural structures, and island light create a naturally beautiful and intimate setting for couple and engagement sessions." },
      { heading: "Proposal Photography", body: "We position covertly at the chosen proposal location ahead of time to capture the genuine moment and immediate reaction — coordinating closely with the proposing partner on timing and position." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 1,800" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 2,800" },
      { pkg: "Al Majaz Golden Hour", detail: "2 hrs / sunset / 40 images", price: "From AED 2,200" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,200" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Sharjah?", a: "Al Majaz Waterfront at golden hour for the Khalid Lagoon and fountain backdrop; Heart of Sharjah for heritage architecture and cultural depth; Al Noor Island for botanical garden environments; and our studio for weather-independent portrait sessions. We advise based on the couple's aesthetic preferences and session timing." },
      { q: "Do you photograph proposals in Sharjah?", a: "Yes. We position covertly at the proposal location in advance to capture the genuine moment and the immediate reaction. All timing and positioning is coordinated through close communication with the proposing partner before the day." },
      { q: "Are you experienced with culturally sensitive engagement photography in Sharjah?", a: "Yes. We regularly work with couples who have specific cultural, religious, or family requirements around their photography sessions. These conversations are always welcome before booking — we want to ensure the session is comfortable, dignified, and genuinely enjoyable for both partners." },
      { q: "How much does engagement photography cost in Sharjah?", a: "Single-location sessions start from AED 1,800. Two-location sessions from AED 2,800. Al Majaz golden-hour sessions from AED 2,200. Proposal photography from AED 2,200." },
    ],
  },

  // ── AJMAN ─────────────────────────────────────────────────────────────────

  "ajman/headshot-photography": {
    title: "Headshot Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Ajman — LinkedIn profiles, corporate portraits, executive headshots at Ajman Corniche and Free Zone. 48-hour delivery. From AED 750.",
    h1: "Headshot Photography in Ajman",
    subtitle: "Ajman Corniche. Free Zone. Museum Quarter. Professional headshots, precisely delivered.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Ajman's professional landscape spans the Ajman Free Zone — one of the UAE's most active SME and manufacturing hubs — along with government institutions, healthcare facilities, and a growing community of entrepreneurs and independent professionals. For every professional in this environment, a credible headshot is the first layer of trust that prospective clients, employers, and partners encounter. Backyard Studio Official produces professional headshots in Ajman that hold up at every scale — LinkedIn profiles, corporate directories, press features, and website team pages.",
      "We shoot along the Ajman Corniche for open waterfront backgrounds, use the Ajman Museum quarter for heritage context, set up portable studio backgrounds at Free Zone offices, and work at Al Zorah for natural surroundings. Every session begins with a brief conversation about how the images will be used, what wardrobe the client is planning, and what quality of result they actually need — because those answers shape every decision we make on set.",
    ],
    highlights: [
      { heading: "Ajman Free Zone Corporate Headshots", body: "Ajman Free Zone hosts thousands of registered businesses across manufacturing, trading, and services. We travel to your office and set up a portable studio on-site to photograph full teams in a single coordinated day, delivering consistent professional headshots for your company website and directory listings." },
      { heading: "Ajman Corniche Locations", body: "The Ajman Corniche provides a clean, open waterfront backdrop with the Gulf as background — professional without the visual congestion of Dubai's skyline, and immediately recognisable to UAE regional audiences." },
      { heading: "Museum Quarter Context", body: "Ajman Museum's historic fort and surrounding quarter provides sandstone architecture and heritage context for headshots where a sense of place and professional credibility both matter." },
      { heading: "48-Hour Delivery", body: "Standard edited delivery in 48 hours. Rush next-day or same-day delivery available for press appearances, conference deadlines, or immediate website updates." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 750" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,400" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 350 / person" },
      { pkg: "Personal Brand Package", detail: "3 hrs / 3 looks / 40 images / social media ready", price: "From AED 2,200" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Ajman?", a: "Ajman Corniche for open waterfront backgrounds, Ajman Museum quarter for heritage context, Al Zorah Nature Reserve for natural surroundings, and our portable studio setup for clean seamless-background corporate portraits at your Free Zone or city office." },
      { q: "Can you photograph our full company team in Ajman?", a: "Yes. We travel to your Ajman Free Zone office or facility, set up a portable studio on-site, and photograph your entire team in a single coordinated day. Final images are delivered with consistent lighting, background, and colour grade across all team members." },
      { q: "How much does a professional headshot cost in Ajman?", a: "Individual sessions start from AED 750 for a 90-minute shoot with 10 to 15 edited images. Executive sessions from AED 1,400. Team days at AED 350 per person. Personal brand packages from AED 2,200." },
      { q: "How quickly will I receive my headshot images?", a: "Standard delivery is within 48 hours. Rush same-day and next-day options are available for conference deadlines, press submissions, or urgent website requirements." },
    ],
  },

  "ajman/newborn-photography": {
    title: "Newborn Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Ajman — safe posed and lifestyle newborn sessions for families. Home visits, studio setups and Al Zorah natural sessions. From AED 1,400.",
    h1: "Newborn Photography in Ajman",
    subtitle: "Al Zorah. Ajman Corniche. Your home. Safe, gentle newborn photography.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "The first two weeks of a newborn's life pass faster than any parent expects. The particular way a newborn curls, the texture of their skin, the weight of them in a parent's arms — these are details that belong to a narrow window of days. Backyard Studio Official produces professional newborn photography in Ajman that captures these fleeting details honestly and gently, creating images that genuinely reflect the experience of those first days rather than a performed version of it.",
      "We work within Ajman's family communities with full understanding of the cultural norms that matter to new parents here. Sessions are unhurried and led by the baby's readiness rather than a fixed schedule. We offer home visits across Ajman — Al Rashidiya, Al Nuaimiya, Al Rawda, and surrounding areas — as well as outdoor lifestyle sessions at Al Zorah Nature Reserve, and portable studio setups for families who prefer controlled backgrounds.",
    ],
    highlights: [
      { heading: "Safe Posing Practice", body: "Every pose we use is specifically designed for newborns and executed with the safety of the baby as the primary consideration. No pose, prop, or position is used that creates any risk — always safety first, aesthetics second." },
      { heading: "Home Visit Sessions", body: "We bring our equipment to your Ajman home and photograph the newborn in the environment where they actually live — in the bassinet, in a parent's arms on the sofa, in the nursery. These images have an intimacy and authenticity that studio images often lack." },
      { heading: "Al Zorah Nature Sessions", body: "Al Zorah Nature Reserve's mangroves and waterside environments provide a beautifully natural backdrop for family and newborn lifestyle photography — open, calm, and distinctly different from urban studio settings." },
      { heading: "Culturally Aware Sessions", body: "We are experienced working with Ajman's diverse family communities and understand the preferences around privacy, modesty, and session conduct that matter to families here. All requirements are welcomed and respected." },
    ],
    pricing: [
      { pkg: "Lifestyle Home Session", detail: "2 hrs at your home / 30–40 images", price: "From AED 1,400" },
      { pkg: "Posed Studio Session", detail: "3 hrs / wraps and props / 40 images", price: "From AED 1,800" },
      { pkg: "Family Welcome Session", detail: "Newborn + siblings + parents / 50 images", price: "From AED 2,200" },
      { pkg: "Al Zorah Outdoor Session", detail: "2 hrs nature setting / 35 images", price: "From AED 1,600" },
    ],
    faqs: [
      { q: "When is the best time to photograph a newborn in Ajman?", a: "Between 5 and 14 days after birth. Newborns in this window sleep deeply and curl naturally into the gentle poses that define newborn photography. After two weeks, the baby becomes more alert and less comfortable with extended handling." },
      { q: "Do you come to our home in Ajman?", a: "Yes. We offer home visit sessions across Ajman — Al Rashidiya, Al Nuaimiya, Al Rawda, and surrounding neighbourhoods. We bring all equipment needed for both lifestyle and posed sessions. Home sessions have a natural intimacy that studio images rarely replicate." },
      { q: "Is newborn photography safe?", a: "Safety is the first and non-negotiable consideration in every session. All poses are specifically designed for newborns and executed with care. We never rush, never force, and never place a baby in any position that could cause discomfort or risk." },
      { q: "How much does newborn photography in Ajman cost?", a: "Lifestyle home sessions start from AED 1,400. Posed studio sessions from AED 1,800. Family welcome sessions from AED 2,200. Al Zorah outdoor sessions from AED 1,600." },
    ],
  },

  "ajman/maternity-photography": {
    title: "Maternity Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Ajman — elegant bump sessions at Al Zorah Nature Reserve, Ajman Corniche and home visits. Culturally respectful. From AED 1,200.",
    h1: "Maternity Photography in Ajman",
    subtitle: "Al Zorah Nature Reserve. Ajman Corniche. Your home. Maternity photography with presence.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Pregnancy is one of the most significant chapters of a woman's life, and the physical reality of late pregnancy — the shape, the light, the emotional weight of what is about to change — deserves to be documented with intention. Backyard Studio Official produces maternity photography in Ajman that is both genuinely beautiful and deeply authentic, creating images that mothers return to for decades rather than ones that simply exist to be posted once and forgotten.",
      "We work across Ajman's most beautiful natural and architectural settings — Al Zorah Nature Reserve for verdant, mangrove-surrounded landscapes, the Ajman Corniche for golden-hour waterfront sessions, and the Al Rashidiya and Al Nuaimiya residential areas for home visits. We are experienced with all cultural and modesty requirements that matter to expectant mothers in Ajman's community, and we approach every conversation about wardrobe, style, and session boundaries with full respect and without assumption.",
    ],
    highlights: [
      { heading: "Al Zorah Nature Reserve", body: "Ajman's most visually distinctive natural setting — mangroves, waterways, and open sky create a genuinely beautiful environment for maternity photography that feels different from any Dubai or Sharjah location." },
      { heading: "Ajman Corniche Golden Hour", body: "The Ajman Corniche at golden hour provides soft waterfront light and Gulf views — a warm, open environment that flatters maternity photography naturally and produces images with real warmth and depth." },
      { heading: "Home Visit Sessions", body: "For expectant mothers who prefer privacy and comfort, we offer home visit sessions throughout Ajman. Photographing in the family home creates intimate, personal images that capture the domestic reality of the pregnancy." },
      { heading: "Culturally Sensitive Approach", body: "Modest styling, covered arms and shoulders, abaya-inclusive sessions, and family inclusion are all accommodated without hesitation. We discuss styling and comfort preferences in detail before every session." },
    ],
    pricing: [
      { pkg: "Corniche Sunset Session", detail: "90 min / 1 outfit / 30 images", price: "From AED 1,200" },
      { pkg: "Al Zorah Nature Session", detail: "2 hrs / 2 outfits / 40 images", price: "From AED 1,600" },
      { pkg: "Home Lifestyle Session", detail: "2 hrs at your home / 35 images", price: "From AED 1,400" },
      { pkg: "Full Maternity Collection", detail: "3 hrs / 3 locations / 60 images / print-ready files", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "When should I book my maternity photoshoot in Ajman?", a: "The ideal window is between 28 and 34 weeks of pregnancy. The bump is fully defined and prominent, you are typically still comfortable and mobile, and there is enough time before the due date for a relaxed session. We recommend booking at around 24 weeks to secure your preferred time and location." },
      { q: "What are the best locations for maternity photography in Ajman?", a: "Al Zorah Nature Reserve for natural mangrove and waterside settings, the Ajman Corniche at golden hour for waterfront light, and home visit sessions for intimate documentary-style images. We recommend the session location based on the style of images the expectant mother wants." },
      { q: "Do you accommodate modest clothing in maternity sessions?", a: "Yes, fully. Abaya sessions, covered arms and shoulders, modest dress requirements, and family inclusion are all accommodated without any adjustment to the quality of the images we produce. These sessions are a regular part of how we work." },
      { q: "How much does maternity photography cost in Ajman?", a: "Corniche sessions start from AED 1,200. Al Zorah nature sessions from AED 1,600. Home lifestyle sessions from AED 1,400. Full maternity collections from AED 2,800." },
    ],
  },

  "ajman/fashion-photography": {
    title: "Fashion Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Ajman — editorial shoots, modest fashion, lookbook and e-commerce photography. Al Zorah, Ajman Museum and studio. From AED 1,600.",
    h1: "Fashion Photography in Ajman",
    subtitle: "Al Zorah. Ajman Museum. Studio. Fashion photography for modest and editorial markets.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Ajman's fashion photography market is shaped by the emirate's character — a strong tradition of modesty, a growing community of independent designers and boutique retailers, and proximity to Sharjah's major fashion institutions and markets. Backyard Studio Official produces fashion photography in Ajman for brands, designers, independent stylists, and e-commerce retailers who need imagery that communicates clearly, converts effectively, and represents their aesthetic with precision.",
      "We work across Ajman's most visually interesting environments — Al Zorah Nature Reserve for editorial campaigns set against natural backdrops, Ajman Museum's heritage architecture for shoots with cultural and contextual depth, and our portable studio setup for clean, controlled e-commerce and lookbook photography. We are particularly experienced with modest fashion photography, including abaya collections, covered fashion, and culturally specific styling requirements.",
    ],
    highlights: [
      { heading: "Modest Fashion Specialists", body: "Abaya collections, modest dress, covered fashion, and Islamic modest wear are a substantial part of our fashion photography work in Ajman. We understand these garments, how they move, how they should be styled, and how to photograph them with the same technical excellence we bring to any fashion project." },
      { heading: "Al Zorah Editorial Campaigns", body: "Al Zorah Nature Reserve's mangrove environments, waterways, and open natural light create a distinctive editorial backdrop for fashion campaigns that want a natural, organic aesthetic clearly distinct from studio or urban imagery." },
      { heading: "Ajman Museum Heritage Shoots", body: "The historic fort and surrounding heritage architecture at Ajman Museum provides sandstone textures, traditional Emirati architectural context, and a strong sense of place for fashion shoots requiring cultural depth and visual character." },
      { heading: "E-Commerce Catalogue Photography", body: "Consistent, clean product-focused fashion photography for online retailers — multiple looks, consistent lighting, and efficient turnaround for catalogue shooting that drives actual conversion." },
    ],
    pricing: [
      { pkg: "Lookbook Session", detail: "3 hrs / 1 model / 3 looks / 30 images", price: "From AED 1,600" },
      { pkg: "Editorial Campaign", detail: "Full day / creative direction / 60 final images", price: "From AED 3,500" },
      { pkg: "E-Commerce Catalogue", detail: "Per look / clean backgrounds / product focus", price: "From AED 250 / look" },
      { pkg: "Modest Fashion Collection", detail: "Half day / abaya and modest wear focus / 40 images", price: "From AED 2,200" },
    ],
    faqs: [
      { q: "Do you photograph abaya and modest fashion collections in Ajman?", a: "Yes. Modest fashion photography is a significant part of our work in Ajman and across the Northern Emirates. We photograph abaya collections, modest dress lines, covered fashion, and Islamic modest wear with full creative and technical attention." },
      { q: "What are the best fashion photography locations in Ajman?", a: "Al Zorah Nature Reserve for natural editorial backdrops, Ajman Museum for heritage architectural context, and our portable studio for clean e-commerce and lookbook photography. Location is chosen based on the brand's aesthetic and the collection's requirements." },
      { q: "Can you provide models for fashion shoots in Ajman?", a: "Yes. We work with a network of professional models in the UAE across all sizes, ethnicities, and styling requirements, including modest fashion models. Model procurement is coordinated as part of our full production service." },
      { q: "How much does fashion photography cost in Ajman?", a: "Lookbook sessions start from AED 1,600. Editorial campaigns from AED 3,500. E-commerce catalogue photography from AED 250 per look. Modest fashion collection packages from AED 2,200." },
    ],
  },

  "ajman/social-media-content": {
    title: "Social Media Content Creation in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Social media content creator in Ajman — reels, photos, UGC and brand content for Instagram, TikTok and LinkedIn. Ajman businesses and creators. From AED 1,800.",
    h1: "Social Media Content Creation in Ajman",
    subtitle: "Reels. Photos. Brand content. Social media production for Ajman businesses.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Ajman's business community — spanning the Free Zone, retail, hospitality, food and beverage, healthcare, and professional services — faces the same content pressure as every business across the UAE: social media requires consistent, high-quality visual content to remain relevant and attract clients. The difference between businesses that grow their social media presence and those that stagnate is almost always the quality and consistency of their content. Backyard Studio Official produces professional social media content for Ajman businesses that is built to perform on the platforms that matter to their specific audience.",
      "We produce reels for Instagram and TikTok, product and service photography for e-commerce and promotional posts, behind-the-scenes content that humanises brands and builds trust, and content packages designed for consistent publishing schedules. We work across all of Ajman's business sectors and understand the tonal and cultural requirements that resonate with both local Emirati audiences and the emirate's significant South Asian and Arab expat communities.",
    ],
    highlights: [
      { heading: "Reels and Short-Form Video", body: "Professionally shot and edited reels for Instagram and TikTok — scripted to your brief, filmed on location or in studio, edited with captions, music, and transitions that match your brand's established style and tone." },
      { heading: "Monthly Content Packages", body: "Ongoing monthly content production — a set number of posts, reels, and stories delivered on a rolling schedule — so your social media presence runs consistently without requiring daily attention from you or your team." },
      { heading: "Product and Service Content", body: "Clean, high-quality photography and video for products, services, menus, and offerings — shot to perform in feed posts, stories, and paid promotions across Instagram, TikTok, and Facebook." },
      { heading: "UGC-Style Content", body: "Authentic user-generated-content-style posts that build trust and social proof — shot to feel native to the platform and genuine to your audience rather than produced and staged." },
    ],
    pricing: [
      { pkg: "Content Day (Photo)", detail: "4 hrs / 30 edited images / platform-ready", price: "From AED 1,800" },
      { pkg: "Reels Package", detail: "3 reels / shot + edited / captions included", price: "From AED 2,200" },
      { pkg: "Monthly Retainer", detail: "8 posts + 4 reels / monthly / strategy included", price: "From AED 3,500 / month" },
      { pkg: "Brand Content Day", detail: "Full day / photo + video / 60 images + 5 reels", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "What social media platforms do you create content for in Ajman?", a: "Instagram, TikTok, LinkedIn, Facebook, and YouTube Shorts. We tailor the format, dimensions, pacing, and style of every piece of content to the platform it is designed for — a reel for TikTok requires a different approach than a LinkedIn carousel post or an Instagram story." },
      { q: "Do you offer ongoing monthly content packages for Ajman businesses?", a: "Yes. Monthly retainer packages include a fixed number of posts, reels, and stories delivered on a consistent schedule. These packages are structured to keep your presence active and professional without requiring your direct involvement in production." },
      { q: "Can you create content for food and beverage businesses in Ajman?", a: "Yes. Food and beverage social media content is a significant part of our work. We photograph dishes, drinks, restaurant environments, and team stories in ways that are visually compelling enough to drive foot traffic and delivery orders." },
      { q: "How much does social media content creation cost in Ajman?", a: "Content day photography from AED 1,800. Reels packages from AED 2,200. Monthly retainer packages from AED 3,500 per month. Full brand content days from AED 4,500." },
    ],
  },

  "ajman/birthday-photography": {
    title: "Birthday Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Ajman — kids birthday parties, milestone birthdays and celebration photography at home, venues and Ajman Corniche. From AED 850.",
    h1: "Birthday Photography in Ajman",
    subtitle: "Your home. Ajman venues. Corniche. Birthday photography that captures the real celebration.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday parties in Ajman happen across the full range of settings — home celebrations in Al Rashidiya and Al Nuaimiya, venue events at Ajman hotels and event spaces, outdoor parties along the Corniche, and milestone birthday gatherings that bring extended families together. Backyard Studio Official photographs birthday celebrations in Ajman with the aim of capturing the real experience of the event — the expressions, the interactions, the moments of genuine joy — rather than producing a set of posed shots that sit disconnected from what actually happened.",
      "We cover children's birthday parties with the energy and movement they require, milestone birthdays — 30th, 40th, 50th — where the gathering has real emotional weight, and family birthday celebrations where the priority is capturing the group together. We work quickly and unobtrusively enough that the celebration continues naturally around us rather than pausing for the camera.",
    ],
    highlights: [
      { heading: "Kids Birthday Parties", body: "Children's birthday parties require a photographer who can work at the pace of the event — moving with the kids, anticipating the moments before they happen, and capturing genuine reactions rather than stiff posed groups." },
      { heading: "Milestone Birthday Celebrations", body: "30th, 40th, 50th, and 60th birthdays hold real emotional significance, and the gatherings that mark them deserve to be documented properly. We treat milestone birthday photography with the same care we bring to wedding coverage." },
      { heading: "Home and Venue Coverage", body: "We cover birthday celebrations across all Ajman settings — residential homes, hotel function rooms, event venues, garden spaces, and outdoor locations. Coverage adapts to the environment rather than requiring the environment to adapt to us." },
      { heading: "Same-Day Highlight Preview", body: "A selection of 10 to 15 preview images delivered same-day for sharing on social media, with the full edited gallery following within 5 working days." },
    ],
    pricing: [
      { pkg: "2-Hour Birthday Coverage", detail: "2 hrs / 60–80 images / online gallery", price: "From AED 850" },
      { pkg: "Half-Day Coverage", detail: "4 hrs / 120–150 images / full event", price: "From AED 1,500" },
      { pkg: "Full-Day Milestone", detail: "8 hrs / unlimited images / same-day previews", price: "From AED 2,500" },
      { pkg: "Kids Party Package", detail: "2 hrs / + 15 min cake smash / 80 images", price: "From AED 1,100" },
    ],
    faqs: [
      { q: "Do you photograph children's birthday parties in Ajman?", a: "Yes. Children's birthday parties are a significant part of our event photography work in Ajman. We work quickly, stay out of the way, and capture genuine moments — the expressions, the interactions, the cake moment — rather than stopping the party to set up posed shots." },
      { q: "How far in advance should I book birthday photography in Ajman?", a: "For weekend birthday parties, book 3 to 4 weeks in advance. For large milestone events at Ajman venues, 6 to 8 weeks is recommended. Last-minute bookings are sometimes possible on weekdays — contact us to check availability." },
      { q: "Can you photograph a birthday party at a specific venue in Ajman?", a: "Yes. We cover birthday parties at all Ajman venues — hotel function rooms, event spaces, garden venues, private clubs, and residential settings. We visit the venue in advance for larger events to plan coverage." },
      { q: "How much does birthday photography cost in Ajman?", a: "Two-hour coverage starts from AED 850. Half-day coverage from AED 1,500. Full-day milestone coverage from AED 2,500. Kids party packages from AED 1,100." },
    ],
  },

  "ajman/kids-photography": {
    title: "Kids Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Ajman — portraits, milestone sessions, school photos and family portraits at Al Zorah, Ajman Corniche and your home. From AED 900.",
    h1: "Kids Photography in Ajman",
    subtitle: "Al Zorah. Ajman Corniche. Your home. Children's photography built around the child.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Children grow faster than parents expect, and the particular quality of a child at a specific age — how they hold themselves, what they find funny, how they move — belongs to a narrow window that does not return. Backyard Studio Official produces professional children's photography in Ajman that captures these moments honestly: the personality that is emerging, the relationship with parents and siblings, the genuine expressions that happen when a child is at ease rather than performing for a camera.",
      "We are experienced working with children across all ages and temperaments in Ajman — toddlers who run, school-age children who are self-conscious in front of a camera, and teenagers who need a different approach entirely. We build the session around the child's pace and comfort rather than imposing a structure on them, and we use Al Zorah Nature Reserve, the Ajman Corniche, Al Rashidiya parks, and home environments depending on what will produce the best results for each individual family.",
    ],
    highlights: [
      { heading: "Al Zorah Nature Sessions", body: "Al Zorah Nature Reserve's open natural environment — mangroves, waterways, and large sky — gives children room to move and be themselves while creating beautiful, naturally lit images that feel authentic rather than staged." },
      { heading: "Milestone Portrait Sessions", body: "First birthday, third birthday, school starting, 10th birthday — milestone portrait sessions document the child at a specific moment in their development with the intention of creating images that remain meaningful for decades." },
      { heading: "Sibling and Family Portraits", body: "Children photographed with their siblings and parents create the kind of images that become genuinely important over time. We photograph the relationship — how the children interact with each other and with their parents — not just how they look in a frame." },
      { heading: "School and Nursery Photography", body: "We offer school photography services to Ajman nurseries, primary schools, and educational institutions — consistent, high-quality individual and class portraits with an efficient session format." },
    ],
    pricing: [
      { pkg: "Mini Portrait Session", detail: "45 min / 1 child / 15 images", price: "From AED 900" },
      { pkg: "Full Portrait Session", detail: "90 min / 2 looks / 30 images", price: "From AED 1,500" },
      { pkg: "Siblings Session", detail: "90 min / multiple children / 35 images", price: "From AED 1,700" },
      { pkg: "Family Portrait Session", detail: "2 hrs / full family / 40 images / 2 locations", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best locations for children's photography in Ajman?", a: "Al Zorah Nature Reserve for open natural environments where children can move freely, the Ajman Corniche for waterfront and beach sessions, Al Rashidiya parks and open spaces, and home sessions for intimate family portraits. Location is chosen based on the child's age, personality, and what kind of images the parents want." },
      { q: "How do you get children to relax in front of the camera?", a: "We build the session around the child rather than imposing a structure on them. For younger children, we follow their lead and capture them as they play. For older children, we keep the session informal and low-pressure. The objective is natural expressions — genuine smiles happen when a child is comfortable, not when they are told to smile." },
      { q: "What age children do you photograph in Ajman?", a: "All ages — newborns through to teenagers. Each age group requires a different approach, and we are experienced across the full range. Toddlers, school-age children, and teenagers all need the session structured differently to produce natural results." },
      { q: "How much does children's photography cost in Ajman?", a: "Mini portrait sessions start from AED 900. Full portrait sessions from AED 1,500. Sibling sessions from AED 1,700. Family portrait sessions from AED 2,000." },
    ],
  },

  "ajman/engagement-photography": {
    title: "Engagement Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Ajman for couple shoots, proposal photography and pre-wedding sessions. Al Zorah Nature Reserve, Ajman Corniche and Ajman Museum. From AED 1,600.",
    h1: "Engagement Photography in Ajman",
    subtitle: "Al Zorah Nature Reserve. Ajman Corniche. Ajman Museum. Engagement photography with real depth.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Ajman's engagement photography locations offer a quiet, genuine quality that the more commercially developed emirates often lack. Al Zorah Nature Reserve — with its mangroves, flamingos, and open waterways — provides a natural environment for couple photography that is genuinely distinctive. The Ajman Corniche at golden hour delivers soft waterfront light and Gulf views. The Ajman Museum quarter's sandstone architecture and heritage courtyards provide cultural depth and authenticity. These are real environments that produce real images.",
      "We work with couples across all backgrounds and nationalities in Ajman, and we are experienced with the cultural and modesty requirements that matter in the Northern Emirates. Before every session, we spend time with the couple to understand what they actually want — the aesthetic they are drawn to, how at ease they are in front of a camera, what they want the images to communicate — and build the entire session around helping them feel genuinely comfortable rather than posed and directed.",
    ],
    highlights: [
      { heading: "Al Zorah Nature Reserve", body: "One of the UAE's most distinctive natural settings for couple photography. Mangroves, open waterways, flamingos, and the quality of light in this environment create images that look unlike anything produced in Dubai or Sharjah." },
      { heading: "Ajman Corniche Golden Hour", body: "The Ajman Corniche at sunset — warm Gulf light, open beach access, and the absence of the visual congestion of Dubai's more crowded coastal spots — produces naturally beautiful couple photography with a genuinely relaxed atmosphere." },
      { heading: "Ajman Museum Heritage Quarter", body: "The historic fort and heritage architecture surrounding Ajman Museum provides sandstone texture, traditional courtyard settings, and authentic Emirati context for engagement photography where cultural depth matters." },
      { heading: "Proposal Photography", body: "We position covertly at the chosen proposal location ahead of the moment to capture the genuine reaction — coordinating closely with the proposing partner in advance on timing, positioning, and any specific requirements." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 1,600" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 2,500" },
      { pkg: "Al Zorah Sunset Session", detail: "2 hrs / nature reserve / 40 images", price: "From AED 2,000" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Ajman?", a: "Al Zorah Nature Reserve at golden hour for natural mangrove and waterside environments; the Ajman Corniche for beach and waterfront light; Ajman Museum for heritage architecture and sandstone backgrounds; and our studio for weather-independent portrait sessions. We advise based on the couple's aesthetic preferences and the session time." },
      { q: "Do you photograph proposals in Ajman?", a: "Yes. We position covertly at the proposal location in advance to capture the genuine moment and immediate reaction. All timing and positioning is coordinated through close communication with the proposing partner before the day." },
      { q: "Are you experienced with culturally sensitive engagement photography in Ajman?", a: "Yes. We regularly work with couples who have specific cultural, religious, or family requirements around their photography sessions in Ajman and across the Northern Emirates. These conversations are always welcome before booking — we want the session to be comfortable, dignified, and genuinely enjoyable." },
      { q: "How much does engagement photography cost in Ajman?", a: "Single-location sessions start from AED 1,600. Two-location sessions from AED 2,500. Al Zorah sunset sessions from AED 2,000. Proposal photography from AED 2,000." },
    ],
  },


  // ── RAS AL KHAIMAH ────────────────────────────────────────────────────────

  "ras-al-khaimah/headshot-photography": {
    title: "Headshot Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Ras Al Khaimah — corporate portraits, LinkedIn headshots, executive photography at Jebel Jais, Al Hamra and RAK Corniche. From AED 750.",
    h1: "Headshot Photography in Ras Al Khaimah",
    subtitle: "Al Hamra Village. RAK Corniche. Jebel Jais foothills. Headshots that mean business.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's economy spans a growing tourism sector anchored by Jebel Jais and the emirate's beach resort strip, a substantial manufacturing and free zone business community, real estate development around Mina Al Arab and Al Hamra, and an expanding professional services sector. For every professional and business owner in this environment, a credible headshot is the baseline of digital trust — the image that appears before any conversation begins. Backyard Studio Official produces professional headshots in Ras Al Khaimah that reflect the seriousness and competence of your work.",
      "We shoot at Al Hamra Village and Marina for open waterfront backgrounds with resort-quality surroundings, along the RAK Corniche for classic Gulf-facing portraits, in the Jebel Jais foothills for dramatic mountain backdrops unique to RAK, and with a portable studio setup for clean, seamless-background corporate headshots at offices across RAK City and the free zones.",
    ],
    highlights: [
      { heading: "Al Hamra Marina and Village", body: "Al Hamra's marina and resort environment provides a polished, resort-quality backdrop for headshots that communicates professionalism with a distinctly RAK character — open water, clean architecture, and excellent natural light." },
      { heading: "Jebel Jais Mountain Backdrops", body: "RAK's most distinctive natural feature — the UAE's highest mountain — provides dramatic rocky terrain and elevated landscape backdrops that no other emirate can offer. For professionals who want to communicate ambition and distinctiveness, Jebel Jais headshots are genuinely memorable." },
      { heading: "Free Zone Corporate Teams", body: "RAK Economic Zone and RAK Free Trade Zone host thousands of businesses across manufacturing, trading, and services. We travel to your office and photograph your full team in a single coordinated day with a portable studio setup for consistent, professional team headshots." },
      { heading: "48-Hour Delivery", body: "Standard edited delivery in 48 hours. Rush same-day and next-day delivery available for press deadlines, conference requirements, or urgent website and directory updates." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 750" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,400" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 350 / person" },
      { pkg: "Jebel Jais Mountain Session", detail: "3 hrs / mountain backdrop / 25 images", price: "From AED 1,800" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Ras Al Khaimah?", a: "Al Hamra Marina and Village for resort-quality waterfront backgrounds, the RAK Corniche for Gulf-facing portraits, Jebel Jais foothills for mountain backdrops, and portable studio setups at your office or free zone facility for clean seamless-background corporate portraits." },
      { q: "Can you photograph our team at our RAK office or free zone?", a: "Yes. We travel to your RAK Economic Zone or RAK Free Trade Zone office, set up a portable studio on-site, and photograph your full team in one coordinated day. Images are delivered with consistent lighting, background, and colour across all team members." },
      { q: "How much does a headshot cost in Ras Al Khaimah?", a: "Individual sessions from AED 750 for 90 minutes with 10 to 15 edited images. Executive sessions from AED 1,400. Team days from AED 350 per person. Jebel Jais mountain sessions from AED 1,800." },
      { q: "Do you travel to Ras Al Khaimah from Dubai?", a: "Yes. We regularly travel to RAK for client sessions. Travel is included in the session fee for bookings above AED 1,400. For individual headshot sessions, a travel supplement applies — confirmed at the time of booking." },
    ],
  },

  "ras-al-khaimah/newborn-photography": {
    title: "Newborn Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Ras Al Khaimah — safe posed and lifestyle newborn sessions, home visits and outdoor sessions at Al Hamra Beach and Mina Al Arab. From AED 1,400.",
    h1: "Newborn Photography in Ras Al Khaimah",
    subtitle: "Al Hamra Beach. Mina Al Arab. Your home. Safe, unhurried newborn photography.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "The first two weeks after a baby is born pass faster than any parent is prepared for. The way a newborn curls, the texture of their skin, the particular sound of their breathing — these belong to a window of days that do not return. Backyard Studio Official produces newborn photography in Ras Al Khaimah that captures this window honestly: the real experience of those first days, not a performed version of it.",
      "We work with families across RAK — from Al Hamra and Mina Al Arab to RAK City and the surrounding residential areas — offering home visit sessions, outdoor lifestyle sessions at Al Hamra Beach and along the Corniche, and portable studio setups for families who prefer controlled backgrounds. Sessions are led entirely by the baby's readiness and are never rushed.",
    ],
    highlights: [
      { heading: "Home Visit Sessions", body: "We come to your RAK home with all equipment needed for both posed and lifestyle sessions. Newborns photographed in their own environment — in the bassinet, in a parent's arms, in the nursery — have an intimacy and authenticity that studio images rarely achieve." },
      { heading: "Al Hamra Beach Lifestyle Sessions", body: "Al Hamra's beach and resort environment provides a beautiful natural backdrop for newborn lifestyle photography with the natural softness that comes from open sky and water light." },
      { heading: "Safe Posing Practice", body: "Every pose we use has been specifically designed for newborns and is executed with the baby's safety as the only non-negotiable consideration. No position, prop, or handling is ever rushed or forced." },
      { heading: "Mina Al Arab Waterfront Sessions", body: "Mina Al Arab's waterfront development and natural surroundings provide clean, open outdoor settings for newborn and family lifestyle sessions with excellent natural light." },
    ],
    pricing: [
      { pkg: "Lifestyle Home Session", detail: "2 hrs at your home / 30–40 images", price: "From AED 1,400" },
      { pkg: "Posed Studio Session", detail: "3 hrs / wraps and props / 40 images", price: "From AED 1,800" },
      { pkg: "Family Welcome Session", detail: "Newborn + siblings + parents / 50 images", price: "From AED 2,200" },
      { pkg: "Al Hamra Beach Lifestyle", detail: "2 hrs outdoor / 35 images", price: "From AED 1,600" },
    ],
    faqs: [
      { q: "When should I book newborn photography in Ras Al Khaimah?", a: "Between 5 and 14 days after birth. In this window newborns sleep deeply and curl naturally into the gentle poses that define newborn photography. After two weeks the baby becomes more alert and less comfortable with extended posed handling." },
      { q: "Do you offer home visit newborn sessions in RAK?", a: "Yes. We offer home visit sessions across Ras Al Khaimah — Al Hamra, Mina Al Arab, RAK City, and surrounding residential areas. We bring all equipment needed for both lifestyle and posed sessions. Home sessions produce images with a natural intimacy that studio setups rarely replicate." },
      { q: "Is newborn photography safe?", a: "Safety is the absolute first consideration. All poses are designed specifically for newborns and executed with care. We never rush, never force any position, and never place a baby in any pose that could cause discomfort or risk of any kind." },
      { q: "How much does newborn photography cost in Ras Al Khaimah?", a: "Lifestyle home sessions from AED 1,400. Posed studio sessions from AED 1,800. Family welcome sessions from AED 2,200. Al Hamra beach lifestyle sessions from AED 1,600." },
    ],
  },

  "ras-al-khaimah/maternity-photography": {
    title: "Maternity Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Ras Al Khaimah — beach bump sessions at Al Hamra and Mina Al Arab, mountain backdrops at Jebel Jais and home visits. Culturally respectful. From AED 1,400.",
    h1: "Maternity Photography in Ras Al Khaimah",
    subtitle: "Al Hamra Beach. Jebel Jais. Mina Al Arab. Maternity photography with real presence.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah offers maternity photography settings that no other emirate can match. Al Hamra Beach at golden hour — warm light, open water, and the kind of uncluttered horizon that Dubai's coastline rarely provides. The Jebel Jais mountain foothills for dramatic elevation and rocky terrain that communicates something bold and unconventional. Mina Al Arab's waterfront development for cleaner, more architectural outdoor settings. These are genuinely distinctive environments for documenting pregnancy.",
      "We work with expectant mothers across all communities in RAK and approach every session with full understanding of the cultural and modesty requirements that matter here. From abaya sessions to beach-side maternity shoots in flowing gowns, we adapt the session to what the expectant mother actually wants rather than what we assume she should want. Wardrobe, styling, and comfort preferences are all discussed in advance.",
    ],
    highlights: [
      { heading: "Al Hamra Beach Golden Hour", body: "One of the most beautiful maternity photography settings in the UAE — warm late-afternoon light, open water, and uncluttered beach with resort-quality surroundings. Beach maternity sessions at Al Hamra produce images with a cinematic quality that is difficult to achieve in more urban settings." },
      { heading: "Jebel Jais Mountain Sessions", body: "Dramatic rocky mountain terrain at the UAE's highest peak creates a powerful and visually distinctive backdrop for maternity photography. For expectant mothers who want something genuinely different, Jebel Jais produces images unlike anything possible elsewhere in the UAE." },
      { heading: "Mina Al Arab Waterfront", body: "Mina Al Arab's waterfront architecture and natural surroundings provide a clean, modern outdoor setting with excellent natural light — particularly at golden hour when the water light is at its softest." },
      { heading: "Home Visit Sessions", body: "Intimate, unhurried home visits across RAK for expectant mothers who prefer the comfort and privacy of their own environment for their maternity photography session." },
    ],
    pricing: [
      { pkg: "Al Hamra Beach Session", detail: "90 min / 1 outfit / 30 images", price: "From AED 1,400" },
      { pkg: "Jebel Jais Mountain Session", detail: "2.5 hrs / dramatic backdrop / 35 images", price: "From AED 2,000" },
      { pkg: "Home Lifestyle Session", detail: "2 hrs at your home / 35 images", price: "From AED 1,400" },
      { pkg: "Full Maternity Collection", detail: "3 hrs / 3 locations / 60 images / print-ready files", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "When should I book my maternity session in Ras Al Khaimah?", a: "Between 28 and 34 weeks of pregnancy. The bump is fully defined, you are typically still comfortable and mobile, and there is enough time before the due date to choose your location and prepare. Book at around 24 weeks to secure your preferred time and setting." },
      { q: "What are the best locations for maternity photography in Ras Al Khaimah?", a: "Al Hamra Beach at golden hour for warm waterfront light, Jebel Jais foothills for dramatic mountain terrain, Mina Al Arab waterfront for clean architectural outdoor settings, and home visit sessions for intimate documentary-style images. We advise based on the aesthetic the expectant mother wants." },
      { q: "Can you do a Jebel Jais maternity session?", a: "Yes. Jebel Jais mountain sessions are available and produce genuinely distinctive maternity images. We plan these sessions carefully for the best light and the safest, most comfortable experience at altitude. Morning sessions offer cooler temperatures and exceptional soft light." },
      { q: "How much does maternity photography cost in Ras Al Khaimah?", a: "Al Hamra beach sessions from AED 1,400. Jebel Jais mountain sessions from AED 2,000. Home lifestyle sessions from AED 1,400. Full maternity collections from AED 3,000." },
    ],
  },

  "ras-al-khaimah/fashion-photography": {
    title: "Fashion Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Ras Al Khaimah — editorial and lookbook shoots at Jebel Jais, Al Hamra Beach and heritage sites. Modest fashion and activewear specialists. From AED 1,800.",
    h1: "Fashion Photography in Ras Al Khaimah",
    subtitle: "Jebel Jais. Al Hamra Beach. Dhayah Fort. Fashion photography with genuine character.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah offers fashion photographers something the more developed emirates cannot — raw, diverse, and visually striking environments that have not been photographed into visual cliché. Jebel Jais's rocky mountain terrain for activewear and outdoor fashion campaigns. Al Hamra's resort beaches for luxury fashion and resort wear. Dhayah Fort's ancient hilltop fortification for heritage-influenced editorial work. These are locations where fashion photography can feel genuinely original.",
      "We produce fashion photography in RAK for brands, independent designers, boutique retailers, e-commerce businesses, and individual stylists who need imagery that communicates clearly and converts effectively. We are experienced with modest fashion and activewear photography — two categories that find their most compelling settings in RAK's landscape — as well as standard lookbook and e-commerce catalogue production.",
    ],
    highlights: [
      { heading: "Jebel Jais Activewear and Outdoor Fashion", body: "The UAE's highest peak provides dramatic mountain terrain for activewear campaigns, outdoor fashion editorials, and adventure lifestyle photography that cannot be replicated in any flatland UAE emirate. The mountain environment is a genuine creative asset." },
      { heading: "Al Hamra Resort Beach Fashion", body: "Al Hamra's beach and resort environment produces luxury fashion and resort wear photography with warm waterfront light, open water backgrounds, and resort-quality surroundings — naturally aspirational without needing to be constructed." },
      { heading: "Dhayah Fort Heritage Location", body: "RAK's ancient hilltop fort provides stone architecture, elevated panoramic views, and a sense of historical depth that brings genuine character to heritage-influenced editorial fashion photography." },
      { heading: "Modest Fashion and Activewear", body: "Abaya collections, modest sportswear, covered fashion, and activewear are all areas where we have specific production experience. RAK's varied landscapes create natural, compelling environments for these categories." },
    ],
    pricing: [
      { pkg: "Lookbook Session", detail: "3 hrs / 1 model / 3 looks / 30 images", price: "From AED 1,800" },
      { pkg: "Editorial Campaign", detail: "Full day / creative direction / 60 final images", price: "From AED 3,800" },
      { pkg: "E-Commerce Catalogue", detail: "Per look / clean backgrounds / product focus", price: "From AED 250 / look" },
      { pkg: "Jebel Jais Adventure Campaign", detail: "Full day / mountain location / 50 images", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "What makes Ras Al Khaimah unique for fashion photography?", a: "RAK offers environments that other UAE emirates cannot — Jebel Jais mountain terrain for activewear and outdoor fashion, Al Hamra's undeveloped beach stretches for resort wear, and Dhayah Fort for heritage-influenced editorial work. These locations are visually distinctive and have not been photographed into cliché." },
      { q: "Do you photograph activewear and outdoor fashion brands at Jebel Jais?", a: "Yes. Jebel Jais is an exceptional location for activewear campaigns, outdoor fashion editorials, and adventure lifestyle photography. We plan mountain sessions carefully for light, safety, and logistics — morning sessions are typically best for light quality and cooler temperatures." },
      { q: "Can you provide models for fashion shoots in Ras Al Khaimah?", a: "Yes. We work with a network of professional models across the UAE for all categories — including modest fashion models and activewear specialists. Model procurement is coordinated as part of our full production service." },
      { q: "How much does fashion photography cost in Ras Al Khaimah?", a: "Lookbook sessions from AED 1,800. Editorial campaigns from AED 3,800. E-commerce catalogue from AED 250 per look. Jebel Jais adventure campaigns from AED 4,500." },
    ],
  },

  "ras-al-khaimah/social-media-content": {
    title: "Social Media Content Creation in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Social media content creator in Ras Al Khaimah — reels, photos and brand content for hospitality, tourism, real estate and F&B businesses. From AED 1,800.",
    h1: "Social Media Content Creation in Ras Al Khaimah",
    subtitle: "Reels. Brand content. Photography. Social media production for RAK businesses.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Ras Al Khaimah's business community is growing rapidly across hospitality, real estate, tourism, food and beverage, and retail — and every business in these sectors faces the same challenge: social media demands consistent, high-quality visual content to attract clients and remain relevant. The gap between businesses that grow their digital presence and those that stagnate comes down almost entirely to content quality and consistency. Backyard Studio Official produces professional social media content for RAK businesses built to perform on the platforms that actually drive bookings and enquiries.",
      "We understand RAK's specific audience mix — the growing expat community, the resort tourism market, the UAE-wide audience that RAK is actively trying to attract with its adventure and nature positioning, and the local Emirati community. Content is built around what resonates with these specific audiences rather than generic social media templates.",
    ],
    highlights: [
      { heading: "Hospitality and Tourism Content", body: "Hotels, resorts, tour operators, and adventure tourism businesses in RAK need content that captures the emirate's unique appeal — Jebel Jais, the beaches, the heritage. We produce photography and video content that communicates what makes RAK different from Dubai and Sharjah." },
      { heading: "Reels and Short-Form Video", body: "Professionally shot and edited Instagram and TikTok reels — scripted to your brief, filmed at RAK's most visually compelling locations, edited with music, captions, and pacing that drives real engagement rather than passive scrolling." },
      { heading: "Real Estate Content", body: "Mina Al Arab, Al Hamra, and the growing RAK residential and resort property market needs photography and video content that communicates quality, lifestyle, and investment value to both local and international buyers." },
      { heading: "Monthly Content Packages", body: "Ongoing monthly content production for RAK businesses — a consistent volume of posts, reels, and stories delivered on a rolling schedule so your social presence runs without requiring your direct daily involvement." },
    ],
    pricing: [
      { pkg: "Content Day (Photo)", detail: "4 hrs / 30 edited images / platform-ready", price: "From AED 1,800" },
      { pkg: "Reels Package", detail: "3 reels / shot + edited / captions included", price: "From AED 2,200" },
      { pkg: "Monthly Retainer", detail: "8 posts + 4 reels / monthly / strategy included", price: "From AED 3,500 / month" },
      { pkg: "Tourism Content Campaign", detail: "Full day / photo + video / Jebel Jais or beach", price: "From AED 5,000" },
    ],
    faqs: [
      { q: "What industries do you create social media content for in Ras Al Khaimah?", a: "Hospitality and hotels, adventure tourism, real estate, food and beverage, retail, professional services, and personal brands. RAK's growing tourism positioning means a significant portion of our RAK content work is for businesses that want to attract visitors from Dubai and Abu Dhabi." },
      { q: "Can you create content that showcases Ras Al Khaimah's unique locations?", a: "Yes — Jebel Jais, Al Hamra Beach, Dhayah Fort, Mina Al Arab, and the RAK Corniche all feature in our content production. Showcasing RAK's distinctive environment is one of the strongest content strategies available to businesses in the emirate." },
      { q: "Do you offer monthly content packages for RAK businesses?", a: "Yes. Monthly retainer packages include a fixed volume of posts, reels, and stories delivered on a consistent schedule. These are particularly suitable for hospitality and tourism businesses that need a constant stream of high-quality content across peak and off-peak seasons." },
      { q: "How much does social media content creation cost in Ras Al Khaimah?", a: "Content day photography from AED 1,800. Reels packages from AED 2,200. Monthly retainers from AED 3,500 per month. Tourism content campaigns from AED 5,000." },
    ],
  },

  "ras-al-khaimah/birthday-photography": {
    title: "Birthday Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Ras Al Khaimah — kids parties, milestone celebrations and family birthdays at Al Hamra, hotel venues and your home. From AED 850.",
    h1: "Birthday Photography in Ras Al Khaimah",
    subtitle: "Al Hamra venues. Your home. RAK hotels. Birthday photography that captures the day.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday celebrations in Ras Al Khaimah happen across a full range of settings — home parties in Al Nakheel and Al Hamra residential areas, venue events at RAK's hotel and resort spaces, beach parties along the Corniche, and outdoor celebrations that take advantage of the emirate's natural environments. Backyard Studio Official photographs birthday celebrations in RAK with the aim of capturing what actually happened — the genuine interactions, the expressions, the moments of real joy — rather than a set of staged portraits that sit beside the event rather than inside it.",
      "We cover children's birthday parties with the pace and energy they require, milestone birthdays at RAK's resort venues where the gathering deserves documentary treatment, and family celebrations where capturing the group together is the priority.",
    ],
    highlights: [
      { heading: "Resort and Hotel Venue Coverage", body: "RAK's growing hotel and resort sector hosts many of the emirate's significant birthday events. We cover celebrations at Al Hamra, Rixos, InterContinental, and other RAK venues with experience navigating the lighting conditions and logistics of hotel function rooms and outdoor resort spaces." },
      { heading: "Kids Birthday Parties", body: "Children's parties require a photographer who moves with the event rather than stopping it. We anticipate the moments — the cake arrival, the games, the interactions — and capture them without directing the children away from what they are actually doing." },
      { heading: "Milestone Birthday Coverage", body: "30th, 40th, 50th, and 60th milestone birthdays deserve the same serious documentary approach as a wedding. These gatherings have real emotional significance and the photography should reflect that." },
      { heading: "Same-Day Preview Gallery", body: "A selection of 10 to 15 preview images delivered same-day for social media sharing, with the full edited gallery following within 5 working days." },
    ],
    pricing: [
      { pkg: "2-Hour Birthday Coverage", detail: "2 hrs / 60–80 images / online gallery", price: "From AED 850" },
      { pkg: "Half-Day Coverage", detail: "4 hrs / 120–150 images / full event", price: "From AED 1,500" },
      { pkg: "Full-Day Milestone", detail: "8 hrs / unlimited images / same-day previews", price: "From AED 2,500" },
      { pkg: "Kids Party Package", detail: "2 hrs / + cake smash add-on option / 80 images", price: "From AED 1,100" },
    ],
    faqs: [
      { q: "Do you travel to Ras Al Khaimah for birthday photography?", a: "Yes. We cover birthday celebrations throughout RAK — home parties, hotel and resort venues, outdoor beach celebrations, and garden events. Travel to RAK is included for bookings above AED 1,400." },
      { q: "Can you photograph at a specific RAK hotel or resort?", a: "Yes. We are experienced working at Al Hamra, Rixos Bab Al Bahr, InterContinental RAK, and other RAK resort and hotel venues. For larger events we visit the venue in advance to plan the coverage." },
      { q: "How far in advance should I book birthday photography in Ras Al Khaimah?", a: "For home birthday parties, 2 to 3 weeks in advance is typically sufficient. For large resort or hotel events, book 6 to 8 weeks ahead to secure the date. Last-minute bookings are sometimes available on weekdays." },
      { q: "How much does birthday photography cost in Ras Al Khaimah?", a: "Two-hour coverage from AED 850. Half-day coverage from AED 1,500. Full-day milestone coverage from AED 2,500. Kids party packages from AED 1,100." },
    ],
  },

  "ras-al-khaimah/kids-photography": {
    title: "Kids Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Ras Al Khaimah — family portraits, milestone sessions and kids photography at Jebel Jais, Al Hamra Beach and your home. From AED 900.",
    h1: "Kids Photography in Ras Al Khaimah",
    subtitle: "Al Hamra Beach. Jebel Jais. Your home. Children's photography built around the child.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Children in Ras Al Khaimah grow up in one of the UAE's most naturally rich environments — open beaches, mountain trails, open spaces that give children room to actually be children. Professional photography that captures your child in these environments, in the particular way they exist at a specific age, creates something genuinely irreplaceable. Backyard Studio Official produces children's photography in RAK that documents who your child actually is right now: their personality, their relationships, their way of being in the world.",
      "We are experienced working with children across all ages and temperaments, and we build every session around the child's pace and comfort rather than imposing a structure on them. Al Hamra Beach, Jebel Jais, the RAK Corniche, local parks, and family homes are all settings where we produce natural, authentic images — the kind that parents look back at for decades.",
    ],
    highlights: [
      { heading: "Al Hamra Beach Sessions", body: "Open beach, clean water, and warm natural light create an environment where children naturally relax and play — producing authentic, joyful images that feel genuinely documentary rather than posed." },
      { heading: "Jebel Jais Adventure Sessions", body: "For older children and teenagers who want something genuinely different — mountain terrain, elevation, and dramatic landscape create children's portraits that are distinctive and memorable." },
      { heading: "Milestone Portrait Sessions", body: "First birthday, school starting, 10th birthday, teenage portraits — milestone sessions document your child at a specific moment in their development with images intended to remain meaningful for decades." },
      { heading: "Home and Lifestyle Sessions", body: "Photographing children in their own home produces images with an intimacy and authenticity that outdoor sessions often cannot achieve — the relationship with siblings, the family dog, the particular corners of a childhood home." },
    ],
    pricing: [
      { pkg: "Mini Portrait Session", detail: "45 min / 1 child / 15 images", price: "From AED 900" },
      { pkg: "Full Portrait Session", detail: "90 min / 2 looks / 30 images", price: "From AED 1,500" },
      { pkg: "Siblings Session", detail: "90 min / multiple children / 35 images", price: "From AED 1,700" },
      { pkg: "Family Portrait Session", detail: "2 hrs / full family / 40 images / 2 locations", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best locations for children's photography in Ras Al Khaimah?", a: "Al Hamra Beach for natural outdoor sessions where children can play freely, Jebel Jais foothills for older children and distinctive mountain backdrops, the RAK Corniche for waterfront portraits, and home sessions for intimate family and sibling photography." },
      { q: "How do you work with young children who are nervous about cameras?", a: "We build the session around the child rather than imposing a structure on them. For young children we follow their lead and photograph them as they play and explore. Natural expressions happen when a child is comfortable — not when they are told to perform for a camera." },
      { q: "Do you travel to residential areas across RAK for children's photography?", a: "Yes. We cover sessions across RAK — Al Hamra, Mina Al Arab, Al Nakheel, RAK City, and surrounding residential areas. Home visits are available throughout the emirate." },
      { q: "How much does children's photography cost in Ras Al Khaimah?", a: "Mini portrait sessions from AED 900. Full portrait sessions from AED 1,500. Sibling sessions from AED 1,700. Family portrait sessions from AED 2,000." },
    ],
  },

  "ras-al-khaimah/engagement-photography": {
    title: "Engagement Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Ras Al Khaimah — couple shoots and proposal photography at Jebel Jais, Al Hamra Beach and Dhayah Fort. Culturally respectful. From AED 1,800.",
    h1: "Engagement Photography in Ras Al Khaimah",
    subtitle: "Jebel Jais. Al Hamra Beach. Dhayah Fort. Engagement photography with genuine character.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's engagement photography settings are among the most visually diverse and distinctive in the UAE. Jebel Jais — the UAE's highest mountain — provides dramatic rocky terrain and elevated panoramic views for couple photography that is genuinely unlike anything possible in Dubai or Abu Dhabi. Al Hamra Beach at golden hour delivers warm Gulf light, open water, and undeveloped beach stretches with resort surroundings. Dhayah Fort — the UAE's only hilltop fort — combines ancient stone architecture with 360-degree views across the emirate. These are real environments with real character.",
      "We work with couples across all nationalities and backgrounds in RAK, and we are experienced with the cultural and sensitivity requirements that matter across the Northern Emirates. Before every session, we spend time understanding what the couple actually wants — the aesthetic, the atmosphere, how comfortable they are in front of a camera — and build the entire session around making them feel genuinely at ease.",
    ],
    highlights: [
      { heading: "Jebel Jais Mountain Sessions", body: "The UAE's highest peak provides dramatic, rugged mountain terrain for couple photography that no other emirate can offer. Sunrise sessions on Jebel Jais produce spectacular engagement images with extraordinary light and elevation — genuinely unforgettable as a backdrop." },
      { heading: "Al Hamra Beach Golden Hour", body: "Al Hamra's undeveloped beach at golden hour — warm light, open water, and the kind of undisturbed beach space that Dubai's overcrowded coastline cannot offer. Beach engagement sessions here have a naturally cinematic quality." },
      { heading: "Dhayah Fort Heritage Sessions", body: "The UAE's only surviving hilltop fort provides ancient stone walls, elevated viewpoints, and a depth of historical context that brings real character to engagement photography for couples who want something culturally rooted and visually distinctive." },
      { heading: "Proposal Photography", body: "We position covertly at your chosen RAK proposal location — Jebel Jais viewpoint, Al Hamra waterfront, Dhayah Fort hilltop — to capture the genuine moment and immediate reaction. All timing and positioning is coordinated closely with the proposing partner in advance." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 1,800" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 2,800" },
      { pkg: "Jebel Jais Sunrise Session", detail: "3 hrs / mountain / 45 images", price: "From AED 3,000" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,200" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Ras Al Khaimah?", a: "Jebel Jais for dramatic mountain terrain and elevation — unique in the UAE; Al Hamra Beach at golden hour for warm waterfront light and open beach; Dhayah Fort for hilltop views and heritage architecture; Mina Al Arab waterfront for cleaner modern outdoor settings. We recommend based on the couple's aesthetic preferences." },
      { q: "Can we do a sunrise engagement shoot on Jebel Jais?", a: "Yes. Jebel Jais sunrise sessions are logistically more involved but produce spectacular results — extraordinary light, cooler temperatures, and the mountain largely to yourselves. We plan these sessions in advance with full logistics coordination." },
      { q: "Do you photograph proposals in Ras Al Khaimah?", a: "Yes. We position covertly at the proposal location in advance to capture the genuine moment and immediate reaction. All timing and positioning is coordinated through close communication with the proposing partner before the day. RAK's scenic locations — Jebel Jais, Dhayah Fort, Al Hamra waterfront — make for genuinely spectacular proposal photography." },
      { q: "How much does engagement photography cost in Ras Al Khaimah?", a: "Single-location sessions from AED 1,800. Two-location sessions from AED 2,800. Jebel Jais sunrise sessions from AED 3,000. Proposal photography from AED 2,200." },
    ],
  },


  // ── FUJAIRAH ──────────────────────────────────────────────────────────────

  "fujairah/headshot-photography": {
    title: "Headshot Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Fujairah — corporate portraits, LinkedIn headshots and executive photography at Fujairah Corniche, Al Aqah Beach and city centre. From AED 750.",
    h1: "Headshot Photography in Fujairah",
    subtitle: "Fujairah Corniche. Al Aqah Beach. City Centre. Headshots that make the right first impression.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Fujairah sits on the Gulf of Oman — the UAE's only emirate entirely on the east coast — and its business community reflects this distinct geography. Government and public sector institutions, a growing port and logistics sector anchored by the Port of Fujairah, tourism built around the emirate's beaches and mountain landscapes, and a professional community that serves both local and wider UAE markets. For every professional operating in this environment, a credible headshot is the most immediate statement of professional intent. Backyard Studio Official produces headshots in Fujairah that communicate exactly that.",
      "We photograph at the Fujairah Corniche for waterfront Gulf of Oman portraits unlike any available on the west coast, at Al Aqah Beach for resort-quality natural backdrops, in the city centre for clean urban environments, and with portable studio setups for teams at government offices and business premises across the emirate.",
    ],
    highlights: [
      { heading: "Gulf of Oman Waterfront Portraits", body: "Fujairah's Corniche along the Gulf of Oman provides a genuinely distinctive backdrop — different in colour, character, and light from the Arabian Gulf coastline of Dubai or Abu Dhabi. East-coast light is softer in the morning, making the Corniche an exceptional headshot location." },
      { heading: "Al Aqah Beach Resort Setting", body: "Al Aqah's beach and resort environment produces headshots with a clean, aspirational quality — open water, natural beach, and the Hajar Mountains visible inland. For professionals who want a distinctive natural backdrop, Al Aqah offers something genuinely unique." },
      { heading: "Government and Public Sector Teams", body: "Fujairah's public sector and government institutions represent a significant professional community. We offer on-site portable studio headshot days for government departments and semi-government entities — consistent, formal portraits with quick delivery." },
      { heading: "48-Hour Standard Delivery", body: "Edited headshots delivered in 48 hours as standard. Rush delivery available for press, conference, or directory requirements." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 750" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,400" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 350 / person" },
      { pkg: "Al Aqah Beach Session", detail: "2 hrs / resort location / 20 images", price: "From AED 1,600" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Fujairah?", a: "The Fujairah Corniche for Gulf of Oman waterfront portraits, Al Aqah Beach for resort-quality natural settings, the city centre for clean urban environments, and portable studio setups for government offices, business premises, and team days across the emirate." },
      { q: "Do you travel to Fujairah from Dubai for headshots?", a: "Yes. We regularly travel to Fujairah for headshot sessions. Travel is included in the session fee for bookings above AED 1,400. For smaller individual bookings, a travel supplement applies — confirmed at booking." },
      { q: "Can you photograph government and public sector teams in Fujairah?", a: "Yes. We offer on-site portable studio headshot days for government departments, semi-government entities, and large business teams across Fujairah. We set up a consistent studio environment on-site and photograph teams efficiently in a single day." },
      { q: "How much does a headshot cost in Fujairah?", a: "Individual sessions from AED 750. Executive sessions from AED 1,400. Team days from AED 350 per person. Al Aqah beach sessions from AED 1,600." },
    ],
  },

  "fujairah/newborn-photography": {
    title: "Newborn Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Fujairah — home visits, lifestyle sessions and beach newborn photography at Al Aqah and Fujairah Corniche. Safe, unhurried. From AED 1,400.",
    h1: "Newborn Photography in Fujairah",
    subtitle: "Al Aqah Beach. Your home. Fujairah Corniche. Safe, unhurried newborn photography.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "The first two weeks of a newborn's life pass in a way that parents consistently describe as simultaneously overwhelming and fleeting. The particular way a baby curls in those first days, the expressions, the way they fit in a parent's arms — these belong to a window that does not return. Backyard Studio Official produces newborn photography in Fujairah that captures this window honestly and carefully: the real texture of those first days, not a performed version of them.",
      "We work with families across the emirate — from Fujairah City and Dibba to Al Aqah and the coastal communities — offering home visit sessions, lifestyle sessions, and outdoor sessions at Al Aqah Beach where the natural light and the Hajar Mountain backdrop create a setting unlike anything available in the more densely developed emirates.",
    ],
    highlights: [
      { heading: "Home Visit Sessions", body: "We come to your Fujairah home with full equipment for posed and lifestyle newborn photography. Newborns in their own environment — in the bassinet, in a parent's arms, in the nursery — produce images with an intimacy that studio setups rarely achieve." },
      { heading: "Al Aqah Beach Lifestyle Sessions", body: "Al Aqah's beach at golden hour — with the Hajar Mountains visible behind and the Gulf of Oman ahead — creates a uniquely beautiful setting for newborn lifestyle sessions. The combination of mountain and sea is specific to Fujairah's east coast." },
      { heading: "Safe Posing Practice", body: "Every pose is designed specifically for newborns and executed with safety as the absolute first consideration. Sessions are never rushed and no position is ever forced or uncomfortable for the baby." },
      { heading: "Dibba and North Fujairah Coverage", body: "We cover all of Fujairah emirate including Dibba Al Fujairah in the north and the surrounding residential communities. Home visits are available throughout the emirate." },
    ],
    pricing: [
      { pkg: "Lifestyle Home Session", detail: "2 hrs at your home / 30–40 images", price: "From AED 1,400" },
      { pkg: "Posed Studio Session", detail: "3 hrs / wraps and props / 40 images", price: "From AED 1,800" },
      { pkg: "Family Welcome Session", detail: "Newborn + siblings + parents / 50 images", price: "From AED 2,200" },
      { pkg: "Al Aqah Beach Lifestyle", detail: "2 hrs / mountain + sea backdrop / 35 images", price: "From AED 1,600" },
    ],
    faqs: [
      { q: "When should I book newborn photography in Fujairah?", a: "Between 5 and 14 days after birth. This is when newborns sleep most deeply and curl naturally into the gentle poses that define newborn photography. Book in advance — ideally during pregnancy — to secure your preferred date." },
      { q: "Do you offer home visits for newborn photography in Fujairah?", a: "Yes. Home visits are available across Fujairah City, Dibba, Al Aqah, and surrounding residential areas. We bring all equipment needed for both lifestyle and posed sessions." },
      { q: "What is unique about newborn photography in Fujairah?", a: "Al Aqah Beach with the Hajar Mountains as a backdrop creates a setting for outdoor newborn lifestyle photography that is genuinely specific to Fujairah's east coast geography — mountain and sea together in one frame." },
      { q: "How much does newborn photography cost in Fujairah?", a: "Lifestyle home sessions from AED 1,400. Posed studio sessions from AED 1,800. Family welcome sessions from AED 2,200. Al Aqah beach sessions from AED 1,600." },
    ],
  },

  "fujairah/maternity-photography": {
    title: "Maternity Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Fujairah — bump sessions at Al Aqah Beach, Wadi Wurayah and Fujairah Corniche. Culturally respectful. From AED 1,400.",
    h1: "Maternity Photography in Fujairah",
    subtitle: "Al Aqah Beach. Wadi Wurayah. Fujairah Corniche. Maternity photography with real character.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Fujairah's maternity photography settings are defined by the emirate's unique geography: the east coast on the Gulf of Oman, the Hajar Mountains rising directly from the coastal plain, and wadis cutting through dramatic rocky terrain. Al Aqah Beach with the mountains behind it. The Fujairah Corniche at sunset. Wadi Wurayah — the UAE's only freshwater waterfall — for lush green canyon settings found nowhere else in the country. These are environments that produce maternity photography with a character entirely distinct from what is possible in Dubai or Abu Dhabi.",
      "We work with expectant mothers across all backgrounds and communities in Fujairah, with full respect for cultural and modesty requirements. Every session begins with a conversation about what the expectant mother actually wants — the aesthetic, the atmosphere, the wardrobe, the degree of comfort in front of the camera — and the session is built entirely around her preferences.",
    ],
    highlights: [
      { heading: "Al Aqah Beach Golden Hour", body: "Al Aqah at golden hour — warm east-coast light, Gulf of Oman water, Hajar Mountains as a backdrop — creates maternity photography with a cinematic, naturally dramatic quality that no west-coast UAE beach can replicate." },
      { heading: "Wadi Wurayah Green Canyon", body: "The UAE's only freshwater waterfall sits in Wadi Wurayah, accessible from Fujairah. Lush green canyon walls, flowing water, and deep shade create maternity photography settings found nowhere else in the UAE — dramatic, cool, and genuinely unique." },
      { heading: "Fujairah Corniche at Sunset", body: "The Corniche along the Gulf of Oman provides a long, open waterfront for maternity portraits with east-coast sunset light — distinct in colour and quality from the Arabian Gulf light of Dubai." },
      { heading: "Cultural Sensitivity", body: "We approach every maternity session with full understanding of the modesty and cultural requirements that matter to families in Fujairah. Abaya sessions, fully covered sessions, and more open-style beach sessions are all handled with equal care and respect." },
    ],
    pricing: [
      { pkg: "Al Aqah Beach Session", detail: "90 min / 1 outfit / 30 images", price: "From AED 1,400" },
      { pkg: "Wadi Session", detail: "2.5 hrs / canyon backdrop / 35 images", price: "From AED 1,800" },
      { pkg: "Home Lifestyle Session", detail: "2 hrs at your home / 35 images", price: "From AED 1,400" },
      { pkg: "Full Maternity Collection", detail: "3 hrs / 3 locations / 60 images", price: "From AED 3,000" },
    ],
    faqs: [
      { q: "When should I book my maternity session in Fujairah?", a: "Between 28 and 34 weeks of pregnancy. Book at 24 weeks to secure your preferred location and time, particularly for Al Aqah beach and wadi sessions where golden-hour timing matters." },
      { q: "What makes maternity photography in Fujairah different?", a: "Fujairah's east-coast geography — Al Aqah Beach with the Hajar Mountains behind it, Wadi Wurayah's green canyon and waterfall, and the Corniche along the Gulf of Oman — creates maternity photography settings that are genuinely distinctive from anything available in Dubai or Abu Dhabi." },
      { q: "Can you do a Wadi Wurayah maternity session?", a: "Yes. Wadi Wurayah sessions require planning for access and timing, but the results — lush green canyon walls and the UAE's only freshwater waterfall — produce genuinely extraordinary maternity photography. We coordinate all logistics in advance." },
      { q: "How much does maternity photography cost in Fujairah?", a: "Al Aqah beach sessions from AED 1,400. Wadi sessions from AED 1,800. Home lifestyle sessions from AED 1,400. Full maternity collections from AED 3,000." },
    ],
  },

  "fujairah/fashion-photography": {
    title: "Fashion Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Fujairah — editorial shoots at Al Aqah Beach, Hajar Mountains, Wadi Wurayah and heritage forts. Modest fashion and activewear specialists. From AED 1,800.",
    h1: "Fashion Photography in Fujairah",
    subtitle: "Al Aqah Beach. Hajar Mountains. Wadi Wurayah. Fashion photography with genuine terrain.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Fujairah offers fashion photographers something the western UAE emirates structurally cannot — east-coast light, mountain terrain, wadis, ancient forts, and beach environments that have not been photographed into creative exhaustion. Al Aqah Beach for resort fashion with the Hajar Mountains as backdrop. Wadi Wurayah's green canyon for lush, unexpected fashion editorial work. Fujairah Fort and the Bithnah Fort area for heritage-rooted editorial with ancient stone architecture. Hajar Mountain trails for activewear campaigns in genuinely dramatic terrain.",
      "We produce fashion photography in Fujairah for brands, designers, e-commerce businesses, and independent stylists who need images that are visually distinctive and perform commercially. Modest fashion and activewear are two categories that find particularly strong environments in Fujairah's varied landscape.",
    ],
    highlights: [
      { heading: "Al Aqah Beach Resort Fashion", body: "Al Aqah's beach with the Hajar Mountains rising behind it creates fashion photography with a dramatically different visual character from Dubai's beach environments. For resort wear, modest swimwear, and luxury fashion, Al Aqah produces images that stand out." },
      { heading: "Hajar Mountain Activewear", body: "Mountain terrain, rocky ridgelines, and dramatic elevation create activewear and outdoor fashion photography with authentic character — the kind that can only be created in real mountain environments, not approximated in studio." },
      { heading: "Wadi and Heritage Fashion", body: "Wadi Wurayah's lush canyon and Fujairah's ancient forts provide fashion settings with depth, texture, and historical resonance. For heritage-influenced editorial work or fashion that wants to reference the natural world, these are extraordinary environments." },
      { heading: "Modest Fashion Expertise", body: "We have specific experience photographing abaya collections, modest sportswear, covered fashion, and modest swimwear in outdoor environments that suit these garments naturally. Fujairah's mountain and beach settings are ideal for this category." },
    ],
    pricing: [
      { pkg: "Lookbook Session", detail: "3 hrs / 1 model / 3 looks / 30 images", price: "From AED 1,800" },
      { pkg: "Editorial Campaign", detail: "Full day / creative direction / 60 final images", price: "From AED 3,800" },
      { pkg: "E-Commerce Catalogue", detail: "Per look / clean backgrounds / product focus", price: "From AED 250 / look" },
      { pkg: "Mountain Adventure Campaign", detail: "Full day / Hajar terrain / 50 images", price: "From AED 4,200" },
    ],
    faqs: [
      { q: "What makes Fujairah unique for fashion photography?", a: "East-coast light, Hajar Mountain terrain, Wadi Wurayah's green canyon, Al Aqah Beach with mountain backdrop, and ancient fort architecture — Fujairah offers fashion photography settings with genuine visual character that are unavailable in Dubai or the western emirates." },
      { q: "Do you photograph modest fashion in Fujairah?", a: "Yes. Modest fashion, abaya collections, covered activewear, and modest swimwear are categories we photograph regularly. Fujairah's outdoor environments — mountain trails, beach, wadi — provide natural, compelling settings for these garments." },
      { q: "Can you provide models for fashion shoots in Fujairah?", a: "Yes. We work with a network of professional models across the UAE including modest fashion and activewear specialists. Model procurement is coordinated as part of our full production service." },
      { q: "How much does fashion photography cost in Fujairah?", a: "Lookbook sessions from AED 1,800. Editorial campaigns from AED 3,800. E-commerce catalogue from AED 250 per look. Mountain adventure campaigns from AED 4,200." },
    ],
  },

  "fujairah/social-media-content": {
    title: "Social Media Content Creation in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Social media content creator in Fujairah — reels, photos and brand content for hospitality, tourism, real estate and F&B businesses. From AED 1,800.",
    h1: "Social Media Content Creation in Fujairah",
    subtitle: "Reels. Brand content. Photography. Social media production for Fujairah businesses.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Fujairah's economy is growing across tourism, hospitality, port and logistics, real estate, and retail — and every business in these sectors faces the same content challenge: social media demands consistent, high-quality visual output to attract customers and remain competitive. The businesses in Fujairah that are building a real digital presence are the ones investing in professional content. Backyard Studio Official produces social media content for Fujairah businesses that is built to perform — photography and video that communicates quality, attracts the right audience, and drives actual enquiries.",
      "Fujairah has a content angle that many UAE businesses haven't fully exploited: the east coast story. The Gulf of Oman, the Hajar Mountains, the wadis, the heritage sites — this is visually distinct from Dubai content and resonates with audiences who are specifically interested in the less-developed, more authentic side of the UAE. We help businesses tell that story.",
    ],
    highlights: [
      { heading: "Tourism and Hospitality Content", body: "Hotels, beach resorts, dive centres, adventure tourism operators, and tour companies in Fujairah need content that communicates the emirate's unique natural appeal. We produce photography and video that shows what makes Fujairah different." },
      { heading: "Reels and Short-Form Video", body: "Professionally shot and edited Instagram and TikTok reels — scripted to your brief, filmed at Fujairah's most compelling locations, edited with music, captions, and pacing that drives engagement rather than passive scrolling." },
      { heading: "East Coast Brand Positioning", body: "Fujairah's east coast story — Gulf of Oman, mountains, wadis, heritage — is a genuine content differentiator. We help businesses use this geography as a brand asset, creating content that positions Fujairah businesses as distinctive rather than competing directly with Dubai on Dubai's own terms." },
      { heading: "Monthly Content Packages", body: "Ongoing monthly content production for Fujairah businesses — a consistent volume of posts, reels, and stories on a rolling schedule so your social presence runs without requiring your daily attention." },
    ],
    pricing: [
      { pkg: "Content Day (Photo)", detail: "4 hrs / 30 edited images / platform-ready", price: "From AED 1,800" },
      { pkg: "Reels Package", detail: "3 reels / shot + edited / captions included", price: "From AED 2,200" },
      { pkg: "Monthly Retainer", detail: "8 posts + 4 reels / monthly / strategy included", price: "From AED 3,500 / month" },
      { pkg: "East Coast Campaign", detail: "Full day / photo + video / beach or mountain", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "What types of businesses do you create social media content for in Fujairah?", a: "Hospitality and hotels, dive and water sports operators, adventure tourism, real estate, food and beverage, retail, and professional services. Fujairah's east coast setting and growing tourism market makes it particularly strong for hospitality and tourism content." },
      { q: "Can you help us use Fujairah's natural settings in our brand content?", a: "Yes — using Fujairah's geography as a brand asset is one of the strongest content strategies available to businesses here. Al Aqah Beach, the Hajar Mountains, wadis, and heritage sites create content that stands out from generic Dubai-style production." },
      { q: "Do you offer monthly content packages for Fujairah businesses?", a: "Yes. Monthly retainer packages cover a fixed volume of posts, reels, and stories on a consistent schedule — particularly suitable for tourism and hospitality businesses that need constant high-quality content across seasons." },
      { q: "How much does social media content creation cost in Fujairah?", a: "Content day photography from AED 1,800. Reels packages from AED 2,200. Monthly retainers from AED 3,500 per month. East coast campaign from AED 4,500." },
    ],
  },

  "fujairah/birthday-photography": {
    title: "Birthday Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Fujairah — kids parties, milestone celebrations and family birthdays at Al Aqah resorts, home events and Fujairah venues. From AED 850.",
    h1: "Birthday Photography in Fujairah",
    subtitle: "Al Aqah resorts. Your home. Fujairah venues. Birthday photography that captures the real day.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday celebrations in Fujairah range from home parties in Fujairah City's residential neighbourhoods to resort events at Al Aqah Beach Hotels, beach parties along the Corniche, and family gatherings that take full advantage of the emirate's outdoor spaces. Backyard Studio Official photographs birthday events in Fujairah with the priority of capturing what actually happened — the genuine expressions, the interactions between people who matter to each other, the moments of real joy — rather than arranging everything for the camera and missing the actual event.",
      "We cover children's birthday parties with the pace and energy they demand, milestone birthdays at resort venues where the occasion deserves documentary coverage, and family celebrations where capturing the group together and the authentic atmosphere of the day is the goal.",
    ],
    highlights: [
      { heading: "Al Aqah Resort Venue Coverage", body: "Al Aqah's beach resort hotels host celebrations in remarkable settings — we cover birthday events at Rotana, Le Meridien, and Sandy Beach with experience navigating the lighting and logistics of resort function spaces and beach party settings." },
      { heading: "Home Birthday Parties", body: "Home parties across Fujairah City, Dibba, and surrounding residential areas. We cover the arrival energy, the cake moment, the games, and the family interactions that make home parties genuinely meaningful." },
      { heading: "Milestone Birthday Coverage", body: "30th, 40th, 50th, and 60th milestone birthdays at Fujairah's venues and outdoor spaces deserve documentary coverage with the same serious attention as a wedding. These events matter and the photography should reflect that." },
      { heading: "Same-Day Preview Gallery", body: "10 to 15 preview images delivered same-day for social media, with the full edited gallery following within 5 working days." },
    ],
    pricing: [
      { pkg: "2-Hour Birthday Coverage", detail: "2 hrs / 60–80 images / online gallery", price: "From AED 850" },
      { pkg: "Half-Day Coverage", detail: "4 hrs / 120–150 images / full event", price: "From AED 1,500" },
      { pkg: "Full-Day Milestone", detail: "8 hrs / unlimited images / same-day previews", price: "From AED 2,500" },
      { pkg: "Kids Party Package", detail: "2 hrs / + cake smash add-on option / 80 images", price: "From AED 1,100" },
    ],
    faqs: [
      { q: "Do you travel to Fujairah for birthday photography?", a: "Yes. We cover birthday events throughout Fujairah — home parties, resort venue events at Al Aqah, outdoor celebrations along the Corniche, and garden events. Travel to Fujairah is included for bookings above AED 1,400." },
      { q: "Which Al Aqah resort hotels do you work at?", a: "We are experienced working at Rotana Beach Resort, Le Meridien Al Aqah, Sandy Beach Hotel, and other Al Aqah resort properties. For larger events we visit the venue in advance to plan coverage." },
      { q: "How far in advance should I book birthday photography in Fujairah?", a: "Home parties: 2 to 3 weeks typically sufficient. Resort and venue events: 6 to 8 weeks ahead. Last-minute weekday bookings are sometimes available." },
      { q: "How much does birthday photography cost in Fujairah?", a: "Two-hour coverage from AED 850. Half-day from AED 1,500. Full-day milestone from AED 2,500. Kids party packages from AED 1,100." },
    ],
  },

  "fujairah/kids-photography": {
    title: "Kids Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Fujairah — family portraits, milestone sessions and kids photography at Al Aqah Beach, Wadi Wurayah and your home. From AED 900.",
    h1: "Kids Photography in Fujairah",
    subtitle: "Al Aqah Beach. Wadi Wurayah. Your home. Children's photography built around the child.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Fujairah gives children an environment unlike any other in the UAE — open east-coast beaches, wadis with running water, mountain trails, and outdoor spaces where children can genuinely play and explore rather than navigate urban density. Professional photography that captures your child in these environments, at a specific age, documents something irreplaceable. Backyard Studio Official produces children's photography in Fujairah that is built around who your child actually is right now: their personality, their relationships, their natural way of being in the world.",
      "We are experienced working with children across all ages and temperaments, and we build every session around the child's pace rather than imposing adult photographic structure on them. The natural settings available in Fujairah — beach, wadi, mountain — are environments where children relax and behave naturally, which is where the best children's photography happens.",
    ],
    highlights: [
      { heading: "Al Aqah Beach Sessions", body: "Open east-coast beach, clean Gulf of Oman water, and soft natural light create an environment where children naturally play, explore, and be themselves — producing authentic, joyful images that are genuinely documentary rather than performed." },
      { heading: "Wadi Wurayah Nature Sessions", body: "The UAE's only freshwater waterfall and its surrounding green canyon creates an extraordinary children's photography setting — lush, cool, and naturally engaging for children who will explore and play without needing to be directed." },
      { heading: "Milestone Portrait Sessions", body: "First birthday, starting school, 10th birthday — milestone sessions document your child at a specific moment in their development, with images created to remain meaningful for decades." },
      { heading: "Home and Lifestyle Sessions", body: "Photographing children in their own home produces images with an intimacy that outdoor sessions cannot achieve — the relationship with siblings, pets, the particular corners of a childhood home that belong only to that time." },
    ],
    pricing: [
      { pkg: "Mini Portrait Session", detail: "45 min / 1 child / 15 images", price: "From AED 900" },
      { pkg: "Full Portrait Session", detail: "90 min / 2 looks / 30 images", price: "From AED 1,500" },
      { pkg: "Siblings Session", detail: "90 min / multiple children / 35 images", price: "From AED 1,700" },
      { pkg: "Family Portrait Session", detail: "2 hrs / full family / 40 images / 2 locations", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best locations for children's photography in Fujairah?", a: "Al Aqah Beach for natural outdoor sessions with open water and east-coast light, Wadi Wurayah for lush canyon nature sessions, the Fujairah Corniche for waterfront portraits, and home sessions for intimate family and sibling photography." },
      { q: "Can you photograph children at Wadi Wurayah?", a: "Yes. Wadi Wurayah is an exceptional setting for children's photography — the green canyon, running water, and natural surroundings create an environment where children naturally explore and play. We plan wadi sessions for the best light and accessibility." },
      { q: "How do you work with children who are shy or reluctant in front of cameras?", a: "We follow the child's lead entirely. For younger children we photograph them as they play and explore — natural expressions appear when a child is comfortable, not when they are posed and instructed. Sessions are always at the child's pace." },
      { q: "How much does children's photography cost in Fujairah?", a: "Mini sessions from AED 900. Full portrait sessions from AED 1,500. Sibling sessions from AED 1,700. Family portrait sessions from AED 2,000." },
    ],
  },

  "fujairah/engagement-photography": {
    title: "Engagement Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Fujairah — couple shoots and proposal photography at Al Aqah Beach, Wadi Wurayah and Hajar Mountain backdrops. Culturally respectful. From AED 1,800.",
    h1: "Engagement Photography in Fujairah",
    subtitle: "Al Aqah Beach. Wadi Wurayah. Hajar Mountains. Engagement photography with real depth.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Fujairah's engagement photography settings offer something fundamentally different from the rest of the UAE. Al Aqah Beach at golden hour — east-coast light, Gulf of Oman water, Hajar Mountains as backdrop — creates couple photography with a cinematic quality that no west-coast UAE location can replicate. Wadi Wurayah's lush green canyon with running water. Mountain terrain in the Hajar range for dramatic elevation and rocky backdrops. Fujairah Fort for heritage architecture and elevated views. These are environments with genuine character.",
      "We work with couples of all backgrounds and nationalities in Fujairah and approach every session with full awareness of cultural requirements and sensitivities. Before every session we take time to understand what the couple actually wants — the aesthetic, the atmosphere, how comfortable they are being photographed — and build the entire session to make them feel genuinely at ease rather than performatively posed.",
    ],
    highlights: [
      { heading: "Al Aqah Beach Golden Hour", body: "Al Aqah at golden hour — east-coast sunset light, open water, and the Hajar Mountains visible behind the beach — creates engagement photography with a naturally dramatic, cinematic quality unlike any UAE west-coast beach." },
      { heading: "Wadi Wurayah Green Canyon", body: "The UAE's only freshwater waterfall and its surrounding green canyon walls create engagement photography settings that are genuinely extraordinary and unavailable anywhere else in the country. Lush, cool, and visually remarkable." },
      { heading: "Hajar Mountain Sessions", body: "Mountain terrain and rocky ridgelines in the Hajar range create engagement photography with dramatic natural backdrops — distinctive from resort or urban UAE couple photography and naturally striking." },
      { heading: "Proposal Photography", body: "We position covertly at your chosen Fujairah location — Al Aqah beach, wadi viewpoint, mountain trail, or heritage site — to capture the genuine moment and immediate reaction. All timing and positioning coordinated in advance with the proposing partner." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 1,800" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 2,800" },
      { pkg: "Al Aqah Beach Sunset Session", detail: "2 hrs / east-coast golden hour / 45 images", price: "From AED 2,400" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,200" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Fujairah?", a: "Al Aqah Beach at golden hour for east-coast sunset light with mountain backdrop, Wadi Wurayah for green canyon and waterfall settings, Hajar Mountain terrain for dramatic elevated backdrops, and Fujairah Fort for heritage architecture and elevated views." },
      { q: "What makes engagement photography in Fujairah different from Dubai?", a: "East-coast light, Gulf of Oman water, mountain terrain, and wadi environments create couple photography with a fundamentally different visual character from Dubai. The natural settings are more dramatic, less developed, and more visually distinctive." },
      { q: "Do you photograph proposals in Fujairah?", a: "Yes. We position covertly at the proposal location to capture the genuine moment. Al Aqah beach, Wadi Wurayah viewpoints, and mountain trails all make spectacular proposal backdrops. All logistics are coordinated closely with the proposing partner in advance." },
      { q: "How much does engagement photography cost in Fujairah?", a: "Single-location sessions from AED 1,800. Two-location sessions from AED 2,800. Al Aqah beach sunset sessions from AED 2,400. Proposal photography from AED 2,200." },
    ],
  },


  // ── UMM AL QUWAIN ─────────────────────────────────────────────────────────

  "umm-al-quwain/headshot-photography": {
    title: "Headshot Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional headshot photographer in Umm Al Quwain — corporate portraits, LinkedIn headshots and team photography at UAQ Corniche, Dreamland and Al Sinniyah. From AED 750.",
    h1: "Headshot Photography in Umm Al Quwain",
    subtitle: "UAQ Corniche. Al Sinniyah Island. Dreamland. Headshots in the UAE's most relaxed emirate.",
    category: "HEADSHOT PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain is the UAE's least developed emirate — which, for professional photography, is a genuine advantage. The UAQ Corniche runs along open mangroves and lagoon waters without the urban density of Dubai or Sharjah. Al Sinniyah Island sits in the lagoon as a natural reserve. The pace is slower, the light is cleaner, and the backgrounds are uncluttered. For professionals and business owners in UAQ — across the growing leisure and tourism sector, the free zone business community, fishing and maritime industries, and professional services — a credible headshot is still the most important piece of professional identity. Backyard Studio Official produces headshots in Umm Al Quwain that deliver that credibility.",
      "We shoot at the UAQ Corniche for open lagoon-facing portraits with mangrove and water backgrounds, at the UAQ Marina area for maritime character, and with portable studio setups for clean seamless-background headshots at offices and free zone facilities across the emirate.",
    ],
    highlights: [
      { heading: "UAQ Corniche and Lagoon", body: "Umm Al Quwain's Corniche runs alongside one of the UAE's largest lagoon and mangrove systems — providing open, natural waterfront backgrounds that are genuinely uncrowded and visually distinct from anything available in Dubai or Sharjah." },
      { heading: "Uncluttered Natural Backdrops", body: "UAQ's undeveloped character means fewer visual distractions. Clean horizon lines, natural water and mangrove settings, and uncrowded outdoor spaces give headshots a clarity and simplicity that more urban settings struggle to achieve." },
      { heading: "Free Zone Team Days", body: "UAQ Free Trade Zone hosts a diverse international business community. We travel to your UAQ free zone office with a portable studio setup to photograph your full team in a single coordinated day — consistent lighting, backgrounds, and colour across all images." },
      { heading: "48-Hour Delivery", body: "Standard edited delivery in 48 hours. Rush same-day and next-day delivery available for urgent requirements." },
    ],
    pricing: [
      { pkg: "Individual Headshot", detail: "90 min / 1–2 looks / 10–15 edited images", price: "From AED 750" },
      { pkg: "Executive Session", detail: "2 hrs / 2 locations / 20 final images", price: "From AED 1,400" },
      { pkg: "Team Day (per person)", detail: "On-site portable studio / consistent images", price: "From AED 350 / person" },
      { pkg: "UAQ Lagoon Session", detail: "90 min / waterfront / 20 images", price: "From AED 1,200" },
    ],
    faqs: [
      { q: "Where do you shoot headshots in Umm Al Quwain?", a: "The UAQ Corniche and lagoon waterfront for natural open backgrounds, the marina area for maritime character, and on-site portable studio setups for offices and free zone facilities. The emirate's undeveloped character provides clean, uncluttered backgrounds." },
      { q: "Do you travel to Umm Al Quwain for headshots?", a: "Yes. We travel to UAQ for headshot sessions. Travel is included for bookings above AED 1,200. For smaller sessions, a travel supplement applies — confirmed at booking." },
      { q: "Can you photograph our team at the UAQ Free Trade Zone?", a: "Yes. We set up a portable studio at your UAQ free zone office and photograph your full team in a single day. Images delivered with consistent lighting and background across all team members." },
      { q: "How much does a headshot cost in Umm Al Quwain?", a: "Individual sessions from AED 750. Executive sessions from AED 1,400. Team days from AED 350 per person. UAQ lagoon sessions from AED 1,200." },
    ],
  },

  "umm-al-quwain/newborn-photography": {
    title: "Newborn Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Newborn photographer in Umm Al Quwain — home visits, lifestyle sessions and lagoon-side newborn photography. Safe, unhurried. From AED 1,400.",
    h1: "Newborn Photography in Umm Al Quwain",
    subtitle: "Your home. UAQ Corniche. Lagoon waterfront. Safe, unhurried newborn photography.",
    category: "NEWBORN PHOTOGRAPHY",
    intro: [
      "The first two weeks of a newborn's life pass faster than any parent expects. The way a baby curls, their expressions, the way they sleep in a parent's arms — these belong to a window of days that does not come back. Backyard Studio Official produces newborn photography in Umm Al Quwain that captures this window honestly: the real experience of those first days, documented carefully and without rush.",
      "We work with families across UAQ — from the main town to the surrounding residential communities — offering home visit sessions, lifestyle sessions at the UAQ Corniche's peaceful waterfront, and portable studio setups for families who want clean, posed images. The emirate's quiet character makes it well-suited to the unhurried pace that good newborn photography requires.",
    ],
    highlights: [
      { heading: "Home Visit Sessions", body: "We come to your UAQ home with all equipment for both posed and lifestyle sessions. Newborns photographed in their own environment produce images with an intimacy and authenticity that studio setups rarely match." },
      { heading: "UAQ Corniche Lifestyle Sessions", body: "The Corniche alongside UAQ's lagoon and mangroves provides a peaceful, uncrowded outdoor setting for newborn lifestyle photography — open water light, natural surroundings, and no crowds." },
      { heading: "Safe Posing Practice", body: "All poses are designed specifically for newborns. Safety is the absolute first consideration. Sessions are never rushed and no position is ever forced or uncomfortable." },
      { heading: "Quiet, Unhurried Environment", body: "UAQ's relaxed pace is genuinely suited to newborn photography. Home sessions in particular benefit from the emirate's quieter residential character." },
    ],
    pricing: [
      { pkg: "Lifestyle Home Session", detail: "2 hrs at your home / 30–40 images", price: "From AED 1,400" },
      { pkg: "Posed Studio Session", detail: "3 hrs / wraps and props / 40 images", price: "From AED 1,800" },
      { pkg: "Family Welcome Session", detail: "Newborn + siblings + parents / 50 images", price: "From AED 2,200" },
      { pkg: "UAQ Corniche Lifestyle", detail: "2 hrs / lagoon waterfront / 35 images", price: "From AED 1,500" },
    ],
    faqs: [
      { q: "When should I book newborn photography in Umm Al Quwain?", a: "Between 5 and 14 days after birth — when newborns sleep most deeply and curl naturally for gentle posed photography. Book during pregnancy to secure your preferred date and time." },
      { q: "Do you come to homes in Umm Al Quwain for newborn sessions?", a: "Yes. Home visits are available across UAQ. We bring all equipment needed for both lifestyle and posed sessions. UAQ's quiet residential character is well-suited to the calm environment that newborn photography requires." },
      { q: "How much does newborn photography cost in Umm Al Quwain?", a: "Lifestyle home sessions from AED 1,400. Posed studio sessions from AED 1,800. Family welcome sessions from AED 2,200. UAQ Corniche lifestyle sessions from AED 1,500." },
      { q: "Is travel to Umm Al Quwain included?", a: "Travel is included for bookings above AED 1,400. For smaller bookings, a travel supplement applies — confirmed at the time of booking." },
    ],
  },

  "umm-al-quwain/maternity-photography": {
    title: "Maternity Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Maternity photographer in Umm Al Quwain — bump sessions at UAQ Corniche, lagoon waterfront and home visits. Culturally respectful. From AED 1,400.",
    h1: "Maternity Photography in Umm Al Quwain",
    subtitle: "UAQ Corniche. Lagoon waterfront. Your home. Maternity photography away from the crowds.",
    category: "MATERNITY PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's maternity photography environment is defined by what it lacks: crowds, construction, and visual clutter. The UAQ Corniche along the lagoon. The mangrove edges at low tide. Open water stretches with clean horizon lines. For expectant mothers who want maternity photography that feels genuinely natural and unhurried — away from the construction noise and population density of Dubai and Sharjah — UAQ's undeveloped character is a real advantage.",
      "We approach every maternity session in UAQ with full understanding of the cultural requirements and modesty preferences that matter here. The session is built entirely around what the expectant mother actually wants, and we discuss wardrobe, aesthetic preferences, and comfort levels in advance.",
    ],
    highlights: [
      { heading: "UAQ Corniche at Sunset", body: "The Corniche along the lagoon provides a long, uncrowded waterfront with mangrove edges and open water. At sunset, the light over the lagoon is soft and warm — a genuinely peaceful outdoor maternity setting without the weekend crowds of Dubai beaches." },
      { heading: "Mangrove and Lagoon Backgrounds", body: "UAQ's mangrove system is one of the most intact in the UAE. Mangrove edges and lagoon water create natural, organic backgrounds for maternity photography that are specific to this emirate's character." },
      { heading: "Home Lifestyle Sessions", body: "Intimate home visit sessions across UAQ for expectant mothers who prefer the privacy and comfort of their own space for maternity photography." },
      { heading: "Culturally Respectful Approach", body: "Every maternity session is approached with full sensitivity to modesty and cultural requirements. From fully covered abaya sessions to more open beach-style shoots, we adapt entirely to what the expectant mother wants." },
    ],
    pricing: [
      { pkg: "UAQ Corniche Session", detail: "90 min / 1 outfit / 30 images", price: "From AED 1,400" },
      { pkg: "Extended Outdoor Session", detail: "2.5 hrs / 2 looks / 40 images", price: "From AED 1,800" },
      { pkg: "Home Lifestyle Session", detail: "2 hrs at your home / 35 images", price: "From AED 1,400" },
      { pkg: "Full Maternity Collection", detail: "3 hrs / 2 locations / 55 images", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "When should I book my maternity session in Umm Al Quwain?", a: "Between 28 and 34 weeks of pregnancy. Book at around 24 weeks to secure your preferred time and location, particularly for golden-hour outdoor sessions at the Corniche." },
      { q: "What makes UAQ different for maternity photography?", a: "The Corniche and lagoon waterfront is genuinely uncrowded — a significant difference from Dubai's beaches. The natural mangrove and water settings, clean horizon lines, and relaxed pace create a maternity photography environment that feels real and unhurried rather than constructed." },
      { q: "How much does maternity photography cost in Umm Al Quwain?", a: "UAQ Corniche sessions from AED 1,400. Extended outdoor sessions from AED 1,800. Home lifestyle sessions from AED 1,400. Full maternity collections from AED 2,800." },
      { q: "Is travel to UAQ included in the session fee?", a: "Travel is included for maternity session bookings above AED 1,400. A travel supplement applies for smaller bookings — confirmed at the time of booking." },
    ],
  },

  "umm-al-quwain/fashion-photography": {
    title: "Fashion Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Fashion photographer in Umm Al Quwain — editorial shoots at UAQ lagoon, mangroves and heritage sites. Modest fashion and outdoor brand specialists. From AED 1,800.",
    h1: "Fashion Photography in Umm Al Quwain",
    subtitle: "UAQ Lagoon. Mangroves. Heritage sites. Fashion photography without the crowds.",
    category: "FASHION PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain offers fashion photographers access to environments that are genuinely difficult to find elsewhere in the UAE: intact mangrove systems, open lagoon water, uncrowded heritage sites, and natural coastal settings that haven't been photographed into visual cliché. For brands and designers who want fashion photography that looks different from the generic Dubai content that saturates the market, UAQ's undeveloped character is a real creative asset.",
      "We produce fashion photography in UAQ for brands, independent designers, e-commerce businesses, and stylists who need images that communicate clearly and stand out. Modest fashion and outdoor lifestyle categories find particularly strong environments in UAQ's natural settings.",
    ],
    highlights: [
      { heading: "Mangrove and Lagoon Locations", body: "UAQ's mangrove coastline and lagoon create fashion photography backdrops with organic texture, deep green tones, and reflected water light — environments with visual character that styled studio sets cannot approximate." },
      { heading: "Uncrowded Heritage Sites", body: "UAQ's old town and heritage structures provide traditional architecture and historical context for fashion editorial work, without the crowds that make heritage photography difficult in Dubai and Sharjah." },
      { heading: "Modest Fashion in Natural Settings", body: "UAQ's outdoor environments — mangroves, lagoon waterfront, natural coastal settings — create genuinely compelling backgrounds for abaya collections, modest sportswear, and covered fashion." },
      { heading: "Exclusive Location Feel", body: "UAQ's undeveloped character means fewer people, fewer distractions, and a sense of exclusivity that more developed UAE emirates genuinely cannot offer for outdoor fashion shoots." },
    ],
    pricing: [
      { pkg: "Lookbook Session", detail: "3 hrs / 1 model / 3 looks / 30 images", price: "From AED 1,800" },
      { pkg: "Editorial Campaign", detail: "Full day / creative direction / 60 final images", price: "From AED 3,500" },
      { pkg: "E-Commerce Catalogue", detail: "Per look / clean backgrounds / product focus", price: "From AED 250 / look" },
      { pkg: "Mangrove Campaign", detail: "Full day / lagoon + mangrove / 50 images", price: "From AED 3,800" },
    ],
    faqs: [
      { q: "What makes UAQ unique for fashion photography?", a: "Intact mangrove systems, open lagoon, uncrowded heritage sites, and natural coastal settings without construction or crowds. UAQ's undeveloped character gives fashion photography a visual distinctiveness that busy Dubai locations cannot match." },
      { q: "Do you photograph modest fashion in Umm Al Quwain?", a: "Yes. UAQ's natural outdoor environments — mangroves, lagoon, coastal — provide genuine, organic settings for abaya collections, covered fashion, and modest sportswear." },
      { q: "Can you provide models for fashion shoots in UAQ?", a: "Yes. We work with a network of professional models across the UAE. Model procurement is coordinated as part of our full production service." },
      { q: "How much does fashion photography cost in Umm Al Quwain?", a: "Lookbook sessions from AED 1,800. Editorial campaigns from AED 3,500. E-commerce catalogue from AED 250 per look. Mangrove campaigns from AED 3,800." },
    ],
  },

  "umm-al-quwain/social-media-content": {
    title: "Social Media Content Creation in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Social media content creator in Umm Al Quwain — reels, photos and brand content for hospitality, tourism and F&B businesses in UAQ. From AED 1,800.",
    h1: "Social Media Content Creation in Umm Al Quwain",
    subtitle: "Reels. Brand content. Photography. Social media production for UAQ businesses.",
    category: "SOCIAL MEDIA CONTENT",
    intro: [
      "Umm Al Quwain's business community — spanning leisure tourism around Dreamland Aqua Park, waterfront hospitality, the UAQ Free Trade Zone, fishing and maritime industries, and retail — faces the same challenge as businesses everywhere: social media demands consistent, professional visual content to remain competitive and attract customers. For UAQ businesses in particular, the opportunity is to use the emirate's distinctive natural character as a content asset rather than competing with Dubai on Dubai's visual terms.",
      "We produce social media content for UAQ businesses that is built around what makes this emirate genuinely different: the uncrowded lagoon, the mangroves, the relaxed pace, and the authentic atmosphere that the northern emirates offer. This is a real content differentiator for businesses that know how to use it.",
    ],
    highlights: [
      { heading: "Leisure and Tourism Content", body: "Dreamland Aqua Park, UAQ's waterfront restaurants, boat trip operators, and lagoon leisure businesses need content that communicates the emirate's relaxed appeal. We produce photography and video built around what makes UAQ's leisure scene distinct." },
      { heading: "Reels and Short-Form Video", body: "Professionally shot and edited Instagram and TikTok reels — scripted to your brief, filmed at UAQ's best locations, edited with music and captions that drive real engagement." },
      { heading: "Monthly Retainer Packages", body: "Ongoing monthly content production for UAQ businesses — a consistent volume of posts, reels, and stories so your social presence runs without your daily involvement." },
      { heading: "The UAQ Content Angle", body: "UAQ's 'escape from Dubai' positioning is a genuine content angle for businesses in the emirate. Relaxed, natural, uncrowded, authentic — these are real differentiators that resonate with the UAE's increasingly saturated social media audience." },
    ],
    pricing: [
      { pkg: "Content Day (Photo)", detail: "4 hrs / 30 edited images / platform-ready", price: "From AED 1,800" },
      { pkg: "Reels Package", detail: "3 reels / shot + edited / captions included", price: "From AED 2,200" },
      { pkg: "Monthly Retainer", detail: "8 posts + 4 reels / monthly / strategy included", price: "From AED 3,500 / month" },
      { pkg: "Full Brand Day", detail: "Full day / photo + video / full brand content set", price: "From AED 4,000" },
    ],
    faqs: [
      { q: "What types of businesses do you create social media content for in UAQ?", a: "Leisure and tourism, waterfront restaurants and cafes, adventure and water sports, retail, professional services, and the free zone business community. UAQ's natural settings create particularly strong content for hospitality and tourism businesses." },
      { q: "Can you help us use UAQ's natural settings in our brand content?", a: "Yes — the lagoon, mangroves, uncrowded waterfront, and relaxed character of UAQ are genuine content assets. We help businesses build content that positions them distinctively against more crowded Dubai competitors." },
      { q: "Do you offer monthly content packages for UAQ businesses?", a: "Yes. Monthly retainer packages cover a fixed volume of posts and reels on a consistent schedule — suitable for any UAQ business that needs regular social media content without managing production in-house." },
      { q: "How much does social media content creation cost in Umm Al Quwain?", a: "Content day photography from AED 1,800. Reels packages from AED 2,200. Monthly retainers from AED 3,500 per month. Full brand day from AED 4,000." },
    ],
  },

  "umm-al-quwain/birthday-photography": {
    title: "Birthday Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Birthday photographer in Umm Al Quwain — kids parties, milestone celebrations and family birthdays at home events and UAQ venues. From AED 850.",
    h1: "Birthday Photography in Umm Al Quwain",
    subtitle: "Your home. UAQ venues. Waterfront settings. Birthday photography that captures the day.",
    category: "BIRTHDAY PHOTOGRAPHY",
    intro: [
      "Birthday celebrations in Umm Al Quwain happen most often at home — in the residential neighbourhoods of UAQ city, at the Corniche waterfront for outdoor parties, and at the emirate's leisure venues including Dreamland Aqua Park for children's events. Backyard Studio Official photographs birthday celebrations in UAQ with the priority of capturing what actually happened: the real expressions, the interactions between family members and friends, the genuine moments of joy — not a set of posed group photographs that sit beside the event rather than inside it.",
      "We cover children's parties with the energy and pace they require, milestone birthdays at any UAQ venue or outdoor setting, and family gatherings where the priority is documenting the people and the atmosphere authentically.",
    ],
    highlights: [
      { heading: "Home Birthday Parties", body: "Home parties across UAQ city and surrounding residential areas. We move with the energy of the event — cake arrivals, games, family interactions — and capture it all as it happens." },
      { heading: "Dreamland Aqua Park Events", body: "Dreamland is UAQ's signature leisure venue and hosts many children's birthday events. We are experienced photographing in the Dreamland environment with the logistics and lighting it involves." },
      { heading: "Waterfront Birthday Sessions", body: "The UAQ Corniche waterfront provides a naturally beautiful outdoor setting for birthday photography — open lagoon views, clean light, and no crowds." },
      { heading: "Same-Day Preview Gallery", body: "10 to 15 preview images delivered same-day for social media, with the full edited gallery within 5 working days." },
    ],
    pricing: [
      { pkg: "2-Hour Birthday Coverage", detail: "2 hrs / 60–80 images / online gallery", price: "From AED 850" },
      { pkg: "Half-Day Coverage", detail: "4 hrs / 120–150 images / full event", price: "From AED 1,500" },
      { pkg: "Full-Day Milestone", detail: "8 hrs / unlimited images / same-day previews", price: "From AED 2,500" },
      { pkg: "Kids Party Package", detail: "2 hrs / + cake smash add-on option / 80 images", price: "From AED 1,100" },
    ],
    faqs: [
      { q: "Do you travel to Umm Al Quwain for birthday photography?", a: "Yes. We cover birthday events across UAQ — home parties, Dreamland events, Corniche waterfront celebrations, and venue events. Travel is included for bookings above AED 1,200." },
      { q: "Can you photograph at Dreamland Aqua Park?", a: "Yes. Dreamland is a popular venue for children's birthday events in UAQ. We are experienced photographing in the park environment and can coordinate coverage with venue logistics." },
      { q: "How far in advance should I book birthday photography in UAQ?", a: "Home parties: 2 to 3 weeks typically sufficient. Venue events: 4 to 6 weeks ahead. Last-minute bookings are sometimes available on weekdays." },
      { q: "How much does birthday photography cost in Umm Al Quwain?", a: "Two-hour coverage from AED 850. Half-day from AED 1,500. Full-day milestone from AED 2,500. Kids party packages from AED 1,100." },
    ],
  },

  "umm-al-quwain/kids-photography": {
    title: "Kids Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Children's photographer in Umm Al Quwain — family portraits, milestone sessions and kids photography at UAQ lagoon, mangroves and your home. From AED 900.",
    h1: "Kids Photography in Umm Al Quwain",
    subtitle: "UAQ Lagoon. Mangroves. Your home. Children's photography in UAQ's natural settings.",
    category: "KIDS PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain gives children access to natural environments that the more developed UAE emirates have largely lost to construction: open lagoon beaches, mangrove edges where children can explore, fishing harbour atmosphere, and outdoor spaces without crowds. Photography that captures your child in these environments — at a specific age, with their particular personality — creates images with a character and authenticity that posed studio portraits cannot achieve. Backyard Studio Official produces children's photography in UAQ that documents who your child actually is right now.",
      "We follow the child's pace and comfort entirely. For young children, natural expressions happen when they are allowed to explore and play rather than posed and directed. UAQ's natural outdoor settings — lagoon, mangrove edge, open waterfront — create the kind of relaxed environment where children actually behave like themselves.",
    ],
    highlights: [
      { heading: "UAQ Lagoon and Waterfront Sessions", body: "The lagoon waterfront and Corniche provide open, natural outdoor settings where children can play freely — producing authentic, joyful images without the crowds and distractions of more popular UAE photography locations." },
      { heading: "Mangrove Nature Sessions", body: "UAQ's mangrove system is one of the UAE's most intact. The mangrove edge creates a naturally engaging exploration environment for children — textures, water, wildlife — and photography backdrops with real organic character." },
      { heading: "Milestone Portrait Sessions", body: "First birthday, starting school, 10th birthday — milestone sessions at a specific moment in your child's development, with images that will remain meaningful for decades." },
      { heading: "Home and Lifestyle Sessions", body: "Intimate home sessions across UAQ for images with the authenticity that outdoor settings often cannot match — the relationship with siblings, pets, the particular corners of childhood." },
    ],
    pricing: [
      { pkg: "Mini Portrait Session", detail: "45 min / 1 child / 15 images", price: "From AED 900" },
      { pkg: "Full Portrait Session", detail: "90 min / 2 looks / 30 images", price: "From AED 1,500" },
      { pkg: "Siblings Session", detail: "90 min / multiple children / 35 images", price: "From AED 1,700" },
      { pkg: "Family Portrait Session", detail: "2 hrs / full family / 40 images / 2 locations", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best locations for children's photography in Umm Al Quwain?", a: "The UAQ lagoon and Corniche waterfront for open natural outdoor sessions, the mangrove edge for nature exploration sessions, and home visits for intimate family and sibling photography across UAQ residential areas." },
      { q: "Can you photograph children in UAQ's mangroves?", a: "Yes. The mangrove edge in UAQ creates an outstanding environment for children's photography — the natural texture, water, and exploration opportunities produce authentic, animated images that differ from typical beach or park sessions." },
      { q: "How do you work with children who are reluctant in front of cameras?", a: "We follow the child's pace entirely. For young children we photograph them as they play rather than posing them — natural expressions happen when children are comfortable and engaged with their environment, not when they are told to perform for a camera." },
      { q: "How much does children's photography cost in Umm Al Quwain?", a: "Mini sessions from AED 900. Full portrait sessions from AED 1,500. Sibling sessions from AED 1,700. Family portrait sessions from AED 2,000." },
    ],
  },

  "umm-al-quwain/engagement-photography": {
    title: "Engagement Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Engagement photographer in Umm Al Quwain — couple shoots and proposal photography at UAQ lagoon, mangroves and Corniche. Culturally respectful. From AED 1,800.",
    h1: "Engagement Photography in Umm Al Quwain",
    subtitle: "UAQ Lagoon. Mangroves. Corniche. Engagement photography away from the crowds.",
    category: "ENGAGEMENT PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's engagement photography settings offer couples something increasingly difficult to find in the UAE: genuine privacy, natural surroundings, and a sense of space that crowded Dubai and Sharjah locations rarely provide. The UAQ Corniche runs alongside the lagoon without weekend crowds. The mangrove coastline provides green, organic settings with reflected water light. The lagoon at golden hour offers waterfront couple photography with warm light and open space. For couples who want engagement photography that feels intimate and natural rather than performed in front of crowds, UAQ is a real alternative.",
      "We are experienced working with couples of all nationalities and backgrounds in the northern emirates, and we approach every session with full sensitivity to cultural and privacy requirements. The session structure is built around making the couple feel genuinely comfortable — not around producing images that look a certain way at the expense of the people in them.",
    ],
    highlights: [
      { heading: "UAQ Lagoon at Golden Hour", body: "The lagoon waterfront at sunset — open water, soft golden light, no crowds — creates engagement photography with a naturally intimate character. The absence of background noise and visual clutter from urban development makes UAQ's waterfront sessions feel genuinely private." },
      { heading: "Mangrove Romantic Settings", body: "The mangrove edge creates couple photography with organic green tones, reflected water, and natural texture — a romantic and visually distinctive setting unavailable in any more developed UAE emirate." },
      { heading: "Private, Uncrowded Locations", body: "One of UAQ's genuine advantages for engagement photography is the absence of crowds. The locations that are beautiful in Dubai are often overcrowded on weekends. In UAQ, the same calibre of natural waterfront and outdoor setting is available without the audience." },
      { heading: "Proposal Photography", body: "We position covertly at your chosen UAQ location to capture the genuine proposal moment and immediate reaction. All timing and positioning coordinated in advance with the proposing partner." },
    ],
    pricing: [
      { pkg: "1-Location Session", detail: "90 min / 1 outfit / 30–40 edited images", price: "From AED 1,800" },
      { pkg: "2-Location Session", detail: "2.5 hrs / 2 outfits / 50 images", price: "From AED 2,800" },
      { pkg: "Golden Hour Lagoon Session", detail: "2 hrs / sunset / 40 images", price: "From AED 2,200" },
      { pkg: "Proposal Photography", detail: "Covert coverage / full edited gallery", price: "From AED 2,000" },
    ],
    faqs: [
      { q: "What are the best engagement photography locations in Umm Al Quwain?", a: "The UAQ lagoon waterfront at golden hour for open water and sunset light, the mangrove edge for green organic romantic settings, and the Corniche for uncrowded outdoor portraits. We recommend locations based on the couple's preferred aesthetic." },
      { q: "Why choose UAQ for engagement photography over Dubai?", a: "Privacy and natural settings. UAQ's lagoon and mangrove locations provide the same quality of outdoor waterfront environment as Dubai's best spots but without crowds. The sense of space and intimacy is genuinely different." },
      { q: "Do you photograph proposals in Umm Al Quwain?", a: "Yes. The lagoon waterfront and mangrove settings make beautiful proposal backdrops. We position covertly in advance to capture the moment authentically. All logistics are coordinated with the proposing partner before the day." },
      { q: "How much does engagement photography cost in Umm Al Quwain?", a: "Single-location sessions from AED 1,800. Two-location sessions from AED 2,800. Golden hour lagoon sessions from AED 2,200. Proposal photography from AED 2,000." },
    ],
  },



  // ── SHARJAH — Sprint 25 commercial services ────────────────────────────────

  "sharjah/wedding-photography": {
    title: "Wedding Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Sharjah — Al Qasba, Expo Centre Sharjah, cultural venues, Arabic & Indian weddings. All-female crews available. From AED 4,000.",
    h1: "Wedding Photography in Sharjah",
    subtitle: "Al Qasba. Heritage Area. Expo Centre. Sharjah weddings, beautifully documented.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Sharjah's wedding market is among the most culturally rich in the UAE. The emirate's deep Emirati heritage, its strong South Asian community, and its position as the UAE's cultural capital create a wedding landscape defined by tradition, ceremony, and a formality that requires photographers who understand both cultural protocol and the technical demands of diverse wedding formats.",
      "Backyard Studio Official photographs weddings throughout Sharjah — at Al Qasba canal-side venues, heritage area settings, Expo Centre Sharjah events, hotel ballrooms, and private villas across the emirate. Our Sharjah wedding teams include both male and female photographers, and we provide fully all-female crews for ladies-only ceremonies at no compromise in quality.",
    ],
    highlights: [
      { heading: "Al Qasba Venue Weddings", body: "Sharjah's most photographically versatile wedding corridor. The canal, Eye of the Emirates wheel, and surrounding venues combine architecture, water, and lighting conditions that reward professional photography at every time of day." },
      { heading: "Heritage & Cultural Venues", body: "The Sharjah Heritage Area, traditional majlis settings, and the emirate's historic districts provide an authentically Emirati backdrop unavailable anywhere else in the UAE." },
      { heading: "All-Female Photography Crews", body: "For ladies-only ceremony halls and gender-separated Sharjah weddings, we provide fully all-female photography and videography crews operating at the same professional level as our main teams." },
      { heading: "Arabic & South Asian Weddings", body: "Experienced across every Sharjah wedding format — Arabic multi-day celebrations, Pakistani and Indian ceremonies, and mixed-nationality weddings — with same-day Teaser reel delivery." },
    ],
    pricing: [
      { pkg: "Nikah / Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 2,500" },
      { pkg: "Wedding Day", detail: "2 photographers / 10 hrs / full gallery", price: "From AED 5,500" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 10,000" },
      { pkg: "Multi-Day Package", detail: "Mehendi + Sangeet + Reception / full team", price: "From AED 16,000" },
    ],
    faqs: [
      { q: "Which wedding venues in Sharjah does Backyard Studio Official cover?", a: "We cover all major Sharjah wedding venues including Al Qasba event spaces, Expo Centre Sharjah, Sharjah Grand Hotel, Mövenpick Hotel Sharjah, and private villas across the emirate. We also photograph traditional Emirati weddings in heritage area settings and majlis environments." },
      { q: "Do you provide all-female wedding photography crews in Sharjah?", a: "Yes. For Arabic weddings and events requiring gender-separated coverage in Sharjah, Backyard Studio Official provides fully all-female photography and videography crews. This is a standard part of our Sharjah wedding offering, not an additional service." },
      { q: "How much does wedding photography cost in Sharjah?", a: "Wedding photography in Sharjah starts from AED 2,500 for ceremony-only coverage and AED 5,500 for a full wedding day with two photographers. Multi-day packages from AED 16,000. We provide exact quotes within 2 hours." },
      { q: "Do you shoot Pakistani and Indian weddings in Sharjah?", a: "Yes. Sharjah has one of the UAE's largest South Asian communities and we have extensive experience covering Pakistani and Indian weddings across the emirate — Mehendi, Sangeet, Barat, and Reception — with same-day Teaser delivery and 48-hour full gallery turnaround." },
    ],
  },

  "sharjah/corporate-video": {
    title: "Corporate Video Production in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Sharjah — Sharjah Media City, SAIF Zone, government entities, brand films, company profiles. Bilingual Arabic-English delivery. From AED 6,000.",
    h1: "Corporate Video Production in Sharjah",
    subtitle: "Sharjah Media City. SAIF Zone. Government sector. The UAE's cultural capital, on camera.",
    category: "CORPORATE VIDEO",
    intro: [
      "Sharjah has built a corporate media ecosystem centred on Sharjah Media City (Shams) — one of the UAE's fastest-growing free zones, home to hundreds of media, marketing, and content businesses. SAIF Zone adds an industrial and logistics dimension that generates its own corporate video requirements. And Sharjah's government sector, including the Sharjah Investment and Development Authority (Shurooq), produces institutional content at a scale that rivals the other emirates.",
      "Backyard Studio Official produces corporate video in Sharjah for the emirate's diverse business landscape: media and creative companies in Shams, manufacturing and logistics firms in SAIF Zone, government entity communications, hotel and hospitality brands, and the retail and education sectors that define Sharjah's commercial character.",
    ],
    highlights: [
      { heading: "Sharjah Media City (Shams)", body: "Brand films, company profiles, and content marketing productions for Shams-based media and digital agencies — created with the production quality the media industry itself demands." },
      { heading: "Government & Institutional", body: "Sharjah government entities, Shurooq investment authority, and cultural institution communications content produced with appropriate Arabic-language delivery and institutional visual standards." },
      { heading: "SAIF Zone Manufacturing", body: "Industrial brand films, facility documentation, and corporate profiles for SAIF Zone manufacturers and logistics companies — content that communicates operational scale and professional capability." },
      { heading: "Bilingual Production", body: "Arabic and English versions as standard for Sharjah's bilingual market — narrated, subtitled, and formatted for the UAE's dual-language communication environment." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 6,000" },
      { pkg: "Government / Institutional", detail: "Multi-day / Arabic + English delivery", price: "From AED 14,000" },
      { pkg: "Event + Brand Film", detail: "Event coverage + brand story edit", price: "From AED 9,000" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / social + long-form", price: "From AED 7,500 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate video for Sharjah Media City (Shams) companies?", a: "Yes. We produce brand films, company profiles, and content marketing videos for Shams-based media and digital businesses. Our Sharjah corporate video production meets the quality standards that media industry clients demand from their own production partners." },
      { q: "Can you produce bilingual Arabic-English corporate video in Sharjah?", a: "Yes. Bilingual production is standard for our Sharjah corporate video work. We deliver Arabic and English versions with professional narration, and can subtitle either language for the other. Our Sharjah team includes native Arabic-speaking production coordinators." },
      { q: "How much does corporate video production cost in Sharjah?", a: "Corporate video production in Sharjah starts from AED 6,000 for a single-day shoot producing a 3–5 minute company profile film with two rounds of revision. Government and institutional productions with multi-day filming are quoted individually. We respond to briefs within 2 hours." },
      { q: "Do you cover Sharjah filming permit requirements for corporate shoots?", a: "Yes. Backyard Studio Official manages Sharjah filming permits as part of our standard service, including Sharjah City Municipality permits, Shurooq property approvals, and free zone facility access coordination for SAIF Zone and Shams shoots." },
    ],
  },

  "sharjah/event-photography": {
    title: "Event Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Sharjah — Expo Centre Sharjah, Al Qasba, cultural events, corporate conferences, government galas. Same-day delivery available. From AED 2,800.",
    h1: "Event Photography in Sharjah",
    subtitle: "Expo Centre. Al Qasba. Cultural venues. Sharjah events, professionally documented.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Sharjah is the UAE's most culturally active emirate. The Sharjah Art Foundation, Expo Centre Sharjah, Al Qasba, and a packed calendar of government-hosted events make the emirate one of the busiest event photography markets in the Northern Emirates. Add corporate conferences at Sharjah's business hotels, brand activations in the emirate's retail corridors, and the steady rhythm of educational and community events, and you have a market that demands consistent professional photography coverage.",
      "Backyard Studio Official covers Sharjah events across every format — trade shows and conferences at Expo Centre Sharjah, cultural exhibitions and openings at the Sharjah Art Foundation, government ceremonies, corporate launches, and hospitality events across the emirate's hotels and venues. We provide same-day social media delivery when required.",
    ],
    highlights: [
      { heading: "Expo Centre Sharjah", body: "Sharjah's primary exhibition and conference venue. We cover multi-day trade shows, product launches, and government-organized conferences with teams scaled to the event size." },
      { heading: "Cultural & Arts Events", body: "Sharjah Art Foundation openings, Sharjah International Book Fair (one of the world's largest), and cultural programme events — photography that matches the calibre of the content." },
      { heading: "Al Qasba Events", body: "Canal-side activations, family events, brand launches, and cultural programming in Sharjah's most visually dynamic public space." },
      { heading: "Same-Day Social Delivery", body: "For launches and activations where social momentum matters, we deliver 20–30 edited images within 2–3 hours of the event ending." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 2,800" },
      { pkg: "Full Day (8–10 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 4,500" },
      { pkg: "Conference Package", detail: "2 photographers / multi-day / same-day delivery", price: "From AED 7,500 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Do you cover events at Expo Centre Sharjah?", a: "Yes. We cover trade shows, conferences, product launches, and government events at Expo Centre Sharjah with teams scaled to the size of each event — from single photographers to multi-person crews for large multi-hall exhibitions." },
      { q: "Do you photograph events at the Sharjah Art Foundation?", a: "Yes. We cover cultural events, exhibition openings, and arts programming at the Sharjah Art Foundation and related cultural institutions across the emirate. Our photographers understand the specific requirements of arts and cultural event documentation." },
      { q: "How much does event photography cost in Sharjah?", a: "Event photography in Sharjah starts from AED 2,800 for a 4-hour half-day session. Full-day coverage starts from AED 4,500. Multi-day conference packages are quoted per day. Same-day social media delivery is available at an additional fee." },
      { q: "Can you deliver event photos on the same day in Sharjah?", a: "Yes. We operate a real-time editing workflow for Sharjah events requiring same-day social content, delivering a curated selection of edited images within 2–3 hours of the event ending." },
    ],
  },

  "sharjah/real-estate-photography": {
    title: "Real Estate Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Sharjah — Aljada, Tilal City, waterfront properties, developer campaigns, aerial drone. Interior & exterior photography. From AED 1,000.",
    h1: "Real Estate Photography in Sharjah",
    subtitle: "Aljada. Tilal City. Sharjah Waterfront. Every development, professionally presented.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Sharjah's real estate market has undergone significant transformation in recent years, led by Arada's Aljada development — the emirate's largest mixed-use community — and Tilal City, along with growing demand for waterfront properties along the Khalid Lagoon and Corniche. The emirate's affordability relative to Dubai has drawn significant investor interest, creating demand for professional property photography that can present Sharjah developments to a sophisticated audience.",
      "Backyard Studio Official produces real estate photography for Sharjah developers, property agencies, and landlords across unit photography, show apartment campaigns, project launch content, and aerial drone documentation. We are GCAA licensed for drone operations in Sharjah's development zones and coordinate all necessary airspace permissions.",
    ],
    highlights: [
      { heading: "Aljada & Major Developments", body: "Photography for Arada's Aljada and other major Sharjah developments — show apartments, community lifestyle, aerial masterplan documentation, and investor-facing campaign content." },
      { heading: "Waterfront & Lagoon Properties", body: "Khalid Lagoon and Sharjah waterfront properties photographed to maximise the water views and setting that are key selling points for the emirate's premium units." },
      { heading: "GCAA-Licensed Aerial Drone", body: "Legal aerial documentation of Sharjah developments with all GCAA and local authority permissions managed as standard. Same-day drone footage delivery available." },
      { heading: "Property Agency Packages", body: "High-volume listing photography for Sharjah's property agencies — consistent quality, fast turnaround, and formats ready for Bayut, Property Finder, and developer portals." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,000" },
      { pkg: "Show Apartment", detail: "Full-day shoot / hero shots + detail images", price: "From AED 2,800" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 3,800" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 12,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Sharjah developers like Arada?", a: "Yes. We produce real estate photography and videography for Sharjah property developers, including show apartment campaigns, community lifestyle photography, aerial site documentation, and investor-facing content. We are experienced with the briefing and approval processes that major developers operate." },
      { q: "Can you photograph Sharjah waterfront and lagoon properties?", a: "Yes. Khalid Lagoon and Sharjah Corniche waterfront properties are among our most common Sharjah real estate assignments. We shoot interior and exterior photography that maximises the visual impact of water views and the surrounding setting." },
      { q: "How much does real estate photography cost in Sharjah?", a: "Unit photography in Sharjah starts from AED 1,000 for up to 3 units with 30 images. Show apartment campaigns start from AED 2,800. Aerial drone packages start from AED 2,000. Developer launch packages are quoted individually." },
      { q: "Are you licensed for drone photography over Sharjah real estate?", a: "Yes. We hold a GCAA commercial drone licence and manage all local authority permissions for Sharjah aerial photography. Most Sharjah locations can be permitted within 48 to 72 hours." },
    ],
  },

  "sharjah/drone-videography": {
    title: "Drone Videography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Sharjah — Khalid Lagoon, Al Qasba, Expo Centre, waterfront developments. Aerial photography & 4K video. From AED 2,000.",
    h1: "Drone Videography in Sharjah",
    subtitle: "GCAA licensed. Khalid Lagoon. Al Qasba. Sharjah from above, legally and beautifully.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Drone videography in Sharjah opens up a city of extraordinary visual character from above — the crescent of the Khalid Lagoon, the dense heritage geometry of the old town, Al Qasba's canal and wheel, and the development corridors of Aljada and the new city districts spreading inland. The emirate's compact urban density and waterfront setting make it one of the most rewarding aerial photography environments in the Northern Emirates.",
      "Backyard Studio Official holds full GCAA commercial drone licences and manages all Sharjah municipal and airspace permissions as standard. We produce aerial content for Sharjah's real estate developers, tourism operators, event organizers, government communications teams, and commercial advertising clients in 4K with cinema colour grading.",
    ],
    highlights: [
      { heading: "Khalid Lagoon & Corniche", body: "The lagoon from above reveals Sharjah's distinctive crescent waterfront — one of the most recognizable aerial views in the Northern Emirates. Dawn and golden hour aerials produce extraordinary results." },
      { heading: "Al Qasba & Heritage Area", body: "The canal geometry of Al Qasba and the dense rooftop patterns of the Heritage Area create compelling drone compositions unavailable on the ground." },
      { heading: "Development Site Documentation", body: "Aerial progress documentation for Aljada, Tilal City, and other Sharjah development projects — GCAA licensed, with all municipal permissions coordinated." },
      { heading: "Real Estate & Tourism Content", body: "Drone footage for Sharjah property marketing, tourism campaigns, and destination content in 4K with professional colour grading." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 2,000" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / colour-graded edit", price: "From AED 3,500" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground camera team / full edit", price: "From AED 5,500" },
      { pkg: "Real Estate Aerial", detail: "Development documentation / licensed GCAA", price: "From AED 2,800" },
    ],
    faqs: [
      { q: "Is drone videography legal in Sharjah and do you have the required permits?", a: "Yes. Drone operations in Sharjah require a GCAA commercial operator certificate and Sharjah municipal coordination. Backyard Studio Official holds all required licences and manages every permit application as standard. We do not fly without complete legal clearance." },
      { q: "Can you fly a drone over the Khalid Lagoon and Sharjah waterfront?", a: "Yes. The Khalid Lagoon and Sharjah Corniche are accessible for commercial drone operations with appropriate municipal coordination, which we manage. These are among our most frequently requested Sharjah aerial locations." },
      { q: "How much does drone videography cost in Sharjah?", a: "Drone sessions in Sharjah start from AED 2,000 for a 2-hour session. Half-day packages from AED 3,500. Combined drone and ground camera packages from AED 5,500." },
      { q: "Do you produce drone content for Sharjah real estate developers?", a: "Yes. Aerial documentation for Sharjah real estate is one of our most common drone briefs — development site progress, masterplan aerials, show apartment launch footage, and investor-facing community overview films." },
    ],
  },

  "sharjah/food-photography": {
    title: "Food Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Sharjah — restaurant menus, Al Qasba cafes, hotel F&B, social media content. Same-day Instagram content available. From AED 1,500.",
    h1: "Food Photography in Sharjah",
    subtitle: "Al Qasba cafes. Heritage area restaurants. Hotel dining. Your dishes, professionally photographed.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Sharjah's restaurant scene is diverse and growing — from heritage area dining that leans on Emirati and Levantine cuisine, to the international F&B strip along Al Qasba, to hotel restaurants serving the emirate's conference and tourism market. In this competitive landscape, professional food photography is what separates restaurants with packed reservations from those competing on price alone.",
      "Backyard Studio Official produces food photography for Sharjah restaurants, hotel F&B outlets, and cloud kitchens that need content to perform across delivery platforms, Instagram, and printed menus. We understand the visual standards of the UAE's food photography market and produce imagery that works across every platform your restaurant needs to appear on.",
    ],
    highlights: [
      { heading: "Restaurant Menu Photography", body: "Every dish photographed for printed menus, digital QR menus, Talabat and Deliveroo listings, and restaurant websites — consistent quality across all formats." },
      { heading: "Al Qasba & Waterfront Venues", body: "Food photography incorporating the canal-side setting — atmospheric context shots that sell not just the dish but the dining experience." },
      { heading: "Social Media Content Production", body: "Instagram Reels, TikTok content, and story-format video of plating moments, chef action, and hero dishes — the format that drives new reservations." },
      { heading: "Hotel F&B Photography", body: "Professional photography for Sharjah hotel restaurants and room service menus, meeting the visual standards of international hotel groups." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats", price: "From AED 1,500" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / interior + food / digital delivery", price: "From AED 2,800" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,200 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + brand film", price: "From AED 5,500" },
    ],
    faqs: [
      { q: "Do you produce food photography for Sharjah restaurants?", a: "Yes. Backyard Studio Official produces food and menu photography for restaurants, cafés, and F&B outlets throughout Sharjah, including Al Qasba venues, heritage area dining, and hotel restaurants. We work within operational hours to minimise disruption to service." },
      { q: "Can you create social media content for my Sharjah restaurant?", a: "Yes. In addition to still food photography, we produce Instagram Reels and TikTok content — plating videos, chef action, and atmosphere shots — in vertical format for all major social platforms." },
      { q: "How much does food photography cost in Sharjah?", a: "Food photography in Sharjah starts from AED 1,500 for a 3-hour session covering 20 dishes. Full menu shoots from AED 2,800. Monthly social content packages from AED 2,200 per month." },
      { q: "How quickly do you deliver food photography content?", a: "Standard delivery is 2–4 business days from the shoot date. Rush 24-hour delivery is available. Social media Reels are typically delivered within 48 hours." },
    ],
  },

  "sharjah/product-photography": {
    title: "Product Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Sharjah — e-commerce, Amazon UAE, Noon, brand campaigns. SAIF Zone businesses welcome. Studio & lifestyle options. From AED 800.",
    h1: "Product Photography in Sharjah",
    subtitle: "E-commerce. Amazon UAE. Brand campaigns. Sharjah products, professionally presented.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Sharjah has a substantial SME and manufacturing sector concentrated in SAIF Zone and the emirate's industrial areas. Many of these businesses sell across UAE e-commerce platforms — Amazon UAE, Noon, and Shopify — and need product photography that meets marketplace technical requirements while also delivering brand-quality imagery for advertising and social media.",
      "Backyard Studio Official produces product photography for Sharjah businesses across all product categories — from consumer goods and packaged products to industrial components and specialty manufacturing outputs. We deliver content ready for Amazon UAE and Noon requirements as standard.",
    ],
    highlights: [
      { heading: "E-Commerce & Marketplace Photography", body: "White-background product shots meeting Amazon UAE and Noon technical requirements — delivered upload-ready." },
      { heading: "SAIF Zone & Industrial Products", body: "Product photography for SAIF Zone manufacturers and industrial suppliers — professional presentation of technical products for B2B catalogues and commercial marketing." },
      { heading: "Lifestyle & Context Photography", body: "Products in use, in environment, with models — the content that drives purchase intent on social media and differentiates brands from marketplace competitors." },
      { heading: "Packaging & Brand Campaigns", body: "Product launch photography covering packaging hero shots, lifestyle imagery, and advertising-ready deliverables for Sharjah brands." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles per product / 2 days", price: "From AED 800" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / 3 angles / styled", price: "From AED 2,200" },
      { pkg: "Premium Campaign", detail: "20 products + model + lifestyle context", price: "From AED 4,500" },
      { pkg: "Catalogue (100+ SKUs)", detail: "Custom quote / priority processing", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce Amazon UAE and Noon compliant product photography in Sharjah?", a: "Yes. We produce product photography meeting Amazon UAE and Noon technical requirements — pure white background, correct dimensions, appropriate angle coverage — with files ready for direct upload." },
      { q: "Do you work with SAIF Zone businesses in Sharjah?", a: "Yes. We produce product photography for SAIF Zone manufacturers, wholesalers, and exporters, including B2B catalogue photography, product launch imagery, and e-commerce content for businesses with UAE market distribution." },
      { q: "How much does product photography cost in Sharjah?", a: "Product photography in Sharjah starts from AED 800 for 10 SKUs on white background. Standard lifestyle packages from AED 2,200. Large catalogue shoots quoted individually." },
      { q: "How quickly do you deliver product photography?", a: "Standard delivery is 2–4 business days. Rush 24-hour delivery available. We can prioritise hero shots for same-day delivery when product launch timing requires it." },
    ],
  },

  "sharjah/personal-branding-photography": {
    title: "Personal Branding Photography in Sharjah 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Sharjah — professionals, entrepreneurs, executives, coaches. LinkedIn profiles, speaker photos, website portraits. Al Qasba & studio locations. From AED 1,200.",
    h1: "Personal Branding Photography in Sharjah",
    subtitle: "Sharjah professionals. Executives. Entrepreneurs. Your brand, visually established.",
    category: "PERSONAL BRANDING",
    intro: [
      "Sharjah's professional community spans government, education, media, manufacturing, and a growing entrepreneurial class. In a market where LinkedIn and personal websites are primary business development tools, the quality of your professional image directly affects how potential clients, partners, and employers perceive your credibility before any conversation begins.",
      "Backyard Studio Official produces personal branding photography for Sharjah professionals — executives, entrepreneurs, coaches, consultants, and public figures — that translates expertise and personality into images optimised for LinkedIn, speaker profiles, website About pages, and media kits. We run a pre-session brief aligned to your positioning and audience, not just your appearance.",
    ],
    highlights: [
      { heading: "Al Qasba & Canal Locations", body: "Sharjah's most photographically versatile outdoor professional setting — waterfront context that communicates seriousness and accessibility simultaneously." },
      { heading: "Heritage & Cultural Context", body: "For Sharjah-based professionals who want to signal local roots and cultural depth, the Heritage Area and traditional architecture provide an authentically Emirati backdrop." },
      { heading: "Studio Headshots", body: "Clean, controlled studio environments for LinkedIn and corporate profiles — professional, consistent, and immediately credible." },
      { heading: "Full Brand Day Sessions", body: "Multiple looks and locations delivering a complete content bank for a quarter of LinkedIn and social media posting." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,200" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / 2 locations / 50 images", price: "From AED 2,500" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 locations / 100 images", price: "From AED 4,500" },
      { pkg: "Brand Day + Social Video", detail: "Photos + 3 x LinkedIn video clips", price: "From AED 5,800" },
    ],
    faqs: [
      { q: "Where do you shoot personal branding photography in Sharjah?", a: "Popular Sharjah personal branding locations include Al Qasba for waterfront professional context, the Heritage Area for cultural depth, and studio environments for clean LinkedIn headshots. We help you select the right location based on your brand positioning during the pre-session brief." },
      { q: "What is included in a personal branding session in Sharjah?", a: "Every session includes a pre-session brief to align on brand, audience, and visual goals. The shoot covers agreed locations and outfit changes. Delivery includes edited images in formats ready for LinkedIn, website, and social media use." },
      { q: "How much does personal branding photography cost in Sharjah?", a: "Personal branding photography in Sharjah starts from AED 1,200 for an executive headshot session. Full personal brand sessions from AED 2,500. All-day sessions from AED 4,500." },
      { q: "How long does it take to receive personal branding photos after the shoot?", a: "Delivery is typically 3–5 business days. Rush 48-hour delivery is available. We deliver an online gallery for selection and final images in web and print-ready formats." },
    ],
  },


  // ── AJMAN — Sprint 25 commercial services ──────────────────────────────────

  "ajman/wedding-photography": {
    title: "Wedding Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Ajman — Corniche venues, Kempinski Hotel Ajman, beach settings, Arabic & South Asian weddings. All-female crews available. From AED 2,500.",
    h1: "Wedding Photography in Ajman",
    subtitle: "Ajman Corniche. Kempinski. Beach venues. Intimate weddings, professionally documented.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Ajman offers a wedding photography environment unlike anywhere else in the Northern Emirates — the Corniche's open beach frontage, the landmark Kempinski Hotel Ajman, and a compact, intimate emirate where venues are within minutes of each other and logistics rarely become the obstacle they can be in larger cities.",
      "Backyard Studio Official covers weddings throughout Ajman — Corniche hotel venues, private beach settings, traditional Emirati ceremonies, and South Asian weddings for Ajman's large Indian and Pakistani community. We provide all-female photography crews for ladies-only ceremony halls as standard.",
    ],
    highlights: [
      { heading: "Kempinski Hotel Ajman", body: "The emirate's flagship luxury wedding venue, with a beach setting that produces exceptional ceremony and portrait photography in both golden hour and evening conditions." },
      { heading: "Ajman Corniche & Beach", body: "Open beach wedding photography with the Arabian Gulf as backdrop — outdoor ceremonies, sunset portraits, and beach receptions in Ajman's most scenic setting." },
      { heading: "South Asian Weddings", body: "Extensive experience covering Pakistani and Indian weddings in Ajman — Mehendi, Baraat, and Reception photography with same-day Teaser delivery." },
      { heading: "All-Female Crews Available", body: "Fully all-female photography and videography teams for ladies-only ceremony halls and gender-separated events across Ajman venues." },
    ],
    pricing: [
      { pkg: "Nikah / Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 2,500" },
      { pkg: "Wedding Day", detail: "2 photographers / 10 hrs / full gallery", price: "From AED 5,500" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 9,500" },
      { pkg: "Multi-Day Package", detail: "Mehendi + Baraat + Reception", price: "From AED 14,000" },
    ],
    faqs: [
      { q: "Do you photograph weddings at Kempinski Hotel Ajman?", a: "Yes. Kempinski Hotel Ajman is one of our most frequently photographed Ajman wedding venues. The combination of beach setting, architectural elegance, and the ballroom's light makes it an excellent photography environment." },
      { q: "How far is Ajman from Dubai or Sharjah for your team?", a: "Our teams are based in Dubai and Sharjah, so Ajman is typically a 20–45 minute drive depending on traffic. We factor travel time into our scheduling and always arrive 30–45 minutes before the scheduled start." },
      { q: "How much does wedding photography cost in Ajman?", a: "Wedding photography in Ajman starts from AED 2,500 for ceremony-only coverage and AED 5,500 for a full wedding day. Multi-day South Asian wedding packages from AED 14,000." },
      { q: "Do you provide all-female photography crews in Ajman?", a: "Yes. For weddings with ladies-only ceremony halls in Ajman, we provide fully all-female photography and videography crews operating at the same professional standard as our main teams." },
    ],
  },

  "ajman/corporate-video": {
    title: "Corporate Video Production in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Ajman — Ajman Free Zone, business profiles, brand films, government sector content. Bilingual Arabic-English delivery. From AED 5,500.",
    h1: "Corporate Video Production in Ajman",
    subtitle: "Ajman Free Zone. SME sector. Brand films. Ajman business, professionally on camera.",
    category: "CORPORATE VIDEO",
    intro: [
      "Ajman's business landscape is defined by its free zone — Ajman Free Zone is home to over 9,000 companies and is one of the UAE's most cost-effective licensing environments for SMEs. The emirate also has a growing manufacturing and trading sector, and government entities at the Ajman level generate a steady need for institutional video communications.",
      "Backyard Studio Official produces corporate video for Ajman's business community — company profiles, brand films, product demonstrations, and institutional content for Ajman Free Zone companies, manufacturing businesses, and government entities across the emirate.",
    ],
    highlights: [
      { heading: "Ajman Free Zone Company Profiles", body: "Corporate profile videos for the thousands of SMEs based in Ajman Free Zone — professional company introductions that work for investor relations, sales meetings, and tender submissions." },
      { heading: "Manufacturing & Industrial Sector", body: "Corporate films for Ajman's manufacturing and trading businesses, covering facility documentation, process videos, and B2B brand content." },
      { heading: "Government Entity Content", body: "Institutional video for Ajman government departments and public sector bodies, with appropriate Arabic-language standards and official visual protocols." },
      { heading: "Cost-Effective Production Packages", body: "Ajman's SME market demands efficient production value. We offer fixed-price corporate packages designed for businesses investing in professional video for the first time." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 5,500" },
      { pkg: "Brand Film", detail: "Multi-day / 5–8 min / Arabic + English", price: "From AED 11,000" },
      { pkg: "Product Demo Video", detail: "Half day / 60–90 sec / social-ready", price: "From AED 3,500" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / mixed formats", price: "From AED 6,500 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate videos for Ajman Free Zone companies?", a: "Yes. Many Ajman Free Zone companies require professional corporate videos for investor relations, partnership presentations, and e-tendering. We produce company profile films, facility tours, and brand introduction videos for free zone-based businesses." },
      { q: "How much does corporate video production cost in Ajman?", a: "Corporate video production in Ajman starts from AED 5,500 for a single-day shoot producing a 3–5 minute company profile. Product demo videos from AED 3,500. We provide quotes within 2 hours." },
      { q: "Do you cover permits for filming in Ajman?", a: "Yes. We coordinate filming permissions for Ajman commercial shoots, including facility access approvals and any municipal coordination required for outdoor filming locations." },
      { q: "Can you produce Arabic-English bilingual corporate videos for Ajman?", a: "Yes. Bilingual Arabic-English delivery is available for all Ajman corporate video productions — narrated, subtitled, or title-card formatted for each language version." },
    ],
  },

  "ajman/event-photography": {
    title: "Event Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Ajman — corporate conferences, government events, hotel galas, brand activations. Same-day social delivery available. From AED 2,500.",
    h1: "Event Photography in Ajman",
    subtitle: "Hotel venues. Ajman events. Brand activations. Your event, professionally documented.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Ajman's event market is served by its Corniche hotels — Kempinski, Fairmont, and a number of business hotels with conference and banquet facilities — alongside government-organized events and community activations that the emirate's compact size makes easily navigable.",
      "Backyard Studio Official covers events throughout Ajman — corporate conferences, government ceremonies, hotel galas, product launches, and community events. Our rapid same-day social delivery workflow ensures your Ajman event content reaches your audience while the event is still happening.",
    ],
    highlights: [
      { heading: "Hotel Conference & Gala Coverage", body: "Professional event photography at Ajman's major hotel venues — Kempinski, Fairmont, and business conference centres — with experience in both intimate boardroom sessions and large gala formats." },
      { heading: "Government & Institutional Events", body: "Event coverage for Ajman government departments, free zone authority events, and official ceremonies with appropriate protocol documentation." },
      { heading: "Brand Activations & Launches", body: "Product launches and brand activation photography in Ajman's retail and hospitality spaces — content delivered same-day for immediate social media distribution." },
      { heading: "Same-Day Social Delivery", body: "20–30 edited event images delivered within 2–3 hours of the event close for brands that need social momentum during the event news cycle." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 2,500" },
      { pkg: "Full Day (8 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 4,200" },
      { pkg: "Corporate Event Package", detail: "2 photographers / same-day delivery", price: "From AED 6,500 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 6,000" },
    ],
    faqs: [
      { q: "Do you cover events at Kempinski Hotel Ajman?", a: "Yes. Kempinski Ajman is one of our regular event venues in the emirate. We cover conferences, galas, corporate awards nights, and product launches at Kempinski and other major Ajman hotel venues." },
      { q: "How much does event photography cost in Ajman?", a: "Event photography in Ajman starts from AED 2,500 for a 4-hour session. Full-day coverage from AED 4,200. Same-day social delivery is available as an add-on." },
      { q: "Can you deliver event photos the same day in Ajman?", a: "Yes. We operate a same-day editing workflow for Ajman events where social media timing is critical — delivering 20–30 edited images within 2–3 hours of the event ending." },
      { q: "How far is Ajman from your base for events?", a: "Our teams reach Ajman in 20–45 minutes from Dubai or Sharjah. We always build travel buffer into event scheduling to ensure on-time arrival at all Ajman venues." },
    ],
  },

  "ajman/real-estate-photography": {
    title: "Real Estate Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Ajman — Ajman One, waterfront properties, investment units, property agencies, aerial drone. From AED 800.",
    h1: "Real Estate Photography in Ajman",
    subtitle: "Ajman One. Waterfront. Investment units. Ajman real estate, professionally photographed.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Ajman's real estate market is one of the UAE's most affordably priced, drawing investor interest from across the country and internationally. Developments like Ajman One, waterfront towers on the Corniche, and the emirate's growing residential stock represent a market where professional photography can meaningfully shift listing performance.",
      "Backyard Studio Official produces real estate photography for Ajman developers, property agencies, and individual landlords — unit photography, show apartment campaigns, aerial drone documentation, and listing imagery formatted for Bayut and Property Finder.",
    ],
    highlights: [
      { heading: "Investment Property Photography", body: "Interior and exterior photography for Ajman's investment apartment market — units photographed to attract UAE-wide and international buyer interest at an achievable price point." },
      { heading: "Waterfront & Corniche Properties", body: "Ajman's Corniche waterfront towers and lagoon-facing properties photographed to capture views and setting — the key differentiators in the emirate's most desirable addresses." },
      { heading: "GCAA-Licensed Aerial Drone", body: "Licensed aerial photography for Ajman properties and development sites with all permit coordination managed as standard." },
      { heading: "Agency High-Volume Packages", body: "Regular property photography packages for Ajman agencies managing portfolios of rental and sales listings — consistent quality, fast turnaround." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 25 images", price: "From AED 800" },
      { pkg: "Show Apartment", detail: "Full day / hero shots + detail images", price: "From AED 2,500" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 3,500" },
      { pkg: "Developer Launch", detail: "Multi-day / photo + video campaign", price: "From AED 10,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Ajman property agencies?", a: "Yes. We produce listing photography for Ajman property agencies at volumes suited to active sales and rental portfolios — consistent quality and a 2-day turnaround as standard." },
      { q: "Can you photograph waterfront and Corniche properties in Ajman?", a: "Yes. Ajman's Corniche and waterfront properties are a regular part of our real estate photography work in the emirate — we capture interior spaces and the surrounding views that define the listing's core appeal." },
      { q: "How much does real estate photography cost in Ajman?", a: "Unit photography in Ajman starts from AED 800 for up to 3 units. Show apartment campaigns from AED 2,500. Aerial drone packages from AED 2,000." },
      { q: "Are you licensed for drone photography over Ajman properties?", a: "Yes. We hold full GCAA commercial drone licences and coordinate all local Ajman authority permissions as standard." },
    ],
  },

  "ajman/drone-videography": {
    title: "Drone Videography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Ajman — Corniche, waterfront developments, aerial photography, 4K drone footage. Licensed pilot. From AED 1,800.",
    h1: "Drone Videography in Ajman",
    subtitle: "GCAA licensed. Ajman Corniche. Waterfront. Ajman from above, legally cleared.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Ajman from the air reveals a compact coastal emirate defined by its Corniche, the creek mouth, and the lagoon — a visual landscape that reads as distinct and beautiful in drone footage but is rarely seen because legal aerial operations in the emirate require proper licensing and coordination.",
      "Backyard Studio Official holds full GCAA commercial drone licences and manages Ajman municipal permissions for every shoot. We produce aerial content for the emirate's real estate developers, hospitality properties, event organizers, and tourism content in 4K with professional colour grading.",
    ],
    highlights: [
      { heading: "Ajman Corniche & Coastline", body: "The stretch of Ajman's Corniche from above, including the creek entrance and Gulf coastline — compelling aerial compositions for tourism, hospitality, and destination marketing." },
      { heading: "Property & Development Aerial", body: "GCAA-licensed aerial documentation for Ajman's waterfront towers, residential developments, and investment property campaigns." },
      { heading: "Coastal & Marine Content", body: "Aerial coverage of Ajman's fishing port, traditional dhow yards, and the emirate's coastal character — authentic content rare in UAE drone footage." },
      { heading: "4K Cinema Output", body: "All aerial footage delivered in 4K with professional colour grading — suitable for broadcast, social media, and marketing campaigns." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 1,800" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / colour-graded", price: "From AED 3,200" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground camera team / full edit", price: "From AED 5,000" },
      { pkg: "Real Estate Aerial", detail: "Development documentation / licensed", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "Is commercial drone operation licensed in Ajman?", a: "Yes, and all commercial drone operations in Ajman require GCAA licencing and local authority coordination. Backyard Studio Official holds a full GCAA commercial operator certificate and manages all permit applications for every Ajman drone shoot." },
      { q: "Can you fly over the Ajman Corniche and waterfront?", a: "Yes, with appropriate permits. We coordinate Ajman municipality and GCAA approvals for Corniche and waterfront aerial shoots, which are among our most common Ajman drone assignments." },
      { q: "How much does drone videography cost in Ajman?", a: "Drone sessions in Ajman start from AED 1,800 for a 2-hour session. Half-day packages from AED 3,200. Combined drone and ground packages from AED 5,000." },
      { q: "How quickly can you permit a drone shoot in Ajman?", a: "Standard permits for most Ajman locations take 48–72 hours. Restricted zone locations near Ajman Airport require longer processing. We advise on timelines during booking." },
    ],
  },

  "ajman/food-photography": {
    title: "Food Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Ajman — restaurant menus, Corniche dining, Talabat listings, hotel F&B, social media content. From AED 1,400.",
    h1: "Food Photography in Ajman",
    subtitle: "Corniche restaurants. Hotel dining. Delivery platforms. Your food, professionally photographed.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Ajman's restaurant scene serves a local population with a high preference for home delivery alongside dine-in options — Talabat and Deliveroo listings are critical revenue channels for most Ajman F&B businesses. Professional food photography that meets the visual standards of these platforms while also performing on Instagram determines which restaurants attract the order volume.",
      "Backyard Studio Official produces food photography for Ajman restaurants, café chains, hotel F&B outlets, and cloud kitchens — menu content ready for delivery platforms, social media, and printed materials.",
    ],
    highlights: [
      { heading: "Delivery Platform Photography", body: "Menu photography formatted and styled for Talabat, Deliveroo, and noon Food — the platforms driving the majority of Ajman restaurant revenue." },
      { heading: "Corniche Dining", body: "Food photography incorporating Ajman's Corniche waterfront setting — context shots that communicate the dine-in experience alongside the dish itself." },
      { heading: "Social Media Content", body: "Instagram and TikTok food content — Reels, vertical video, and story formats produced alongside still photography in a single session." },
      { heading: "Cloud Kitchen & Delivery Brands", body: "Specialized photography for Ajman cloud kitchen operators — consistent, platform-ready content at a volume and price point that suits delivery-only brands." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats", price: "From AED 1,400" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / food + context / digital delivery", price: "From AED 2,600" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,000 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + Reel", price: "From AED 5,000" },
    ],
    faqs: [
      { q: "Do you produce food photography for Ajman restaurants?", a: "Yes. We produce menu and food photography for restaurants, cafés, and food delivery brands throughout Ajman, including content formatted for Talabat, Deliveroo, and social media platforms." },
      { q: "How much does food photography cost in Ajman?", a: "Food photography in Ajman starts from AED 1,400 for a 3-hour menu shoot covering 20 dishes. Full menu photography from AED 2,600. Monthly social content packages from AED 2,000." },
      { q: "Can you photograph food at our Ajman restaurant during opening hours?", a: "Yes. We work around your service schedule to minimize disruption. The optimal photography window is 90 minutes before service, but we're flexible to your operational timing." },
      { q: "Do you create food Reels and TikTok content for Ajman restaurants?", a: "Yes. Alongside still photography, we produce short-form video content — plating Reels, chef action clips, and atmosphere content in vertical format for Instagram and TikTok." },
    ],
  },

  "ajman/product-photography": {
    title: "Product Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Ajman — e-commerce, Amazon UAE, Noon, Ajman Free Zone businesses. Studio and lifestyle options. Fast turnaround. From AED 750.",
    h1: "Product Photography in Ajman",
    subtitle: "E-commerce. Amazon UAE. Brand campaigns. Ajman products, professionally photographed.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Ajman Free Zone's 9,000+ registered companies include a large proportion of trading and import/export businesses whose products are sold through UAE e-commerce platforms. Professional product photography is the single highest-impact marketing investment many of these businesses can make — the difference between a listing that converts and one that doesn't often comes down to image quality alone.",
      "Backyard Studio Official produces product photography for Ajman-based businesses from e-commerce white-background shots to lifestyle campaigns, with delivery formats ready for Amazon UAE, Noon, Shopify, and social media platforms.",
    ],
    highlights: [
      { heading: "Amazon UAE & Noon Compliant", body: "White-background product photography meeting marketplace technical requirements — delivered upload-ready with correct dimensions and file specifications." },
      { heading: "Ajman Free Zone Trading Companies", body: "High-volume product photography for import/export and trading businesses in Ajman Free Zone — catalogue-scale production at competitive prices." },
      { heading: "Lifestyle & Usage Photography", body: "Products in environment and in use — the lifestyle imagery that drives purchase intent on social media and premium marketplace positions." },
      { heading: "Fast Turnaround", body: "2-day standard delivery on all Ajman product photography, with same-day rush available for time-sensitive launches." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles / 2-day delivery", price: "From AED 750" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / 4 angles", price: "From AED 2,000" },
      { pkg: "Premium (50 SKUs)", detail: "Full e-commerce suite / model available", price: "From AED 3,800" },
      { pkg: "Catalogue (100+ SKUs)", detail: "Custom quote / priority processing", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce e-commerce product photography for Ajman businesses?", a: "Yes. We produce Amazon UAE and Noon-compliant product photography for Ajman businesses — white background, correct dimensions, and upload-ready file delivery. Many of our clients are Ajman Free Zone trading companies with large SKU catalogues." },
      { q: "How much does product photography cost in Ajman?", a: "Product photography in Ajman starts from AED 750 for 10 SKUs on white background. Standard packages including lifestyle imagery from AED 2,000. Large catalogues quoted individually." },
      { q: "How quickly do you deliver product photography from Ajman?", a: "Standard delivery is 2 business days. Rush 24-hour delivery is available for an additional fee." },
      { q: "Do you come to our Ajman premises or do products need to come to your studio?", a: "Both options are available. We can photograph at your Ajman premises or factory, or you can ship products to our Dubai studio. On-location shoots are priced to include travel time." },
    ],
  },

  "ajman/personal-branding-photography": {
    title: "Personal Branding Photography in Ajman 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Ajman — professionals, entrepreneurs, executives, coaches. LinkedIn profiles, speaker photos, business portraits. Corniche & studio settings. From AED 1,100.",
    h1: "Personal Branding Photography in Ajman",
    subtitle: "Ajman professionals. Entrepreneurs. Executives. Your personal brand, on camera.",
    category: "PERSONAL BRANDING",
    intro: [
      "Ajman's business community includes thousands of free zone entrepreneurs, SME owners, and professionals across the education, manufacturing, and government sectors. For this community, a professional personal brand supported by strong photography represents significant competitive advantage — particularly on LinkedIn, where first impressions are built before any conversation takes place.",
      "Backyard Studio Official produces personal branding photography for Ajman professionals — headshots, LinkedIn profiles, business portrait sessions, and full personal brand days — at Ajman Corniche locations and in studio environments.",
    ],
    highlights: [
      { heading: "Ajman Corniche Portraits", body: "Ajman's Corniche waterfront provides a clean, professional outdoor setting for personal branding sessions that communicates both professionalism and personality." },
      { heading: "Free Zone Entrepreneur Packages", body: "Personal branding sessions designed for the Ajman Free Zone entrepreneur community — professional imagery for LinkedIn, websites, and pitch decks." },
      { heading: "Executive Headshots", body: "Studio and on-location executive headshots for Ajman's corporate sector — fast, efficient sessions with same-week delivery." },
      { heading: "Full Brand Day", body: "All-day sessions delivering a complete content bank across multiple looks and settings — LinkedIn, website About page, social media, and press kit all covered in one day." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,100" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / 2 locations / 50 images", price: "From AED 2,200" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 locations / 100 images", price: "From AED 4,200" },
      { pkg: "Brand Day + LinkedIn Video", detail: "Photos + 3 x LinkedIn video clips", price: "From AED 5,200" },
    ],
    faqs: [
      { q: "Where do you shoot personal branding photography in Ajman?", a: "Popular Ajman personal branding locations include the Corniche waterfront for open, professional outdoor settings, Ajman Free Zone business environments for enterprise context, and our Dubai studio for controlled headshot work. We help you choose the right setting during pre-session briefing." },
      { q: "How much does personal branding photography cost in Ajman?", a: "Personal branding sessions in Ajman start from AED 1,100 for executive headshots. Full personal brand sessions from AED 2,200. All-day brand sessions from AED 4,200." },
      { q: "I'm an Ajman Free Zone business owner — what personal branding photos do I need?", a: "The core set is: LinkedIn profile headshot, professional headshot for website, a few working/in-context shots for your About page, and a speaker photo if you present at industry events. A 3-hour session typically delivers all of these." },
      { q: "How quickly do you deliver personal branding photos?", a: "Delivery is 3–5 business days. Rush 48-hour delivery is available. We deliver an online selection gallery and final files in web and print-ready formats." },
    ],
  },


  // ── RAS AL KHAIMAH — Sprint 25 commercial services ────────────────────────

  "ras-al-khaimah/wedding-photography": {
    title: "Wedding Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Ras Al Khaimah — Waldorf Astoria RAK, Jebel Jais, Al Marjan Island, beach weddings, Arabic ceremonies. All-female crews available. From AED 3,500.",
    h1: "Wedding Photography in Ras Al Khaimah",
    subtitle: "Waldorf Astoria. Jebel Jais. Al Marjan Island. RAK weddings in extraordinary settings.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah has quietly become one of the UAE's most desirable wedding destinations. The Waldorf Astoria Ras Al Khaimah with its mountain backdrop, the emerging Al Marjan Island resort strip, Jebel Jais as a dramatic portrait location, and the emirate's long coastline create a wedding photography environment unlike anything available in Dubai or Abu Dhabi.",
      "Backyard Studio Official photographs weddings in Ras Al Khaimah — at the Waldorf Astoria, InterContinental Mina Al Arab, Al Marjan Island properties, private beach venues, and traditional Emirati ceremony settings across the emirate. The distance from Dubai means RAK weddings deserve a team that treats the journey as standard, not exceptional.",
    ],
    highlights: [
      { heading: "Waldorf Astoria RAK", body: "The UAE's most cinematically dramatic luxury wedding venue — a desert mountain fortress with the Hajar range as backdrop. Photography here practically shoots itself, but execution still matters." },
      { heading: "Al Marjan Island & Resort Beach", body: "RAK's growing island resort strip, with beach ceremony settings and luxury hotel venues whose visual quality rivals anything in the UAE." },
      { heading: "Jebel Jais Mountain Portraits", body: "Post-ceremony portrait sessions at altitude — Jebel Jais delivers backgrounds and lighting conditions unavailable anywhere else in the country for wedding photography." },
      { heading: "Traditional Emirati Ceremonies", body: "RAK has a strong Emirati cultural wedding tradition, and we photograph traditional ceremonies with the respect and protocol awareness they require — including all-female crews for ladies-only events." },
    ],
    pricing: [
      { pkg: "Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 3,500" },
      { pkg: "Full Wedding Day", detail: "2 photographers / 12 hrs / full gallery", price: "From AED 7,500" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 12,500" },
      { pkg: "Destination Wedding Package", detail: "2-day coverage / pre-session + ceremony", price: "From AED 16,000" },
    ],
    faqs: [
      { q: "Do you photograph weddings at the Waldorf Astoria Ras Al Khaimah?", a: "Yes. The Waldorf Astoria RAK is one of our signature wedding venue assignments. The mountain-fortress architecture, the surrounding Hajar landscape, and the property's lighting environment require photographic skill that matches the venue's ambition — which is exactly what our RAK wedding teams deliver." },
      { q: "Do you travel from Dubai to Ras Al Khaimah for weddings?", a: "Yes. RAK is approximately 1.5 hours from Dubai, and we include travel to RAK as standard for all wedding bookings. We typically stay for the duration rather than commuting, particularly for full-day coverage." },
      { q: "How much does wedding photography cost in Ras Al Khaimah?", a: "Wedding photography in RAK starts from AED 3,500 for ceremony-only coverage. Full wedding day packages from AED 7,500. The higher RAK rates reflect travel and the typically longer shooting days in the emirate's larger venue settings." },
      { q: "Can you do portrait sessions at Jebel Jais during a RAK wedding?", a: "Yes, but it requires advance planning. Jebel Jais is around 40 minutes from RAK city and the Waldorf Astoria — we can incorporate it into post-ceremony portrait time with the right schedule. We recommend building this into the day plan from the start." },
    ],
  },

  "ras-al-khaimah/corporate-video": {
    title: "Corporate Video Production in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Ras Al Khaimah — Rakez free zone, manufacturing sector, tourism brands, government entities. Bilingual delivery. From AED 6,000.",
    h1: "Corporate Video Production in Ras Al Khaimah",
    subtitle: "Rakez. Manufacturing. Tourism brands. RAK corporate video, produced professionally.",
    category: "CORPORATE VIDEO",
    intro: [
      "Ras Al Khaimah's economy has two distinct corporate video markets: the industrial and manufacturing sector anchored by Rakez (Ras Al Khaimah Economic Zone) — one of the UAE's most significant free zone and industrial zone complexes — and the rapidly growing tourism and hospitality sector led by luxury hotels and adventure tourism operators.",
      "Backyard Studio Official produces corporate video for both dimensions of RAK's economy — industrial brand films and facility documentation for Rakez businesses, and hospitality and destination content for RAK Tourism and the emirate's luxury hotel properties.",
    ],
    highlights: [
      { heading: "Rakez Industrial Films", body: "Brand films, facility tours, and corporate profiles for Rakez-based manufacturers and industrial businesses — content that communicates operational scale and investment-readiness." },
      { heading: "Tourism & Hospitality Content", body: "Destination videos, hotel brand films, and tourism campaign content for RAK's growing visitor economy — Jebel Jais, Al Marjan Island, and adventure tourism operators." },
      { heading: "Government & Institutional", body: "Institutional video content for RAK government entities, the Ras Al Khaimah Chamber of Commerce, and public sector communications." },
      { heading: "Manufacturing Process Documentation", body: "Technical corporate videos documenting manufacturing processes, quality standards, and operational procedures for RAK's industrial sector B2B marketing." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 6,000" },
      { pkg: "Industrial Brand Film", detail: "Multi-day / facility + corporate / bilingual", price: "From AED 15,000" },
      { pkg: "Tourism Content Package", detail: "2 days / drone + ground / 3 deliverables", price: "From AED 18,000" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / social + long-form", price: "From AED 8,000 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate video for Rakez (Ras Al Khaimah Economic Zone) companies?", a: "Yes. Rakez has hundreds of manufacturing and industrial tenants, many of whom require professional corporate video for investor relations, trade show presentations, and B2B marketing. We produce facility documentation, company profiles, and brand films for Rakez businesses." },
      { q: "Do you produce tourism and hospitality video content for RAK?", a: "Yes. We produce destination films, hotel brand content, adventure tourism videos (Jebel Jais, zip line, etc.), and seasonal campaign content for RAK Tourism and the emirate's hospitality properties." },
      { q: "How much does corporate video cost in Ras Al Khaimah?", a: "Corporate video production in RAK starts from AED 6,000. Industrial brand films from AED 15,000 due to multi-day requirements. Tourism packages from AED 18,000. All rates include travel to RAK." },
      { q: "Do you manage drone permits for aerial corporate footage in RAK?", a: "Yes. GCAA licensing and RAK local authority approvals for aerial footage are managed as standard for all our RAK corporate video projects." },
    ],
  },

  "ras-al-khaimah/event-photography": {
    title: "Event Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Ras Al Khaimah — Waldorf Astoria events, Al Marjan Island activations, Rakez conferences, corporate dinners. Same-day delivery available. From AED 3,200.",
    h1: "Event Photography in Ras Al Khaimah",
    subtitle: "Waldorf Astoria. Rakez. Al Marjan Island. RAK events, professionally documented.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's event market splits between the emirate's growing hospitality sector — luxury hotel events at Waldorf Astoria, Intercontinental Mina Al Arab, and other property — and the corporate and institutional events tied to Rakez, RAK Chamber, and government entities.",
      "Backyard Studio Official covers events throughout RAK — corporate conferences, hotel galas, product launches on Al Marjan Island, government ceremonies, and adventure tourism activations. We build RAK travel time into our event scheduling as standard, so you receive the same punctual, professional service as Dubai clients.",
    ],
    highlights: [
      { heading: "Waldorf Astoria RAK Events", body: "The emirate's most prestigious event venue, with the Hajar mountain backdrop making every event photograph extraordinary. We cover corporate gatherings, charity galas, and product launches at the Waldorf." },
      { heading: "Rakez Business Events", body: "Corporate events, investor roadshows, and business conferences in Rakez and the RAK Chamber — formal event photography with efficient delivery for tight corporate publishing schedules." },
      { heading: "Al Marjan Island Activations", body: "Brand launches and commercial activations on RAK's island resort strip, including outdoor event photography in the emirate's coastal setting." },
      { heading: "Adventure Tourism Event Content", body: "Photography for Jebel Jais events — the world's longest zip line, mountain adventure activations, and tourism campaigns that require photographers comfortable in challenging locations." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 3,200" },
      { pkg: "Full Day (8 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 5,000" },
      { pkg: "Corporate Event Package", detail: "2 photographers / same-day delivery", price: "From AED 8,500 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 7,500" },
    ],
    faqs: [
      { q: "Do you cover events at the Waldorf Astoria Ras Al Khaimah?", a: "Yes. The Waldorf Astoria RAK is a venue we cover regularly for corporate galas, product launches, and hospitality events. The property's setting makes event photography here among the most visually impactful in the UAE." },
      { q: "Do you travel from Dubai for events in Ras Al Khaimah?", a: "Yes. We include RAK travel time (approximately 1.5 hours from Dubai) in our event rate structure. Our teams arrive 45 minutes before the event start — the same standard we apply to every location." },
      { q: "How much does event photography cost in Ras Al Khaimah?", a: "Event photography in RAK starts from AED 3,200 for a 4-hour half-day. Full-day coverage from AED 5,000. Rates are slightly higher than Dubai/Sharjah to account for travel to the emirate." },
      { q: "Can you photograph events at Jebel Jais in Ras Al Khaimah?", a: "Yes. We photograph adventure tourism events and activations at Jebel Jais — including the zip line and mountain activities. Our photographers are experienced in outdoor and challenging environment event coverage." },
    ],
  },

  "ras-al-khaimah/real-estate-photography": {
    title: "Real Estate Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Ras Al Khaimah — Al Marjan Island, Mina Al Arab, Waldorf Residences, waterfront properties, aerial drone. From AED 1,200.",
    h1: "Real Estate Photography in Ras Al Khaimah",
    subtitle: "Al Marjan Island. Mina Al Arab. Waldorf Residences. RAK real estate, professionally presented.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's real estate market has accelerated significantly, driven by Al Marjan Island's transformation into a resort and residential destination — anchored by Wynn Al Marjan Island which is generating extraordinary investor demand — and Mina Al Arab's mature waterfront community. The emirate's property story is becoming one of the UAE's most compelling investment narratives.",
      "Backyard Studio Official produces real estate photography for RAK developers, luxury hotel residences, and property agencies — capturing the mountain-meets-sea landscape that defines the emirate's unique property proposition and producing aerial drone documentation at the quality investors expect.",
    ],
    highlights: [
      { heading: "Al Marjan Island Properties", body: "Waterfront and island-facing unit photography and aerial documentation for Al Marjan's rapidly developing resort and residential community." },
      { heading: "Mina Al Arab Community", body: "Established waterfront community photography — show apartments, unit listings, and community lifestyle content for one of RAK's premium residential addresses." },
      { heading: "Luxury Residences & Hotel Apartments", body: "Photography for RAK's branded residences and hotel-connected apartment developments — visual content meeting the standards of international hotel brands and luxury property marketing." },
      { heading: "Mountain & Coastal Aerial", body: "GCAA-licensed aerial photography capturing RAK's unique mountain-and-sea setting — content that communicates the lifestyle proposition unavailable in other UAE emirate property markets." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,200" },
      { pkg: "Show Apartment", detail: "Full day / hero shots + detail images", price: "From AED 3,200" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 4,500" },
      { pkg: "Developer Launch Package", detail: "Multi-day / full photo + video campaign", price: "From AED 16,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for Al Marjan Island developments?", a: "Yes. Al Marjan Island is one of our most active RAK real estate photography locations — show apartments, unit listings, community aerial documentation, and investor-facing campaign content for the island's rapidly growing development pipeline." },
      { q: "Can you produce aerial photography for Ras Al Khaimah property developments?", a: "Yes. We hold GCAA commercial drone licences and coordinate all RAK municipal and GCAA permissions for aerial real estate photography. RAK's mountain-and-sea aerial photography is among the most distinctive in the UAE." },
      { q: "How much does real estate photography cost in Ras Al Khaimah?", a: "Real estate photography in RAK starts from AED 1,200 for unit photography, slightly higher than Dubai/Sharjah to account for travel. Show apartments from AED 3,200. Developer launch packages from AED 16,000." },
      { q: "Do you produce Mina Al Arab property photography?", a: "Yes. Mina Al Arab is a regular real estate photography assignment for us in RAK — unit listings, show apartment campaigns, and community lifestyle photography for agents and developers in the development." },
    ],
  },

  "ras-al-khaimah/drone-videography": {
    title: "Drone Videography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Ras Al Khaimah — Jebel Jais, Al Marjan Island, Hajar Mountains, Mina Al Arab, 4K aerial photography. From AED 2,500.",
    h1: "Drone Videography in Ras Al Khaimah",
    subtitle: "Jebel Jais. Al Marjan Island. Hajar Mountains. The UAE's most dramatic aerial backdrop.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Ras Al Khaimah is arguably the most spectacular drone videography location in the UAE. Jebel Jais — the country's highest peak — provides mountain aerial compositions unavailable anywhere else in the country. Al Marjan Island's expanding resort frontage reads as extraordinary from altitude. The transition from green mountain to desert plain to Gulf coast in a single drone flight is a uniquely RAK visual sequence.",
      "Backyard Studio Official is GCAA licensed for commercial drone operations in Ras Al Khaimah and manages all RAK local authority approvals for mountain, coastal, and development site shoots. We produce aerial content for RAK Tourism, luxury hotels, real estate developers, event organizers, and commercial clients in 4K with cinema colour grading.",
    ],
    highlights: [
      { heading: "Jebel Jais Mountain Aerials", body: "The UAE's highest peak from altitude — mountain landscape, cloud formations, the zip line corridor, and the Hajar range extending into Oman. Drone footage here is unmatched anywhere in the country." },
      { heading: "Al Marjan Island Resort Strip", body: "The expanding crescent of Al Marjan Island resort development from above — a visual that communicates the emirate's investment story instantly." },
      { heading: "Coastal & Desert Transitions", body: "RAK's unique geography from altitude — mangroves, coastline, creek, desert, and mountain in a single sequence that no other UAE emirate can offer." },
      { heading: "Tourism & Commercial Campaigns", body: "Destination marketing aerial content for RAK Tourism, adventure operators, and commercial campaigns requiring the emirate's exceptional landscape as backdrop." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 2,500" },
      { pkg: "Half Day Aerial", detail: "4 hrs / multiple locations / colour-graded", price: "From AED 4,500" },
      { pkg: "Full Day Mountain + Coast", detail: "8 hrs / Jebel Jais + Al Marjan / full edit", price: "From AED 8,000" },
      { pkg: "Real Estate Aerial Campaign", detail: "Development + community / licensed GCAA", price: "From AED 3,800" },
    ],
    faqs: [
      { q: "Can you fly a drone on Jebel Jais in Ras Al Khaimah?", a: "Yes, with appropriate permits. Commercial drone operations on Jebel Jais require GCAA clearance and RAK Tourism/mountain authority coordination, which we manage as standard. Processing typically takes 3–5 business days for Jebel Jais locations." },
      { q: "Is drone videography in RAK significantly different from Dubai?", a: "Yes — it's dramatically different. The Hajar Mountains, Jebel Jais altitude, and the mountain-desert-coast transition give RAK aerial footage a visual character unlike any other UAE emirate. It's also generally less congested airspace than Dubai, allowing for cleaner permit processing." },
      { q: "How much does drone videography cost in Ras Al Khaimah?", a: "Drone sessions in RAK start from AED 2,500. Half-day aerial packages from AED 4,500. Full-day mountain and coast shoots from AED 8,000. Rates include travel to RAK." },
      { q: "Do you produce aerial content for RAK Tourism and hospitality brands?", a: "Yes. We are an active production partner for destination marketing content in Ras Al Khaimah — tourism campaign aerials, hotel property overviews, and adventure tourism documentation for RAK's growing visitor market." },
    ],
  },

  "ras-al-khaimah/food-photography": {
    title: "Food Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Ras Al Khaimah — Waldorf Astoria dining, Al Marjan restaurants, hotel F&B, menus, social media content. From AED 1,800.",
    h1: "Food Photography in Ras Al Khaimah",
    subtitle: "Waldorf dining. Al Marjan restaurants. Hotel F&B. RAK food, beautifully photographed.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's food photography market is increasingly driven by its hospitality sector — luxury hotel restaurants at the Waldorf Astoria, InterContinental Mina Al Arab, and the growing number of resort-quality F&B outlets on Al Marjan Island set the visual standard that the emirate's independent restaurants aspire to match.",
      "Backyard Studio Official produces food photography in RAK for luxury hotel F&B operations, Al Marjan resort restaurants, independent dining establishments, and delivery platform businesses across the emirate — producing content that meets the premium visual standards RAK's tourism positioning demands.",
    ],
    highlights: [
      { heading: "Luxury Hotel F&B Photography", body: "Food photography for Waldorf Astoria RAK, InterContinental Mina Al Arab, and other premium RAK hotel F&B operations — visual content meeting international luxury hotel brand standards." },
      { heading: "Al Marjan Island Restaurants", body: "Resort-quality food photography for the growing dining scene on Al Marjan Island, incorporating the waterfront setting where appropriate." },
      { heading: "Menu Photography", body: "Complete menu documentation for RAK restaurants — every dish photographed for printed menus, QR digital menus, and delivery platform listings." },
      { heading: "Social Media & Campaign Content", body: "Instagram and TikTok food content for RAK restaurants competing for the emirate's growing tourism visitor market." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats", price: "From AED 1,800" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / food + context / digital delivery", price: "From AED 3,200" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,500 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + brand film", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Do you produce food photography for hotels in Ras Al Khaimah?", a: "Yes. We produce F&B photography for RAK hotel restaurants — Waldorf Astoria, InterContinental Mina Al Arab, and other properties — to the visual standard that international luxury hotel brands require for their own marketing materials." },
      { q: "How much does food photography cost in Ras Al Khaimah?", a: "Food photography in RAK starts from AED 1,800 for a 20-dish menu shoot. The slight premium over Dubai/Sharjah rates reflects travel to the emirate. Full menu shoots from AED 3,200." },
      { q: "Do you photograph food for delivery platforms in RAK?", a: "Yes. Talabat and Deliveroo-formatted food photography is available for RAK restaurants. We deliver files in the dimensions and specifications each platform requires." },
      { q: "Can you combine food photography with a restaurant interior shoot in RAK?", a: "Yes. Most RAK clients combine food photography with interior and ambience photography in a single full-day session — delivering a complete visual suite for website, social media, and delivery platforms." },
    ],
  },

  "ras-al-khaimah/product-photography": {
    title: "Product Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Ras Al Khaimah — e-commerce, Rakez manufacturers, Amazon UAE, Noon, brand campaigns. Studio and on-location. From AED 1,000.",
    h1: "Product Photography in Ras Al Khaimah",
    subtitle: "Rakez businesses. E-commerce. Brand campaigns. RAK products, professionally presented.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Ras Al Khaimah's manufacturing sector — among the most significant in the Northern Emirates — produces goods that are exported globally. Many Rakez-based manufacturers also sell domestically through UAE e-commerce platforms and need product photography that meets marketplace requirements while serving B2B catalogue needs simultaneously.",
      "Backyard Studio Official produces product photography for RAK's manufacturing and business community — e-commerce photography for domestic platform listings, B2B catalogue content for export-facing sales, and brand campaign imagery for businesses building direct-to-consumer presences.",
    ],
    highlights: [
      { heading: "Rakez Manufacturer Photography", body: "Product photography for Rakez-based manufacturers — B2B catalogue content, industrial product documentation, and export-facing marketing imagery." },
      { heading: "E-Commerce & Marketplace Ready", body: "Amazon UAE and Noon compliant white-background photography for RAK businesses selling through UAE domestic e-commerce platforms." },
      { heading: "Industrial & Technical Products", body: "Photography for technical and industrial product categories — precise, accurate representation of products where specification detail matters as much as visual appeal." },
      { heading: "On-Location Studio Setup", body: "For RAK businesses with large or heavy products, we bring portable studio equipment to your RAK premises rather than requiring shipping to Dubai." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles / 3-day delivery", price: "From AED 1,000" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / 4 angles", price: "From AED 2,500" },
      { pkg: "Industrial Catalogue", detail: "50+ products / on-location / B2B spec", price: "From AED 5,000" },
      { pkg: "Brand Campaign", detail: "Hero products + lifestyle + social", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "Do you produce product photography for Rakez manufacturers in RAK?", a: "Yes. Rakez-based manufacturers are a core part of our RAK product photography work — B2B catalogue documentation, export marketing content, and UAE e-commerce photography for businesses across the Rakez free zone and industrial zones." },
      { q: "Can you bring a studio setup to our RAK premises?", a: "Yes. For heavy or large products, we bring portable studio lighting and background equipment to your RAK premises. This avoids the logistics and cost of shipping large items to our Dubai studio." },
      { q: "How much does product photography cost in Ras Al Khaimah?", a: "Product photography in RAK starts from AED 1,000 for 10 SKUs. On-location sessions at RAK premises include travel. Standard 30-SKU packages from AED 2,500." },
      { q: "How quickly do you deliver product photography from RAK shoots?", a: "Standard delivery is 3 business days from the shoot date. Rush 48-hour delivery available for priority items." },
    ],
  },

  "ras-al-khaimah/personal-branding-photography": {
    title: "Personal Branding Photography in Ras Al Khaimah 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Ras Al Khaimah — professionals, executives, entrepreneurs, tourism personalities. Jebel Jais, Al Marjan Island, studio settings. From AED 1,400.",
    h1: "Personal Branding Photography in Ras Al Khaimah",
    subtitle: "RAK professionals. Executives. Entrepreneurs. Extraordinary landscapes. Your brand on camera.",
    category: "PERSONAL BRANDING",
    intro: [
      "Ras Al Khaimah offers personal branding photography locations unlike anywhere else in the UAE. The Hajar Mountains, Jebel Jais altitude, Al Marjan Island's waterfront, and the emirate's dramatic desert and coastal landscapes give RAK-based professionals access to backdrops that create genuinely distinctive brand photography.",
      "Backyard Studio Official produces personal branding photography for RAK professionals — executives and entrepreneurs in the emirate's business community, hospitality leaders, tourism personalities, and public figures who want imagery that reflects RAK's unique landscape alongside their professional positioning.",
    ],
    highlights: [
      { heading: "Jebel Jais Mountain Sessions", body: "For RAK professionals who want brand photography that is genuinely distinctive — mountain-altitude sessions at the UAE's highest accessible peak, producing imagery available nowhere else in the country." },
      { heading: "Al Marjan Island Waterfront", body: "Resort-quality personal branding sessions on Al Marjan Island — combining coastal setting, resort architecture, and professional photography in a premium environment." },
      { heading: "Hajar Desert & Landscape Sessions", body: "RAK's desert and mountain landscape as the backdrop for bold personal branding photography — particularly effective for adventure, tourism, and resilience-oriented brand narratives." },
      { heading: "Corporate Headshots for RAK Executives", body: "Classic executive headshots and LinkedIn profiles produced at RAK business venues or studio environments — professional, credible, efficiently delivered." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,400" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / 2 locations / 50 images", price: "From AED 2,800" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 RAK locations / 100 images", price: "From AED 5,500" },
      { pkg: "Mountain Brand Session", detail: "Jebel Jais altitude session / 3 hrs", price: "From AED 3,500" },
    ],
    faqs: [
      { q: "Can I have my personal branding photography done on Jebel Jais?", a: "Yes. We offer dedicated Jebel Jais mountain personal branding sessions — one of the most distinctive settings for professional photography in the UAE. Sessions are scheduled for golden hour and require advance planning for mountain access coordination." },
      { q: "How much does personal branding photography cost in Ras Al Khaimah?", a: "Personal branding sessions in RAK start from AED 1,400 for executive headshots. Full sessions from AED 2,800. Jebel Jais mountain sessions from AED 3,500. Rates are slightly higher than Dubai to account for travel." },
      { q: "I'm a RAK hospitality executive — what locations work for my brand photography?", a: "For hospitality leaders in RAK, we recommend sessions that incorporate your property or its landscape context — Waldorf Astoria grounds, Al Marjan Island waterfront, or Jebel Jais depending on your brand narrative. We advise on location selection during the pre-session brief." },
      { q: "Do you travel from Dubai to shoot personal branding sessions in RAK?", a: "Yes. RAK personal branding sessions include travel from our Dubai base. We typically combine multiple RAK bookings on the same day to offer competitive rates." },
    ],
  },


  // ── FUJAIRAH — Sprint 25 commercial services ──────────────────────────────

  "fujairah/wedding-photography": {
    title: "Wedding Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Fujairah — Al Aqah Beach, Le Méridien, Rotana, East Coast beach ceremonies, Arabic weddings. All-female crews available. From AED 3,500.",
    h1: "Wedding Photography in Fujairah",
    subtitle: "Al Aqah Beach. Le Méridien. East Coast mountains. Fujairah weddings on the Indian Ocean.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Fujairah is the UAE's only emirate on the Indian Ocean coast, and its wedding photography environment reflects this — East Coast beaches with the Hajar Mountains as backdrop, luxury beach resorts including Le Méridien Al Aqah Beach Resort and Rotana Fujairah, and a natural landscape that makes wedding photography here unlike anywhere else in the country.",
      "Backyard Studio Official photographs weddings in Fujairah — at Al Aqah beach resorts, Fujairah city venues, traditional Emirati ceremonies in the emirate's mountain villages, and beach weddings on the East Coast. We cover Fujairah as a destination wedding location and as a home ceremony market for the emirate's own community.",
    ],
    highlights: [
      { heading: "Al Aqah Beach Weddings", body: "Le Méridien Al Aqah Beach Resort and the surrounding beach wedding venues offer Indian Ocean sunsets, mountain reflections in the water, and the East Coast's distinctive light — some of the most dramatic wedding photography conditions in the UAE." },
      { heading: "East Coast Mountain & Beach", body: "Post-ceremony portrait sessions incorporating the Hajar Mountains descending to the sea — a geographic combination available only on the Fujairah coast." },
      { heading: "Traditional Emirati Ceremonies", body: "Fujairah has preserved Emirati wedding traditions to a degree uncommon in larger emirates. We photograph these ceremonies with the understanding of protocol and cultural sensitivity they require." },
      { heading: "Destination Wedding Photography", body: "Coverage of weddings where the couple has chosen Fujairah specifically for its landscape — resort beach ceremonies and adventure portraits in the Hajar Mountains." },
    ],
    pricing: [
      { pkg: "Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 3,500" },
      { pkg: "Full Wedding Day", detail: "2 photographers / 12 hrs / full gallery", price: "From AED 7,500" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 13,000" },
      { pkg: "Destination Package", detail: "2-day coverage / pre-session + ceremony", price: "From AED 17,000" },
    ],
    faqs: [
      { q: "Do you photograph weddings at Le Méridien Al Aqah Beach Resort?", a: "Yes. Le Méridien Al Aqah is one of our signature Fujairah wedding assignments. The combination of beach ceremony setting, Indian Ocean horizon, and the Hajar Mountains behind the property produces exceptional wedding photography unlike any other UAE venue." },
      { q: "How long does it take to travel from Dubai to Fujairah for a wedding?", a: "Dubai to Fujairah city is approximately 1.5 hours, and to Al Aqah in the north approximately 2 hours. We factor this into scheduling and always arrive well before the ceremony begins." },
      { q: "How much does wedding photography cost in Fujairah?", a: "Wedding photography in Fujairah starts from AED 3,500 for ceremony-only coverage. Full wedding day packages from AED 7,500. Destination packages for beach resort weddings from AED 17,000." },
      { q: "Can you photograph traditional Emirati weddings in Fujairah?", a: "Yes. Fujairah's Emirati community maintains strong wedding traditions, and we are experienced in covering traditional Emirati ceremonies with appropriate cultural sensitivity, including all-female crews for ladies-only celebrations." },
    ],
  },

  "fujairah/corporate-video": {
    title: "Corporate Video Production in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Fujairah — Fujairah Free Zone, port sector, government entities, oil & maritime industry, bilingual content. From AED 6,000.",
    h1: "Corporate Video Production in Fujairah",
    subtitle: "Fujairah Free Zone. Port Authority. Maritime sector. Fujairah business, on camera.",
    category: "CORPORATE VIDEO",
    intro: [
      "Fujairah's corporate economy centres on its port — Port of Fujairah is one of the world's busiest bunkering hubs and handles significant container and bulk commodity traffic. The free zone and the emirate's oil storage and bunkering sector represent a corporate video market with specific industrial requirements alongside the institutional communications needs of Fujairah's government entities.",
      "Backyard Studio Official produces corporate video for Fujairah's business community — port sector companies, Fujairah Free Zone businesses, maritime and oil industry operators, government entities, and the hospitality businesses serving the emirate's East Coast tourism market.",
    ],
    highlights: [
      { heading: "Port & Maritime Industry Films", body: "Corporate video for Port of Fujairah-connected businesses and maritime operators — facility documentation, operational overview films, and corporate profiles for the UAE's East Coast maritime hub." },
      { heading: "Fujairah Free Zone Corporate Content", body: "Company profiles, brand films, and investor-facing video for businesses operating in Fujairah Free Zone." },
      { heading: "Government & Institutional", body: "Institutional video for Fujairah government entities and the Fujairah Emirate Media Office, meeting Arabic-language standards and official visual protocols." },
      { heading: "East Coast Tourism Content", body: "Video production for Fujairah's tourism operators, diving centres, and adventure tourism businesses — destination content for the UAE's East Coast hospitality market." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 6,000" },
      { pkg: "Maritime / Industrial Film", detail: "Multi-day / facility + aerial / bilingual", price: "From AED 16,000" },
      { pkg: "Tourism Content Package", detail: "2 days / drone + ground / 3 deliverables", price: "From AED 15,000" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / mixed formats", price: "From AED 8,000 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate video for Port of Fujairah companies?", a: "Yes. We produce corporate video for port-connected businesses, maritime operators, and bunkering sector companies based in Fujairah — including facility documentation, company profile films, and operational overview content for their B2B marketing and investor relations." },
      { q: "Can you produce bilingual Arabic-English corporate video in Fujairah?", a: "Yes. Bilingual production is standard for all our Fujairah corporate video work, with Arabic and English versions delivered as narrated or subtitled films." },
      { q: "How much does corporate video production cost in Fujairah?", a: "Corporate video in Fujairah starts from AED 6,000. Maritime and industrial films from AED 16,000. Tourism packages from AED 15,000. All rates include travel to Fujairah." },
      { q: "Do you manage filming permits for Fujairah commercial shoots?", a: "Yes. We coordinate Fujairah municipal and port authority filming permissions as standard for commercial shoots in the emirate, including GCAA drone permits for aerial footage." },
    ],
  },

  "fujairah/event-photography": {
    title: "Event Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Fujairah — resort galas, government events, Al Aqah Beach, corporate conferences, Fujairah Museum, East Coast activations. From AED 3,200.",
    h1: "Event Photography in Fujairah",
    subtitle: "East Coast resorts. Government events. Brand activations. Fujairah, professionally documented.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Fujairah's event market is concentrated around its resort hospitality sector and government-organized events. The East Coast resort strip around Al Aqah hosts corporate retreats, incentive events, and gala dinners with the Indian Ocean as backdrop. Fujairah city generates institutional events through its government departments and port authority.",
      "Backyard Studio Official covers events throughout Fujairah — resort galas, government ceremonies, corporate team-building events, diving and adventure tourism activations, and conference coverage at Fujairah venues. We treat Fujairah as a full event market, not a distant outpost.",
    ],
    highlights: [
      { heading: "East Coast Resort Events", body: "Corporate retreats and gala dinners at Al Aqah Beach resorts — photography that captures both the event content and the extraordinary East Coast setting that makes these events memorable." },
      { heading: "Government & Port Authority Events", body: "Official ceremony coverage for Fujairah government entities and Port Authority events — appropriate protocol documentation with Arabic-language event programmes." },
      { heading: "Adventure Tourism Activations", body: "Photography for diving, mountain biking, and outdoor adventure event activations on Fujairah's East Coast — outdoor and action event coverage requiring photographers comfortable in challenging environments." },
      { heading: "Corporate Retreat Documentation", body: "Multi-day corporate retreat photography covering team activities, formal sessions, and social events — a comprehensive documentary record of team events at Fujairah venues." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 3,200" },
      { pkg: "Full Day (8 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 5,000" },
      { pkg: "Corporate Retreat Package", detail: "Multi-day / 2 photographers / full documentation", price: "From AED 8,000 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 7,500" },
    ],
    faqs: [
      { q: "Do you cover corporate events at Al Aqah Beach resorts in Fujairah?", a: "Yes. Corporate retreats, incentive events, and gala dinners at Le Méridien Al Aqah and other East Coast resorts are among our Fujairah event photography assignments. The setting produces event photography that participants genuinely want to keep." },
      { q: "How much does event photography cost in Fujairah?", a: "Event photography in Fujairah starts from AED 3,200 for a 4-hour session. Full-day coverage from AED 5,000. Rates are comparable to Ras Al Khaimah and include travel to Fujairah." },
      { q: "Can you cover multi-day corporate retreats in Fujairah?", a: "Yes. Multi-day retreat documentation is something we do regularly for Fujairah resort events — covering formal sessions, team activities, and social events across the retreat programme." },
      { q: "Do you photograph events at Fujairah government venues?", a: "Yes. We cover official events, ceremonies, and conferences at Fujairah government venues with appropriate protocol documentation and bilingual event programme coverage." },
    ],
  },

  "fujairah/real-estate-photography": {
    title: "Real Estate Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Fujairah — East Coast properties, beach villas, Fujairah developments, aerial drone, GCAA licensed. From AED 1,200.",
    h1: "Real Estate Photography in Fujairah",
    subtitle: "East Coast villas. Beach properties. Fujairah developments. Photographed at their best.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Fujairah's real estate market is defined by its landscape — East Coast beachfront properties, mountain-facing villas, and the unique proposition of being the only emirate on the Indian Ocean. Properties here compete on lifestyle appeal, and professional photography that captures the sea, mountains, and natural environment is essential for achieving premium positioning in this market.",
      "Backyard Studio Official produces real estate photography for Fujairah developers, property agencies, and private sellers — beach villas, resort properties, development site documentation, and aerial content that captures the East Coast landscape that defines the emirate's property appeal.",
    ],
    highlights: [
      { heading: "East Coast Beach Property", body: "Beachfront and sea-facing property photography that captures Fujairah's Indian Ocean views and coastline — the key selling proposition for the emirate's premium real estate." },
      { heading: "Mountain & Landscape Setting", body: "Hajar Mountain-facing properties and inland villas photographed to show the dramatic natural landscape context unavailable in other UAE property markets." },
      { heading: "GCAA-Licensed Coastal Aerial", body: "Licensed aerial drone photography of Fujairah's coastline and East Coast properties — spectacular views that convey the location's appeal instantly." },
      { heading: "Development Site Documentation", body: "Progress photography and aerial site documentation for Fujairah property developments — investor-facing content tracking construction milestones." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 30 images", price: "From AED 1,200" },
      { pkg: "Villa / Beach Property", detail: "Full day / interior + exterior + context", price: "From AED 3,500" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 4,500" },
      { pkg: "Developer Campaign", detail: "Multi-day / photo + video / coast + aerial", price: "From AED 16,000" },
    ],
    faqs: [
      { q: "Do you produce real estate photography for East Coast beach properties in Fujairah?", a: "Yes. East Coast beach and sea-view properties are our most common Fujairah real estate photography assignment — interior photography, exterior beach settings, and aerial documentation that captures the Indian Ocean backdrop central to these properties' appeal." },
      { q: "Can you produce aerial photography of Fujairah's coastline?", a: "Yes. GCAA-licensed coastal aerial photography in Fujairah captures the East Coast from altitude — the beach frontage, the Hajar Mountains backdrop, and the Indian Ocean — in 4K footage and high-resolution stills." },
      { q: "How much does real estate photography cost in Fujairah?", a: "Real estate photography in Fujairah starts from AED 1,200 for unit photography. Beach villa packages from AED 3,500. Aerial plus ground packages from AED 4,500." },
      { q: "Do you work with Fujairah property agencies?", a: "Yes. We produce listing photography for Fujairah property agencies managing East Coast residential portfolios — consistent quality and 3-day turnaround as standard." },
    ],
  },

  "fujairah/drone-videography": {
    title: "Drone Videography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Fujairah — East Coast coastline, Hajar Mountains, beach resorts, real estate, tourism campaigns. 4K aerial footage. From AED 2,500.",
    h1: "Drone Videography in Fujairah",
    subtitle: "GCAA licensed. Indian Ocean coast. Hajar Mountains. Fujairah from above.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Fujairah offers drone videography conditions unlike anywhere on the UAE's western coast. The East Coast's Indian Ocean horizon, the Hajar Mountains descending directly to the sea, ancient forts on hillsides, and the distinctive coastal character of a landscape that separates the UAE from the rest of the world in a single flight make aerial photography here uniquely compelling.",
      "Backyard Studio Official holds full GCAA commercial drone licences and coordinates all Fujairah municipal and airspace permissions for coastal, mountain, and resort aerial shoots. We produce destination marketing content, real estate aerial campaigns, tourism films, and corporate aerial documentation in 4K with cinema colour grading.",
    ],
    highlights: [
      { heading: "East Coast Indian Ocean Aerials", body: "The Fujairah coastline from altitude — beach, reef, mountains, and ocean in a single frame. Aerial footage here conveys the East Coast's distinctive character in seconds." },
      { heading: "Hajar Mountain Aerial Footage", body: "Mountain valleys, wadi systems, and ancient fortifications seen from above — the Hajar landscape accessed by drone reveals geological and cultural features invisible from the ground." },
      { heading: "Beach Resort Aerial Documentation", body: "Resort property overviews, Al Aqah beach frontage, and hospitality venue aerials for Fujairah's hotel and tourism operators." },
      { heading: "Coastal Real Estate Campaigns", body: "Licensed aerial documentation for Fujairah's beachfront and sea-view property developments — the aerial context that transforms a property listing." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 2,500" },
      { pkg: "Half Day Aerial", detail: "4 hrs / coast + inland / colour-graded", price: "From AED 4,500" },
      { pkg: "Full Day Mountain + Coast", detail: "8 hrs / Hajar + East Coast / full edit", price: "From AED 7,500" },
      { pkg: "Tourism Campaign Package", detail: "2 days / drone + ground / 4 deliverables", price: "From AED 14,000" },
    ],
    faqs: [
      { q: "Can you fly a drone along Fujairah's East Coast?", a: "Yes, with appropriate GCAA and local authority permits, which we manage as standard. Coastal drone flights in Fujairah require coordination that we handle — most standard East Coast locations permit within 48–72 hours." },
      { q: "Is Fujairah significantly different for drone work compared to the West Coast UAE?", a: "Yes — dramatically so. The East Coast's Indian Ocean horizon, mountain-to-sea geography, and the absence of the sand haze common on the West Coast create aerial footage with a distinctly different visual character. The Hajar Mountains as backdrop are available nowhere on the UAE's western coast." },
      { q: "How much does drone videography cost in Fujairah?", a: "Drone sessions in Fujairah start from AED 2,500. Half-day coastal packages from AED 4,500. Full-day mountain and coast packages from AED 7,500. All rates include travel." },
      { q: "Do you produce drone content for Fujairah tourism campaigns?", a: "Yes. We produce destination marketing aerial content for Fujairah Tourism and East Coast hospitality operators — the kind of aerial sequences that make viewers immediately want to visit." },
    ],
  },

  "fujairah/food-photography": {
    title: "Food Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Fujairah — East Coast restaurants, Al Aqah resort dining, seafood, hotel F&B, menus, social media content. From AED 1,800.",
    h1: "Food Photography in Fujairah",
    subtitle: "East Coast dining. Beach restaurants. Resort F&B. Fujairah food, beautifully captured.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Fujairah's food scene is defined by its coastline — seafood restaurants, beach resort dining, and the East Coast's tradition of fresh catch from the Indian Ocean. The emirate's F&B market spans luxury resort restaurants at Le Méridien and other Al Aqah properties through to local seafood favourites serving the emirate's community and day visitors from Dubai and Sharjah.",
      "Backyard Studio Official produces food photography for Fujairah's restaurant market — resort hotel F&B, seafood specialists, delivery platform operators, and East Coast dining establishments that need professional visual content to attract the emirate's tourism visitors and local community.",
    ],
    highlights: [
      { heading: "Seafood & East Coast Cuisine", body: "Photography for Fujairah's seafood restaurants and East Coast cuisine specialists — fresh catch, traditional preparations, and the coastal dining context that gives Fujairah food photography its distinctive character." },
      { heading: "Resort Hotel F&B", body: "Food photography for Al Aqah beach resort restaurants meeting the visual standards of luxury hospitality brands." },
      { heading: "Beach Dining Context", body: "Food photography incorporating the East Coast beach setting — contextual shots where the Indian Ocean and mountain backdrop become part of the composition." },
      { heading: "Social Media & Delivery Content", body: "Instagram and TikTok food content for Fujairah restaurants, plus delivery platform photography for Talabat and Deliveroo listings." },
    ],
    pricing: [
      { pkg: "Menu Shoot (20 dishes)", detail: "3 hrs / styled / all formats", price: "From AED 1,800" },
      { pkg: "Full Menu (50 dishes)", detail: "6 hrs / food + context / digital delivery", price: "From AED 3,200" },
      { pkg: "Social Content Package", detail: "Food + Reels + Stories / monthly", price: "From AED 2,500 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + brand film", price: "From AED 6,500" },
    ],
    faqs: [
      { q: "Do you photograph seafood restaurants in Fujairah?", a: "Yes. Fujairah's seafood and East Coast cuisine restaurants are a key part of our food photography market in the emirate. We capture both the food and the coastal dining context that makes these restaurants distinctive." },
      { q: "How much does food photography cost in Fujairah?", a: "Food photography in Fujairah starts from AED 1,800 for a 20-dish menu shoot. Full menu shoots from AED 3,200. Social content packages from AED 2,500 per month." },
      { q: "Do you include restaurant interior photography alongside food photography in Fujairah?", a: "Yes. Most Fujairah food photography sessions combine dish photography with interior ambience and setting shots — the East Coast context is often as compelling as the food itself for social media." },
      { q: "Can you produce food photography during service hours at Fujairah restaurants?", a: "Yes. We work around your kitchen and service schedule. Early morning or late afternoon shoots before the evening service are the most productive windows, but we adapt to your operational timing." },
    ],
  },

  "fujairah/product-photography": {
    title: "Product Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Fujairah — e-commerce, Fujairah Free Zone businesses, Amazon UAE, Noon, brand campaigns. On-location and studio. From AED 1,000.",
    h1: "Product Photography in Fujairah",
    subtitle: "E-commerce. Free Zone businesses. Brand campaigns. Fujairah products, professionally presented.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Fujairah's product photography market is served by its free zone business community and the emirate's trading companies, many of whom sell through UAE domestic e-commerce platforms while also serving export markets through the Port of Fujairah.",
      "Backyard Studio Official produces product photography for Fujairah-based businesses — e-commerce photography meeting Amazon UAE and Noon requirements, B2B catalogue content for trading and export-oriented businesses, and lifestyle imagery for brands with direct-to-consumer ambitions.",
    ],
    highlights: [
      { heading: "E-Commerce Marketplace Ready", body: "Amazon UAE and Noon compliant product photography for Fujairah businesses selling through UAE domestic platforms — delivered upload-ready." },
      { heading: "East Coast Lifestyle Photography", body: "Products photographed in Fujairah's coastal and natural settings — for brands whose lifestyle story aligns with the emirate's outdoor and adventure character." },
      { heading: "On-Location Shoots in Fujairah", body: "For businesses with large product ranges or premises-based manufacturing, we bring studio equipment to your Fujairah location." },
      { heading: "Export-Facing Catalogue Content", body: "B2B catalogue photography for Fujairah Free Zone businesses selling to international markets through the port — product documentation that travels as effectively as the goods themselves." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles / 3-day delivery", price: "From AED 1,000" },
      { pkg: "Standard (30 SKUs)", detail: "White bg + lifestyle / 4 angles", price: "From AED 2,500" },
      { pkg: "On-Location Shoot", detail: "At your Fujairah premises / full day", price: "From AED 4,500" },
      { pkg: "Catalogue (50+ SKUs)", detail: "Custom quote / B2B spec", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce product photography for Fujairah Free Zone businesses?", a: "Yes. We produce e-commerce and B2B catalogue product photography for Fujairah Free Zone companies, with delivery formats suitable for both UAE domestic platforms and international export marketing." },
      { q: "Can you shoot at our Fujairah premises?", a: "Yes. For on-location shoots at Fujairah businesses or warehouses, we bring portable studio equipment and handle all photography at your premises. Travel to Fujairah is included in the on-location rate." },
      { q: "How much does product photography cost in Fujairah?", a: "Product photography in Fujairah starts from AED 1,000 for 10 SKUs. On-location shoots at Fujairah premises from AED 4,500 including travel." },
      { q: "How quickly do you deliver product photos from Fujairah shoots?", a: "Standard delivery is 3 business days from the shoot. Rush 48-hour delivery available for priority launches." },
    ],
  },

  "fujairah/personal-branding-photography": {
    title: "Personal Branding Photography in Fujairah 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Fujairah — professionals, executives, entrepreneurs, tourism personalities. East Coast beach, Hajar Mountains, resort settings. From AED 1,400.",
    h1: "Personal Branding Photography in Fujairah",
    subtitle: "East Coast professionals. Resort executives. Entrepreneurs. Your brand on the Indian Ocean.",
    category: "PERSONAL BRANDING",
    intro: [
      "Fujairah's East Coast landscape gives professionals here access to personal branding photography locations that are genuinely unique in the UAE — Indian Ocean horizons, Hajar Mountain backdrops, ancient fortifications, and coastal outdoor settings that produce imagery with a character unavailable in Dubai or Abu Dhabi.",
      "Backyard Studio Official produces personal branding photography for Fujairah professionals — hospitality executives at East Coast resorts, government and port sector leaders, entrepreneurs and business owners in the free zone community, and individuals whose personal brand is tied to the emirate's outdoor and coastal lifestyle.",
    ],
    highlights: [
      { heading: "East Coast Beach Sessions", body: "Personal branding photography on Fujairah's Indian Ocean coastline — a setting that communicates adventure, freedom, and distinctiveness while maintaining professional gravity." },
      { heading: "Hajar Mountain Landscape", body: "Brand photography incorporating the Hajar mountain backdrop — for professionals whose identity aligns with resilience, exploration, or natural leadership." },
      { heading: "Resort & Hotel Executive Sessions", body: "Professional headshots and personal brand photography for hospitality executives at Fujairah's East Coast properties." },
      { heading: "Full Brand Days", body: "Multi-location brand days covering Fujairah's diverse landscape — beach, mountains, and resort settings in a single day's photography." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,400" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / beach + resort / 50 images", price: "From AED 2,800" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / coast + mountain / 100 images", price: "From AED 5,500" },
      { pkg: "East Coast Brand Session", detail: "Beach + Hajar Mountains / 4 hrs", price: "From AED 3,500" },
    ],
    faqs: [
      { q: "Can you produce personal branding photography on Fujairah's East Coast?", a: "Yes. Fujairah's East Coast beach and mountain settings are among the most distinctive personal branding photography locations in the UAE. We plan sessions for golden hour or early morning to maximize the East Coast light." },
      { q: "How much does personal branding photography cost in Fujairah?", a: "Personal branding sessions in Fujairah start from AED 1,400 for executive headshots. Full sessions from AED 2,800. East Coast location-specific sessions from AED 3,500." },
      { q: "I'm a resort executive in Fujairah — what locations work for my brand photography?", a: "For resort and hospitality executives, sessions incorporating your property — beach frontage, resort architecture, F&B settings — are typically the most powerful. We also offer East Coast landscape sessions and Hajar Mountain settings depending on your brand narrative." },
      { q: "Do you travel from Dubai to shoot personal branding in Fujairah?", a: "Yes. Fujairah personal branding sessions include travel from our Dubai base. We combine Fujairah bookings where possible to keep rates competitive." },
    ],
  },


  // ── UMM AL QUWAIN — Sprint 25 commercial services ─────────────────────────

  "umm-al-quwain/wedding-photography": {
    title: "Wedding Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional wedding photography in Umm Al Quwain — UAQ lagoon, mangrove settings, Emirati traditions, intimate ceremonies, all-female crews available. From AED 2,500.",
    h1: "Wedding Photography in Umm Al Quwain",
    subtitle: "UAQ lagoon. Mangrove backdrops. Intimate settings. Umm Al Quwain weddings, beautifully documented.",
    category: "WEDDING PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain is the UAE's smallest emirate, and its weddings reflect the community's intimacy and the emirate's commitment to tradition. The UAQ lagoon, mangrove edges, and the old town's historic character provide wedding photography settings with a quiet authenticity that larger, more developed emirates cannot replicate.",
      "Backyard Studio Official photographs weddings throughout Umm Al Quwain — traditional Emirati ceremonies, South Asian community weddings, and intimate celebrations that choose UAQ for its character rather than its scale. We provide all-female photography crews for ladies-only ceremonies as standard.",
    ],
    highlights: [
      { heading: "UAQ Lagoon & Creek Settings", body: "Umm Al Quwain's defining geographical feature — the lagoon and creek offer wedding portrait settings with water, mangroves, and the quiet of an emirate that hasn't been overtaken by development." },
      { heading: "Traditional Emirati Weddings", body: "UAQ maintains strong Emirati wedding traditions. We photograph these ceremonies with cultural sensitivity and protocol awareness, and always have all-female crew options available." },
      { heading: "Intimate Community Weddings", body: "UAQ's tight-knit community means weddings here are often deeply personal family events — we approach these with a documentary warmth that formal, production-heavy photography would undermine." },
      { heading: "Old Town & Heritage Settings", body: "The old town of Umm Al Quwain, with its fort and traditional architecture, provides a distinctively Emirati backdrop for pre-ceremony portrait sessions." },
    ],
    pricing: [
      { pkg: "Nikah / Ceremony Only", detail: "1 photographer / 4 hrs / digital gallery", price: "From AED 2,500" },
      { pkg: "Full Wedding Day", detail: "2 photographers / 10 hrs / full gallery", price: "From AED 5,500" },
      { pkg: "Photo + Video", detail: "2 photographers + 1 videographer / full day", price: "From AED 9,500" },
      { pkg: "Multi-Day Package", detail: "Multi-day traditional ceremony", price: "From AED 14,000" },
    ],
    faqs: [
      { q: "Do you photograph weddings in Umm Al Quwain?", a: "Yes. We cover weddings throughout UAQ — traditional Emirati ceremonies, community weddings, and intimate celebrations at lagoon-side and heritage settings across the emirate. Distance from Dubai is not an obstacle; UAQ is approximately 45–60 minutes by highway." },
      { q: "What wedding locations are available in Umm Al Quwain?", a: "UAQ's best wedding photography locations include the lagoon and creek waterfront, the old town fort setting, mangrove-edge locations, and private villas within the emirate. We scout and advise on the right setting during consultation." },
      { q: "How much does wedding photography cost in Umm Al Quwain?", a: "Wedding photography in UAQ starts from AED 2,500 for ceremony-only coverage and AED 5,500 for a full wedding day. Pricing is comparable to Ajman." },
      { q: "Do you provide all-female wedding photography crews in UAQ?", a: "Yes. For ladies-only ceremonies and gender-separated Emirati weddings in Umm Al Quwain, we provide fully all-female photography and videography crews." },
    ],
  },

  "umm-al-quwain/corporate-video": {
    title: "Corporate Video Production in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Corporate video production in Umm Al Quwain — UAQ Free Trade Zone, business profiles, government content, brand films. Bilingual Arabic-English. From AED 5,500.",
    h1: "Corporate Video Production in Umm Al Quwain",
    subtitle: "UAQ Free Trade Zone. Government. Business profiles. UAQ on camera.",
    category: "CORPORATE VIDEO",
    intro: [
      "Umm Al Quwain's corporate economy centres on UAQ Free Trade Zone — one of the UAE's more affordable licensing destinations, with a growing community of small and medium businesses. The emirate's government entities, its fishing and marine sector, and its developing commercial district generate corporate video requirements across institutional and commercial formats.",
      "Backyard Studio Official produces corporate video for UAQ's business community — company profiles for free zone businesses, institutional content for government entities, and brand films for commercial enterprises operating in the emirate.",
    ],
    highlights: [
      { heading: "UAQ Free Trade Zone Profiles", body: "Professional company profile videos for UAQ FTZ-based businesses — investor relations content, partner introduction films, and trade presentation material." },
      { heading: "Government & Institutional", body: "Institutional video for UAQ government departments and official bodies, produced to Arabic-language standards with bilingual delivery." },
      { heading: "Marine & Fishing Sector", body: "Corporate video for UAQ's fishing industry, marine businesses, and related sectors — production that captures the emirate's maritime character and operational expertise." },
      { heading: "SME Brand Films", body: "Cost-effective brand film packages for UAQ's small and medium business community — professional quality at a price point suited to growing businesses." },
    ],
    pricing: [
      { pkg: "Corporate Profile", detail: "1 filming day / 3–5 min film / 2 revisions", price: "From AED 5,500" },
      { pkg: "Brand Film", detail: "Multi-day / 5–8 min / Arabic + English", price: "From AED 11,000" },
      { pkg: "Social Media Pack", detail: "Half day / 3 x 60-sec social videos", price: "From AED 3,500" },
      { pkg: "Monthly Retainer", detail: "2 filming days/month / mixed formats", price: "From AED 6,500 / mo" },
    ],
    faqs: [
      { q: "Do you produce corporate video for UAQ Free Trade Zone companies?", a: "Yes. UAQ FTZ businesses — particularly those in trading, manufacturing, and services — regularly need professional company profile videos. We produce company introductions, brand films, and product demonstrations for UAQ free zone-based businesses." },
      { q: "How much does corporate video production cost in Umm Al Quwain?", a: "Corporate video in UAQ starts from AED 5,500 for a single-day shoot. Social media packs from AED 3,500. Rates include travel from Dubai, approximately 45 minutes." },
      { q: "Can you produce Arabic-English bilingual corporate video in UAQ?", a: "Yes. Bilingual production is standard for all UAQ corporate video work, with Arabic and English narrated or subtitled versions delivered simultaneously." },
      { q: "How do you manage logistics for filming in Umm Al Quwain?", a: "UAQ is well within standard UAE travel distance — approximately 45 minutes from Dubai on the E11 highway. We include travel in our standard rates and manage any UAQ municipal filming coordination required." },
    ],
  },

  "umm-al-quwain/event-photography": {
    title: "Event Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional event photography in Umm Al Quwain — government events, UAQ FTZ, Dreamland Aqua Park, community events, corporate gatherings. From AED 2,500.",
    h1: "Event Photography in Umm Al Quwain",
    subtitle: "Government events. UAQ FTZ. Community celebrations. UAQ events, professionally documented.",
    category: "EVENT PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's event market is modest in scale but genuine in character — government ceremonies, UAQ Free Trade Zone business events, community celebrations, and activations at Dreamland Aqua Park make up the emirate's event photography landscape. The intimacy of UAQ means events here have a warmth and authenticity that larger emirates' event photography often lacks.",
      "Backyard Studio Official covers events throughout Umm Al Quwain — official government ceremonies, business conferences, community events, and outdoor venue activations — with the same professionalism we bring to events in the UAE's major cities.",
    ],
    highlights: [
      { heading: "Government & Official Ceremonies", body: "Event coverage for Umm Al Quwain government entities — official ceremonies, national day events, and institutional gatherings with appropriate documentation standards." },
      { heading: "UAQ Free Trade Zone Events", body: "Business networking events, investor road shows, and corporate gatherings at UAQ FTZ — professional event photography for the business community." },
      { heading: "Outdoor & Community Events", body: "Community events, outdoor activations, and family gatherings in UAQ's parks and public spaces — documentary-style event photography that captures the emirate's community character." },
      { heading: "Same-Day Social Delivery", body: "For events requiring immediate social media coverage, we deliver 20–30 edited images within 2–3 hours of the event ending." },
    ],
    pricing: [
      { pkg: "Half Day (4 hrs)", detail: "1 photographer / 50 edited images", price: "From AED 2,500" },
      { pkg: "Full Day (8 hrs)", detail: "1 photographer / 100 edited images", price: "From AED 4,000" },
      { pkg: "Event Package", detail: "2 photographers / same-day delivery", price: "From AED 6,000 / day" },
      { pkg: "Photo + Video", detail: "Photographer + videographer / highlight reel", price: "From AED 5,500" },
    ],
    faqs: [
      { q: "Do you cover events in Umm Al Quwain?", a: "Yes. We cover events throughout UAQ — government ceremonies, business events, community gatherings, and corporate activations. UAQ's proximity to Dubai (approximately 45 minutes) means travel is never an issue for our teams." },
      { q: "How much does event photography cost in Umm Al Quwain?", a: "Event photography in UAQ starts from AED 2,500 for a 4-hour half-day session. Full-day coverage from AED 4,000. Pricing is competitive with Ajman and Sharjah." },
      { q: "Can you photograph events at Dreamland Aqua Park in UAQ?", a: "Yes. Dreamland Aqua Park is a popular UAQ outdoor event venue. We cover outdoor activations, brand events, and community events at Dreamland and other UAQ outdoor locations." },
      { q: "Do you provide same-day event photo delivery in UAQ?", a: "Yes. Same-day social delivery of 20–30 edited images within 2–3 hours of the event close is available for UAQ events — the same service we offer across all UAE locations." },
    ],
  },

  "umm-al-quwain/real-estate-photography": {
    title: "Real Estate Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional real estate photography in Umm Al Quwain — waterfront villas, lagoon properties, UAQ developments, aerial drone, investment units. From AED 800.",
    h1: "Real Estate Photography in Umm Al Quwain",
    subtitle: "UAQ lagoon. Waterfront villas. Investment properties. Professionally photographed.",
    category: "REAL ESTATE PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's real estate market is attracting growing investor attention, driven by the emirate's affordability, its lagoon waterfront properties, and infrastructure developments that are gradually connecting UAQ more firmly to the greater UAE property market. Properties here compete on value and a distinctive natural character — the lagoon, mangroves, and the unhurried pace of the emirate.",
      "Backyard Studio Official produces real estate photography for UAQ properties — lagoon-facing villas, investment units, residential developments, and properties for agencies managing portfolio listings in the emirate.",
    ],
    highlights: [
      { heading: "Lagoon & Waterfront Property", body: "UAQ's defining real estate asset — lagoon-facing properties and waterfront villas photographed to maximise the water and natural landscape context." },
      { heading: "Mangrove & Natural Setting", body: "Properties backing on UAQ's mangrove ecosystem photographed to show the natural environment that is an increasingly valuable differentiator in UAE property." },
      { heading: "GCAA-Licensed Aerial", body: "Licensed aerial drone photography of UAQ's distinctive lagoon geography — overhead shots that reveal the emirate's water-and-land character instantly." },
      { heading: "Investment Unit Photography", body: "Affordable, consistent property photography for UAQ's investment apartment and villa market — quality imagery that performs on Bayut and Property Finder." },
    ],
    pricing: [
      { pkg: "Unit Photography", detail: "Up to 3 units / interior & exterior / 25 images", price: "From AED 800" },
      { pkg: "Villa / Lagoon Property", detail: "Full day / interior + exterior + context", price: "From AED 2,500" },
      { pkg: "Aerial + Ground Package", detail: "Drone + interior / licensed GCAA pilot", price: "From AED 3,500" },
      { pkg: "Development Campaign", detail: "Multi-unit / photo + video / aerial", price: "From AED 9,000" },
    ],
    faqs: [
      { q: "Do you photograph lagoon and waterfront properties in UAQ?", a: "Yes. UAQ's lagoon-facing properties are our most common real estate assignment in the emirate — interior photography, exterior settings, and aerial drone documentation that captures the lagoon context central to these properties' value." },
      { q: "Can you produce aerial photography over UAQ's lagoon?", a: "Yes, with GCAA permits and local coordination that we manage as standard. UAQ's lagoon geography from altitude is one of the most distinctive real estate aerial compositions in the UAE." },
      { q: "How much does real estate photography cost in Umm Al Quwain?", a: "Real estate photography in UAQ starts from AED 800 for unit photography. Lagoon villa packages from AED 2,500. Aerial plus ground packages from AED 3,500." },
      { q: "Do you work with UAQ property agencies?", a: "Yes. We produce listing photography for UAQ property agencies at a pace and price suited to active residential portfolios — consistent quality and 2-day turnaround as standard." },
    ],
  },

  "umm-al-quwain/drone-videography": {
    title: "Drone Videography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "GCAA-licensed drone videography in Umm Al Quwain — UAQ lagoon, mangroves, coastline, real estate, 4K aerial photography. Licensed pilot. From AED 1,800.",
    h1: "Drone Videography in Umm Al Quwain",
    subtitle: "GCAA licensed. UAQ lagoon. Mangroves. The UAE's most tranquil aerial landscape.",
    category: "DRONE VIDEOGRAPHY",
    intro: [
      "Umm Al Quwain from above reveals something rare in the UAE — an emirate largely unchanged from how the Gulf coast looked before the development era. The lagoon's branching channels, the mangrove islands, the fishing village patterns, and the calm of an emirate without a major city horizon make drone footage here quietly extraordinary.",
      "Backyard Studio Official holds GCAA commercial drone licences and manages all UAQ authority permissions as standard. We produce aerial content for UAQ's real estate sector, government communications, tourism content, and commercial clients who want the emirate's distinctive aerial character in 4K with cinema colour grading.",
    ],
    highlights: [
      { heading: "UAQ Lagoon & Channel Aerials", body: "The branching lagoon channels and mangrove islands from altitude — a natural aerial geometry that produces footage unlike any other UAE emirate." },
      { heading: "Mangrove Ecosystem", body: "UAQ has some of the UAE's best-preserved mangrove areas. Aerial footage over the mangroves is ecologically compelling and visually beautiful — rare in commercial UAE drone work." },
      { heading: "Coastline & Creek Aerials", body: "The old town creek, the Gulf coastline, and the emirate's traditional fishing port from altitude — authentic Gulf coast imagery becoming increasingly scarce in the UAE." },
      { heading: "Real Estate & Tourism Aerial", body: "Licensed aerial documentation for UAQ properties, lagoon developments, and tourism destination content." },
    ],
    pricing: [
      { pkg: "Drone Session (2 hrs)", detail: "GCAA pilot / 4K footage / basic edit", price: "From AED 1,800" },
      { pkg: "Half Day Aerial", detail: "4 hrs / lagoon + coast / colour-graded", price: "From AED 3,000" },
      { pkg: "Drone + Ground Package", detail: "Aerial + ground camera team / full edit", price: "From AED 4,500" },
      { pkg: "Real Estate Aerial", detail: "Lagoon properties / licensed GCAA", price: "From AED 2,500" },
    ],
    faqs: [
      { q: "Can you fly drones over UAQ's lagoon and mangroves?", a: "Yes, with GCAA permits and UAQ authority coordination that we manage as standard. UAQ's lagoon and mangrove areas are accessible for commercial drone operations with appropriate clearance, which we handle for every shoot." },
      { q: "Is Umm Al Quwain distinctive for drone videography?", a: "Very much so. UAQ's preserved lagoon system, mangrove channels, and relatively undeveloped coastline create aerial footage with a natural character that is increasingly rare in the UAE. For clients wanting authentic Gulf coast aerial imagery, UAQ is often the answer." },
      { q: "How much does drone videography cost in UAQ?", a: "Drone sessions in UAQ start from AED 1,800. Half-day lagoon and coast packages from AED 3,000. Combined drone and ground packages from AED 4,500." },
      { q: "Do you produce drone content for UAQ tourism and real estate?", a: "Yes. We produce aerial documentation for UAQ lagoon properties and destination tourism content — the emirate's unique aerial character is a significant asset for both markets." },
    ],
  },

  "umm-al-quwain/food-photography": {
    title: "Food Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional food photography in Umm Al Quwain — restaurants, seafood, local cuisine, delivery platforms, social media content. From AED 1,400.",
    h1: "Food Photography in Umm Al Quwain",
    subtitle: "UAQ restaurants. Seafood. Local cuisine. Delivery platforms. Your menu, professionally photographed.",
    category: "FOOD PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's restaurant scene is modest in scale but genuine in offering — local seafood, traditional Emirati cuisine, South Asian community restaurants, and a developing café culture that is growing with the emirate's increasing connectivity to the wider Northern Emirates market.",
      "Backyard Studio Official produces food photography for UAQ's restaurant market — menu photography for delivery platform listings, social media content for emerging café and restaurant brands, and launch photography for new F&B businesses entering the emirate.",
    ],
    highlights: [
      { heading: "Seafood & Local Cuisine", body: "UAQ's seafood and local Emirati cuisine photographed to showcase the freshness and authenticity that defines the emirate's food offering." },
      { heading: "Delivery Platform Photography", body: "Talabat and Deliveroo-formatted food photography for UAQ restaurants competing on the delivery platforms that drive the Northern Emirates' F&B revenue." },
      { heading: "Social Media Content", body: "Instagram and TikTok food content for UAQ restaurants and cafés — Reels, vertical video, and story formats produced alongside still photography." },
      { heading: "Restaurant Launch Packages", body: "Full launch photography packages for new UAQ F&B openings — menu photography, interior shots, and social media content all captured in a single day." },
    ],
    pricing: [
      { pkg: "Menu Shoot (15 dishes)", detail: "2.5 hrs / styled / all formats", price: "From AED 1,400" },
      { pkg: "Full Menu (40 dishes)", detail: "5 hrs / food + context / digital delivery", price: "From AED 2,500" },
      { pkg: "Social Content Package", detail: "Food + Reels / monthly", price: "From AED 1,800 / mo" },
      { pkg: "Restaurant Launch", detail: "Full day / menu + interior + social content", price: "From AED 4,500" },
    ],
    faqs: [
      { q: "Do you photograph restaurants and menus in Umm Al Quwain?", a: "Yes. We produce menu and food photography for restaurants and cafés in UAQ, including delivery platform-formatted content for Talabat and Deliveroo and social media content for Instagram and TikTok." },
      { q: "How much does food photography cost in Umm Al Quwain?", a: "Food photography in UAQ starts from AED 1,400 for a 15-dish menu shoot. Full menu shoots from AED 2,500. Monthly social content packages from AED 1,800." },
      { q: "Can you photograph seafood at UAQ restaurants?", a: "Yes. UAQ's seafood restaurants and traditional local cuisine are among the most authentic F&B subjects in the Northern Emirates. We photograph seafood dishes in a way that captures freshness and the coastal character of the emirate." },
      { q: "How quickly do you deliver food photography in UAQ?", a: "Standard delivery is 2–3 business days from the shoot date. Rush 24-hour delivery available for time-sensitive restaurant launches." },
    ],
  },

  "umm-al-quwain/product-photography": {
    title: "Product Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Professional product photography in Umm Al Quwain — e-commerce, UAQ Free Trade Zone businesses, Amazon UAE, Noon, brand campaigns. On-location and studio. From AED 750.",
    h1: "Product Photography in Umm Al Quwain",
    subtitle: "E-commerce. UAQ FTZ businesses. Brand campaigns. UAQ products, professionally photographed.",
    category: "PRODUCT PHOTOGRAPHY",
    intro: [
      "Umm Al Quwain's business community includes a number of product-based SMEs and trading businesses operating through UAQ Free Trade Zone. Many of these businesses sell through UAE e-commerce platforms and need product photography that works for both domestic marketplace listings and export-facing catalogue content.",
      "Backyard Studio Official produces product photography for UAQ-based businesses at competitive rates — e-commerce compliant photography for Amazon UAE and Noon, lifestyle imagery for social media campaigns, and B2B catalogue content for businesses selling to regional and international buyers.",
    ],
    highlights: [
      { heading: "Amazon UAE & Noon Ready", body: "White-background product photography meeting marketplace technical requirements — delivered upload-ready for direct platform submission." },
      { heading: "UAQ FTZ Business Packages", body: "Cost-effective product photography packages for small and medium businesses in UAQ FTZ — professional quality without enterprise pricing." },
      { heading: "On-Location UAQ Shoots", body: "We bring studio equipment to your UAQ premises for large or heavy products — eliminating shipping costs and disruption." },
      { heading: "Natural Setting Lifestyle", body: "Products photographed in UAQ's natural lagoon and coastal settings for brands whose lifestyle story benefits from the emirate's distinctive character." },
    ],
    pricing: [
      { pkg: "Starter (10 SKUs)", detail: "White bg / 3 angles / 2-day delivery", price: "From AED 750" },
      { pkg: "Standard (25 SKUs)", detail: "White bg + lifestyle / 3 angles", price: "From AED 1,800" },
      { pkg: "On-Location UAQ Shoot", detail: "At your premises / portable studio / full day", price: "From AED 3,800" },
      { pkg: "E-Commerce Catalogue", detail: "50+ SKUs / custom quote / B2B spec", price: "On request" },
    ],
    faqs: [
      { q: "Do you produce product photography for UAQ Free Trade Zone businesses?", a: "Yes. We produce e-commerce and catalogue product photography for UAQ FTZ businesses — white background shots, lifestyle imagery, and B2B content at rates that work for SME budgets." },
      { q: "How much does product photography cost in UAQ?", a: "Product photography in UAQ starts from AED 750 for 10 SKUs. Standard lifestyle packages from AED 1,800. On-location UAQ shoots from AED 3,800." },
      { q: "Can you photograph products at our UAQ premises?", a: "Yes. We bring a portable studio setup to your UAQ location — ideal for large, heavy, or high-volume product ranges where shipping to our Dubai studio isn't practical." },
      { q: "How quickly do you turn around product photography from UAQ?", a: "Standard delivery is 2–3 business days. Rush 24-hour delivery available for time-sensitive requirements." },
    ],
  },

  "umm-al-quwain/personal-branding-photography": {
    title: "Personal Branding Photography in Umm Al Quwain 2026 | Backyard Studio Official",
    metaDescription: "Personal branding photography in Umm Al Quwain — professionals, entrepreneurs, executives, coaches. UAQ lagoon, mangrove settings, portrait sessions. From AED 1,100.",
    h1: "Personal Branding Photography in Umm Al Quwain",
    subtitle: "UAQ professionals. Entrepreneurs. The lagoon. Your brand, authentically photographed.",
    category: "PERSONAL BRANDING",
    intro: [
      "Umm Al Quwain's lagoon setting and natural environment offer personal branding photography that is genuinely different from any urban UAE location. For professionals whose brand story centres on authenticity, nature, or a distinctively non-corporate identity, UAQ's mangroves, lagoon channels, and traditional townscape provide a backdrop that communicates exactly that.",
      "Backyard Studio Official produces personal branding photography for UAQ professionals — business owners, government professionals, coaches, and individuals who want brand imagery that stands out rather than fitting into the generic corporate portrait landscape.",
    ],
    highlights: [
      { heading: "UAQ Lagoon Sessions", body: "Personal branding photography on the lagoon — water, mangrove channels, and the quiet of one of the UAE's most distinctive natural settings as your professional backdrop." },
      { heading: "Old Town & Heritage", body: "UAQ's fort and traditional townscape for professionals wanting an authentically Emirati heritage context in their brand photography." },
      { heading: "Natural & Outdoor Brand Stories", body: "For professionals in wellness, coaching, sustainability, or creative industries — UAQ's natural setting communicates authenticity in a way no studio or urban backdrop can." },
      { heading: "Executive Headshots", body: "Professional headshots and LinkedIn portraits for UAQ business professionals — clean, competent, and efficiently delivered." },
    ],
    pricing: [
      { pkg: "Executive Headshots", detail: "1.5 hrs / 1 location / 20 final images", price: "From AED 1,100" },
      { pkg: "Personal Brand Session", detail: "3 hrs / 2 looks / lagoon + heritage / 50 images", price: "From AED 2,200" },
      { pkg: "Full Brand Day", detail: "6 hrs / 4 looks / 3 UAQ locations / 100 images", price: "From AED 4,200" },
      { pkg: "Lagoon Brand Session", detail: "2 hrs / lagoon + mangrove / 30 images", price: "From AED 1,800" },
    ],
    faqs: [
      { q: "Can I have my personal branding photography done at the UAQ lagoon?", a: "Yes. The UAQ lagoon is one of our most distinctive personal branding locations — the water, channels, and mangroves create brand photography that is genuinely different from anything available in Dubai or the other larger emirates." },
      { q: "How much does personal branding photography cost in UAQ?", a: "Personal branding sessions in UAQ start from AED 1,100 for executive headshots. Full personal brand sessions from AED 2,200. Lagoon-specific sessions from AED 1,800." },
      { q: "Who is UAQ personal branding photography best suited for?", a: "UAQ is particularly suited to professionals in wellness, coaching, sustainability, creative industries, or any brand that benefits from natural, authentic setting over corporate or urban imagery. The lagoon creates a genuinely different visual statement." },
      { q: "How long does it take to travel from Dubai to UAQ for a photography session?", a: "UAQ is approximately 45–60 minutes from Dubai on the E11 highway. We factor travel time into session scheduling and typically pair UAQ sessions with nearby emirate bookings for efficiency." },
    ],
  },

};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(PAGES).map((key) => {
    const [city, service] = key.split("/");
    return { city, service };
  });
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { city: string; service: string };
}): Promise<Metadata> {
  const key = `${params.city}/${params.service}`;
  const data = PAGES[key];
  if (!data) {
    return {
      title: "Backyard Studio Official — UAE Production Company",
      description: "Professional video & photography production across the UAE.",
    };
  }
  const pageUrl = `https://www.backyardstudioofficial.com/locations/${params.city}/${params.service}`;
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: data.title,
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

  const localBizSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        name: "Backyard Studio Official",
        image: "https://www.backyardstudioofficial.com/og-image.jpg",
        url: `https://www.backyardstudioofficial.com/locations/${params.city}/${params.service}`,
        telephone: "+971585882685",
        email: "hello@backyardstudioofficial.com",
        serviceType: data.category,
        areaServed: {
          "@type": "City",
          name: cityLabel,
          addressRegion: "UAE",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.2048,
          longitude: 55.2708,
        },
        priceRange: data.pricing[0]?.price ?? "AED 1,000 – AED 50,000",
        description: data.metaDescription,
        sameAs: [
          "https://www.instagram.com/backyardstudioofficial",
          "https://www.facebook.com/backyardstudioofficial",
          "https://www.linkedin.com/company/backyardstudioofficial",
        ],
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

  if (!data) {
    return (
      <div className="pt-24 section-pad text-center">
        <h1 className="font-display text-4xl text-white mb-4">Coming Soon</h1>
        <p className="text-[#a0a0a0]">This page is under construction.</p>
        <Link href={`/locations/${params.city}`} className="btn-gold mt-8 inline-block">
          ← Back to {cityLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {localBizSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />}

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
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((c) => (
                <Link key={c} href={`/locations/${c.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-between py-1.5 text-[#a0a0a0] text-sm hover:text-[#e8c547] transition-colors border-b border-[#1a1a1a] last:border-0">
                  <span>{c}</span><span className="text-[#555] text-xs">→</span>
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
