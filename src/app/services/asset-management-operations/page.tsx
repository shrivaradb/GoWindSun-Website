import { SEO } from "@/components/seo/SEO";
import React from "react";
import { AssetOperationsHero } from "@/components/services/asset-operations/AssetOperationsHero";
import { AssetLifecyclePipeline } from "@/components/services/asset-operations/AssetLifecyclePipeline";
import { AssetDomainControlPanels } from "@/components/services/asset-operations/AssetDomainControlPanels";
import { AssetTelemetryMatrix } from "@/components/services/asset-operations/AssetTelemetryMatrix";
import { AssetOperationsCta } from "@/components/services/asset-operations/AssetOperationsCta";

export default function AssetManagementOperationsPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO title="Asset Management & Operations" description="O&M asset management, SCADA grid monitoring, performance optimization, and preventive maintenance for RE plants." canonical="/services/asset-management-operations" />
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
