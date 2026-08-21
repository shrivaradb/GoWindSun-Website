import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Careers | GoWindSun India Private Limited",
  description: "Join GoWindSun India Private Limited — Empowering engineers, wind energy analysts, solar EPC managers, power market specialists, and regulatory experts.",
  alternates: {
    canonical: "https://www.gowindsun.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
