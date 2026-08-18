import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { AssetOperationsHero } from "@/components/services/asset-operations/AssetOperationsHero";
import { AssetLifecyclePipeline } from "@/components/services/asset-operations/AssetLifecyclePipeline";
import { AssetDomainControlPanels } from "@/components/services/asset-operations/AssetDomainControlPanels";
import { AssetTelemetryMatrix } from "@/components/services/asset-operations/AssetTelemetryMatrix";
import { AssetOperationsCta } from "@/components/services/asset-operations/AssetOperationsCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://gowindsun.com"),
  title: "Asset Management & Operations | GoWindSun India Private Limited",
  description: "Comprehensive operations & maintenance (O&M), SCADA real-time monitoring, preventive maintenance, performance optimization, and asset life extension.",
  alternates: {
    canonical: "https://gowindsun.com/services/asset-management-operations",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AssetManagementOperationsPage() {
  return (
    <main className="min-h-screen bg-[#06111F]">
      <SEO
        title="Asset Management & Operations | GoWindSun India Private Limited"
        description="Comprehensive operations & maintenance (O&M), SCADA real-time monitoring, preventive maintenance, performance optimization, and asset life extension."
        canonical="/services/asset-management-operations"
      />
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
