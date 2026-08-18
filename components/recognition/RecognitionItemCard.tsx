import React from "react";
import { RecognitionItem } from "@/types";

interface RecognitionItemCardProps {
  item: RecognitionItem;
}

export function RecognitionItemCard({ item }: RecognitionItemCardProps) {
  return (
    <div className="bg-white py-4 border-b border-zinc-100 last:border-b-0 space-y-1 font-sans text-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <p className="text-zinc-950 leading-relaxed font-normal">
          <span className="font-semibold">{item.year}</span> —{" "}
          <span className="font-serif text-lg text-zinc-950 font-normal">{item.awardTitle}</span> (
          <span className="font-medium">{item.awardingBody}</span>)
        </p>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6A0F36]">
          [{item.status}]
        </span>
      </div>

      {item.description && (
        <p className="text-xs text-zinc-600 leading-relaxed">
          {item.description}
        </p>
      )}

      {item.link && (
        <div className="pt-1">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-medium text-[#6A0F36] hover:underline underline-offset-4"
          >
            Official Announcement ↗
          </a>
        </div>
      )}
    </div>
  );
}
