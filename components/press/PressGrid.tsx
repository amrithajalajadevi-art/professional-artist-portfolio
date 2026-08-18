import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { PressCard } from "@/components/press/PressCard";
import { PressArticle } from "@/types";

interface PressGridProps {
  articles: PressArticle[];
}

export function PressGrid({ articles }: PressGridProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Selected Media Features & Critical Reviews
            </p>
            <span className="text-xs font-mono text-zinc-400">
              Total Featured Publications: {articles.length}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Press, Critical Reviews & Media Coverage
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            Selected international press features, critical exhibition reviews, and studio interviews published across leading UK national broadsheets, art journals, and cultural media platforms.
          </p>
        </div>
      </FadeIn>

      {/* 3-Column Responsive Press Grid */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
