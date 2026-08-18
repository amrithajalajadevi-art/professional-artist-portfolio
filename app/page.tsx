import React from "react";
import { homePageData } from "@/constants/homeData";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightBanner } from "@/components/home/HighlightBanner";
import { KeyProjectsSection } from "@/components/home/KeyProjectsSection";
import { PressSection } from "@/components/home/PressSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gallery-bg text-gallery-text">
      {/* 1. Hero Section */}
      <HeroSection data={homePageData.hero} />

      {/* 2. British Council & GTV Recognition Highlight Banner */}
      <HighlightBanner data={homePageData.highlightBanner} />

      {/* 3. Key Portfolio Projects Preview */}
      <KeyProjectsSection projects={homePageData.keyProjects} />

      {/* 4. Selected Press & Media Features Preview */}
      <PressSection features={homePageData.pressFeatures} />
    </div>
  );
}
