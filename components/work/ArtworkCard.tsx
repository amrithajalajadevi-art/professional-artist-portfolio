"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
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
      className="group relative bg-white border border-zinc-200/80 overflow-hidden cursor-pointer shadow-2xs hover:shadow-xl hover:border-zinc-400 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Artwork Image Container */}
      <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-zinc-100`}>
        <CustomImage
          src={artwork.image}
          alt={artwork.title}
          fill
          hoverScale
          aspectRatio="auto"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-950/80 backdrop-blur-xs text-white border border-white/20">
            {artwork.categoryLabel}
          </span>
        </div>

        {/* Hover Gradient & Overlay Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-20 pointer-events-none">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-zinc-300 font-mono block">
              {artwork.year} — {artwork.dimensions || "Dimensions variable"}
            </span>
            <h3 className="font-serif text-lg font-normal leading-snug">
              {artwork.title}
            </h3>
            <p className="text-xs text-zinc-300 font-light italic">
              {artwork.medium}
            </p>
            {artwork.location && (
              <p className="text-[11px] text-zinc-400 font-sans pt-1">
                {artwork.location}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 space-y-1.5 bg-white border-t border-zinc-100">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-base text-zinc-950 font-normal group-hover:text-zinc-700 transition-colors truncate">
            {artwork.title}
          </h3>
          <span className="text-xs text-zinc-400 font-mono flex-shrink-0">
            {artwork.year}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 font-sans">
          <span className="truncate">{artwork.medium}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-1" />
        </div>
      </div>
    </div>
  );
}
