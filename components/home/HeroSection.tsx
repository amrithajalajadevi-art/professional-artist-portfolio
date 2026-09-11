"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CustomImage } from "@/components/ui/CustomImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { SanityHeroSection } from "@/sanity/lib/queries";

// Dynamically lazy-load the multi-image mural marquee to eliminate main-thread blocking
const MuralMarquee = dynamic(
  () => import("./MuralMarquee").then((mod) => mod.MuralMarquee),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[75vh] min-h-[240px] bg-[#EFEAE4] animate-pulse" />
    ),
  }
);

interface HeroSectionProps {
  data?: SanityHeroSection | null;
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const isCustom = data.heroType === "custom";

  const rawMuralImages = isCustom
    ? data.customMuralImages || []
    : data.projectReference?.muralImages || [];

  const muralImages = rawMuralImages.filter((img): img is string => Boolean(img));
  const isMultiImageMural = muralImages.length > 1;

  const imageSource = isCustom
    ? data.customImage || data.customImageUrl || muralImages[0]
    : data.projectReference?.image || data.projectReference?.imageUrl || muralImages[0];

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
    <section className="relative w-full p-4 sm:p-8 lg:p-12 xl:p-16 bg-[#F7F4F0] overflow-hidden">
      {/* 1. Hero Typography Block: High-End Gallery Wall Statement */}
      <FadeIn direction="up">
        <div className="max-w-4xl mb-6 sm:mb-8 lg:mb-10">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#4A2E35]">
            {headline}
          </h1>
        </div>
      </FadeIn>

      {/* 2. Universal Visual Container: Dynamic Full-Width Scaling */}
      <FadeIn direction="up" delay={0.1}>
        <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-[78vh] min-h-[280px] sm:min-h-[420px] bg-[#EFEAE4] overflow-hidden group">
          {isMultiImageMural ? (
            /* Dynamically loaded infinite Marquee for Multi-Image Mural Projects */
            <MuralMarquee muralImages={muralImages} title={title} />
          ) : imageSource ? (
            /* Dynamic High-Resolution Full-Cover Image View */
            <Link
              href={linkHref}
              className="block w-full h-full relative cursor-pointer"
              aria-label={title || "View Artwork Details"}
            >
              <CustomImage
                src={imageSource}
                alt={title || "Hero Artwork"}
                fill
                priority={true}
                objectFit="cover"
                aspectRatio="auto"
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 85vw, 1600px"
                quality={90}
                className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </Link>
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
