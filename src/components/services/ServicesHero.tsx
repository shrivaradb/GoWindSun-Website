"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const ServicesHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Integrated <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Renewable Energy Services
          </span>
        </>
      }
      subtitle="Engineering, developing, operating and advising across the renewable energy value chain."
      description="GoWindSun India Private Limited delivers integrated lifecycle solutions for wind, solar, hybrid power plants, and battery energy storage systems (BESS)—supporting India's 500 GW Panchamrit 2030 non-fossil capacity target across a ~3,000 MW identified greenfield site pipeline and India's 300+ GW renewable energy market landscape."
      image="/images/services/services-hero-new.png"
      imageAlt="GoWindSun Integrated Renewable Energy Services Ecosystem"
      overlayClassName="absolute inset-0 bg-gradient-to-r from-[#06111F]/75 via-[#06111F]/50 to-transparent"
    />
  );
};
