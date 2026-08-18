import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { IppHero } from "@/components/ipp-platform/IppHero";
import { IppPlatformStatement } from "@/components/ipp-platform/IppPlatformStatement";
import { IppOpportunityLandscape } from "@/components/ipp-platform/IppOpportunityLandscape";
import { IppValueProgression } from "@/components/ipp-platform/IppValueProgression";
import { IppInvestmentStructures } from "@/components/ipp-platform/IppInvestmentStructures";
import { IppStrategicAdvantages } from "@/components/ipp-platform/IppStrategicAdvantages";
import { IppPlatformOverviewBanner } from "@/components/ipp-platform/IppPlatformOverviewBanner";
import { IppMinimalCta } from "@/components/ipp-platform/IppMinimalCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://gowindsun.com"),
  title: "IPP Platform | GoWindSun India Private Limited",
  description: "Institutional Independent Power Producer platform for utility-scale solar, wind, and hybrid renewable energy project development, asset acquisition, and capital structuring.",
  alternates: {
    canonical: "https://gowindsun.com/ipp-platform",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IppPlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="IPP Platform | GoWindSun India Private Limited"
        description="Institutional Independent Power Producer platform for utility-scale solar, wind, and hybrid renewable energy project development, asset acquisition, and capital structuring."
        canonical="/ipp-platform"
      />
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
