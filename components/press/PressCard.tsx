import React from "react";
import Link from "next/link";
import { CustomImage } from "@/components/ui/CustomImage";
import { PressArticle } from "@/types";
import { SanityPressArticle } from "@/sanity/lib/queries";

interface PressCardProps {
  article: PressArticle | SanityPressArticle;
}

export function PressCard({ article }: PressCardProps) {
  if (!article) return null;

  const articleTitle =
    (article as SanityPressArticle).title ||
    (article as PressArticle).articleTitle ||
    "";
  const publicationName =
    (article as SanityPressArticle).publicationName ||
    (article as SanityPressArticle).publication ||
    (article as PressArticle).publicationName ||
    "";
  const externalUrl =
    (article as SanityPressArticle).externalLink ||
    (article as SanityPressArticle).url ||
    (article as PressArticle).externalLink ||
    "#";
  const imageSource =
    (article as SanityPressArticle).image ||
    (article as SanityPressArticle).coverImage ||
    (article as PressArticle).coverImage;
  const aspectRatio = (article as SanityPressArticle).image?.aspectRatio;

  const isInternal = externalUrl && externalUrl.startsWith("/");

  const cardContent = (
    <>
      {/* Thumbnail/Cover Image View - Uniform Fixed Aspect Ratio */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#EFEAE4]">
        {imageSource ? (
          <CustomImage
            src={imageSource}
            alt={`${publicationName || "Publication"} - ${articleTitle || "Press Feature"}`}
            fill
            hoverScale
            aspectRatio="auto"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-[#EFEAE4] flex items-center justify-center text-xs text-[#8A7976] font-sans p-4">
            {publicationName || "Press Article"}
          </div>
        )}
      </div>

      {/* Text Info underneath image */}
      <div className="space-y-1 px-1">
        <p className="text-[#4A2E35] leading-snug">
          &quot;{articleTitle},&quot;
        </p>

        <p className="text-[#4A2E35] font-bold">
          {publicationName}, <span className="font-normal text-[#8A7976]">{article.date}</span>
        </p>

        {article.excerpt && (
          <p className="text-xs text-[#8A7976] font-light leading-relaxed pt-1 line-clamp-3">
            {article.excerpt}
          </p>
        )}
      </div>
    </>
  );

  if (isInternal) {
    return (
      <Link
        href={externalUrl}
        className="group block space-y-3 bg-[#F7F4F0] text-center font-sans text-xs"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block space-y-3 bg-[#F7F4F0] text-center font-sans text-xs"
    >
      {cardContent}
    </a>
  );
}
