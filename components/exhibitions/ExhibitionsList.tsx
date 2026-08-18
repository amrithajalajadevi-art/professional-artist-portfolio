import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { ExhibitionCard } from "@/components/exhibitions/ExhibitionCard";
import { ExhibitionProject } from "@/types";

interface ExhibitionsListProps {
  exhibitions: ExhibitionProject[];
}

export function ExhibitionsList({ exhibitions }: ExhibitionsListProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-6">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-black tracking-tight">
            EXHIBITIONS
          </h1>

          <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-black tracking-tight pt-4">
            UPCOMING & ONGOING EXHIBITIONS
          </h2>
        </div>
      </FadeIn>

      {/* Exhibitions List Container */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="space-y-6">
          {exhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
