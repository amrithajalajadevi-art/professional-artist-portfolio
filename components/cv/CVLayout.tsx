import React from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CVSection } from "@/components/cv/CVSection";
import { FullCVData } from "@/types";
import { SanityFullCVData } from "@/sanity/lib/queries";

interface CVLayoutProps {
  cvData: FullCVData | SanityFullCVData;
}

export function CVLayout({ cvData }: CVLayoutProps) {
  const pdfUrl = cvData?.pdfUrl || "/cv-placeholder.pdf";

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
              href={pdfUrl}
              download="Amritha_Jalaja_Devi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#4A2E35] hover:underline underline-offset-4 transition-colors"
            >
              Download PDF CV →
            </a>
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
