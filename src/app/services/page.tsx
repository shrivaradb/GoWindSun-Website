import React from "react";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Services4CategoriesOverview } from "@/components/services/Services4CategoriesOverview";
import { EngagementWorkflow } from "@/components/services/EngagementWorkflow";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      {/* 1. Typography-Led Services Hero with CountUp Stats */}
      <ServicesHero />

      {/* 2. Four Core Service Categories Overview (01 to 04 with photography and deep links) */}
      <Services4CategoriesOverview />

      {/* 3. 4-Phase Technical Process Methodology */}
      <EngagementWorkflow />

      {/* 5. Strategic Consultation & RFP CTA */}
      <ServicesCtaSection />
    </main>
  );
}
