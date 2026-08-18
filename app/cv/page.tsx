import React from "react";
import type { Metadata } from "next";
import { cvData } from "@/constants/cvData";
import { CVLayout } from "@/components/cv/CVLayout";

export const metadata: Metadata = {
  title: "Curriculum Vitae (CV) & Academic Record",
  description:
    "Official Curriculum Vitae of visual artist Amritha Jalaja Devi detailing education at Royal College of Art, public commissions, museum collections, and international awards.",
};

export default function CVPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <CVLayout cvData={cvData} />
    </div>
  );
}
