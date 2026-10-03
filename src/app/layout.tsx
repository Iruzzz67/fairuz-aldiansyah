import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairuz Aldiansyah Prabowo | Software Engineer & Web Developer",
  description:
    "Website portofolio profesional Fairuz Aldiansyah Prabowo. Software Engineer & Web Developer berfokus pada Next.js, React, TypeScript, dan .NET (ASP.NET Core & C#).",
  keywords: [
    "Fairuz Aldiansyah Prabowo",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    ".NET Developer",
    "ASP.NET Core",
    "C# Developer",
    "Fullstack Developer Indonesia",
    "Portofolio Developer",
  ],
  authors: [{ name: "Fairuz Aldiansyah Prabowo" }],
  openGraph: {
    title: "Fairuz Aldiansyah Prabowo | Software Engineer & Web Developer",
    description:
      "Membangun aplikasi web modern dengan Next.js dan sistem enterprise berkinerja tinggi dengan .NET.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
