import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CVSection } from "@/components/cv/CVSection";
import { SanityFullCVData } from "@/sanity/lib/queries";

interface CVLayoutProps {
  cvData: SanityFullCVData;
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

            {/* Direct PDF Download Anchor Link (Rendered only if pdfUrl exists) */}
            {cvData?.pdfUrl && (
              <a
                href={cvData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-block text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#4A2E35] border border-[#4A2E35]/30 px-3.5 py-1.5 rounded hover:bg-[#4A2E35] hover:text-white transition-colors"
              >
                Download CV (PDF) ↓
              </a>
            )}
          </div>

          <p className="text-sm text-[#8A7976] font-sans">
            Amritha Jalaja Devi — Contemporary Visual Artist (UK & India)
          </p>
        </div>
      </FadeIn>

      {/* CV Sections Stack */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-8">
          {cvData?.education && cvData.education.length > 0 && (
            <CVSection index="01" title="Education & Academic Qualifications" items={cvData.education} />
          )}
          {cvData?.appointments && cvData.appointments.length > 0 && (
            <CVSection index="02" title="Academic Appointments & Professional Affiliations" items={cvData.appointments} />
          )}
          {cvData?.exhibitions && cvData.exhibitions.length > 0 && (
            <CVSection index="03" title="Selected Solo & Museum Exhibitions" items={cvData.exhibitions} />
          )}
          {cvData?.commissions && cvData.commissions.length > 0 && (
            <CVSection index="04" title="Major UK Public Art & Civic Commissions" items={cvData.commissions} />
          )}
          {cvData?.awards && cvData.awards.length > 0 && (
            <CVSection index="05" title="Awards, Fellowships & Honors" items={cvData.awards} />
          )}
          {cvData?.collections && cvData.collections.length > 0 && (
            <CVSection index="06" title="Public & Museum Collections" items={cvData.collections} />
          )}
        </div>
      </FadeInStagger>
      
    </article>
  );
}
