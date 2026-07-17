import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { breadcrumbSchema, faqSchema } from "@/lib/structuredData";

/* ─── Sub-Industry Data ──────────────────────────────────────────────── */

const SUB_INDUSTRY_DATA: Record<string, Record<string, {
  parentSlug: string;
  parentName: string;
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
}>> = {

  /* ── SPORTS ── */
  "sports": {

    "padel": {
      parentSlug: "sports",
      parentName: "Sports",
      name: "Padel Tournament Production",
      tagline: "UAE Padel Content — From Court to Feed",
      heroImage: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80",
      metaTitle: "Padel Video Production UAE | Backyard Studio",
      metaDescription: "Padel tournament video and photography in UAE. Match coverage, drone aerials, sponsor reels and same-day social cuts. Dubai, Abu Dhabi, RAK. Free quote.",
      keywords: ["padel video production UAE","padel photography Dubai","padel tournament coverage UAE","padel event filming Dubai","padel highlights reel UAE","padel social media content Dubai","padel sponsor content UAE","padel drone filming Dubai"],
      intro: "Padel is the fastest-growing sport in the UAE. From World Padel Tour events at Coca-Cola Arena to local club tournaments in Business Bay, Yas Island, and Ras Al Khaimah, the sport's community has grown from a few thousand enthusiasts five years ago to tens of thousands of regular players today — with a digital audience that's larger still.\n\nBackyard Studio Official produces padel content for tournament organisers, clubs, sponsors, and the sport's fastest-rising players. We cover padel events at every scale — from a 16-draw club tournament to a 200-player open with international ranked players — with the same quality standard and delivery speed.\n\nPadel content has a specific production requirement that distinguishes it from most other sports: it needs to be fast and vertical. Players and fans consume padel content primarily on Instagram and TikTok, and the expectations for highlight turnaround have been set by international padel content accounts that post within minutes of a rally ending. If your tournament content isn't live before the players have left the venue, you've missed the peak engagement window.\n\nWe build the production schedule around that reality. An on-site editor with a laptop, pre-built edit template, and direct upload workflow means a 90-second highlight reel of a day's best points can be live on the tournament's Instagram account before the last match is finished.",
      challenge: "Padel courts are challenging filming environments — glass walls create glare and reflection, court depth is difficult to represent in two dimensions, and the fast pace of the sport requires high frame rates and precise timing to capture rally sequences that look compelling on a 9:16 screen. Most generalist sports videographers who haven't shot padel before underestimate these specific production requirements.",
      solution: "We have developed a padel-specific production setup — court positioning optimised for glass wall management, frame rate selection for rally playback, and an editing workflow that identifies the best exchanges quickly rather than reviewing hours of footage. Our drone setup for outdoor padel venues is GCAA-cleared and adds aerial context that shows the full court, club environment, and event scale in a single shot.",
      services: [
        { label: "Tournament Coverage — Full Day", href: "/services/event-videography", desc: "Multi-camera match coverage, on-site editing, same-day highlights, and full tournament recap film." },
        { label: "Same-Day Social Highlights", href: "/services/event-video-editing", desc: "90-second vertical highlight reel delivered before the tournament ends — for Instagram and TikTok." },
        { label: "Sponsor Activation Reels", href: "/services/dvcs", desc: "Branded sponsor content from live tournament footage — delivered within 6 hours of final match." },
        { label: "Player Profile Photography", href: "/services/photo-shoots", desc: "Action photography, profile portraits, and sponsor integration content for padel players." },
        { label: "Drone Aerial Coverage", href: "/services/aerial-drone", desc: "GCAA-licensed aerial overview of outdoor padel venues and event scale shots." },
        { label: "Season Content Packages", href: "/services/social-media-content", desc: "Long-term padel content packages for clubs, academies, and league organisers." },
      ],
      results: [
        { stat: "Same Day", label: "Highlight reel delivery guaranteed" },
        { stat: "GCAA", label: "Licensed drone for outdoor padel venues" },
        { stat: "9:16", label: "Vertical-first production for social" },
        { stat: "4K", label: "All padel content in 4K" },
      ],
      caseStudy: {
        title: "UAE Padel Open Tournament Coverage",
        client: "Padel Tournament Organiser, Dubai",
        result: "Tournament Instagram gained 2,800 followers in one day; main draw sold out the following year",
        body: "A 3-day padel open tournament in Dubai needed content that would build the event's social presence and attract sponsor interest for future editions. We deployed a 2-camera match coverage setup, on-site editor, and GCAA drone for outdoor aerial sequences.\n\nSame-day highlights were live on the tournament's Instagram within 90 minutes of each day's final match. Sponsor reels for the title sponsor and two category sponsors were delivered the morning after each day's play for posting on the sponsors' own channels.\n\nThe tournament's Instagram account grew by 2,800 followers over the 3 tournament days. The following year's main draw sold out in 48 hours — with the organiser attributing the turnaround directly to the content quality from the previous year."
      },
      faqs: [
        { q: "How much does padel tournament coverage cost in UAE?", a: "Padel tournament coverage starts from AED 4,500 for a single-day tournament with a 2-person crew delivering same-day highlights. Multi-day tournament packages are priced per day with discounts for longer engagements. Full tournament packages including drone, same-day social, sponsor reels, and full recap film start from AED 12,000 for a 2-day event." },
        { q: "Can you film indoors at padel clubs with glass walls?", a: "Yes. We have developed specific production approaches for indoor padel courts — managing glass wall reflections, artificial lighting environments, and the specific court geometry that makes padel challenging to film well. Most of our padel production is at indoor venues." },
        { q: "How quickly are same-day highlights delivered?", a: "Our commitment is same-day delivery — meaning highlights are live before midnight on the day of play. For peak engagement, we target delivery within 90 minutes of the final match ending on each tournament day. This requires an on-site editor, which is included in all our tournament packages." },
        { q: "Do you produce content for padel clubs as well as tournaments?", a: "Yes. We produce padel club branding content, coach and academy promotional videos, membership recruitment campaigns, and ongoing social media content packages for padel clubs across UAE. Many of our padel clients are clubs that first hired us for a tournament and then continued on a monthly content retainer." },
      ],
      relatedLocations: [
        { label: "Dubai Padel Courts", href: "/locations/dubai" },
        { label: "Abu Dhabi Padel", href: "/locations/abu-dhabi" },
        { label: "RAK Padel", href: "/locations/ras-al-khaimah" },
      ],
      relatedPosts: [
        { title: "Event Videography Dubai 2026", href: "/blog/event-photography-dubai-2026" },
        { title: "Sports Video Production UAE", href: "/industries/sports" },
      ],
    },

    "cycling": {
      parentSlug: "sports",
      parentName: "Sports",
      name: "Cycling Event Photography & Video",
      tagline: "UAE Cycling Content — From Gran Fondo to Downtown Criterium",
      heroImage: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1920&q=80",
      metaTitle: "Cycling Event Video Dubai UAE | Backyard Studio",
      metaDescription: "Cycling event photography and video production in UAE. Race coverage, drone aerials, social highlights and sponsor content. Dubai, Abu Dhabi, RAK. Free quote.",
      keywords: ["cycling event video Dubai","cycling photography UAE","race coverage Dubai","gran fondo video UAE","cycling tournament photography Dubai","bike race filming UAE","cycling drone Dubai","cycling social media content UAE"],
      intro: "Cycling in the UAE has gone from a niche pursuit to one of the country's most organised amateur sports. The UAE Cycling Tour attracts WorldTour professionals, the Gran Fondo calendar runs from October through March, and club criteriums are now weekly fixtures at venues across Dubai, Abu Dhabi, and Ras Al Khaimah. Behind the scenes, cycling content demand has grown in lockstep with event numbers — clubs, sponsors, and event organisers all need photography and video that captures the sport's speed, colour, and scale.\n\nBackyard Studio Official produces cycling event content across all formats: multi-day stage races, closed-circuit criteriums, sportive mass participation events, and club training camps. Our production setups are designed for the specific requirements of cycling photography — fast-moving subjects on open roads, finish line sequences, peloton aerials, and the narrative arc of a multi-stage race that needs a complete documentary edit as its primary deliverable.\n\nFor cycling event organisers, content serves three commercial purposes: post-event participant satisfaction (riders want to see themselves), sponsorship value delivery (sponsors need evidence of logo visibility and audience reach), and next-year registration marketing (compelling content from this year's event drives sign-ups for the next). We produce all three content types simultaneously from the same event coverage, which maximises production efficiency without requiring separate shoots for each purpose.\n\nFor cycling brands — apparel, equipment, nutrition, training platforms — UAE's cycling community provides a highly targeted and engaged audience. Cycling brand content in the UAE needs to reflect the local riding environment: early morning desert rides, coastal bike paths, Jebel Jais mountain stages, and the social culture of coffee stops after a club ride. We produce cycling brand content that feels specific to the UAE cycling scene rather than repurposed from European or American cycling markets.",
      challenge: "Cycling is one of the most technically demanding sports to cover well. Riders move at 40 to 60 kilometres per hour, the peloton is constantly changing shape, and the best moments — an attack, a sprint finish, a bunch crash — are unpredictable and over in seconds. Most videographers who cover cycling for the first time miss the key moments because they haven't built the anticipation and positioning that comes from understanding the sport's dynamics.",
      solution: "Our cycling production team includes crew who ride competitively and understand race dynamics from the inside. We position cameras at the finish line, in the follow vehicle, at key technical sections, and at feed zones — all informed by knowledge of where the race's decisive moments are most likely to happen. Drone coverage adds the aerial perspective that shows the peloton's scale and the landscape context that makes UAE cycling content distinctive.",
      services: [
        { label: "Race Day Coverage", href: "/services/event-videography", desc: "Multi-camera race coverage with follow vehicles, finish line positions, and drone aerials." },
        { label: "Peloton Drone Aerials", href: "/services/aerial-drone", desc: "GCAA-licensed drone coverage of peloton sequences, finish line aerials, and route overview." },
        { label: "Social Highlight Reels", href: "/services/reels-production", desc: "Same-day social highlights for race Instagram and TikTok — delivered before riders leave the venue." },
        { label: "Sponsor Activation Content", href: "/services/dvcs", desc: "Branded sponsor reels from race footage — logo visibility evidence and activation content." },
        { label: "Race Photography", href: "/services/photo-shoots", desc: "Action photography, finish line sequences, portrait sessions, and post-race social content." },
        { label: "Cycling Brand Films", href: "/services/corporate-brand-films", desc: "Brand content for cycling apparel, equipment, and nutrition brands — UAE-specific locations." },
      ],
      results: [
        { stat: "Same Day", label: "Social highlight delivery at race finish" },
        { stat: "GCAA", label: "Licensed drone for peloton aerials" },
        { stat: "All UAE", label: "Race coverage across all 7 emirates" },
        { stat: "4K", label: "All cycling content in 4K" },
      ],
      caseStudy: {
        title: "UAE Gran Fondo — Full Event Coverage",
        client: "International Cycling Event Organiser, UAE",
        result: "2,400 participant content downloads in 24 hours; next year registration 40% higher",
        body: "A 1,200-rider gran fondo in RAK needed content that would satisfy participants, deliver sponsor value, and drive next-year registration. We deployed 6 photographers and videographers across the route, a GCAA drone for aerial peloton sequences over the Hajar Mountain stage, and an on-site editor for same-day social delivery.\n\nDeliverables: 1,400 edited photographs available for participant download within 24 hours, 4-minute event documentary for YouTube, 12 social highlight reels, and individual sponsor activation videos for the 4 category sponsors.\n\nParticipant photo download rate was 87% within 48 hours. The event's social content reached 340,000 UAE cycling community accounts. The following year's registration opened with a 40% increase in sign-ups compared to the previous year — which the organiser attributed directly to content quality.",
      },
      faqs: [
        { q: "Can you follow the race on the road for moving action shots?", a: "Yes. We use follow vehicles — motorcycles with camera operators and cars for video capture — to follow the race in motion. This allows us to capture in-race action footage alongside the riders rather than only from fixed positions. Follow vehicle access is coordinated with the race director and UAE road authorities as part of our event production planning." },
        { q: "How do you handle drone permits for open road cycling events?", a: "Open road cycling events in UAE require GCAA clearance for drone operations plus coordination with the relevant emirate road authority and police. We manage all permit applications as part of our event production management. Lead time for cycling event drone permits is typically 5 to 7 business days, so we recommend confirming production requirements at least 2 weeks before the event." },
        { q: "Do you produce content for club rides and smaller cycling events?", a: "Yes. We cover cycling events at every scale, from 20-rider club criteriums to 2,000-participant gran fondos. Smaller events typically use a 2-person crew with one camera operator and one drone pilot, with highlights delivered within 48 hours. Pricing scales with crew size and deliverable volume." },
        { q: "Can you produce content for cycling kit and equipment brands?", a: "Yes. Cycling brand content production is a separate service from event coverage. Brand shoots use UAE's cycling environments — desert roads, coastal paths, mountain stages — to produce campaign imagery and video for apparel brands, component manufacturers, and nutrition companies. We can combine a brand shoot day with an event coverage commission to maximise cost efficiency." },
      ],
      relatedLocations: [
        { label: "Dubai Cycling Routes", href: "/locations/dubai" },
        { label: "RAK Jebel Jais Cycling", href: "/locations/ras-al-khaimah" },
        { label: "Abu Dhabi Cycling", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Event Videography Dubai 2026", href: "/blog/event-photography-dubai-2026" },
        { title: "Sports Production UAE", href: "/industries/sports" },
      ],
    },

    "running": {
      parentSlug: "sports",
      parentName: "Sports",
      name: "Running Event Photography & Video",
      tagline: "Marathon and Race Content for UAE Running Events",
      heroImage: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1920&q=80",
      metaTitle: "Running Event Photography Dubai UAE | Backyard Studio",
      metaDescription: "Marathon and running event photography and video in UAE. Finish line coverage, drone aerials, participant photos and sponsor content. Free quote in 2 hours.",
      keywords: ["marathon photography Dubai","running event video UAE","race photography Dubai","Dubai Marathon coverage","10K event photography UAE","running event content Dubai","finish line photography UAE","running race video Dubai"],
      intro: "The UAE running calendar is one of the most active in the region. The Dubai Marathon, the Abu Dhabi Marathon, and dozens of 10K, 5K, and trail running events keep the running community busy from October through April, with night races extending the season through summer months. Backyard Studio Official produces content for running events across the full scale spectrum — from community 5K charity runs to major marathons with elite fields and international media coverage.\n\nRunning event photography and video serves a market that most event organisers underestimate: participants. Every runner who finishes a race wants photographic evidence of the moment, and the social sharing of race photos drives significant organic reach for event brands. The event that provides professional finish line photography with same-day download access gets more user-generated social posts, more community engagement, and more word-of-mouth marketing than the event that hands out medals without content.\n\nFor sponsors of running events, content requirements have become increasingly sophisticated. A title sponsor of a 5,000-participant race needs more than a logo on the finish line banner — they need a content package that documents their activation, shows their brand in context with the event's community, and provides social assets for their own channels. We produce sponsor-specific content simultaneously with main event coverage, so each sponsor gets a dedicated content deliverable without requiring additional production days.\n\nFor running brands — footwear, apparel, nutrition, GPS watches, training apps — UAE's running community provides an engaged and commercially valuable audience. We produce running brand content across UAE's most visually distinctive running environments: the Dubai Creek waterfront at dawn, the Abu Dhabi Corniche at sunrise, and the trail environments around Hatta and the Hajar Mountains.",
      challenge: "Running event photography requires managing large numbers of participants across extended distances and timeframes. A 5,000-person marathon requires photographers at multiple course positions, a finish line setup that can capture every finisher without missing key moments, and a post-processing workflow that delivers individual participant photos at scale within 24 hours.",
      solution: "We staff running events with the appropriate crew number for the participant count and course length, and we use a systematic finish line photography setup — multiple cameras covering different finish zones, a consistent backdrop, and participant bib number tagging in post-processing that allows runners to search for their own photos. For social highlights, we prioritise the first finishers, the mass start, and the emotional finish line moments that generate the highest social engagement.",
      services: [
        { label: "Finish Line Photography", href: "/services/photo-shoots", desc: "Professional finish line photography with participant tagging and same-day download access." },
        { label: "Race Video & Highlight Film", href: "/services/event-videography", desc: "Full race video coverage with highlight film for event brand channels and post-event marketing." },
        { label: "Drone Aerials", href: "/services/aerial-drone", desc: "GCAA-licensed mass start aerials, route overview, and finish line aerial sequences." },
        { label: "Social Media Content", href: "/services/reels-production", desc: "Same-day highlight Reels, Instagram Stories, and TikTok content for event social channels." },
        { label: "Sponsor Activation Content", href: "/services/dvcs", desc: "Branded content for event title sponsors and category sponsors — delivered within 48 hours." },
        { label: "Running Brand Campaigns", href: "/services/corporate-brand-films", desc: "Brand film and photography for running footwear, apparel, and nutrition brands — UAE locations." },
      ],
      results: [
        { stat: "24h", label: "Participant photo delivery standard" },
        { stat: "Same Day", label: "Social highlights at event finish" },
        { stat: "GCAA", label: "Licensed drone for mass start aerials" },
        { stat: "All UAE", label: "Event coverage across all 7 emirates" },
      ],
      caseStudy: {
        title: "Dubai 10K Run — Full Event Coverage",
        client: "Corporate Running Event, Dubai",
        result: "4,200 participant photo downloads in 48 hours; event NPS score increased 18 points",
        body: "A 3,500-participant corporate 10K in Dubai Business Bay needed finish line photography, a highlight video, and sponsor content for 3 activation partners. Previous years had used a single photographer and produced inconsistent results — many participants couldn't find their finish photo.\n\nWe deployed 4 photographers at the finish line with a systematic coverage protocol, a video team covering the mass start, mid-course action, and finish atmosphere, and a GCAA drone for the starting gun aerial. Post-processing included bib number tagging for searchable participant access.\n\nParticipant photo download rate was 76% within 48 hours. Post-event survey NPS score for the event increased 18 points compared to the previous year, with photography quality the most-mentioned positive in written feedback. All 3 sponsors shared their activation content packages on their own LinkedIn and Instagram channels within 3 days.",
      },
      faqs: [
        { q: "How do participants access their finish line photos?", a: "We provide participants with a download link either via the event app, email, or a QR code at the finish area. Photos are searchable by bib number, which we tag during post-processing. Standard delivery is 24 hours after the event for most race sizes, with 48 hours for very large events above 10,000 participants." },
        { q: "Can you cover trail running events in the UAE mountains?", a: "Yes. We cover trail running events in the Hajar Mountains, Hatta, and the Northern Emirates mountain environments. Trail events require specific logistics — follow vehicle access is limited on mountain trails, so we position crew at key technical sections, summits, and finish areas, with GCAA drone coverage for mountain aerials where permitted." },
        { q: "How many photographers do you deploy for a large marathon?", a: "For an event of 5,000 participants, we typically deploy 6 to 8 photographers across the finish line, course positions, and start area, plus a dedicated video team. For events over 10,000 participants, we scale accordingly. We provide a crew recommendation based on your participant count, course layout, and deliverable requirements." },
        { q: "Do you produce content for virtual races and hybrid events?", a: "Yes. We produce content packages for virtual race events and hybrid events that combine in-person and remote participation. For virtual races, we typically produce a highlight film from the in-person hub, social content from participant submissions, and brand content for the race's physical product partnerships. We can advise on content strategies for hybrid event formats." },
      ],
      relatedLocations: [
        { label: "Dubai Running Events", href: "/locations/dubai" },
        { label: "Abu Dhabi Marathon", href: "/locations/abu-dhabi" },
        { label: "RAK Marathon", href: "/locations/ras-al-khaimah" },
      ],
      relatedPosts: [
        { title: "Event Videography Dubai 2026", href: "/blog/event-photography-dubai-2026" },
        { title: "Sports Production UAE", href: "/industries/sports" },
      ],
    },

  },

  /* ── AUTOMOTIVE ── */
  "automotive": {

    "car-launch": {
      parentSlug: "automotive",
      parentName: "Automotive",
      name: "Car Launch Campaign Production",
      tagline: "New Model Launches Done Right in Dubai",
      heroImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80",
      metaTitle: "Car Launch Video Dubai UAE | Backyard Studio",
      metaDescription: "Car launch campaign production in Dubai. Commercial films, dealership events, social reels, press content and drone aerials. GCAA licensed. Free quote.",
      keywords: ["car launch video Dubai","new car launch campaign UAE","car launch commercial Dubai","automotive launch production UAE","car reveal video Dubai","new model launch content UAE","car launch event coverage Dubai","launch film automotive UAE"],
      intro: "A car launch in Dubai is one of the most high-stakes marketing moments in the automotive calendar. UAE buyers are among the most sophisticated in the world, the media landscape is intensely competitive, and a poorly executed launch campaign directly impacts first-month sales figures. Backyard Studio Official produces full launch campaigns for new model reveals — from hero commercial film through to dealership event coverage, social media deployment, and press asset delivery.\n\nThe UAE automotive launch market has specific requirements that differ from European or American launch models. Social media is a primary discovery channel — the launch Reel on Instagram or the TikTok from the reveal event can generate more first-week buyer enquiries than a television commercial. Simultaneously, print and digital press coverage in UAE's automotive media (drive.com.au, WhatsApp motoring groups, motoring influencers) happens fast and requires high-resolution photography delivered within hours of the reveal.\n\nWe plan launch content production as an integrated campaign rather than a series of individual deliverables. The hero commercial, the social content series, the event coverage photography, the press pack assets, and the dealer demo video all come from the same production programme — planned in advance, shot in one or two production days, and delivered in a sequenced timeline that matches the launch rollout plan.\n\nFor launch events specifically, we manage the transition from pre-launch content (teaser films, reveal countdowns) through to live event coverage and same-day social delivery — so your team has content available for every phase of the launch without chasing multiple agencies.",
      challenge: "Car launches have a narrow window of maximum audience attention — the 48 to 72 hours around the reveal. Content that misses this window is exponentially less effective than content that arrives at the right moment. The production challenge is delivering broadcast-quality commercial content on social-media timelines — without cutting the corners that make automotive content forgettable.",
      solution: "We pre-plan car launch productions in detail — shot lists agreed 2 to 3 weeks before the shoot day, locations pre-scouted and permitted, GCAA clearances filed, and an edit plan that sequences deliverables from most time-sensitive (launch-day social cut) to least (full commercial with final grade). On shoot day, the social team gets content to work with before the commercial is finished — because the timelines are different, not the quality standard.",
      services: [
        { label: "Hero Launch Commercial", href: "/services/dvcs", desc: "Cinematic 60 to 90 second launch commercial for broadcast, YouTube, and digital media." },
        { label: "Launch Event Coverage", href: "/services/event-videography", desc: "Multi-camera event coverage, reveal moment photography, and same-day event highlights." },
        { label: "Social Launch Campaign Content", href: "/services/reels-production", desc: "Teaser series, reveal reels, first-drive content, and post-launch social media assets." },
        { label: "Press Photography Package", href: "/services/photo-shoots", desc: "High-resolution press photography for media distribution — delivered within 24 hours of reveal." },
        { label: "Dealer Demo Video", href: "/services/dvcs", desc: "A 3 to 5 minute dealer presentation video for showroom screens and sales team presentations." },
        { label: "Drone Aerials", href: "/services/aerial-drone", desc: "GCAA-licensed dramatic aerial sequences for the hero commercial and launch social content." },
      ],
      results: [
        { stat: "24h", label: "Press photography delivered post-reveal" },
        { stat: "Same Day", label: "Social launch content during the event" },
        { stat: "GCAA", label: "Licensed drone for all launch location aerials" },
        { stat: "Full Stack", label: "Commercial + social + event in one programme" },
      ],
      caseStudy: {
        title: "Luxury SUV Launch — Full Campaign",
        client: "UAE Luxury Automotive Dealership",
        result: "Launch Reel: 1.8M views organic; test drive enquiries up 60% vs previous launch",
        body: "A Dubai luxury dealership needed a complete launch campaign for a new SUV model — with a 6-week timeline from brief to launch day. We produced a full-day shoot across 3 locations: Al Qudra desert at sunrise for hero commercial sequences, Sheikh Zayed Road at night for city sequences, and a multi-storey car park rooftop for architectural product shots.\n\nDeliverables: 90-second hero commercial, 6 social Reels (3 vertical for Instagram/TikTok, 3 horizontal for YouTube), 200 static photography assets, and a 4-minute dealer demo video for showroom screens.\n\nOn launch day, the Instagram Reel was live within 2 hours of the event ending. It reached 1.8M organic views. Test drive enquiry volume was 60% higher in the first month compared to the previous model launch with a different production team."
      },
      faqs: [
        { q: "How far in advance should we book car launch production?", a: "We recommend booking 6 to 8 weeks before the launch date. Pre-production (brief, shot list, location scouting, GCAA clearance) takes 2 to 3 weeks. The shoot typically takes 1 to 2 days. Post-production for a full launch package takes 2 to 3 weeks depending on deliverable volume. Shorter timelines are possible but increase risk on logistics." },
        { q: "Can you produce content for both the launch event and the hero commercial in the same programme?", a: "Yes — and we recommend it. Combining the launch event coverage with the hero commercial production reduces total cost and ensures visual consistency across all deliverables. We plan the programme so the commercial shoot happens before the launch event, with event coverage on the day." },
        { q: "Do you handle the teaser content leading up to launch day?", a: "Yes. We produce a pre-launch teaser series — typically 3 to 5 pieces of content seeded over the 2 weeks before launch day. Teasers reveal progressively more of the car while building anticipation. This content is planned at the same time as the main launch package and produced in the same shoot days." },
        { q: "What locations do you recommend for car launch shoots in UAE?", a: "Location choice depends on the vehicle's character. Performance and luxury vehicles typically use Al Qudra desert road for dramatic dune and horizon sequences, Sheikh Zayed Road at night for urban prestige, and Hatta mountain roads for dynamic driving sequences. Urban and lifestyle-positioned vehicles often use Dubai Design District, Jumeirah Beach Road, or specific Downtown locations. We always scout and photograph locations before recommending them for a specific vehicle." },
      ],
      relatedLocations: [
        { label: "Dubai Automotive Shoots", href: "/locations/dubai" },
        { label: "Abu Dhabi Launch Events", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Car Commercial Production Dubai 2026", href: "/blog/car-commercial-production-dubai-2026" },
        { title: "Automotive Production UAE", href: "/industries/automotive" },
      ],
    },

    "dealership": {
      parentSlug: "automotive",
      parentName: "Automotive",
      name: "Dealership Photography & Content",
      tagline: "Consistent, High-Volume Dealership Content That Moves Stock",
      heroImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
      metaTitle: "Dealership Photography Dubai UAE | Backyard Studio",
      metaDescription: "Car dealership photography and content programmes in Dubai UAE. Stock photography, showroom shoots, social media and monthly retainers. Free quote.",
      keywords: ["dealership photography Dubai","car dealer content UAE","showroom photography Dubai","used car photography UAE","new car stock photography Dubai","dealership social media content UAE","automotive dealer video Dubai","car listing photography UAE"],
      intro: "Dubai's automotive dealership landscape is intensely competitive — with hundreds of franchise and independent dealerships competing for the same high-intent buyers on social media, dubizzle, and CarSwitch. The dealerships that win are those whose content creates trust before the buyer calls: professional stock photography that shows every vehicle accurately, showroom photography that communicates brand quality, and social content that keeps the dealership top-of-mind throughout the consideration cycle.\n\nBackyard Studio Official runs dealership content programmes for new car franchises, used car dealerships, and luxury pre-owned specialists across UAE. Our dealership clients range from single-location independents to multi-brand groups with 8 to 12 branches needing consistent content across all locations.\n\nThe operational requirement for dealerships is fundamentally different from campaign-based production: it's continuous, high-volume, and time-sensitive. A busy Dubai dealership may add 20 to 50 used vehicles to stock every week, each requiring photography before the listing goes live. New model arrivals need showroom photography within days of the units arriving. Social content needs to be produced on a schedule rather than ad hoc. This requires a partner with the operational infrastructure to deliver consistently at volume — not a freelancer who delivers when convenient.",
      challenge: "High-volume, consistent quality is the dealership content problem that most production setups can't solve. It's straightforward to produce excellent photography for a one-off launch. It's much harder to produce photography at the same standard for every unit that enters stock, every week, without variation — while also managing the social content calendar and the occasional new model launch.",
      solution: "We build dealership programmes around standard operating procedures — agreed shot lists, consistent lighting setups, naming conventions, and delivery workflows that make the content output predictable and reliable regardless of vehicle volume. Monthly retainer clients get guaranteed scheduling slots, dedicated crew, and a direct communication line to our operations team for priority requests.",
      services: [
        { label: "Stock Photography Programme", href: "/services/photo-shoots", desc: "Weekly or bi-weekly stock photography for new arrivals — consistent, fast, and listing-ready." },
        { label: "Showroom & Facility Photography", href: "/services/photo-shoots", desc: "Showroom interior, exterior, brand environment, and team photography for marketing materials." },
        { label: "Social Media Content Package", href: "/services/social-media-content", desc: "Monthly social content — Reels, carousels, stories, and promotional content for dealership channels." },
        { label: "New Model Launch Content", href: "/services/dvcs", desc: "New model arrival photography and video — showroom delivery sequences, spec highlights, walk-around films." },
        { label: "Used Car Photography", href: "/services/photo-shoots", desc: "High-volume used car photography optimised for dubizzle, CarSwitch, YallaMotor, and brand site listings." },
        { label: "Team & Brand Photography", href: "/services/corporate-videography", desc: "Sales team portraits, service team photography, and brand environment shots for dealership websites." },
      ],
      results: [
        { stat: "24h", label: "Stock photography turnaround guaranteed" },
        { stat: "Weekly", label: "Recurring programmes available" },
        { stat: "All UAE", label: "Multi-branch programmes across all emirates" },
        { stat: "Consistent", label: "Standard quality across all units and locations" },
      ],
      caseStudy: {
        title: "Multi-Branch Used Car Dealership Programme",
        client: "6-Branch Used Car Group, Dubai and Northern Emirates",
        result: "Stock listing time reduced from 3 days to 6 hours; enquiry rate up 28%",
        body: "A 6-branch used car group was losing buyers because their stock was slow to list and inconsistently photographed. We implemented a weekly photography programme — dedicated crew visiting each branch on a fixed day each week, standard 12-image shot list per vehicle, editing and delivery within 6 hours of the shoot.\n\nWithin 90 days, average time from vehicle arrival to live listing dropped from 3 days to 6 hours. The consistency of photography across all 6 branches meant that a buyer looking at vehicles from different locations couldn't tell which branch the car was from — only the listing detail differed. Enquiry rate across the group's dubizzle listings increased 28% over the quarter following implementation."
      },
      faqs: [
        { q: "How does a dealership photography retainer work?", a: "A dealership retainer works on a monthly fee basis that covers an agreed volume of vehicles per month and a set number of shoot days. Additional vehicles beyond the agreed volume are charged at a per-unit rate. Retainer clients get priority scheduling, dedicated crew, and a guaranteed 24-hour turnaround from shoot to delivery." },
        { q: "Can you photograph both new and used vehicles?", a: "Yes. We produce photography for both new model stock and used vehicle inventory. New car photography typically emphasises brand presentation and spec highlights. Used car photography focuses on accurate condition representation — showing the vehicle clearly from all angles with interior and exterior detail that gives buyers confidence." },
        { q: "Do you cover multiple dealership branches across UAE?", a: "Yes. We run multi-branch dealership programmes across UAE — typically with a fixed schedule for each branch location. For groups with branches across multiple emirates, we coordinate routing to minimise travel and cost." },
        { q: "What listing platforms do you optimise photography for?", a: "We produce dealership photography optimised for dubizzle, CarSwitch, YallaMotor, AutoTrader UAE, and the dealership's own website. Each platform has specific image requirements and the visual conventions that maximise listing click-through rate on that platform — we plan and deliver for all of them." },
      ],
      relatedLocations: [
        { label: "Dubai Dealerships", href: "/locations/dubai" },
        { label: "Abu Dhabi Showrooms", href: "/locations/abu-dhabi" },
        { label: "Sharjah Auto Market", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Car Commercial Production Dubai 2026", href: "/blog/car-commercial-production-dubai-2026" },
        { title: "Automotive Production UAE", href: "/industries/automotive" },
      ],
    },

  },

  /* ── TECHNOLOGY ── */
  "tech": {

    "saas": {
      parentSlug: "tech",
      parentName: "Technology",
      name: "SaaS & App Video Production",
      tagline: "Software Product Content That Converts — UAE & GCC",
      heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80",
      metaTitle: "SaaS Video Production Dubai UAE | Backyard Studio",
      metaDescription: "SaaS product demos, app launch videos and software explainers for UAE startups. Investor content, onboarding films and social reels. Free quote.",
      keywords: ["SaaS video production Dubai","app demo video UAE","software product video Dubai","SaaS explainer video UAE","product demo video Dubai","app launch content UAE","B2B software video Dubai","startup product video UAE","mobile app video Dubai","SaaS marketing content UAE"],
      intro: "Software-as-a-Service products face a unique video production challenge: the product itself is often invisible, abstract, or difficult to communicate in a short format. The best SaaS content never shows software — it shows the human problem the software eliminates, the relief of that problem disappearing, and the business outcome that follows. Backyard Studio Official produces product content for SaaS companies, mobile app developers, and software platforms operating in UAE and across the GCC.\n\nThe UAE SaaS market has specific characteristics that shape production requirements. Many of the most successful SaaS companies here serve dual markets: the local UAE and GCC enterprise market, where B2B sales cycles are long and trust-building content is paramount, and international expansion markets where UAE is a proof-of-concept before scaling to larger geographies. Content needs to serve both simultaneously — credible to a regional enterprise buyer while compelling to an international investor reviewing the deck.\n\nFor B2B SaaS, the content that most reliably influences purchase decisions includes customer testimonial videos (showing real UAE businesses that have adopted the product), workflow demo videos (showing the product solving a specific named problem in 60 to 90 seconds), and founder content (building personal trust in the company behind the software). We produce all three as part of integrated SaaS content programmes.\n\nFor consumer app launches, the requirements shift toward social-first creative — high-impact launch Reels optimised for UAE's social media demographics, App Store preview videos that communicate value in 15 seconds, and UGC-style creative for paid social campaigns on Meta and TikTok.",
      challenge: "Most SaaS video content fails at the brief stage: it tries to show the product rather than the problem, and ends up communicating nothing compelling to the audience. A demo video that screen-records software functionality without a human narrative context has almost zero persuasive power — it answers 'what does it do' before anyone has been convinced they care about the category.\n\nThe second failure mode is UAE market misalignment. International SaaS companies often try to repurpose European or American product content for the Gulf market — without adapting for the specific business pain points, cultural context, or visual references that resonate with UAE buyers.",
      solution: "We develop SaaS content from a problem-first script framework — identifying the specific pain point the product solves, finding the most emotionally resonant way to show that problem on screen, and then revealing the product as the solution. Every demo video we produce starts with the problem, not the product.\n\nFor UAE market adaptation, we adapt the specific business contexts, faces, office environments, and cultural references to match the reality of doing business in Dubai — rather than showing generic Western corporate environments that feel imported.\n\nFor investor content, we work closely with founders to identify the narrative architecture that communicates the investment thesis — market size, problem acuity, solution differentiation, and team credibility — within a 90-second format that holds attention through a full viewing.",
      services: [
        { label: "Product Demo Videos", href: "/services/dvcs", desc: "60 to 90 second problem-first product demos for website, sales outreach, and investor presentations." },
        { label: "App Launch Campaign Content", href: "/services/reels-production", desc: "App Store preview video, launch Reels, and social campaign content for iOS and Android launches." },
        { label: "Customer Testimonial Videos", href: "/services/testimonial-videos", desc: "Authentic B2B customer success stories — filmed with UAE business clients using the product." },
        { label: "Investor Pitch Videos", href: "/services/corporate-brand-films", desc: "90-second company overview films for VC fundraising rounds and investor deck embedding." },
        { label: "SaaS Onboarding Content", href: "/services/youtube-content", desc: "Feature walkthrough videos, onboarding tutorials, and help centre video content." },
        { label: "LinkedIn Founder Content", href: "/services/youtube-content", desc: "Thought leadership video series and founder interview content for LinkedIn distribution." },
      ],
      results: [
        { stat: "100+", label: "Tech startups and SaaS brands served" },
        { stat: "48h", label: "Demo video delivery standard" },
        { stat: "GCC", label: "Content adapted for Gulf B2B markets" },
        { stat: "All Stages", label: "Seed through Series B production programmes" },
      ],
      caseStudy: {
        title: "B2B SaaS Product Launch — UAE Enterprise Market",
        client: "Dubai-Based HR Technology Platform",
        result: "Demo video embedded in outreach: 34% higher meeting conversion vs no video",
        body: "A Dubai HR technology company needed a product demo video to support their enterprise sales outreach to UAE and GCC companies. Their existing collateral was text-heavy and required a long discovery call to explain the value proposition.\n\nWe developed a 75-second problem-first demo video: the first 20 seconds showed the specific pain of manual HR documentation for a UAE SME, the middle 40 seconds showed the product eliminating that pain in a real workflow, and the final 15 seconds showed the business outcome in numbers.\n\nThe sales team embedded the video in cold outreach emails to enterprise prospects. Meeting conversion rate — from first email to booked demo call — increased 34% compared to the previous quarter's text-only outreach. The company subsequently expanded the format to 4 additional product modules."
      },
      faqs: [
        { q: "How long should a SaaS demo video be?", a: "For cold outreach and social media, 60 to 90 seconds is optimal. For website hero sections, 90 to 120 seconds is acceptable if the first 30 seconds are compelling. For investor decks, 60 to 90 seconds is the standard. For onboarding and feature tutorials, 2 to 5 minutes is appropriate because the viewer is already a customer with a specific learning goal." },
        { q: "Can you produce SaaS video in Arabic for GCC enterprise sales?", a: "Yes. We produce SaaS content in both English and Arabic — including Arabic-language voiceover with native business Arabic speakers, bilingual lower-thirds, and culturally adapted versions of product demos for GCC market distribution. Enterprise sales in Saudi Arabia, Qatar, and Kuwait often requires Arabic-language materials." },
        { q: "Do you produce App Store preview videos?", a: "Yes. We produce App Store and Google Play preview videos to Apple and Google's current specifications — the 15 to 30 second autoplay videos that appear on app listing pages. These require specific framing for device mockup presentation and a content structure that communicates the app's value proposition without audio, since most App Store previews autoplay muted." },
        { q: "How does the script development process work?", a: "For demo videos and investor content, script development is included in the production fee. We run a discovery session with your team (45 to 60 minutes) to understand the product, the target audience, the specific problem being solved, and the desired viewer action. We then draft a script, share it for feedback, revise, and finalise before any filming begins. The script is the most important part of SaaS video production and we treat it accordingly." },
      ],
      relatedLocations: [
        { label: "Dubai Tech Ecosystem", href: "/locations/dubai" },
        { label: "Abu Dhabi Tech", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Technology Production UAE", href: "/industries/tech" },
      ],
    },

    "gitex": {
      parentSlug: "tech",
      parentName: "Technology",
      name: "GITEX Event Production",
      tagline: "GITEX Coverage, Brand Activations & Tech Event Content",
      heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
      metaTitle: "GITEX Video Production Dubai | Backyard Studio",
      metaDescription: "GITEX event coverage, booth activations, conference content and tech brand video in Dubai. Full-service production for exhibitors and organisers. Free quote.",
      keywords: ["GITEX video production Dubai","GITEX photography UAE","tech event video Dubai","GITEX booth coverage","conference video Dubai","technology event production UAE","GITEX content creator Dubai","tech conference coverage UAE"],
      intro: "GITEX Global is the largest technology event in the Middle East and one of the largest in the world. For the three weeks surrounding GITEX — the main show, GITEX Expand North Star, and the associated side events — Dubai becomes the epicentre of the global tech industry's Middle East and Africa strategy. Backyard Studio Official produces content for GITEX exhibitors, technology brands, conference speakers, and event organisers across the full GITEX ecosystem.\n\nFor exhibitors, GITEX content serves multiple simultaneous purposes: live social media content that demonstrates booth traffic and brand presence to audiences watching remotely, CEO and product team interview content that builds thought leadership during the event window, partnership announcement content that captures key moments in real time, and a polished event recap film that becomes a core asset in the following year's participation planning and sponsorship conversations.\n\nFor technology brands that aren't exhibiting but are active at GITEX side events, dinners, and networking activities, content production requires a mobile, reactive team that can cover unscheduled moments and produce social content on the same day. The GITEX social media environment moves fast — content that arrives two days after a panel discussion or product announcement has missed the window of maximum relevance.\n\nBackyard Studio Official has produced GITEX content for technology companies across a wide range of sectors and sizes, from early-stage startups exhibiting for the first time to global technology brands with 10-metre double-storey stands. We understand the operational environment of World Trade Centre during GITEX week — the access protocols, the best shooting positions in the halls, the timing of key moments, and the logistical requirements for fast content delivery in a high-traffic convention centre.",
      challenge: "GITEX is one of the most logistically demanding production environments in the UAE. The convention centre is enormous, exhibitor stands are densely packed, event schedules are unpredictable, and the noise and lighting conditions in the halls are challenging for audio and camera work. A team that hasn't produced at GITEX before spends significant time solving operational problems rather than producing content.",
      solution: "Our GITEX production teams know World Trade Centre's layout, the best positions for filming in each hall, the light conditions at different times of day, and the access protocols that apply to different exhibitor tiers. We pre-plan GITEX productions with full shot lists, scheduled interview slots, and social content templates that allow fast turnaround without requiring creative decisions under pressure on show days.",
      services: [
        { label: "Booth Coverage & Daily Highlights", href: "/services/event-videography", desc: "Full booth coverage with same-day highlight videos delivered each evening of the event." },
        { label: "CEO & Spokesperson Interviews", href: "/services/corporate-videography", desc: "On-stand interview content with company leadership — produced for social, media, and internal use." },
        { label: "Product & Partnership Announcements", href: "/services/dvcs", desc: "Same-day announcement content delivered before press coverage cycle closes." },
        { label: "Social Media Content — Live", href: "/services/reels-production", desc: "Live social content team producing Reels and Stories from the booth throughout each show day." },
        { label: "Event Recap Film", href: "/services/corporate-brand-films", desc: "3 to 5 minute GITEX recap film for year-round marketing and next-year sponsorship conversations." },
        { label: "Conference Session Coverage", href: "/services/event-videography", desc: "Speaker session video, panel coverage, and keynote documentation for conference content libraries." },
      ],
      results: [
        { stat: "Same Day", label: "Social content delivery every show day" },
        { stat: "GITEX", label: "Experienced in WTCAD production environment" },
        { stat: "All Halls", label: "Coverage across all GITEX exhibition halls" },
        { stat: "48h", label: "Full recap film post-event" },
      ],
      caseStudy: {
        title: "Global Tech Brand — GITEX 5-Day Coverage",
        client: "International B2B Technology Platform, European HQ",
        result: "GITEX social content reached 2.1M impressions; 3 partnership announcements covered same-day",
        body: "A European B2B technology company with regional HQ in Dubai needed full GITEX coverage across 5 show days, including daily highlight videos, CEO interview content, and same-day partnership announcement coverage for 3 scheduled partnership signings.\n\nWe deployed a dedicated 3-person GITEX team — one content director, one camera operator, one editor — embedded at the client's stand for the full 5-day show. Daily highlight videos were delivered to the client's social team by 7pm each evening. The 3 partnership announcement videos were delivered within 4 hours of each signing ceremony.\n\nGITEX social content reached 2.1 million impressions across LinkedIn, Instagram, and Twitter over the 5-day period. The recap film, delivered 48 hours after show close, was used as the central asset in the client's GITEX 2026 participation proposal to their global marketing leadership.",
      },
      faqs: [
        { q: "Do you need special accreditation to film at GITEX?", a: "Yes. GITEX requires media accreditation for video production teams operating in the halls. Exhibitor-affiliated production teams can operate under the exhibitor's badge allocation. For independent media coverage, separate media accreditation is required from DWTC. Backyard Studio Official manages accreditation applications for all our GITEX clients as part of our standard event production process." },
        { q: "Can you handle fast turnaround for partnership announcements?", a: "Yes. Partnership and product announcement content is the most time-sensitive deliverable at GITEX. We produce announcement videos with a 4-hour turnaround from filming to delivery — designed to be social-ready before the tech press cycle closes on the same day. This requires pre-built edit templates and a dedicated editor working during the show day." },
        { q: "Do you also cover GITEX Expand North Star and GITEX side events?", a: "Yes. Our GITEX production service covers the main GITEX Global show, Expand North Star, and the ecosystem of side events, dinners, and networking activities during GITEX week. For clients with presence across multiple GITEX venues, we coordinate multi-location coverage with appropriate team sizing." },
        { q: "What is the cost of GITEX event production?", a: "GITEX production is quoted per day based on crew size and deliverable requirements. A single-day booth coverage package with a 2-person crew and same-day highlight delivery starts from AED 5,500. A full 5-day GITEX programme with a dedicated embedded team, daily highlights, interview content, and post-show recap film starts from AED 22,000." },
      ],
      relatedLocations: [
        { label: "Dubai Events Production", href: "/locations/dubai" },
        { label: "Abu Dhabi Conference Coverage", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Technology Production UAE", href: "/industries/tech" },
      ],
    },

    "startup": {
      parentSlug: "tech",
      parentName: "Technology",
      name: "Startup Investor Content",
      tagline: "Pitch Films, Founder Content & Startup Brand Video — UAE",
      heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
      metaTitle: "Startup Video Production Dubai UAE | Backyard Studio",
      metaDescription: "Investor pitch videos, founder content and startup brand films in Dubai UAE. Seed to Series B production packages. GCC market positioning. Free quote.",
      keywords: ["startup video production Dubai","investor pitch video UAE","founder content Dubai","startup brand film UAE","pitch deck video Dubai","startup content creator UAE","venture capital video Dubai","startup launch film UAE"],
      intro: "Dubai's startup ecosystem has grown into one of the most active in the Middle East, with DIFC FinTech Hive, Hub71 in Abu Dhabi, and a growing number of accelerators and VC-backed startups making the UAE one of the region's primary innovation hubs. For early-stage and growth-stage startups, content production serves a specific set of commercial objectives that differ from established businesses: investor relations, talent acquisition, customer acquisition on limited budget, and brand positioning in a competitive product category.\n\nBackyard Studio Official produces startup content from seed stage through to Series B, with production packages and pricing structures designed for the capital efficiency requirements of early-stage companies. We understand that a seed-stage startup cannot spend AED 80,000 on a brand film — and that the same brand film produced for AED 18,000 can serve investor decks, website hero sections, LinkedIn thought leadership, and App Store listings simultaneously if planned correctly from the outset.\n\nInvestor pitch videos are the highest-stakes deliverable in startup content production. A 90-second investor video that appears in a fundraising deck will be watched by 50 to 500 investors — some of whom will make a decision about whether to read further based entirely on how that 90 seconds makes the company feel. The production quality is secondary to the narrative: investors who see a polished video with the wrong story are not persuaded. Investors who see a compelling story told with credible production quality move to the next stage of diligence.\n\nWe develop startup investor content from a narrative-first process — understanding the investment thesis, the market opportunity, the unfair advantage, and the team story before any camera is deployed. The content that comes out of that process serves not only the fundraising round but the startup's broader brand story for the 12 to 24 months following the raise.",
      challenge: "Most startup content fails because it's built backwards — the production happens before the narrative is clear, and the result is a video that looks good but says nothing memorable. The second failure mode is investor video that feels like a product demo rather than a company story. Investors already understand the product category; what they need to understand is why this team, in this market, at this moment.",
      solution: "We run a structured narrative development session with each startup founder before any production begins. The session identifies the investment thesis, the market entry narrative, the team's relevant credentials, and the single most compelling proof point the company has at the time of filming. Everything that appears in the video comes from that session — so every second of content is doing commercial work rather than filling time.",
      services: [
        { label: "Investor Pitch Video", href: "/services/corporate-brand-films", desc: "90-second company overview for fundraising decks — narrative-first, investor-specific framework." },
        { label: "Founder & Team Content", href: "/services/corporate-videography", desc: "Founder interview series, team culture content, and LinkedIn thought leadership video." },
        { label: "Product Demo Video", href: "/services/dvcs", desc: "60 to 90 second problem-first product demo for website, sales outreach, and investor materials." },
        { label: "Brand Launch Film", href: "/services/corporate-brand-films", desc: "Company brand film for launch announcements, press coverage, and partner communications." },
        { label: "App & Product Social Content", href: "/services/reels-production", desc: "Product launch Reels, TikTok content, and social campaign assets for product-led growth." },
        { label: "Office & Culture Photography", href: "/services/photo-shoots", desc: "Office environment photography, team portraits, and culture content for recruitment and press." },
      ],
      results: [
        { stat: "90s", label: "Standard investor pitch video format" },
        { stat: "Seed to B", label: "Production packages for all startup stages" },
        { stat: "GCC", label: "Content positioned for Gulf investor markets" },
        { stat: "48h", label: "Investor pitch video delivery" },
      ],
      caseStudy: {
        title: "Series A Fundraising Pitch Video — UAE FinTech",
        client: "UAE-Based B2B FinTech Startup",
        result: "Pitch video in Series A deck; round closed at AED 18M from 3 GCC family office investors",
        body: "A Dubai FinTech startup raising a Series A round needed an investor video for their fundraising deck. Their existing materials included a detailed pitch deck and a product demo video produced by their own team — but they lacked a compelling company overview film that conveyed the team's credibility and the market opportunity at scale.\n\nWe ran a 90-minute narrative development session with the two co-founders, identifying the founding story, the market validation evidence, and the specific proof point that most clearly demonstrated product-market fit. From that session we developed a 85-second script, shot over one day at their DIFC office, and delivered within 48 hours.\n\nThe video was embedded in the Series A deck sent to 40 GCC investors. The round closed at AED 18 million from 3 GCC family office investors within 60 days of the deck going out.",
      },
      faqs: [
        { q: "How long should a startup investor pitch video be?", a: "90 seconds is the established standard for investor pitch videos embedded in decks. Some investors prefer 60 seconds; very few want more than 2 minutes. We produce investor videos at 85 to 95 seconds — enough time to establish the market problem, present the solution, show the team, and communicate the ask, without overstaying the attention window." },
        { q: "Do you work with pre-revenue startups?", a: "Yes. Some of our most important startup content work is for pre-revenue companies where the pitch video is one of the first professional content assets the company has produced. We have packages specifically designed for pre-revenue startups at AED 8,000 to AED 15,000 that cover an investor pitch video and 2 to 3 social content assets." },
        { q: "Can you produce content in Arabic for GCC investor outreach?", a: "Yes. We produce bilingual startup content in English and Arabic, including Arabic-language investor videos for family office outreach in Saudi Arabia, Kuwait, and Qatar where Arabic-language materials are expected. Arabic versions are produced with native business Arabic speakers and are culturally adapted rather than directly translated." },
        { q: "How do you approach confidentiality for early-stage startups?", a: "We operate under NDA for all startup client relationships on request. Our production team is accustomed to working with pre-announcement content — unreleased products, unannounced funding rounds, and proprietary technology demonstrations — and understands the commercial sensitivity of early-stage startup information." },
      ],
      relatedLocations: [
        { label: "Dubai Startup Ecosystem", href: "/locations/dubai" },
        { label: "Abu Dhabi Hub71", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Technology Production UAE", href: "/industries/tech" },
      ],
    },

    "fintech": {
      parentSlug: "tech",
      parentName: "Technology",
      name: "FinTech Video Production",
      tagline: "Financial Technology Content for UAE and GCC Markets",
      heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80",
      metaTitle: "FinTech Video Production Dubai UAE | Backyard Studio",
      metaDescription: "FinTech video production in Dubai and UAE. Product demos, investor content, regulatory communications and brand films for financial technology companies. Free quote.",
      keywords: ["fintech video production Dubai","financial technology content UAE","fintech brand film Dubai","payments video production UAE","digital banking video Dubai","fintech marketing content UAE","neobank brand video Dubai","fintech explainer UAE"],
      intro: "Dubai has established itself as the Gulf's leading FinTech hub, with DIFC FinTech Hive, Abu Dhabi's Hub71, and a regulatory framework that has attracted hundreds of financial technology companies from across the world. The UAE FinTech sector spans payments, digital banking, wealth management, insurtech, proptech, and regulatory technology — each with specific content requirements shaped by their product category, their target customer, and the regulatory environment in which they operate.\n\nBackyard Studio Official produces content for FinTech companies at every stage: seed-stage startups building their first investor materials, growth-stage scale-ups producing product content for enterprise sales, and established FinTech brands maintaining a content programme across multiple product lines. We understand the specific constraints that financial services content operates within — regulatory compliance requirements, the conservative visual vocabulary expected by institutional buyers, and the need for trust signals in content targeting retail financial consumers.\n\nFinTech product content faces a specific challenge that general corporate video doesn't: the product involves money, and viewers apply a higher standard of trust scrutiny to financial content than to other product categories. A consumer evaluating a payments app or a digital wallet is asking not only whether the product is useful but whether the company behind it is credible enough to be trusted with their financial information. Content that communicates credibility — through production quality, spokesperson authority, customer testimony, and regulatory compliance signals — performs significantly better in the FinTech category than generic corporate video.\n\nFor B2B FinTech selling to enterprise clients — banks, insurance companies, large retailers — content operates in a longer sales cycle context. The product demo video that appears in a sales deck will be reviewed by multiple stakeholders across a 3 to 12 month procurement process. It needs to communicate technical capability, security and compliance credentials, and partnership potential simultaneously, while remaining clear and compelling to non-technical senior decision-makers.",
      challenge: "FinTech content sits at the intersection of two conflicting creative demands: it needs to communicate technical sophistication to technical evaluators while remaining accessible and trustworthy to non-technical buyers and retail consumers. Content that's too technical alienates the business decision-maker. Content that's too simple fails to satisfy the technical evaluation. Most FinTech video content picks one audience and ignores the other.",
      solution: "We develop FinTech content from a layered communication framework — a single primary narrative that communicates the core value proposition to any viewer, with a supporting layer of technical specificity that satisfies technical evaluators who look closer. The visual vocabulary we use for FinTech — clean office environments, data visualisation sequences, security credential close-ups — signals credibility without requiring technical claims in the script.",
      services: [
        { label: "FinTech Product Demo Videos", href: "/services/dvcs", desc: "Problem-first product demos showing the financial technology in a realistic use context." },
        { label: "Investor Relations Content", href: "/services/corporate-brand-films", desc: "Company overview films, Series A/B fundraising pitch videos, and investor update content." },
        { label: "B2B Sales Content", href: "/services/corporate-videography", desc: "Enterprise sales deck video, security and compliance credential videos, and partnership content." },
        { label: "Consumer Brand Films", href: "/services/corporate-brand-films", desc: "Trust-building brand films for consumer FinTech products in retail banking, payments, and insurance." },
        { label: "Regulatory & Compliance Content", href: "/services/corporate-videography", desc: "Regulated communications content for CBUAE, ADGM, and DIFC compliance requirements." },
        { label: "Conference & GITEX Content", href: "/services/event-videography", desc: "Industry conference coverage, panel session video, and award ceremony content for FinTech events." },
      ],
      results: [
        { stat: "DIFC", label: "ADGM and DIFC compliance environment experienced" },
        { stat: "B2B + B2C", label: "Content for both enterprise and retail FinTech" },
        { stat: "GCC", label: "Content positioned for Gulf regulatory markets" },
        { stat: "48h", label: "Product demo video standard delivery" },
      ],
      caseStudy: {
        title: "B2B Payments Platform — Enterprise Sales Content",
        client: "UAE-Based B2B Payments Platform",
        result: "Sales cycle shortened by 3 weeks; demo request conversion from cold email up 29%",
        body: "A DIFC-registered B2B payments platform was losing prospects in the early stages of their enterprise sales cycle because their product story required a long discovery call to communicate clearly. Their existing collateral was text-heavy and the product complexity was working against them.\n\nWe produced a 75-second product demo video using a problem-first script: the first 25 seconds showed the specific pain of reconciling multi-currency B2B payments across UAE and Saudi Arabia operations, the middle 35 seconds showed the platform eliminating that pain in a realistic workflow, and the final 15 seconds showed the compliance credential signals that enterprise buyers need to see before engaging in procurement.\n\nThe sales team embedded the video in cold outreach to CFOs and treasury managers at UAE enterprise targets. Demo request conversion from cold email increased 29%, and the average time from first contact to booked demo reduced by 3 weeks versus the previous quarter.",
      },
      faqs: [
        { q: "Do you understand DIFC and ADGM regulatory requirements for financial content?", a: "Yes. Backyard Studio Official has produced content for DIFC and ADGM-registered financial services companies and understands the communication standards and compliance requirements that apply to regulated financial content in the UAE. We do not provide legal or compliance sign-off — that remains the client's responsibility — but we are experienced with the production constraints that regulated financial content operates within." },
        { q: "Can you produce content for Islamic finance and Sharia-compliant products?", a: "Yes. We produce content for Islamic finance products including Sharia-compliant banking, takaful, and Islamic fintech platforms. Arabic-language versions and culturally appropriate visual content for Islamic finance products are available as part of our standard bilingual service." },
        { q: "How do you handle compliance review in the content approval process?", a: "We build compliance review into our standard approval process for regulated FinTech clients. After the first cut is delivered, we provide an explicit compliance review window — typically 5 business days — before the final revision round. This allows the client's legal and compliance team to review content before we make any additional changes, avoiding multiple revision rounds driven by compliance requirements." },
        { q: "What is the typical cost of a FinTech brand film?", a: "A FinTech product demo video starts from AED 12,000 for a 60 to 90 second problem-first format. A full brand film with production design, multiple interview subjects, and a 3 to 5 minute running time starts from AED 28,000. Investor pitch videos for fundraising rounds are quoted separately based on the scope of narrative development required. All quotes are provided within 2 hours of receiving a brief." },
      ],
      relatedLocations: [
        { label: "DIFC Dubai FinTech", href: "/locations/dubai" },
        { label: "Abu Dhabi Hub71", href: "/locations/abu-dhabi" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Technology Production UAE", href: "/industries/tech" },
      ],
    },

  },

  /* ── HEALTHCARE ── */
  "healthcare": {

    "dental": {
      parentSlug: "healthcare",
      parentName: "Healthcare",
      name: "Dental Clinic Photography & Video",
      tagline: "Dental Clinic Content That Builds Patient Trust",
      heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80",
      metaTitle: "Dental Clinic Video Dubai UAE | Backyard Studio",
      metaDescription: "Dental clinic photography and video production in Dubai UAE. Patient testimonials, clinic tours, social media content and brand films for dental practices. Free quote.",
      keywords: ["dental clinic video Dubai","dental photography UAE","dentist video Dubai","dental clinic marketing content UAE","dental practice film Dubai","dental social media content UAE","dentist photography Dubai","dental clinic brand film UAE"],
      intro: "Dubai's dental market is one of the most competitive in the Middle East, with hundreds of private dental practices competing for patients across the emirate and the wider UAE. The practices that attract and retain patients most effectively are those whose content builds trust before the patient walks through the door — showing the clinic environment, the team, the technology, and the patient experience in a way that reduces the anxiety that many patients feel about dental visits.\n\nBackyard Studio Official produces content for dental clinics, specialist dental practices, and dental groups across UAE. Our dental content production experience covers general dentistry, cosmetic dentistry, orthodontics, implantology, and specialist dental surgery — each with specific content requirements shaped by the patient's decision-making process and the clinical environment's visual characteristics.\n\nDental content operates in a high-trust, high-stakes decision context. A patient choosing a dental clinic is making a significant financial and personal trust commitment — treatment costs in Dubai's private dental market start at AED 500 and can exceed AED 50,000 for comprehensive cosmetic or implant cases. Content that communicates clinical quality, team expertise, hygiene standards, and patient satisfaction influences this decision in a way that generic advertising does not.\n\nFor cosmetic dentistry specifically, before-and-after content — done ethically with patient consent and accurate representation — is one of the most powerful marketing assets a dental practice can have. We produce before-and-after photography to clinical standards, ensuring accurate colour representation, consistent lighting between before and after images, and patient presentation that is professional and reassuring rather than promotional in a way that patients would find off-putting.\n\nSocial media content for dental practices in Dubai has matured significantly. TikTok and Instagram content from UAE dental clinics is one of the most engaged healthcare content categories on social media in the region. Educational content (how to maintain good dental hygiene, what to expect from specific treatments, myth-busting common dental anxieties) performs particularly well when produced with the right clinical authority tone.",
      challenge: "Dental clinic content has specific technical requirements — dental operatories are small, colour-sensitive environments where standard photography and video approaches often produce clinical imagery that looks cold or anxiety-inducing rather than reassuring. Additionally, clinical content involving patients requires careful consent management and representation that complies with UAE healthcare authority guidelines.",
      solution: "We have developed specific lighting setups and camera positions for dental operatory environments that produce warm, reassuring imagery without misrepresenting the clinical setting. Our dental content team understands the DHA and MOH content requirements for healthcare marketing in UAE, and we build consent and compliance processes into our standard dental clinic production workflow.",
      services: [
        { label: "Patient Testimonial Videos", href: "/services/testimonial-videos", desc: "Authentic patient outcome stories — consent-managed, clinically accurate, and emotionally compelling." },
        { label: "Clinic Environment Photography", href: "/services/photo-shoots", desc: "Reception, operatory, and team photography that communicates quality and hygiene standards." },
        { label: "Treatment Explainer Videos", href: "/services/corporate-videography", desc: "Patient education videos explaining specific treatments — for website, waiting room, and social." },
        { label: "Social Media Content Package", href: "/services/reels-production", desc: "Monthly social content for Instagram and TikTok — educational, reassurance-focused, and culturally appropriate." },
        { label: "Before-and-After Photography", href: "/services/photo-shoots", desc: "Clinical before-and-after photography for cosmetic dentistry — consistent, accurate, and ethically managed." },
        { label: "Team & Brand Photography", href: "/services/photo-shoots", desc: "Dentist portraits, hygienist team photography, and specialist profile images for website and DHA listings." },
      ],
      results: [
        { stat: "DHA", label: "Compliant with UAE healthcare marketing guidelines" },
        { stat: "Consent", label: "Full patient consent managed in production process" },
        { stat: "48h", label: "Social content delivered within 48 hours" },
        { stat: "All UAE", label: "Dental clinic coverage across all 7 emirates" },
      ],
      caseStudy: {
        title: "Cosmetic Dental Clinic — Full Content Programme",
        client: "Dubai Cosmetic Dental Practice, JBR",
        result: "Online consultation bookings up 65% within 3 months of content programme launch",
        body: "A JBR cosmetic dental practice was struggling to differentiate in a competitive Dubai market. Their website had generic stock photography and no video content. Patient acquisition was driven almost entirely by referral with limited social media presence.\n\nWe produced a full content programme: clinic environment photography for the website, 4 patient testimonial videos with full consent management, a 3-minute brand film featuring the lead dentist explaining the clinic's cosmetic philosophy, and a monthly social content plan producing 8 social posts per month across Instagram and TikTok.\n\nOnline consultation booking requests increased 65% within 3 months of the content going live. The clinic's Instagram following grew from 800 to 3,400 in the same period. The lead dentist's professional profile photography was used for a Dubai Health Authority speaking engagement confirmation and cited as a factor in the invitation.",
      },
      faqs: [
        { q: "Do you understand DHA guidelines for dental marketing content in Dubai?", a: "Yes. We produce dental marketing content in compliance with Dubai Health Authority guidelines for healthcare marketing in Dubai. This includes appropriate claims management, patient consent protocols, and the specific restrictions on before-and-after representation that apply to cosmetic treatment marketing. We are not a legal compliance service, but we understand the practical production implications of DHA content standards." },
        { q: "Can you film inside the dental operatory during treatment?", a: "Filming during active treatment requires explicit patient consent and appropriate clinical approval from the practice principal. We support this with a formal video consent process that meets UAE healthcare authority standards. For most dental content purposes, we recommend recreated treatment scenarios with consenting dental team members rather than filming actual patient treatment — the results are visually equivalent and the consent management is straightforward." },
        { q: "How do you produce before-and-after photography accurately?", a: "Before-and-after dental photography requires consistent lighting, camera position, focal length, and patient positioning between the before and after images. We use calibrated colour reference cards to ensure accurate tooth colour representation, and we photograph before and after images in the same operatory under the same controlled lighting. Editing is limited to colour correction and crop — we do not alter the teeth or gum appearance in any way in post-processing." },
        { q: "Do you work with dental groups as well as single practices?", a: "Yes. We produce content programmes for dental groups with multiple branches across UAE. Multi-branch dental groups benefit from a standardised content approach across all locations — consistent brand photography style, a shared social content calendar, and a central brand film that covers the group rather than individual branches. Pricing for multi-branch programmes benefits from economies of scale." },
      ],
      relatedLocations: [
        { label: "Dubai Dental Clinics", href: "/locations/dubai" },
        { label: "Abu Dhabi Dental Practices", href: "/locations/abu-dhabi" },
        { label: "Sharjah Healthcare", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Healthcare Production UAE", href: "/industries/healthcare" },
      ],
    },

  },

  /* ── CORPORATE ── */
  "corporate": {

    "company-profile": {
      parentSlug: "corporate",
      parentName: "Corporate",
      name: "Company Profile Video Production",
      tagline: "Company Profile Films That Win Tenders and Build Trust",
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      metaTitle: "Company Profile Video Dubai UAE | Backyard Studio",
      metaDescription: "Company profile video production in Dubai UAE. Corporate overview films for tender submissions, investor presentations and brand communications. Free quote in 2 hours.",
      keywords: ["company profile video Dubai","corporate profile film UAE","company video Dubai","company overview film UAE","business profile video Dubai","corporate documentary UAE","company presentation video Dubai","brand film corporate UAE"],
      intro: "The company profile video is the most commercially important piece of content most UAE businesses produce. It appears in tender submissions, investor decks, trade show presentations, website hero sections, LinkedIn pages, and client pitches. A well-produced company profile creates the first impression that either opens or closes the door to a commercial relationship — and in UAE's relationship-driven business culture, that first impression carries exceptional weight.\n\nBackyard Studio Official has produced company profile films for businesses across every sector in UAE — from single-owner SMEs submitting their first government tender to regional headquarters of multinational corporations communicating their UAE strategy to global stakeholders. The commercial objective is the same in every case: establish credibility, communicate capability, and create the impression that this is a company worth doing business with.\n\nThe UAE company profile market has specific characteristics that distinguish it from other markets. Many UAE businesses operate in regulated sectors — government contracting, financial services, construction, healthcare — where the company profile video appears in a formal procurement context alongside technical documents, financial statements, and legal certifications. In this context, the production quality and tone of the video is itself a capability signal. A company profile that looks under-produced in a government tender submission communicates doubt about the company's capacity and attention to quality.\n\nFor businesses with a regional or international client base, the company profile also needs to communicate the UAE business environment in a way that resonates with buyers who may not be familiar with it. Office environment footage, team composition, facility quality, and client relationship footage all function as trust-building signals for international buyers evaluating whether to engage a UAE-based supplier.\n\nBackyard Studio Official's company profile productions typically run 3 to 5 minutes in the standard format, with a 90-second cut for social and digital use, and an extended 8 to 10 minute version for trade show and presentation use. All three are produced from the same shoot day, which maximises cost efficiency for clients who need multiple format versions.",
      challenge: "Company profile videos fail in two common ways. The first is the generic company narrative — the video that describes what the company does without communicating why it matters, who the team is, or what specifically distinguishes it from competitors. The second is the over-produced vanity project — a technically impressive film that says nothing specific about the company's actual capability or commercial proposition.",
      solution: "We develop company profile scripts from a competitive differentiation framework — identifying the specific claims the company can make that competitors cannot, the specific client outcomes that evidence capability, and the specific team expertise that builds personal trust. Every minute of a company profile video should be doing commercial work rather than filling screen time with generic corporate imagery.",
      services: [
        { label: "Full Company Profile Film", href: "/services/corporate-brand-films", desc: "3 to 5 minute corporate overview film for tender submissions, investor materials, and website." },
        { label: "90-Second Social Cut", href: "/services/reels-production", desc: "Short-form social version cut from the company profile for LinkedIn and YouTube." },
        { label: "Extended Presentation Version", href: "/services/corporate-brand-films", desc: "8 to 10 minute extended company overview for trade show screens and board presentations." },
        { label: "Arabic-Language Version", href: "/services/corporate-videography", desc: "Arabic narration and subtitle version for government procurement and GCC market outreach." },
        { label: "Team & Facility Photography", href: "/services/photo-shoots", desc: "Professional team portraits and office/facility photography produced alongside the video." },
        { label: "Testimonial Integration", href: "/services/testimonial-videos", desc: "Client testimonial videos produced and integrated into the company profile as evidence segments." },
      ],
      results: [
        { stat: "3-5 min", label: "Standard company profile format" },
        { stat: "Same Day", label: "Social cut delivered alongside main film" },
        { stat: "Arabic", label: "Bilingual versions for government procurement" },
        { stat: "All UAE", label: "Company profile production across all 7 emirates" },
      ],
      caseStudy: {
        title: "Government Contracting Tender Submission — Company Profile",
        client: "UAE-Based Construction & FM Company",
        result: "Tender shortlisted in 3 government submissions where previously eliminated at pre-qualification",
        body: "A UAE facilities management company had been consistently eliminated at the pre-qualification stage of government tenders. Their existing company profile was a 4-year old PowerPoint with no video component — while competitors had professional video profiles that were standard submission elements for government procurement.\n\nWe produced a 4-minute company profile film covering the company's 18-year UAE operating history, their facility management project portfolio with UAE government and real estate sector clients, their team structure and certification credentials, and a client testimonial from a government entity that confirmed 4 years of contract performance.\n\nIn the 6 months following the profile's completion, the company was shortlisted in 3 government tender submissions where they had previously been eliminated at pre-qualification. The tender team attributed the change directly to the video's role in communicating company maturity and capability in a format that evaluators engaged with before reviewing the technical submission.",
      },
      faqs: [
        { q: "How long should a company profile video be?", a: "3 to 5 minutes is the standard format for company profile videos in UAE's corporate and government procurement context. For website hero sections, a 60 to 90 second cut performs better. For trade show and boardroom presentations, 8 to 10 minutes is appropriate when the audience is a captive, high-value group. We produce all three formats from the same shoot day so you have the right version for every context." },
        { q: "Can you produce the company profile in Arabic and English?", a: "Yes. Bilingual company profile production — English primary with an Arabic narration and subtitle version — is one of our most common requests. Arabic-language versions are essential for government tender submissions and for regional GCC client communications in Saudi Arabia, Kuwait, and Qatar. We use native business Arabic speakers for narration rather than direct translation services." },
        { q: "What is the typical production timeline for a company profile?", a: "A standard company profile video has a 3 to 4 week timeline from briefing to final delivery. Pre-production and script development takes 1 to 2 weeks. Filming is typically 1 to 2 days. Post-production takes 1 to 2 weeks depending on revision rounds. Rush timelines of 10 to 14 business days are possible for clients with a tender submission deadline." },
        { q: "What does a company profile video cost in Dubai?", a: "Company profile video production starts from AED 12,000 for a single-day shoot producing a 3 to 5 minute film with 90-second social cut. More comprehensive programmes including multi-location filming, testimonial integration, and Arabic-language version are quoted from AED 22,000. Exact pricing depends on filming days required, crew size, animation requirements, and post-production scope." },
      ],
      relatedLocations: [
        { label: "Dubai Corporate Production", href: "/locations/dubai" },
        { label: "Abu Dhabi Government Tenders", href: "/locations/abu-dhabi" },
        { label: "Sharjah Corporate Content", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Corporate Production UAE", href: "/industries/corporate" },
      ],
    },

  },

  /* ── HOSPITALITY ── */
  "hospitality": {

    "hotels": {
      parentSlug: "hospitality",
      parentName: "Hospitality",
      name: "Hotel Photography & Video Production",
      tagline: "Hotel Content That Fills Rooms and Wins Awards",
      heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
      metaTitle: "Hotel Video Production Dubai UAE | Backyard Studio",
      metaDescription: "Hotel photography and video production in Dubai UAE. Property films, room photography, drone aerials and social content for hotels and resorts. Free quote in 2 hours.",
      keywords: ["hotel video production Dubai","hotel photography UAE","resort video Dubai","hotel drone photography UAE","hotel marketing content Dubai","hospitality photography UAE","hotel opening film Dubai","hotel social media content UAE"],
      intro: "Hotels in Dubai and the UAE operate in one of the most visually sophisticated hospitality markets in the world. Guests arrive with their social media expectations set by the properties' own Instagram accounts, and the competition for online booking decisions is decided in the 3 to 5 seconds a traveller spends looking at a hotel's primary visual assets before deciding whether to click through. Backyard Studio Official produces hotel content that performs in this environment — photography that converts browsers into bookings, video that communicates the property's experience rather than just its facilities, and social media content that keeps the hotel visible between guest stays.\n\nOur hotel content production experience spans the full spectrum of UAE's accommodation market: luxury five-star properties with international brand standards and global distribution systems, four-star business hotels with corporate client bases, boutique lifestyle properties appealing to social media-aware leisure travellers, and serviced apartment developments with medium to long-stay residents as their primary market. Each category has different content requirements, different target audiences, and different distribution channels — and we produce specifically for each rather than applying a generic hospitality template.\n\nFor hotel openings, content production is one of the most time-compressed and commercially critical exercises in hospitality marketing. The opening period — from pre-opening marketing through the first 90 days of operation — sets the property's positioning in the market for years. Pre-opening content (construction progress documentation, design reveal content, pre-opening event coverage) builds anticipation. Opening-day content drives initial bookings. Post-opening content consolidates the property's position in its competitive set.\n\nFor established hotels, ongoing content is the operational reality of hospitality marketing. Room rates and availability change weekly, seasonal packages need photography, restaurant menus change quarterly, and the social content calendar needs to be fed continuously. Backyard Studio Official runs content retainer programmes for established UAE hotels — structured monthly productions that keep the hotel's content library current without requiring a separate brief and production cycle for every piece of content.",
      challenge: "Hotel photography is technically demanding at the highest quality level. Room interiors require complex lighting setups that balance natural and artificial light, manage reflections from screens and windows, and create a sense of scale in rooms that are often smaller than they look in professional photography. Exterior and aerial photography must manage UAE's intense sunlight and haze while capturing the property's architecture and environment at their best.",
      solution: "We schedule hotel shoots around light conditions rather than convenience — early morning for exterior and pool photography when the light is at its most flattering and the property is at its quietest, controlled artificial lighting for interior work, and GCAA-cleared drone operations for aerial photography that shows the property's full setting. Post-processing for hotel content is handled by specialists in architectural and hospitality photography rather than generalist editors.",
      services: [
        { label: "Room & Suite Photography", href: "/services/photo-shoots", desc: "Professional room photography for OTAs, brand website, and marketing materials — all room categories." },
        { label: "Hotel Brand Film", href: "/services/corporate-brand-films", desc: "3 to 5 minute property film for website hero, brand channels, and trade presentations." },
        { label: "Drone Aerial Photography & Video", href: "/services/aerial-drone", desc: "GCAA-licensed aerial photography showing the property, pool, beach, and location context." },
        { label: "Restaurant & F&B Photography", href: "/services/photo-shoots", desc: "Menu photography, restaurant interior photography, and food social media content." },
        { label: "Social Media Content Programme", href: "/services/reels-production", desc: "Monthly social content for hotel Instagram and TikTok — property features, offers, and seasonal content." },
        { label: "Hotel Opening Coverage", href: "/services/event-videography", desc: "Opening event coverage, pre-opening marketing content, and opening night same-day highlights." },
      ],
      results: [
        { stat: "5-Star", label: "Experience with luxury brand photography standards" },
        { stat: "GCAA", label: "Licensed drone for property aerial photography" },
        { stat: "OTA-Ready", label: "Photography delivered in Booking.com and Expedia specs" },
        { stat: "All UAE", label: "Hotel content production across all 7 emirates" },
      ],
      caseStudy: {
        title: "4-Star Business Hotel — Full Property Photography Update",
        client: "Dubai Business Hotel, Sheikh Zayed Road",
        result: "Booking.com score increased 0.4 points; direct booking rate up 22% post-content update",
        body: "A Sheikh Zayed Road business hotel had been using the same photography for 6 years. The images showed a dated design that had since been refurbished, and the online guest reviews were noting a disconnect between the property's actual quality and its visual presentation. The hotel's revenue management team identified photography as the primary lever for improving online conversion.\n\nWe produced a full property photography update across 3 shoot days: all room and suite categories, public areas including lobby, gym, pool, and business centre, restaurant photography for the in-house F&B outlet, and GCAA drone aerials showing the hotel's location on Sheikh Zayed Road and its relation to the surrounding business district.\n\nBooking.com review score increased 0.4 points in the first 90 days following the photography update — with guests commenting that the property 'looked exactly as shown online'. Direct booking rate through the hotel's own website increased 22% compared to the same period the previous year.",
      },
      faqs: [
        { q: "How many days does a full hotel photography project take?", a: "A full property photography project for a medium-sized hotel (100 to 200 rooms, 3 to 5 F&B outlets, standard public areas) typically takes 2 to 3 shoot days. Larger luxury properties with extensive room categories, multiple restaurant concepts, and significant outdoor spaces may require 4 to 5 days. We plan the shoot schedule around the hotel's occupancy to minimise disruption to occupied rooms." },
        { q: "Can you produce content for OTA (Booking.com, Expedia, Airbnb) requirements?", a: "Yes. We produce hotel photography and video to the specific technical requirements of all major OTAs — Booking.com, Expedia, Hotels.com, Marriott.com, and Airbnb — including file format, minimum resolution, image ratio, and the content guidelines that each platform applies to property photography. Files are delivered ready for direct upload to each platform." },
        { q: "Do you cover hotel openings and soft opening events?", a: "Yes. Hotel opening events are one of our most involved production commissions — covering pre-opening teaser content, opening night event photography and video, same-day social highlights, and the post-opening marketing content sprint that supports the property's first 90 days of trading. We have covered hotel openings across all UAE emirates and understand the operational complexity of producing content in a hotel that is simultaneously opening its doors for the first time." },
        { q: "Can you produce Arabic-language hotel content for regional marketing?", a: "Yes. Arabic-language hotel content — including Arabic narration for brand films, Arabic subtitles for social video, and culturally appropriate visual content for GCC market distribution — is available as part of our standard bilingual service. Gulf Arabic-speaking travellers represent a significant market for UAE hotel bookings, and we produce content that speaks directly to that audience." },
      ],
      relatedLocations: [
        { label: "Dubai Hotel Photography", href: "/locations/dubai" },
        { label: "Abu Dhabi Resort Content", href: "/locations/abu-dhabi" },
        { label: "RAK Hotel Production", href: "/locations/ras-al-khaimah" },
      ],
      relatedPosts: [
        { title: "Hotel Photography Dubai 2026", href: "/blog/hotel-photography-dubai-2026" },
      ],
    },

    "resorts": {
      parentSlug: "hospitality",
      parentName: "Hospitality",
      name: "Resort Photography & Video Production",
      tagline: "Resort Content That Turns Browsers Into Bookers",
      heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
      metaTitle: "Resort Video Production Dubai UAE | Backyard Studio",
      metaDescription: "Resort photography, video, and drone production in Dubai and across the UAE. Room tours, pool lifestyle, F&B, spa, and campaign content. All resorts served.",
      keywords: ["resort video production Dubai","resort photography UAE","luxury resort content Dubai","resort drone video UAE","resort marketing content"],
      intro: "A resort competes on emotion. Guests do not book a room; they book a feeling. The right visual content communicates that feeling in the first three seconds of a scroll. Backyard Studio produces resort photography, video, and drone content for properties across the UAE.\n\nWe cover every content need a resort has: hero room photography that outperforms OTA averages, drone footage showing your pool deck and beach access from the angle that converts, F&B content for all dining venues, spa photography and short-form video for Instagram and Google listings, and seasonal campaign films timed to peak booking windows.",
      challenge: "Most resort content shoots are treated as a single event. A crew arrives for two days, shoots everything they can reach, and delivers assets that date quickly and lack the depth needed for year-round marketing across OTA platforms, social channels, Google Business, and direct booking campaigns. The result is a content library that runs dry within six months.",
      solution: "We build resort content systems, not one-off shoots. Our standard resort package includes a phased shoot calendar: a flagship campaign shoot in the best seasonal light, followed by quarterly content top-ups that keep your library fresh. Assets are delivered by channel: horizontal hero cuts for OTA, vertical Reels for Instagram and TikTok, square crops for Google Business, and still galleries optimised for your booking engine.",
      services: [
        { label: "Aerial Drone Tours", href: "/services/aerial-drone", desc: "GCAA-permitted drone footage of your resort from every angle — pool deck, beach access, gardens, and surroundings." },
        { label: "Room & Suite Photography", href: "/services/photo-shoots", desc: "Hero room stills and walk-through video for OTA listings, your website gallery, and print collateral." },
        { label: "F&B Venue Content", href: "/services/food-photography", desc: "Restaurant, bar, and pool bar photography and video — morning through evening light." },
        { label: "Spa & Wellness Video", href: "/services/corporate-films", desc: "Spa treatment photography and short-form video for Instagram, booking pages, and gift voucher campaigns." },
        { label: "Campaign & Brand Films", href: "/services/corporate-films", desc: "Seasonal campaign films from 60 seconds to 3 minutes — produced to brief and delivered cut-down for every channel." },
        { label: "Social Media Content", href: "/services/social-media-content", desc: "Monthly content packages keeping your resort feed active across Instagram, TikTok, and YouTube Shorts." },
      ],
      results: [
        { stat: "2.4x", label: "OTA click-through improvement after content refresh" },
        { stat: "38%", label: "direct booking uplift after drone tour added to website" },
        { stat: "14 days", label: "average turnaround from shoot to delivered asset library" },
      ],
      caseStudy: {
        title: "Full Resort Visual Identity Refresh",
        client: "5-Star Beach Resort, Ras Al Khaimah",
        result: "OTA ranking improved from page 3 to page 1 for 'beach resorts RAK'; direct bookings up 38% in 90 days",
        body: "A Ras Al Khaimah beachfront resort had not refreshed its visual content in four years. OTA listings showed dated photography that no longer matched the refurbished rooms, and their Instagram feed had been inactive for three months. We delivered a two-day shoot covering all 120 room categories, pool deck and beach lifestyle, all three F&B venues, and a GCAA drone session. A 90-second campaign film was produced for YouTube and the booking homepage. Within 90 days, OTA rankings improved from page three to page one for 'beach resorts RAK' and direct bookings increased 38%.",
      },
      faqs: [
        { q: "How long does a full resort content shoot take?", a: "Most resort shoots run two to three days depending on the number of room categories and F&B venues. We schedule across multiple light conditions — early morning for exteriors and pool, afternoon for interiors, and evening for F&B ambience." },
        { q: "Do you handle GCAA drone permits for resort aerials?", a: "Yes. All our drone operators hold GCAA-approved licences and we manage the no-objection certificate process for resort locations. Coastal properties sometimes require additional coastal authority clearance, which we also coordinate." },
        { q: "Can you provide assets formatted for OTA platforms?", a: "We deliver all room photography in the aspect ratios and resolutions required by Booking.com, Expedia, and Airbnb Luxe as standard. We can also supply metadata-tagged image packages for direct upload into your channel manager." },
        { q: "Do you work with resorts outside Dubai?", a: "We cover all UAE emirates regularly, including Ras Al Khaimah, Fujairah, Umm Al Quwain, and Abu Dhabi. Travel and accommodation for shoots outside Dubai are factored into the project quote." },
        { q: "What is included in your quarterly content top-up packages?", a: "Quarterly packages typically include a half-day shoot refreshing seasonal content for F&B menus, any refurbished rooms, and updated pool or beach lifestyle imagery. Deliverables are agreed at the start of each quarter based on your upcoming campaigns." },
        { q: "Can you match content to our global brand guidelines?", a: "Yes. We work with resort group brand guidelines regularly, including colour grading, talent wardrobe direction, and prop standards. Please share your brand deck before the shoot." },
      ],
      relatedLocations: [
        { label: "Resort Content Dubai", href: "/locations/dubai" },
        { label: "Resort Photography RAK", href: "/locations/ras-al-khaimah" },
        { label: "Resort Video Fujairah", href: "/locations/fujairah" },
      ],
      relatedPosts: [
        { title: "Hotel Photography Guide UAE 2026", href: "/blog/hotel-photography-dubai-2026" },
        { title: "Drone Filming Rules UAE 2026", href: "/blog/drone-videography-rules-dubai-2026" },
      ],
    },

  },

  /* ── REAL ESTATE ── */
  "real-estate": {

    "luxury-villa": {
      parentSlug: "real-estate",
      parentName: "Real Estate",
      name: "Luxury Villa Photography & Video",
      tagline: "Visual Content That Sells Villas Before the Viewing",
      heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
      metaTitle: "Luxury Villa Photography Dubai UAE | Backyard Studio",
      metaDescription: "Luxury villa photography, video, and drone for Dubai and UAE property listings. Twilight shoots, aerial walkthroughs, and Reels for off-plan and ready villas.",
      keywords: ["luxury villa photography Dubai","villa video Dubai","villa drone photography UAE","property photography Dubai villa","luxury real estate content UAE"],
      intro: "A luxury villa is one of the highest-value listings in any real estate portfolio, and buyers at this level make decisions based on the quality of the visual presentation before they agree to a viewing. Backyard Studio produces villa photography, video, and drone content for independent sellers, developer sales teams, and luxury real estate agencies across Dubai and the wider UAE.\n\nWe shoot luxury villas with the same production discipline applied to commercial editorial campaigns: controlled lighting in every room, precision drone routes planned to capture pool, garden, and neighbourhood context, and a hero video that guides the viewer through the property in a way that static photography cannot.",
      challenge: "Luxury villa listings regularly fail to reach buyers at the right price point because the photography looks identical to mid-market listings. Smartphone images, harsh flash, and wide-angle distortion all undermine buyer trust. At AED 10 million and above, a buyer's advisor will filter listings on photography quality alone before recommending a viewing.",
      solution: "We treat every villa shoot as an editorial production. We arrive before sunrise for exterior twilight shots, use professional lighting rigs for interior rooms, schedule the pool and garden session for the golden hour, and fly the drone during the optimal window for shadows and colour. The final asset set covers still photography, a cinematic walkthrough video, a 60-second Instagram Reel, and a dedicated drone aerial sequence.",
      services: [
        { label: "Architectural Photography", href: "/services/photo-shoots", desc: "Interior and exterior photography with professional lighting — twilight and golden hour sessions included." },
        { label: "Villa Walkthrough Video", href: "/services/corporate-films", desc: "Cinematic 2 to 4-minute villa walkthrough — stabilised gimbal, professional voice-over optional." },
        { label: "Aerial Drone", href: "/services/aerial-drone", desc: "GCAA-permitted drone coverage — pool, garden, neighbourhood, and beach or golf course proximity." },
        { label: "Instagram Reels", href: "/services/reels", desc: "60 to 90-second vertical Reel optimised for discovery on Instagram and WhatsApp." },
        { label: "Twilight & Golden Hour", href: "/services/photo-shoots", desc: "Exterior twilight and pool photography during the 20-minute window that produces the most compelling hero image." },
        { label: "Branded Agency Video", href: "/services/corporate-films", desc: "Hero video delivered with your agency branding, logo, contact details, and DLD regulatory disclosures." },
      ],
      results: [
        { stat: "3x", label: "more enquiries on listings with professional video vs. photo-only" },
        { stat: "18%", label: "higher sale price on listings with twilight hero photography" },
        { stat: "1 day", label: "typical turnaround for a full luxury villa shoot and delivery" },
      ],
      caseStudy: {
        title: "Palm Jumeirah Villa Listing Campaign",
        client: "Independent Villa Owner, Palm Jumeirah Dubai",
        result: "Listed at AED 28M; sold in 11 days with 4 competing offers after content launch",
        body: "A private seller on Palm Jumeirah instructed their agent to relaunch a villa that had been on the market for six months with no offers. The existing listing used developer handover photography and a single drone image. We produced a full one-day shoot: twilight exterior with pool illumination, room-by-room interior photography, a 3-minute cinematic walkthrough, a 75-second Instagram Reel, and a complete aerial sequence showing the villa's plot position, beach access, and skyline views. The relaunched listing generated four competing offers within 11 days and the villa sold at AED 28 million.",
      },
      faqs: [
        { q: "How long does a luxury villa shoot take?", a: "A full production day runs 8 to 10 hours covering exterior twilight at sunrise, interior photography mid-morning, pool and garden golden hour in late afternoon, and exterior twilight at sunset. For very large properties we recommend a two-day shoot." },
        { q: "Do you include drone photography in the villa package?", a: "Yes. Drone is included in our luxury villa package as standard. All pilots hold GCAA-approved licences and we obtain the necessary no-objection certificates. Palm Jumeirah and Downtown Dubai require DCAA approval, which we coordinate." },
        { q: "What is the turnaround time for delivery?", a: "Standard delivery is 5 to 7 working days from the shoot date. Rush delivery within 48 hours is available for an additional fee." },
        { q: "Can you shoot furnished and unfurnished villas?", a: "Yes to both. For unfurnished villas, we bring key staging props to ensure the photography reads as aspirational rather than empty. Virtual staging is also available as an add-on." },
        { q: "Do you work with real estate agencies directly?", a: "Yes. We have ongoing retainer arrangements with several Dubai luxury real estate agencies, including per-listing packages and monthly flat-fee arrangements for high-volume teams." },
        { q: "Can the video include branded agency intros and outros?", a: "Yes. We deliver the hero video with your agency branding, logo, contact details, and any regulatory disclosures required by the Dubai Land Department as standard." },
      ],
      relatedLocations: [
        { label: "Villa Photography Dubai", href: "/locations/dubai" },
        { label: "Villa Photography Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Villa Video RAK", href: "/locations/ras-al-khaimah" },
      ],
      relatedPosts: [
        { title: "Real Estate Photography Guide Dubai 2026", href: "/blog/real-estate-photography-dubai-2026" },
        { title: "Drone Photography Guide UAE 2026", href: "/blog/drone-photography-dubai-2026" },
      ],
    },

    "off-plan": {
      parentSlug: "real-estate",
      parentName: "Real Estate",
      name: "Off-Plan Launch Content",
      tagline: "Content That Sells Units Before the First Floor Rises",
      heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
      metaTitle: "Off-Plan Property Content Dubai UAE | Backyard Studio",
      metaDescription: "Off-plan property launch video, drone, and photography for Dubai developers. Launch films, investor decks, and social content for new projects.",
      keywords: ["off-plan property video Dubai","real estate launch video UAE","developer content Dubai","property launch film Dubai","off-plan marketing content UAE"],
      intro: "Off-plan property requires buyers to commit to an asset they cannot yet touch. The entire sales process runs on content. Developers across Dubai and the wider UAE use Backyard Studio to produce the visual and video content that drives off-plan sales — from CGI-integrated launch films and investor presentation videos to construction progress documentation and handover photography packages.\n\nWe understand the off-plan sales cycle and produce content timed to each phase: pre-launch investor content, public launch campaign assets, construction update social content, and handover documentation that builds buyer confidence.",
      challenge: "Off-plan developers face a specific content challenge: they need to sell a property that does not exist yet. Render quality and video production standards have risen dramatically among buyers and investor advisors. A launch film that looked impressive in 2020 now signals a low-confidence developer. At the same time, construction progress content needs to be produced continuously across a 24 to 36-month build cycle.",
      solution: "We work with developers across the full project lifecycle. Pre-launch, we produce CGI-integrated films blending architectural renders with Dubai lifestyle footage. At public launch, we deliver a hero launch film, a social package of 6 to 12 short-form videos, photography for press and brokers, and a drone survey of the site. During construction, we provide monthly or quarterly progress content packages. At handover, we produce unit walk-through videos and the official handover photography suite.",
      services: [
        { label: "CGI-Integrated Launch Films", href: "/services/corporate-films", desc: "Developer launch films combining architectural renders with UAE lifestyle footage — 90 seconds to 4 minutes." },
        { label: "Site Drone Documentation", href: "/services/aerial-drone", desc: "GCAA-permitted construction site drone surveys and cinematic aerials at each project milestone." },
        { label: "Investor Presentation Video", href: "/services/corporate-films", desc: "60 to 90-second investor pitch video for private placements, roadshows, and broker networks." },
        { label: "Social Media Launch Package", href: "/services/social-media-content", desc: "6 to 12 short-form videos for Instagram, LinkedIn, and WhatsApp broadcast lists — timed to launch week." },
        { label: "Construction Progress Content", href: "/services/corporate-films", desc: "Monthly or quarterly on-site video and photography documenting build progress for buyer confidence updates." },
        { label: "Handover Photography", href: "/services/photo-shoots", desc: "Complete handover photography suite — unit interiors, common areas, amenities, and exteriors." },
      ],
      results: [
        { stat: "AED 2.1bn", label: "in enquiries generated for a tower launch in one week" },
        { stat: "60%", label: "of brokers say video is their primary tool for off-plan sales pitches" },
        { stat: "4 days", label: "typical turnaround for a launch week social content package" },
      ],
      caseStudy: {
        title: "Mixed-Use Tower Pre-Launch Campaign",
        client: "Tier 1 UAE Developer, Business Bay Dubai",
        result: "Pre-launch phase sold out in 3 days; launch week generated AED 2.1bn in enquiries",
        body: "A major Dubai developer engaged us six weeks before the public launch of a mixed-use tower in Business Bay. We delivered a 3-minute CGI-integrated launch film, a 75-second investor version in Arabic and English, and 10 social videos formatted for Instagram, TikTok, and WhatsApp with captions in Arabic, Hindi, and Russian. The pre-launch phase sold out within three days and the first public launch week generated AED 2.1 billion in enquiries.",
      },
      faqs: [
        { q: "Can you work with CGI renders and architectural visualisations?", a: "Yes. We work with renders supplied by your visualisation studio or we can coordinate with UAE-based CGI firms. We composite render sequences with live footage, drone, and lifestyle material into a seamless launch film." },
        { q: "What is the minimum lead time for an off-plan launch film?", a: "A standard launch film with CGI integration requires a minimum of four weeks from brief to delivery. Rush production in two to three weeks is possible for established clients with existing render libraries." },
        { q: "Do you provide Arabic language versions?", a: "Yes. We offer Arabic voice-over, Arabic caption overlays, and right-to-left subtitle formatting as standard add-ons. All Arabic content is reviewed by a native speaker before delivery." },
        { q: "Can you document construction progress on a retainer basis?", a: "Yes. We offer quarterly and monthly construction documentation retainers, typically including one shoot day per period with drone, still photography, and a 60-second progress update video." },
        { q: "What file formats do you deliver for launch events?", a: "For launch events we deliver ProRes master files for the main screen, H.264 MP4 for laptop and tablet playback, and a 4K JPEG photography package. A looping 30-second silent version for display screens is also available." },
        { q: "Do you deliver DLD-compliant content?", a: "Yes. All video and photography for Dubai real estate marketing is produced with DLD disclosure requirements in mind, including required watermarks and disclaimer text on all marketing materials." },
      ],
      relatedLocations: [
        { label: "Property Launch Video Dubai", href: "/locations/dubai" },
        { label: "Developer Content Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Property Launch RAK", href: "/locations/ras-al-khaimah" },
      ],
      relatedPosts: [
        { title: "Real Estate Photography Guide Dubai 2026", href: "/blog/real-estate-photography-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
      ],
    },

  },

  /* ── FASHION ── */
  "fashion": {

    "model-portfolio": {
      parentSlug: "fashion",
      parentName: "Fashion",
      name: "Model Portfolio Photography",
      tagline: "Portfolio Shoots That Open Agency Doors",
      heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80",
      metaTitle: "Model Portfolio Photography Dubai UAE | Backyard Studio",
      metaDescription: "Professional model portfolio photography in Dubai. Studio and on-location shoots for aspiring and working models. Comp card, agency submission, and editorial sets.",
      keywords: ["model portfolio photography Dubai","model shoot Dubai","comp card photography UAE","model agency submission Dubai","editorial model photography UAE"],
      intro: "A model's portfolio is their primary business asset. In the Dubai and GCC market, agencies and casting directors see hundreds of submission sets each month. The portfolios that secure representation are those that show versatility, technical quality, and a consistent sense of identity. Backyard Studio produces model portfolio photography for aspiring models seeking agency representation, working models refreshing their books, and international talent relocating to the UAE market.\n\nWe understand what UAE agencies look for. Our portfolio packages are structured around those requirements: clean studio headshots, editorial looks on location, commercial lifestyle sets, and high-fashion wardrobe sequences that show range.",
      challenge: "Many aspiring models invest in portfolio shoots with photographers who produce technically competent images but do not understand the commercial and agency submission context. The result is a portfolio that looks like a lifestyle brand campaign rather than a model's professional book — and agencies can identify this immediately. Dubai's modelling market is competitive, with talent arriving from South Asia, Eastern Europe, and across MENA.",
      solution: "Every portfolio package we offer is built around submission standards for UAE-based agencies and GCC casting briefs. Studio looks are shot against seamless white and grey for clean comp card use. Editorial locations are selected to read as international rather than distinctly local, maximising the portfolio's usefulness for agencies placing talent globally.",
      services: [
        { label: "Studio Portfolio Sets", href: "/services/photo-shoots", desc: "Clean studio headshots, half-body, and full-length sets on white, grey, and dark seamless for comp card and agency submission." },
        { label: "Editorial Location Shoots", href: "/services/photo-shoots", desc: "On-location editorial sets across Dubai — architecture, urban, and natural backdrops for international portfolio use." },
        { label: "Commercial Lifestyle Sets", href: "/services/photo-shoots", desc: "Commercial lifestyle looks showing natural movement and the relaxed quality casting directors look for in commercial talent." },
        { label: "High-Fashion Wardrobe Sets", href: "/services/photo-shoots", desc: "Directed wardrobe sets for models targeting fashion weeks, editorial, and high-fashion brand casting." },
        { label: "Comp Card Design", href: "/services/photo-shoots", desc: "Professional comp card design and print-ready PDF from your portfolio images — agency-standard layout." },
        { label: "Video Showreel", href: "/services/reels", desc: "60 to 90-second model showreel for agencies requesting video submissions — movement, runway walk, and personality content." },
      ],
      results: [
        { stat: "73%", label: "of models who shoot with us receive agency contact within 60 days" },
        { stat: "1 day", label: "studio and location shoot completed in a single day" },
        { stat: "48 hrs", label: "selection gallery delivered for model review before final retouching" },
      ],
      caseStudy: {
        title: "Agency Submission Portfolio for South Asian Model",
        client: "Aspiring Model, Relocating from Mumbai to Dubai",
        result: "Signed with two UAE agencies within 45 days; booked first commercial campaign within 90 days",
        body: "A Mumbai-based model relocating to Dubai needed a portfolio that would meet UAE agency submission standards. Their existing portfolio had been shot in India and did not reflect the clean, versatile aesthetic that UAE agencies require. We produced a one-day shoot across studio and two Dubai locations: white seamless studio headshots, a clean architectural urban set in DIFC, and a natural daylight lifestyle set in Al Quoz. The model received agency contact from two Dubai agencies within 45 days and was booked for their first UAE commercial campaign within 90 days.",
      },
      faqs: [
        { q: "What should I bring to a model portfolio shoot?", a: "We send a pre-shoot preparation guide covering wardrobe, grooming, and reference images. As a general rule, bring a range of outfits covering casual, smart casual, and formal, plus one fashion-forward look if you are targeting editorial or high-fashion work." },
        { q: "Do you provide a stylist and makeup artist?", a: "A makeup artist is included in our premium portfolio package. Hair styling and wardrobe styling can be added as separate services — we work with a roster of UAE-based stylists at various price points." },
        { q: "How many final images do I receive?", a: "Our standard portfolio package delivers 30 fully retouched images across all sets. The premium package delivers 60 images. Additional images can be purchased at a per-image rate after you have reviewed the selection gallery." },
        { q: "Is retouching included?", a: "Yes. All final portfolio images include professional skin retouching, colour grading matched to industry editorial standards, and background cleanup where required." },
        { q: "Can you advise on which images to submit to agencies?", a: "Yes. After your selection gallery review, we offer a 30-minute image selection consultation advising on the strongest sets for each type of agency — commercial, editorial, and high-fashion." },
        { q: "Do you work with male models?", a: "Yes. Approximately 40% of our portfolio clients are male. All packages and services apply equally." },
      ],
      relatedLocations: [
        { label: "Model Photography Dubai", href: "/locations/dubai" },
        { label: "Model Photography Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Model Shoot Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Fashion Photography Guide Dubai 2026", href: "/blog/fashion-photography-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
      ],
    },

    "fashion-reels": {
      parentSlug: "fashion",
      parentName: "Fashion",
      name: "Fashion Reels & Social Content",
      tagline: "Reels That Turn Scrollers Into Shoppers",
      heroImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
      metaTitle: "Fashion Reels Production Dubai UAE | Backyard Studio",
      metaDescription: "Fashion Reels and social content production in Dubai. Lookbook videos, collection drops, brand campaign Reels, and TikTok fashion content for UAE brands.",
      keywords: ["fashion reels Dubai","fashion video content UAE","lookbook video Dubai","fashion TikTok content UAE","fashion brand Reels Dubai"],
      intro: "Fashion content on Instagram and TikTok moves at a pace that most brands cannot match with traditional production cycles. Backyard Studio produces fashion Reels, lookbook videos, and social content packages for Dubai-based fashion brands, modest fashion labels, retail groups, and individual designer labels.\n\nOur fashion social content is built for the UAE market. We understand the aesthetic preferences of the GCC audience, the content formats that perform on Arabic-language feeds, and the seasonal fashion cycle in the UAE — which runs differently from European fashion calendars due to Ramadan, Eid, National Day, and the summer travel period.",
      challenge: "Fashion brands in the UAE consistently under-produce content. A seasonal collection that required six months of design work often launches with three days of content. The feed goes quiet within a week and the momentum from launch day is lost. At the same time, content produced for European or US markets does not always perform in the UAE.",
      solution: "We produce fashion content in batches, not single shoots. A typical fashion Reels package covers an entire season: a hero launch Reel, six to twelve individual product Reels, a behind-the-scenes series, and a campaign-closing Reel. All content is produced to a shot list approved before the shoot so your content calendar is filled the moment assets are delivered.",
      services: [
        { label: "Collection Launch Reels", href: "/services/reels", desc: "Hero launch Reel for new collection drops — 30 to 60 seconds, optimised for Instagram and TikTok algorithm reach." },
        { label: "Product Reels", href: "/services/reels", desc: "Individual product Reels for each hero SKU — movement, detail, and styling in under 30 seconds." },
        { label: "Lookbook Video", href: "/services/corporate-films", desc: "Seasonal lookbook in video format — 90 seconds to 3 minutes — for website, YouTube, and email campaigns." },
        { label: "Behind-The-Scenes Content", href: "/services/social-media-content", desc: "BTS content from the production day — studio prep, model direction, styling — formatted for Instagram Stories." },
        { label: "TikTok Fashion Content", href: "/services/social-media-content", desc: "TikTok-native fashion content with trending audio, text overlays, and the format the platform rewards." },
        { label: "Monthly Content Packages", href: "/services/social-media-content", desc: "Ongoing monthly content packages keeping your fashion feed active with new material every week." },
      ],
      results: [
        { stat: "40%", label: "average Instagram following growth in 30 days post-launch for fashion clients" },
        { stat: "12 Reels", label: "minimum delivered per production day" },
        { stat: "3 days", label: "average delivery from shoot to final content package" },
      ],
      caseStudy: {
        title: "Ramadan Collection Launch Content",
        client: "UAE Modest Fashion Label",
        result: "Collection sold out in 8 days; 22,000 new Instagram followers added in launch month",
        body: "A Dubai-based modest fashion label needed a Ramadan collection launch that could compete with international brands dominating UAE Instagram feeds. We produced a one-day shoot delivering a 60-second hero launch Reel, 14 individual abaya and kaftan Reels, a 3-minute lookbook video for YouTube, and a 20-piece Instagram Stories series for the launch countdown. All content was produced in English and Arabic versions. The collection sold out eight days after launch and the brand added 22,000 new Instagram followers in the launch month.",
      },
      faqs: [
        { q: "How many Reels can you produce in a single shoot day?", a: "A typical fashion Reels production day with one model and two to three location setups delivers 10 to 16 finished Reels. Higher volumes are achievable with simplified setups and fewer outfit changes." },
        { q: "Do you produce content in Arabic?", a: "Yes. We can overlay Arabic captions, produce content with Arabic-language voice-over or text direction, and advise on content formats that perform on Arabic-language accounts." },
        { q: "Can we use our own models or influencers?", a: "Yes. If you have a brand ambassador, influencer, or existing model relationship, they can be the lead talent. We handle all other production elements." },
        { q: "What platforms do you optimise content for?", a: "Our standard delivery includes vertical 9:16 for Instagram Reels and TikTok, square 1:1 for feed posts, and horizontal 16:9 for YouTube and website use. All three formats are delivered from each piece of content." },
        { q: "How far in advance should we book for a collection launch?", a: "We recommend booking four to six weeks ahead of your planned launch date. For Ramadan launches, we recommend booking at least eight weeks in advance as shoot dates fill quickly." },
        { q: "Do you offer monthly retainer packages for fashion brands?", a: "Yes. Our fashion retainer packages typically include one shoot day per month delivering a minimum of 12 Reels and a content calendar for the month. Retainer clients receive priority scheduling." },
      ],
      relatedLocations: [
        { label: "Fashion Reels Dubai", href: "/locations/dubai" },
        { label: "Fashion Content Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Fashion Photography Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Fashion Photography Guide Dubai 2026", href: "/blog/fashion-photography-dubai-2026" },
        { title: "Social Media Content UAE 2026", href: "/blog/social-media-content-creation-dubai-2026" },
      ],
    },

  },

  /* ── FOOD & BEVERAGE ── */
  "food-beverage": {

    "restaurants": {
      parentSlug: "food-beverage",
      parentName: "Food & Beverage",
      name: "Restaurant Photography & Video",
      tagline: "Food Content That Fills Tables and Delivery Queues",
      heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
      metaTitle: "Restaurant Photography Dubai UAE | Backyard Studio",
      metaDescription: "Restaurant photography, menu video, and social content for Dubai restaurants and cafes. Delivery app listing photography, ambience video, and Reels that drive bookings.",
      keywords: ["restaurant photography Dubai","restaurant video UAE","food photography Dubai restaurant","restaurant social content UAE","restaurant delivery app photography Dubai"],
      intro: "A restaurant in Dubai competes across three battlegrounds simultaneously: dine-in discovery through Google Maps and delivery apps, social media visibility through Instagram and TikTok, and direct reservation through your website. Each channel has different content requirements. Backyard Studio produces photography and video for Dubai restaurants and cafes that performs across all three.\n\nWe work with restaurants across all Dubai dining categories — casual dining, fine dining, casual cafe, specialty coffee, cloud kitchens, and multi-branch F&B groups — and across all cuisine types including Emirati, Arabic, South Asian, East Asian, and European concepts.",
      challenge: "Most Dubai restaurants underinvest in visual content and then wonder why their delivery app ranking stagnates and their social feeds fail to generate reservations. The reality is that delivery platforms explicitly factor photography quality into their algorithmic ranking — menus with professional food photography outperform equivalent menus with smartphone images by a measurable margin in click-through and conversion.",
      solution: "We approach restaurant content as a commercial system, not a creative exercise. Every food photography session is planned around the menu hierarchy — hero dishes first, supporting menu items second, drinks and desserts third. Delivery app images are shot to platform specifications. Ambience photography is scheduled for peak visual times. Reels are scripted against your specific reservation or delivery call-to-action.",
      services: [
        { label: "Menu Photography", href: "/services/food-photography", desc: "Hero dish photography and full menu coverage for delivery apps, your website, and printed menus." },
        { label: "Ambience Photography", href: "/services/photo-shoots", desc: "Interior and exterior ambience photography for Google Business, reservation platforms, and press use." },
        { label: "Restaurant Reels", href: "/services/reels", desc: "Short-form video content for Instagram and TikTok — chef content, dish reveal, ambience, and event coverage." },
        { label: "Delivery App Optimisation", href: "/services/food-photography", desc: "Photography and listing image sets formatted to Talabat, Deliveroo, and Noon Food specifications." },
        { label: "Event & Launch Content", href: "/services/event-videography", desc: "Opening night, seasonal menu launch, and private dining event coverage for social and PR use." },
        { label: "Monthly Content Packages", href: "/services/social-media-content", desc: "Ongoing monthly content packages keeping your restaurant feed active with new food and lifestyle material." },
      ],
      results: [
        { stat: "43%", label: "average delivery order increase after menu photography refresh" },
        { stat: "180 dishes", label: "maximum covered in a full menu photography day" },
        { stat: "2 days", label: "typical delivery turnaround for a standard restaurant shoot" },
      ],
      caseStudy: {
        title: "Multi-Branch Restaurant Group Content Refresh",
        client: "12-Branch UAE Casual Dining Group",
        result: "Delivery orders up 43% across all branches within 60 days of new listing images going live",
        body: "A 12-branch UAE casual dining group had been using in-house smartphone photography across their Talabat and Deliveroo listings for three years. We produced a 3-day content shoot covering all 180 menu items, ambience photography for all 12 branches, and a brand launch Reel for Instagram. New listing images were uploaded across all delivery platforms over a single weekend. Within 60 days, the group saw an average 43% increase in delivery orders across all branches.",
      },
      faqs: [
        { q: "How do you handle food styling for restaurant shoots?", a: "Our food photography team includes a food stylist as standard. The stylist works with your kitchen team to ensure dishes are plated to your standard, then applies professional styling techniques to make each dish look its best on camera." },
        { q: "Can you shoot during service hours?", a: "We prefer to work during prep periods — before or after service — for menu photography so your kitchen team is not disrupted. Ambience photography and Reels requiring atmosphere can be scheduled during a quiet service period." },
        { q: "What delivery app specifications do you shoot to?", a: "We are familiar with the image specifications for Talabat, Deliveroo, Noon Food, Careem Food, and HungerStation. Our delivery app photography package delivers images at the correct dimensions and file size for each platform." },
        { q: "Do you offer ongoing monthly content for restaurant social media?", a: "Yes. Our restaurant monthly content packages include one shoot session per month delivering 8 to 12 new food images, 4 Reels, and a 30-piece Instagram Stories content calendar." },
        { q: "Can you produce content in Arabic for GCC markets?", a: "Yes. We deliver caption copy in English and Arabic as standard for delivery app content. Social media content can be produced with Arabic text overlays." },
        { q: "How do you handle lighting in dark or atmospheric restaurant interiors?", a: "We use low-intensity LED panels and bounce boards rather than direct flash, and we adjust the white balance to maintain the warmth of candlelight and Edison bulb environments." },
      ],
      relatedLocations: [
        { label: "Restaurant Photography Dubai", href: "/locations/dubai" },
        { label: "Restaurant Content Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "F&B Photography Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Food Photography Guide Dubai 2026", href: "/blog/food-photography-guide-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
      ],
    },

    "menu-photography": {
      parentSlug: "food-beverage",
      parentName: "Food & Beverage",
      name: "Menu Photography",
      tagline: "Dish Photography That Drives Orders Before the First Bite",
      heroImage: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1920&q=80",
      metaTitle: "Menu Photography Dubai UAE | Backyard Studio",
      metaDescription: "Professional menu photography for restaurants, cafes, and cloud kitchens in Dubai and the UAE. Delivery app, printed menu, and website food photography.",
      keywords: ["menu photography Dubai","food menu photography UAE","dish photography Dubai","delivery app food photography UAE","restaurant menu photos Dubai"],
      intro: "Menu photography is one of the highest-return investments a restaurant or cloud kitchen can make. Research from the major UAE delivery platforms consistently shows that menus with professional photography outperform equivalent menus with low-quality or missing images by a significant margin in click-through and conversion. Backyard Studio produces menu photography for restaurants, cafes, cloud kitchens, and F&B groups across Dubai and the UAE.\n\nOur menu photography service is built around efficiency. We know how to move through a menu at pace without sacrificing quality. A typical full-day menu session covers 80 to 120 dishes depending on complexity, with a dedicated food stylist managing all plating.",
      challenge: "The specific challenge of menu photography is volume with consistency. A 60-dish menu needs 60 images that all look like they belong to the same brand — same lighting, same colour temperature, same angle approach, same styling language. Maintaining that consistency across a full-day shoot while managing a live kitchen is a production discipline that most general photographers are not set up for.",
      solution: "We run menu photography sessions as a production line. Before the shoot day, we build a shot list organised by category and plating complexity. The food stylist presets all prop selections and background options. On the day, dishes are brought out in category order and a quality check image is approved before we move into volume shooting. We maintain a reference monitor on set so every image can be checked for consistency before the dish is cleared.",
      services: [
        { label: "Delivery App Photography", href: "/services/food-photography", desc: "White background and clean lifestyle dish photography formatted to Talabat, Deliveroo, and Noon Food specifications." },
        { label: "Printed Menu Photography", href: "/services/food-photography", desc: "High-resolution dish photography suitable for printed menu design, with colour profiles matched to print production requirements." },
        { label: "Website Gallery Photography", href: "/services/food-photography", desc: "Hero dish photography and category gallery sets for restaurant website integration." },
        { label: "Social Media Dish Content", href: "/services/reels", desc: "Dish reveal Reels and food photography formatted for Instagram feed posts and Stories." },
        { label: "Drinks Photography", href: "/services/food-photography", desc: "Cocktail, coffee, juice, and mocktail photography — styled for menu and social use." },
        { label: "Volume Menu Packages", href: "/services/food-photography", desc: "Full-menu coverage packages for groups and multi-location operators — consistent quality across all brands." },
      ],
      results: [
        { stat: "120 dishes", label: "maximum covered in a single full-day session with dual shooters" },
        { stat: "38% avg", label: "delivery conversion rate improvement after professional menu photography" },
        { stat: "48 hrs", label: "standard delivery of selects gallery for client approval" },
      ],
      caseStudy: {
        title: "Cloud Kitchen Menu Photography Suite",
        client: "Multi-Brand Cloud Kitchen Operator, Dubai",
        result: "Ranked in the top 10 on Talabat for three cuisine categories within 45 days of new photography going live",
        body: "A Dubai multi-brand cloud kitchen operator running four cuisine brands needed professional photography across all 240 menu items. The existing listing photography was a mix of stock images and smartphone shots. We produced a two-day shoot with dual shooters, covering all four brands with consistent production quality while maintaining distinct brand aesthetics for each cuisine type. Within 45 days, three of the four brands had entered the top 10 rankings in their respective cuisine categories on Talabat.",
      },
      faqs: [
        { q: "How many dishes can you photograph in one day?", a: "With a single shooter and food stylist, we cover 60 to 80 dishes in a full day. With dual shooters, we can cover 100 to 120 dishes. For very large menus, we schedule a two-day shoot to maintain quality throughout." },
        { q: "Do you provide food styling or do we need our own?", a: "A food stylist is included in all our menu photography packages. If your concept has specific plating conventions or brand guidelines for dish presentation, please share these before the shoot." },
        { q: "What background options do you offer for delivery app photography?", a: "Our standard delivery app package includes a white seamless background option and a clean marble or slate surface option. Both options meet the image requirements of UAE delivery platforms." },
        { q: "Can you reshoot dishes that change seasonally?", a: "Yes. Many of our restaurant clients book a quarterly or seasonal reshoot session for new menu additions. We maintain a reference file from your original shoot so new dishes are matched to the same lighting and styling." },
        { q: "Do you deliver in time for a menu launch?", a: "Standard delivery is 3 to 5 working days from the shoot. Rush delivery within 24 to 48 hours is available for priority items needed for an upcoming launch." },
        { q: "Can you photograph drinks and desserts at the same session?", a: "Yes. Drinks and desserts are included in all menu photography sessions. If your drinks menu is large — more than 20 items — we recommend adding a second shooter to keep the session timeline on track." },
      ],
      relatedLocations: [
        { label: "Menu Photography Dubai", href: "/locations/dubai" },
        { label: "Food Photography Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Restaurant Photography Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Food Photography Guide Dubai 2026", href: "/blog/food-photography-guide-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
      ],
    },

  },

  /* ── SPORTS (additional) ── */
  "sports": {

    "football": {
      parentSlug: "sports",
      parentName: "Sports",
      name: "Football Event Photography & Video",
      tagline: "Match Coverage That Earns Views Long After the Final Whistle",
      heroImage: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=1920&q=80",
      metaTitle: "Football Event Photography Dubai UAE | Backyard Studio",
      metaDescription: "Football match photography and video in Dubai and the UAE. Arabian Gulf League, amateur leagues, corporate football, and youth academy coverage. Same-day reels delivered.",
      keywords: ["football photography Dubai","football event video UAE","Arabian Gulf League photography","football match coverage Dubai","football video production UAE"],
      intro: "Football is the most-watched sport in the UAE and one of the most-contested content categories on social media. Clubs in the Arabian Gulf League, the UAE Pro League, and the growing ecosystem of amateur and corporate leagues all need match content that can be published the same day. Backyard Studio produces football photography and video for professional clubs, amateur leagues, football academies, and corporate tournament organisers across the UAE.\n\nWe deploy multi-camera rigs for professional match coverage, produce same-day highlight reels formatted for Instagram and TikTok, and deliver full match photography galleries within 24 hours.",
      challenge: "Football content has a shelf life measured in hours. A match highlight reel published 48 hours after the game is already irrelevant — the conversation has moved on and the algorithm has deprioritised it. Most UAE clubs struggle with the production capacity required to deliver same-day content consistently across a full season.",
      solution: "Our football coverage operation is built around same-day delivery. A match day crew typically includes a pitch-side stills photographer, a primary video operator, and an editor who begins cutting the highlight reel during the second half. A 90-second highlight reel is delivered within two to four hours of the final whistle. Full match photography is delivered within 24 hours.",
      services: [
        { label: "Match Photography", href: "/services/event-shoots", desc: "Pitch-side match photography — action, set pieces, celebrations, and player portraits. Delivered within 24 hours." },
        { label: "Same-Day Highlight Reels", href: "/services/event-videography", desc: "90-second Instagram and TikTok highlight reel delivered within 2 to 4 hours of the final whistle." },
        { label: "Multi-Camera Match Coverage", href: "/services/event-videography", desc: "4-camera match coverage for clubs requiring full match recordings, coach review footage, and broadcast-quality cuts." },
        { label: "Aerial Stadium Footage", href: "/services/aerial-drone", desc: "GCAA-permitted drone coverage of stadiums and pitches — pre-match aerials, halftime crowd shots, and fly-through sequences." },
        { label: "Season Retainer Packages", href: "/services/event-videography", desc: "Season-long coverage packages for home fixtures — guaranteed crew, consistent quality, same-day delivery across all matches." },
        { label: "Player & Academy Portraits", href: "/services/photo-shoots", desc: "Club photography days for official player headshots, squad photos, and youth academy portraits." },
      ],
      results: [
        { stat: "1.8M avg", label: "views per highlight reel for UAE Pro League clients" },
        { stat: "2 hrs", label: "highlight reel delivery from final whistle" },
        { stat: "34%", label: "social following growth for a UAE Pro League club across one season" },
      ],
      caseStudy: {
        title: "UAE Pro League Season Coverage",
        client: "UAE Pro League Football Club",
        result: "1.8M average views per highlight reel; sponsor inventory sold out for following season",
        body: "A UAE Pro League club engaged us for season-long match coverage after their in-house team struggled with production quality and delivery speed. We deployed a 4-camera live rig, pitch-side photographer, and GCAA drone for aerial stadium shots across 18 home fixtures. The same-day highlight reel format averaged 1.8M views per match by the end of the season. By mid-season, the club's social following had grown 34% and all sponsor inventory for the following season had been sold three months before the start.",
      },
      faqs: [
        { q: "Do you cover amateur and corporate football leagues?", a: "Yes. We cover the full spectrum from professional Arabian Gulf League fixtures to corporate 5-a-side tournaments and youth academy match days. Packages are priced by crew size and deliverable requirements rather than league level." },
        { q: "How quickly can you deliver a highlight reel?", a: "Our standard same-day reel is delivered within 2 to 4 hours of the final whistle. For cup finals or high-profile derbies, we can have a 60-second cut live within 90 minutes with a pre-agreed shot list and dedicated editor on standby." },
        { q: "Can you cover away fixtures?", a: "Yes. We cover fixtures across all UAE emirates. Away fixture travel costs are included within the UAE. For international away fixtures, travel and accommodation are quoted separately." },
        { q: "What access do you need from the club on match day?", a: "Pitch-side access for the stills photographer, a camera platform position for the primary video operator, and press accreditation for all crew members. For drone operations, we require 10 to 14 days advance notice to coordinate with the stadium authority." },
        { q: "Can you produce Arabic-language highlight reels?", a: "Yes. We deliver highlight reels with Arabic text overlays, Arabic voice-over, and right-to-left caption formatting as standard for clubs targeting Arabic-speaking audiences. English versions are always delivered simultaneously." },
        { q: "Do you work with football academies and youth clubs?", a: "Yes. We produce photography and video for youth academies, school football programmes, and grassroots clubs. Youth packages are priced at a different rate to professional club production." },
      ],
      relatedLocations: [
        { label: "Football Coverage Dubai", href: "/locations/dubai" },
        { label: "Football Photography Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Football Video Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Event Videography Guide Dubai 2026", href: "/blog/event-photography-dubai-2026" },
        { title: "Drone Filming Rules UAE 2026", href: "/blog/drone-videography-rules-dubai-2026" },
      ],
    },

    "fitness": {
      parentSlug: "sports",
      parentName: "Sports",
      name: "Fitness & Gym Photography",
      tagline: "Gym Content That Sells Memberships Before the First Workout",
      heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
      metaTitle: "Fitness Photography Dubai UAE | Backyard Studio",
      metaDescription: "Fitness photography and video for gyms, personal trainers, and wellness brands in Dubai and UAE. Launch content, trainer profiles, facility photography, and Instagram Reels.",
      keywords: ["fitness photography Dubai","gym photography UAE","personal trainer video Dubai","fitness content UAE","gym launch video Dubai"],
      intro: "The fitness market in Dubai is one of the most competitive in the world. Boutique studios, big-box gyms, personal training brands, and wellness platforms all compete for the same audience — and increasingly, the content quality is what decides which brands attract premium members. Backyard Studio produces fitness photography and video for gyms, studios, personal trainers, and wellness brands across Dubai and the UAE.\n\nWe cover the full fitness content spectrum: launch campaigns that fill founding memberships before a studio opens, ongoing monthly social content that keeps your feed active, trainer profile videos that build personal brand and attract PT clients, and facility photography that earns Google Business views.",
      challenge: "Fitness brands in Dubai face a specific content challenge: the product is physical transformation and community, neither of which is easy to communicate in a static image. Generic gym photography — equipment shots, empty studios, stock-style models holding weights — does not differentiate a brand and does not earn engagement.",
      solution: "We produce fitness content with real training intensity. All models and talent are athletes or genuine fitness enthusiasts — not fashion models holding equipment. Movement is photographed and filmed during actual exercise rather than posed static shots. Sound design in Reels captures the energy of training: ambient gym sound, motivational coaching audio, and music that aligns with the brand's training culture.",
      services: [
        { label: "Gym Launch Content", href: "/services/corporate-films", desc: "Pre-opening launch content package — facility photography, founder story video, member testimonials, and a hero launch Reel." },
        { label: "Facility Photography", href: "/services/photo-shoots", desc: "Studio and gym facility photography for Google Business, your website, and property listings." },
        { label: "Trainer Profile Videos", href: "/services/corporate-films", desc: "60 to 90-second personal trainer profile videos — background, philosophy, training style, and client results." },
        { label: "Class & Session Coverage", href: "/services/event-shoots", desc: "Live class photography and video — group fitness, HIIT, yoga, martial arts, and personal training sessions." },
        { label: "Monthly Social Content", href: "/services/reels", desc: "Monthly content packages delivering 8 to 12 Reels and 20 static images each month." },
        { label: "Client Transformation Stories", href: "/services/corporate-films", desc: "Before-and-after transformation documentary shorts — 2 to 4 minutes — for YouTube and social proof campaigns." },
      ],
      results: [
        { stat: "350", label: "founding memberships sold in one launch month for a boutique gym client" },
        { stat: "6x ROI", label: "average return on launch content investment within 90 days" },
        { stat: "1 day", label: "gym launch content package produced in a single shoot day" },
      ],
      caseStudy: {
        title: "Premium Boutique Gym Launch Campaign",
        client: "Boutique Fitness Studio, Business Bay Dubai",
        result: "350 founding memberships sold in launch month — beating the 6-month target in 30 days",
        body: "A new premium boutique gym in Business Bay needed launch content to fill founding memberships before opening. We produced a two-day shoot covering all facility spaces, 6 trainer profile videos, 12 social Reels showing unique equipment and class formats, a 90-second brand launch film, and a complete Google Business photography package. By opening day, 350 founding memberships had been sold — beating the studio's 6-month membership target in 30 days.",
      },
      faqs: [
        { q: "Do you work with personal trainers as well as gyms?", a: "Yes. We have specific packages for independent personal trainers who want to build a content-driven client acquisition funnel. A typical PT package includes a professional profile video, 6 training session Reels, and a headshot set suitable for Instagram and LinkedIn." },
        { q: "Can you shoot during live classes with real members?", a: "Yes, with member consent. We always recommend shooting at least some content during live classes rather than staged re-enactments, as authentic group energy is extremely difficult to replicate." },
        { q: "Do you include equipment and studio detail photography?", a: "Yes. Facility photography packages include equipment close-ups, detail shots of class tools and props, locker room and changing facilities where appropriate, and any branded interior features." },
        { q: "How do you handle fitness content for female-only or gender-separated spaces?", a: "We always send a photographer of the appropriate gender for gender-separated spaces and can accommodate full hijab requirements for female talent where relevant." },
        { q: "Can you produce content for fitness apps and YouTube channels?", a: "Yes. Workout tutorial content, nutrition guide videos, and long-form YouTube fitness content are all within scope. Please describe your specific needs when enquiring so we can quote the correct package." },
        { q: "Do you offer content packages for gym chains with multiple locations?", a: "Yes. Multi-location gym groups can access volume pricing across all sites, with a consistent brand visual style maintained across all locations. We manage a shoot schedule that cycles through all sites quarterly." },
      ],
      relatedLocations: [
        { label: "Fitness Photography Dubai", href: "/locations/dubai" },
        { label: "Gym Content Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Fitness Video Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Event Photography Dubai 2026", href: "/blog/event-photography-dubai-2026" },
        { title: "Social Media Content UAE 2026", href: "/blog/social-media-content-creation-dubai-2026" },
      ],
    },

  },

  /* ── CORPORATE (additional) ── */
  "corporate": {

    "investor-pitch": {
      parentSlug: "corporate",
      parentName: "Corporate",
      name: "Investor Pitch Video",
      tagline: "Video Content That Closes Rounds",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
      metaTitle: "Investor Pitch Video Dubai UAE | Backyard Studio",
      metaDescription: "Investor pitch video and fundraising content for Dubai startups and businesses. Founder story films, product demos, and Series A content. All UAE sectors covered.",
      keywords: ["investor pitch video Dubai","fundraising video UAE","startup pitch video Dubai","Series A video production UAE","founder story video Dubai"],
      intro: "An investor pitch video does one job: build confidence in the founding team and the opportunity in the time between a cold introduction and a first meeting. In the UAE's growing venture and private equity landscape, founders who invest in a professional pitch video get more meetings, better-prepared investors, and rounds that close faster.\n\nWe understand the investor content context. A pitch video is not a brand film or a social Reel — it needs to answer the four questions an investor has in the first 90 seconds: What is the problem? What is the solution? Why this team? Why now? Our pitch video format is built around those questions and the specific expectations of GCC, European, and US investors looking at UAE opportunities.",
      challenge: "Most startup pitch videos fail because they are produced as marketing content rather than investment content. A 3-minute brand film with cinematic B-roll and music is not what an investor needs — they need a concise, credible, human presentation of the opportunity. Equally, a founder recording on a laptop camera with poor audio is immediately discredited in a market where visual presentation signals professionalism.",
      solution: "Our investor pitch video format runs 90 seconds to 3 minutes and follows a proven structure: a problem statement that earns attention in the first 10 seconds, a solution demonstration, a market opportunity summary, key traction data presented visually, a team introduction with brief individual bios, and a clear ask. We film founders on a professional studio or branded office set and deliver English and Arabic versions as standard.",
      services: [
        { label: "Founder Story Films", href: "/services/corporate-films", desc: "3 to 5-minute founder story documentary — background, vision, and personal investment in the problem being solved." },
        { label: "Investor Pitch Video", href: "/services/corporate-films", desc: "90-second to 3-minute structured pitch video following the proven investor narrative format." },
        { label: "Product Demo Video", href: "/services/corporate-films", desc: "Clear, concise product demonstration for software, app, or physical product — showing what it does and why it matters." },
        { label: "Traction Slide Animation", href: "/services/corporate-films", desc: "Animated data visualisation of key traction metrics — ARR, MoM growth, user numbers — for integration into pitch materials." },
        { label: "Team Portrait Package", href: "/services/photo-shoots", desc: "Professional team headshots and group photography for pitch decks, investor data rooms, and press use." },
        { label: "Arabic Investor Version", href: "/services/corporate-films", desc: "Full Arabic-language version of all investor content for GCC sovereign wealth, family office, and institutional investor distribution." },
      ],
      results: [
        { stat: "AED 36M", label: "Series A round closed by a Dubai fintech client after pitch video investment" },
        { stat: "3 investors", label: "cited the video as a factor in confidence to commit in one round" },
        { stat: "2 weeks", label: "typical turnaround from brief to final investor video delivery" },
      ],
      caseStudy: {
        title: "Series A Fundraising Content Suite",
        client: "Dubai FinTech Startup",
        result: "Series A round closed at AED 36M; 3 investors cited the video in their decision",
        body: "A Dubai-based fintech startup needed an investor content suite ahead of their Series A round. The founding team was credible and the product was strong, but they were presenting at investor meetings with a slide deck and no video. We produced a 90-second company overview film, a 5-minute founder story documentary, a product demo video for their payments platform, and a team culture photo series. Three investors in the final round explicitly cited the video content as a factor in their confidence to close — and the round closed at AED 36M.",
      },
      faqs: [
        { q: "What length should an investor pitch video be?", a: "Our recommendation is 90 seconds to 3 minutes for a primary pitch video. A 90-second version performs best for cold outreach and email introduction. A 3-minute version works for warm introductions and data room inclusion." },
        { q: "Do you write the script or do we?", a: "We offer both options. Our standard package includes a scriptwriting session where we interview the founding team and build the narrative from your own words. If you have an existing script, we can produce from that directly." },
        { q: "Can you produce a product demo video for software or apps?", a: "Yes. Product demo videos for software and mobile apps require a screen recording session coordinated with your product team, plus live-action footage of the product in use." },
        { q: "Do you provide Arabic-language versions for GCC investors?", a: "Yes. An Arabic-language version with native Arabic voice-over and right-to-left caption formatting is included in our premium investor package. All Arabic content is reviewed by a native GCC Arabic speaker before delivery." },
        { q: "How should we prepare for the shoot?", a: "We send a pre-production brief covering background selection, wardrobe guidance for all team members who appear on camera, and talking points for the interview session." },
        { q: "Can you produce content for an international investor roadshow?", a: "Yes. For roadshow content, we typically produce a main pitch video, a short teaser cut for event screens, and a printed photography package for press materials." },
      ],
      relatedLocations: [
        { label: "Startup Content Dubai", href: "/locations/dubai" },
        { label: "Investor Video Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Corporate Film Dubai", href: "/locations/dubai" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Guide Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
      ],
    },

    "annual-report": {
      parentSlug: "corporate",
      parentName: "Corporate",
      name: "Annual Report Photography & Video",
      tagline: "Report Content That Stakeholders Actually Read",
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
      metaTitle: "Annual Report Photography Dubai UAE | Backyard Studio",
      metaDescription: "Annual report photography and video for corporate clients in Dubai and UAE. Executive portraits, operations photography, ESG content, and report launch films.",
      keywords: ["annual report photography Dubai","corporate annual report video UAE","executive photography Dubai","ESG content production UAE","corporate report content Dubai"],
      intro: "An annual report is the most-consumed piece of content a public company or major private entity produces each year. Investors, regulators, employees, and partners all read it. The photography and video that accompany the report communicate as much about the organisation as the numbers themselves. Backyard Studio produces annual report photography and video content for listed companies, government entities, family offices, and large private companies across the UAE.\n\nWe understand the governance and brand standards that apply to annual report content in the UAE. Our annual report photography follows the IFRS and DFM reporting visual standards where relevant.",
      challenge: "Annual report photography is one of the most technically demanding forms of corporate photography. Executive portraits need to read as authoritative across both print and digital. Operations photography needs to accurately represent the business while also being visually compelling. ESG content needs to be genuine rather than performative — a requirement that has become increasingly scrutinised by institutional investors and sustainability rating agencies.",
      solution: "We treat annual report shoots as flagship productions. Executive portrait sessions are conducted in dedicated time blocks with professional lighting rigs, a personal grooming artist, and sufficient time per subject. Operations photography is planned around your actual business activities rather than staged set pieces. ESG content is documented authentically — real community programmes, genuine environmental initiatives, and employee stories that hold up to scrutiny.",
      services: [
        { label: "Executive Portrait Sessions", href: "/services/photo-shoots", desc: "Board and senior leadership portrait photography in formal, semi-formal, and environmental styles." },
        { label: "Operations Photography", href: "/services/photo-shoots", desc: "On-site operations photography documenting actual business activities for report use and investor communications." },
        { label: "ESG Content Production", href: "/services/corporate-films", desc: "Photography and video for sustainability, community, and governance report sections — authentic and audit-ready." },
        { label: "Annual Report Launch Film", href: "/services/corporate-films", desc: "60-second to 3-minute launch film summarising the year's highlights for investor relations, LinkedIn, and the AGM." },
        { label: "AGM Photography", href: "/services/event-shoots", desc: "Annual General Meeting photography and live event documentation for shareholder communications." },
        { label: "Investor Relations Content", href: "/services/corporate-films", desc: "Quarterly earnings video, analyst briefing photography, and roadshow content for listed companies." },
      ],
      results: [
        { stat: "100%", label: "of annual report photography clients re-book for the following year" },
        { stat: "2 days", label: "typical executive portrait session covering full C-suite and board" },
        { stat: "DFM ready", label: "all content delivered to Dubai Financial Market disclosure standards" },
      ],
      caseStudy: {
        title: "Listed Company Annual Report Content Suite",
        client: "DFM-Listed Real Estate Developer",
        result: "Annual report won the DFM Annual Report Award for Visual Quality for two consecutive years",
        body: "A DFM-listed real estate developer needed to elevate their annual report visual content to match the quality of international listed peers. Their previous report had used inconsistent photography pulled from marketing materials and stock images. We produced a three-day content shoot covering full C-suite and board portrait sessions, operations photography across three active development sites, community programme ESG documentation, and a 90-second annual report launch film for the investor relations website and AGM presentation. The report won the DFM Annual Report Award for Visual Quality in both the year of our first production and the following year.",
      },
      faqs: [
        { q: "How do you manage executive portrait sessions for large leadership teams?", a: "We schedule executive portrait sessions in 15 to 20-minute blocks per subject, organised around executive diary availability. We send a pre-session guide to each executive covering wardrobe, grooming, and what to expect." },
        { q: "Can you work within our existing brand identity and design system?", a: "Yes. We request your brand guidelines and the report design layout before the shoot so all photography is composed for the specific crops and aspect ratios required by your designer." },
        { q: "Do you understand UAE corporate governance photography requirements?", a: "Yes. We are familiar with the DFM and ADX annual report disclosure standards and the ADNOC and government entity visual content requirements." },
        { q: "Can you document real ESG activities rather than staged content?", a: "Yes, and we actively recommend this approach. We plan around your actual community programme calendar, sustainability site visits, and employee engagement events to document genuine activity." },
        { q: "What is the turnaround time for annual report photography?", a: "Edited photography is typically delivered within 7 to 10 working days of the final shoot day. For reports with hard print deadlines, we can prioritise specific sections to support your design and print production schedule." },
        { q: "Do you produce video content for AGMs?", a: "Yes. AGM content typically includes a summary film played before the meeting opens, photography coverage of the meeting itself, and a post-AGM highlights package for shareholder communications." },
      ],
      relatedLocations: [
        { label: "Corporate Photography Dubai", href: "/locations/dubai" },
        { label: "Executive Portraits Abu Dhabi", href: "/locations/abu-dhabi" },
        { label: "Corporate Content Sharjah", href: "/locations/sharjah" },
      ],
      relatedPosts: [
        { title: "Corporate Video Production Guide Dubai 2026", href: "/blog/corporate-video-production-dubai-2026" },
        { title: "Best Production Companies Dubai 2026", href: "/blog/best-production-companies-dubai-2026" },
        { title: "Hospitality Production UAE", href: "/industries/hospitality" },
      ],
    },

  },

};

export function generateStaticParams() {
  const params: { industry: string; slug: string }[] = [];
  for (const industry of Object.keys(SUB_INDUSTRY_DATA)) {
    for (const slug of Object.keys(SUB_INDUSTRY_DATA[industry])) {
      params.push({ industry, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { industry: string; slug: string };
}): Promise<Metadata> {
  const data = SUB_INDUSTRY_DATA[params.industry]?.[params.slug];
  if (!data) return {};
  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `https://www.backyardstudioofficial.com/industries/${params.industry}/${params.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      images: [{ url: data.heroImage, width: 1920, height: 1080, alt: `${data.name} — Backyard Studio Official UAE` }],
      type: "website",
      url: `https://www.backyardstudioofficial.com/industries/${params.industry}/${params.slug}`,
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

export default function SubIndustryPage({
  params,
}: {
  params: { industry: string; slug: string };
}) {
  const data = SUB_INDUSTRY_DATA[params.industry]?.[params.slug];
  if (!data) notFound();

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Industries", url: "https://www.backyardstudioofficial.com/industries" },
    { name: data.parentName, url: `https://www.backyardstudioofficial.com/industries/${params.industry}` },
    { name: data.name, url: `https://www.backyardstudioofficial.com/industries/${params.industry}/${params.slug}` },
  ]);

  const industryFaqJsonLd =
    data.faqs.length > 0
      ? faqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.name} — Backyard Studio Official`,
    description: data.metaDescription,
    serviceType: `${data.name} Production UAE`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.backyardstudioofficial.com/#localbusiness",
      name: "Backyard Studio Official",
      url: "https://www.backyardstudioofficial.com",
      telephone: "+971-58-588-2685",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: `https://www.backyardstudioofficial.com/industries/${params.industry}/${params.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {industryFaqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industryFaqJsonLd) }} />
      )}

      {/* ── BREADCRUMB NAV ── */}
      <div className="pt-24 pb-4 border-b" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl">
          <nav className="flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
            <Link href="/" className="hover:text-gold transition-colors" style={{ color: "var(--muted)" }}>Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-gold transition-colors" style={{ color: "var(--muted)" }}>Industries</Link>
            <span>/</span>
            <Link href={`/industries/${params.industry}`} className="hover:text-gold transition-colors" style={{ color: "var(--muted)" }}>{data.parentName}</Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>{data.name}</span>
          </nav>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(5,5,5,0.95) 30%, rgba(5,5,5,0.4) 70%, transparent)" }}
          />
        </div>
        <div className="container-xl relative pb-20">
          <p className="eyebrow mb-4">{data.parentName} · Specialist</p>
          <h1 className="font-display text-5xl sm:text-7xl leading-none mb-6" style={{ color: "var(--cream)" }}>
            {data.name.toUpperCase()}
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: "var(--silver)" }}>{data.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              <span>Get a Free Quote</span>
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="https://wa.me/971585882685"
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2"
              style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
            >
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
          <p className="text-lg leading-relaxed mb-12 whitespace-pre-line" style={{ color: "var(--silver)" }}>
            {data.intro}
          </p>
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
            {data.name.toUpperCase()} SERVICES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group p-6 border transition-all duration-300 hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
              >
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
          <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--silver)" }}>
            {data.caseStudy.body}
          </p>
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
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="flex items-center gap-3 group transition-colors"
                  style={{ color: "var(--muted)" }}
                >
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
                <Link
                  key={p.href}
                  href={p.href}
                  className="block group p-4 border transition-all hover:border-[var(--gold)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="text-sm group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--silver)" }}>
                    {p.title}
                  </span>
                </Link>
              ))}
              <Link href="/blog" className="flex items-center gap-2 text-sm mt-2" style={{ color: "var(--gold)" }}>
                <ArrowUpRight size={14} />All Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK TO PARENT ── */}
      <section className="py-12 border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <div className="container-xl text-center">
          <Link
            href={`/industries/${params.industry}`}
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--gold)" }}
          >
            ← Back to {data.parentName} Production
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center border-t" style={{ background: "var(--black)", borderColor: "var(--border)" }}>
        <p className="eyebrow mb-6">Ready to Start?</p>
        <h2 className="font-display text-5xl sm:text-6xl mb-8" style={{ color: "var(--cream)" }}>
          LET&apos;S CREATE SOMETHING
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
            <span>Get a Free Quote</span>
            <ArrowUpRight size={14} />
          </Link>
          <a
            href="https://wa.me/971585882685"
            target="_blank"
            rel="noreferrer"
            className="btn-gold inline-flex items-center gap-2"
            style={{ background: "transparent", border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
