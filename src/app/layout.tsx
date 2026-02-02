import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans", // Reusing the variable name expected by globals.css
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IBRAS | Hassas Mühendislik 2026",
  description: "Geleceğin mobilitesi için gelişmiş sıvı transfer sistemleri ve otomotiv bileşenleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white bg-grid-pattern`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
