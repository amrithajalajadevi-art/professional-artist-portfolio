import React from "react";
import { RecognitionItem } from "@/types";

interface RecognitionItemCardProps {
  item: RecognitionItem;
}

export function RecognitionItemCard({ item }: RecognitionItemCardProps) {
  return (
    <div className="bg-white py-4 border-b border-zinc-100 last:border-b-0 space-y-1 font-sans text-sm">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <p className="text-black leading-relaxed font-normal">
          <span className="font-semibold text-black">{item.year}</span> —{" "}
          <span className="font-serif text-lg text-black font-normal">{item.awardTitle}</span> (
          <span className="font-medium text-black">{item.awardingBody}</span>)
        </p>
        <span className="text-xs font-semibold uppercase tracking-wider text-black">
          [{item.status}]
        </span>
      </div>

      {item.description && (
        <p className="text-xs text-gray-500 leading-relaxed">
          {item.description}
        </p>
      )}

      {item.link && (
        <div className="pt-1">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-medium text-black hover:underline underline-offset-4"
          >
            Official Announcement ↗
          </a>
        </div>
      )}
    </div>
  );
}
