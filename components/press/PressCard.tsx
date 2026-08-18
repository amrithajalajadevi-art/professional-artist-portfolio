import React from "react";
import { CustomImage } from "@/components/ui/CustomImage";
import { PressArticle } from "@/types";

interface PressCardProps {
  article: PressArticle;
}

export function PressCard({ article }: PressCardProps) {
  if (!article) return null;

  return (
    <a
      href={article.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block space-y-3 bg-white text-center font-sans text-xs"
    >
      {/* Thumbnail/Cover Image View - Aspect Square with bg-gray-50 */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        {article.coverImage ? (
          <CustomImage
            src={article.coverImage}
            alt={`${article.publicationName || "Publication"} - ${article.articleTitle || "Press Feature"}`}
            fill
            hoverScale
            aspectRatio="auto"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center text-xs text-gray-400 font-sans p-4">
            {article.publicationName || "Press Article"}
          </div>
        )}
      </div>

      {/* Text Info underneath image */}
      <div className="space-y-1 px-1">
        <p className="text-black leading-snug">
          &quot;{article.articleTitle},&quot;
        </p>

        <p className="text-black font-bold">
          {article.publicationName}, <span className="font-normal text-gray-500">{article.date}</span>
        </p>
      </div>
    </a>
  );
}
