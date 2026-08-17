"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const AdvisoryServicesHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Technical Consulting &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Advisory Services
          </span>
        </>
      }
      subtitle="Strategic, technical, commercial & regulatory transaction support."
      description="GoWindSun acts as a trusted technical advisor to equity investors, banks, infrastructure funds, utilities, OEMs, and commercial energy consumers—helping reduce energy costs, mitigate project execution risks, and navigate complex statutory frameworks."
      image="/images/services/technical-consulting-advisory-hero.webp"
      imageAlt="GoWindSun Technical Consulting & Advisory Engineering Assessment"
    />
  );
};
