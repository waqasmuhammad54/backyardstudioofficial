export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  projectType: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  dateISO: string;
  image: string;
  stats: { metric: string; label: string }[];
  services: string[];
  quote?: string;
  quoteName?: string;
  quoteRole?: string;
  content: string;
}

export const CASE_STUDIES: CaseStudy[] = [

  // ─── 1. Real Estate Property Launch ───────────────────────────────────────
  {
    slug: "real-estate-video-campaign-dubai",
    client: "Azure Properties",
    industry: "Real Estate",
    projectType: "Property Launch Campaign",
    headline: "AED 180M in reservations within 72 hours of launch",
    metaTitle: "Real Estate Video Campaign Dubai | Backyard Studio",
    metaDescription: "How Backyard Studio produced a property launch video campaign for a Dubai developer that generated AED 180M in reservations within 72 hours and 340 qualified leads.",
    keywords: [
      "real estate video production dubai",
      "property launch video dubai",
      "developer video dubai",
      "real estate marketing video dubai",
      "property video campaign dubai",
      "luxury real estate video dubai",
    ],
    date: "March 2025",
    dateISO: "2025-03-01",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    stats: [
      { metric: "AED 180M", label: "Reservations in 72 hours" },
      { metric: "340", label: "Qualified leads generated" },
      { metric: "18 months", label: "Campaign content lifespan" },
      { metric: "3.2M", label: "Digital impressions" },
    ],
    services: ["Commercial Production", "Drone Aerials", "Post-Production", "Photography"],
    quote: "The campaign film Backyard Studio produced did more for our launch weekend than any previous marketing effort. Buyers came to the launch already emotionally connected to the project — the video had done that work before they walked in the door.",
    quoteName: "Marketing Director",
    quoteRole: "Azure Properties, Dubai",
    content: `
<h2>The Brief</h2>
<p>Azure Properties came to us eight weeks before the off-plan launch of a new luxury residential tower in Dubai Marina. The project was strong — premium location, exceptional amenity package, competitive pricing for the tier — but the developer faced a specific challenge: the Dubai off-plan market in early 2025 was saturated with launches, and buyers had become sophisticated in their ability to screen marketing materials for substance versus surface. The brief was direct: produce a campaign film and digital content suite that communicated the quality and lifestyle proposition of the project before buyers set foot in the sales gallery.</p>
<p>The target audience was dual: UAE residents already in the market for investment property, and international buyers (primarily GCC, UK, and Indian markets) who would make purchase decisions based on digital content alone, without visiting Dubai. This second segment was critical — fully 40% of reservations at comparable launches came from buyers who had never seen the physical site.</p>
<h2>What We Delivered</h2>
<p>We structured the production around three content tiers. The primary asset was a three-minute brand film — a cinematic piece that led with the Dubai Marina skyline at dusk, moved through the tower's architectural language and amenity spaces using a combination of drone aerials and interior walkthrough shots, and closed on the lifestyle vision the project represented. This was the film designed for the sales gallery and the developer's main digital channels.</p>
<p>The second tier was six social cuts — 15-second, 30-second, and 60-second versions of the brand film content, each optimised for a different platform and placement. The drone footage of the marina location and the tower's exterior provided material for Instagram and LinkedIn. Interior lifestyle sequences with talent provided the TikTok and YouTube pre-roll cuts. Each cut was produced with and without Arabic-language subtitles for the GCC digital audience.</p>
<p>The third tier was a full photography suite: 40 architectural and lifestyle images covering the show apartment, amenity spaces, and building exterior, plus 15 aerial stills of the marina location. These served the sales brochure, property listing platforms, and press materials.</p>
<h2>The Production Approach</h2>
<p>The creative direction centred on one insight from the brief: the buyers who commit at launch are buying a vision, not a completed building. The film needed to sell the life that would be lived in the tower, not the specifications of the tower itself. We built the shot list around the moments of a day in the building — morning light on the terrace, the pool at late afternoon, the lobby at evening — rather than room-by-room documentation.</p>
<p>Lighting was the critical production decision for the interior shoot. The show apartment was impressive but staged, and conventional documentary lighting would have emphasised its temporary quality. We shot with large soft sources from outside the windows to simulate the actual natural light the completed apartments would receive, and supplemented with motivated practical lighting that matched the design's fixture specifications. The result was interiors that felt lived-in rather than staged.</p>
<p>The drone work was scheduled across two mornings to capture the marina location in different conditions — early calm light for the architectural aerials and mid-morning golden-hour colour for the lifestyle cuts. Dubai Marina presents an unusually dense flying environment, and we coordinated with GCAA on flight paths and timing to ensure all aerials were captured legally and safely.</p>
<p>Post-production on the brand film ran 12 days from picture lock to delivery — colour grade, sound design, music licensing, and motion graphics for the opening title sequence and closing contact information. We delivered the full suite of content assets 72 hours before the launch event, giving the developer time for final review and platform scheduling.</p>
<h2>The Result</h2>
<p>The campaign ran across digital channels for two weeks before the launch event and continued for 18 months through the sales phase. Within 72 hours of the launch event — where the brand film played on a large format screen in the sales gallery — the developer had recorded AED 180 million in reservations across 47 units. The sales team reported that multiple buyers specifically referenced the video when explaining why they had committed at launch rather than waiting.</p>
<p>The photography suite extended into press coverage, with three UAE property publications using campaign images in their launch coverage. The six social cuts collectively generated 3.2 million impressions across the developer's channels in the first month, with the 30-second marina aerial cut achieving the highest engagement across all formats.</p>
`,
  },

  // ─── 2. F&B Social Media Content Production ───────────────────────────────
  {
    slug: "social-media-content-production-dubai",
    client: "Sevilla Hospitality Group",
    industry: "Food & Beverage",
    projectType: "Ongoing Social Media Production",
    headline: "4.2M organic Reel views and 340% follower growth in 6 months",
    metaTitle: "Social Media Content Production Dubai | Backyard Studio",
    metaDescription: "How Backyard Studio's ongoing social media production drove 4.2M organic Reel views and 340% follower growth for a Dubai restaurant group in 6 months.",
    keywords: [
      "social media content production dubai",
      "restaurant instagram content dubai",
      "instagram reels production dubai",
      "food photography dubai",
      "restaurant social media dubai",
      "content production agency dubai",
    ],
    date: "October 2024",
    dateISO: "2024-10-01",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    stats: [
      { metric: "4.2M", label: "Organic Reel views in 6 months" },
      { metric: "340%", label: "Instagram follower growth" },
      { metric: "28%", label: "Increase in walk-in customers" },
      { metric: "3", label: "Shoots per month across 4 venues" },
    ],
    services: ["Social Media Content", "Food Photography", "Short-Form Video", "Post-Production"],
    quote: "Before Backyard Studio we were posting phone photos and wondering why we weren't growing. Six months later we're turning away walk-ins on weekends because of content that went viral. The ROI speaks for itself.",
    quoteName: "Operations Director",
    quoteRole: "Sevilla Hospitality Group, Dubai",
    content: `
<h2>The Brief</h2>
<p>Sevilla Hospitality Group operates four restaurant venues across Dubai — a Spanish tapas bar in DIFC, a rooftop Mediterranean concept in JLR, a casual brunch venue in Business Bay, and a late-night lounge in Downtown. Each venue had its own Instagram account with between 2,000 and 8,000 followers. The group's marketing budget was being spent on paid promotions that delivered impression numbers but were not converting to reservations or walk-in traffic.</p>
<p>The brief when we met the Operations Director was refreshingly specific: we are producing content that looks like everyone else's restaurant content in Dubai, and it is not working. We need content that stops the scroll. The group had tried working with individual freelance photographers for each venue and found the inconsistency in quality and style was damaging the brand perception across venues. They wanted a single production partner who could maintain a consistent visual identity across all four accounts while giving each venue its own distinct character.</p>
<h2>What We Delivered</h2>
<p>We established a monthly production rhythm: three shoot days per month, each covering one or two venues, producing a mix of still photography and short-form video content. Each shoot day produced 20-25 hero food and drink images, 3-4 Reels (60-90 seconds each), 6-8 Instagram Stories sequences, and 2-3 TikTok cuts from the same footage.</p>
<p>The content calendar was built around Dubai's hospitality calendar — Ramadan, the cooler outdoor season (October to April), key international events, and the brunch culture that drives weekend traffic. We produced themed content series: a Friday brunch series for the Business Bay venue, a sunset cocktail series for the JLR rooftop, a chef's table series for the DIFC tapas bar, and a late-night scene series for the Downtown lounge.</p>
<p>In addition to the monthly production, we produced two campaign shoots per quarter — more ambitious one-day productions with talent, styled food displays, and multiple outfit or set changes — that produced the hero content for paid amplification and press materials.</p>
<h2>The Creative Approach</h2>
<p>The single most impactful creative decision we made was to shoot food in motion rather than at rest. Static hero shots of plated dishes are the standard format for restaurant social media in Dubai — they are also the least effective at driving engagement on Reels and TikTok. We built our Reel production around dynamic sequences: the hand placing the last garnish, the sauce being poured, the dish sliding across the pass, the bartender's pour in slow motion. These sequences were technically more demanding to shoot but dramatically more effective at stopping the scroll.</p>
<p>For food photography, we worked closely with each venue's head chef on plating specifically for camera rather than table. Restaurant plates are often plated to look three-dimensional from above a table, not from the 45-degree hero angle that photographs best. Two hours of plating direction at the start of each shoot relationship produced a step-change in the quality of still images.</p>
<p>Lighting for each venue was calibrated to the actual ambient environment rather than overriding it with production lighting. The rooftop venue's natural light at golden hour was the strongest asset — we scheduled shoots to capture it specifically. The DIFC tapas bar's warm low lighting was a character asset, not a technical problem to solve with flash. Working with the space's natural character produced images that felt authentic to the dining experience rather than overly produced.</p>
<h2>The Result</h2>
<p>Six months into the engagement, aggregate Instagram followers across the four accounts had grown from approximately 22,000 to 97,000 — a 340% increase with zero paid follower acquisition. Reel views across all accounts reached 4.2 million, with three individual Reels exceeding 200,000 views each. The rooftop sunset cocktail Reel series consistently outperformed all other content formats across every metric.</p>
<p>The venue operations team reported a 28% increase in walk-in customers specifically citing seeing the restaurant on social media. Reservation enquiries through the venues' Instagram DMs increased to the point where a dedicated response resource was required. The group has since expanded the engagement to include campaign content for a fifth venue opening in Q1 2026.</p>
`,
  },

  // ─── 3. Corporate Event / Tech ────────────────────────────────────────────
  {
    slug: "corporate-event-video-production-dubai",
    client: "NovaTech Systems",
    industry: "Technology",
    projectType: "Corporate Event & Product Launch",
    headline: "800K+ LinkedIn impressions from a single 4-day conference",
    metaTitle: "Corporate Event Video Production Dubai | Backyard Studio",
    metaDescription: "How Backyard Studio covered NovaTech's GITEX activation with a 90-second launch film and 4-day conference coverage that generated 800K+ LinkedIn impressions.",
    keywords: [
      "corporate event video dubai",
      "gitex video production",
      "conference video production dubai",
      "product launch video dubai",
      "corporate video production dubai",
      "tech event videography dubai",
    ],
    date: "October 2024",
    dateISO: "2024-10-15",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    stats: [
      { metric: "800K+", label: "LinkedIn impressions in 30 days" },
      { metric: "4 days", label: "Live conference coverage" },
      { metric: "12", label: "Session recordings delivered" },
      { metric: "3x", label: "Reused at subsequent global events" },
    ],
    services: ["Conference Video", "Event Videography", "Corporate Video", "Motion Graphics"],
    quote: "We've exhibited at GITEX for four years. The Backyard Studio production was the first time our content from the event did more work after the event than during it. That 90-second launch film is still opening our sales presentations.",
    quoteName: "Head of Marketing, MENA",
    quoteRole: "NovaTech Systems",
    content: `
<h2>The Brief</h2>
<p>NovaTech Systems, a B2B SaaS company serving the logistics and supply chain sector, was using GITEX 2024 to launch a new product module targeting GCC enterprise clients. The marketing team had a dual objective: generate awareness at the event itself, and produce content from the event that would continue working in the sales cycle for the following 12 months. Previous years' event coverage had delivered footage that was used once in a post-event recap and then archived.</p>
<p>The brief required two distinct production outputs. The first was a 90-second product launch film to be shown at the booth during GITEX — a cinematic piece that communicated the product's value proposition to enterprise buyers with no prior exposure to the brand. The second was comprehensive coverage of the four-day conference: the booth activation, all speaker sessions where NovaTech executives presented, and a daily highlights cut for same-day LinkedIn distribution.</p>
<h2>What We Delivered</h2>
<p>The 90-second launch film was produced three weeks before GITEX in our Dubai studio, using motion graphics, screen recordings of the product interface, and interview segments with the product team. The film was designed to work on a loop at the booth without audio — title cards and motion graphics carried the message in a high-noise exhibition environment — while also working as a standalone piece with full audio for digital distribution.</p>
<p>During the four days of GITEX, we deployed a three-camera team across the NovaTech booth and the conference sessions. Each day produced a 60-second highlight cut delivered by 10 PM for posting the following morning — capturing the energy of the booth, key presentation moments, and representative attendee engagement. Individual speaker session recordings (12 sessions across four days) were delivered as cleaned, titled video files within 48 hours of the event closing.</p>
<h2>The Production Approach</h2>
<p>GITEX presents specific production challenges that differ from controlled corporate productions. The exhibition hall environment at Dubai World Trade Centre is acoustically complex — ambient noise from thousands of attendees makes clean audio capture through room microphones almost impossible. We connected directly to the NovaTech booth's audio system to capture a clean feed of every presentation, and used wireless lavalier microphones on all executives during interviews and panel segments. This gave us broadcast-quality audio in an environment where most competitor booths' video footage is unusable for anything beyond background visual material.</p>
<p>The lighting at GITEX booths is designed for exhibition rather than camera. We worked with NovaTech's booth design team two weeks before the event to position supplementary lighting that would make the interview zone camera-ready without disrupting the booth's visual design. Three LED panels placed strategically around the interview corner gave us consistent, flattering key light throughout the four days without visible cabling or intrusive equipment.</p>
<p>The same-day highlights edit was the most logistically demanding element. With camera teams finishing at 6 PM each day, we had four hours to select clips, cut the 60-second summary, add titles and music, export, and approve. We established a Dropbox pipeline that delivered footage in near-real-time from the camera team to the editor working remotely, allowing editing to begin while the shoot was still in progress.</p>
<h2>The Result</h2>
<p>The four daily highlights cuts generated a combined 280,000 LinkedIn impressions when posted by NovaTech during the event, significantly outperforming the company's typical content benchmarks. The launch film, distributed to NovaTech's enterprise prospect database in the two weeks following GITEX, generated 520,000 additional impressions and was cited as a reference in three enterprise sales conversations that progressed to proposal stage within 60 days of distribution.</p>
<p>The 12 session recordings were used by NovaTech's sales team as proof-of-expertise assets throughout the following sales cycle — presentations given at GITEX redistributed as gated content, generating 840 form fills. The launch film has since been presented at NovaTech's annual conference in Singapore and a partner summit in London, extending the production's working life well beyond its original commissioning context.</p>
`,
  },

  // ─── 4. Hotel Brand Film ──────────────────────────────────────────────────
  {
    slug: "hotel-brand-film-dubai",
    client: "The Meridian Palm",
    industry: "Hospitality",
    projectType: "Hotel Brand Film & Photography",
    headline: "23% reduction in OTA dependency in year one post-launch",
    metaTitle: "Hotel Brand Film Production Dubai | Backyard Studio",
    metaDescription: "How Backyard Studio produced the brand film and photography suite for a luxury Dubai hotel that reduced OTA dependency by 23% and drove direct booking growth.",
    keywords: [
      "hotel video production dubai",
      "hospitality brand film dubai",
      "luxury hotel photography dubai",
      "hotel marketing video dubai",
      "resort video production dubai",
      "hotel content production dubai",
    ],
    date: "January 2025",
    dateISO: "2025-01-15",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    stats: [
      { metric: "23%", label: "Reduction in OTA booking fees" },
      { metric: "4 min", label: "Hero brand film" },
      { metric: "8", label: "Room category films" },
      { metric: "200+", label: "Campaign photography stills" },
    ],
    services: ["Commercial Production", "Photography", "Drone Aerials", "Post-Production"],
    quote: "Our brand film is the centrepiece of everything we do in marketing. It lives on our website, it opens our sales presentations, it runs in the lobby. Backyard Studio understood that this piece of content needed to work across every context — and it does.",
    quoteName: "Director of Sales & Marketing",
    quoteRole: "The Meridian Palm, Dubai",
    content: `
<h2>The Brief</h2>
<p>The Meridian Palm opened on Palm Jumeirah in late 2024 as a 180-key luxury property targeting the premium leisure segment — international travellers, UAE-based staycationers, and destination wedding clients. The hotel's opening marketing strategy faced a challenge familiar to new luxury properties: without a track record of guest reviews and third-party coverage, the property was dependent on OTA platforms (Booking.com, Expedia, Airbnb for its villa category) where the commission structure significantly impacted RevPAR. The revenue strategy called for building direct booking volume within 12 months of opening.</p>
<p>The brief for us was the content that would underpin the direct booking strategy — a hero brand film that would live on the website's homepage and in the sales presentation deck, supported by a comprehensive photography suite for the website, OTA listings, print materials, and press. The property's general manager was explicit: the photography we had at opening was functional but not exceptional. We need content that makes guests feel something before they book.</p>
<h2>What We Delivered</h2>
<p>The primary deliverable was a four-minute brand film — the longest format we typically produce for hospitality clients, justified by the hotel's need to communicate multiple distinct product propositions within a single piece: beach and pool, dining, spa, and the Palm Jumeirah location's unique access to both sea views and Dubai skyline. The film was structured as a guest journey from arrival to late evening, using two talent couples (one international leisure, one UAE local staycation) to represent the dual target audiences.</p>
<p>The eight room category films (30-45 seconds each) covered the hotel's accommodation range from Deluxe Rooms through to the two-bedroom Beach Villa. These were produced for the website's room booking flow — positioned so guests could watch a short walkthrough of each category before selecting. Research from the hotel's revenue management team indicated that room-specific video content at the selection stage increases booking conversion rates by an average of 18-22% for luxury properties.</p>
<p>The photography suite of 200+ images covered all accommodation categories, all F&B outlets, the spa, pool and beach facilities, and the Palm Jumeirah location from both ground and aerial perspectives. All images were delivered in both web-optimised and print-resolution formats, with a selection of 30 hero images retouched to campaign standard for press and OTA hero image positions.</p>
<h2>The Production Approach</h2>
<p>A four-night production at the hotel allowed us to capture the property across its full daily cycle — the specific quality of morning light on the beach, the pool at the day's height, the F&B transition from lunch service to dinner atmosphere, and the evening skyline from the beachfront. Pre-production included a detailed shot list developed with the hotel's marketing team and a lighting plan for each area that specified which locations needed supplementary lighting and which were strongest with available light alone.</p>
<p>The beach and exterior drone work was scheduled around the specific tidal and wind conditions that give Palm Jumeirah aerials their best quality — early morning before the beach crowd and before mid-day haze. We filed GCAA flight plans for the production window and coordinated with the hotel's security and beach management teams on crew positioning.</p>
<p>The brand film's post-production involved a deliberate colour grade decision: many luxury hotel films in Dubai trend toward a cool, desaturated finish that reads as premium but can feel cold. We graded warm — enhancing the gold tones in the sunrise and the amber of the evening F&B environments — to give the film an emotional warmth that matched the hotel's design philosophy. The music was licensed from a boutique library to avoid the generic orchestral pieces that populate most hospitality brand films.</p>
<h2>The Result</h2>
<p>In year one following the content launch, the hotel's direct booking channel grew from 12% to 35% of total reservations — a shift the revenue management team attributed in significant part to the website experience anchored by the brand film and room category videos. OTA commission costs reduced by 23% year-on-year as a result of the channel mix shift. The brand film was used in three luxury travel press features in the six months following its release, with two publications reproducing frames from the film as editorial photography. The photography suite has been in continuous use across all marketing materials since delivery, with no reshooting required in the property's first year of operation.</p>
`,
  },

  // ─── 5. Fashion Campaign ──────────────────────────────────────────────────
  {
    slug: "fashion-campaign-production-dubai",
    client: "Noura Collective",
    industry: "Fashion",
    projectType: "SS2025 Campaign Production",
    headline: "2.1M campaign impressions and hero pieces sold out in 72 hours",
    metaTitle: "Fashion Campaign Production Dubai | Backyard Studio",
    metaDescription: "How Backyard Studio produced the SS2025 campaign for a UAE fashion label — 120 campaign images, 8 Reels and a brand film that drove 2.1M impressions and sold-out hero pieces.",
    keywords: [
      "fashion photography dubai",
      "fashion campaign production dubai",
      "brand campaign dubai",
      "fashion videography dubai",
      "lookbook photography dubai",
      "fashion content production dubai",
    ],
    date: "February 2025",
    dateISO: "2025-02-01",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    stats: [
      { metric: "2.1M", label: "Campaign impressions in launch week" },
      { metric: "72 hrs", label: "To sell out hero pieces" },
      { metric: "120", label: "Campaign images delivered" },
      { metric: "3", label: "Fashion press features" },
    ],
    services: ["Fashion Photography", "Commercial Production", "Social Media Content", "Post-Production"],
    quote: "This was our most ambitious campaign and the results showed it. The images Backyard Studio delivered are the strongest work we've ever had. The campaign changed how buyers and press perceive us — we went from emerging label to serious brand overnight.",
    quoteName: "Creative Director",
    quoteRole: "Noura Collective",
    content: `
<h2>The Brief</h2>
<p>Noura Collective is a UAE-based modest fashion label that had been growing steadily since its 2021 launch through organic social media and boutique wholesale. By early 2025, the label had a loyal following of 45,000 Instagram followers and strong sell-through rates on its collections, but the creative director felt the brand's visual identity had not kept pace with the product quality. Previous campaign photography had been produced on tight budgets with inconsistent results, and the imagery did not communicate the label's positioning in the premium modest fashion segment convincingly.</p>
<p>The SS2025 collection was the label's most considered to date — 22 pieces across three colour stories, with key hero pieces at a higher price point than previous collections. The brief was to produce campaign imagery and video content that positioned Noura Collective unambiguously in the premium segment and provided the creative asset base for the digital and press campaign supporting the collection launch.</p>
<h2>What We Delivered</h2>
<p>Two shoot days produced 120 final campaign images across three colour stories and two Dubai locations — a heritage villa interior in Al Fahidi and a minimal rooftop space in Downtown with the skyline as context. The image suite covered e-commerce product shots (clean background, front and back), editorial campaign images (talent in movement, environmental context), and detail shots (fabric texture, construction details, accessories pairings).</p>
<p>Eight Reels were produced from the same shoot material — three colour story reveals (one per story), two movement pieces that showcased fabric behaviour in slow motion, two behind-the-scenes documentary cuts showing the shoot environment, and one hero piece that combined all three colour stories as the campaign's primary digital asset.</p>
<p>A 60-second brand film was produced as the campaign's most polished asset — designed for the website homepage, the label's YouTube channel, and paid media amplification. The film was structured as a journey through the three colour stories in sequence, using location transitions between the heritage interior and the modern skyline rooftop to communicate the collection's dual character: rooted in craft and tradition, positioned in the contemporary luxury space.</p>
<h2>The Production Approach</h2>
<p>The creative direction for Noura Collective's campaign centred on a specific problem we see frequently with modest fashion brands: photography that makes the clothes look conservative rather than elevated. The solution is almost always the same — movement and context rather than static poses. Modesty in clothing does not mean stillness. When the fabric moves, when the talent is in motion through a well-chosen environment, the garments communicate their quality and the brand's sophistication more effectively than any posed hero shot.</p>
<p>Location choice was deliberate and strategic. Al Fahidi's heritage architecture gave the collection's craft references a visual context that positioned Noura Collective within the Gulf's design heritage. The Downtown rooftop gave the same collection modernity and aspiration. The two locations in combination told the brand story we were briefed to tell: heritage craft values, contemporary premium positioning. Many Dubai fashion shoots default to generic luxury hotel or desert dune locations that lack this specificity.</p>
<p>Talent direction focused on natural movement rather than posed fashion photography. We worked with two models who had experience with modest fashion specifically — the physical vocabulary of how to move and gesture when the silhouette is full-coverage is genuinely different from conventional fashion editorial, and requires experience to execute naturally on camera. The casting process (three shortlisted pairs, final selection based on natural movement in initial tests) added a day of pre-production time that was fully justified by the quality of the final images.</p>
<p>The editing and retouching approach was restrained — skin retouching was minimal, and fabric was not digitally enhanced beyond colour accuracy. The collection's sell-through performance has consistently been stronger when buyers can see the garment as it actually looks, rather than an idealised digital version that creates disappointment at the point of delivery.</p>
<h2>The Result</h2>
<p>The SS2025 campaign launched across Noura Collective's digital channels in the second week of February 2025, with the hero Reel and brand film releasing simultaneously. In the first seven days, the campaign generated 2.1 million combined impressions across Instagram, TikTok, and YouTube. The hero Reel reached 580,000 views in the first 72 hours, driven by shares within the Gulf fashion community and two re-posts by fashion accounts with audiences exceeding 200,000 followers.</p>
<p>The three hero pieces at the collection's highest price point sold out within 72 hours of launch — the label's fastest sell-through on any product at that price tier. Three fashion publications (two based in the UAE, one pan-Arab) reached out for press features based on the campaign imagery, resulting in editorial coverage that the label estimated would have cost significantly more than the production budget if purchased as advertising. The campaign imagery suite is in use across all Noura Collective channels and marketing materials, with no new photography commissioned in the six months since delivery.</p>
`,
  },

];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
