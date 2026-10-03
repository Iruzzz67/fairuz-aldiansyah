import { ShieldCheck, Zap, Layers, GitPullRequest, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
  const { values } = portfolioData;

  const valueIcons = [
    <ShieldCheck key="1" className="w-5 h-5 text-indigo-500" />,
    <Layers key="2" className="w-5 h-5 text-purple-500" />,
    <Zap key="3" className="w-5 h-5 text-amber-500" />,
    <GitPullRequest key="4" className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Tentang & Filosofi Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Menghubungkan Estetika Web dengan Ketangguhan Enterprise
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Sebagai Software Engineer, saya percaya bahwa aplikasi terbaik lahir dari keseimbangan antara tampilan pengguna yang intuitif dan arsitektur backend yang kokoh serta mudah dirawat.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Spesialisasi: Next.js + .NET Ecosystem
              </h3>
              <p className="text-sm sm:text-base">
                Di sisi <strong className="text-slate-900 dark:text-white">Frontend</strong>, saya mengandalkan <strong>Next.js (React & TypeScript)</strong> untuk membangun antarmuka yang cepat berkat Server-Side Rendering (SSR), Server Components, dan integrasi Tailwind CSS yang bersih.
              </p>
              <div className="my-4 border-t border-slate-200/60 dark:border-slate-800/60" />
              <p className="text-sm sm:text-base">
                Di sisi <strong className="text-slate-900 dark:text-white">Backend</strong>, kekuatan <strong>.NET (C# & ASP.NET Core)</strong> menjadi pilihan utama saya untuk menangani logika bisnis yang kompleks, manajemen data relasional dengan Entity Framework Core, dan perancangan REST API dengan standar Clean Architecture.
              </p>
            </div>
          </div>

          {/* Right: 4 Core Engineering Principles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="p-5 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center mb-3">
                  {valueIcons[idx] || <ShieldCheck className="w-5 h-5 text-indigo-500" />}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  {val.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
