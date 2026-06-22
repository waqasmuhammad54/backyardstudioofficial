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
