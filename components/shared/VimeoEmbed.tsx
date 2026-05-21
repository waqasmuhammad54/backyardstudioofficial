"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface Props {
  vimeoId: string;       // e.g. "123456789"
  poster: string;        // local webp path e.g. "/images/events/event-01.webp"
  title: string;
  aspectRatio?: "16/9" | "9/16" | "1/1";
}

export default function VimeoEmbed({ vimeoId, poster, title, aspectRatio = "16/9" }: Props) {
  const [playing, setPlaying] = useState(false);

  const paddingMap: Record<string, string> = {
    "16/9": "56.25%",
    "9/16": "177.78%",
    "1/1":  "100%",
  };

  if (playing) {
    return (
      <div className="relative w-full overflow-hidden" style={{ paddingTop: paddingMap[aspectRatio] }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=d4a017&title=0&byline=0&portrait=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group"
      style={{ paddingTop: paddingMap[aspectRatio] }}
      onClick={() => setPlaying(true)}
      role="button"
      aria-label={`Play ${title}`}
    >
      <Image
        src={poster}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 img-cinematic"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-gold/80 bg-gold/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_40px_rgba(212,160,23,0.3)]">
          <Play size={28} fill="#d4a017" color="#d4a017" className="ml-1" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="text-cream font-display text-sm tracking-widest">{title.toUpperCase()}</p>
      </div>
    </div>
  );
}
