import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { ProjectServicesHero } from "@/components/services/ProjectServicesHero";
import { ProjectDevelopmentEpcSection } from "@/components/services/ProjectDevelopmentEpcSection";
import { EngagementWorkflow } from "@/components/services/EngagementWorkflow";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Project Development & EPC | GoWindSun India Private Limited",
  description: "Turnkey EPC execution, grid integration, and utility-scale project development across solar, wind, and storage ecosystems.",
  alternates: {
    canonical: "https://www.gowindsun.com/services/project-development-epc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectDevelopmentEpcPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO
        title="Renewable Energy Project Development & EPC | GoWindSun India Private Limited"
        description="Turnkey EPC execution, clear-title land acquisition, EHV substation construction, and grid evacuation engineering for utility-scale solar, wind, and hybrid projects."
        canonical="/services/project-development-epc"
      />
      <ProjectServicesHero />

      {/* DETAILED EDITORIAL LIFECYCLE BREAKDOWN (Previses all 6 images with dynamic layout rhythm) */}
      <ProjectDevelopmentEpcSection />

      {/* ENGAGEMENT METHODOLOGY */}
      <EngagementWorkflow />

      {/* RFP CONSULTATION CTA */}
      <ServicesCtaSection
        badge="TURNKEY EPC & GREENFIELD EXECUTION"
        title={
          <>
            READY TO DEVELOP OR EXECUTE YOUR <br />
            TURNKEY RENEWABLE ENERGY PROJECT?
          </>
        }
        description="Partner with GoWindSun for end-to-end greenfield site development, bankable WRA met mast erection, land procurement, grid evacuation, and substation EPC execution."
        buttonText="Submit Project RFP"
      />
    </main>
  );
}

