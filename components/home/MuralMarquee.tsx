"use client";

import React from "react";
import Image from "next/image";

interface MuralMarqueeProps {
  muralImages: string[];
  title?: string;
}

export function MuralMarquee({ muralImages, title }: MuralMarqueeProps) {
  if (!muralImages || muralImages.length === 0) return null;

  // Duplicate images for seamless 100% continuous infinite marquee loop
  const displayImages =
    muralImages.length < 3
      ? [...muralImages, ...muralImages, ...muralImages, ...muralImages]
      : [...muralImages, ...muralImages];

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center group">
      {/* 0px gap flex row for seamless panoramic merge */}
      <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused] ease-linear">
        {displayImages.map((imgUrl, idx) => (
          <div
            key={`${imgUrl}-${idx}`}
            className="relative h-[40vh] sm:h-[60vh] lg:h-[75vh] min-h-[240px] sm:min-h-[400px] w-[75vw] sm:w-[55vw] lg:w-[45vw] shrink-0 m-0 p-0 overflow-hidden bg-[#F7F4F0]"
          >
            <Image
              src={imgUrl}
              alt={`${title || "Public Art Mural Panorama"} - Segment ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 80vw, 50vw"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
              className="object-cover object-center block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
