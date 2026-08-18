import React from "react";
import type { Metadata } from "next";
import { pressData } from "@/constants/pressData";
import { PressGrid } from "@/components/press/PressGrid";

export const metadata: Metadata = {
  title: "Press & Critical Media Features",
  description:
    "Selected press coverage, critical reviews, and media features of visual artist Amritha Jalaja Devi in UK national broadsheets and international art publications.",
};

export default function PressPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <PressGrid articles={pressData} />
    </div>
  );
}
