import { SEO } from "@/components/seo/SEO";
import React from "react";
import { ProjectServicesHero } from "@/components/services/ProjectServicesHero";
import { ProjectDevelopmentEpcSection } from "@/components/services/ProjectDevelopmentEpcSection";
import { EngagementWorkflow } from "@/components/services/EngagementWorkflow";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export default function ProjectDevelopmentEpcPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO title="Project Development & EPC" description="Turnkey EPC services, land acquisition, EHV substation engineering, and grid evacuation for solar & wind plants." canonical="/services/project-development-epc" />
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

