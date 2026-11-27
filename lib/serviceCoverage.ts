export type CoverageService = {
  name: string;
  href: string;
  description: string;
  group: "Video production" | "Events and weddings" | "Social content" | "Commercial photography" | "Production support";
};

/**
 * The authoritative public service catalogue used by every UAE location hub.
 *
 * Location pages should reuse this catalogue instead of creating a separate
 * crawlable URL for every service/city combination. The city hub supplies the
 * local substance; these links show that the complete production capability is
 * available there and consolidate authority into the canonical service pages.
 */
export const COVERAGE_SERVICES: CoverageService[] = [
  { name: "Corporate Video Production", href: "/services/corporate-videography", description: "Company profiles, executive interviews, internal communications and office-based productions.", group: "Video production" },
  { name: "Corporate Brand Films", href: "/services/corporate-brand-films", description: "Narrative brand films for launches, investor communication, recruitment and company positioning.", group: "Video production" },
  { name: "Corporate Films", href: "/services/corporate-films", description: "Brand documentaries, culture films, annual-report video and long-form corporate storytelling.", group: "Video production" },
  { name: "DVC & TV Commercial Production", href: "/services/dvcs", description: "Scripted digital and broadcast commercials, planned from concept and casting through final delivery.", group: "Video production" },
  { name: "TV Commercials", href: "/services/tv-commercials", description: "Broadcast-ready advertising with production management, cinema capture, sound and post-production.", group: "Video production" },
  { name: "Ads Shooting", href: "/services/ads-shooting", description: "Campaign assets for Meta, TikTok, YouTube, websites, digital screens and outdoor placements.", group: "Video production" },
  { name: "Documentary Films", href: "/services/documentary", description: "Research-led brand, culture, people and behind-the-scenes documentary production.", group: "Video production" },
  { name: "Testimonial Videos", href: "/services/testimonial-videos", description: "Credible customer and stakeholder interviews with guided preparation, clean sound and supporting footage.", group: "Video production" },
  { name: "Car Commercials", href: "/services/car-commercials", description: "Cinematic automotive campaigns using controlled, static, moving and aerial coverage where permitted.", group: "Video production" },
  { name: "YouTube Video Production", href: "/services/youtube-content", description: "Scripting, multi-camera filming, editing, thumbnails and repeatable formats for branded channels.", group: "Video production" },
  { name: "Podcast Videography", href: "/services/podcast", description: "Multi-camera video podcasts with professional audio, lighting, full episodes and short social clips.", group: "Video production" },
  { name: "Full-Service Film Production", href: "/services/pre-post-production", description: "One production partner for planning, crew, filming, editing, colour, sound and final masters.", group: "Video production" },

  { name: "Event Videography & Photography", href: "/services/event-videography", description: "Conferences, exhibitions, launches, galas and private events with planned shot lists and delivery formats.", group: "Events and weddings" },
  { name: "Brand Launch Events", href: "/services/brand-events", description: "Launch films, guest coverage, interviews, atmosphere, same-day selects and post-event edits.", group: "Events and weddings" },
  { name: "Live Streaming & Match Coverage", href: "/services/live-streaming", description: "Multi-camera live production for conferences, webinars, sport and hybrid events.", group: "Events and weddings" },
  { name: "Wedding Photography", href: "/services/wedding-photography", description: "Documentary and directed wedding photography with clear crew, coverage and delivery options.", group: "Events and weddings" },
  { name: "Wedding Videography", href: "/services/wedding-videography", description: "Cinematic wedding films with clean ceremony audio, highlights and social-first edits.", group: "Events and weddings" },
  { name: "Pre-Wedding Shoots", href: "/services/pre-wedding-shoot", description: "Location-planned pre-wedding photography and film with timing, wardrobe and permit guidance.", group: "Events and weddings" },
  { name: "Engagement & Proposal Photography", href: "/services/engagement-photography", description: "Discreet proposal coverage and directed engagement portraits with a planned signal and backup position.", group: "Events and weddings" },
  { name: "Anniversary & Vow Renewal Photography", href: "/services/anniversary-photoshoot", description: "Milestone portraits, vow renewals and family-inclusive anniversary sessions.", group: "Events and weddings" },
  { name: "Birthday Photography", href: "/services/birthday-photography", description: "Natural coverage for children, adults, first birthdays, cake smashes and milestone celebrations.", group: "Events and weddings" },
  { name: "Flying Dress Photoshoots", href: "/services/flying-dress-photoshoot", description: "Styled desert and beach sessions with dress options, location planning and directed movement.", group: "Events and weddings" },

  { name: "Social Media Content Creation", href: "/services/social-media-content", description: "Planned content days and monthly asset systems for Instagram, TikTok, LinkedIn and YouTube.", group: "Social content" },
  { name: "Social Media Photo & Video Shoots", href: "/services/social-media-shoots", description: "Combined photography and video sessions that create platform-ready assets in one production day.", group: "Social content" },
  { name: "Instagram Reels & Short Films", href: "/services/reels", description: "Vertical short-form films planned for strong openings, clear messages and platform-safe delivery.", group: "Social content" },
  { name: "Reels Production", href: "/services/reels-production", description: "Repeatable Reels, TikTok and Shorts production for brands, creators and campaign teams.", group: "Social content" },
  { name: "Travel & Lifestyle Campaigns", href: "/services/travel-lifestyle", description: "Destination, tourism, wellness and experience-led content for hospitality and lifestyle brands.", group: "Social content" },

  { name: "Product Photography & Video", href: "/services/product-shoots", description: "E-commerce images, campaign stills, demonstrations, detail films and product reveal videos.", group: "Commercial photography" },
  { name: "Food Photography & Video", href: "/services/food", description: "Menu, delivery-app, campaign and social content produced around real kitchen and service workflows.", group: "Commercial photography" },
  { name: "Fashion Photography & Campaigns", href: "/services/fashion-shoots", description: "Editorials, lookbooks, e-commerce sets and seasonal campaigns for fashion and beauty brands.", group: "Commercial photography" },
  { name: "Hotel & Resort Photography", href: "/services/hotel-photography", description: "Rooms, facilities, food and beverage, lifestyle, social and campaign assets for hospitality properties.", group: "Commercial photography" },
  { name: "Real Estate Photography & Video", href: "/services/real-estate", description: "Interiors, architecture, walkthroughs, community context and listing-ready deliverables.", group: "Commercial photography" },
  { name: "Automotive Photography & Video", href: "/services/automotive", description: "Studio, showroom, static and moving automotive content for dealers, manufacturers and owners.", group: "Commercial photography" },
  { name: "Corporate Photography & Headshots", href: "/services/corporate-videography", description: "Executive portraits, team photography, office imagery and professional profile content.", group: "Commercial photography" },
  { name: "Wedding & Lifestyle Photo Shoots", href: "/services/photo-shoots", description: "Directed portrait, editorial, couple and lifestyle sessions on location or in studio.", group: "Commercial photography" },

  { name: "Aerial Drone Videography", href: "/guides/drone-filming-checklist-dubai", description: "Licensed aerial capture with route, airspace and location permissions confirmed for each shoot.", group: "Production support" },
  { name: "Pre-Production Services", href: "/services/pre-post-production", description: "Briefing, scripting, budgeting, schedules, locations, casting, crew and permit coordination.", group: "Production support" },
  { name: "Post-Production & Video Editing", href: "/services/pre-post-production", description: "Editing, colour, sound, motion graphics, captions, language versions and platform exports.", group: "Production support" },
  { name: "Event Video Editing", href: "/services/event-video-editing", description: "Highlight films and social cutdowns created from Backyard footage or organised client-supplied media.", group: "Production support" },
];

export const COVERAGE_SERVICE_GROUPS = [
  "Video production",
  "Events and weddings",
  "Social content",
  "Commercial photography",
  "Production support",
] as const;
