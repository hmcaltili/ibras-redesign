"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/mobile" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="IBRAS Logo"
                                width={100}
                                height={32}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        {/* Desktop Menu Hidden for Mobile Version by default, but kept structure if user requests tablet support later */}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Simplified Right Side */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#0a0a0a] border-b border-white/5 shadow-2xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {["Anasayfa", "Kurumsal", "Ürünler", "Know How", "Aftermarket"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace("ü", "u").replace("ş", "s").replace("ı", "i")}`}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-ibras-red hover:bg-white/5 transition-all duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                        <button className="w-full mt-4 bg-ibras-red hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-ibras-red/20">
                            İletişim Formu <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
