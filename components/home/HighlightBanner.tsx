import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { HighlightBannerContent } from "@/types";

interface HighlightBannerProps {
  data: HighlightBannerContent;
}

export function HighlightBanner({ data }: HighlightBannerProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-gallery-bg">
      <FadeIn direction="up">
        <div className="relative bg-zinc-950 text-white p-8 sm:p-12 xl:p-14 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block">
                    {data.eyebrow}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {data.title}
                  </h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {data.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {data.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={data.cta.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors group"
                  >
                    <span>{data.cta.label}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Key Metrics / Badges */}
              <div className="md:col-span-4 grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8">
                {data.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className={`font-serif text-2xl sm:text-3xl font-semibold ${metric.highlight ? 'text-amber-400' : 'text-white'}`}>
                      {metric.value}
                    </span>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-sans">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
