"use client";

import Image from "next/image";
import { useState } from "react";

const videoId = "paHNLHp44Ns";
const thumbnailSrc = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[378px] overflow-hidden rounded-[10px] border border-[#111] bg-black lg:h-[672px]">
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
          referrerPolicy="strict-origin-when-cross-origin"
          src={embedSrc}
          title="Divyasanchay investment video"
        />
      ) : (
        <button
          aria-label="Play Divyasanchay investment video"
          className="group relative h-full w-full overflow-hidden"
          onClick={() => setIsPlaying(true)}
          type="button"
        >
          <Image
            alt="Divyasanchay investment video thumbnail"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            priority
            sizes="(min-width: 1024px) 378px, min(100vw, 378px)"
            src={thumbnailSrc}
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
          <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-105">
            <Image alt="" height={30} src="/figma-home/hero-play.svg" width={30} />
          </span>
        </button>
      )}
    </div>
  );
}
