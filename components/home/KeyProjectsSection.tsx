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
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-12 mb-12">
      <SectionHeading
        title="SELECTED PROJECTS"
        linkHref="/work"
        linkText="View All Works"
      />

      {/* 2-Column Large Image Grid */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {projects.map((project, idx) => {
            const projectSrc = project.imageUrl || project.image || "";
            const projectSlug = project.slug || project.id;

            return (
              <div
                key={projectSlug || idx}
                className="group space-y-4 bg-[#F7F4F0]"
              >
                {/* Dynamic Aspect Ratio Container */}
                <div
                  className="relative w-full overflow-hidden bg-[#F7F4F0]"
                  style={
                    project.aspectRatio
                      ? { aspectRatio: project.aspectRatio }
                      : { aspectRatio: "4/3" }
                  }
                >
                  <CustomImage
                    src={projectSrc}
                    alt={project.title}
                    fill
                    priority={idx === 0}
                    hoverScale
                    objectFit="cover"
                    aspectRatio="auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Minimal Caption: Title, Year, Medium only */}
                <div className="space-y-1 font-sans text-sm text-[#5C4B48]">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-[#4A2E35] font-normal group-hover:text-[#5C4B48] transition-colors">
                      <Link href={`/work?project=${projectSlug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <span className="text-xs text-[#5C4B48] font-sans font-medium">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C4B48] font-sans">
                    {project.medium}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeInStagger>
    </section>
  );
}
