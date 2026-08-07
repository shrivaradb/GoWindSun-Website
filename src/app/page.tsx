import React from "react";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { EngineeringExcellence } from "@/components/home/EngineeringExcellence";
import { Services } from "@/components/home/Services";
import { InteractiveEnergySimulator } from "@/components/home/InteractiveEnergySimulator";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { ProjectsPortfolio } from "@/components/home/ProjectsPortfolio";
import { ContactRfpSection } from "@/components/home/ContactRfpSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <EngineeringExcellence />
      <Services />
      <InteractiveEnergySimulator />
      <IndustriesServed />
      <ProjectsPortfolio />
      <ContactRfpSection />
    </>
  );
}
