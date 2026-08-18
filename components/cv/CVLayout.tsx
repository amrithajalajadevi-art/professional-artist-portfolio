import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CVSection } from "@/components/cv/CVSection";
import { FullCVData } from "@/types";

interface CVLayoutProps {
  cvData: FullCVData;
}

export function CVLayout({ cvData }: CVLayoutProps) {
  return (
    <article className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      {/* Header & Download PDF Button Bar */}
      <FadeIn direction="up">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
              CURRICULUM VITAE
            </h1>

            <a
              href="/cv-placeholder.pdf"
              download="Amritha_Jalaja_Devi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#4A2E35] hover:underline underline-offset-4"
            >
              Download PDF CV →
            </a>
          </div>

          <p className="text-sm text-[#8A7976] font-sans">
            Amritha Jalaja Devi — Contemporary Visual Artist & Sculptor (London, UK)
          </p>
        </div>
      </FadeIn>

      {/* CV Sections Stack */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-8">
          <CVSection index="01" title="Education & Academic Qualifications" items={cvData.education} />
          <CVSection index="02" title="Academic Appointments & Professional Affiliations" items={cvData.appointments} />
          <CVSection index="03" title="Selected Solo & Museum Exhibitions" items={cvData.exhibitions} />
          <CVSection index="04" title="Major UK Public Art & Civic Commissions" items={cvData.commissions} />
          <CVSection index="05" title="Awards, Fellowships & Honors" items={cvData.awards} />
          <CVSection index="06" title="Public & Museum Collections" items={cvData.collections} />
        </div>
      </FadeInStagger>
    </article>
  );
}
