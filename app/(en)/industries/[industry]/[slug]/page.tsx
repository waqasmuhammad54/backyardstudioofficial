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
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127", bestRating: "5" },
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
