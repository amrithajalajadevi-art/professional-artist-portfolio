import React from "react";
import type { Metadata } from "next";
import { exhibitionsData } from "@/constants/exhibitionsData";
import { ExhibitionsList } from "@/components/exhibitions/ExhibitionsList";

export const metadata: Metadata = {
  title: "Exhibitions & Major Projects",
  description:
    "Chronological listing of museum exhibitions, UK public commissions, and international pavilion showcases of visual artist Amritha Jalaja Devi.",
};

export default function ExhibitionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <ExhibitionsList exhibitions={exhibitionsData} />
    </div>
  );
}
