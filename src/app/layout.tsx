import type { Metadata } from "next";
import React from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: {
    default: "GoWindSun India Private Limited",
    template: "%s | GoWindSun India Private Limited",
  },
  description:
    "GoWindSun India Private Limited delivers integrated renewable energy solutions across solar, wind, and battery storage to accelerate the clean energy transition.",
  alternates: {
    canonical: "https://www.gowindsun.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.gowindsun.com/",
    title: "GoWindSun India Private Limited",
    description:
      "GoWindSun India Private Limited delivers integrated renewable energy solutions across solar, wind, and battery storage to accelerate the clean energy transition.",
    siteName: "GoWindSun India Private Limited",
    images: [
      {
        url: "https://www.gowindsun.com/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
