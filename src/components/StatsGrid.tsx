"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef } from "react";
import { Award, Settings, Warehouse, Send, Factory, Globe, Users, Package, ChevronLeft, ChevronRight } from "lucide-react";

export default function StatsGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const rotation = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const stats = [
        { value: "45", label: "Yıllık Deneyim", icon: Award },
        { value: "3.5 M", label: "Üretim Hacmi", icon: Settings },
        { value: "3500", unit: "m²", label: "Depolama Alanı", icon: Warehouse },
        { value: "%80", label: "İhracat Oranı", icon: Send },
        { value: "16K", unit: "m²", label: "Üretim Tesisi", icon: Factory },
        { value: "47", label: "Ülkeye İhracat", icon: Globe },
        { value: "65K", unit: "m²", label: "Yeni Tesis", icon: Users },
        { value: "120K+", label: "Eşdeğer Ürün", icon: Package }
    ];

    const FACE_COUNT = stats.length;
    const SLOT_WIDTH = 180;
    const FACE_WIDTH = 176; // Tight gap
    const FACE_HEIGHT = 340;
    const RADIUS = (SLOT_WIDTH / 2) / Math.tan(Math.PI / FACE_COUNT);
    const ANGLE_PER_FACE = 360 / FACE_COUNT;

    const handleRotate = (direction: 'left' | 'right') => {
        const currentRotation = rotation.get();
        const targetRotation = direction === 'left' ? currentRotation + ANGLE_PER_FACE : currentRotation - ANGLE_PER_FACE;
        animate(rotation, targetRotation, { duration: 0.6, type: "spring", stiffness: 100 });
    };

    return (
        <section className="min-h-screen snap-start snap-always flex flex-col justify-center items-center bg-[#0a0a0a] relative py-8 lg:py-32 overflow-hidden">
            <div className="w-full max-w-[1200px] flex flex-col items-center justify-center relative z-10" style={{ perspective: "1500px" }}>

                {/* Section Header */}
                <div className="mb-10 lg:mb-20 text-center relative z-20 pointer-events-none">
                    <span className="text-[#E30613] font-mono text-xs tracking-widest uppercase mb-3 block">Rakamlarla İbraş</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Sayıların Gücüne <br className="hidden md:block" /> İnanıyoruz
                    </h2>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative flex items-center justify-center w-full scale-75 lg:scale-100">

                    {/* Navigation Buttons */}
                    <div className="absolute lg:inset-x-0 -bottom-32 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-between items-center gap-8 pointer-events-none px-4 md:px-32 z-50">
                        <button
                            onClick={() => handleRotate('left')}
                            className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={() => handleRotate('right')}
                            className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E30613] hover:border-[#E30613] transition-all duration-300 backdrop-blur-sm shadow-xl"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>

                    {/* Cylinder */}
                    <motion.div
                        ref={containerRef}
                        style={{
                            rotateY: rotation,
                            rotateX: -8,
                            transformStyle: "preserve-3d",
                            width: FACE_WIDTH,
                            height: FACE_HEIGHT
                        }}
                        className="relative cursor-grab active:cursor-grabbing touch-pan-y"
                        onPan={(e, info) => {
                            rotation.set(rotation.get() + info.delta.x * 0.2);
                        }}
                        onPanEnd={() => {
                            const currentRotation = rotation.get();
                            const snapAngle = Math.round(currentRotation / ANGLE_PER_FACE) * ANGLE_PER_FACE;
                            animate(rotation, snapAngle, {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 30
                            });
                        }}
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            const isHovered = hoveredIndex === index;
                            const angle = ANGLE_PER_FACE * index;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                                        width: FACE_WIDTH,
                                        height: FACE_HEIGHT,
                                        transformStyle: "preserve-3d"
                                    }}
                                    className="absolute top-0 left-0"
                                >
                                    <motion.div
                                        className="w-full h-full relative cursor-pointer select-none"
                                        style={{ transformStyle: "preserve-3d" }}
                                        animate={{ scale: isHovered ? 1.05 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* FRONT FACE */}
                                        <div
                                            className="absolute inset-0 p-6 rounded-xl border border-white/10 flex flex-col items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                backgroundColor: '#500000' // Dark Red from Logo (Estimated)
                                            }}
                                        >
                                            {/* Icon */}
                                            <div className="w-full flex justify-between items-start relative z-10">
                                                <div className="p-2 rounded-lg bg-black/20 border border-white/10 text-white">
                                                    <Icon size={20} />
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="flex-1 flex flex-col items-center justify-center text-center w-full relative z-10">
                                                <span className="text-5xl font-black text-white tracking-tighter block drop-shadow-xl mb-1">
                                                    {stat.value}
                                                </span>
                                                {stat.unit && (
                                                    <div className="text-white/60 font-bold text-xs">{stat.unit}</div>
                                                )}
                                                <div className="mt-4 px-3 py-1 rounded-full bg-black/20 text-[10px] uppercase tracking-widest text-white/90 font-bold border border-white/5">
                                                    {stat.label}
                                                </div>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-xl" />
                                        </div>

                                        {/* BACK FACE */}
                                        <div
                                            className="absolute inset-0 rounded-xl"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                transform: 'rotateY(180deg)',
                                                backgroundColor: '#E30613' // Lighter solid shade (Brand Red)
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute inset-0 bg-radial-gradient from-[#E30613]/5 to-transparent pointer-events-none" />
        </section>
    );
}