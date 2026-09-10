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

      {/* True Masonry Layout via CSS Columns */}
      <FadeInStagger staggerDelay={0.15}>
        <div className="columns-1 md:columns-2 gap-12 sm:gap-16 [column-fill:_balance]">
          {projects.map((project, idx) => {
            const projectSrc = project.image || project.imageUrl || "";
            const projectSlug = project.slug || project.id;
            const projectHref = projectSlug ? `/work/${projectSlug}` : "/work";

            return (
              <article
                key={projectSlug || idx}
                className="break-inside-avoid [break-inside:avoid] inline-block w-full mb-12 sm:mb-16 group bg-[#F7F4F0]"
              >
                <div className="space-y-4">
                  {/* Dynamic Aspect Ratio Container — Preserves Natural Proportions */}
                  <div
                    className="relative w-full overflow-hidden bg-[#EFEAE4]"
                    style={
                      project.aspectRatio
                        ? { aspectRatio: project.aspectRatio }
                        : { aspectRatio: "4/3" }
                    }
                  >
                    <Link href={projectHref} className="block w-full h-full">
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
                    </Link>
                  </div>

                  {/* Minimal Caption: Title, Year, Medium strictly aligned underneath */}
                  <div className="space-y-1 font-sans text-sm text-[#5C4B48] pt-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-lg text-[#4A2E35] font-normal group-hover:text-[#5C4B48] transition-colors">
                        <Link href={projectHref}>
                          {project.title}
                        </Link>
                      </h3>
                      {project.year && (
                        <span className="text-xs text-[#5C4B48] font-sans font-medium flex-shrink-0">
                          {project.year}
                        </span>
                      )}
                    </div>

                    {project.medium && (
                      <p className="text-xs text-[#5C4B48] font-sans">
                        {project.medium}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </FadeInStagger>
    </section>
  );
}
