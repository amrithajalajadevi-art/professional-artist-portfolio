import React from "react";
import { SanityRecognitionItem } from "@/sanity/lib/queries";

interface RecognitionItemCardProps {
  item: SanityRecognitionItem;
}

export function RecognitionItemCard({ item }: RecognitionItemCardProps) {
  if (!item) return null;

  const title = item.title || item.awardTitle || "";
  const organization = item.organization || item.awardingBody || "";

  return (
    <div className="bg-[#F7F4F0] py-4 border-b border-[#E8E2DA] last:border-b-0 space-y-1 font-sans text-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <p className="text-[#4A2E35] leading-relaxed font-normal">
          <span className="font-semibold text-[#4A2E35]">{item.year}</span> —{" "}
          <span className="font-serif text-lg text-[#4A2E35] font-normal">{title}</span>{" "}
          {organization && <span className="font-medium text-[#4A2E35]">({organization})</span>}
        </p>

        {item.status && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A2E35]">
            [{item.status}]
          </span>
        )}
      </div>

      {item.description && (
        <p className="text-xs text-[#8A7976] leading-relaxed whitespace-pre-wrap">
          {item.description}
        </p>
      )}

      {item.link && (
        <div className="pt-1">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
          >
          View Resource ↗
          </a>
        </div>
      )}
    </div>
  );
}
