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
      className="group block space-y-3 bg-[#F7F4F0] text-center font-sans text-xs"
    >
      {/* Thumbnail/Cover Image View - Aspect Square with bg-[#EFEAE4] */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#EFEAE4]">
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
          <div className="w-full h-full bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans p-4">
            {article.publicationName || "Press Article"}
          </div>
        )}
      </div>

      {/* Text Info underneath image */}
      <div className="space-y-1 px-1">
        <p className="text-[#4A2E35] leading-snug">
          &quot;{article.articleTitle},&quot;
        </p>

        <p className="text-[#4A2E35] font-bold">
          {article.publicationName}, <span className="font-normal text-[#8A7976]">{article.date}</span>
        </p>
      </div>
    </a>
  );
}
