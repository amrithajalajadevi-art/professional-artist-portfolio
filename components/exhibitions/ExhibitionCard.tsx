import React from "react";
import Link from "next/link";
import { CustomImage } from "@/components/ui/CustomImage";
import { ExhibitionProject } from "@/types";

interface ExhibitionCardProps {
  exhibition: ExhibitionProject;
}

export function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <div className="bg-white space-y-4 py-4 border-b border-zinc-100 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Cover Image Container */}
        <div className="md:col-span-4 relative w-full aspect-[4/3] overflow-hidden bg-white">
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
          <p className="text-black leading-relaxed font-normal">
            <span className="font-semibold text-black">{exhibition.date}</span> — &quot;
            <Link
              href={`/exhibitions/${exhibition.slug}`}
              className="font-semibold text-black hover:text-zinc-600 transition-colors"
            >
              {exhibition.title}
            </Link>
            ,&quot; {exhibition.venue} ({exhibition.city}, {exhibition.country})
          </p>

          <p className="text-xs text-gray-500 italic">
            Role: {exhibition.role}
          </p>

          <p className="text-xs text-gray-500 leading-relaxed pt-1">
            {exhibition.description}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs">
            <Link
              href={`/exhibitions/${exhibition.slug}`}
              className="text-black hover:underline underline-offset-4 font-medium"
            >
              View Exhibition Details →
            </Link>

            {exhibition.externalLink && (
              <a
                href={exhibition.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black"
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
