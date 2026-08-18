import React from "react";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import { CustomImage } from "@/components/ui/CustomImage";
import { PressArticle } from "@/types";

interface PressCardProps {
  article: PressArticle;
}

export function PressCard({ article }: PressCardProps) {
  return (
    <a
      href={article.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-zinc-200/80 hover:border-zinc-400 transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* Thumbnail/Cover Image View */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
          <CustomImage
            src={article.coverImage}
            alt={`${article.publicationName} - ${article.articleTitle}`}
            fill
            hoverScale
            aspectRatio="auto"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Category Tag Badge */}
          {article.category && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold bg-zinc-950/85 backdrop-blur-xs text-white border border-white/20">
                {article.category}
              </span>
            </div>
          )}

          {/* External Icon Overlay */}
          <div className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 backdrop-blur-xs text-zinc-950 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card Content Footer */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Article Title in Quotes */}
          <h3 className="font-serif text-lg sm:text-xl text-zinc-950 font-normal leading-snug group-hover:text-zinc-700 transition-colors">
            “{article.articleTitle}”
          </h3>

          {/* Excerpt if provided */}
          {article.excerpt && (
            <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
          )}

          {/* GTV Critical Evidence: Bold Publication Name & Date */}
          <div className="pt-3 border-t border-zinc-100 space-y-1 text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-zinc-950 tracking-wide font-sans truncate">
                {article.publicationName}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 flex-shrink-0 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-zinc-400" />
                {article.date}
              </span>
            </div>

            {article.author && (
              <p className="text-[11px] text-zinc-400 font-sans italic">
                By {article.author}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Action Prompt Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-0 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-950 transition-colors">
        <span className="text-[11px]">Read Publication Feature</span>
        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </a>
  );
}
