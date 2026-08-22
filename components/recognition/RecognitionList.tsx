import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { RecognitionItemCard } from "@/components/recognition/RecognitionItemCard";
import { RecognitionItem } from "@/types";

interface RecognitionListProps {
  items: RecognitionItem[];
}

export function RecognitionList({ items }: RecognitionListProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Awards, Fellowships & Competitive Recognition
            </p>
            <span className="text-xs font-mono text-zinc-400">
              Total Recorded Recognitions: {items.length}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Awards, Honors & Professional Recognition
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            An authoritative register of competitive international art selections, British Council features, exhibition selections, and academic distinctions awarded to Amritha Jalaja Devi.
          </p>
        </div>
      </FadeIn>

      {/* Recognition List Container */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-6">
          {items.map((item) => (
            <RecognitionItemCard key={item.id} item={item} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
