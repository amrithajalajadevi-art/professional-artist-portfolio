"use client";

import React from "react";
import { SanityPublicArt } from "@/sanity/lib/queries";
import { ArtworkDisplay } from "./ArtworkDisplay";

interface PublicArtCardProps {
  project: SanityPublicArt;
  index?: number;
}

export function PublicArtCard({ project }: PublicArtCardProps) {
  if (!project) return null;

  const displayImages =
    project.images && project.images.length > 0
      ? project.images.map((img) => ({
          src: img.url,
          alt: img.alt || project.title,
          caption: img.caption,
        }))
      : [];

  return (
    <article className="py-16 sm:py-24 border-b border-[#E8E2DA] last:border-b-0 space-y-12 bg-[#F7F4F0]">
      {/* 1 & 2. Artwork Display Component */}
      <ArtworkDisplay images={displayImages} title={project.title} />

      {/* Text Placement Below Image in a Clean Multi-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 pt-2 font-sans text-xs sm:text-sm">
        {/* Left Sub-Column: Title & Key Metadata */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#4A2E35] font-light uppercase tracking-tight leading-tight">
            {project.title}
          </h2>

          <div className="space-y-1.5 text-xs text-[#8A7976] font-light">
            {project.year && (
              <p>
                <span className="font-medium text-[#4A2E35]">Year:</span> {project.year}
              </p>
            )}
            {project.commissioningBody && (
              <p>
                <span className="font-medium text-[#4A2E35]">Commissioned by:</span> {project.commissioningBody}
              </p>
            )}
            {(project.location || project.city || project.country) && (
              <p>
                <span className="font-medium text-[#4A2E35]">Location:</span> {project.location}{" "}
                {[project.city, project.country].filter(Boolean).length > 0
                  ? `(${[project.city, project.country].filter(Boolean).join(", ")})`
                  : ""}
              </p>
            )}
            {project.medium && (
              <p>
                <span className="font-medium text-[#4A2E35]">Medium:</span> {project.medium}
              </p>
            )}
            {project.dimensions && (
              <p>
                <span className="font-medium text-[#4A2E35]">Scale / Dimensions:</span> {project.dimensions}
              </p>
            )}
          </div>
        </div>

        {/* Right Sub-Column: Description, Impact Metric & Link */}
        <div className="md:col-span-7 space-y-5 flex flex-col justify-between">
          {project.description && (
            <p className="text-sm sm:text-base text-[#8A7976] leading-relaxed font-light whitespace-pre-wrap">
              {project.description}
            </p>
          )}

          {project.impactMetric && (
            <div className="border-l-2 border-[#4A2E35]/40 pl-4 py-1 text-xs text-[#4A2E35] font-medium tracking-wide">
              {project.impactMetric}
            </div>
          )}

          {project.externalLink && (
            <div className="pt-2">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
              >
                Official Commission Registry ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
