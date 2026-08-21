import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { StatementBanner } from "@/components/about/StatementBanner";
import { OurExpertiseSection } from "@/components/about/OurExpertiseSection";
import { IntegratedCapabilitiesSection } from "@/components/about/IntegratedCapabilitiesSection";
import { StakeholderValueSection } from "@/components/about/StakeholderValueSection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { TechSection } from "@/components/about/TechSection";
import { WhyGoWindSunSection } from "@/components/about/WhyGoWindSunSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "About GoWindSun India Private Limited",
  description: "Learn about GoWindSun India Private Limited, an Indian renewable energy engineering powerhouse delivering integrated utility-scale solar, wind, hybrid, and storage infrastructure.",
  alternates: {
    canonical: "https://www.gowindsun.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About GoWindSun India Private Limited"
        description="Learn about GoWindSun India Private Limited, an Indian renewable energy engineering powerhouse delivering integrated utility-scale solar, wind, hybrid, and storage infrastructure."
        canonical="/about"
      />

      {/* 1. Dedicated About Hero */}
      <AboutHero />

      {/* 2. Who We Are (Editorial Two-Column) */}
      <WhoWeAreSection />

      {/* 3. Full-Width Typographic Impact Statement */}
      <StatementBanner />

      {/* 4. Core Energy Domains (Numbered Horizontal Rows) */}
      <OurExpertiseSection />

      {/* 5. 4 Integrated Pillars (Asymmetric Bento Grid with ~3000 MW Pipeline) */}
      <IntegratedCapabilitiesSection />

      {/* 6. Who We Create Value For (Structured Specification Matrix Table) */}
      <StakeholderValueSection />

      {/* 7. Vision & Mission (Split Pull-Quote & Essay) */}
      <VisionMissionSection />

      {/* 8. Technology & Energy Transition (Vertical Rule Divider Columns) */}
      <TechSection />

      {/* 9. Why Choose GoWindSun (Left-Accent Stacked Blocks) */}
      <WhyGoWindSunSection />

      {/* 10. Final Strategic Callout CTA */}
      <AboutCtaSection />
    </>
  );
}
