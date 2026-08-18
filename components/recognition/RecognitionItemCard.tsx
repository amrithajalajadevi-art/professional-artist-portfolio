import React from "react";
import { ExternalLink, Award, MapPin } from "lucide-react";
import { RecognitionItem, RecognitionStatus } from "@/types";

interface RecognitionItemCardProps {
  item: RecognitionItem;
}

export function RecognitionItemCard({ item }: RecognitionItemCardProps) {
  const getStatusBadgeStyle = (status: RecognitionStatus) => {
    switch (status) {
      case "Won":
        return "bg-emerald-950 text-emerald-300 border-emerald-800";
      case "Offered":
        return "bg-indigo-950 text-indigo-300 border-indigo-800";
      case "Selected":
        return "bg-amber-950 text-amber-300 border-amber-800";
      case "Nominated":
        return "bg-sky-950 text-sky-300 border-sky-800";
      case "Shortlisted":
        return "bg-zinc-900 text-zinc-300 border-zinc-700";
      default:
        return "bg-zinc-900 text-zinc-300 border-zinc-700";
    }
  };

  return (
    <div className="group bg-white border border-zinc-200/80 hover:border-zinc-400 transition-all duration-300 p-6 sm:p-8 shadow-2xs hover:shadow-md space-y-4">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Left / Header: Year & Status Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-semibold text-zinc-900 bg-zinc-100 px-2.5 py-1 border border-zinc-200">
            {item.year}
          </span>

          <span
            className={`px-3 py-1 text-[10px] uppercase tracking-widest font-semibold border ${getStatusBadgeStyle(
              item.status
            )}`}
          >
            {item.status}
          </span>

          {item.category && (
            <span className="text-[11px] text-zinc-400 font-sans tracking-wide">
              • {item.category}
            </span>
          )}
        </div>

        {/* Optional External Link Action */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 transition-colors self-start md:self-auto"
          >
            <span>Official Award Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Main Details: Award Title & Awarding Body */}
      <div className="space-y-2 pt-1 border-t border-zinc-100">
        <div className="flex items-start gap-2">
          <Award className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-normal leading-snug">
              {item.awardTitle}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-zinc-800 font-sans">
              Awarding Institution: <span className="text-zinc-950 font-bold">{item.awardingBody}</span>
            </p>
          </div>
        </div>

        {item.description && (
          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pl-7">
            {item.description}
          </p>
        )}

        {item.location && (
          <div className="pl-7 flex items-center gap-1.5 text-[11px] text-zinc-400 font-sans pt-1">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>{item.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
