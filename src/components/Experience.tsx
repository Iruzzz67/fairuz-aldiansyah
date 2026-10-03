import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { portfolioData, ExperienceItem } from "@/data/portfolio-data";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Riwayat & Pengalaman</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Perjalanan Rekayasa Perangkat Lunak
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Jejak langkah dalam merancang, mengembangkan, dan memelihara aplikasi web modern serta sistem backend.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 relative border-l-2 border-indigo-500/30 dark:border-indigo-500/20 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp: ExperienceItem, idx: number) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 shadow-md group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {exp.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
