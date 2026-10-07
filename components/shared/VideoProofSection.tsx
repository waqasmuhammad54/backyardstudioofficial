import YouTubeEmbed from "@/components/shared/YouTubeEmbed";
import { videoObjectSchema } from "@/lib/structuredData";
import {
  VIDEOS,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
  type SiteVideo,
} from "@/lib/videos";

/**
 * A section that puts one real piece of Backyard footage on a page that already
 * makes a claim, and emits the matching VideoObject JSON-LD.
 *
 * Server component on purpose: the JSON-LD has to be in the HTML Google fetches,
 * and only the play-button state needs to be client-side (YouTubeEmbed owns it).
 *
 * `eyebrow` / `heading` / `lead` are per-page because the point of the section is
 * that the video is evidence for *this* page's argument. A generic "Our Work"
 * block repeated across pages would be boilerplate; this is not.
 */
export default function VideoProofSection({
  videoKey,
  eyebrow = "Proof of Work",
  heading,
  lead,
  background = "var(--black)",
}: {
  videoKey: keyof typeof VIDEOS;
  eyebrow?: string;
  heading: string;
  lead?: string;
  background?: string;
}) {
  const video: SiteVideo | undefined = VIDEOS[videoKey];
  if (!video) return null;

  const schema = videoObjectSchema({
    name: video.title,
    description: video.description,
    thumbnailUrl: youtubeThumbnail(video.id),
    uploadDate: video.uploadDate,
    contentUrl: youtubeWatchUrl(video.id),
    embedUrl: youtubeEmbedUrl(video.id),
    ...(video.duration ? { duration: video.duration } : {}),
  });

  return (
    <section
      className="section-pad border-t"
      style={{ background, borderColor: "var(--border)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-xl max-w-4xl">
        <p className="eyebrow mb-4 text-center">{eyebrow}</p>
        <h2
          className="font-display text-4xl text-center mb-6"
          style={{ color: "var(--cream)" }}
        >
          {heading.toUpperCase()}
        </h2>
        {lead && (
          <p
            className="text-base leading-relaxed text-center max-w-2xl mx-auto mb-12"
            style={{ color: "var(--silver)" }}
          >
            {lead}
          </p>
        )}
        <YouTubeEmbed video={video} />
      </div>
    </section>
  );
}
