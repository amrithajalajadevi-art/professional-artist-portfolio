import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { HeroContent } from "@/types";

interface HeroSectionProps {
  data: HeroContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full p-8 sm:p-12 xl:p-16 bg-white space-y-6">
      {/* 1. Massive High-Impact Hero Artwork */}
      <FadeIn direction="up">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[50vh] sm:min-h-[70vh] overflow-hidden bg-white">
          <CustomImage
            src={data.featuredArtwork.image}
            alt={data.featuredArtwork.title}
            fill
            priority
            objectFit="cover"
            aspectRatio="auto"
            sizes="100vw"
          />
        </div>
      </FadeIn>

      {/* 2. Minimalist Caption below image */}
      <FadeIn direction="up" delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2 font-sans text-xs text-zinc-500">
          <div>
            <h2 className="font-serif text-lg text-zinc-950 font-normal italic">
              {data.featuredArtwork.title}, <span className="not-italic font-sans text-xs text-zinc-500">{data.featuredArtwork.year}</span>
            </h2>
            <p className="text-xs text-zinc-500">
              {data.featuredArtwork.medium} {data.featuredArtwork.dimensions ? `— ${data.featuredArtwork.dimensions}` : ""}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest font-medium text-[#6A0F36] hover:underline underline-offset-4"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
