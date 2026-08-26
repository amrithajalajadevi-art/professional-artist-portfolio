import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EXHIBITIONS_QUERY, SanityExhibition } from "@/sanity/lib/queries";
import { ExhibitionsList } from "@/components/exhibitions/ExhibitionsList";

export const metadata: Metadata = {
  title: "Exhibitions & Major Projects | Amritha Jalaja Devi",
  description:
    "Chronological listing of museum exhibitions, UK public commissions, and international pavilion showcases of visual artist Amritha Jalaja Devi.",
};

export default async function ExhibitionsPage() {
  let exhibitions: SanityExhibition[] = [];
  try {
    exhibitions = (await client.fetch(EXHIBITIONS_QUERY)) || [];
  } catch (error) {
    console.error("Error fetching exhibitions from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <ExhibitionsList exhibitions={exhibitions} />
    </div>
  );
}
