import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { AdvisoryServicesHero } from "@/components/services/AdvisoryServicesHero";
import { TechnicalConsultingSection } from "@/components/services/TechnicalConsultingSection";
import { ServicesSpecTable } from "@/components/services/ServicesSpecTable";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://gowindsun.com"),
  title: "Technical Consulting & Advisory Services | GoWindSun India Private Limited",
  description: "Bankable PVSyst yield reports, Met Mast wind resource campaigns, DPR feasibility audits, owner's engineering, and technical due diligence.",
  alternates: {
    canonical: "https://gowindsun.com/services/technical-consulting-advisory",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TechnicalConsultingAdvisoryPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO
        title="Technical Consulting & Advisory Services | GoWindSun India Private Limited"
        description="Bankable PVSyst yield reports, Met Mast wind resource campaigns, DPR feasibility audits, owner's engineering, and technical due diligence."
        canonical="/services/technical-consulting-advisory"
      />
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

