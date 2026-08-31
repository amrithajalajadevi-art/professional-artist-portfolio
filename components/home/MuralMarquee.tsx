"use client";

import React from "react";
import Image from "next/image";

interface MuralMarqueeProps {
  muralImages: string[];
  title?: string;
}

export function MuralMarquee({ muralImages, title }: MuralMarqueeProps) {
  if (!muralImages || muralImages.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto snap-x snap-mandatory flex md:w-max md:animate-marquee hover:[animation-play-state:paused] ease-linear [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Duplicate muralImages array twice for seamless 100% infinite loop */}
      {[...muralImages, ...muralImages].map((imgUrl, idx) => (
        <div
          key={`${imgUrl}-${idx}`}
          className="relative h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[350px] sm:min-h-[480px] aspect-[4/3] sm:aspect-[16/10] shrink-0 snap-start m-0 p-0 overflow-hidden bg-[#EFEAE4]"
        >
          <Image
            src={imgUrl}
            alt={`${title || "Public Art Mural"} - View ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 80vw, 50vw"
            quality={80}
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            className="object-cover block"
          />
        </div>
      ))}
    </div>
  );
}
