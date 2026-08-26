"use client";

import React from "react";
import Link from "next/link";
import { CustomImage } from "@/components/ui/CustomImage";
import { Artwork } from "@/types";

interface ArtworkCardProps {
  artwork: Artwork;
  onSelect?: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  if (!artwork) return null;

  const imageSrc = artwork.image || "";
  const artworkId = artwork.id;

  return (
    <div className="break-inside-avoid mb-10 sm:mb-14 group relative bg-[#F7F4F0] flex flex-col space-y-3">
      <Link href={`/work/${artworkId}`} className="block space-y-3">
        {/* Dynamic Aspect Ratio Container */}
        <div
          className="relative w-full overflow-hidden bg-[#EFEAE4]"
          style={
            artwork.aspectRatio
              ? { aspectRatio: artwork.aspectRatio }
              : { aspectRatio: "4/3" }
          }
        >
          <CustomImage
            src={imageSrc}
            alt={artwork.title || "Artwork Image"}
            fill
            hoverScale
            objectFit="cover"
            aspectRatio="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Minimalist Artwork Caption */}
        <div className="space-y-0.5 font-sans pt-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-base text-[#4A2E35] font-light group-hover:text-[#8A7976] transition-colors truncate">
              {artwork.title}
            </h3>
            <span className="text-[11px] text-[#A39592] font-sans font-light flex-shrink-0">
              {artwork.year}
            </span>
          </div>

          <p className="text-[11px] text-[#A39592] truncate font-sans font-light">
            {artwork.medium}
          </p>
        </div>
      </Link>
    </div>
  );
}
