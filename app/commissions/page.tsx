import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { COMMISSION_PAGE_QUERY, CommissionPageData } from "@/sanity/lib/queries";
import { CommissionsView } from "@/components/services/CommissionsView";

export const metadata: Metadata = {
  title: "Public & Architectural Commissions | Amritha Jalaja Devi",
  description:
    "Commission custom public murals, architectural heritage artworks, and figurative canvases with visual artist Amritha Jalaja Devi.",
};

export default async function CommissionsPage() {
  let data: CommissionPageData | null = null;
  try {
    data = await client.fetch(COMMISSION_PAGE_QUERY);
  } catch (error) {
    console.error("Error fetching commission page data from Sanity:", error);
  }

  return <CommissionsView data={data} />;
}

