import React from "react";
import { CustomImage } from "@/components/ui/CustomImage";
import { PublicArtProject } from "@/types";

interface PublicArtCardProps {
  project: PublicArtProject;
  index: number;
}

export function PublicArtCard({ project }: PublicArtCardProps) {
  return (
    <div className="bg-[#F7F4F0] space-y-4 py-6 border-b border-[#E8E2DA] last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Cover Image Container */}
        <div className="md:col-span-6 relative w-full aspect-[4/3] overflow-hidden bg-[#F7F4F0]">
          <CustomImage
            src={project.coverImage}
            alt={project.title}
            fill
            hoverScale
            aspectRatio="auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details Container */}
        <div className="md:col-span-6 space-y-3 font-sans text-sm">
          <h3 className="font-serif text-2xl text-[#4A2E35] font-normal uppercase tracking-tight">
            {project.title}
          </h3>

          <p className="text-xs text-[#8A7976] font-sans">
            <span className="font-semibold text-[#4A2E35]">{project.year}</span> — Commissioned by {project.commissioningBody} ({project.city}, {project.country})
          </p>

          <p className="text-xs text-[#8A7976]">
            Medium: {project.medium} {project.dimensions ? `| Scale: ${project.dimensions}` : ""}
          </p>

          <p className="text-xs text-[#8A7976] leading-relaxed pt-1">
            {project.description}
          </p>

          {project.externalLink && (
            <div className="pt-2">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4"
              >
                Official Commission Registry ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
