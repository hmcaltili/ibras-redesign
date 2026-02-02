"use client";

import Footer from "@/components/Footer";
import AftermarketProducts from "@/components/AftermarketProducts";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AftermarketPage() {
    return (
        <main className="min-h-screen relative text-white pt-24 selection:bg-[#E30613] selection:text-white bg-[#0a0a0a] bg-grid-pattern">
            {/* Background Gradient Overlay to match Home/Know How darkness */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-[#0a0a0a] z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="hidden lg:flex fixed top-28 left-8 z-[60] p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl items-center justify-center"
                >
                    <ChevronLeft size={28} />
                </Link>



                {/* Main Content Area */}

                {/* Main Content Area */}
                <div className="pt-16 pb-24">
                    <AftermarketProducts />
                </div>
            </div>

            <div className="relative z-20">
                <Footer />
            </div>
        </main>
    );
}
