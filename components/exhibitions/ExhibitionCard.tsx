import React from "react";
import Link from "next/link";
import { ExternalLink, Calendar, MapPin, Award, ChevronRight } from "lucide-react";
import { CustomImage } from "@/components/ui/CustomImage";
import { ExhibitionProject } from "@/types";

interface ExhibitionCardProps {
  exhibition: ExhibitionProject;
}

export function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div className="group bg-white border border-zinc-200/80 hover:border-zinc-400 transition-all duration-300 shadow-2xs hover:shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Cover Image Container with Responsive Aspect Ratio */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:w-5/12 md:aspect-auto min-h-[220px] sm:min-h-[260px] overflow-hidden bg-zinc-100 flex-shrink-0">
        <CustomImage
          src={exhibition.coverImage}
          alt={exhibition.title}
          fill
          hoverScale
          aspectRatio="auto"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />

        {/* Status Badge Tag */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span
            className={`px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold border ${
              exhibition.status === "Ongoing"
                ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                : exhibition.status === "Upcoming"
                ? "bg-amber-950 text-amber-300 border-amber-800"
                : "bg-zinc-950/80 backdrop-blur-xs text-white border-white/20"
            }`}
          >
            {exhibition.status}
          </span>
        </div>
      </div>

      {/* Structured Details Container */}
      <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Metadata Badges (Role, Date, Location) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-500 font-sans border-b border-zinc-100 pb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-zinc-100 text-zinc-900 border border-zinc-200">
              <Award className="w-3 h-3 text-amber-700" />
              Role: {exhibition.role}
            </span>

            <span className="flex items-center gap-1.5 text-zinc-600 font-mono text-[11px]">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              {exhibition.date}
            </span>
          </div>

          {/* Exhibition Title & Venue */}
          <div className="space-y-1.5">
            <Link
              href={`/exhibitions/${exhibition.slug}`}
              className="block group-hover:text-zinc-600 transition-colors"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-normal leading-snug">
                {exhibition.title}
              </h3>
            </Link>

            <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              <span>
                {exhibition.venue} — <span className="font-semibold text-zinc-900">{exhibition.city}, {exhibition.country}</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed line-clamp-3">
            {exhibition.description}
          </p>

          {/* Highlights List (Visa Criteria Evidence) */}
          {exhibition.highlights && (
            <ul className="space-y-1 pt-1">
              {exhibition.highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="text-[11px] text-zinc-500 flex items-center gap-2 font-sans">
                  <span className="w-1 h-1 rounded-full bg-amber-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Links (Detail Page Link & Official External Link) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-100 text-xs font-semibold uppercase tracking-wider">
          <Link
            href={`/exhibitions/${exhibition.slug}`}
            className="inline-flex items-center gap-1.5 text-zinc-900 hover:text-zinc-600 transition-colors group/link"
          >
            <span>View Full Exhibition Details</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>

          {exhibition.externalLink && (
            <a
              href={exhibition.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-950 transition-colors text-[11px]"
            >
              <span>Official Venue Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
