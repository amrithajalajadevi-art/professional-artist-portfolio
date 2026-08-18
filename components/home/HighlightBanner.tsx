import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { HighlightBannerContent } from "@/types";

interface HighlightBannerProps {
  data: HighlightBannerContent;
}

export function HighlightBanner({ data }: HighlightBannerProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-6">
      <FadeIn direction="up">
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#6A0F36] tracking-tight">
            {data.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
            {data.description}
          </p>

          <div>
            <Link
              href={data.cta.href}
              className="text-xs uppercase tracking-widest font-sans font-medium text-[#6A0F36] hover:underline underline-offset-4 transition-colors"
            >
              {data.cta.label} →
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
