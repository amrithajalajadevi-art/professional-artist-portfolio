import React from "react";
import { CVEntry } from "@/types";

interface CVSectionProps {
  title: string;
  items: CVEntry[];
  index: string;
}

export function CVSection({ title, items, index }: CVSectionProps) {
  return (
    <section className="space-y-6 pt-8 border-t border-zinc-200/80">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
          {title}
        </h2>
        <span className="text-xs font-mono text-zinc-400">/{index}</span>
      </div>

      <div className="space-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-2 group"
          >
            {/* Year Column */}
            <div className="w-full sm:w-36 flex-shrink-0 font-mono text-xs font-semibold text-zinc-500 pt-0.5">
              {item.year}
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-1">
              <h3 className="font-serif text-base sm:text-lg text-zinc-950 font-normal group-hover:text-zinc-700 transition-colors">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 font-sans">
                  {item.subtitle}
                </p>
              )}

              {item.details && (
                <p className="text-xs text-zinc-600 font-light leading-relaxed pt-0.5">
                  {item.details}
                </p>
              )}

              {item.location && (
                <p className="text-[11px] text-zinc-400 font-mono pt-0.5">
                  {item.location}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
