import React from "react";
import Link from "next/link";
import { FadeInStagger } from "@/components/ui/FadeIn";
import { CustomImage } from "@/components/ui/CustomImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Project } from "@/types";

interface KeyProjectsSectionProps {
  projects: Project[];
}

export function KeyProjectsSection({ projects }: KeyProjectsSectionProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-8">
      <SectionHeading
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
              className="group flex flex-col justify-between bg-white space-y-4"
            >
              <div className="space-y-3">
                {/* Image Container - Pure artwork focus */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                  <CustomImage
                    src={project.image}
                    alt={project.title}
                    fill
                    hoverScale
                    aspectRatio="auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Title & Metadata */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-zinc-950 font-normal group-hover:text-[#6A0F36] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-zinc-400 font-sans">{project.year}</span>
                  </div>

                  <p className="text-xs text-zinc-500 font-sans">
                    {project.medium}
                  </p>

                  <p className="text-xs text-zinc-600 font-sans leading-relaxed line-clamp-2 pt-0.5">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href={`/work?project=${project.id}`}
                  className="text-xs font-sans text-[#6A0F36] hover:underline underline-offset-4"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
