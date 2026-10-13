/**
 * Per-emirate production facts — the differentiator for the location pages.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * 38 pages are in Google's "Duplicate without user-selected canonical" bucket,
 * and the biggest cluster is /locations/<city>/<service>. Measured on the live
 * pages with tags stripped: 44-55% identical text between them, on bodies of
 * ~850 words including nav and footer. The unique part was roughly 400 words of
 * template with the city name swapped. Every page carries a correct
 * self-canonical; Google overrides it anyway, which it only does when the
 * content really is substantially the same.
 *
 * Adding canonical tags would NOT fix that — it would formally confirm the pages
 * are duplicates and collapse them. The only real fix is genuine differentiation.
 * Hand-writing 89 pages is not the answer either; putting one block of true,
 * emirate-specific substance behind the template differentiates all of them at
 * once and keeps the facts in a single reviewable place.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * SOURCING RULES — read before editing
 * ──────────────────────────────────────────────────────────────────────────
 * 1. `permitAuthority` is NAMED only where an authoritative source confirms it.
 *    Dubai, Abu Dhabi and Ras Al Khaimah are confirmed. Sharjah, Fujairah,
 *    Ajman and Umm Al Quwain are NOT: commercial permit-agency blogs contradict
 *    each other on which body is responsible, and no official page could be
 *    confirmed. For those we say the route is confirmed per shoot and name
 *    nobody. **Do not fill these in from a blog post.** Naming the wrong
 *    government authority on a production company's own site is a credibility
 *    problem, and clients act on it.
 *
 * 2. **Still no drone or aviation content in this file — but the REASON has
 *    changed, so do not cite the old one.** The original rule said drone "is
 *    not a bookable service and the aviation regulator stays unnamed
 *    sitewide". Both halves of that are now false: the owner confirmed on
 *    8 Oct 2026 that the civil aviation licence is issued and in hand (see
 *    lib/aviationStatus.ts), and on 13 Oct the two drone location pages were
 *    un-retired and are live. Aerial copy lives in aviationStatus.ts and on
 *    those pages. It stays out of THIS file purely for scope: this file is
 *    geography and permitting, it is rendered on ~89 pages, and permit research
 *    surfaces GCAA licensing constantly — which belongs in the one switch, not
 *    duplicated across every location page.
 *
 * 3. `knownFor` and `terrain` describe geography and are safe. `venues` names
 *    only categories of location, never a specific venue we claim access to or
 *    a client relationship we have not confirmed in writing.
 *
 * Last verified: 8 October 2026.
 */

export type EmirateFacts = {
  /** Display name. */
  label: string;
  /** Confirmed permit authority, or null where sources conflict. */
  permitAuthority: string | null;
  /** One sentence on how permitting actually works here. Always safe to show. */
  permitNote: string;
  /** What the emirate is genuinely known for, production-wise. */
  knownFor: string;
  /** Landscape and light character — real, and different per emirate. */
  terrain: string;
  /** Categories of shooting location, never named venues. */
  venues: string;
  /** The practical scheduling constraint a client should know about. */
  logistics: string;
  /**
   * SERP-length summary for the /locations/<city> meta description.
   *
   * ⚠️ Added 13 Oct 2026 for a measured defect. All seven city hub
   * descriptions were generated from ONE template with only the city name
   * substituted, so they rendered 89% identical to each other —
   * scripts/audit-duplicate-signals.mjs flagged the whole set. Their BODY copy
   * is only 1% similar (the differentiation work in this file succeeded), so
   * the pages were fine and the signal was not: identical descriptions on
   * same-shaped titles is what makes Google pick its own canonical.
   *
   * Each is a condensation of this emirate's own `knownFor` / `terrain`
   * below — no new claims — and each keeps the "Free quote in 2 hours" CTA,
   * which is the strongest line in the old template. Keep under ~155
   * characters and keep them genuinely different from one another; a
   * reworded template is the same bug.
   */
  serpSummary: string;
};

