"use client";

import Link from "next/link";
import { ArrowRight, Box, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function MobileHero() {
    return (
        <section className="relative w-full min-h-screen bg-grid-pattern overflow-hidden flex flex-col pt-20">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-0 pointer-events-none" />

            {/* 3D Model -> Slider */}
            <div className="relative h-[40vh] w-full flex items-center justify-center mt-8">
                <HeroSlider />
            </div>

            <div className="relative z-10 px-6 py-8 flex flex-col items-center text-center gap-8 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">

                {/* Social Icons */}
                <div className="flex gap-6 justify-center">
                    {[
                        <svg key="fb" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                        <svg key="ig" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /><path fillRule="evenodd" clipRule="evenodd" d="M2.163 12c0-3.204.012-3.584.07-4.85.148-3.252 1.691-4.771 4.919-4.919 1.266-.058 1.645-.069 4.849-.069 3.205 0 3.584.012 4.849.069 3.225.149 4.771 1.664 4.919 4.919.058 1.266.07 1.644.07 4.85 0 3.204-.012 3.584-.07 4.849-.149 3.26-1.699 4.771-4.919 4.92-.058 1.265-.07 1.644-.07 4.849 0 3.204-.013 3.583-.07 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266 1.645-.069 4.849-.069 3.204 0 3.584.012 4.849.069 3.227.149 4.771 1.664 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm3.667 0c0-3.259.014-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.689-.073 4.948-.073 3.259 0 3.668.014 4.948.072 4.358.2 6.78 2.618 6.98 6.98.058 1.281.072 1.689.072 4.948 0 3.259-.014 3.668-.072 4.948-.2 4.354-2.618 6.782-6.98 6.979-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.947.196 4.354 2.617 6.78 6.979 6.98 1.281.059 1.69.073 4.949.073zM17.5 7.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" /></svg>,
                        <svg key="li" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>,
                        <svg key="yt" role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    ].map((icon, i) => (
                        <a key={i} href="#" className="text-white hover:text-ibras-red transition-colors duration-300">
                            {icon}
                        </a>
                    ))}
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white leading-[1.1]">
                    Her Kesitinde <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        Deneyim Var
                    </span>
                </h1>

                <p className="text-base text-gray-400 leading-relaxed px-4">
                    Otomotiv sektöründe “Müşteri Memnuniyeti” ilkesi ile başarısını sürekli artıran İbraş Kauçuk Otomotiv A.Ş , İnsan Kaynakları yönetiminde de bu ilkeyi esas almaktadır.
                </p>

                <div className="flex flex-col w-full gap-4 pt-4">
                    <button className="bg-ibras-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group w-full shadow-lg shadow-ibras-red/20">
                        Ürünleri Keşfet
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link href="/hakkimizda" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm w-full flex items-center justify-center">
                        Hakkımızda
                    </Link>
                </div>
            </div>
        </section>
    );
}
