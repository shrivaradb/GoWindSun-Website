"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const ProjectServicesHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Project Development &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            EPC Execution.
          </span>
        </>
      }
      subtitle="End-to-end wind, solar & hybrid asset execution in India."
      description="GoWindSun supports project developers, IPPs, and institutional partners across the entire renewable energy project lifecycle—from greenfield site identification and development (~3,000 MW pipeline) and bankable resource assessment to grid evacuation, turnkey EPC execution, and operational asset optimisation."
      image="/images/services/project-development-epc-hero.png"
      imageAlt="GoWindSun Renewable Energy Project Development & Turnkey EPC Execution"
    />
  );
};
