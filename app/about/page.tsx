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
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      {/* 1. Artist Biography & Studio Profile */}
      <BiographySection data={aboutData.biography} />

      {/* 2. Core Artist Statement & Vision */}
      <ArtistStatement data={aboutData.statement} />

      {/* 3. Education & Professional Affiliations Timeline */}
      <EducationSection
        education={aboutData.education}
        affiliations={aboutData.affiliations}
      />
    </div>
  );
}
