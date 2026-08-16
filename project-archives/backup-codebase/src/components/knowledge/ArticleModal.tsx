"use client";

import React from "react";
import { ArticleItem } from "@/data/knowledgeData";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Clock, Calendar, User, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const navigate = useNavigate();

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 bg-white text-slate-900 border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Eyebrow Category & Meta */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0186D5] font-bold uppercase border border-sky-200">
                {article.category}
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#1E4362] tracking-tight uppercase leading-snug">
              {article.title}
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1 border-b border-slate-200 pb-4">
              <User className="w-3.5 h-3.5 text-[#0186D5]" />
              <span>Authored by: <strong className="text-slate-800 font-bold">{article.author}</strong></span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-sm text-slate-700 leading-relaxed font-medium">
            <strong className="text-[#0186D5] font-mono font-bold uppercase tracking-wider block text-xs mb-1">
              Executive Summary
            </strong>
            {article.summary}
          </div>

          {/* Key Takeaways Box */}
          <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1E4362] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Key Technical &amp; Regulatory Takeaways</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              {article.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Paragraph Content */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-2">
              Detailed Analysis
            </h4>
            {article.fullContent.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono text-center sm:text-left">
              Need custom tariff structuring or due diligence for your facility?
            </div>

            <Button
              variant="primary"
              size="lg"
              className="group bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3 px-6 text-xs uppercase tracking-wider shadow-md cursor-pointer"
              onClick={() => {
                onClose();
                navigate("/contact");
              }}
            >
              <span>Schedule Advisory Desk Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
