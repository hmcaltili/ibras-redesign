"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AntigravityTimeline from "@/components/mobile/AntigravityTimeline";

export default function MobileAboutPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            title: "Misyonumuz",
            description: "Esnek ve etkili çözümler geliştirerek akışkan transfer sistemleri üretmek.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
            )
        },
        {
            title: "Vizyonumuz",
            description: "Türkiye'de ihracat yapan en büyük ilk 1000 firma arasına girmek.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
            )
        },
        {
            title: "Değerlerimiz",
            description: (
                <>
                    İşbirliği, <br />
                    İnsan Odaklılık, <br />
                    Müşteri Odaklılık, <br />
                    Sürekli Gelişim
                </>
            ),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 2L13.5 5.5L17 7L13.5 8.5L12 12L10.5 8.5L7 7L10.5 5.5L12 2Z" fill="currentColor" opacity="0.8" />
                    <path d="M5 6L5.8 7.8L7.5 8.5L5.8 9.2L5 11L4.2 9.2L2.5 8.5L4.2 7.8L5 6Z" fill="currentColor" opacity="0.6" />
                    <path d="M19 6L19.8 7.8L21.5 8.5L19.8 9.2L19 11L18.2 9.2L16.5 8.5L18.2 7.8L19 6Z" fill="currentColor" opacity="0.6" />
                    <path d="M2.2 13.5C2.2 13.5 4 11.5 6 11.5C8 11.5 9.5 13 9.5 13L10.5 21H3.5L2.2 13.5Z" />
                    <path d="M21.8 13.5C21.8 13.5 20 11.5 18 11.5C16 11.5 14.5 13 14.5 13L13.5 21H20.5L21.8 13.5Z" />
                </svg>
            )
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;

            const container = scrollContainerRef.current;
            const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            const children = Array.from(container.children);
            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                const childCenter = rect.left + rect.width / 2;
                const distance = Math.abs(containerCenter - childCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            // Initial check
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <main className="min-h-screen bg-[#0a0a0a] bg-grid-pattern text-white selection:bg-[#E30613] selection:text-white pt-9">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-[#0a0a0a] z-0 pointer-events-none fixed" />

            {/* Back to Home Button - Desktop Only */}
            <Link
                href="/"
                className="hidden lg:flex fixed top-28 left-8 z-[60] p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl items-center justify-center"
            >
                <ChevronLeft size={28} />
            </Link>

            {/* Vertical Chronological Picker */}
            <div className="relative z-10 w-full min-h-[85vh] pt-4 mt-5 lg:mt-0 pb-20">
                <AntigravityTimeline />
            </div>

            {/* Horizontal Scrollable Cards */}
            <div className="relative z-10 w-full mt-5 mb-16">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 pb-8 px-[20vw] snap-x snap-mandatory scrollbar-hide"
                >
                    {cards.map((card, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                className={`min-w-[220px] w-[60vw] min-h-[220px] bg-[#0a0a0a] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 snap-center transition-all duration-300 transform relative overflow-hidden group ${isActive
                                    ? "scale-100 opacity-100 border border-[#E30613] shadow-[0_0_20px_rgba(227,6,19,0.2)] lg:scale-90 lg:opacity-100 lg:border-white/20 lg:shadow-none lg:hover:border-[#E30613] lg:hover:shadow-[0_0_20px_rgba(227,6,19,0.2)] lg:hover:scale-100"
                                    : "scale-90 opacity-50 border border-white/10 lg:opacity-100 lg:border-white/20 lg:hover:border-[#E30613] lg:hover:shadow-[0_0_20px_rgba(227,6,19,0.2)] lg:hover:scale-100"
                                    }`}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-0" />

                                <div className={`w-10 h-10 relative transition-all duration-300 z-10 ${isActive ? "text-[#E30613] scale-110 lg:text-white lg:scale-100 lg:group-hover:text-[#E30613] lg:group-hover:scale-110" : "text-gray-500 lg:text-white lg:group-hover:text-[#E30613] lg:group-hover:scale-110"}`}>
                                    {card.icon}
                                </div>
                                <div className="w-full z-10 px-4 pb-4">
                                    <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isActive ? "text-[#E30613] lg:text-white lg:group-hover:text-[#E30613]" : "text-gray-400 lg:text-white lg:group-hover:text-[#E30613]"}`}>
                                        {card.title}
                                    </h3>
                                    <p className={`text-xs text-gray-300 leading-relaxed transition-opacity duration-300 ${isActive ? "opacity-100 lg:opacity-80 lg:group-hover:opacity-100" : "opacity-60 lg:opacity-80 lg:group-hover:opacity-100"}`}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="relative z-10">
                <Footer />
            </div>
        </main>
    );
}
