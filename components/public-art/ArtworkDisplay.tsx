"use client";

import React, { useRef } from "react";
import Image from "next/image";

export interface ImageObject {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export type InputImage = string | ImageObject;
export type InputImages = InputImage | InputImage[];

export interface ArtworkDisplayProps {
  images: InputImages;
  title?: string;
  caption?: string;
  className?: string;
}

export function ArtworkDisplay({
  images,
  title,
  caption,
  className = "",
}: ArtworkDisplayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Normalize images to an array of ImageObjects
  const normalizedImages: ImageObject[] = React.useMemo(() => {
    if (!images) return [];
    const list = Array.isArray(images) ? images : [images];
    return list.map((item) => (typeof item === "string" ? { src: item } : item));
  }, [images]);

  // Scroll left/right with arrows
  const scrollByDirection = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const amount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!normalizedImages || normalizedImages.length === 0) return null;

  // Condition 1: Single Image (Fallback)
  if (normalizedImages.length === 1) {
    const singleImage = normalizedImages[0];
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="relative w-full overflow-hidden bg-[#EFEAE4] flex items-center justify-start">
          <Image
            src={singleImage.src}
            alt={singleImage.alt || title || "Artwork display"}
            width={singleImage.width || 2400}
            height={singleImage.height || 1600}
            quality={95}
            priority
            sizes="100vw"
            className="w-full h-auto max-h-[80vh] object-contain object-left block bg-[#EFEAE4] transition-transform duration-700 ease-out hover:scale-[1.005]"
          />
        </div>
        {(singleImage.caption || caption || title) && (
          <p className="text-left font-sans text-xs sm:text-sm text-[#8A7976] font-light pt-1">
            {singleImage.caption || caption || title}
          </p>
        )}
      </div>
    );
  }

  // Condition 2: Multiple Images Carousel
  return (
    <div className={`space-y-3 ${className}`}>
      {/* 1. Horizontal Scroll Snap Container */}
      <div className="relative group w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-0 md:scrollbar-hide md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden scroll-smooth py-0.5"
        >
          {normalizedImages.map((image, idx) => (
            <div
              key={idx}
              className="h-[60vh] sm:h-[75vh] w-auto shrink-0 snap-start relative overflow-hidden bg-[#EFEAE4] flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt || `${title || "Mural"} — View ${idx + 1}`}
                width={image.width || 2400}
                height={image.height || 1600}
                quality={95}
                priority={idx === 0}
                sizes="(max-width: 768px) 85vw, 60vw"
                className="w-auto h-full object-contain block bg-[#EFEAE4] transition-transform duration-700 ease-out hover:scale-[1.005]"
              />
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrow Overlays */}
        <div className="hidden md:flex items-center justify-between pointer-events-none absolute inset-y-0 -left-3 -right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scrollByDirection("left")}
            aria-label="Previous mural section"
            className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 text-[#4A2E35] border border-[#E8E2DA] backdrop-blur-md flex items-center justify-center transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-md"
          >
            ←
          </button>
          <button
            onClick={() => scrollByDirection("right")}
            aria-label="Next mural section"
            className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 text-[#4A2E35] border border-[#E8E2DA] backdrop-blur-md flex items-center justify-center transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-md"
          >
            →
          </button>
        </div>
      </div>

      {/* 2. Caption Area & Mobile-Only Swipe Indicator */}
      <div className="flex items-center justify-between gap-4 font-sans text-xs text-[#8A7976] pt-1">
        <div className="text-left">
          {(caption || title) && (
            <p className="font-light text-[#8A7976]">{caption || title}</p>
          )}
        </div>

        {/* Mobile-Only Swipe Text Indicator */}
        <div className="block md:hidden shrink-0 text-right">
          <span className="text-[10px] uppercase tracking-wider text-[#8A7976] font-light flex items-center gap-1">
            Swipe to explore ⟶
          </span>
        </div>
      </div>
    </div>
  );
}
