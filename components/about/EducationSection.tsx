import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { EducationItem, AffiliationItem } from "@/types";

interface EducationSectionProps {
  education: EducationItem[];
  affiliations: AffiliationItem[];
}

export function EducationSection({ education, affiliations }: EducationSectionProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-white space-y-10">
      <h2 className="font-serif text-2xl sm:text-4xl font-bold uppercase text-[#6A0F36] tracking-tight">
        ACADEMIC QUALIFICATIONS & AFFILIATIONS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <h3 className="font-serif text-xl font-bold uppercase text-[#6A0F36]">
              Education
            </h3>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {education.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-zinc-100 last:border-b-0">
                  <span className="text-zinc-400 font-mono text-xs block">{item.year}</span>
                  <h4 className="font-serif text-base font-normal text-zinc-950">
                    {item.degree}
                  </h4>
                  <p className="text-zinc-600">
                    {item.institution} — {item.location}
                  </p>
                  {item.honors && (
                    <p className="text-[#6A0F36] font-medium text-xs pt-0.5">
                      {item.honors}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInStagger>
        </div>

        {/* Professional Affiliations */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <h3 className="font-serif text-xl font-bold uppercase text-[#6A0F36]">
              Professional Appointments
            </h3>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {affiliations.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-zinc-100 last:border-b-0">
                  <span className="text-zinc-400 font-mono text-xs block">{item.years}</span>
                  <h4 className="font-serif text-base font-normal text-zinc-950">
                    {item.role}
                  </h4>
                  <p className="text-zinc-600">
                    {item.organization}
                  </p>
                  {item.details && (
                    <p className="text-xs text-zinc-500 pt-0.5">
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
