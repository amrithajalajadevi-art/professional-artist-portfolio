import React from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationItem, AffiliationItem } from "@/types";

interface EducationSectionProps {
  education: EducationItem[];
  affiliations: AffiliationItem[];
}

export function EducationSection({ education, affiliations }: EducationSectionProps) {
  return (
    <section className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      <SectionHeading
        eyebrow="03 / Education & Practice"
        title="Academic Qualifications & Affiliations"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <GraduationCap className="w-5 h-5 text-zinc-900" />
              <h3 className="font-serif text-xl font-normal text-zinc-950">
                Academic Background & Degrees
              </h3>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="relative pl-6 space-y-8 border-l border-zinc-200/80">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-400 group-hover:bg-zinc-950 group-hover:scale-125 transition-all" />

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-zinc-400 block font-medium">
                      {item.year}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-zinc-600 font-medium">
                      {item.institution} — <span className="text-zinc-500 font-light">{item.location}</span>
                    </p>
                    {item.honors && (
                      <div className="pt-1 flex items-center gap-1.5 text-[11px] text-amber-700 font-sans font-medium">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.honors}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* Professional Affiliations & Fellowships */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-3">
              <Briefcase className="w-5 h-5 text-zinc-900" />
              <h3 className="font-serif text-xl font-normal text-zinc-950">
                Professional Affiliations & Fellowships
              </h3>
            </div>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-4">
              {affiliations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gallery-bg border border-zinc-200/80 p-5 space-y-2 hover:border-zinc-400 transition-all shadow-2xs"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                      {item.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{item.years}</span>
                  </div>

                  <h4 className="font-serif text-base text-zinc-900 font-normal">
                    {item.organization}
                  </h4>

                  {item.details && (
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
