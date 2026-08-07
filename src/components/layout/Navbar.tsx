"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Sun, Wind, Menu, X, PhoneCall } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-background-deep/80 backdrop-blur-xl border-b border-border/80 shadow-enterprise"
            : "py-6 bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center text-white shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
                <div className="relative flex items-center justify-center">
                  <Sun className="w-5 h-5 absolute animate-spin-slow opacity-80" />
                  <Wind className="w-4 h-4 text-white font-bold" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-accent-hover transition-colors">
                  GoWindSun<span className="text-accent-primary">.</span>
                </span>
                <span className="text-[10px] uppercase font-medium tracking-widest text-text-muted">
                  India Pvt Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 glass-panel px-6 py-2.5 rounded-full border-border/60">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xs font-semibold text-text-muted hover:text-white transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-accent-primary" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <Button
                variant="primary"
                size="sm"
                icon
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request RFP
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-surface-elevated text-text-secondary hover:text-white border border-border"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
