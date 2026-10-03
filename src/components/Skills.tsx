"use client";

import { useState } from "react";
import { Wrench, Layers, Server, Database, Terminal, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryIcons = [
    <Layers key="fe" className="w-4 h-4" />,
    <Server key="be" className="w-4 h-4" />,
    <Database key="db" className="w-4 h-4" />,
    <Terminal key="tools" className="w-4 h-4" />,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Keahlian & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Teknologi & Instrumen Pengembangan
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Daftar teknologi yang secara aktif saya gunakan untuk membangun aplikasi web modern berskala produksi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {skills.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {categoryIcons[idx]}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Header */}
        <div className="mt-8 text-center max-w-lg mx-auto">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {skills[activeCategory].description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills[activeCategory].skills.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {item.name}
                    {item.isPrimary && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-medium">
                        Core
                      </span>
                    )}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
