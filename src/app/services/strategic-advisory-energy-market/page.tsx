import { SEO } from "@/components/seo/SEO";
import React from "react";
import { EditorialMarketHero } from "@/components/services/strategic-market-intelligence/EditorialMarketHero";
import { EditorialStatement } from "@/components/services/strategic-market-intelligence/EditorialStatement";
import { MarketSignalsStrip } from "@/components/services/strategic-market-intelligence/MarketSignalsStrip";
import { IntelligenceInsightDiagram } from "@/components/services/strategic-market-intelligence/IntelligenceInsightDiagram";
import { EnergyMarketMap } from "@/components/services/strategic-market-intelligence/EnergyMarketMap";
import { StrategyBeforeAction } from "@/components/services/strategic-market-intelligence/StrategyBeforeAction";
import { MarketOpportunitySection } from "@/components/services/strategic-market-intelligence/MarketOpportunitySection";
import { StrategicDecisionFrame } from "@/components/services/strategic-market-intelligence/StrategicDecisionFrame";
import { CommercialPerspectiveSection } from "@/components/services/strategic-market-intelligence/CommercialPerspectiveSection";
import { MarketIntelligenceIndex } from "@/components/services/strategic-market-intelligence/MarketIntelligenceIndex";
import { MinimalStrategicCta } from "@/components/services/strategic-market-intelligence/MinimalStrategicCta";

export default function StrategicAdvisoryEnergyMarketPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO
        title="Renewable Energy Strategic Advisory | GoWindSun"
        description="Executive strategic advisory across Corporate PPAs, Open Access wheeling, Group Captive models, asset repowering, M&A due diligence, and energy market intelligence."
        canonical="/services/strategic-advisory-energy-market"
      />
      {/* 1. Editorial Market Intelligence Hero */}
      <EditorialMarketHero />

      {/* 2. Large Editorial Statement (Introduction) */}
      <EditorialStatement />

      {/* 3. Market Signals (Horizontal Editorial Strip - No Cards) */}
      <MarketSignalsStrip />

      {/* 4. Intelligence -> Insight Conceptual Diagram */}
      <IntelligenceInsightDiagram />

      {/* 5. Energy Market Map (Signature Ecosystem Visualization) */}
      <EnergyMarketMap />

      {/* 6. Strategic Advisory (Strategy Before Action - Large Typographic Section) */}
      <StrategyBeforeAction />

      {/* 7. Market Opportunity Framework (Split Layout with Dividers) */}
      <MarketOpportunitySection />

      {/* 8. Strategic Decision Frame (Editorial Insight Frame) */}
      <StrategicDecisionFrame />

      {/* 9. Dark Blue Commercial Perspective Section (#0A4EA2) */}
      <CommercialPerspectiveSection />

      {/* 10. Market Intelligence Index (Full-Width Service Catalog) */}
      <MarketIntelligenceIndex />

      {/* 11. Minimal Strategic CTA */}
      <MinimalStrategicCta />
    </main>
  );
}
