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
        "@type": "LocalBusiness",
        name: "Backyard Studio Official",
        image: "https://www.backyardstudioofficial.com/og-image.jpg",
        url: "https://www.backyardstudioofficial.com",
        telephone: "+971585882685",
        areaServed: cityLabel,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        priceRange: "AED 1,000 – AED 50,000",
        description: data.metaDescription,
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
