"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  youtubeEmbedUrl,
  youtubeThumbnail,
  type SiteVideo,
} from "@/lib/videos";

/**
 * Click-to-load YouTube facade.
 *
 * Deliberately NOT a bare <iframe>. A YouTube iframe pulls roughly half a
 * megabyte of third-party JavaScript on page load, and on a page that already
 * has a full-bleed hero image that lands squarely on LCP and INP. Until the
 * visitor actually clicks, this renders one thumbnail and nothing else, so the
 * embed costs a page nothing in Core Web Vitals while still putting real client
 * footage in front of the reader.
 *
 * youtube-nocookie.com is used for the player so no tracking cookie is set
 * before the visitor opts in by pressing play.
 *
 * The aspect box is reserved from `orientation`, so there is no layout shift
 * when the thumbnail loads or when the iframe replaces it.
 */
export default function YouTubeEmbed({
  video,
  className = "",
  priority = false,
}: {
  video: SiteVideo;
  className?: string;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  const paddingTop = video.orientation === "vertical" ? "177.78%" : "56.25%";
  const maxWidth = video.orientation === "vertical" ? "420px" : "100%";

  return (
    <figure className={className} style={{ maxWidth, margin: "0 auto" }}>
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop, border: "1px solid var(--border)" }}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${youtubeEmbedUrl(video.id)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="absolute inset-0 w-full h-full group cursor-pointer"
          >
            <Image
              src={youtubeThumbnail(video.id)}
              alt={video.heading}
              fill
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={
                video.orientation === "vertical"
                  ? "(max-width: 768px) 100vw, 420px"
                  : "(max-width: 768px) 100vw, 800px"
              }
            />
            <span className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  border: "2px solid rgba(212,160,23,0.8)",
                  background: "rgba(212,160,23,0.1)",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 0 40px rgba(212,160,23,0.3)",
                }}
              >
                <Play size={28} fill="#d4a017" color="#d4a017" className="ml-1" />
              </span>
            </span>
          </button>
        )}
      </div>

      <figcaption
        className="mt-5 text-sm leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        <strong
          className="block mb-2 font-display text-base"
          style={{ color: "var(--cream)" }}
        >
          {video.heading}
        </strong>
        {video.description}
      </figcaption>
    </figure>
  );
}
