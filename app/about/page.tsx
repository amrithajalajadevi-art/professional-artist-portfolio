import React from "react";
import type { Metadata } from "next";
import { aboutData } from "@/constants/aboutData";
import { BiographySection } from "@/components/about/BiographySection";
import { ArtistStatement } from "@/components/about/ArtistStatement";
import { EducationSection } from "@/components/about/EducationSection";

export const metadata: Metadata = {
  title: "About & Artist Profile",
  description:
    "Biography, core artistic vision, academic background, and professional affiliations of contemporary visual artist and sculptor Amritha Jalaja Devi.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <BiographySection data={aboutData.biography} />
      <ArtistStatement data={aboutData.statement} />
      <EducationSection
        education={aboutData.education}
        affiliations={aboutData.affiliations}
      />
    </div>
  );
}
