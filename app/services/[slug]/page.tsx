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
  "social-media-shoots": {
    hero: "/images/creative/creative-05.webp",
    gallery: ["/images/creative/creative-01.webp", "/images/creative/creative-13.webp", "/images/creative/creative-24.webp", "/images/creative/creative-04.webp"],
  },
  "automotive": {
    hero: "/images/events/event-02.webp",
    gallery: ["/images/creative/creative-04.webp", "/images/events/event-03.webp", "/images/creative/creative-10.webp"],
  },
  "real-estate": {
    hero: "/images/events/event-05.webp",
    gallery: ["/images/events/event-01.webp", "/images/creative/creative-13.webp", "/images/wedding/wedding-01.webp"],
  },
  "corporate-videography": {
    hero: "/images/events/event-01.webp",
    gallery: ["/images/events/event-05.webp", "/images/events/event-03.webp", "/images/events/event-06.webp"],
  },
  "podcast": {
    hero: "/images/events/event-04.webp",
    gallery: ["/images/events/event-02.webp", "/images/creative/creative-01.webp"],
  },
  "youtube-content": {
    hero: "/images/creative/creative-01.webp",
    gallery: ["/images/creative/creative-04.webp", "/images/creative/creative-05.webp", "/images/creative/creative-13.webp"],
  },
  "event-videography": {
    hero: "/images/events/event-01.webp",
    gallery: ["/images/events/event-02.webp", "/images/events/event-03.webp", "/images/events/event-05.webp", "/images/events/event-06.webp"],
  },
  "food": {
    hero: "/images/products/product-03.webp",
    gallery: ["/images/products/product-01.webp", "/images/creative/creative-13.webp", "/images/creative/creative-04.webp"],
  },
  "product-shoots": {
    hero: "/images/products/product-01.webp",
    gallery: ["/images/products/product-03.webp", "/images/creative/creative-04.webp", "/images/creative/creative-10.webp"],
  },
  "fashion-shoots": {
    hero: "/images/creative/creative-13.webp",
    gallery: ["/images/creative/creative-24.webp", "/images/creative/creative-04.webp", "/images/creative/creative-10.webp", "/images/creative/creative-05.webp"],
  },
  "travel-lifestyle": {
    hero: "/images/wedding/wedding-01.webp",
    gallery: ["/images/wedding/wedding-02.webp", "/images/events/event-05.webp", "/images/creative/creative-05.webp"],
  },
  "tv-commercials": {
    hero: "/images/creative/creative-04.webp",
    gallery: ["/images/creative/creative-05.webp", "/images/events/event-02.webp", "/images/creative/creative-13.webp"],
  },
  "car-commercials": {
    hero: "/images/events/event-02.webp",
    gallery: ["/images/creative/creative-10.webp", "/images/events/event-03.webp"],
  },
  "corporate-brand-films": {
    hero: "/images/events/event-01.webp",
    gallery: ["/images/events/event-05.webp", "/images/events/event-06.webp", "/images/events/event-03.webp"],
  },
  "documentary": {
    hero: "/images/events/event-03.webp",
    gallery: ["/images/events/event-01.webp", "/images/creative/creative-01.webp", "/images/events/event-06.webp"],
  },
  "hotel-photography": {
    hero: "/images/wedding/wedding-16.webp",
    gallery: ["/images/wedding/wedding-01.webp", "/images/events/event-05.webp", "/images/creative/creative-05.webp"],
  },
  "reels-production": {
    hero: "/images/creative/creative-24.webp",
    gallery: ["/images/creative/creative-13.webp", "/images/creative/creative-04.webp", "/images/creative/creative-01.webp"],
  },
  "brand-events": {
    hero: "/images/events/event-06.webp",
    gallery: ["/images/events/event-01.webp", "/images/events/event-02.webp", "/images/events/event-05.webp"],
  },
  "pre-post-production": {
    hero: "/images/creative/creative-10.webp",
    gallery: ["/images/creative/creative-01.webp", "/images/events/event-03.webp"],
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
  "photo-shoots": {
    title: "Wedding & Photo Shoots — Dubai's Best Wedding Shoot Company",
    description: "Backyard Studio Official is Dubai's top wedding shoot company and photo shoot studio. Whether it's a grand UAE wedding, an intimate pre-wedding shoot at sunset over the Burj Khalifa, or an editorial lifestyle shoot for your brand — our cinematic photography team captures every frame with intention.\n\nWe cover all wedding styles across the UAE: Arabic weddings, Indian weddings, Western weddings, civil ceremonies and destination events. Our pre-wedding packages are some of Dubai's most requested, with iconic locations from Dubai Creek to Louvre Abu Dhabi. Every shoot is styled, lit, and directed by our award-winning creative team.",
    includes: ["Full wedding day coverage", "Pre-wedding shoot session", "Edited gallery of 300–600 images", "Cinematic drone aerial shots", "Online delivery gallery", "Print-ready high-resolution files", "Social media optimised selects", "Engagement & lifestyle sessions", "Same-day preview (10 selects)", "48-hour full delivery"],
    faqs: [
      { q: "How much does a wedding photo shoot cost in Dubai?", a: "Wedding photography packages at Backyard Studio Official start from AED 3,500 for a half-day coverage and go up to AED 25,000+ for full-day multi-photographer packages with drone, video and same-day highlight reel. We provide transparent pricing and a free consultation within 2 hours." },
      { q: "Do you do Indian wedding photography in Dubai?", a: "Yes. Backyard Studio Official has extensive experience shooting Indian weddings across Dubai — from mehndi nights and sangeets to grand reception galas. We understand the cultural nuances, traditional ceremonies, and the big moments that matter most to Indian families." },
      { q: "Can I book both photography and videography together?", a: "Absolutely. Most clients book our combined photography and videography packages, which are more cost-effective than booking separately. Our photo and video teams work in sync so nothing is ever missed." },
      { q: "What are the best locations for pre-wedding shoots in Dubai?", a: "Our most popular pre-wedding shoot locations include: Burj Khalifa/Downtown Dubai, Dubai Creek, Palm Jumeirah, Al Qudra desert lakes, Alserkal Avenue, Dubai Frame, JBR beach, and the historic Al Fahidi district. We handle location permits for all shoots." },
      { q: "How far in advance should I book my wedding shoot?", a: "We recommend booking at least 4–8 weeks in advance for weddings, and 2–4 weeks for pre-wedding shoots. Peak wedding season in UAE is October through March. Contact us via WhatsApp for availability and a same-day quote." },
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
  "reels": {
    title: "Instagram Reels & Short Film Production Dubai",
    description: "Backyard Studio Official is Dubai's leading Instagram Reels and short-form content production studio. We create vertical-first, algorithm-aware content engineered to stop the scroll, drive saves and shares, and convert viewers into customers — across Instagram, TikTok, YouTube Shorts and Snapchat Spotlight.\n\nEvery Reel we produce is built on three pillars: a hook that grabs in under 1.5 seconds, a visual language native to the platform, and a CTA that feels natural rather than forced. Our social media shoots are some of the most-requested services in our portfolio, trusted by UAE brands ranging from homegrown F&B labels to global luxury retailers.",
    includes: ["Pre-shoot creative brief & scripting", "Professional lighting & set dressing", "Talent direction & on-camera coaching", "Platform-native editing (vertical, fast-cut)", "Trending audio & caption strategy", "Colour grading optimised for mobile", "Reel + Stories + BTS cut-downs", "Up to 5 deliverables per shoot day"],
    faqs: [
      { q: "How many Reels can we shoot in a day?", a: "Typically 3 to 8 polished Reels per shoot day depending on locations, outfit changes, and complexity. We plan shoot days to maximise content output efficiently." },
      { q: "Do you handle the concept and scripting for Reels?", a: "Yes. Our social media team develops the concept, script, shooting list, and trending audio recommendations before every shoot. You simply show up, we handle the rest." },
      { q: "Which platforms do you produce for?", a: "We produce for Instagram Reels, TikTok, YouTube Shorts, and Snapchat Spotlight. All content is delivered in the correct specs and aspect ratios for each platform." },
      { q: "Can you do regular monthly content packages?", a: "Absolutely. Our monthly retainer packages are our most popular offering for UAE brands — we plan, shoot, and deliver a full month of Reels content in one scheduled shoot day." },
      { q: "What makes Backyard Studio's Reels different?", a: "We approach every Reel with a performance lens, not just aesthetics. Our content consistently achieves above-average organic reach because we understand what the Instagram and TikTok algorithms reward in the UAE market." },
    ],
  },
  "social-media-content": {
    title: "Social Media Content Creation Dubai — TikTok, Instagram & YouTube",
    description: "Backyard Studio Official is one of Dubai's top social media content creation companies. We produce full-spectrum social media shoots for Instagram, TikTok, YouTube, LinkedIn, and Snapchat — from single-product flat-lays to multi-location lifestyle campaigns that position your brand as a visual authority in your category.\n\nOur social media content packages are built around one principle: content that earns attention organically does not need a massive ad budget to perform. We work with UAE-based brands, international brands entering the UAE market, influencers, and public figures to build content ecosystems that grow audiences and drive measurable commercial results.\n\nWhether you need a TikTok content creator in Dubai for a one-off campaign, or a long-term social media production partner for monthly shoots, Backyard Studio Official delivers consistent, platform-native content at the speed social demands.",
    includes: ["Monthly content strategy & shoot planning", "Multi-platform shoot (Instagram, TikTok, YouTube)", "Professional studio or on-location shoots", "Lifestyle, product, and talking-head formats", "Editing, colour grading & captions", "Platform-specific sizing & export", "Hashtag & posting schedule recommendations", "Content calendar delivery"],
    faqs: [
      { q: "What types of social media content do you produce?", a: "We produce Instagram feed posts, Reels, Stories, TikTok videos, YouTube Shorts, YouTube long-form, LinkedIn video, product shots, lifestyle shoots, UGC-style content, and branded series. Basically anything your brand needs to show up consistently online." },
      { q: "Do you offer monthly social media content packages in Dubai?", a: "Yes. Our monthly content packages are designed for brands that need a consistent flow of high-quality content without the overhead of an in-house team. Packages start from a single shoot day per month and scale up to weekly production." },
      { q: "Can you create TikTok content for a UAE brand?", a: "Absolutely. TikTok content creation is one of our fastest-growing service lines. We produce TikTok-native content that respects the platform's culture, trends, and algorithm — not repurposed Instagram content. Our team stays current with UAE TikTok trends week-to-week." },
      { q: "Do you work with influencers and content creators?", a: "Yes. We work with both brands and individual creators. For influencers, we provide studio access, professional lighting, creative direction, and editing — everything you need to level up your content quality." },
      { q: "How much does social media content production cost in Dubai?", a: "Social media content packages start from AED 2,500 for a half-day shoot with 3 to 5 deliverables. Monthly retainer packages offering consistent weekly content start from AED 6,000 per month. We provide a transparent quote within 2 hours of your brief." },
    ],
  },
  "ads-shooting": {
    title: "Ads Shooting Dubai — Meta, TikTok, YouTube & OOH Ad Production",
    description: "Backyard Studio Official is Dubai's specialist ads shooting company for performance-first ad content. Whether you are running Meta (Facebook & Instagram) ads, TikTok paid campaigns, YouTube pre-rolls, or Out-Of-Home (OOH) billboard visuals — we produce creative that performs, not just creative that looks good.\n\nWe understand the UAE advertising landscape intimately: what works for a Jumeirah audience, what resonates in Deira, and how to speak to both Arabic and English-speaking consumers in a single campaign. Our ad production process is built to deliver multiple creative variants efficiently, so your media team has the A/B testing arsenal they need from day one.",
    includes: ["Creative concept & ad brief development", "Scriptwriting & storyboarding", "Professional talent sourcing & casting", "Multi-location UAE shoots", "Multi-format delivery (16:9, 9:16, 1:1, 4:5)", "Motion graphics, lower thirds & supers", "Platform-compliant export specs", "Multiple creative variants for A/B testing"],
    faqs: [
      { q: "What ad formats do you produce?", a: "We produce for all major ad formats: Meta (Facebook & Instagram) feed ads, Stories ads, and Reels ads; TikTok In-Feed and TopView ads; YouTube pre-roll and bumper ads; OOH static and motion; and broadcast/IPTV commercials." },
      { q: "Do you include multiple creative variants in the package?", a: "Yes. We strongly recommend producing at least 3 to 5 creative variants per campaign for A/B testing, and our production process is designed to deliver these efficiently within a single shoot day." },
      { q: "Can you produce ads in Arabic?", a: "Absolutely. We produce bilingual (Arabic and English) ad content and work with professional Arabic-speaking talent, voice-over artists, and subtitle translators for all major Gulf dialects." },
      { q: "How quickly can ad content be turned around?", a: "Standard turnaround is 5 to 7 business days from shoot to final delivery. Rush production (48–72 hours) is available for time-sensitive campaigns." },
      { q: "Do you manage ad campaigns as well as production?", a: "We specialise in production. For media planning, buying and campaign management, we have trusted partner agencies in Dubai we can recommend alongside our production work." },
    ],
  },
  "aerial-drone": {
    title: "Aerial Drone Videography Dubai — GCAA Licensed Drone Operators UAE",
    description: "Backyard Studio Official holds a full GCAA (General Civil Aviation Authority) drone operator licence, making us one of the only fully legal aerial drone production companies operating across all 7 UAE emirates. Every aerial shoot we undertake is compliant, insured, and coordinated with local authorities — so your brand is protected as well as beautifully filmed.\n\nOur drone team captures cinematic 4K aerial footage across every landscape the UAE offers: the downtown Dubai skyline, desert dunes in RAK and Al Ain, coastal resorts on the Palm, event venues in Abu Dhabi, and industrial facilities across the free zones. We cover events, weddings, real estate, tourism campaigns, documentaries, and brand films.\n\nAll clients receive raw 4K files plus a colour-graded aerial cut delivered within 24 hours of shoot completion.",
    includes: ["GCAA-licensed operation across all UAE", "4K cinematic drone footage", "Pre-flight authority coordination & permits", "Full insurance coverage on all shoots", "Colour-graded aerial highlight cut", "Raw 4K file delivery", "Same-day preview clip", "Integration with ground-level production team"],
    faqs: [
      { q: "Is your drone operation GCAA licensed?", a: "Yes. Backyard Studio Official is a GCAA-licensed drone operator, meaning we are fully authorised to fly commercially across the UAE. All our pilots hold individual GCAA licences and our operations carry full public liability insurance." },
      { q: "Can you fly drones at weddings and private events in Dubai?", a: "Yes, subject to venue approvals. We handle all coordination with venue management and, where required, local authorities. Most major Dubai venues are pre-cleared in our network for fast turnarounds." },
      { q: "What drone equipment do you use?", a: "We operate DJI Inspire 2 and Mavic 3 Cine series platforms for the majority of shoots, delivering 4K up to 120fps for slow-motion aerials. For specialised requirements we source additional equipment from our trusted network." },
      { q: "Can you combine drone and ground-level filming?", a: "Absolutely. Most of our shoots combine aerial and ground-level crews seamlessly. Our drone team is coordinated by the same production director as the ground team, ensuring cinematic continuity between the two." },
      { q: "Do you fly outside Dubai?", a: "Yes. We cover all 7 UAE emirates and can mobilise to Abu Dhabi, Sharjah, RAK, Fujairah, Ajman, and UAQ with advance notice. International shoots are also available." },
    ],
  },
  "corporate-films": {
    title: "Corporate Films Dubai — Brand Documentaries, Culture & Investor Films UAE",
    description: "Backyard Studio Official produces corporate films that make stakeholders, employees, and investors believe in your organisation's story. Not the sanitised, stock-footage kind of corporate video — the kind that captures the actual texture of what your company does, why it matters, and who the real people are behind it.\n\nOur corporate film production covers every format your business needs: brand documentaries for investors, culture films for recruitment, product launch films, chairman messages, conference openers, and annual report videos. We have produced corporate content for major UAE conglomerates, government entities, free zone authorities, and international brands entering the Gulf market.",
    includes: ["Creative concept, script & storyboard", "Multi-day UAE production schedule", "C-suite & executive interview direction", "Office, facility & location filming", "Motion graphics, data visualisation & animation", "Professional voice-over (English & Arabic)", "Music licensing & sound design", "Multi-format delivery for web, broadcast & events"],
    faqs: [
      { q: "What types of corporate films do you produce?", a: "We produce brand documentaries, corporate culture films, executive interviews, product and service launch films, investor presentations, conference openers, annual report films, CSR videos, training content, and government/entity profile films." },
      { q: "Can you produce corporate films in Arabic?", a: "Yes. We offer full Arabic-language production including bilingual scripting, Arabic-speaking talent and presenters, professional voice-over, and Arabic subtitles and motion graphics for all Gulf Arabic dialects." },
      { q: "How long does a corporate film take to produce?", a: "A standard 2 to 5 minute corporate film typically takes 3 to 5 weeks from brief to delivery: 1 week for pre-production and approvals, 1 to 2 days of filming, and 2 to 3 weeks of post-production. Rush timelines are available." },
      { q: "Do you work with government and public sector entities in UAE?", a: "Yes. We have extensive experience producing content for UAE government entities, free zone authorities, and public sector organisations, including compliance with official brand guidelines and government communications protocols." },
      { q: "What is the cost of a corporate film in Dubai?", a: "Corporate film budgets in Dubai typically range from AED 15,000 for a single-location 2-minute piece to AED 200,000+ for multi-day branded documentary productions. We provide detailed breakdowns and transparent quotes within 2 hours." },
    ],
  },
  "testimonial-videos": {
    title: "Testimonial Videos Dubai — Authentic Client Review Video Production UAE",
    description: "Backyard Studio Official produces testimonial videos that convert. Not the awkward, over-scripted kind — the authentic, well-lit, emotionally credible testimonials that give potential customers the confidence to buy.\n\nOur testimonial video production service is trusted by some of Dubai's fastest-growing brands across real estate, healthcare, education, F&B, and professional services. We handle everything from client coordination and shoot logistics to editing, colour grading, and multi-format delivery optimised for your website, social media, and paid ad campaigns.\n\nEach testimonial is filmed in a way that feels natural for the speaker while looking completely professional on screen — the balance most companies never achieve with internal smartphone shoots.",
    includes: ["Pre-shoot briefing & question preparation", "Professional studio or on-location setup", "2 to 3 camera interview setup", "Professional lighting for all skin tones", "Teleprompter available on request", "Colour grade & sound mix", "Multi-format delivery (web, social, ads)", "Subtitle & caption versions"],
    faqs: [
      { q: "How do you make testimonial videos feel authentic?", a: "We prep clients before the camera rolls with a relaxed conversation about their experience rather than scripted lines. Our interview directors are skilled at drawing out genuine, emotionally resonant responses. The result feels like a real recommendation, not a performance." },
      { q: "How many testimonials can we film in a day?", a: "Typically 4 to 6 individual testimonial interviews per day depending on setup complexity and location. We can film multiple clients at the same location or travel between sites." },
      { q: "Can you film testimonials at the client's office or home?", a: "Yes. We come to your client's preferred location across the UAE — whether that is their office, a café, their home, or one of our studio spaces in Dubai. We bring all equipment and lighting to transform any space into a professional filming environment." },
      { q: "How quickly are testimonial videos delivered?", a: "Standard delivery is 48 hours from shoot completion. Rush 24-hour delivery is available for an additional fee." },
      { q: "Can testimonial videos be used for paid ads?", a: "Absolutely. We deliver all testimonials in ad-ready formats — 9:16 for TikTok and Instagram Stories, 16:9 for YouTube and Facebook, and 1:1 for feed placements. Captions and subtitle overlays are included for silent-view environments." },
    ],
  },
  "event-video-editing": {
    title: "Event Video Editing Dubai — 48-Hour Highlight Reels & Post-Production UAE",
    description: "Backyard Studio Official's post-production team edits raw event footage into polished, emotion-driven highlight reels — whether the footage was shot by our own team or sent to us from an external camera crew.\n\nWe edit everything from intimate private events to 5,000-person corporate galas, wedding highlights, conference summary films, award ceremony edits, and product launch recaps. Our editors are experienced in the UAE event landscape and understand how to find the story in hours of raw footage and distil it into a 2 to 5 minute film that captures the energy of the day.\n\nAll edits include professional colour grading, licensed music, sound design, and motion graphics — delivered to your inbox within 48 hours.",
    includes: ["Full review of all raw footage", "Story-driven edit selection", "Professional colour grade", "Licensed music sourcing & sync", "Sound design & audio clean-up", "Lower thirds & motion graphics", "Multi-format export (web, social, broadcast)", "2 rounds of revision included"],
    faqs: [
      { q: "Can you edit footage shot by a different camera team?", a: "Yes. We regularly edit footage from external crews, broadcast cameras, GoPros, and mixed-format shoots. We accept all major formats including ProRes, RED, ARRI, BRAW, MP4 and MXF." },
      { q: "How long does event video editing take?", a: "Our standard turnaround is 48 hours for a 2 to 4 minute highlight reel. For longer-form edits (10 to 30 minutes) or complex multi-camera edits we typically require 3 to 5 business days." },
      { q: "Do you provide social media cut-downs as well?", a: "Yes. Most clients request a 60-second social media cut alongside the full highlight reel, and a 15 to 30 second teaser for Stories and Reels. These can be added to any editing package." },
      { q: "What file formats do you deliver?", a: "We deliver in H.264 or ProRes depending on your requirement, in all key aspect ratios: 16:9 for YouTube/web, 9:16 for TikTok/Instagram Stories, and 1:1 for Instagram feed." },
      { q: "How do I send you my raw footage?", a: "We provide a private upload link (WeTransfer or Google Drive) for footage up to 500GB. For larger shoots we can arrange hard-drive collection from your location across the UAE." },
    ],
  },
  "social-media-shoots": {
    title: "Social Media Videography & Photography Dubai",
    description: "Backyard Studio Official produces social media videography and photography built specifically for the UAE's most competitive digital landscape. Whether you need polished product shots for your Instagram grid, cinematic behind-the-scenes reels, lifestyle photography for your brand story, or short-form videos that perform in paid ad campaigns — our social media shoots deliver content that looks premium and performs commercially.\n\nWe combine videography and photography in a single shoot day so your brand gets a full suite of assets: video for Reels, TikTok and Stories; stills for feed, ads and web. No separate bookings, no mixed-quality deliverables — everything in one unified creative direction.",
    includes: ["Combined video + photo shoot day", "Storyboard & shot-list planning", "Lifestyle, product & brand angles", "Professional lighting & set styling", "Reel-ready vertical video edits", "Colour-graded photo selects", "Ad-ready and organic versions", "Delivery within 48 hours"],
    faqs: [
      { q: "Can I get both photos and videos from a single shoot?", a: "Yes — our social media shoots are specifically designed to deliver both. A single day produces Reel/TikTok video content, Stories clips, and a full edited photo gallery for feed and ads, all in one unified creative session." },
      { q: "What industries do you shoot social media content for?", a: "We cover all major UAE sectors: F&B, hospitality, fashion, beauty, real estate, retail, fitness, healthcare, tech, and professional services. Our team adapts the creative approach to match your brand's visual identity and audience." },
      { q: "How many deliverables do I get from a shoot day?", a: "A typical full-day social media shoot produces 4–8 video clips (edited, platform-ready) and 30–80 edited photo selects depending on the number of looks and locations." },
      { q: "Do you offer monthly social media shoot packages in Dubai?", a: "Yes. Monthly retainer packages are our most popular offering — one or two shoot days per month that keep your feed consistently stocked with fresh, on-brand content. Packages start from AED 3,500 per month." },
      { q: "Can you do social media shoots outside a studio?", a: "Absolutely. We shoot on location across all UAE — rooftops, beaches, cafés, showrooms, desert, and urban environments. We handle location scouting and permits as part of the package." },
    ],
  },
  "automotive": {
    title: "Automotive Videography & Photography Dubai — Car Shoots UAE",
    description: "Backyard Studio Official produces automotive videography and photography that makes vehicles come alive on screen. From sleek showroom campaigns for dealerships to cinematic launch films for new model releases, hero shots for online listings, and dynamic on-road content for social media — our UAE automotive production team understands what it takes to make metal, glass, and speed look extraordinary.\n\nWe work with automotive brands, dealerships, private sellers, car rental companies, and aftermarket businesses across Dubai and all 7 UAE emirates. Our shoots take full advantage of the UAE's unrivalled automotive backdrop: desert highways at sunrise, urban tunnels, coastal roads, and iconic city skylines.",
    includes: ["Studio & on-location automotive shoots", "Exterior & interior detail photography", "Dynamic on-road video with camera car", "Drone aerial car footage (GCAA licensed)", "Paint & colour-accurate editing", "360° vehicle walkarounds", "Social media ready cuts (Reels/TikTok)", "Multi-format delivery for web & print"],
    faqs: [
      { q: "Do you offer dynamic (moving) car footage?", a: "Yes. We shoot moving vehicles using camera cars, tracking rigs, handheld gimbal passes, and our GCAA-licensed drones for aerial perspective. We have experience capturing everything from slow lifestyle cruises to performance driving sequences." },
      { q: "Can you shoot in a studio or on location?", a: "Both. For showroom-quality studio shots we use controlled lighting setups that eliminate reflections and showcase the vehicle's design precisely. For lifestyle and brand content we use Dubai's incredible outdoor environments — desert roads, coastal routes, and urban backdrops." },
      { q: "Do you photograph car interiors?", a: "Yes. Interior detail photography is a core part of our automotive packages — dashboard, stitching, ambient lighting, tech displays, and seat textures all shot at the detail level that listings and brand campaigns demand." },
      { q: "Which UAE areas are best for car shoots?", a: "Popular UAE automotive shoot locations include: Al Qudra desert road, Dubai Hatta mountain road, Sheikh Zayed Road flyovers (night shots), Dubai Marina waterfront, Jebel Jais in RAK, and Corniche Abu Dhabi." },
      { q: "Do you work with dealerships and fleet operators?", a: "Yes. We offer bulk and retainer packages for dealerships, fleet operators and automotive marketplaces that need consistent, high-quality imagery across their vehicle inventory." },
    ],
  },
  "real-estate": {
    title: "Real Estate Videography & Photography Dubai — Property Shoots UAE",
    description: "Backyard Studio Official produces world-class real estate videography and photography for Dubai's most competitive property market. From DIFC penthouses and Palm Jumeirah villas to off-plan developer campaigns and commercial real estate portfolios — our property shoots combine architectural photography, walkthrough videography, and GCAA-licensed drone footage into a complete marketing asset package.\n\nIn Dubai's ultra-competitive real estate market, listing quality directly impacts price and time-on-market. Our real estate production team understands how to capture natural light, showcase space, and tell a lifestyle story that makes a buyer see themselves living in the property before they ever step inside.",
    includes: ["Architectural interior & exterior photography", "Cinematic property walkthrough video", "Aerial drone footage (GCAA licensed)", "Twilight & golden-hour exterior shots", "Virtual tour ready stills", "Floor plan overlay graphics", "Social media cuts (Reels/TikTok)", "Same-day preview delivery"],
    faqs: [
      { q: "Do you do drone photography for real estate in Dubai?", a: "Yes. As GCAA-licensed drone operators, we legally fly over residential and commercial properties across all Dubai districts and UAE emirates. Aerial footage dramatically increases listing engagement and is now a standard expectation for premium properties." },
      { q: "What types of properties do you photograph?", a: "We photograph and film all property types: apartments, villas, townhouses, penthouses, commercial offices, retail spaces, hotels, serviced apartments, and off-plan development show apartments." },
      { q: "How quickly do you deliver real estate photos and video?", a: "Standard delivery is 24 hours for photography and 48 hours for edited video. Rush 12-hour delivery is available for time-sensitive listings." },
      { q: "Do you offer twilight shoots for real estate?", a: "Yes. Twilight and dusk exterior shoots are among the most effective real estate photography techniques, and we schedule them specifically around the optimal light window for each property's orientation." },
      { q: "Can you shoot off-plan developments and show apartments?", a: "Absolutely. We work with leading UAE developers on off-plan marketing campaigns — including show apartment shoots, CGI compositing, lifestyle imagery, and aerial footage of plot locations with master plan overlays." },
    ],
  },
  "corporate-videography": {
    title: "Corporate Videography & Photography Dubai — Business Content UAE",
    description: "Backyard Studio Official provides professional corporate videography and photography for Dubai and UAE businesses of all sizes. From C-suite headshots and team group photography to corporate event coverage, office environment videography, and executive interview filming — we make your people, culture, and brand look world-class on camera.\n\nCorporate content is no longer optional for UAE businesses competing for talent and clients. Your LinkedIn presence, investor deck, website, and recruitment materials all need consistent, high-quality corporate imagery and video to project the professionalism your brand deserves.",
    includes: ["Executive & team headshots", "Office environment & culture photography", "Corporate event photography & video", "Executive talking-head interviews", "Team & culture video content", "LinkedIn-optimised portrait sessions", "Multi-format delivery (web, print, social)", "Same-day preview selects"],
    faqs: [
      { q: "Can you do corporate headshots in our office?", a: "Yes. We bring our portable studio setup to your office — professional lighting, backdrop, and retouching — so your whole team can be photographed without leaving the building. We typically photograph 10–40 people per day depending on session length." },
      { q: "Do you offer corporate event photography and video?", a: "Yes. Corporate event coverage is one of our most requested services — from board meetings and AGMs to town halls, award ceremonies, and team-building events. We cover both photo and video in a single booking." },
      { q: "Can you produce LinkedIn video content for executives?", a: "Absolutely. We produce polished executive interview videos, thought leadership pieces, and brand story content optimised for LinkedIn — with on-camera coaching so your executives look confident and natural on screen." },
      { q: "Do you work with free zone companies and government entities?", a: "Yes. We have extensive experience with UAE free zone businesses, ADGM entities, and government-adjacent organisations — including compliance with official photography guidelines and security protocols at sensitive locations." },
      { q: "How much does corporate photography cost in Dubai?", a: "Corporate headshot sessions in Dubai start from AED 1,500 for a single executive to AED 8,000 for a full-team studio day. Full corporate event coverage starts from AED 3,500. We provide transparent quotes within 2 hours of your brief." },
    ],
  },
  "podcast": {
    title: "Podcast Videography Dubai — Multi-Camera Studio Podcast Production UAE",
    description: "Backyard Studio Official is Dubai's specialist podcast videography studio. We film multi-camera podcast episodes, video interview series, and long-form conversation content for YouTube, Spotify Video, LinkedIn, and social clip distribution — with broadcast-quality results at production-company speed.\n\nVideo podcasting has become one of the most powerful content formats for UAE businesses, thought leaders, and media brands. A well-produced video podcast builds authority, generates hours of evergreen content, and provides weeks of social media clips from a single recording session. Our podcast production packages are designed to maximise output while making your studio look as professional as any major media network.",
    includes: ["Multi-camera podcast setup (2–4 cameras)", "Professional broadcast audio (lavalier & condenser)", "Acoustic treatment & studio lighting", "Lower thirds, titles & branded graphics", "Full episode edit + social clip cuts", "Colour grade & audio mix", "Thumbnail photography", "Delivery within 48 hours"],
    faqs: [
      { q: "How many cameras do you use for podcast filming?", a: "Our standard podcast setup uses 3 cameras: a wide two-shot, and individual close-ups for each host/guest. For more complex setups with 3+ guests we add a fourth camera. Multi-angle footage gives you dynamic editing options and a professional broadcast feel." },
      { q: "Do you provide the podcast studio or come to us?", a: "Both. We can transform your office or any location into a fully-lit podcast studio — or you can use our partner studios in Dubai equipped specifically for podcast production. We handle all technical setup and breakdown." },
      { q: "Can you create social media clips from the podcast?", a: "Yes. Clip cutting is one of the most valuable parts of our podcast service. From a 60-minute episode we typically extract 8–15 short clips (60–90 seconds) formatted for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn." },
      { q: "Do you record audio as well as video?", a: "Yes. Our podcast packages include professional audio recording with lavalier microphones and a condenser overhead — mixed and mastered for podcast distribution. You receive both a video file and a standalone audio file for Spotify, Apple Podcasts, and other platforms." },
      { q: "Can you film regular weekly or monthly podcast episodes?", a: "Absolutely. We offer podcast retainer packages with monthly recording sessions for brands that publish content consistently. Retainers include ongoing setup, filming, editing, and clip production at a fixed monthly rate." },
    ],
  },
  "youtube-content": {
    title: "YouTube Videography Dubai — Professional YouTube Video Production UAE",
    description: "Backyard Studio Official produces YouTube video content for UAE brands, businesses, creators, and media companies at broadcast quality. From educational how-to series and product review content to brand vlogs, travel and lifestyle films, interview series, and channel trailers — we approach every YouTube video with the same production rigour we bring to commercial campaigns.\n\nYouTube remains the world's second-largest search engine — and in the UAE, it is consistently one of the top-performing content platforms for both English and Arabic audiences. A professionally produced YouTube channel builds long-term organic reach, authority, and search visibility that paid social ads cannot replicate.",
    includes: ["Pre-production planning & scripting", "Professional 4K video production", "On-camera talent direction", "Studio or location shoot (across UAE)", "Colour grade & audio mix", "Intro/outro & branded templates", "Thumbnail photography & design", "SEO-optimised title & description consultation"],
    faqs: [
      { q: "What types of YouTube videos do you produce?", a: "We produce: educational and explainer content, product reviews and unboxings, brand vlogs and behind-the-scenes, travel and hospitality films, interview series, channel trailers, event recaps, tutorial series, and branded entertainment content." },
      { q: "Can you help with the script and structure of YouTube videos?", a: "Yes. Our pre-production team helps with scripting, video structure, thumbnail strategy, and SEO title research before every shoot. Strong pre-production is the biggest factor in YouTube video performance." },
      { q: "Do you produce Arabic YouTube content?", a: "Yes. We produce Arabic-language YouTube content for the UAE and wider Gulf Arabic market — including bilingual (English + Arabic) videos, Arabic-speaking presenters, subtitles, and channel localisation." },
      { q: "How long does it take to produce a YouTube video?", a: "A typical 5 to 10 minute YouTube video takes 1 shoot day and 3 to 5 business days of post-production. For ongoing channels we establish a consistent pipeline so you always have content ready to publish on schedule." },
      { q: "Can you help grow a YouTube channel for a UAE business?", a: "We handle the production side of YouTube growth — consistent quality, strong thumbnails, optimised descriptions, and engaging video formats. We can also connect you with YouTube strategy consultants in our partner network for full channel growth management." },
    ],
  },
  "event-videography": {
    title: "Event Videography & Photography Dubai — Full-Service Event Coverage UAE",
    description: "Backyard Studio Official delivers complete event videography and photography coverage across Dubai and all 7 UAE emirates. Our event production teams combine cinematic video with editorial-quality photography in a single, seamlessly coordinated booking — so every element of your event is documented with purpose, precision, and a compelling visual story.\n\nFrom corporate conferences at the Dubai World Trade Centre to gala dinners at Burj Al Arab, award ceremonies, product launches, summits, charity events, and private celebrations — we have covered over 2,400 events since 2016. Our teams know UAE venues, handle permits, and deliver with the reliability that event organisers, PRs, and brand managers need.",
    includes: ["Multi-camera video coverage", "Editorial event photography", "Same-day social media teaser", "48-hour highlight reel delivery", "Full edited photo gallery", "Social media cut-downs (Reels/TikTok)", "On-site audio recording", "Coverage report & press-ready files"],
    faqs: [
      { q: "Can you cover both photography and videography for our event?", a: "Yes. Our event teams are specifically built to cover both simultaneously — with dedicated photographers and videographers coordinated by a single production director. One booking, complete coverage, unified creative direction." },
      { q: "How quickly do we receive event content after the event?", a: "We deliver a same-day social media teaser clip within 4 hours of the event ending, the full edited highlight reel within 48 hours, and the complete edited photo gallery within 48 to 72 hours." },
      { q: "What size events do you cover?", a: "We cover events from 20-person executive dinners to 10,000-person outdoor festivals. We scale our crew and equipment to match the footprint and complexity of each event — from a 2-person photo+video team to a full 10-person production crew." },
      { q: "Do you cover events in Abu Dhabi and other emirates?", a: "Yes. We cover all 7 UAE emirates and can mobilise same-day for Dubai-area events and with 24-hour notice for events in Abu Dhabi, Sharjah, RAK, and the northern emirates." },
      { q: "Do you offer live streaming for events?", a: "Yes. We offer fully managed live-stream production for conferences, town halls, and corporate events — including multi-camera switching, graphics package, and broadcast to YouTube Live, LinkedIn Live, or custom RTMP destinations." },
    ],
  },
  "food": {
    title: "Food Videography & Photography Dubai — Restaurant & F&B Content UAE",
    description: "Backyard Studio Official produces mouthwatering food videography and photography for Dubai's most competitive hospitality and F&B market. From fine-dining plate presentation and hero dish photography to social media recipe videos, delivery app imagery, brand campaign shoots, and product packaging photography — our food content specialists know exactly how to make every dish look irresistible.\n\nWe work with restaurants, cafés, cloud kitchens, food delivery brands, FMCG products, hospitality groups, and food influencers across the UAE. Our food styling team works alongside our cinematographers to ensure every shot is technically precise and commercially compelling — the kind of content that drives delivery orders, restaurant reservations, and brand loyalty.",
    includes: ["Professional food styling on-set", "Hero dish photography (multi-angle)", "Tabletop & overhead video shots", "Lifestyle & in-restaurant environment shots", "Social media video cuts (Reels/TikTok)", "Delivery app optimised imagery", "Colour-accurate food retouching", "Multi-format delivery (web, print, social, ads)"],
    faqs: [
      { q: "Do you provide food styling on set?", a: "Yes. Professional food styling is included in our food photography packages. Our stylists prepare and present each dish to look its absolute best on camera — using techniques invisible to the viewer but essential for the final image quality." },
      { q: "Can you shoot in our restaurant?", a: "Yes. We frequently shoot in live restaurant environments — typically before service hours — bringing our own lighting equipment to complement or replace ambient light as needed. We work quickly to minimise disruption to your operations." },
      { q: "Do you produce food video content for social media?", a: "Absolutely. Food Reels and TikToks are among the highest-performing content formats in UAE social media. We produce POV cooking videos, overhead flat-lay reveals, slow-motion pour shots, and lifestyle table-setting videos optimised for maximum organic reach." },
      { q: "Can you shoot food for delivery app listings?", a: "Yes. Delivery app imagery (Talabat, Deliveroo, Noon Food) follows specific technical requirements. Our delivery app photography package produces clean, bright, appetite-inducing images sized and formatted for each platform's specifications." },
      { q: "How many dishes can you shoot in a day?", a: "Typically 15 to 25 hero dishes per day for photography, or 8 to 12 video clips per day depending on complexity. We plan the shoot schedule with your chef in advance to ensure smooth preparation and maximum output." },
    ],
  },
  "fashion-shoots": {
    title: "Fashion Shoots Dubai — Luxury, Editorial & Campaign Photography UAE",
    description: "Backyard Studio Official is one of Dubai's premier fashion photography and videography studios. We produce luxury fashion campaigns, editorial fashion shoots, retail lookbook photography, kids fashion shoots, and seasonal collection campaigns (SS, FW, Pre-Spring, Resort) — for UAE-based designers, international labels, e-commerce brands, and global retailers using Dubai as a production base.\n\nDubai's position as a global fashion hub — combined with its extraordinary outdoor environments, world-class studio infrastructure, and diverse talent pool — makes it one of the most sought-after production locations for fashion brands worldwide. Backyard Studio Official brings cinematic direction, expert styling coordination, and editorial precision to every fashion production we touch.",
    includes: ["Creative direction & mood board development", "Luxury fashion photography (editorial & commercial)", "Campaign videography for runway, lookbooks & social", "Stylist, hair & make-up artist coordination", "Model casting & talent management", "Studio and on-location shoots across UAE", "Kids & family fashion shoot expertise", "Seasonal collection delivery (SS/FW/Pre-Spring/Resort)"],
    faqs: [
      { q: "Do you shoot luxury fashion campaigns in Dubai?", a: "Yes. Backyard Studio Official has produced luxury fashion campaigns for international and regional brands using Dubai's premium venues, desert landscapes, and architectural backdrops. We coordinate full production — casting, styling, location permits, photography and video — in a single brief." },
      { q: "Can you shoot kids fashion and family campaigns?", a: "Yes. Our team has extensive experience with kids fashion shoots — handling the unique requirements of on-set child comfort, timing, and natural expression direction. We work with family, kids and baby fashion brands across UAE and regionally." },
      { q: "Do you produce seasonal collection campaigns (SS/FW)?", a: "Yes. We are experienced in producing full seasonal lookbook campaigns — Spring/Summer, Fall/Winter, Pre-Spring, and Resort collections — with staggered delivery schedules to match fashion brand release calendars." },
      { q: "Can you shoot editorial fashion for international magazines?", a: "Yes. We produce editorial fashion content to international magazine standards, delivered in the formats required by major publications for both regional Arabic-language and international English-language fashion media." },
      { q: "Do you offer retail fashion photography for e-commerce?", a: "Yes. Alongside editorial and campaign work, we produce retail fashion photography for e-commerce — clean white-background and mannequin shots for Namshi, Ounass, Farfetch ME, and brand DTC websites — all from the same production team." },
    ],
  },
  "travel-lifestyle": {
    title: "Travel & Lifestyle Campaigns Dubai — Hotel, Resort & Tourism Content UAE",
    description: "Backyard Studio Official produces travel and lifestyle campaigns for the UAE's world-leading hospitality industry. From five-star resort photography on Saadiyat Island to wellness retreat shoots in the Hatta mountains, city experience campaigns for Dubai Tourism, and international tourism board content — our travel and lifestyle production team creates imagery that makes destinations irresistible.\n\nThe UAE is consistently ranked among the world's top tourism destinations — and the brands that win here understand that content quality is inseparable from brand perception. Our hotel, resort, and lifestyle shoots deliver the premium visual standard that international travellers expect from UAE destinations.",
    includes: ["Hotel & resort campaign photography and video", "Wellness and spa shoot production", "City experience and destination campaigns", "Lifestyle talent direction (models, couples, families)", "Drone aerials of resort and coastal locations (GCAA)", "Morning, golden hour, and twilight shoot scheduling", "Full social media asset suite", "Press-ready and OOH format delivery"],
    faqs: [
      { q: "Do you shoot hotel and resort campaigns in Dubai and Abu Dhabi?", a: "Yes. Backyard Studio Official works with leading UAE hotel and resort groups on campaign photography, video content, social media assets, and OOH advertising materials. We cover Dubai, Abu Dhabi, RAK, and all UAE emirates." },
      { q: "Can you produce wellness and spa photography?", a: "Yes. Wellness, spa, and retreat photography is one of our most requested travel verticals. We understand the calm, aspirational visual language that wellness brands require — and how to achieve it on set efficiently without disrupting the guest experience." },
      { q: "Do you work with tourism boards and DMOs?", a: "Yes. We have produced content for tourism and destination marketing organisations — creating city experience campaigns, cultural immersion content, and destination showcase films that position UAE locations for international visitors." },
      { q: "What time of day do you shoot for hospitality and travel content?", a: "We schedule travel and hospitality shoots around golden hour (sunrise and sunset), which provides the warmest, most cinematic natural light. For interior hotel shoots, we work in the early morning before guest activity disrupts the spaces." },
      { q: "Can you produce content in both Arabic and English for tourism campaigns?", a: "Yes. We produce bilingual tourism and hospitality content — English for international audiences and Arabic for the GCC and wider Arabic-speaking market — with talent, voice-over, and copy adapted for each audience." },
    ],
  },
  "tv-commercials": {
    title: "TV Commercials & Brand Commercials Dubai — Broadcast Ad Production UAE",
    description: "Backyard Studio Official produces broadcast-quality TV commercials and brand commercials for UAE, regional GCC, and international campaigns. From high-end brand films airing on MBC and OSN to digital ads running on YouTube and IPTV, and OOH motion content for Dubai's digital billboards — our commercial production team delivers at the level global brands expect.\n\nEvery TV commercial we produce combines a clear strategic objective with cinematic production quality. We handle the full pipeline: creative concept, scripting, casting, location permits, set build if required, cinematography, post-production, music licensing, and broadcast-ready delivery in all required technical specs.",
    includes: ["TV commercial creative concept & scripting", "Storyboard & animatic development", "Professional talent casting (bilingual)", "Location scouting & permits across UAE", "Multi-camera broadcast production", "Full post-production: edit, VFX, grade", "Professional voice-over (Arabic & English)", "Broadcast delivery specs (MBC, OSN, AD Media, etc.)"],
    faqs: [
      { q: "Do you produce TV commercials for UAE national broadcast?", a: "Yes. We produce TV commercials for national UAE broadcast on channels including MBC Group, Abu Dhabi Media, OSN, and regional satellite networks. We deliver to all required broadcast technical specifications." },
      { q: "Can you produce social media ad versions alongside the TV commercial?", a: "Yes. We recommend producing a full suite: 30-second TVC, 15-second digital cut-down, 9:16 vertical for TikTok and Instagram, and a 6-second bumper for YouTube — all from the same shoot day, maximising production efficiency." },
      { q: "Do you produce Arabic-language commercials?", a: "Yes. Arabic-language commercial production is a core part of our offering — including bilingual scripting, Arabic-speaking on-screen talent, Gulf Arabic and MSA voice-over, and Arabic motion graphics and subtitles." },
      { q: "Can you produce product commercials for FMCG brands?", a: "Absolutely. FMCG product commercials — from food and beverage to personal care and household products — require specific production techniques for appetite appeal, product hero shots, and lifestyle integration. Our team has extensive FMCG commercial experience across UAE." },
      { q: "How much does a TV commercial cost to produce in Dubai?", a: "TV commercial production in Dubai ranges from AED 50,000 for a focused single-location brand TVC to AED 500,000+ for multi-day productions with large casts, complex sets, and full VFX. We provide a detailed budget breakdown within 2 hours of receiving your brief." },
    ],
  },
  "car-commercials": {
    title: "Car Commercials Dubai — Automotive Brand Campaigns & Luxury Car Shoots UAE",
    description: "Backyard Studio Official produces high-impact car commercials and automotive brand campaigns for UAE dealerships, international automotive brands, and luxury car importers. From cinematic launch films for new model releases to performance-driving sequences in the Hatta mountains, and luxury car lifestyle campaigns that position vehicles as aspirational status symbols — our automotive commercial team understands what makes cars sell on screen.\n\nThe UAE is one of the world's most important automotive markets — and the visual standards expected by UAE car buyers are among the highest on the planet. Our car commercial productions are built to match that standard: cinematic, dynamic, and unmistakably premium.",
    includes: ["Automotive brand campaign concept & scripting", "Luxury car studio photography & video", "Dynamic on-road filming (camera car, drone, gimbal)", "GCAA drone aerial footage of vehicles", "Night and twilight car photography", "Performance driving sequence production", "Multi-format delivery (TVC, digital, social, OOH)", "Brand-compliant post-production & colour grade"],
    faqs: [
      { q: "Do you produce luxury car commercials in Dubai?", a: "Yes. Backyard Studio Official has produced automotive brand campaigns for luxury and performance car brands across Dubai and the UAE — capturing vehicles against the emirate's iconic urban, coastal, and desert backdrops with cinematic precision." },
      { q: "Can you shoot performance driving sequences?", a: "Yes. Our automotive team has experience producing performance driving sequences on closed roads, racetracks, and controlled environments across the UAE. We coordinate all required safety, permissions, and support vehicles." },
      { q: "What makes Dubai a good location for car commercials?", a: "Dubai offers an unmatched combination of environments for automotive production: the Hatta mountain roads, Sheikh Zayed Road's urban canyon, Al Qudra desert highways, coastal Palm roads, and zero-traffic golden-hour shoots on closed roads. Our permit relationships across these locations make Dubai productions fast and efficient." },
      { q: "Do you shoot interiors for luxury car campaigns?", a: "Yes. Interior car photography and video — capturing the craftsmanship of steering wheels, dashboards, stitching, ambient lighting, and infotainment systems — is a core part of our luxury automotive production offering." },
      { q: "Can you produce car commercials in Arabic for the Gulf market?", a: "Yes. We produce bilingual automotive campaigns for the UAE and wider GCC market — with Arabic-language scripting, talent, voice-over, and region-specific cultural nuances built into the creative from the brief stage." },
    ],
  },
  "corporate-brand-films": {
    title: "Corporate Brand Films Dubai — Company Profile Videos & Office Branding UAE",
    description: "Backyard Studio Official produces corporate brand films that define how the world sees your organisation. Company profile videos, culture documentaries, team photography campaigns, and office environment branding shoots — we bring cinematic quality to corporate storytelling so your brand commands the credibility it deserves.\n\nIn the UAE's intensely competitive business landscape, the gap between brands with professional corporate content and those without is immediately visible. Our corporate brand film service is trusted by multinationals, UAE conglomerates, government entities, fast-growing startups, and professional services firms that understand content quality directly reflects brand quality.",
    includes: ["Company profile video production", "Culture & team documentary films", "Executive & team photography", "Office environment & workspace branding shoots", "Investor and stakeholder presentation films", "Brand identity video (values, mission, vision)", "Internal communications content", "Multi-format delivery (web, presentation, social, LinkedIn)"],
    faqs: [
      { q: "What is a company profile video?", a: "A company profile video is a 2 to 5 minute brand film that introduces your organisation — covering who you are, what you do, who you serve, and why clients or partners should choose you. It is your most important piece of corporate content and is used on your website, LinkedIn, investor decks, and at events." },
      { q: "Do you do team photography as well as video?", a: "Yes. Our corporate brand film service combines video and photography in the same production — delivering brand films alongside a complete library of executive portraits, team group shots, and candid culture imagery." },
      { q: "Can you photograph and film our office environment?", a: "Yes. Office and workspace photography and video is a core part of our corporate branding service — capturing the visual identity, culture, and energy of your working environment for recruitment marketing, social media, and investor communications." },
      { q: "How long does a company profile video take to produce?", a: "A standard company profile video takes 2 to 4 weeks: 1 week for scripting and pre-production, 1 shoot day, and 2 to 3 weeks of post-production with revision rounds. We align delivery timelines with your business requirements." },
      { q: "Do you work with UAE government and public sector for corporate films?", a: "Yes. We have extensive experience producing corporate brand content for UAE government entities, semi-government organisations, and public sector businesses — with full understanding of official communications protocols and brand guidelines." },
    ],
  },
  "documentary": {
    title: "Documentary Films Dubai — Magazine Editorial & Culture Storytelling UAE",
    description: "Backyard Studio Official produces documentary films, magazine editorial shoots, behind-the-scenes content, and culture and storytelling films for brands, media organisations, and public figures across the UAE and the wider Arab world.\n\nDocumentary filmmaking is the most powerful format for communicating complex truths, cultural depth, and human stories. Our documentary team brings a journalism-informed approach to every project — rigorous research, patient observation, and the editorial judgment to find the story within the story. The result is content that audiences return to, share, and remember.",
    includes: ["Documentary concept development & research", "Interview-led storytelling production", "Magazine editorial shoot direction", "Behind-the-scenes production series", "Culture & heritage storytelling content", "Multi-day location filming across UAE & region", "Archival and B-roll footage integration", "Festival-ready and broadcast delivery"],
    faqs: [
      { q: "What types of documentaries do you produce?", a: "We produce brand documentaries, social impact films, cultural heritage content, founder and entrepreneur stories, industry deep-dive series, behind-the-scenes campaigns, and short documentary episodes for social platforms." },
      { q: "Can you produce magazine editorial shoots in Dubai?", a: "Yes. We produce editorial shoots to international magazine standards — for both digital and print publications. Our editorial team coordinates art direction, styling, casting, location, and photography to deliver content at the quality expected by major regional and international titles." },
      { q: "Do you produce behind-the-scenes content for brands?", a: "Yes. Brand BTS content — showing the making of a campaign, the craft behind a product, or the people behind an organisation — is one of the most authentic and high-performing content formats available. We produce BTS as a dedicated shoot or alongside any existing production." },
      { q: "Can you produce cultural storytelling content for UAE brands?", a: "Yes. We produce culture and heritage storytelling content for UAE organisations — including content celebrating Emirati culture, the UAE's founding story, and the diverse communities that make up modern UAE society." },
      { q: "Do you produce documentaries in Arabic?", a: "Yes. Arabic-language documentary production is an important part of our portfolio — for state broadcasters, government entities, and brands communicating with Arabic-speaking audiences across the UAE and wider Arab world." },
    ],
  },
  "hotel-photography": {
    title: "Hotel Photography Dubai — Resort Campaigns & Property Lifestyle Shoots UAE",
    description: "Backyard Studio Official is one of the UAE's premier hotel photography and resort campaign production studios. We produce complete hotel photography packages — from room and suite photography and F&B lifestyle imagery to spa and wellness content, pool and beach lifestyle shoots, and full resort campaign productions for international travel marketing.\n\nFor Dubai and Abu Dhabi's world-class hospitality market, imagery is everything. Our hotel photography team understands how to capture the specific visual language that luxury travellers respond to: aspirational but attainable, detailed but not clinical, premium but warm.",
    includes: ["Full hotel room & suite photography", "F&B restaurant and bar lifestyle shoots", "Pool, beach & outdoor environment photography", "Spa and wellness content production", "Resort campaign photography and video", "Real estate video tours & property lifestyle shoots", "Drone aerials of resort and property (GCAA licensed)", "OTA-optimised image delivery (Booking.com, Expedia, etc.)"],
    faqs: [
      { q: "What does a hotel photography package include?", a: "Our standard hotel photography package covers rooms and suites (all categories), public areas, restaurants and bars, pool and recreation facilities, spa, and exterior property. We deliver OTA-ready formats, social media crops, and print-resolution files from a single shoot." },
      { q: "When do you shoot hotel interiors?", a: "Hotel interior photography is always shot in the early morning before guest activity, using natural light where possible and professional supplemental lighting where needed. Exterior and pool photography is timed around golden hour for the warmest, most aspirational results." },
      { q: "Do you produce hotel campaign videos?", a: "Yes. We produce full hotel campaign videos — from 60-second brand films and social Reels to long-form resort experience documentaries. Campaign video is increasingly important for hotel direct booking strategy." },
      { q: "Do you produce real estate video tours?", a: "Yes. Property video tours — from residential apartments to hotel residences and serviced apartments — are produced with walkthrough video, drone aerials, and lifestyle photography in a single booking." },
      { q: "Can you shoot hospitality content across multiple UAE properties?", a: "Yes. We have the production infrastructure to shoot across multiple properties in a single schedule — covering Dubai, Abu Dhabi, RAK and other UAE emirates in a coordinated multi-location shoot programme." },
    ],
  },
  "reels-production": {
    title: "Reels Production Dubai — TikTok Videos, Short-Form & Influencer Campaign Shoots UAE",
    description: "Backyard Studio Official is one of Dubai's most experienced Reels and short-form content production studios. We produce Instagram Reels, TikTok-style videos, YouTube Shorts, and full influencer campaign shoots for UAE brands, agencies, and creators — with the speed, quality, and platform intelligence that top-performing content demands.\n\nShort-form content has become the primary battleground for brand attention in the UAE. Our Reels production team stays current with algorithm trends, platform-native aesthetics, and the specific content behaviours that drive saves, shares, and follower growth — so every piece of content we produce is built to perform, not just look good.",
    includes: ["Concept development & scripting per Reel", "Platform-native directing (TikTok, Instagram, YouTube)", "Influencer direction & content coaching", "Trending audio sourcing & licensing", "Fast-cut, platform-optimised editing", "Caption and hashtag strategy per post", "All platforms delivery (9:16, 1:1, 4:5)", "Same-day or 24-hour turnaround available"],
    faqs: [
      { q: "What is the difference between your Reels production and social media content service?", a: "Reels production is our specialist short-form video service — focused specifically on producing individual high-performing Reel and TikTok pieces, often 3 to 8 per shoot day. Our social media content service is a broader monthly package covering strategy, photo, video, and content calendar." },
      { q: "Do you work with influencers on campaign shoots?", a: "Yes. Influencer campaign shoots are one of our most requested services — brands bring us in to ensure influencer content is filmed to brand standard, with professional lighting, direction, and editing alongside the influencer's own natural style." },
      { q: "Can you produce TikTok-style videos for brands that feel native to the platform?", a: "Yes. TikTok has a specific visual and storytelling language that differs fundamentally from polished brand content. We understand how to produce content that feels platform-native and authentic while maintaining brand quality standards." },
      { q: "How quickly can you deliver Reels content?", a: "Our standard Reels turnaround is 24 to 48 hours from shoot completion. For campaign-critical content or time-sensitive posts, we offer same-day edited delivery." },
      { q: "Do you offer Reels production packages for multiple pieces per month?", a: "Yes. Monthly Reels packages — 8, 12 or 20 Reels per month — are structured around one or two shoot days with batched editing, so your posting calendar is always stocked with fresh content." },
    ],
  },
  "brand-events": {
    title: "Brand Launch Events Dubai — Fashion Events, Corporate Events & Aftermovies UAE",
    description: "Backyard Studio Official covers brand launch events, fashion events, corporate events, and concert aftermovies across the UAE with the cinematic intensity that makes the event feel as extraordinary in footage as it did in person.\n\nBrand events are one of the UAE's most important marketing channels — and the content produced at them is as valuable as the event itself. Our brand events production team embeds seamlessly into even the largest events, capturing every keynote, entrance, performance, speech, interaction, and atmosphere moment — and delivering content that extends the event's reach to millions who weren't in the room.",
    includes: ["Full-day multi-camera event coverage", "Brand launch & product reveal filming", "Fashion event runway and backstage coverage", "Corporate event photography & video", "Concert and live performance aftermovies", "Same-day social media content delivery", "Highlight film (48-hour delivery)", "Press photography & media-ready files"],
    faqs: [
      { q: "Can you produce aftermovies for concerts and live events?", a: "Yes. Concert and live event aftermovies are among our most cinematic productions — capturing the energy, performance, and atmosphere of live events in a compelling highlight film that audiences who attended love to relive and those who missed wish they had been there." },
      { q: "Do you cover fashion events and runway shows in Dubai?", a: "Yes. Dubai Fashion Week, independent designer shows, retail brand launches, and fashion PR events are all within our regular production portfolio. We cover runway, backstage, front row, and social coverage from a single coordinated team." },
      { q: "Can you produce social media content during the event itself?", a: "Yes. Our same-day social media service produces edited content during the event — delivered to your team within 1 to 2 hours of the key moments happening. This is essential for real-time engagement during brand launches and live events." },
      { q: "Do you cover corporate brand launch events?", a: "Yes. Corporate brand launches — new product reveals, office openings, partnership announcements, award ceremonies — are core event coverage territory. We coordinate photo, video, and same-day social content in a single booking." },
      { q: "What size events do you cover?", a: "From 30-person private brand preview dinners to 10,000-person outdoor concerts and festivals, we scale our crew to match the event's footprint. Large events typically use 4 to 8 crew members covering multi-location and multi-room setups simultaneously." },
    ],
  },
  "pre-post-production": {
    title: "Pre-Production & Post-Production Services Dubai — Location Scouting, Casting, Editing & Retouching UAE",
    description: "Backyard Studio Official offers comprehensive pre-production and post-production services as standalone offerings — for productions managed by other studios, in-house teams, or international brands that need specialist UAE production support.\n\nOur pre-production services include location scouting across all UAE emirates, model and talent casting, styling and wardrobe coordination, and full production planning. Our post-production team delivers video editing, colour grading, photo retouching, audio mixing, and motion graphics — to broadcast quality, at production company speed.",
    includes: ["Location scouting across all 7 UAE emirates", "Model & talent casting (via agency and direct)", "Stylist, hair & make-up artist sourcing", "Production management & scheduling", "Video editing — all formats and lengths", "Professional colour grading (DaVinci Resolve)", "Photo retouching (beauty, product, architectural)", "Audio mixing & sound design"],
    faqs: [
      { q: "Do you offer location scouting as a standalone service?", a: "Yes. Our location scouting team knows the UAE intimately — from permit-friendly public landmarks to private rooftops, heritage buildings, industrial spaces, and luxury residential locations. We provide a location report with photography, access details, and permit requirements for each shortlisted option." },
      { q: "Can you handle model and talent casting for a Dubai shoot?", a: "Yes. We cast models, presenters, actors, extras, and real-people talent for shoots across the UAE — drawing on our network of established agencies and direct talent relationships. We cast for all demographics including Arabic, South Asian, Western, and all UAE-resident communities." },
      { q: "Do you offer video editing for footage we shot ourselves?", a: "Yes. Our post-production team edits externally-shot footage — regardless of camera format or production house. We accept all major formats and deliver to your required spec and timeline." },
      { q: "What colour grading software do you use?", a: "Our primary grading suite is DaVinci Resolve, with expertise in LUT-based grading, shot matching, and delivery to both online (web/social) and broadcast specifications. We also use Adobe Premiere Pro and After Effects for editorial and motion graphics work." },
      { q: "Do you offer photo retouching as a standalone service?", a: "Yes. Beauty retouching, product retouching (background removal, reflections, compositing), architectural retouching (sky replacement, window pulls), and fashion retouching are all available as standalone post-production services." },
    ],
  },

  "product-shoots": {
    title: "Product Videography & Photography Dubai — E-Commerce & Brand Shoots UAE",
    description: "Backyard Studio Official produces product videography and photography that converts browsers into buyers. Whether you need clean white-background e-commerce shots for your Noon or Amazon listing, lifestyle product photography that shows your product in use, hero brand imagery for your website and ads, or cinematic product reveal videos for social media — our product studio delivers commercial-quality results for UAE brands at every scale.\n\nProduct imagery is the single most impactful factor in e-commerce conversion. Our product shoot packages are designed to produce the full range of assets you need in a single, efficiently-run session — so you never have to choose between having great listing images and having great social media content.",
    includes: ["White background e-commerce photography", "Lifestyle & in-context product shots", "360° product photography", "Product detail & texture close-ups", "Cinematic product reveal video", "Unboxing & packaging shots", "Social media cuts (Reels/TikTok)", "Print & web ready exports"],
    faqs: [
      { q: "Do you do white-background e-commerce product photography?", a: "Yes. Clean, white-background product photography for Noon, Amazon, Careem, and website listings is one of our most-requested services. We deliver background-removed, retouched files ready to upload directly to any e-commerce platform." },
      { q: "Can you photograph my products in a lifestyle or real-world setting?", a: "Absolutely. Lifestyle product photography — showing your product in use, in context, or on model — is one of the most effective ways to increase conversion and social engagement. We incorporate lifestyle shots into every product shoot package." },
      { q: "How many products can you photograph in a day?", a: "For standard e-commerce shots we typically photograph 30 to 60 products per day. For complex products with multiple angles and lifestyle setups, 10 to 20 per day. We plan the shoot schedule in advance to hit your target." },
      { q: "Do you produce product videos for social media?", a: "Yes. Product Reels and TikTok videos are some of the highest-performing paid and organic ad formats. We produce product reveal videos, unboxing clips, and feature-highlight videos formatted for all major social platforms." },
      { q: "Can you do product shoots for both UAE and international e-commerce markets?", a: "Yes. We deliver files formatted for UAE platforms (Noon, Namshi, Kibsons) and international platforms (Amazon, Shopify) simultaneously — understanding each platform's image requirements and using them to guide our shoot output." },
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

export function generateStaticParams() {
  return [
    // Original services
    "event-shoots", "event-video-editing", "dvcs", "reels",
    "photo-shoots", "social-media-content", "testimonial-videos",
    "ads-shooting", "aerial-drone", "corporate-films",
    // Phase 2 — vertical-specific
    "social-media-shoots", "automotive", "real-estate",
    "corporate-videography", "podcast", "youtube-content",
    "event-videography", "food", "product-shoots",
    // Phase 3 — category expansions
    "fashion-shoots", "travel-lifestyle", "tv-commercials",
    "car-commercials", "corporate-brand-films", "documentary",
    "hotel-photography", "reels-production", "brand-events",
    "pre-post-production",
  ].map((slug) => ({ slug }));
}

const SERVICE_METADATA: Record<string, { title: string; description: string; keywords: string[] }> = {
  "event-shoots": {
    title: "Event Shoots Dubai | Best Event Videographer & Photographer UAE — Backyard Studio",
    description: "Dubai's best event shoots company. Professional event photography and videography for corporate events, conferences, product launches, and weddings across all UAE emirates. 48-hour delivery guaranteed.",
    keywords: ["event shoots Dubai", "event videographer Dubai", "event photographer Dubai", "event production company Dubai", "corporate event videography UAE", "conference photographer Dubai", "event coverage UAE"],
  },
  "photo-shoots": {
    title: "Best Wedding & Photo Shoot Company in Dubai | Pre-Wedding, Editorial & Lifestyle — Backyard Studio",
    description: "Dubai's top wedding shoot company for pre-wedding photoshoots, wedding photography, editorial and lifestyle shoots. Cinematic wedding photography across Dubai, Abu Dhabi and all 7 UAE emirates.",
    keywords: ["best wedding shoot company Dubai", "top wedding shoot company Dubai", "wedding photography Dubai", "pre wedding photoshoot Dubai", "pre wedding photographers Dubai", "wedding photographer Dubai", "Indian wedding photography Dubai", "editorial photography Dubai"],
  },
  "dvcs": {
    title: "DVC Production Company Dubai | Digital Video Commercials UAE — Backyard Studio",
    description: "Top DVC production company in Dubai. High-production digital video commercials for UAE brands — scripted, filmed and delivered across all platforms. Best production company in Dubai for brand films.",
    keywords: ["DVC production Dubai", "digital video commercial UAE", "video commercial production Dubai", "brand film production Dubai", "best production company Dubai", "film production company Dubai"],
  },
  "reels": {
    title: "Instagram Reels & Short Film Production Dubai | Best Social Media Shoots UAE — Backyard Studio",
    description: "Top Instagram Reels and short film production company in Dubai. Vertical-first, algorithm-optimised content for Instagram, TikTok and YouTube Shorts. Social media shoots across all UAE.",
    keywords: ["Instagram reels production Dubai", "reels production company Dubai", "short film production Dubai", "social media content creator Dubai", "social media shoots Dubai", "reels videographer Dubai UAE"],
  },
  "social-media-content": {
    title: "Social Media Content Creation Dubai | TikTok & Instagram Shoots UAE — Backyard Studio",
    description: "Best social media content creator in Dubai. Professional TikTok, Instagram and YouTube content production — shoots, editing and strategy for UAE brands. Monthly content packages available.",
    keywords: ["social media content creator Dubai", "TikTok content creation Dubai", "Instagram content Dubai", "social media shoots Dubai", "social media production company Dubai", "TikTok videographer Dubai UAE"],
  },
  "ads-shooting": {
    title: "Ads Shooting Dubai | Best Ad Production Company UAE — Backyard Studio",
    description: "Top ads shooting company in Dubai. High-production ad content for Meta, TikTok, YouTube, OOH and broadcast campaigns across UAE. Best production company in Dubai for commercial ad shoots.",
    keywords: ["ads shooting Dubai", "ad production company Dubai", "commercial shoot Dubai", "Meta ads video production UAE", "TikTok ads Dubai", "advertising production company UAE"],
  },
  "aerial-drone": {
    title: "Aerial Drone Videography Dubai | GCAA Licensed Drone Operator UAE — Backyard Studio",
    description: "GCAA-licensed drone videography across all 7 UAE emirates. Best aerial drone production company in Dubai for events, weddings, real estate and commercial shoots. 4K cinematic drone footage.",
    keywords: ["aerial drone videography Dubai", "drone videographer Dubai", "GCAA licensed drone operator UAE", "drone filming Dubai", "drone photography UAE", "aerial videography Dubai wedding"],
  },
  "corporate-films": {
    title: "Corporate Films Dubai | Best Corporate Video Production Company UAE — Backyard Studio",
    description: "Top corporate film production company in Dubai. Brand documentaries, investor films, culture videos and corporate content for UAE businesses — delivered with cinematic quality and 48-hour turnaround.",
    keywords: ["corporate films Dubai", "corporate video production Dubai", "corporate filmmaker UAE", "brand documentary Dubai", "investor film production Dubai", "corporate video company UAE"],
  },
  "testimonial-videos": {
    title: "Testimonial Videos Dubai | Client Review Video Production UAE — Backyard Studio",
    description: "Professional testimonial video production in Dubai. Authentic, conversion-focused client testimonials for UAE brands — filmed, edited and delivered within 48 hours across all emirates.",
    keywords: ["testimonial videos Dubai", "testimonial video production Dubai", "client testimonial filming UAE", "review video production Dubai", "testimonial videographer UAE"],
  },
  "event-video-editing": {
    title: "Event Video Editing Dubai | 48-Hour Highlight Reels UAE — Backyard Studio",
    description: "Professional event video editing in Dubai. Colour-graded, sound-designed highlight reels from your raw event footage — delivered within 48 hours. Best video editing company in UAE.",
    keywords: ["event video editing Dubai", "video editing company Dubai", "highlight reel editing UAE", "event footage editing Dubai", "video post production Dubai UAE"],
  },
  "social-media-shoots": {
    title: "Social Media Videography & Photography Dubai | Content Shoots UAE — Backyard Studio",
    description: "Professional social media videography and photography in Dubai. Combined photo + video shoot days for Instagram, TikTok and YouTube — delivering stills and Reels from a single session. Best social media content studio UAE.",
    keywords: ["social media videography Dubai", "social media photography Dubai", "social media shoots Dubai UAE", "content creation shoot Dubai", "Instagram photography Dubai", "TikTok videography Dubai"],
  },
  "automotive": {
    title: "Automotive Videography & Photography Dubai | Car Shoots UAE — Backyard Studio",
    description: "Professional automotive videography and photography in Dubai. Studio and on-location car shoots, dynamic on-road filming, GCAA drone aerials, and social media content for UAE dealerships and auto brands.",
    keywords: ["automotive videography Dubai", "car photography Dubai", "automotive photography UAE", "car shoot Dubai", "dealership photography Dubai", "vehicle photography UAE"],
  },
  "real-estate": {
    title: "Real Estate Videography & Photography Dubai | Property Shoots UAE — Backyard Studio",
    description: "Top real estate videography and photography in Dubai. Property walkthroughs, architectural photography, GCAA drone aerials, and twilight shoots for UAE listings and developer campaigns. 24-hour delivery.",
    keywords: ["real estate videography Dubai", "property photography Dubai", "real estate photography UAE", "property walkthrough video Dubai", "drone real estate photography Dubai", "architectural photography UAE"],
  },
  "corporate-videography": {
    title: "Corporate Videography & Photography Dubai | Business Content UAE — Backyard Studio",
    description: "Professional corporate videography and photography in Dubai. Executive headshots, team portraits, office environment shoots, corporate event coverage and LinkedIn video content across UAE businesses.",
    keywords: ["corporate videography Dubai", "corporate photography Dubai", "executive headshots Dubai", "business photography UAE", "corporate event photography Dubai", "LinkedIn video production Dubai"],
  },
  "podcast": {
    title: "Podcast Videography Dubai | Multi-Camera Studio Podcast Production UAE — Backyard Studio",
    description: "Professional podcast videography in Dubai. Multi-camera studio podcast filming, broadcast audio, social clip cutting, and full episode editing for UAE brands, creators and media companies.",
    keywords: ["podcast videography Dubai", "podcast production Dubai", "video podcast studio Dubai", "podcast filming UAE", "multi-camera podcast Dubai", "podcast studio UAE"],
  },
  "youtube-content": {
    title: "YouTube Videography Dubai | Professional YouTube Video Production UAE — Backyard Studio",
    description: "Professional YouTube video production in Dubai. Full-service YouTube content creation for UAE brands and creators — scripting, filming, editing, thumbnails and SEO strategy. Best YouTube production company UAE.",
    keywords: ["YouTube videography Dubai", "YouTube video production Dubai", "YouTube content creation UAE", "YouTube channel production Dubai", "YouTube filming Dubai", "video production company YouTube UAE"],
  },
  "event-videography": {
    title: "Event Videography & Photography Dubai | Full-Service Event Coverage UAE — Backyard Studio",
    description: "Complete event videography and photography in Dubai. Combined photo and video coverage for corporate events, gala dinners, conferences, award ceremonies, and private events across all UAE emirates. 48-hour delivery.",
    keywords: ["event videography Dubai", "event photography Dubai", "event videographer UAE", "event photographer Dubai", "corporate event coverage UAE", "event filming Dubai"],
  },
  "food": {
    title: "Food Videography & Photography Dubai | Restaurant & F&B Content UAE — Backyard Studio",
    description: "Professional food videography and photography in Dubai. Restaurant, F&B, delivery app, and brand food content — styled, filmed and delivered for UAE hospitality brands. Best food photographer Dubai.",
    keywords: ["food videography Dubai", "food photography Dubai", "restaurant photography UAE", "food content creation Dubai", "F&B photography Dubai", "food photographer Dubai UAE"],
  },
  "product-shoots": {
    title: "Product Videography & Photography Dubai | E-Commerce & Brand Shoots UAE — Backyard Studio",
    description: "Professional product videography and photography in Dubai. E-commerce listing photos, lifestyle product shoots, 360° photography, and product reveal videos for UAE brands and online retailers.",
    keywords: ["product photography Dubai", "product videography Dubai", "e-commerce photography UAE", "product shoot Dubai", "Amazon product photography Dubai", "Noon product photography UAE"],
  },
  "fashion-shoots": {
    title: "Fashion Shoots Dubai | Luxury, Editorial & Campaign Photography UAE — Backyard Studio",
    description: "Top fashion photography and videography studio in Dubai. Luxury fashion campaigns, editorial shoots, retail lookbooks, kids fashion, and seasonal collection campaigns (SS/FW) for UAE and international brands.",
    keywords: ["fashion photography Dubai", "fashion shoot Dubai", "luxury fashion campaign Dubai", "editorial fashion photography UAE", "fashion videography Dubai", "fashion campaign UAE"],
  },
  "travel-lifestyle": {
    title: "Travel & Lifestyle Campaigns Dubai | Hotel, Resort & Tourism Content UAE — Backyard Studio",
    description: "Professional travel and lifestyle campaign production in Dubai. Hotel and resort photography, wellness shoots, city experience campaigns, and tourism content for UAE hospitality brands and tourism boards.",
    keywords: ["travel photography Dubai", "lifestyle campaign Dubai", "hotel photography UAE", "resort photography Dubai", "tourism content production UAE", "lifestyle videography Dubai"],
  },
  "tv-commercials": {
    title: "TV Commercials Dubai | Brand & Product Commercial Production UAE — Backyard Studio",
    description: "Broadcast-quality TV commercial production in Dubai. Brand commercials, digital ads, social media ad campaigns, and product commercials for UAE national broadcast and regional GCC markets.",
    keywords: ["TV commercial production Dubai", "TVC production Dubai", "brand commercial Dubai", "commercial ad production UAE", "TV advertisement Dubai", "broadcast production company Dubai"],
  },
  "car-commercials": {
    title: "Car Commercials Dubai | Automotive Brand Campaigns & Luxury Car Shoots UAE — Backyard Studio",
    description: "Cinematic car commercial production in Dubai. Automotive brand campaigns, luxury car shoots, dynamic on-road filming, and GCAA drone aerials for UAE dealerships and international auto brands.",
    keywords: ["car commercial Dubai", "automotive commercial production UAE", "luxury car photography Dubai", "automotive brand campaign Dubai", "car shoot Dubai", "vehicle commercial production UAE"],
  },
  "corporate-brand-films": {
    title: "Corporate Brand Films Dubai | Company Profile Videos & Office Branding UAE — Backyard Studio",
    description: "Professional corporate brand film production in Dubai. Company profile videos, culture documentaries, team photography, office branding shoots, and investor films for UAE businesses and organisations.",
    keywords: ["corporate brand film Dubai", "company profile video Dubai", "corporate film production UAE", "team photography Dubai", "office branding shoot UAE", "corporate documentary Dubai"],
  },
  "documentary": {
    title: "Documentary Films Dubai | Magazine Editorial & Culture Storytelling UAE — Backyard Studio",
    description: "Professional documentary film production in Dubai. Brand documentaries, magazine editorial shoots, behind-the-scenes content, and culture storytelling films for UAE brands, media, and public figures.",
    keywords: ["documentary film production Dubai", "documentary filmmaker Dubai UAE", "magazine editorial shoot Dubai", "behind the scenes filming UAE", "culture documentary Dubai", "brand documentary UAE"],
  },
  "hotel-photography": {
    title: "Hotel Photography Dubai | Resort Campaigns & Property Lifestyle Shoots UAE — Backyard Studio",
    description: "Professional hotel photography and resort campaign production in Dubai. Room photography, F&B lifestyle imagery, spa content, resort campaigns, real estate video tours, and GCAA drone aerials across UAE.",
    keywords: ["hotel photography Dubai", "resort photography UAE", "hospitality photography Dubai", "hotel campaign production UAE", "property lifestyle photography Dubai", "hotel videography UAE"],
  },
  "reels-production": {
    title: "Reels Production Dubai | TikTok Videos, Short-Form & Influencer Campaigns UAE — Backyard Studio",
    description: "Specialist Reels and short-form content production in Dubai. Instagram Reels, TikTok-style videos, YouTube Shorts, and influencer campaign shoots for UAE brands, agencies and creators.",
    keywords: ["reels production Dubai", "TikTok video production Dubai", "short form content Dubai UAE", "influencer campaign shoot Dubai", "Instagram reels production UAE", "social media video production Dubai"],
  },
  "brand-events": {
    title: "Brand Launch Events Dubai | Fashion Events, Corporate Events & Aftermovies UAE — Backyard Studio",
    description: "Full-service brand launch event coverage in Dubai. Fashion events, corporate events, concert aftermovies, and brand launch photography and video across UAE — with same-day social media delivery.",
    keywords: ["brand launch event coverage Dubai", "fashion event photography UAE", "corporate event filming Dubai", "event aftermovie Dubai", "concert filming UAE", "brand event production Dubai"],
  },
  "pre-post-production": {
    title: "Pre-Production & Post-Production Dubai | Location Scouting, Casting, Editing & Retouching UAE — Backyard Studio",
    description: "Full pre-production and post-production services in Dubai. Location scouting, model casting, styling, video editing, colour grading, photo retouching, and audio mixing for productions across UAE.",
    keywords: ["location scouting Dubai", "model casting Dubai UAE", "video editing company Dubai", "colour grading Dubai", "photo retouching UAE", "post production company Dubai"],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const custom = SERVICE_METADATA[params.slug];
  if (custom) {
    return {
      title: custom.title,
      description: custom.description,
      keywords: custom.keywords,
      alternates: { canonical: `https://www.backyardstudioofficial.com/services/${params.slug}` },
    };
  }
  const s = SERVICE_DATA[params.slug] || DEFAULT_SERVICE;
  const fmtSlug = params.slug.replace(/-/g, " ");
  return {
    title: `${s.title} in Dubai UAE | Backyard Studio Official`,
    description: `Professional ${fmtSlug} services across Dubai, Abu Dhabi and all UAE. ${s.description.substring(0, 120)}...`,
    alternates: { canonical: `https://www.backyardstudioofficial.com/services/${params.slug}` },
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
