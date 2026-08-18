import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { ExhibitionCard } from "@/components/exhibitions/ExhibitionCard";
import { ExhibitionProject } from "@/types";

interface ExhibitionsListProps {
  exhibitions: ExhibitionProject[];
}

export function ExhibitionsList({ exhibitions }: ExhibitionsListProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-10">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Exhibitions, Commissions & Public Projects
            </p>
            <span className="text-xs font-mono text-zinc-400">
              Total Recorded Exhibitions: {exhibitions.length}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Major Professional Projects & International Exhibitions
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            A chronological portfolio of solo and group museum exhibitions, civic public art commissions, and international pavilion showcases across the United Kingdom, Europe, and Asia.
          </p>
        </div>
      </FadeIn>

      {/* Exhibitions List Container */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="space-y-8">
          {exhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
