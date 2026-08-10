import React from "react";
import { Metadata } from "next";
import { IppHero } from "@/components/ipp-platform/IppHero";
import { IppPlatformStatement } from "@/components/ipp-platform/IppPlatformStatement";
import { IppOpportunityLandscape } from "@/components/ipp-platform/IppOpportunityLandscape";
import { IppValueProgression } from "@/components/ipp-platform/IppValueProgression";
import { IppInvestmentStructures } from "@/components/ipp-platform/IppInvestmentStructures";
import { IppStrategicAdvantages } from "@/components/ipp-platform/IppStrategicAdvantages";
import { IppPlatformOverviewBanner } from "@/components/ipp-platform/IppPlatformOverviewBanner";
import { IppMinimalCta } from "@/components/ipp-platform/IppMinimalCta";

export const metadata: Metadata = {
  title: "IPP Platform | GoWindSun India Private Limited",
  description:
    "GoWindSun India Private Limited is an Independent Power Producer (IPP) platform dedicated to developing, owning, operating, and managing high-quality renewable energy assets across India.",
  openGraph: {
    title: "IPP Platform | GoWindSun India Private Limited",
    description:
      "Developing, owning, operating, and managing high-quality wind, solar, and hybrid renewable energy assets across India.",
    url: "https://gowindsun.com/ipp-platform",
  },
};

export default function IppPlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Bespoke Hero: Opportunity Gateway */}
      <IppHero />

      {/* 2. Large Editorial Introduction Statement (Why The Platform Exists) */}
      <IppPlatformStatement />

      {/* 3. Signature Visualization: Opportunity Landscape (Wind, Solar, Hybrid, Open Access) */}
      <IppOpportunityLandscape />

      {/* 4. Value Progression Gateway (Discover -> Evaluate -> Structure -> Acquire -> Own -> Create Value) */}
      <IppValueProgression />

      {/* 5. Capital & Investment Structures (Equity, Strategic Partnerships, Project & Portfolio) */}
      <IppInvestmentStructures />

      {/* 6. Macro Investment Advantages (500 GW Target, Grid Connectivity, Long-Term PPAs) */}
      <IppStrategicAdvantages />

      {/* 7. IPP Platform Overview Showcase Banner (ipp platform.png) */}
      <IppPlatformOverviewBanner />

      {/* 8. Executive Engagement CTA */}
      <IppMinimalCta />
    </main>
  );
};
