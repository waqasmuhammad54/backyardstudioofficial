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
