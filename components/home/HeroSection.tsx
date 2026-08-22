"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroContent } from "@/types";

interface HeroSectionProps {
  data: HeroContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data || !data.featuredArtwork) return null;

  return (
    <section className="relative w-full p-6 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-6">
      {/* 1. Universal Image Container with Fill, Object-Contain & Object-Left */}
      <FadeIn direction="up">
        <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[350px] sm:min-h-[480px] bg-[#F7F4F0] overflow-hidden flex items-center justify-start">
          {data.featuredArtwork.image ? (
            <Image
              src={data.featuredArtwork.image}
              alt={data.featuredArtwork.title || "Featured Hero Artwork"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
              quality={95}
              className="object-contain object-left block bg-[#F7F4F0] transition-transform duration-700 ease-out hover:scale-[1.01]"
            />
          ) : (
            <div className="w-full h-80 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans">
              {data.featuredArtwork.title}
            </div>
          )}
        </div>
      </FadeIn>

      {/* 2. Caption Text Container Strictly Aligned to Left Edge */}
      <FadeIn direction="up" delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2 font-sans text-xs text-[#8A7976]">
          <div className="text-left">
            <h2 className="font-serif text-lg sm:text-xl text-[#4A2E35] font-light italic">
              {data.featuredArtwork.title},{" "}
              <span className="not-italic font-sans text-xs text-[#8A7976] font-light">
                {data.featuredArtwork.year}
              </span>
            </h2>
            <p className="text-xs text-[#8A7976] font-light">
              {data.featuredArtwork.medium}
              {data.featuredArtwork.dimensions
                ? ` — ${data.featuredArtwork.dimensions}`
                : ""}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
