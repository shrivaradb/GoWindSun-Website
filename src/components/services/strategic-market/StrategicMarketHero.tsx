"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const StrategicMarketHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Strategic Advisory &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Energy Markets
          </span>
        </>
      }
      subtitle="Turning energy-market intelligence into informed commercial decisions."
      description="GoWindSun delivers executive strategic advisory across energy trading (Corporate PPAs, Open Access, Group Captive), repowering aging assets, M&A project acquisitions/divestments, portfolio strategy, Green Hydrogen, and Offshore Wind advisory across India."
      image="/images/strategic_advisory_hero.png"
      imageAlt="GoWindSun Strategic Advisory & Energy Markets"
    />
  );
};
