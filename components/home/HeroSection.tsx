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

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const checkScroll = () => {
      if (el) {
        setCanScroll(el.scrollHeight > el.clientHeight + 10);
      }
    };

    checkScroll();

    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
    };
  }, [imageSource]);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (el && el.scrollTop > 20) {
      setHasScrolled(true);
    }
  };

  return (
    <section className="relative w-full p-4 sm:p-10 lg:p-16 bg-[#F7F4F0] overflow-hidden">
      {/* 1. Hero Typography Block: High-End Gallery Wall Statement */}
      <FadeIn direction="up">
        <div className="max-w-3xl mb-6 sm:mb-10 md:mb-16 lg:mb-20">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#4A2E35]">
            {headline}
          </h1>
        </div>
      </FadeIn>

      {/* 2. Universal Visual Container */}
      <FadeIn direction="up" delay={0.1}>
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[75vh] min-h-[240px] sm:min-h-[400px] bg-[#F7F4F0] overflow-y-auto overflow-x-hidden [scrollbar-width:thin] [scrollbar-color:#E8E2DA_#F7F4F0] flex flex-col justify-start items-start group select-none scroll-smooth"
        >
          {isMultiImageMural ? (
            /* Dynamically loaded infinite Marquee for Multi-Image Mural Projects */
            <MuralMarquee muralImages={muralImages} title={title} />
          ) : imageSource ? (
            /* Standard Static Full Image View with internal Y-direction scrolling */
            <div className="w-full relative shrink-0">
              <CustomImage
                src={imageSource}
                alt={title || "Hero Image"}
                fill={false}
                priority={true}
                objectFit="contain"
                aspectRatio="auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={85}
                containerClassName="w-full"
                className="w-full max-w-full h-auto object-contain object-top block bg-[#F7F4F0]"
              />
            </div>
          ) : (
            <div className="w-full h-80 bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans">
              {title || "Hero Image Placeholder"}
            </div>
          )}

          {/* Subtle scroll indicator for overflowing images */}
          {canScroll && !hasScrolled && !isMultiImageMural && (
            <div
              className="pointer-events-none sticky bottom-3 ml-auto mr-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4A2E35]/75 backdrop-blur-sm text-[10px] tracking-widest uppercase text-[#F7F4F0] shadow-sm transition-opacity duration-300 font-sans"
              aria-hidden="true"
            >
              <span className="inline-block animate-bounce">↓</span>
              <span>Scroll Artwork</span>
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
