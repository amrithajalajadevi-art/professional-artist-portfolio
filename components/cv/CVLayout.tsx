import React from "react";
import { Download, FileText, Mail, MapPin } from "lucide-react";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { CVSection } from "@/components/cv/CVSection";
import { FullCVData } from "@/types";

interface CVLayoutProps {
  cvData: FullCVData;
}

export function CVLayout({ cvData }: CVLayoutProps) {
  return (
    <article className="p-6 sm:p-10 xl:p-16 border-b border-gallery-border bg-white space-y-12">
      {/* Header & Download PDF Button Bar */}
      <FadeIn direction="up">
        <div className="space-y-6 border-b border-zinc-200 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold font-sans">
                Curriculum Vitae / Academic & Artist Record
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-normal leading-tight">
                Amritha Jalaja Devi
              </h1>
              <p className="text-sm text-zinc-600 font-light font-serif italic">
                Contemporary Visual Artist & Sculptor — London, UK
              </p>
            </div>

            {/* Prominent Download CV PDF Button */}
            <div className="flex-shrink-0">
              <a
                href="/cv-placeholder.pdf"
                download="Amritha_Jalaja_Devi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-zinc-950 text-white hover:bg-zinc-800 transition-colors shadow-sm rounded-xs border border-zinc-900 group"
              >
                <Download className="w-4 h-4 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Meta Details */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-sans pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              Based in London, United Kingdom
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              contact@amrithajalajadevi.art
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              UK Global Talent Visa Portfolio
            </span>
          </div>
        </div>
      </FadeIn>

      {/* CV Sections Stack */}
      <FadeInStagger staggerDelay={0.1}>
        <div className="space-y-12">
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
