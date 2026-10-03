"use client";

import { ArrowUp, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              FP
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {personal.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} • Dirancang & dibangun dengan Next.js, TypeScript & Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
