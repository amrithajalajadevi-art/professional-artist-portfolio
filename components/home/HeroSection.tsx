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
    <section className="relative w-full p-8 sm:p-12 xl:p-16 bg-white space-y-12">
      <div className="space-y-12">
        {/* Page Main Header in Deep Burgundy */}
        <FadeIn direction="up">
          <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-bold uppercase text-[#6A0F36] tracking-tight leading-tight max-w-4xl">
            {data.headline}
          </h1>
        </FadeIn>

        {/* 2-Column Clean Fine Art Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={0.1} direction="up">
              <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                {data.statement}
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs uppercase tracking-widest font-sans font-medium">
                <Link
                  href={data.primaryCta.href}
                  className="text-[#6A0F36] hover:underline underline-offset-4 transition-colors"
                >
                  {data.primaryCta.label} →
                </Link>

                <a
                  href={data.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  {data.secondaryCta.label}
                </a>

                <Link
                  href="/contact"
                  className="text-zinc-600 hover:text-[#6A0F36] transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Featured Artwork Display */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2} direction="up">
              <div className="space-y-3">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                  <CustomImage
                    src={data.featuredArtwork.image}
                    alt={data.featuredArtwork.title}
                    fill
                    priority
                    objectFit="cover"
                    aspectRatio="auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="text-xs font-sans text-zinc-600 space-y-0.5">
                  <p className="font-serif text-base text-zinc-950 italic">
                    {data.featuredArtwork.title}, {data.featuredArtwork.year}
                  </p>
                  <p className="text-zinc-500">
                    {data.featuredArtwork.medium} — {data.featuredArtwork.dimensions}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
