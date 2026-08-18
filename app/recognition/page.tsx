import React from "react";
import type { Metadata } from "next";
import { recognitionData } from "@/constants/recognitionData";
import { RecognitionList } from "@/components/recognition/RecognitionList";

export const metadata: Metadata = {
  title: "Awards & Professional Recognition",
  description:
    "Competitive awards, national sculpture fellowships, museum exhibition selections, and honors of visual artist Amritha Jalaja Devi.",
};

export default function RecognitionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      <RecognitionList items={recognitionData} />
    </div>
  );
}