export const EMIRATE_FACTS: Record<string, EmirateFacts> = {
  dubai: {
    label: "Dubai",
    permitAuthority: "the Dubai Film and TV Commission (DFTC)",
    permitNote:
      "Dubai is the most structured emirate to shoot in. Since a 2014 decree the Dubai Film and TV Commission has been the single authority for filming permits here, applications are made through a UAE-licensed production company rather than by the client directly, and where a script is required it is approved before the permit is issued and cannot then be changed. That sounds restrictive and in practice it is the opposite — the process is predictable, which is why Dubai schedules hold.",
    knownFor:
      "the densest concentration of recognisable backdrops in the region, and the shortest distance between completely different looks — skyline, desert, marina and old-town are all inside an hour of each other",
    terrain:
      "high-contrast light for most of the year, with glass towers producing strong reflected fill in the late afternoon and genuinely harsh overhead sun between roughly 11am and 3pm",
    venues:
      "hotel and resort property, private villas, studio space, waterfront promenades, desert conservation areas and licensed public locations",
    logistics:
      "traffic is the scheduling constraint rather than distance. A cross-city move that takes 25 minutes at 10am takes well over an hour at 5pm, so shot lists are sequenced by geography rather than by storyboard order",
    serpSummary:
      "Video production, weddings, events and Reels in Dubai — skyline, desert, marina and old-town looks all within an hour. Free quote in 2 hours.",
  },

  "abu-dhabi": {
    label: "Abu Dhabi",
    permitAuthority: "the Abu Dhabi Film Commission (ADFC)",
    permitNote:
      "Abu Dhabi permits are issued by the Abu Dhabi Film Commission, and the applying production company needs a valid media zone authority trade licence — which is the step that catches out crews who assume a Dubai licence carries across. The emirate also operates a production rebate scheme, which matters on larger budgets and is worth scoping before a shoot is locked rather than after.",
    knownFor:
      "institutional, cultural and government-adjacent work, plus the largest purpose-built studio infrastructure in the country",
    terrain:
      "flatter and more open than Dubai, with long uninterrupted sightlines along the Corniche and island causeways, and softer coastal haze that suits wider establishing work",
    venues:
      "cultural and institutional buildings, island resort property, studio facilities, corniche waterfront and desert interior",
    logistics:
      "distances are real rather than traffic-bound. Yas and Saadiyat to the mainland and out to the desert are genuine drives, so a multi-location Abu Dhabi day is planned around travel time in a way a Dubai day is not",
    serpSummary:
      "Video production in Abu Dhabi — institutional, cultural and government-adjacent work, island resorts and the Corniche. Free quote in 2 hours.",
  },

  sharjah: {
    label: "Sharjah",
    permitAuthority: null,
    permitNote:
      "Sharjah permissions are arranged through the relevant emirate authority and we confirm the current route before each shoot rather than assuming it. Published guidance from third-party permit agencies disagrees about which body is responsible, so we verify rather than repeat it. Sharjah also applies its own decency and content standards more actively than its neighbours, which affects wardrobe, staging and crew composition — it is a planning input, not an obstacle.",
    knownFor:
      "heritage, cultural and educational production, and being the practical choice for work that needs an older, less glass-and-steel character",
    terrain:
      "lower-rise and more textural than Dubai, with coral-stone and traditional architecture that holds warm light well in the first and last hours of the day",
    venues:
      "heritage and old-town districts, corniche and lagoon waterfront, educational and cultural campuses, and residential communities",
    logistics:
      "the Dubai–Sharjah commute is the single biggest scheduling factor. Morning inbound and evening outbound traffic is severe, so call times are set either well before or well after the peak",
    serpSummary:
      "Video production in Sharjah — heritage and old-town character, coral-stone architecture, corniche and lagoon. Free quote in 2 hours.",
  },

  ajman: {
    label: "Ajman",
    permitAuthority: null,
    permitNote:
      "Ajman permissions are arranged through the relevant emirate authority and the route is confirmed per shoot. We do not publish a named body here because the available third-party guidance is inconsistent and we have not been able to confirm it from an official source. Northern-emirate approvals generally need more lead time than Dubai, so we build that into the schedule rather than discovering it late.",
    knownFor:
      "being the most cost-efficient emirate to shoot in, with genuinely uncrowded beach frontage",
    terrain:
      "a compact, low-rise coastline with clean open beach and far less built clutter in frame than Dubai or Sharjah",
    venues:
      "open public beach, corniche, residential communities and smaller hotel property",
    logistics:
      "small enough to cross in minutes, which makes multi-location days unusually efficient once the crew is there. The travel cost is getting in and out, not moving around inside it",
    serpSummary:
      "Video production in Ajman — the most cost-efficient emirate to shoot in, with genuinely uncrowded beach frontage. Free quote in 2 hours.",
  },

  "ras-al-khaimah": {
    label: "Ras Al Khaimah",
    permitAuthority:
      "the Ras Al Khaimah Tourism Development Authority (TDA)",
    permitNote:
      "Ras Al Khaimah is the clearest of the northern emirates to permit: the RAK Government Media Office identifies the emirate's Tourism Development Authority as the regulatory body for filming permissions. Mountain and conservation locations carry their own access conditions on top of the permit, and those are location-specific rather than emirate-wide, so they are scoped per site.",
    knownFor:
      "the only genuine mountain scenery in the UAE, and the landscape work that cannot be shot anywhere else in the country",
    terrain:
      "dramatic elevation and red rock, with real directional shadow and a cooler, clearer light than the coastal emirates — and meaningfully lower temperatures at altitude",
    venues:
      "mountain road and summit locations, desert interior, beach resort property and conservation areas",
    logistics:
      "the drive from Dubai is substantial and mountain access adds more on top, so RAK is planned as a full-day minimum. Half-day bookings here are usually a false economy",
    serpSummary:
      "Video production in Ras Al Khaimah — the only real mountain scenery in the UAE, red rock and directional shadow. Free quote in 2 hours.",
  },

  fujairah: {
    label: "Fujairah",
    permitAuthority: null,
    permitNote:
      "Fujairah permissions are arranged through the relevant emirate authority and confirmed per shoot. We do not name a body here because third-party guidance is inconsistent and no official source could be confirmed. Expect northern-emirate approvals to need more lead time than Dubai, and plan the schedule accordingly rather than assuming same-week turnaround.",
    knownFor:
      "being the only emirate on the Gulf of Oman, which means it is the one place in the country where the sun rises over the sea rather than setting into it",
    terrain:
      "mountains meeting the coast directly, with rockier beaches, deeper water colour and a genuinely different light direction from the rest of the UAE",
    venues:
      "east-coast beaches, mountain and wadi locations, harbour and fishing-port areas, and resort property",
    logistics:
      "the mountain crossing from Dubai is the constraint. Sunrise work on the east coast means either a very early departure or staying the night before, and the second option usually produces the better footage",
    serpSummary:
      "Video production in Fujairah — the only emirate on the Gulf of Oman, where the sun rises over the sea. Free quote in 2 hours.",
  },

  "umm-al-quwain": {
    label: "Umm Al Quwain",
    permitAuthority: null,
    permitNote:
      "Umm Al Quwain permissions are arranged through the relevant emirate authority and confirmed per shoot; we do not publish a named body we have not verified. Lead times here run longer than Dubai, which is a planning input rather than a problem as long as it is known at briefing stage.",
    knownFor:
      "the quietest and least-photographed coastline in the country, and lagoon and mangrove scenery that is unusual for the UAE",
    terrain:
      "flat, low-lying and water-dominated, with tidal lagoons, sandbars and mangrove channels that give a softer, more natural palette than the engineered coastlines further south",
    venues:
      "lagoon and mangrove areas, long undeveloped beach, small-harbour and traditional settings",
    logistics:
      "far enough from Dubai to need a dedicated day, and genuinely quiet on arrival — the practical benefit is that locations are rarely crowded, so setups hold without constant resets",
    serpSummary:
      "Video production in Umm Al Quwain — the quietest coastline in the country, tidal lagoons and mangroves. Free quote in 2 hours.",
  },
};

export function emirateFactsFor(citySlug: string): EmirateFacts | null {
  return EMIRATE_FACTS[citySlug] ?? null;
}
