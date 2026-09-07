import React from "react";
import Link from "next/link";
import { CustomImage } from "@/components/ui/CustomImage";
import { ExhibitionProject } from "@/types";

interface ExhibitionCardProps {
  exhibition: ExhibitionProject;
}

export function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div className="bg-[#F7F4F0] space-y-4 py-4 border-b border-[#E8E2DA] last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Cover Image Container */}
        <div className="md:col-span-4 relative w-full aspect-[4/3] overflow-hidden bg-[#F7F4F0]">
          <CustomImage
            src={exhibition.coverImage}
            alt={exhibition.title}
            fill
            hoverScale
            aspectRatio="auto"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Structured Details Container */}
        <div className="md:col-span-8 space-y-2 font-sans text-sm">
          <p className="text-[#4A2E35] leading-relaxed font-normal">
            <span className="font-semibold text-[#4A2E35]">{exhibition.date}</span> — &quot;
            <Link
              href={`/exhibitions/${exhibition.slug}`}
              className="font-semibold text-[#4A2E35] hover:text-[#8A7976] transition-colors"
            >
              {exhibition.title}
            </Link>
            ,&quot; {exhibition.venue} ({exhibition.city}, {exhibition.country})
          </p>

          {exhibition.subtitle && (
            <p className="text-xs text-[#8A7976] font-sans font-light italic tracking-wide">
              {exhibition.subtitle}
            </p>
          )}

          <p className="text-xs text-[#8A7976] italic">
            Role: {exhibition.role}
          </p>

          <p className="text-xs text-[#8A7976] leading-relaxed pt-1">
            {exhibition.description}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs">
            <Link
              href={`/exhibitions/${exhibition.slug}`}
              className="text-[#4A2E35] hover:underline underline-offset-4 font-medium uppercase tracking-[0.15em]"
            >
              View Exhibition Details →
            </Link>

            {exhibition.externalLink && (
              <a
                href={exhibition.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A7976] hover:text-[#4A2E35]"
              >
                Official Venue Page ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
