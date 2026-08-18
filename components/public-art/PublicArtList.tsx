import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { PublicArtCard } from "@/components/public-art/PublicArtCard";
import { PublicArtProject } from "@/types";

interface PublicArtListProps {
  projects: PublicArtProject[];
}

export function PublicArtList({ projects }: PublicArtListProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      {/* Header Eyebrow & Title */}
      <FadeIn direction="up">
        <div className="space-y-4 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
              01 / Public Art, Site-Specific Murals & Civic Commissions
            </p>
            <span className="text-xs font-mono text-zinc-400">
              Total Public Projects: {projects.length}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight max-w-3xl">
            Public Art & Site-Specific UK Commissions
          </h1>
          <p className="text-sm text-zinc-600 font-light max-w-2xl">
            Large-scale permanent sculptures, architectural ceramic murals, and community civic commissions created for public plazas, botanical gardens, and urban regeneration sites across the UK.
          </p>
        </div>
      </FadeIn>

      {/* Public Art Alternating Cards Container */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <PublicArtCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
