import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { HeroContent } from "@/types";

interface HeroSectionProps {
  data: HeroContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white overflow-hidden">
      {/* Subtle Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 space-y-12">
        {/* Hero Header Meta Eyebrow */}
        <FadeIn direction="down" duration={0.5}>
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-sans font-medium border-b border-zinc-100 pb-4">
            <span className="flex items-center gap-2 text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Available for UK & International Commissions
            </span>
            <span>Portfolio 2024 — 2026</span>
          </div>
        </FadeIn>

        {/* Artist Introduction & Statement Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.1} direction="up">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold font-sans">
                {data.eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="font-serif text-3xl sm:text-5xl xl:text-6xl font-normal text-zinc-950 leading-[1.12] tracking-tight">
                {data.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-2xl">
                {data.statement}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href={data.primaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest bg-zinc-950 text-white hover:bg-zinc-800 transition-colors shadow-sm group"
                >
                  <span>{data.primaryCta.label}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={data.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{data.secondaryCta.label}</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors px-3 py-3"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Featured Artwork Visual Spotlight Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3} direction="left">
              <div className="group relative bg-zinc-50 border border-zinc-200/80 p-3 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <CustomImage
                    src={data.featuredArtwork.image}
                    alt={data.featuredArtwork.title}
                    fill
                    priority
                    hoverScale
                    aspectRatio="auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <span className="inline-block px-2 py-0.5 mb-1.5 text-[9px] uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xs">
                      Strongest Featured Artwork
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-normal leading-tight text-white">
                      {data.featuredArtwork.title}, {data.featuredArtwork.year}
                    </h2>
                    <p className="text-[11px] text-zinc-300 font-light mt-0.5">
                      {data.featuredArtwork.medium} — {data.featuredArtwork.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2.5 px-1 text-[11px] text-zinc-500 font-sans">
                  <span>Location: {data.featuredArtwork.location}</span>
                  <span className="font-mono text-zinc-400">#01 / HERO</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
