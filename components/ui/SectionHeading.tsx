import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  linkHref,
  linkText,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6 ${className}`}>
      <FadeIn direction="up">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans mb-1">
            {eyebrow}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl text-zinc-950 font-normal">
            {title}
          </h2>
        </div>
      </FadeIn>

      {linkHref && linkText && (
        <FadeIn direction="up" delay={0.1}>
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <span>{linkText}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      )}
    </div>
  );
}
