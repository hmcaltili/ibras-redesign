"use client";

import { useRef, useState, useEffect } from "react";
import { Anchor, Zap, Tractor, TrainFront, CarFront, ChevronRight } from "lucide-react";

export default function BentoGrid() {
    const items = [
        {
            title: "Deniz Taşıtları",
            icon: <Anchor className="w-10 h-10 text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors" />,
            image: "/sektörler/Deniz Taşıtları.jpg"
        },
        {
            title: "Ev Aletleri",
            icon: <Zap className="w-10 h-10 text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors" />,
            image: "/sektörler/Ev Aletleri.jpg"
        },
        {
            title: "Tarım ve Sanayi",
            icon: <Tractor className="w-10 h-10 text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors" />,
            image: "/sektörler/Tarım ve Sanayi.jpg"
        },
        {
            title: "Raylı Sistemler",
            icon: <TrainFront className="w-10 h-10 text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors" />,
            image: "/sektörler/Raylı Sistemler.png"
        },
        {
            title: "Otomotiv Sanayi",
            icon: <CarFront className="w-10 h-10 text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors" />,
            image: "/sektörler/Otomotiv Sanayi.jpg"
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            // Disable and clear on desktop
            if (window.innerWidth >= 1024) {
                setActiveIndex(null);
                return;
            }

            let closestIndex = null;
            let closestDistance = Infinity;
            const center = window.innerHeight / 2;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(center - cardCenter);

                if (distance < closestDistance && rect.top < window.innerHeight && rect.bottom > 0) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <section id="products" className="py-8 lg:py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Aktif Rol Aldığımız <span className="text-ibras-red">Alanlar</span>
                    </h2>
                    <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
                        Ürettiğimiz Geniş Ürün Yelpazesi İle İbraş Kauçuk Olarak Dünyanın Dört Bir Yanında Adımızı Ve Kalitemizi Yaşatıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={`relative overflow-hidden rounded-2xl border bg-white/5 p-6 transition-all duration-300 group flex flex-col items-center justify-center text-center h-[280px] ${activeIndex === i ? "border-ibras-red mobile-active" : "border-white/10 hover:border-ibras-red"
                                }`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-[.mobile-active]:scale-110"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 group-[.mobile-active]:bg-black/40 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 group-hover:opacity-50 group-[.mobile-active]:opacity-50 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 group-[.mobile-active]:bg-white/10 group-hover:scale-110 group-[.mobile-active]:scale-110 transition-all duration-300 shadow-2xl shadow-black/50 backdrop-blur-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-ibras-red group-[.mobile-active]:text-ibras-red transition-colors drop-shadow-xl">{item.title}</h3>
                            </div>

                            <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 group-[.mobile-active]:opacity-100 transition-opacity duration-300 z-10">
                                <ChevronRight className="text-ibras-red" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
