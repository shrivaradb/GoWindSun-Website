"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export interface ServicesCtaSectionProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const ServicesCtaSection: React.FC<ServicesCtaSectionProps> = ({
  badge = "ENGINEERED COLLABORATION",
  title = (
    <>
      READY TO DISCUSS YOUR RENEWABLE ENERGY <br />
      PROJECT OR ADVISORY REQUIREMENTS?
    </>
  ),
  description = "Connect with GoWindSun’s engineering and advisory team to evaluate greenfield sites, structure corporate C&I PPAs, appoint Owner’s Engineers, or request bankable DPR yield studies.",
  buttonText = "Submit Technical RFP",
  buttonHref = "/contact",
}) => {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 bg-[#1E4362] text-white relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#0186D5]">
            {badge}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-xl mx-auto">
            {description}
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              variant="primary"
              size="md"
              className="group bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold text-sm px-6 py-3 rounded-none border border-sky-300/40 shadow-xl transition-all duration-300 hover:shadow-sky-500/25"
              onClick={() => {
                router.push(buttonHref);
              }}
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};



