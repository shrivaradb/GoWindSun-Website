"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis Smooth Scroll Instance
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Centralized Route Navigation Handler (Always Start at Top of New Pages)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Allow browser tick for Next.js DOM reconciliation
    const timer = setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        // Same-page hash / anchor: Scroll smoothly to the target element
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element && lenisRef.current) {
          lenisRef.current.scrollTo(element, { immediate: false, duration: 1.0 });
        } else if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // New Route Navigation: ALWAYS reset scroll position to absolute top (0)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

