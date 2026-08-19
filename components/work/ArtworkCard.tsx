"use client";

import React from "react";
import Image from "next/image";
import { Artwork } from "@/types";

interface ArtworkCardProps {
  artwork: Artwork;
  onSelect: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
  if (!artwork) return null;

  return (
    <div
      onClick={() => onSelect(artwork)}
      className="break-inside-avoid mb-10 sm:mb-14 group relative bg-[#F7F4F0] cursor-pointer flex flex-col space-y-3"
    >
      {/* Enlarged High-Resolution Image Container */}
      <div className="relative w-full overflow-hidden bg-[#EFEAE4]">
        {artwork.image ? (
          <Image
            src={artwork.image}
            alt={artwork.title || "Artwork Image"}
            width={1600}
            height={1600}
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-cover block bg-[#EFEAE4] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-80 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans">
            {artwork.title || "Artwork Image"}
          </div>
        )}
      </div>

      {/* De-emphasized Minimalist Artwork Caption */}
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
    </div>
  );
}
