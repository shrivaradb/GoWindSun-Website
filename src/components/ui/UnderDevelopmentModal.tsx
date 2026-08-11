import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Construction, X, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface UnderDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const UnderDevelopmentModal: React.FC<UnderDevelopmentModalProps> = ({
  isOpen,
  onClose,
  title = "Projects for Acquisition",
  subtitle = "Portal Under Active Development",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 z-10 p-6 sm:p-8"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider">
                <Construction className="w-4 h-4 text-amber-600 animate-bounce" />
                <span>{subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our <strong className="font-semibold text-slate-900">Projects for Acquisition</strong> platform, digital asset directory, and utility-scale Solar, Wind, and Hybrid project acquisition portfolios are currently under active technical onboarding.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Direct Advisory Access Available</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  For immediate project acquisition metrics, greenfield site divestments, or confidential techno-commercial asset parameters, please reach out directly to our leadership team.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-sm font-bold shadow-md transition-all group"
              >
                <span>Direct Contact Request</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
