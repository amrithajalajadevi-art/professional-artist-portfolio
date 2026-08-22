import React from "react";
import type { Metadata } from "next";
import { CommissionsView } from "@/components/services/CommissionsView";

export const metadata: Metadata = {
  title: "Public & Architectural Commissions",
  description:
    "Commission custom public murals, architectural heritage artworks, and figurative canvases with visual artist Amritha Jalaja Devi.",
};

export default function CommissionsPage() {
  return <CommissionsView />;
}
