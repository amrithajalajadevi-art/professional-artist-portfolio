import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  linkHref?: string;
  linkText?: string;
  className?: string;
}

export function SectionHeading({
  title,
  linkHref,
  linkText,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 ${className}`}>
      <FadeIn direction="up">
        <h2 className="font-serif text-2xl sm:text-4xl font-normal uppercase text-[#4A2E35] tracking-tight">
          {title}
        </h2>
      </FadeIn>

      {linkHref && linkText && (
        <FadeIn direction="up" delay={0.1}>
          <Link
            href={linkHref}
            className="text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
          >
            {linkText} →
          </Link>
        </FadeIn>
      )}
    </div>
  );
}
