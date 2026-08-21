import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Renewable Energy Knowledge Hub | GoWindSun India Private Limited",
  description: "Official renewable energy market intelligence repository tracking verified wind turbine prices (WTG), solar PV module costs, CAPEX benchmarks, tenders, and tariffs.",
  alternates: {
    canonical: "https://www.gowindsun.com/knowledge-hub",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KnowledgeHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
