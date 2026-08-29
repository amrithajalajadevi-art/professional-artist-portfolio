import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { CV_PAGE_QUERY, SanityFullCVData } from "@/sanity/lib/queries";
import { cvData } from "@/constants/cvData";
import { CVLayout } from "@/components/cv/CVLayout";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) & Academic Record | Amritha Jalaja Devi",
  description:
    "Official Curriculum Vitae of visual artist Amritha Jalaja Devi detailing education at Royal College of Art, public commissions, museum collections, and international awards.",
};

export default async function CVPage() {
  let fetchedCVData: SanityFullCVData | null = null;
  try {
    fetchedCVData = await client.fetch(CV_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching CV data from Sanity:", error);
  }

  // Use live Sanity CV dataset if available; fallback to static mock data
  const data = fetchedCVData || (cvData as any);

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <CVLayout cvData={data} />
    </div>
  );
}
