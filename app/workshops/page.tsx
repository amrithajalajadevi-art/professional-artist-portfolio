import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { WORKSHOP_PAGE_QUERY, WorkshopPageData } from "@/sanity/lib/queries";
import { WorkshopsView } from "@/components/services/WorkshopsView";

export const metadata: Metadata = {
  title: "Art Classes, Workshops & Mentoring | Amritha Jalaja Devi",
  description:
    "1-on-1 portfolio mentoring, foundry bronze casting masterclasses, and glaze chemistry workshops by Slade School & RCA alumna Amritha Jalaja Devi.",
};

export default async function WorkshopsPage() {
  let data: WorkshopPageData | null = null;
  try {
    data = await client.fetch(WORKSHOP_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching workshop page data from Sanity:", error);
  }

  return <WorkshopsView data={data} />;
}

