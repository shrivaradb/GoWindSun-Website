import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { IndiaPowerhouseSection } from "@/components/home/IndiaPowerhouseSection";
import { MacroImpactStrip } from "@/components/home/MacroImpactStrip";
import { TransitionDriversSection } from "@/components/home/TransitionDriversSection";
import { IntegratedSolutionsInfographic } from "@/components/home/IntegratedSolutionsInfographic";

export const metadata: Metadata = {
  title: "GoWindSun India Private Limited | Integrated Renewable Energy Solutions",
  description:
    "Integrated Renewable Energy Solutions for Wind, Solar, Hybrid, BESS, and Energy Infrastructure across India—empowering businesses, developers, industries, and government agencies.",
};

export default function HomePage() {
  return (
    <>
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
