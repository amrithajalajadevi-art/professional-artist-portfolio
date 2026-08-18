import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { BiographyData } from "@/types";

interface BiographySectionProps {
  data: BiographyData;
}

export function BiographySection({ data }: BiographySectionProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-10">
      <FadeIn direction="up">
        <div className="space-y-2 border-b border-zinc-200 pb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
            {data.eyebrow}
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            {data.heading}
          </h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Portrait Image (Stacks on top on mobile) */}
        <div className="lg:col-span-5">
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-200 bg-zinc-100 shadow-md">
                <CustomImage
                  src={data.portraitImage}
                  alt={data.portraitAlt}
                  fill
                  priority
                  hoverScale
                  aspectRatio="auto"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-[11px] text-zinc-500 font-sans italic leading-relaxed">
                {data.portraitCaption}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Well-structured Biography Paragraphs & Quick Facts */}
        <div className="lg:col-span-7 space-y-8">
          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-5 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
              {data.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </FadeInStagger>

          {/* Quick Facts Card */}
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-gallery-bg border border-zinc-200/80 p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 border-b border-zinc-200 pb-2">
                Fast Facts & Profile Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {data.quickFacts.map((fact, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-zinc-400 font-sans uppercase tracking-wider block text-[10px]">
                      {fact.label}
                    </span>
                    <span className="text-zinc-900 font-medium font-sans">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
