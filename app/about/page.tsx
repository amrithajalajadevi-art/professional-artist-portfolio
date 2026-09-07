import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY, SanityAboutPage } from "@/sanity/lib/queries";
import { BiographySection } from "@/components/about/BiographySection";
import { ArtistStatement } from "@/components/about/ArtistStatement";
import { EducationSection } from "@/components/about/EducationSection";

export const metadata: Metadata = {
  title: "About & Artist Profile",
  description:
    "Biography, core artistic vision, BFA and MA education, British Council selection, and public murals of UK visual artist Amritha Jalaja Devi.",
};

export default async function AboutPage() {
  const sanityAboutData: SanityAboutPage | null = await client.fetch(
    ABOUT_PAGE_QUERY
  );

  // Render strictly using live Sanity data
  const biographyData = {
    heading: sanityAboutData?.biography?.heading || "",
    portraitImage: sanityAboutData?.biography?.portraitImage || sanityAboutData?.biography?.portraitUrl || "",
    portraitAlt: sanityAboutData?.biography?.portraitAlt || "",
    portraitCaption: sanityAboutData?.biography?.portraitCaption || "",
    aspectRatio: sanityAboutData?.biography?.aspectRatio || undefined,
    paragraphs: sanityAboutData?.biography?.paragraphs || [],
    quickFacts: sanityAboutData?.biography?.quickFacts || [],
  };

  const statementData = {
    quote: sanityAboutData?.statement?.quote || "",
    author: sanityAboutData?.statement?.author || "",
    context: sanityAboutData?.statement?.context || "",
    keyThemes: sanityAboutData?.statement?.keyThemes || [],
  };

  const educationList = sanityAboutData?.education || [];
  const affiliationsList = sanityAboutData?.affiliations || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4F0] text-[#4A2E35]">
      <BiographySection data={biographyData} />
      <ArtistStatement data={statementData} />
      <EducationSection
        education={educationList}
        affiliations={affiliationsList}
      />
    </div>
  );
}
