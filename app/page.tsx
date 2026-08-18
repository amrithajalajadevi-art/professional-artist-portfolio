import React from "react";
import { homePageData } from "@/constants/homeData";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightBanner } from "@/components/home/HighlightBanner";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { PressSection } from "@/components/home/PressSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <HeroSection data={homePageData.hero} />
      <HighlightBanner data={homePageData.highlightBanner} />
      <KeyProjectsSection projects={homePageData.keyProjects} />
      <PressSection features={homePageData.pressFeatures} />
    </div>
  );
}
