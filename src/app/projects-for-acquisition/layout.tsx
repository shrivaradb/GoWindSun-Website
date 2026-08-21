import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Renewable Energy Projects for Acquisition | GoWindSun India Private Limited",
  description: "Explore renewable energy projects for acquisition across wind, solar and hybrid assets through GoWindSun's project acquisition platform.",
  alternates: {
    canonical: "https://www.gowindsun.com/projects-for-acquisition",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsForAcquisitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
