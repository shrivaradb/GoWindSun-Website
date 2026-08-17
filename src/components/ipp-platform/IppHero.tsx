"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const IppHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          IPP Platform <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Renewable Assets
          </span>
        </>
      }
      subtitle="Developing, Owning & Operating High-Quality Renewable Assets Across India."
      description="Leveraging deep industry expertise, strategic partnerships, and extensive market knowledge, we identify and develop renewable energy opportunities that offer long-term value and sustainable growth."
      image="/images/ipp/ipp-hero.webp"
      imageAlt="GoWindSun IPP Platform - Utility Scale Renewable Energy Asset Platform"
    />
  );
};
