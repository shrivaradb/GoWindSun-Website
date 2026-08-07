"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Sun, Wind, ArrowUp, Mail, Phone, MapPin, ShieldCheck, Award } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-deep border-t border-border pt-20 pb-12 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-border/60">
          {/* Col 1: Brand & Enterprise Profile */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center text-white shadow-glow-blue">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  GoWindSun<span className="text-accent-primary">.</span>
                </span>
                <span className="block text-[10px] uppercase font-medium tracking-widest text-text-muted">
                  India Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              GoWindSun India Pvt Ltd is an Indian renewable energy engineering company delivering integrated utility-scale solar, wind, hybrid power plants, and battery energy storage solutions for enterprise clients and developers.
            </p>

            <div className="flex items-center gap-4 text-xs text-text-muted pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
                <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                <span>ISO 9001:2015 & ISO 14001</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
                <Award className="w-4 h-4 text-accent-cyan" />
                <span>CEA Grid Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Engineering Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries Served */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {siteConfig.industries.map((ind) => (
                <li key={ind.title}>
                  <Link href="#industries" className="hover:text-white transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted">
              Corporate HQ
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-primary shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} GoWindSun India Pvt Ltd. All engineering rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Engineering</Link>
            <Link href="#" className="hover:text-white transition-colors">ISO Certifications</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-surface border border-border hover:bg-surface-highlight text-text-secondary hover:text-white transition-all ml-4"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
