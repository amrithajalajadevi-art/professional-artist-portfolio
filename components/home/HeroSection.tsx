"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/FadeIn";
import { SanityHeroSection } from "@/sanity/lib/queries";

// Dynamically lazy-load the multi-image mural marquee to eliminate main-thread blocking
const MuralMarquee = dynamic(
  () => import("./MuralMarquee").then((mod) => mod.MuralMarquee),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[350px] bg-[#EFEAE4] animate-pulse" />
    ),
  }
);

interface HeroSectionProps {
  data?: SanityHeroSection | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const isCustom = data.heroType === "custom";

  const muralImages = !isCustom ? data.projectReference?.muralImages || [] : [];
  const isMultiImageMural = muralImages.length > 1;

  const imageUrl = isCustom
    ? data.customImageUrl
    : data.projectReference?.imageUrl;

  const title = isCustom
    ? data.customTitle || "Studio & Artist Profile"
    : data.projectReference?.title;

  const year = isCustom ? undefined : data.projectReference?.year;
  const medium = isCustom ? undefined : data.projectReference?.medium;
  const dimensions = isCustom ? undefined : data.projectReference?.dimensions;

  const linkHref =
    !isCustom && data.projectReference?.slug
      ? data.projectReference._type === "publicArt"
        ? `/public-art`
        : `/work/${data.projectReference.slug}`
      : "/work";

  const headline =
    data.headline ||
    "Contemporary Figurative painter with an expanding public-art practice.";

  return (
    <section className="relative w-full p-6 sm:p-12 xl:p-16 bg-[#F7F4F0] overflow-hidden">
      {/* 1. Hero Typography Block: High-End Gallery Wall Statement */}
      <FadeIn direction="up">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-[#4A2E35]">
            {headline}
          </h1>
        </div>
      </FadeIn>

      {/* 2. Universal Visual Container */}
      <FadeIn direction="up" delay={0.1}>
        <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[80vh] min-h-[350px] sm:min-h-[480px] bg-[#F7F4F0] overflow-hidden flex items-center justify-start group">
          {isMultiImageMural ? (
            /* Dynamically loaded infinite Marquee for Multi-Image Mural Projects */
            <MuralMarquee muralImages={muralImages} title={title} />
          ) : imageUrl ? (
            /* Standard Static Full Image View */
            <Image
              src={imageUrl}
              alt={title || "Hero Image"}
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
              quality={85}
              className="object-contain object-left block bg-[#F7F4F0] transition-transform duration-700 ease-out hover:scale-[1.01]"
            />
          ) : (
            <div className="w-full h-80 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans">
              {title || "Hero Image Placeholder"}
            </div>
          )}
        </div>
      </FadeIn>

      {/* 3. Caption Text Container */}
      <FadeIn direction="up" delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-6 font-sans text-xs text-[#8A7976]">
          <div className="text-left">
            {title && (
              <h2 className="font-serif text-lg sm:text-xl text-[#4A2E35] font-light italic">
                {title}
                {year && (
                  <span className="not-italic font-sans text-xs text-[#8A7976] font-light ml-1.5">
                    {year}
                  </span>
                )}
              </h2>
            )}
            {(medium || dimensions) && (
              <p className="text-xs text-[#5C4B48] font-normal">
                {medium}
                {dimensions ? ` — ${dimensions}` : ""}
              </p>
            )}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={linkHref}
              className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
            >
              {isMultiImageMural ? "Explore Mural Details →" : "View Gallery →"}
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
