"use client";

import React from "react";
import { CustomImage } from "@/components/ui/CustomImage";
import { Artwork } from "@/types";

interface ArtworkCardProps {
  artwork: Artwork;
  onSelect: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
  const getAspectClass = () => {
    switch (artwork.aspectRatio) {
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      case "square":
        return "aspect-square";
      default:
        return "aspect-[4/3]";
    }
  };

  return (
    <div
      onClick={() => onSelect(artwork)}
      className="group relative bg-white cursor-pointer flex flex-col space-y-3"
    >
      {/* Artwork Image Container - Pure Fine Art Focus with Contain */}
      <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-white`}>
        <CustomImage
          src={artwork.image}
          alt={artwork.title}
          fill
          hoverScale
          objectFit="contain"
          aspectRatio="auto"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Clean Minimalist Caption Below Image */}
      <div className="space-y-0.5 font-sans">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-base text-zinc-950 font-normal group-hover:text-[#6A0F36] transition-colors truncate">
            {artwork.title}
          </h3>
          <span className="text-xs text-zinc-400 font-sans flex-shrink-0">
            {artwork.year}
          </span>
        </div>

        <p className="text-xs text-zinc-500 truncate">
          {artwork.medium}
        </p>
      </div>
    </div>
  );
}
