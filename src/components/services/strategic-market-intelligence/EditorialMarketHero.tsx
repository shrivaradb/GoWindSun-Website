"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const EditorialMarketHero: React.FC = () => {
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
      subtitle="Understanding the forces shaping renewable-energy markets—turning policy trends, regulatory developments, and market signals into informed commercial decisions."
      description="GoWindSun provides corporate energy trading advisory, Corporate PPA structuring, asset repowering, M&A due diligence, portfolio strategy, Green Hydrogen, and offshore wind advisory across India."
      image="/images/strategic_advisory_hero.webp"
      imageAlt="Strategic Advisory & Energy Markets - Global RE Network & Grid Integration"
    />
  );
};
