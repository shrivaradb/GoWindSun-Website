import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IndiaPowerhouseSection } from "@/components/home/IndiaPowerhouseSection";
import { MacroImpactStrip } from "@/components/home/MacroImpactStrip";
import { TransitionDriversSection } from "@/components/home/TransitionDriversSection";
import { IntegratedSolutionsInfographic } from "@/components/home/IntegratedSolutionsInfographic";

export const metadata: Metadata = {
  metadataBase: new URL("https://gowindsun.com"),
  title: "GoWindSun India Private Limited",
  description: "GoWindSun India Private Limited delivers integrated renewable energy solutions across solar, wind, and battery storage to accelerate the clean energy transition.",
  alternates: {
    canonical: "https://gowindsun.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
 <>
      <SEO
        title="GoWindSun India Private Limited"
        description="GoWindSun India Private Limited delivers integrated renewable energy solutions across solar, wind, and battery storage to accelerate the clean energy transition."
        ogImage="https://gowindsun.com/logo.png"
        canonical="/"
      />

      {/* 1. Full-Screen Cinematic Image Slideshow Hero */}
      <Hero />

      {/* 2. Editorial Magazine Two-Column (Introduction Section from Website.docx) */}
      <IndiaPowerhouseSection />

      {/* 3. Linear Horizontal Data Strip (No Card Containers) */}
      <MacroImpactStrip />

      {/* 4. Vertical Rule Divider Columns (Transition Drivers from Website.docx) */}
      <TransitionDriversSection />

      {/* 5. Integrated Renewable Energy Solutions Ecosystem Infographic */}
      <IntegratedSolutionsInfographic />
    </>
  );
}
