import React from "react";
import { Metadata } from "next";
import { AssetOperationsHero } from "@/components/services/asset-operations/AssetOperationsHero";
import { AssetLifecyclePipeline } from "@/components/services/asset-operations/AssetLifecyclePipeline";
import { AssetDomainControlPanels } from "@/components/services/asset-operations/AssetDomainControlPanels";
import { AssetTelemetryMatrix } from "@/components/services/asset-operations/AssetTelemetryMatrix";
import { AssetOperationsCta } from "@/components/services/asset-operations/AssetOperationsCta";

export const metadata: Metadata = {
  title: "Asset Management & Operations | GoWindSun India Private Limited",
  description:
    "Explore GoWindSun's Asset Management & Operations control center: Turnkey O&M for wind turbines, solar PV, hybrid projects, BESS, HV/EHV substations, transmission lines, manpower deployment, and inventory optimization.",
  openGraph: {
    title: "Asset Management & Operations | GoWindSun Control Center",
    description:
      "Live asset performance monitoring, plant availability enhancement, site manpower deployment, preventive/predictive maintenance, and spare parts management across India.",
    url: "https://gowindsun.com/services/asset-management-operations",
  },
};

export default function AssetManagementOperationsPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      {/* 1. Live Asset Performance & Control Center Hero */}
      <AssetOperationsHero />

      {/* 2. 5-Stage Live Asset Performance Pipeline (Monitor -> Maintain -> Optimize -> Improve Availability -> Extend Asset Life) */}
      <AssetLifecyclePipeline />

      {/* 3. High-Impact Operational Domain Control Panels (Featuring Existing High-Res Images) */}
      <AssetDomainControlPanels />

      {/* 4. Console Telemetry Dossier & Technical Scope Matrix */}
      <AssetTelemetryMatrix />

      {/* 5. Operations Consultation & Plant Audit CTA */}
      <AssetOperationsCta />
    </main>
  );
}
