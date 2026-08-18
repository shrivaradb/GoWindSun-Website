"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/seo/SEO";
import { Home, Compass, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="bg-[#06111F] min-h-[85vh] text-white flex items-center justify-center py-20 relative overflow-hidden">
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
      />

      {/* Lighting Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0186D5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          {/* Large 404 Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 tracking-tight"
          >
            404
          </motion.h1>

          {/* Title & Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-lg mx-auto leading-relaxed">
              The page you're looking for doesn't exist or may have been moved.
            </p>
          </motion.div>

          {/* Clear Home CTA Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-sky-500/25 border border-sky-300/30 inline-flex items-center gap-2 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-full px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider border border-slate-700 inline-flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Services</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
