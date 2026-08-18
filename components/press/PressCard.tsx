import React from "react";
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
      className="group block space-y-3 bg-white text-center font-sans text-xs"
    >
      {/* Thumbnail/Cover Image View - Aspect Square */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        <CustomImage
          src={article.coverImage}
          alt={`${article.publicationName} - ${article.articleTitle}`}
          fill
          hoverScale
          aspectRatio="auto"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Text Info underneath image */}
      <div className="space-y-1 px-1">
        <p className="text-zinc-700 leading-snug">
          &quot;{article.articleTitle},&quot;
        </p>

        <p className="text-zinc-950 font-bold">
          {article.publicationName}, <span className="font-normal text-zinc-500">{article.date}</span>
        </p>
      </div>
    </a>
  );
}
