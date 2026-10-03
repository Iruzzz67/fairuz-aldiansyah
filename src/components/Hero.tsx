import { ArrowRight, Download, Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/15 via-blue-500/10 to-purple-500/15 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {personal.statusBadge}
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.15]">
            Halo, Saya{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              {personal.role}
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-700 dark:border-slate-300">
                Next.js
              </span>
              <span className="text-slate-400">&</span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-700 text-white border border-purple-500">
                .NET / C#
              </span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Lihat Proyek Unggulan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              <span>Hubungi Saya</span>
            </a>

            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="mt-8 flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:scale-110"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Kirim Email"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:text-rose-500 dark:hover:text-rose-400 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Metric Highlights Grid */}
          <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl text-left">
            {personal.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel shadow-sm hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
                <div className="mt-1 text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
