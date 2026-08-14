import React from "react";
import { AdvisoryServicesHero } from "@/components/services/AdvisoryServicesHero";
import { TechnicalConsultingSection } from "@/components/services/TechnicalConsultingSection";
import { ServicesSpecTable } from "@/components/services/ServicesSpecTable";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export default function TechnicalConsultingAdvisoryPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <AdvisoryServicesHero />

      {/* Capabilities Breakdown Section */}
      <TechnicalConsultingSection />

      {/* Engineering Deliverables Matrix */}
      <ServicesSpecTable />

      {/* Consultation CTA */}
      <ServicesCtaSection
        badge="TECHNO-COMMERCIAL & STATUTORY ADVISORY"
        title={
          <>
            NEED INDEPENDENT ENGINEERING OR <br />
            BANKABLE TECHNO-COMMERCIAL ADVISORY?
          </>
        }
        description="Engage GoWindSun as your Owner's Engineer, Lender's Independent Engineer, or due diligence advisor to secure bankable P50/P90 DPR yield assessments and statutory clearances."
        buttonText="Request Technical Advisory"
      />
    </main>
  );
}

