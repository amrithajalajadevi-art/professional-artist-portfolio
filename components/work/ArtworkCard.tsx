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
      className="break-inside-avoid mb-8 group relative bg-[#F7F4F0] cursor-pointer flex flex-col space-y-2"
    >
      {/* Image Wrapper Container with bg-[#EFEAE4] placeholder */}
      <div className="relative w-full overflow-hidden bg-[#EFEAE4]">
        {artwork.image ? (
          <Image
            src={artwork.image}
            alt={artwork.title || "Artwork Image"}
            width={1200}
            height={1200}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-auto object-contain block bg-[#EFEAE4] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-64 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans">
            {artwork.title || "Artwork Image"}
          </div>
        )}
      </div>

      {/* Clean Minimalist Caption Below Image */}
      <div className="space-y-0.5 font-sans pt-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-base text-[#4A2E35] font-normal group-hover:text-[#8A7976] transition-colors truncate">
            {artwork.title}
          </h3>
          <span className="text-xs text-[#8A7976] font-sans flex-shrink-0">
            {artwork.year}
          </span>
        </div>

        <p className="text-xs text-[#8A7976] truncate font-sans">
          {artwork.medium}
        </p>
      </div>
    </div>
  );
}
