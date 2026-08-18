import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { EducationItem, AffiliationItem } from "@/types";

interface EducationSectionProps {
  education: EducationItem[];
  affiliations: AffiliationItem[];
}

export function EducationSection({ education, affiliations }: EducationSectionProps) {
  return (
    <section className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      <h2 className="font-serif text-2xl sm:text-4xl font-normal uppercase text-[#4A2E35] tracking-tight">
        ACADEMIC QUALIFICATIONS & AFFILIATIONS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <h3 className="font-serif text-xl font-normal uppercase text-[#4A2E35]">
              Education
            </h3>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {education.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-[#E8E2DA] last:border-b-0">
                  <span className="text-[#8A7976] font-sans text-xs block">{item.year}</span>
                  <h4 className="font-serif text-base font-normal text-[#4A2E35]">
                    {item.degree}
                  </h4>
                  <p className="text-[#8A7976]">
                    {item.institution} — {item.location}
                  </p>
                  {item.honors && (
                    <p className="text-[#4A2E35] font-medium text-xs pt-0.5">
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
            <h3 className="font-serif text-xl font-normal uppercase text-[#4A2E35]">
              Professional Appointments
            </h3>
          </FadeIn>

          <FadeInStagger staggerDelay={0.15}>
            <div className="space-y-4 font-sans text-xs sm:text-sm">
              {affiliations.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-[#E8E2DA] last:border-b-0">
                  <span className="text-[#8A7976] font-sans text-xs block">{item.years}</span>
                  <h4 className="font-serif text-base font-normal text-[#4A2E35]">
                    {item.role}
                  </h4>
                  <p className="text-[#8A7976]">
                    {item.organization}
                  </p>
                  {item.details && (
                    <p className="text-xs text-[#8A7976] pt-0.5">
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
