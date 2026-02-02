"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const milestones = [
    { year: "1980", title: "İbraş Kuruldu", description: "Yolculuğumuz başladı.", image: "/images/hakkimizda/1890.jpg" },
    { year: "1983", title: "50 Farklı Ürün", description: "Ürün gamımız genişliyor.", image: "/images/hakkimizda/1983.jpg" },
    { year: "1990", title: "Ekstrüzyon ile Üretim", description: "Teknolojik yatırımlar.", image: "/images/hakkimizda/1990.jpg" },
    { year: "1997", title: "İlk İhracat", description: "Global pazarlara açılış.", image: "/images/hakkimizda/1997.jpg" },
    { year: "2000", title: "Yeni Tesis (600 m²)", description: "Büyük üretim tesisi.", image: "/images/hakkimizda/2000.jpg" },
    { year: "2005", title: "Türkiye Distribütörlüğü Kuruldu", description: "Satış ağı güçlendi.", image: "/images/hakkimizda/2005.jpg" },
    { year: "2006", title: "ISO 9001 Sertifikası", description: "Kalite tescillendi.", image: "/images/hakkimizda/2006.jpg" },
    { year: "2008", title: "Hava Filtresi & Turbo Hortum", description: "Üretim genişlemesi.", image: "/images/hakkimizda/2008.jpg" },
    { year: "2012", title: "Yakıt Hortumu Üretim Hattı", description: "Kritik bileşenler.", image: "/images/hakkimizda/2012.jpg" },
    { year: "2017", title: "16000 m² Tesis", description: "Dev tesis yatırımı.", image: "/images/hakkimizda/2017.jpg" },
    { year: "2018", title: "Hat Yatırımı", description: "Otomasyon ve Modernizasyon.", image: "/images/hakkimizda/2018.jpg" },
    { year: "2021", title: "IATF 16949 Sertifikası", description: "Otomotiv zirvesi.", image: "/images/hakkimizda/2021.jpg" },
    { year: "2022", title: "Plastik Ekstrüzyon Hattı", description: "Yenilikçi teknikler.", image: "/images/hakkimizda/2022.jpg" },
    { year: "2023", title: "ISO 14001 - ISO 45001 Belgesi", description: "Çevre ve İSG Sertifikaları.", image: "/images/hakkimizda/2023.jpg" },
    { year: "2024", title: "ISO 14064-1:2018 Belgesi", description: "Yeşil İmza ve Karbon Ayak İzi.", image: "/images/hakkimizda/2024.jpg" },
];

export default function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-transparent w-full pt-72 pb-16 hidden lg:flex flex-col items-center justify-start relative px-4">
            {/* Desktop View Only */}
            <div className="w-full relative px-2 mb-32 overflow-visible scale-[0.70] origin-top">
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-white -translate-y-1/2 z-0 rounded-full" />
                <motion.div
                    animate={{ width: hoveredIndex !== null ? `${((hoveredIndex + 1) / milestones.length) * 100}%` : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-0 h-[4px] bg-[#E30613] -translate-y-1/2 z-[1] rounded-full"
                />
                <div className="flex flex-row justify-between items-center w-full relative z-10">
                    {milestones.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        const isOnTop = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative flex items-center group cursor-pointer min-w-[70px]"
                                style={{ flex: 1 }}
                            >
                                <motion.div
                                    animate={{ backgroundColor: isHovered ? '#E30613' : '#ffffff' }}
                                    className={`absolute left-1/2 -translate-x-1/2 w-[2px] z-0 ${isOnTop ? 'bottom-1/2 h-20' : 'top-1/2 h-20'}`}
                                />
                                <motion.div
                                    animate={{ backgroundColor: isHovered ? '#E30613' : '#ffffff' }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10"
                                />
                                <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center ${isOnTop ? 'bottom-1/2 mb-20 flex-col-reverse' : 'top-1/2 mt-20 flex-col'}`}>
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                            backgroundColor: isHovered ? '#E30613' : '#1f1f1f',
                                            borderColor: isHovered ? '#E30613' : 'rgba(255,255,255,0.2)'
                                        }}
                                        className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-300 z-10 relative shadow-xl overflow-hidden ${isHovered ? 'shadow-red-900/50' : 'shadow-black/50'}`}
                                    >
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                    </motion.div>
                                    <div className={`flex items-center ${isOnTop ? 'flex-col-reverse mb-3' : 'flex-col mt-3'}`}>
                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                animate={{
                                                    color: isHovered ? '#E30613' : 'rgba(255,255,255,0.7)',
                                                    fontWeight: isHovered ? 700 : 500,
                                                    scale: isHovered ? 1.1 : 1,
                                                    y: isHovered ? (isOnTop ? -4 : 4) : 0
                                                }}
                                                className="font-mono text-xs tracking-widest whitespace-nowrap z-20"
                                            >
                                                {item.year}
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0, marginTop: isHovered ? 4 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="w-44 text-center pointer-events-none overflow-hidden"
                                            >
                                                <h3 className="text-white font-bold text-xs leading-tight">{item.title}</h3>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}