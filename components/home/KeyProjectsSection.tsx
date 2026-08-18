import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Project } from "@/types";

interface KeyProjectsSectionProps {
  projects: Project[];
}

export function KeyProjectsSection({ projects }: KeyProjectsSectionProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      <SectionHeading
        eyebrow="03 / Featured Projects"
        title="Key Portfolio Projects"
        linkHref="/work"
        linkText="View All Projects"
      />

      {/* 3-Column Responsive Grid */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-gallery-bg border border-zinc-200/80 p-4 hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-200">
                  <CustomImage
                    src={project.image}
                    alt={project.title}
                    fill
                    hoverScale
                    aspectRatio="auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-950/80 backdrop-blur-xs text-white border border-white/20">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl text-zinc-950 font-normal group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-400 font-mono">{project.year}</span>
                  </div>

                  <p className="text-xs text-zinc-500 font-medium tracking-tight">
                    {project.medium}
                  </p>

                  <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3 pt-1">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="pt-6 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-zinc-800 group-hover:text-zinc-950">
                <span className="text-zinc-400 font-normal truncate max-w-[180px]">
                  {project.location}
                </span>
                <Link
                  href={`/work?project=${project.id}`}
                  className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
