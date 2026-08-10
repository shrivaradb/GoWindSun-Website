import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Services4CategoriesOverview } from "@/components/services/Services4CategoriesOverview";
import { EngagementWorkflow } from "@/components/services/EngagementWorkflow";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export const metadata: Metadata = {
  title: "Services | GoWindSun India Private Limited",
  description:
    "GoWindSun provides integrated renewable energy services across Project Development & EPC, Technical Consulting & Advisory, Asset Management & Operations, and Strategic Advisory & Energy Market Services across India.",
  openGraph: {
    title: "Renewable Energy Services & Capabilities | GoWindSun",
    description:
      "Integrated engineering, project development, technical due diligence, asset operations, and energy market advisory across India's clean energy landscape.",
    url: "https://gowindsun.com/services",
  },
};

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
