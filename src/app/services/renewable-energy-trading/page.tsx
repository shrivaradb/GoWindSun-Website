import React from "react";
import { Metadata } from "next";
import { TradingHero } from "@/components/services/trading/TradingHero";
import { TradingEnergyFlowDiagram } from "@/components/services/trading/TradingEnergyFlowDiagram";
import { TradingServicesForOfftakers } from "@/components/services/trading/TradingServicesForOfftakers";
import { TradingServicesForGenerators } from "@/components/services/trading/TradingServicesForGenerators";
import { TradingOpenAccessModels } from "@/components/services/trading/TradingOpenAccessModels";
import { TradingOverviewBanner } from "@/components/services/trading/TradingOverviewBanner";
import { TradingMinimalCta } from "@/components/services/trading/TradingMinimalCta";

export const metadata: Metadata = {
  title: "Renewable Energy Trading & C&I Open Access PPA Services | GoWindSun India Private Limited",
  description:
    "Explore GoWindSun's Renewable Energy Trading & Corporate PPA Advisory: connecting clean power generators with commercial energy demand through Open Access, Group Captive models, Third-Party Sale, and ISTS/Intra-State transmission across India.",
  openGraph: {
    title: "Renewable Energy Trading & Corporate PPAs | GoWindSun",
    description:
      "Strategic power procurement advisory, Open Access cost modeling, Corporate PPA structuring, and RE off-taker sourcing for C&I consumers and IPP generators in India.",
    url: "https://gowindsun.com/services/renewable-energy-trading",
  },
};

export default function RenewableEnergyTradingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Energy Flow Hero with Animated Power Flow Visualization */}
      <TradingHero />

      {/* 2. Power Flow Transaction Architecture Diagram (Generation -> Transmission -> Market -> Consumer) */}
      <TradingEnergyFlowDiagram />

      {/* 3. Green Power Procurement Services for C&I Commercial Consumers */}
      <TradingServicesForOfftakers />

      {/* 4. Corporate PPA Marketing & Off-Take Services for RE Generators / IPPs */}
      <TradingServicesForGenerators />

      {/* 5. Open Access Procurement Mechanisms (Third-Party, Group Captive, ISTS, Intra-State, RTC) */}
      <TradingOpenAccessModels />

      {/* 6. Renewable Energy Trading & Open Access Architecture Showcase (RENEWABLE ENERGY TRADING.png) */}
      <TradingOverviewBanner />

      {/* 7. Commercial Engagement CTA */}
      <TradingMinimalCta />
    </main>
  );
}
