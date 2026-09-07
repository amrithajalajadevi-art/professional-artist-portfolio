"use client";

import React, { useState } from "react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CVSection } from "@/components/cv/CVSection";
import { SanityFullCVData } from "@/sanity/lib/queries";

interface CVLayoutProps {
  cvData: SanityFullCVData;
}

export function CVLayout({ cvData }: CVLayoutProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!cvData?.pdfUrl || downloading) return;

    setDownloading(true);
    try {
      // Append Sanity ?dl query param for Content-Disposition header
      const downloadUrl = cvData.pdfUrl.includes("?")
        ? `${cvData.pdfUrl}&dl=Amritha_Jalaja_Devi_CV.pdf`
        : `${cvData.pdfUrl}?dl=Amritha_Jalaja_Devi_CV.pdf`;

      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Amritha_Jalaja_Devi_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1000);
    } catch (error) {
      console.error("Direct PDF download failed, falling back to window open:", error);
      window.open(cvData.pdfUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <article className="p-8 sm:p-12 xl:p-16 bg-[#F7F4F0] space-y-10">
      {/* Header & Download PDF Button Bar */}
      <FadeIn direction="up">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal uppercase text-[#4A2E35] tracking-tight">
              CURRICULUM VITAE
            </h1>

            {/* Direct Binary PDF Download Button */}
            {cvData?.pdfUrl && (
              <a
                href={cvData.pdfUrl}
                onClick={handleDownload}
                className="inline-block text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#4A2E35] border border-[#4A2E35]/30 px-3.5 py-1.5 rounded hover:bg-[#4A2E35] hover:text-white transition-colors cursor-pointer"
              >
                {downloading ? "Downloading CV..." : "Download CV (PDF) ↓"}
              </a>
            )}
          </div>

          <p className="text-sm text-[#5C4B48] font-sans">
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
