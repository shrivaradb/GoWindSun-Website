"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const TradingHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Renewable Energy <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#FBBF24]">
            Power Trading
          </span>
        </>
      }
      subtitle="Strategic transaction advisory, Corporate PPA structuring, Open Access feasibility, and renewable power sourcing."
      description="GoWindSun enables commercial and industrial power off-takers to secure reliable, cost-effective green electricity through Third-Party Sale, Group Captive, and Inter-State / Intra-State Open Access models."
      image="/images/re-trading-hero.png"
      imageAlt="GoWindSun Renewable Energy Trading - Power Flow Infrastructure"
    />
  );
};
