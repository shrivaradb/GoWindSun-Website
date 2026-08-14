"use client";

import React from "react";
import { StandardHero } from "@/components/ui/StandardHero";

export const AssetOperationsHero: React.FC = () => {
  return (
    <StandardHero
      title={
        <>
          Asset Management &amp; <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Operations Excellence.
          </span>
        </>
      }
      subtitle="Keeping renewable energy assets reliable, available, and performing throughout their lifecycle."
      description="GoWindSun delivers end-to-end Operations & Maintenance (O&M) services, plant reliability enhancement, specialist technical manpower deployment, preventive/predictive maintenance, and spare parts management across wind, solar, hybrid, BESS, and high-voltage grid infrastructure in India."
      image="/images/asset-management.png"
      imageAlt="GoWindSun Asset Management & Operations Control Center"
    />
  );
};
