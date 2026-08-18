import React from "react";
import type { Metadata } from "next";
import { CommissionsView } from "@/components/services/CommissionsView";

export const metadata: Metadata = {
  title: "Bespoke Sculptural Commissions",
  description:
    "Commission custom bronze sculptures, architectural terracotta friezes, and private art monuments with London visual artist Amritha Jalaja Devi.",
};

export default function CommissionsPage() {
  return <CommissionsView />;
}
