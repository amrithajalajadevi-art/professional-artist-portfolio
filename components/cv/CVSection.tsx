import React from "react";
import { CVEntry } from "@/types";

interface CVSectionProps {
  title: string;
  items: CVEntry[];
  index: string;
}

export function CVSection({ title, items }: CVSectionProps) {
  return (
    <section className="space-y-4 pt-6 border-b border-zinc-100 last:border-b-0 pb-6">
      <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-black tracking-tight">
        {title}
      </h2>

      <div className="space-y-4 font-sans text-xs sm:text-sm">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-1"
          >
            <div className="w-full sm:w-28 flex-shrink-0 font-sans text-xs text-gray-500">
              {item.year}
            </div>

            <div className="flex-1 space-y-0.5">
              <h3 className="font-serif text-base text-black font-normal">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-xs text-gray-500 font-sans">
                  {item.subtitle}
                </p>
              )}

              {item.details && (
                <p className="text-xs text-gray-500 font-sans">
                  {item.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
