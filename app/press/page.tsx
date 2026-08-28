import React from "react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PRESS_QUERY, SanityPressArticle } from "@/sanity/lib/queries";
import { PressGrid } from "@/components/press/PressGrid";

export const metadata: Metadata = {
  title: "Press & Critical Media Features | Amritha Jalaja Devi",
  description:
    "Selected press coverage, critical reviews, and media features of visual artist Amritha Jalaja Devi in UK national broadsheets and international art publications.",
};

export default async function PressPage() {
  let articles: SanityPressArticle[] = [];
  try {
    articles = (await client.fetch(PRESS_QUERY)) || [];
  } catch (error) {
    console.error("Error fetching press articles from Sanity:", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <PressGrid articles={articles} />
    </div>
  );
}
