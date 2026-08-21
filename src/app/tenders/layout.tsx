import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Renewable Energy Tenders | GoWindSun India Private Limited",
  description: "Active renewable energy tenders, project procurement notices, land acquisition RFPs, and C&I Corporate PPA off-take invitations across India.",
  alternates: {
    canonical: "https://www.gowindsun.com/tenders",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TendersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
