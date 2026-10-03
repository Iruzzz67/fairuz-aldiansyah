"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Check } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio-data";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("Semua");

  const categories = ["Semua", "Fullstack", "Next.js", ".NET / Backend"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "Semua") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya & Portofolio Proyek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Proyek Pilihan & Studi Kasus
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Kombinasi aplikasi fullstack interaktif, web application Next.js, dan arsitektur backend .NET yang siap pakai.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl group"
            >
              <div>
                {/* Project Header Banner with Gradient & Badges */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} p-6 relative flex flex-col justify-between text-white overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-black/30 backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/90 text-slate-900 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Highlight Quote */}
                  <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-4">
                    💡 {project.highlight}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Spesifikasi Arsitektur:
                    </div>
                    <ul className="space-y-1.5">
                      {project.architecture.map((arch, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
