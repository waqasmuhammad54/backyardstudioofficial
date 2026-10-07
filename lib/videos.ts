/**
 * Central registry of Backyard Studio Official's own YouTube videos.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * These are 17-to-46-second pieces of real client work. Each one is *evidence*
 * for a claim a service or industry page already makes — not an article in its
 * own right. Giving each video its own blog post would create five thin pages,
 * which is the actual algorithmic risk here. Instead every video is embedded on
 * the page it proves, with VideoObject schema, and creates ZERO new URLs.
 *
 * DATA PROVENANCE — do not edit these fields from memory.
 *   - `id`, `title`: verified via YouTube oEmbed (not inferred from list order).
 *   - `uploadDate`: verified from the channel RSS feed
 *     https://www.youtube.com/feeds/videos.xml?channel_id=UCDSmyykW0G_2oxBJs0uMofA
 *     `uploadDate` is required for Google video rich results. An invented date is
 *     worse than no date — it is a schema claim that contradicts YouTube.
 *   - `duration`: ISO-8601, from the real runtime. OMITTED where unverified
 *     (the two Shorts) rather than guessed — the property is optional in schema.
 *
 * `description` is the on-page caption AND the schema description. It is written
 * to describe what is actually in the frame, which is how the long-tail phrases
 * get earned rather than stuffed. Do not append keyword lists to these.
 */

export const YOUTUBE_CHANNEL_ID = "UCDSmyykW0G_2oxBJs0uMofA";
export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/@BackyardStudioofficialuae";

export type SiteVideo = {
  /** YouTube video ID. */
  id: string;
  /** Exact YouTube title — used for schema `name`. */
  title: string;
  /** Short heading shown above the embed on the page. */
  heading: string;
  /** Caption copy + schema description. Describes the real footage. */
  description: string;
  /** ISO date, verified from the channel feed. */
  uploadDate: string;
  /** ISO-8601 duration. Omit when not verified. */
  duration?: string;
  /** Shorts are 9:16; standard uploads are 16:9. Drives the embed aspect box. */
  orientation: "landscape" | "vertical";
};

export const VIDEOS: Record<string, SiteVideo> = {
  sportsReel: {
    id: "CfCAD90lE30",
    title: "Capturing Every Moment of Sports | Backyard Studio",
    heading: "Sports coverage, as it actually looks",
    description:
      "Short-form sports coverage cut from a Backyard Studio Official shoot in the UAE — the kind of same-day social edit we deliver to clubs, federations and event sponsors before the crowd has left the venue. It shows the thing that matters most in sports production and is hardest to judge from a price list: whether the operator is in the right position when the moment happens.",
    uploadDate: "2026-06-03",
    orientation: "vertical",
  },

  fitnessReel: {
    id: "x6ypXL1ke3s",
    title: "Pro Fitness — Backyard Studio Official",
    heading: "Gym and fitness content, shot during real training",
    description:
      "Fitness content production filmed on location in a working UAE gym. Movement is captured during actual training rather than posed between sets, which is the difference between footage a coach or supplement brand can publish and footage that reads as stock. Cut vertical for Instagram Reels, TikTok and YouTube Shorts from the same session.",
    uploadDate: "2026-08-24",
    orientation: "vertical",
  },

  corporateGala: {
    id: "LBcSVVddEU8",
    title: "Dubai Corporate Gala || Backyard Studio Official || UAE",
    heading: "Corporate gala night, Dubai",
    description:
      "Highlight cut from a corporate gala dinner in Dubai — stage programme, guest arrivals and room atmosphere captured in low, mixed event lighting. Gala and awards nights are the hardest event environment to shoot well because the light is designed for the audience, not the camera, and there is no second take of an award being handed over.",
    uploadDate: "2026-06-04",
    duration: "PT17S",
    orientation: "landscape",
  },

  teamWork: {
    id: "y4fZEc2MN9o",
    title: "The Team Work || Backyard Studio Official || UAE",
    heading: "The crew on set",
    description:
      "Behind the scenes with the Backyard Studio Official crew on a UAE production — camera, lighting and direction working as one unit. Worth watching if you are deciding who to brief: the size and discipline of the team on the floor is what determines whether a shoot day delivers the full shot list or most of it.",
    uploadDate: "2026-06-04",
    duration: "PT29S",
    orientation: "landscape",
  },

  showreel: {
    id: "ZvlCpXESkQ0",
    title: "Backyard Studio Official || www.backyardstudioofficial.com",
    heading: "Studio showreel",
    description:
      "A short showreel across Backyard Studio Official's production work in the UAE — commercial, corporate, event and lifestyle footage from client shoots across the emirates, cut to show range rather than to tell one story.",
    uploadDate: "2026-10-06",
    duration: "PT46S",
    orientation: "landscape",
  },
};

/**
 * hqdefault exists for every video; maxresdefault does NOT for Shorts.
 * Host is img.youtube.com, not i.ytimg.com, because img.youtube.com is the
 * hostname already allowed in next.config.mjs → images.remotePatterns. Same
 * image, no config change, no silently-unoptimised <img>.
 */
export function youtubeThumbnail(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}
