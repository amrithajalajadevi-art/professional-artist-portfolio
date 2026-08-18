import React from "react";
import { MapPin, Building2, ExternalLink, Sparkles, Layers, Maximize2 } from "lucide-react";
import { CustomImage } from "@/components/ui/CustomImage";
import { PublicArtProject } from "@/types";

interface PublicArtCardProps {
  project: PublicArtProject;
  index: number;
}

export function PublicArtCard({ project, index }: PublicArtCardProps) {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`bg-white border border-zinc-200/80 hover:border-zinc-400 transition-all duration-500 shadow-2xs hover:shadow-xl overflow-hidden flex flex-col ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Cover Image Container */}
      <div className="relative w-full lg:w-1/2 aspect-[16/10] sm:aspect-[4/3] min-h-[250px] sm:min-h-[320px] bg-zinc-950 flex-shrink-0 overflow-hidden">
        <CustomImage
          src={project.coverImage}
          alt={project.title}
          fill
          hoverScale
          objectFit="cover"
          aspectRatio="auto"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Year Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-mono font-semibold bg-zinc-950/85 backdrop-blur-xs text-white border border-white/20">
            {project.year}
          </span>
        </div>
      </div>

      {/* Structured Details Container */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6">
        <div className="space-y-5">
          {/* Commissioning Body Badge Tag (Visa Requirement) */}
          <div className="flex flex-wrap items-center gap-2 border-b border-zinc-100 pb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-amber-50 text-amber-900 border border-amber-200/80">
              <Building2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
              Commissioned By: {project.commissioningBody}
            </span>
          </div>

          {/* Title & Location */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal leading-snug">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              <span>
                {project.location} — <span className="text-zinc-900 font-bold">{project.city}, {project.country}</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Technical Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-700 font-sans border-t border-zinc-100">
            <div className="flex items-start gap-2">
              <Layers className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                  Medium & Technique
                </span>
                <span className="font-medium text-zinc-900">{project.medium}</span>
              </div>
            </div>

            {project.dimensions && (
              <div className="flex items-start gap-2">
                <Maximize2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                    Scale / Dimensions
                  </span>
                  <span className="font-medium text-zinc-900">{project.dimensions}</span>
                </div>
              </div>
            )}
          </div>

          {/* Impact Metric Tag */}
          {project.impactMetric && (
            <div className="p-3 bg-zinc-50 border border-zinc-200/80 rounded-xs flex items-center gap-2.5 text-xs text-zinc-800 font-sans">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="font-medium text-[11px] tracking-wide">{project.impactMetric}</span>
            </div>
          )}
        </div>

        {/* External Link Action Button */}
        {project.externalLink && (
          <div className="pt-4 border-t border-zinc-100">
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 hover:text-zinc-600 transition-colors"
            >
              <span>View Official Commission Registry</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
