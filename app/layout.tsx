import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/home/navbar";

import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Tushar More • Full Stack Developer & Data Analyst",

  description:
    "Portfolio of Tushar More — Full Stack Developer and Data Analyst building modern web experiences, scalable applications, premium UI/UX, and data-driven digital products using Next.js, TypeScript, Tailwind CSS, and modern technologies.",

    icons: {
    icon: "/logo.svg",
  },

  keywords: [
    "Tushar More",
    "Full Stack Developer",
    "Data Analyst",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
    "Tailwind CSS",
    "TypeScript",
    "Web Developer",
    "UI UX Developer",
  ],

  authors: [
    {
      name: "Tushar More",
    },
  ],

  creator: "Tushar More",

  openGraph: {
    title:
      "Tushar More • Full Stack Developer & Data Analyst",

    description:
      "Modern portfolio showcasing projects, UI/UX work, analytics, and full stack development.",

    url:
      "https://your-domain.com",

    siteName:
      "Tushar More Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >

      <body className="min-h-full flex flex-col bg-[#030712] text-white">

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}