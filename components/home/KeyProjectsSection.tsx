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
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-12 mb-12">
      <SectionHeading
        title="SELECTED PROJECTS"
        linkHref="/work"
        linkText="View All Works"
      />

      {/* 2-Column Large Image Grid */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group space-y-4 bg-white"
            >
              {/* Large Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                <CustomImage
                  src={project.image}
                  alt={project.title}
                  fill
                  hoverScale
                  aspectRatio="auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Minimal Caption: Title, Year, Medium only */}
              <div className="space-y-1 font-sans text-sm text-gray-500">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg text-zinc-950 font-normal group-hover:text-[#6A0F36] transition-colors">
                    <Link href={`/work?project=${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <span className="text-xs text-gray-500 font-sans">{project.year}</span>
                </div>

                <p className="text-xs text-gray-500 font-sans">
                  {project.medium}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInStagger>
    </section>
  );
}
