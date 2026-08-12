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
  specialisations?: { name: string; href: string; desc: string }[];
}> = {

  /* ── HOSPITALITY ───────────────────────────────────────────────────── */
  "hospitality": {
    name: "Hospitality",
    tagline: "Hotel, Resort & Tourism Content That Fills Rooms",
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
    metaTitle: "Hospitality Video and Photography Dubai | Backyard Studio",
    metaDescription: "Hotel photography, resort video, F&B shoots and GCAA drone for 5-star UAE properties. 100+ hotels shot across all 7 emirates. Free quote in 2 hours.",
    keywords: ["hotel photography Dubai UAE","hospitality video production Dubai","resort photography UAE","hotel video tour Dubai","F&B photography Dubai","tourism content production UAE","hotel room photography Dubai","spa photography UAE"],
    intro: "The UAE's hospitality industry is among the world's most competitive — with over 900 hotels in Dubai alone, new properties opening monthly, and a guest population drawn from every continent. In this market, visual content is not decoration. It is the primary sales channel. A traveller choosing between a hotel in Dubai and a hotel in any other global city makes that decision based almost entirely on photography and video — and that decision is made in seconds, on a mobile screen, while scrolling through Booking.com, Google Hotels, or Instagram.\n\nBackyard Studio Official has produced visual content for 5-star hotels, beach resorts, boutique properties, luxury dining outlets, spas, and hospitality groups across all seven UAE emirates. Our hospitality client portfolio includes flagship Jumeirah Group properties, Saadiyat Island resorts, Ras Al Khaimah's newest luxury beach hotels, and dozens of independent boutique properties from Downtown Dubai to Hatta.\n\nHospitality content has two very different distribution requirements, and most production teams only serve one. The first is OTA optimisation — Booking.com, Expedia, Google Hotels, and Airbnb listings where your photography needs to rank well algorithmically and convert visitors who are actively comparing properties. The second is aspirational brand content — Instagram, TikTok, and YouTube where the hotel needs to make people want to go there before they've even started planning a trip. We plan and produce for both simultaneously, because the same shoot week should deliver content for every channel.\n\nGCAA-approved drone coverage extends across all seven UAE emirates, and we schedule hotel drone aerials around the property's orientation, season, and the specific brand story each property wants to tell. A beachfront resort's drone sequence is very different from a city hotel's rooftop pool aerial — and the shot list reflects that.\n\nFor F&B outlets, we understand the specific visual requirements of each channel: the precision-lit overhead shots for delivery app listings, the atmospheric evening photography for the restaurant's own Instagram, the lifestyle content showing guests enjoying the space, and the product close-up photography for menu design. Getting all of this from a single shoot requires planning, and planning is where most hotel photography projects fall short.",
    challenge: "Most hotel photography looks the same — overlit rooms, empty corridors, and pool shots taken in harsh midday sun. The problem is not the photographer; it is the brief. Generic shot lists produce generic photography. Travellers scrolling Booking.com or Instagram in seconds are remarkably good at filtering out photography that feels stock or artificial, and when the photography fails to evoke the actual experience, they scroll to the next property.\n\nFor luxury properties in particular, the gap between brand positioning and photography quality is often the most expensive problem the marketing team is not measuring. A property spending AED 500,000 per year on hotel photography that only partially reflects the guest experience is losing bookings on every channel — invisibly, because the metric being tracked is booking conversion rate, not photography quality.",
    solution: "We shoot hotels the way guests experience them: golden-hour pool sequences with warm ambient light, atmospheric restaurant evenings with real food and service in motion, spa photography that communicates calm rather than just showing facilities, and suite photography that makes the size and light feel accurate rather than distorted by ultra-wide lenses.\n\nEvery hotel production begins with a brief review — understanding the current content gaps, which channels are underperforming, and what the property's ideal guest actually looks like. We build the shot list around the guest journey rather than the floor plan, which produces content that feels like an experience preview rather than a building documentation exercise.\n\nDrone scheduling is always sunrise or the hour before sunset, because UAE light at those times is extraordinary. We file GCAA flight clearances in advance, coordinate with the hotel's operations team on guest areas and restricted zones, and deliver aerials that show the property's location context — beachfront access, proximity to landmarks, scale relative to surroundings — in a way that no ground-level photography can achieve.\n\nStandard delivery is 48 hours for photography. Video content takes 5 to 7 working days. Rush delivery is available for urgent OTA listing refreshes and PR deadlines.",
    services: [
      { label: "Hotel Photography", href: "/services/hotel-photography", desc: "Full hotel photography packages — rooms, suites, lobby, pool, spa, F&B, and exterior with drone." },
      { label: "Resort Video Tours", href: "/services/travel-lifestyle", desc: "Cinematic resort walkthrough videos for website, YouTube, and OTA listings." },
      { label: "F&B Photography & Video", href: "/services/food", desc: "Restaurant, bar, and in-room dining — styled shoots for menus, delivery apps, and social media." },
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
      { q: "How much does hotel photography cost in Dubai?", a: "Hotel photography in Dubai typically starts from AED 8,000 to 12,000 for a half-day package covering key rooms, pool, and lobby, up to AED 25,000 or more for a comprehensive 2-day shoot covering all hotel zones including suites, F&B outlets, spa, lifestyle with models, and drone aerials. We provide itemised quotes based on property size and content scope." },
      { q: "Do you include drone photography in hotel packages?", a: "Yes. All our hotel photography packages include GCAA-licensed drone aerials scheduled at golden hour for maximum visual impact. We file flight clearances in advance and coordinate with your operations team to minimise guest impact during the aerial session." },
      { q: "How quickly can you deliver hotel photography?", a: "Standard delivery is 48 to 72 hours for photography. Video editing takes 5 to 7 working days. Rush delivery is available for urgent OTA listing updates and PR deadlines — contact us to discuss timelines." },
      { q: "Can you produce content for Booking.com and Expedia as well as social media?", a: "Yes. We plan hotel shoots to produce assets for both OTA platforms and social media from the same session. OTA content requires specific technical specifications — correct file formats, minimum resolutions, and image sequencing. Social content requires different framing and aspect ratios. We plan both shot lists in parallel so the shoot delivers fully across every channel." },
      { q: "Do you shoot restaurants and F&B outlets as part of hotel packages?", a: "Yes. F&B content is typically included in comprehensive hotel photography packages. For larger restaurants and dining concepts, we often recommend a dedicated half-day F&B shoot to allow proper food styling, ambient lighting setup, and the range of menu photography that a busy restaurant outlet requires." },
      { q: "Can you produce hotel content in Arabic for Gulf market distribution?", a: "Yes. We produce hotel content in both Arabic and English — including Arabic voiceover for video content, bilingual lower-thirds, and culturally adapted marketing materials for GCC market distribution. Many UAE hospitality clients maintain separate English and Arabic content libraries, and we produce both in the same production programme." },
    ],
    relatedLocations: [{ label: "Dubai Hotels", href: "/locations/dubai" },{ label: "Abu Dhabi Resorts", href: "/locations/abu-dhabi" },{ label: "Ras Al Khaimah", href: "/locations/ras-al-khaimah" }],
    relatedPosts: [{ title: "Hotel Photography Guide UAE 2026", href: "/blog/hotel-photography-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── REAL ESTATE ───────────────────────────────────────────────────── */
  "real-estate": {
    name: "Real Estate",
    tagline: "Property Content That Sells Listings Faster",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
    metaTitle: "Real Estate Video and Photography Dubai | Backyard Studio",
    metaDescription: "Real estate photography, walkthrough video and aerial drone for UAE properties. 500+ properties shot. Bayut and Property Finder ready. Free quote.",
    keywords: ["real estate photography Dubai","property photography UAE","real estate videography Dubai","property video tour Dubai","real estate drone photography UAE","developer marketing video Dubai"],
    intro: "Dubai's real estate market is one of the most transaction-intensive property markets in the world — with record-breaking volumes in 2023, 2024, and 2025 driven by foreign investment, golden visa demand, and a global reputation as a safe store of value. Properties are bought by buyers researching from Singapore, London, Moscow, Mumbai, and Lagos — people who will make an AED 2 million to AED 20 million purchase decision largely based on how the property looks online.\n\nBackyard Studio Official is the production partner for Dubai's leading real estate agencies, off-plan developers, and property marketing teams. We have produced content for individual listings, boutique agencies, tier-1 developers with 100+ unit launches, and property marketing campaigns that have been deployed across GCC, European, South Asian, and Chinese investor markets simultaneously.\n\nReal estate photography in Dubai requires a specific technical approach that many generalist photographers underdeliver on. Interior photography in UAE properties needs to handle extreme contrasts — the intense desert sun through floor-to-ceiling glass creating dynamic range challenges that require proper HDR blending and window pull techniques. The photography must make spaces feel larger than they are without misrepresenting them, because misrepresentation in a market where buyers fly from abroad to view leads to wasted sales trips and broken trust.\n\nFor off-plan properties — which represent a large portion of the Dubai market — the photography and video challenge is different again. There may be no completed property to shoot. The content has to communicate lifestyle, location, and quality through renders, show apartments, community overviews, and brand films. This is high-stakes production work, because an AED 2 billion launch's marketing success depends on whether buyers feel confident enough to sign an SPA on an unbuilt apartment.\n\nWe have covered both. Whether it's same-day photography for a secondary market listing that needs to go live on Bayut before the competing agency lists a similar unit, or a 2-week content production programme for a major off-plan launch with international investor roadshows — the core discipline is the same: make the property look exactly as it should look, on every platform where buyers are looking.",
    challenge: "With thousands of listings competing on Bayut, Property Finder, and Instagram, poor-quality photography means your property gets scrolled past regardless of pricing or location. The scroll speed on property listing pages means you have a fraction of a second to earn a click — and phone photography, poorly lit interiors, and distorted ultra-wide shots are invisible barriers that cost deals you will never know you lost.\n\nFor developers specifically, the challenge is building buyer confidence in an off-plan product that doesn't exist yet — in a market that is simultaneously the most international and most sophisticated real estate audience in the region. Generic renders and standard render walkthroughs are no longer enough. Buyers have seen too many projects that delivered differently from the marketing and they are sceptical. The content that converts now has to feel tangible, specific, and honest.",
    solution: "We shoot every property to maximise perceived space, accurate natural light, and lifestyle appeal — using HDR blending techniques for high-contrast UAE interiors, wide but undistorted framing that shows true proportions, and staging guidance that makes spaces feel lived-in rather than empty.\n\nOur aerial team adds location context and community overviews that give buyers the geographical confidence to enquire. For properties near Downtown, the Marina, or Yas Island — proximity to landmarks is a core part of the selling proposition, and aerial photography communicates that more effectively than any written description.\n\nFor off-plan developer content, we produce the full marketing suite — from render-integrated walkthrough videos and show apartment photography through to investor briefing films, community lifestyle content, and the social media campaign assets that drive traffic to the project microsite. Developer clients on retainer programmes get guaranteed scheduling priority throughout the build cycle.",
    services: [
      { label: "Property Photography", href: "/services/real-estate", desc: "Interior, exterior, and lifestyle photography for residential, commercial, and off-plan properties." },
      { label: "Walkthrough Videos", href: "/services/real-estate", desc: "Smooth stabilised walkthrough tours with voiceover and music — delivered in 48h." },
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
      { q: "How much does real estate photography cost in Dubai?", a: "Real estate photography starts from AED 1,200 for a standard apartment, AED 2,500 to 4,000 for villas, and AED 5,000 or more for full property marketing packages including drone and walkthrough video. Developer content programmes are scoped on a per-project basis — contact us with your launch timeline and we will provide a full programme quote." },
      { q: "How quickly can you deliver real estate photos?", a: "Standard delivery is 24 to 48 hours. We offer same-day rush delivery for urgent listings at an additional fee — useful when a competing agency has a similar property going live. All delivery timelines are contractually guaranteed." },
      { q: "Can you shoot properties across all UAE emirates?", a: "Yes. We cover all 7 UAE emirates with our own crew and GCAA-licensed aerial coverage. We shoot regularly in Ras Al Khaimah, Fujairah, Ajman, and UAQ as well as the primary Dubai and Abu Dhabi markets. No travel premium for UAE locations." },
      { q: "Do you produce content for off-plan property launches?", a: "Yes. Off-plan developer content is a core part of our real estate production work. We produce render-integrated walkthrough videos, show apartment photography programmes, community lifestyle content, and investor event films. We work with developers throughout the build cycle — from launch to handover — providing consistent content as the project progresses." },
      { q: "Can you optimise photography for Bayut and Property Finder?", a: "Yes. We understand the specific image requirements and visual best practices that maximise listing performance on Bayut, Property Finder, and Rightmove Overseas. Main listing images, secondary images, and virtual tour sequences each have different requirements and we plan and deliver for all of them." },
      // Partner reference. Editorial and topical: distressed and off-plan resale
      // stock is a real segment of the Dubai market our property clients work in,
      // and the question below is one agents actually ask. Placed in body content
      // rather than a sitewide footer on purpose — a relevant in-context link is
      // what search engines and LLMs read as a genuine relationship, whereas a
      // boilerplate link repeated across 400+ pages reads as an exchange. Keep it
      // to one link per topic and only where it genuinely helps the reader.
      { q: "Do you shoot distressed, bank-owned or off-plan resale properties?", a: "Yes. Distressed and motivated-seller stock is a real segment of the Dubai market and it needs faster, leaner content than a standard listing — usually a same-day photo set and a short walkthrough rather than a full production, because these units move quickly and the marketing window is short. Specialist portals such as Distress Property Finder (distresspropertyfinder.com) track this end of the market, and agents working those listings typically want 24-hour turnaround. We price these as standard apartment or villa shoots with rush delivery rather than as a bespoke package." },
    ],
    relatedLocations: [{ label: "Dubai Properties", href: "/locations/dubai" },{ label: "Abu Dhabi Properties", href: "/locations/abu-dhabi" },{ label: "Sharjah Properties", href: "/locations/sharjah" }],
    relatedPosts: [{ title: "Real Estate Photography Guide Dubai 2026", href: "/blog/real-estate-photography-dubai-2026" },{ title: "Best Production Companies in Dubai 2026", href: "/blog/best-production-companies-dubai-2026" }],
  },

  /* ── FASHION ───────────────────────────────────────────────────────── */
  "fashion": {
    name: "Fashion",
    tagline: "Campaign-Quality Fashion Content in Dubai",
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80",
    metaTitle: "Fashion Photography and Video Dubai | Backyard Studio",
    metaDescription: "Fashion photography and video for UAE brands. Editorial, lookbooks, campaign films, modest fashion and social content. Dubai and GCC. Free quote.",
    keywords: ["fashion photography Dubai","editorial photography Dubai","lookbook photography UAE","fashion campaign Dubai","kids fashion photography Dubai","model photography Dubai","abaya fashion photography Dubai"],
    intro: "Dubai has rapidly established itself as one of the Middle East and Indian Ocean region's most significant fashion production destinations. The combination of extraordinary light quality for ten months of the year, world-class locations from desert dunes to Burj Khalifa backdrops, and an extremely diverse population provides fashion brands with production assets that would require flights to four separate countries to replicate elsewhere.\n\nBackyard Studio Official produces fashion content for homegrown UAE designers, GCC fashion brands, international labels entering the Gulf market, multi-brand retailers, modest fashion specialists, kids fashion brands, and e-commerce fashion platforms. Our fashion team includes directors of photography, stylists, and art directors who work specifically in the fashion vertical rather than generalists who occasionally shoot clothing.\n\nThe UAE fashion market has a specific set of production requirements that distinguish it from European or American fashion markets. Modest fashion — abayas, modest dresses, hijab-compatible styling — is a commercially significant category that requires both cultural sensitivity and genuine creative skill. Our team has produced modest fashion campaigns for Gulf brands that have been distributed across the GCC, Turkey, and Southeast Asian markets. We understand the visual language that speaks authentically to this audience.\n\nSeasonal timing is another distinct consideration in UAE fashion. Ramadan is the region's most commercially important fashion period — the equivalent of Christmas for fashion retail in the Gulf — and content production for Ramadan campaigns typically begins 8 to 12 weeks before the month starts. Eid Al Fitr, Eid Al Adha, and UAE National Day are similarly important, each with specific colour palettes, visual vocabulary, and distribution requirements.\n\nFor international brands entering UAE, we produce market adaptation content — taking existing brand guidelines and visual identity and producing UAE-specific campaigns that speak to the local consumer while maintaining global brand consistency. This is nuanced work that requires understanding both the international brand standards and the specific tastes of UAE fashion consumers.",
    challenge: "Fashion content in the UAE must navigate cultural nuance, seasonal timing, and a market where a highly visual audience distinguishes brand-quality photography from amateur work at a glance. Getting modest fashion photography wrong — either by being culturally insensitive or by producing content that is visually generic — costs both brand equity and commercial sales. Getting seasonal timing wrong — producing Ramadan content that ships after Ramadan, or missing the Eid window — means an entire category's production budget generates no return.",
    solution: "We bring a full creative team to every fashion shoot — creative direction, art direction, styling coordination, professional models who match the brand's target demographic, and post-production colour grading calibrated to the brand's existing visual identity.\n\nFor modest fashion, we have a specific creative approach built over years of producing content in this category. The visual brief is always developed in close consultation with the brand to ensure the content is both commercially effective and culturally appropriate for its intended distribution markets.\n\nWe build seasonal content calendars for retained fashion clients — mapping the production schedule to the UAE retail calendar so content is ready ahead of every key commercial moment. For one-off campaign productions, we provide clear timelines from brief to delivery and honour them contractually.",
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
    metaTitle: "Food Photography and F&B Video Dubai | Backyard Studio",
    metaDescription: "Food photography and F&B video for Dubai restaurants and FMCG brands. Talabat and Deliveroo optimised. 150+ F&B clients. Free quote in 2 hours.",
    keywords: ["food photography Dubai","restaurant photography Dubai","menu photography UAE","F&B photography Dubai","food delivery app photography UAE","FMCG product photography Dubai"],
    intro: "Dubai's F&B market is one of the most competitive in the world — with over 13,000 food and beverage outlets across the city, global restaurant brands opening their regional flagships in Dubai, and a diner population that simultaneously follows Michelin-starred trends and leads the region on delivery app adoption. Backyard Studio Official has produced food and beverage content for 150+ UAE restaurants, FMCG brands, hospitality groups, and delivery-first food concepts.\n\nFood photography is the most commercially direct form of production work we do. A restaurant that updates its Talabat or Deliveroo listing photography sees measurable impact on orders within days. The connection between image quality and revenue is immediate, trackable, and significant — which is why food photography is among the highest-ROI production investments available to F&B operators in UAE.\n\nThe UAE F&B content market requires two distinct production competencies. The first is platform-optimised delivery photography — Talabat, Deliveroo, Noon Food, and Careem have specific image specifications, aspect ratios, and visual conventions. Dishes that photograph well in a restaurant setting need different styling and lighting to perform on delivery listing pages where thumbnail size is small and the competition per scroll is intense. We understand both.\n\nThe second is brand content — Instagram, TikTok, and restaurant websites where the goal is making people want to visit, not just order in. This is atmospheric photography and video: the right light, the right styling, the right ambient detail that communicates the experience of being in the restaurant rather than just showing the food on a white background.\n\nFor FMCG and packaged food brands, the production requirements are different again — with Amazon UAE, Noon, and Carrefour online each having specific main image requirements, A+ content formats, and lifestyle photography conventions that determine listing visibility and conversion.",
    challenge: "Bad food photography kills appetite and booking conversions instantly. A dish that looks unappetising in a Talabat listing — regardless of how good the food tastes — will lose orders to a competing restaurant with better photography even at a higher price point. In a market where customers decide whether to order based on a thumbnail they look at for under a second, photography is the most directly commercial element of the F&B marketing stack.\n\nFor restaurant brands with multiple outlets, the challenge compounds: inconsistent photography across branches creates a brand quality perception gap that undermines the marketing investment in every other channel. A national F&B brand should look consistent whether a customer finds them on Talabat Dubai or Talabat Abu Dhabi.",
    solution: "We shoot food the way it should be experienced — proper food styling to make dishes look their best, precise lighting calibrated to each dish's colour profile, and colour temperature management that makes food look warm, fresh, and appetising on every screen type.\n\nFor delivery platform photography, we produce to platform specifications — the correct file format, aspect ratio, resolution, and visual style for each platform's listing requirements. For brand and social content, we produce atmospheric photography and video that communicates the restaurant's personality, not just its menu.\n\nFor FMCG brands, we approach product photography with a conversion focus — understanding what drives clicks on Amazon UAE and Noon versus what performs on Instagram and what works in print retail environments, and planning the shoot to deliver all three from the same session.",
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
    metaTitle: "Corporate Video Production Dubai | Backyard Studio",
    metaDescription: "Corporate video and photography for UAE businesses. Company profile films, exec portraits, office shoots, testimonials and internal comms. Free quote.",
    keywords: ["corporate video production Dubai","corporate photography Dubai UAE","company profile film Dubai","executive photography Dubai","office photography UAE","LinkedIn video production UAE"],
    intro: "In UAE's business-first market, corporate content is a direct commercial asset — not a cost of doing business. How a company looks on its website, LinkedIn, and in its pitch presentations directly affects whether enterprise clients sign contracts, whether top talent accepts offers, and whether investors take meetings. Backyard Studio Official produces corporate content for multinationals, government entities, ADGM and DIFC-registered firms, SMEs, and startups across all sectors and industries.\n\nThe UAE corporate market has specific content demands that differ from European and North American markets. LinkedIn is the dominant professional social platform in this region, and executive thought leadership video is a primary lead generation tool for B2B services firms. Company profile films are routinely screened at client pitch meetings and government tender presentations. Executive photography is used in media profiles, government reports, and regulatory filings where visual quality signals organisational credibility.\n\nBackyard Studio Official has produced corporate content for some of UAE's most prominent companies — ADGM-registered financial services firms, Dubai government entities, healthcare groups, technology companies, and professional services firms operating across the GCC. Our corporate client relationships tend to be long-term, because corporate content requirements are continuous rather than one-off.\n\nThe two largest corporate content requirements in UAE are company profile films and executive photography — but they require very different production approaches. Company profile films need a storytelling architecture: why did the founders start the company, what problem are they solving, what makes the approach different, and what does the future look like? Generic corporate video that answers none of these questions is indistinguishable from every other company in the market.\n\nExecutive photography needs to balance professional authority with human warmth — particularly in a market where personal relationships drive business decisions and LinkedIn profile photos are scrutinised more carefully than CVs. We have developed specific approaches for executive photography that produce images people are genuinely proud to use rather than reluctantly settling for.",
    challenge: "Generic corporate content is forgettable — and forgettable corporate content means lost pitches, weaker hiring, and lower investor confidence. Most corporate video fails because it starts from a feature list rather than a story: the company was founded in this year, has this many employees, serves these markets, and these are our values. No one in the audience remembers it, because there is nothing in it to remember.\n\nFor executive photography specifically, the failure mode is equally predictable: a stiff headshot against a grey or white background that communicates nothing about the person, the company culture, or the professional environment. In a market where executives make sales calls, appear in board presentations, and represent their firms in government meetings, photography that undersells the person undersells the organisation.",
    solution: "We bring a cinematic approach to corporate content — treating every company profile film as a brand story worth watching rather than a compliance document worth filing. The script process begins with understanding what the company is actually trying to communicate, to whom, and what action that audience should take after watching.\n\nFor executive photography, we shoot in the person's real working environment rather than a neutral studio backdrop — because context communicates far more about authority and credibility than a blank wall. Our executive photography sessions are planned around the individual's schedule and comfort level, because the best executive photography comes from people who feel at ease rather than performing for a camera.\n\nFor teams and offices, we document corporate environments the way a documentary photographer would — finding authentic moments, real human interactions, and the specific details of a workspace that communicate culture rather than staging empty desks for corporate aesthetics.",
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
    metaTitle: "Sports Video Production Dubai & UAE | Event Coverage",
    metaDescription: "Sports video production and photography for UAE events, teams and athletes. Match coverage, same-day highlights, sponsor content and multi-format delivery.",
    keywords: ["sports video production Dubai","sports photography UAE","sports event coverage Dubai","athlete photography UAE","sports highlight reel Dubai","Formula 1 video production UAE","football event coverage Dubai","cricket photography UAE","horse racing photography Dubai","sports drone filming UAE","padel video Dubai","MMA event coverage UAE"],
    intro: "The UAE is one of the world's great sporting destinations. Yas Marina hosts Formula 1, Meydan hosts the Dubai World Cup — the richest horse race on the planet — and Dubai's calendar runs wall-to-wall with cricket, football, tennis, MMA, rugby, padel, cycling, and marathon events from October through April. For sports federations, clubs, sponsors, and lifestyle brands, the volume of production opportunity in UAE is extraordinary. The question is whether you can capture it fast enough to matter.\n\nBackyard Studio Official has produced sports content across every major sport in the Emirates. We cover live events with multi-camera rigs, deliver same-day social highlights before audiences scroll past, and produce season-long athlete branding content for UAE's most followed sports personalities. GCAA-approved drone coverage extends across outdoor stadiums, race venues, and sporting complexes across all seven emirates.\n\nThe sports content market in UAE is growing rapidly because the audience is growing. UAE residents follow international sports as closely as any market in the world, and local leagues — particularly the Arabian Gulf League, UAE Pro League cricket, and the growing padel circuit — are building serious fan bases that consume content daily. Brands sponsoring events want activation content that works on Instagram, TikTok, and YouTube, not just logo placement on a backdrop.\n\nWe work with clubs, federations, event organisers, and sports brands on both one-off tournament productions and long-term seasonal arrangements. Standing partnerships get priority scheduling, dedicated crew, and reduced per-event rates.",
    challenge: "Sports content has the shortest shelf life of any content category, but the highest virality potential. A 90-second highlight reel posted within hours of a match can reach millions. A reel posted two days later reaches almost no one. The production challenge is not quality alone — it is speed, reliability, and the organisational ability to be in the right place with the right equipment on event day, every time, without exception.",
    solution: "We build the production setup around the event, not the other way around. Multi-camera rigs adapted to the venue, drone clearance filed in advance, social editor on standby during the event, and a delivery pipeline that gets highlights to your social team before the crowd has left the car park. We have covered events at Yas Marina, Meydan, Dubai International Stadium, Coca-Cola Arena, the Sevens Complex, and dozens of padel clubs, sports academies, and outdoor event venues across UAE.",
    services: [
      { label: "Event Coverage — Multi-Camera", href: "/services/event-videography", desc: "Broadcast-ready multi-camera coverage of matches, races, tournaments, and sporting events across UAE." },
      { label: "Athlete Branding & Photography", href: "/services/photo-shoots", desc: "Athlete profile shoots, action photography, sponsorship content, and personal brand campaigns." },
      { label: "Highlight Reels & Match Films", href: "/services/event-video-editing", desc: "Same-day social highlights and full match/event films delivered within 24 hours." },
      { label: "Sponsor Activation Content", href: "/services/dvcs", desc: "Brand activation films, sponsor logo integration, and co-branded content for event sponsors." },
      { label: "Social Media Sports Reels", href: "/services/reels-production", desc: "TikTok, Instagram Reels and YouTube Shorts — vertical-optimised sports content for fan engagement." },
    ],
    results: [
      { stat: "48h", label: "Full event film delivery after shoot" },
      { stat: "Same Day", label: "Social highlight reels available" },
      { stat: "4K", label: "All sports content delivered in 4K" },
      { stat: "GCAA", label: "Licensed drone for all outdoor venues" },
    ],
    caseStudy: { title: "UAE Pro League Season Coverage", client: "UAE Football Club, Arabian Gulf League", result: "Match highlight reels averaged 1.8M views; sponsor reels sold out for following season", body: "A UAE Pro League club engaged us for season-long match coverage after their in-house team struggled with production quality and delivery speed. We deployed a 4-camera live rig, pitch-side photographer, and GCAA drone for aerial stadium shots across 18 home fixtures.\n\nThe same-day highlight reel format — 90 seconds of the best moments, vertical-cut for Instagram and TikTok — averaged 1.8M views per match by the end of the season. Sponsor reels (4 per match, one per main sponsor) were delivered within 6 hours of the final whistle, giving sponsors content their own channels could post the same evening.\n\nBy mid-season, the club's social following had grown 34% and all sponsor inventory for the following season had been sold 3 months before the start, partly because sponsor brands could demonstrate the content reach to their own stakeholders." },
    faqs: [
      { q: "Do you cover Formula 1 at Abu Dhabi Grand Prix?", a: "Yes. We provide accredited media production services for F1-adjacent events, sponsor activations, and fan zone coverage at Yas Marina Circuit. Full circuit access filming requires Formula 1 media accreditation which we assist clients in obtaining." },
      { q: "Can you cover cricket matches at Dubai and Abu Dhabi international stadiums?", a: "Yes. We have covered ICC tournaments and franchise cricket events at Dubai International Cricket Stadium and Zayed Cricket Stadium, Abu Dhabi. We understand venue media access requirements and coordinate accordingly." },
      { q: "Do you provide same-day highlight reels for sports events?", a: "Yes. Our standard sports event package includes a same-day 60 to 90 second social highlight reel delivered before midnight on event day, plus a full match or event film within 48 hours." },
      { q: "Can you film at Meydan Racecourse for horse racing events?", a: "Yes. We have produced content at Meydan for racing events including Dubai World Cup season fixtures. We understand Meydan's media access protocols and can coordinate full event coverage." },
      { q: "Do you cover padel tournaments in Dubai?", a: "Yes. Padel is one of the fastest-growing sports in UAE and we cover padel tournaments regularly across Dubai, Abu Dhabi, and Ras Al Khaimah. Drone flights are GCAA-cleared for outdoor padel venues and deliver same-day social cuts, sponsor reels, and full tournament films. See our padel production page for full detail on what we deliver." },
      { q: "Can you produce athlete personal branding content?", a: "Yes. We produce personal branding content for professional and semi-professional athletes in UAE — including profile photography, short-form social content, sponsor activation reels, and season highlight compilations. Most athlete content packages run on a monthly retainer basis." },
      { q: "What sports event sizes can you handle?", a: "We cover events from a single padel tournament with 30 players to multi-day international events with thousands of athletes. Our smallest setup is one operator with a camera and drone. Our largest deployments have been 6 operators, 2 drone pilots, and a dedicated on-site editor. We scale the crew to the event." },
    ],
    relatedLocations: [{ label: "Dubai Sports Venues", href: "/locations/dubai" },{ label: "Abu Dhabi Yas Island", href: "/locations/abu-dhabi" },{ label: "Sharjah Stadium", href: "/locations/sharjah" }],
    relatedPosts: [{ title: "Event Videography Guide Dubai 2026", href: "/blog/event-photography-dubai-2026" },{ title: "Drone Filming Rules UAE 2026", href: "/blog/drone-videography-rules-dubai-2026" }],
    specialisations: [
      { name: "Padel Tournament Production", href: "/industries/sports/padel", desc: "Match coverage, drone aerials, sponsor reels and same-day social cuts for padel events across UAE." },
      { name: "Cycling Event Coverage", href: "/industries/sports/cycling", desc: "Multi-camera cycling event production with drone, finish line photography and social content." },
      { name: "Football & Team Sports", href: "/industries/sports/football", desc: "Match coverage, highlight reels, athlete branding and sponsor activation content." },
    ],
  },

  /* ── AUTOMOTIVE ────────────────────────────────────────────────────── */
  "automotive": {
    name: "Automotive",
    tagline: "Car Content Built for Dubai's Roads",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
    metaTitle: "Automotive Video and Photography Dubai | Backyard Studio",
    metaDescription: "Automotive video and car photography in Dubai. Commercials, dealership shoots, dynamic on-road filming and drone aerials. GCAA-approved drone service available. Free quote.",
    keywords: ["automotive video production Dubai","car photography Dubai UAE","car commercial film UAE","dealership photography Dubai","automotive brand content UAE","car launch video Dubai","luxury car photography UAE","EV brand film Dubai","automotive drone filming UAE","car commercial Dubai"],
    intro: "Dubai is one of the world's great automotive markets — not just in volume, but in the intensity of car culture that runs through everyday life here. The UAE has more Lamborghinis, Ferraris, and Rolls-Royces per capita than almost any market on earth. Dealerships compete aggressively for high-net-worth buyers who research entirely through visual content before setting foot in a showroom. The bar for automotive production in this market is the highest in the region.\n\nBackyard Studio Official has produced automotive content for international car brands, UAE dealerships, automotive media platforms, and private collectors — ranging from cinematic launch commercials with full production crew to ongoing dealership photography programmes. Our automotive team includes operators who live and breathe car culture, which shows in the footage.\n\nThe UAE's landscape gives us locations that no other market can match for automotive production. Al Qudra desert road at golden hour. Sheikh Zayed Road at 3am with the city lights reflected on the tarmac. Hatta mountain switchbacks with red rock formations as the backdrop. Jumeirah Beach Road along the coastline at sunrise. Dubai Design District for architectural precision shots. We know every location, the exact angle to shoot from, and what time of day the light is perfect — because we have shot at all of them dozens of times.\n\nBeyond location, automotive production in UAE needs to handle two very different output requirements. The first is broadcast and platform commercial content — long-form films shot on cinema cameras, graded precisely to match global brand standards, and delivered ready for TV, YouTube pre-roll, and OOH screens. The second is social-first content — high-impact 15 to 30 second clips, vertical-cut for Instagram Reels and TikTok, with the kind of fast edit pace and music selection that generates shares in this market.\n\nWe produce both. The same crew that shoots a full automotive commercial for international broadcast can produce a week's worth of social content on the same shoot day — because planning the shot list properly in advance means nothing goes to waste.\n\nGCAA-approved drone coverage extends to every UAE location we use for automotive production. Desert dune aerials, highway tracking shots, rooftop car park sequences, and mountain flyovers — all cleared through the appropriate authorities, zero compliance risk for clients.",
    challenge: "UAE car buyers are among the world's most visually sophisticated. The market is saturated with extraordinary cars and most people encountered something spectacular on the road yesterday — so content that doesn't match that standard gets ignored. Phone footage or generic studio-lit shots won't move metal in this market. Buyers expect cinematic quality comparable to what they see from global brands on YouTube, applied to the specific UAE locations they recognise and aspire to.\n\nFor dealerships, the additional challenge is volume. A busy Dubai dealership may have 50 to 100 new stock vehicles requiring photography every month, plus seasonal campaign content, new model launches, used car listings, and ongoing social media production. Most in-house teams can't sustain that output at the quality level the market demands, and briefing multiple agencies creates inconsistency.\n\nFor international brands entering UAE, the challenge is adapting global brand guidelines to the local market — maintaining the visual identity while using locations and visual language that resonates with UAE buyers specifically.",
    solution: "We build automotive production around the UAE market's specific requirements — not a generic international template. That means knowing the locations, understanding the buyer psychology, and having the production infrastructure to deliver both one-off launch campaigns and ongoing dealership programmes without quality variation.\n\nFor commercial productions, we bring cinema-grade cameras (RED and Sony Venice), precision rigging systems, GCAA-cleared drone coverage, and a directing approach built around making cars look extraordinary in natural environments rather than controlled studio settings. We shoot at golden hour and during the blue hour before sunrise, because that is when the UAE landscape transforms.\n\nFor dealership programmes, we run systematic approaches — building standard operating procedures for stock photography that ensures every vehicle looks consistent, every listing image is correctly lit and composed, and delivery timelines are met regardless of volume. Clients on monthly dealership retainers get priority scheduling, dedicated crew, and guaranteed turnaround.\n\nFor social-first automotive content, we plan vertical cuts, horizontal edits, and static photography from a single shoot day, so one production session generates content across every channel format your team needs for the next 30 days.",
    services: [
      { label: "Car Commercial Films", href: "/services/dvcs", desc: "Cinematic car commercials for broadcast, YouTube, and social media — from AED 8,000." },
      { label: "Dealership Photography", href: "/services/photo-shoots", desc: "Showroom photography, stock photography, and dealership campaign shoots." },
      { label: "Dynamic On-Road Filming", href: "/services/automotive", desc: "Moving car shots, pursuit vehicles, speed ramps, and location driving sequences." },
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
      { q: "How much does a car commercial cost in Dubai?", a: "Automotive video production in Dubai starts from AED 8,000 for a 1-day social-first shoot with a 60-second hero video, AED 15,000 to 35,000 for a full automotive commercial with multiple locations and drone, and AED 35,000+ for broadcast-standard brand films with professional talent, multiple camera units, and post-production colour grade." },
      { q: "What are the best locations for car shoots in Dubai?", a: "Our most-used automotive locations are Al Qudra desert road for golden hour dune sequences, Sheikh Zayed Road for night city sequences with city light reflections on wet tarmac, Hatta mountain road for switchback driving shots, Dubai Design District for architectural precision, and Jumeirah Beach Road for coastal lifestyle shots. We know the exact permit requirements and optimal shooting times for each." },
      { q: "Can you film moving car shots on UAE roads?", a: "Yes. We have the equipment and experience for moving car sequences including pursuit vehicle setups, magnetic camera rigging, stabilised gimbal shots from alongside moving vehicles, and low-angle tracking shots on permitted UAE road locations. All moving car shoots are conducted with appropriate safety setup." },
      { q: "Do you produce content for car dealerships on an ongoing basis?", a: "Yes. We run monthly dealership photography and content programmes for several UAE dealerships covering stock photography, new model launch content, and social media production. Dealership retainer clients get priority scheduling, dedicated crew, and a guaranteed 24-hour photography turnaround. Contact us to discuss a dealership programme for your brand." },
      { q: "Can you produce content for electric vehicles and new energy brands?", a: "Yes. We have produced brand content for EV brands entering the UAE market and understand the specific visual language that communicates innovation, sustainability credentials, and technological premium. EV content requires different location choices and lighting approaches compared to traditional petrol performance — we plan these shoots differently from the start." },
      { q: "Do you shoot car content outside Dubai — Abu Dhabi, RAK, Fujairah?", a: "Yes. Some of our best automotive locations are outside Dubai — the Fujairah mountain roads with ocean in the background, Abu Dhabi's Yas Island circuit complex, and Ras Al Khaimah's northern mountain routes. We cover all seven emirates with no travel premium for locations within UAE." },
      { q: "How long does automotive post-production take?", a: "Social Reels are typically delivered within 24 hours of shoot completion. A 60-second commercial edit takes 3 to 5 working days. Broadcast-standard productions with full colour grade and sound mix take 5 to 10 working days. We provide clear timelines at briefing stage and honour them contractually." },
    ],
    relatedLocations: [{ label: "Dubai Car Shoots", href: "/locations/dubai" },{ label: "Abu Dhabi Automotive", href: "/locations/abu-dhabi" },{ label: "Hatta Mountain Road", href: "/locations/dubai" }],
    relatedPosts: [{ title: "Car Commercial Production Dubai 2026", href: "/blog/car-commercial-dubai-2026" },{ title: "Drone Photography Guide UAE 2026", href: "/blog/drone-photography-dubai-2026" }],
    specialisations: [
      { name: "Car Launch Campaigns", href: "/industries/automotive/car-launch", desc: "Full launch production for new model reveals — from commercial films to dealership events and social campaigns." },
      { name: "Dealership Photography", href: "/industries/automotive/dealership", desc: "Ongoing stock photography and marketing content for UAE car dealerships. Monthly programmes available." },
      { name: "Automotive Social Reels", href: "/industries/automotive/auto-reels", desc: "High-impact Instagram Reels and TikTok content for car brands, dealerships and collectors." },
    ],
  },

  /* ── HEALTHCARE ────────────────────────────────────────────────────── */
  "healthcare": {
    name: "Healthcare",
    tagline: "Medical Content That Builds Patient Trust",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80",
    metaTitle: "Healthcare Video Production Dubai | Backyard Studio",
    metaDescription: "Healthcare photography and video for UAE clinics and hospitals. Doctor profiles, patient testimonials and medical tourism campaigns. Free quote.",
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
  "tech": {
    name: "Technology",
    tagline: "Tech Content That Converts — Dubai's Startup & Enterprise Scene",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
    metaTitle: "Tech Company Video and Photography Dubai | Backyard Studio",
    metaDescription: "Tech and SaaS video production for UAE startups. Product demos, brand films, GITEX coverage and investor pitch videos. Free quote in 2 hours.",
    keywords: ["technology video production Dubai","startup brand film UAE","product demo video Dubai","app launch content UAE","tech event coverage Dubai","GITEX video production","investor pitch video UAE","SaaS explainer video Dubai","AI brand content UAE","fintech video production Dubai"],
    intro: "Dubai has become the Middle East's most ambitious technology hub. GITEX Global — held annually at DWTC — is now the world's largest technology event. Dubai Internet City hosts regional headquarters for Amazon, Microsoft, Oracle, SAP, and hundreds of scaleups. DIFC's FinTech Hive has produced some of the region's most funded fintech startups. The D33 economic agenda has directed billions of dirhams toward AI, blockchain, and smart city initiatives. UAE's technology sector in 2026 is serious money, serious ambition, and a market that expects content to match.\n\nBackyard Studio Official produces technology content for startups at seed stage through to enterprise brands with global distribution — across SaaS, fintech, healthtech, proptech, AI, logistics, and government technology. Our tech content team includes producers who have worked directly in the startup ecosystem and understand what investors want to see, what users need to feel confident downloading an app, and what procurement teams need before signing an enterprise contract.\n\nTechnology content in UAE has to work across multiple stakeholder audiences simultaneously. The same brand needs content that speaks to sophisticated regional VCs, enterprise procurement managers across the Gulf, consumer app users downloading from the UAE App Store, and potential talent choosing between Riyadh, Dubai, and Singapore for their next role. Each audience has different concerns, different vocabulary, and different content consumption habits. We build content strategies that serve all of them from a single production programme rather than four separate briefs.\n\nThe GITEX calendar creates a specific production rhythm for UAE tech brands. The weeks before GITEX are the most important content window of the year — booth reveal films, product launch videos, investor meeting preparation, and social media content that builds event-day buzz. We have produced GITEX content for brands across every vertical, and we understand the specific logistical challenges of DWTC as a filming environment.\n\nFor startups preparing for fundraising, the content requirements are different again. Investor decks now routinely embed video. A well-produced 90-second company overview can be the difference between a warm intro from an LP and a cold pass. We have worked with founders specifically on Series A and Series B preparation content, and we measure our success by whether deals close.",
    challenge: "Technology is the hardest category to communicate visually. Screens, keyboards, and office shots convey nothing — but most tech content defaults to exactly that. The failure mode is showing the product instead of the problem it solves, the interface instead of the human who benefits, the feature list instead of the emotional relief of a problem going away.\n\nIn UAE's technology market, the stakes are high. A weak launch video for an app launch can kill user acquisition momentum at exactly the moment when early traction matters most. A generic company overview film sent to regional VCs before a fundraise signals that the brand doesn't understand its own story — the worst possible signal at the worst possible time.\n\nThe GITEX context adds another layer. At the world's largest technology event, every brand is competing for attention simultaneously. Booth content, social content, and live event coverage all need to cut through in a venue where visual noise is at maximum intensity.",
    solution: "We approach tech content with a storytelling framework built around the human transformation rather than the product itself. Every piece starts with the problem — specific, concrete, felt — and ends with the change the technology enables. Features are evidence, not the story.\n\nFor startup and investor content, we work closely with founders before production begins — understanding the investment thesis, the market sizing argument, the competitive positioning, and the emotional narrative behind why the founders started the company. That preparation means the filmed material contains the substance investors actually care about, not just good production values.\n\nFor enterprise tech brands, we produce content that matches the visual quality of global tech brand campaigns while using UAE market-specific locations, faces, and reference points that speak to Gulf buyers directly. Regional procurement teams are sophisticated — they notice when content was produced in North America and repurposed for MENA.\n\nFor GITEX and events, we plan the production schedule around the event calendar — pre-event launch content, live event coverage with same-day social cuts, and post-event recap films — so the content deployment follows the audience attention curve rather than chasing it.",
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
      { q: "Can you produce content for GITEX Global?", a: "Yes. We have produced event coverage, booth content, and conference films for brands exhibiting at GITEX Global and GITEX Expand North Star. We understand the DWTC venue requirements, filming access procedures, and the fast turnaround needed for event-day social content. We recommend booking GITEX production at least 6 weeks before the event to secure crew and coordinate accreditation." },
      { q: "Do you produce explainer animations for tech products?", a: "We produce live-action product demos, screen recording integrations, device mockup videos, and UI walkthrough films. For fully animated explainer videos we work with our trusted animation partners and oversee the creative direction and script to ensure consistency with your brand. We can scope hybrid productions combining live footage with animated product sequences." },
      { q: "Can you help with an app launch social media campaign?", a: "Yes. We produce complete app launch content packages — including hero video, 6 social media Reels optimised for Instagram and TikTok, YouTube Shorts, and static photography for app store listings and press kits. We plan launch content in advance of the release date so your team has everything needed for a coordinated deployment across all channels on day one." },
      { q: "What does investor pitch video production involve?", a: "Investor pitch video production typically involves a discovery session to understand your investment thesis and competitive differentiation, a scripting phase where we develop the narrative with the founding team, a half to full day production shoot covering founder interviews and product demonstration, and post-production delivering a 60 to 120 second overview film. We also produce supporting assets — team photography, office photography, and product demo clips — that can be embedded in the pitch deck itself." },
      { q: "Can you produce bilingual tech content in Arabic and English?", a: "Yes. We produce technology content in Arabic and English — including Arabic voiceover recording with native speakers, bilingual lower-thirds, and culturally adapted versions where the regional market-specific narrative differs from the international version. Content for government technology initiatives and regional enterprise sales often requires fully separate Arabic-first productions." },
      { q: "How do you approach SaaS product demo videos?", a: "SaaS product demos require a different approach from brand films. We focus on a specific user problem in the first 10 seconds, show the resolution through the product in the middle section, and close with the tangible outcome. We integrate clean screen recordings with device mockup footage and live actor sequences where the human element reinforces the software's impact. Demos typically run 60 to 90 seconds for social distribution and 3 to 5 minutes for website and sales use." },
    ],
    relatedLocations: [{ label: "Dubai Tech Ecosystem", href: "/locations/dubai" },{ label: "Abu Dhabi Tech", href: "/locations/abu-dhabi" }],
    relatedPosts: [{ title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },{ title: "Social Media Content Dubai 2026", href: "/blog/social-media-content-creation-dubai-2026" }],
    specialisations: [
      { name: "SaaS & App Demo Videos", href: "/industries/tech/saas", desc: "Product demo videos, app walkthroughs and launch campaigns for SaaS and mobile products in UAE." },
      { name: "GITEX Event Production", href: "/industries/tech/gitex", desc: "Booth content, live event coverage and same-day social cuts for GITEX Global and North Star." },
      { name: "Startup Investor Content", href: "/industries/tech/startup", desc: "Investor pitch videos, founder films and fundraising content for UAE startups." },
    ],
  },

  /* ── MUSIC & ENTERTAINMENT ─────────────────────────────────────────── */
  "music-entertainment": {
    name: "Music & Entertainment",
    tagline: "Music Videos, Artist Branding & Concert Coverage — UAE",
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
    metaTitle: "Music Video Production Dubai | Backyard Studio",
    metaDescription: "Music video production and artist photography in Dubai. Concert coverage, EPK production and entertainment brand content for UAE artists. Free quote.",
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
    metaTitle: "Fitness Video Production Dubai | Gym & Wellness Content",
    metaDescription: "Fitness video production for UAE gyms and wellness brands, including launch campaigns, trainer profiles, facility photography and short-form social content.",
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
    metaTitle: "E-Commerce Photography Dubai | Backyard Studio",
    metaDescription: "E-commerce product photography for Amazon UAE, Noon and DTC brands. Lifestyle, social commerce reels and paid ad creative. Free quote.",
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
    metaTitle: "Education Video Production Dubai | Backyard Studio",
    metaDescription: "Education video and photography for UAE schools, universities and EdTech. Student testimonials, campus shoots, graduation coverage. Free quote.",
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
    title: { absolute: data.metaTitle },
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

      {/* ── SPECIALISATIONS (only when data exists) ── */}
      {data.specialisations && data.specialisations.length > 0 && (
        <section className="section-pad border-t" style={{ background: "rgba(212,160,23,0.03)", borderColor: "var(--border)" }}>
          <div className="container-xl">
            <p className="eyebrow mb-4 text-center">Go Deeper</p>
            <h2 className="font-display text-4xl text-center mb-12" style={{ color: "var(--cream)" }}>
              {data.name.toUpperCase()} SPECIALIST PAGES
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.specialisations.map((sp) => (
                <Link key={sp.href} href={sp.href}
                  className="group p-6 border transition-all duration-300 hover:border-[var(--gold)]"
                  style={{ borderColor: "var(--gold)", background: "rgba(212,160,23,0.04)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-lg" style={{ color: "var(--gold)" }}>{sp.name}</h3>
                    <ArrowUpRight size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{sp.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
