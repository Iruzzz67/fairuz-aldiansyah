export interface Project {
  id: string;
  title: string;
  category: "Fullstack" | "Next.js" | ".NET / Backend";
  description: string;
  highlight: string;
  tags: string[];
  architecture: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageGradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    isPrimary?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const portfolioData = {
  personal: {
    name: "Fairuz Aldiansyah Prabowo",
    nickname: "Fairuz",
    role: "Software Engineer & Web Developer",
    statusBadge: "Open for Opportunities (Full-time & Project)",
    location: "Indonesia",
    headline: "Building Scalable Web Apps & Enterprise-Grade Systems",
    bio: "Software Engineer yang berfokus pada pengembangan aplikasi web modern dengan Next.js dan sistem backend berkinerja tinggi menggunakan ekosistem .NET (ASP.NET Core & C#). Terbiasa merancang arsitektur bersih, API berkecepatan tinggi, dan antarmuka pengguna yang responsif.",
    email: "aldii.prabowo@gmail.com", // Ganti dengan email asli
    whatsapp: "https://wa.me/6281234567890", // Ganti dengan nomor WhatsApp asli
    github: "https://github.com/Iruzzz67", // Ganti dengan username GitHub
    linkedin: "https://linkedin.com/in/fairuz-aldiansyah", // Ganti dengan LinkedIn
    resumeUrl: "#resume",
    metrics: [
      { label: "Core Stack", value: "Next.js & .NET" },
      { label: "Focus", value: "Fullstack & Enterprise" },
      { label: "Clean Code", value: "SOLID & Clean Architecture" },
      { label: "Availability", value: "Ready to Collaborate" },
    ],
  },

  skills: [
    {
      title: "Frontend Engineering",
      description: "Membangun antarmuka modern yang cepat, interaktif, dan SEO-friendly.",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", iconName: "Nextjs", isPrimary: true },
        { name: "React", level: "Advanced", iconName: "React", isPrimary: true },
        { name: "TypeScript", level: "Proficient", iconName: "TypeScript", isPrimary: true },
        { name: "Tailwind CSS", level: "Advanced", iconName: "Tailwind", isPrimary: true },
        { name: "JavaScript (ES6+)", level: "Advanced", iconName: "JavaScript" },
        { name: "HTML5 & Modern CSS", level: "Advanced", iconName: "HTML" },
      ],
    },
    {
      title: "Backend & Enterprise (.NET)",
      description: "Merancang API tangguh, microservices, dan business logic skala enterprise.",
      skills: [
        { name: ".NET Core / .NET 8+", level: "Advanced", iconName: "Dotnet", isPrimary: true },
        { name: "C#", level: "Advanced", iconName: "CSharp", isPrimary: true },
        { name: "ASP.NET Core Web API", level: "Advanced", iconName: "Api", isPrimary: true },
        { name: "Entity Framework Core", level: "Proficient", iconName: "Database", isPrimary: true },
        { name: "RESTful Architecture", level: "Advanced", iconName: "Network" },
        { name: "LINQ & Async / Await", level: "Advanced", iconName: "Cpu" },
      ],
    },
    {
      title: "Database & Storage",
      description: "Manajemen skema data relasional, indexing, dan performa query.",
      skills: [
        { name: "PostgreSQL", level: "Proficient", iconName: "Database", isPrimary: true },
        { name: "Microsoft SQL Server", level: "Proficient", iconName: "Database", isPrimary: true },
        { name: "MySQL", level: "Proficient", iconName: "Database" },
        { name: "Redis (Caching)", level: "Intermediate", iconName: "Server" },
      ],
    },
    {
      title: "DevOps & Developer Tools",
      description: "Alat kerja profesional untuk kolaborasi, containerization, dan testing.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", iconName: "Git", isPrimary: true },
        { name: "Docker", level: "Intermediate", iconName: "Docker" },
        { name: "Postman / Swagger", level: "Advanced", iconName: "Terminal" },
        { name: "Visual Studio & VS Code", level: "Advanced", iconName: "Code" },
        { name: "Vercel & CI/CD", level: "Proficient", iconName: "Cloud" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "enterprise-erp",
      title: "NextERP - Enterprise Resource & Inventory Hub",
      category: "Fullstack",
      description:
        "Sistem ERP terintegrasi untuk manajemen inventaris multi-gudang, pemantauan pesanan real-time, dan laporan keuangan otomatis dengan kontrol hak akses berbasis peran (RBAC).",
      highlight: "Kombinasi performa tinggi ASP.NET Core API dengan UI dashboard reaktif Next.js.",
      tags: ["Next.js", ".NET 8 Web API", "C#", "PostgreSQL", "Tailwind CSS"],
      architecture: [
        "Frontend: Next.js 15 App Router + Tailwind CSS",
        "Backend: ASP.NET Core 8 Web API (Clean Architecture)",
        "Database: PostgreSQL dengan EF Core & Redis Cache",
      ],
      liveUrl: "https://demo-erp.example.com",
      githubUrl: "https://github.com/Iruzzz67/nexterp-system",
      featured: true,
      imageGradient: "from-blue-600 via-indigo-600 to-purple-700",
    },
    {
      id: "mediconnect-portal",
      title: "MediConnect - Healthcare & Doctor Scheduling Portal",
      category: "Fullstack",
      description:
        "Platform layanan kesehatan untuk pemesanan jadwal konsultasi dokter, manajemen rekam medis digital (EMR), dan notifikasi otomatis kepada pasien.",
      highlight: "Enkripsi data pasien dan integrasi API yang aman sesuai standar privasi medis.",
      tags: ["Next.js", "TypeScript", "ASP.NET Core", "SQL Server", "JWT Auth"],
      architecture: [
        "Frontend: Next.js + React Hook Form + Zod",
        "Backend: ASP.NET Core Web API + Microsoft SQL Server",
        "Security: JWT Bearer Authentication & Role-Based Authorization",
      ],
      liveUrl: "https://demo-mediconnect.example.com",
      githubUrl: "https://github.com/Iruzzz67/mediconnect-portal",
      featured: true,
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-700",
    },
    {
      id: "finpulse-analytics",
      title: "FinPulse - Smart Budgeting & Subscription Tracker",
      category: "Next.js",
      description:
        "Aplikasi keuangan pribadi untuk memantau pengeluaran bulanan, melacak langganan berulang (recurring expenses), dan visualisasi alokasi dana interaktif.",
      highlight: "Visualisasi data yang responsif, visual dark-mode modern, dan analitik pengeluaran instan.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "LocalStorage/Cloud"],
      architecture: [
        "Frontend: Next.js Client & Server Components",
        "Visuals: Tailwind CSS v4 & Recharts",
        "Performance: 100/100 Lighthouse Performance score",
      ],
      liveUrl: "https://demo-finpulse.example.com",
      githubUrl: "https://github.com/Iruzzz67/finpulse-analytics",
      featured: true,
      imageGradient: "from-amber-500 via-orange-600 to-rose-700",
    },
    {
      id: "micro-gateway",
      title: "Resilient Microservices Gateway & Auth Service",
      category: ".NET / Backend",
      description:
        "Layanan gateway terpusat yang menangani routing permintaan, rate-limiting, otentikasi terpusat, dan ketahanan jaringan (fault tolerance) dengan circuit breaker.",
      highlight: "Menggunakan Polly untuk resilience policies dan benchmark throughput hingga ribuan req/sec.",
      tags: [".NET 8", "C#", "Docker", "Redis", "Ocelot / YARP", "Polly"],
      architecture: [
        "Core: ASP.NET Core Reverse Proxy",
        "Resilience: Polly Circuit Breaker & Retry Policies",
        "Monitoring: Serilog & Structured Logging",
      ],
      liveUrl: "https://api-gateway.example.com",
      githubUrl: "https://github.com/Iruzzz67/dotnet-resilient-gateway",
      featured: false,
      imageGradient: "from-purple-700 via-violet-800 to-slate-900",
    },
  ] as Project[],

  experiences: [
    {
      period: "2024 - Sekarang",
      role: "Software Engineer & Fullstack Developer",
      organization: "Professional Projects & Tech Initiatives",
      location: "Indonesia",
      description:
        "Merancang dan mengembangkan aplikasi web skala produksi dari hulu ke hilir. Mengimplementasikan arsitektur microservices dan monorepo modern menggunakan Next.js dan .NET.",
      achievements: [
        "Mengembangkan solusi web modular dengan Next.js yang memangkas waktu load halaman.",
        "Membangun REST API performa tinggi menggunakan ASP.NET Core dengan Clean Architecture.",
        "Menerapkan integrasi database relasional yang aman dengan optimasi query SQL.",
      ],
      technologies: ["Next.js", ".NET", "C#", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    },
    {
      period: "2022 - 2024",
      role: "Web Developer",
      organization: "Software Development & Engineering",
      location: "Indonesia",
      description:
        "Berfokus pada pembuatan website responsif, integrasi antarmuka pengguna dengan backend API, serta optimasi SEO dan aksesibilitas.",
      achievements: [
        "Membangun antarmuka interaktif yang dinamis dan mobile-friendly.",
        "Bekerja sama erat dengan tim untuk mendesain kontrak API yang efisien.",
        "Mengotomatisasi deployment web menggunakan Git dan platform modern seperti Vercel.",
      ],
      technologies: ["React", "JavaScript", "ASP.NET Core", "SQL Server", "Git"],
    },
  ] as ExperienceItem[],

  values: [
    {
      title: "Clean Architecture",
      desc: "Menulis kode yang terstruktur rapi, modular, mudah diuji, dan dapat dikembangkan dalam jangka panjang.",
    },
    {
      title: "Fullstack Synergy",
      desc: "Menghubungkan kelincahan frontend Next.js dengan kehandalan pemrosesan backend enterprise .NET.",
    },
    {
      title: "Performance First",
      desc: "Memastikan waktu muat website cepat, query database terindeks efisien, dan response API minim latensi.",
    },
    {
      title: "Continuous Growth",
      desc: "Selalu mengeksplorasi teknologi dan best practices terbaru untuk memberikan solusi rekayasa terbaik.",
    },
  ],
};
