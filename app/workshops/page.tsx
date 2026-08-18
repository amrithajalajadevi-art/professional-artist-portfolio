import React from "react";
import type { Metadata } from "next";
import { WorkshopsView } from "@/components/services/WorkshopsView";

export const metadata: Metadata = {
  title: "Art Classes, Workshops & Mentoring",
  description:
    "1-on-1 portfolio mentoring, foundry bronze casting masterclasses, and glaze chemistry workshops by Slade School & RCA alumna Amritha Jalaja Devi.",
};

export default function WorkshopsPage() {
  return <WorkshopsView />;
}
