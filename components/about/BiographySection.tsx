import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { BiographyData } from "@/types";

interface BiographySectionProps {
  data: BiographyData;
}

export function BiographySection({ data }: BiographySectionProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
            {data.heading || "ARTIST PROFILE"}
          </h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Portrait Image */}
        <div className="lg:col-span-5">
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-3">
              <div
                className="relative w-full overflow-hidden bg-[#F7F4F0]"
                style={
                  data.aspectRatio
                    ? { aspectRatio: data.aspectRatio }
                    : { aspectRatio: "3/4" }
                }
              >
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
              <p className="text-xs text-[#8A7976] font-sans italic">
                {data.portraitCaption}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Biography Paragraphs */}
        <div className="lg:col-span-7 space-y-6">
          <FadeInStagger staggerDelay={0.15}>
            <div className="text-sm sm:text-base text-[#8A7976] font-sans leading-relaxed">
              {data.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="mb-4 sm:mb-6 whitespace-pre-wrap leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
