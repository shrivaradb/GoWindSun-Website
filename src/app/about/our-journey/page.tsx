"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { StandardHero } from "@/components/ui/StandardHero";

export default function OurJourneyPage() {
  return (
    <StandardHero
      theme="dark"
      title={
        <>
          Our Journey <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Chronicle &amp; Milestones.
          </span>
        </>
      }
      subtitle="Documenting the Growth of GoWindSun's Renewable Infrastructure Pipeline."
      description="We are curating our corporate chronicle detailing our team's engineering milestones, project allocations, and IPP platform asset acquisitions across India."
    >
      <div className="pt-8">
        <Link href="/about">
          <Button variant="outline" size="lg" className="rounded-full px-8 py-3 font-bold text-sm text-white border-slate-700 hover:bg-slate-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to About Page</span>
          </Button>
        </Link>
      </div>
    </StandardHero>
  );
}
