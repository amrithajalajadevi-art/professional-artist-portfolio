import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { PressCard } from "@/components/press/PressCard";
import { PressArticle } from "@/types";

interface PressGridProps {
  articles: PressArticle[];
}

export function PressGrid({ articles }: PressGridProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      {/* Header & Title */}
      <FadeIn direction="up">
        <div className="space-y-6 text-center">
          <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
            SELECTED MEDIA FEATURES
          </h1>
        </div>
      </FadeIn>

      {/* 4-Column Press Grid */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
