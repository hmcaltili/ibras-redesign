"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimationPlaybackControls } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

// Images Config
const rawImage = "/images/hero/hortum-dis_1675854926.png";   // Bottom Layer (Revealed on Right Move)
const techImage = "/images/hero/hortum-dis_1675691928.png";  // Top Layer (Visible on Left / Clipped on Right)

interface HeroSliderProps {
    enableInteraction?: boolean;
}

export default function HeroSlider({ enableInteraction = false }: HeroSliderProps) {
    const sliderPercentage = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsRef = useRef<AnimationPlaybackControls | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Clip Path: Inset from Left
    const clipPath = useTransform(sliderPercentage, (v) => `inset(0 0 0 ${v}%)`);
    const lineLeft = useTransform(sliderPercentage, (v) => `${v}%`);

    // Auto-Animation Logic
    useEffect(() => {
        // If interaction is enabled and user is interacting, stop animation
        if (enableInteraction && (isHovered || isDragging)) {
            if (controlsRef.current) {
                controlsRef.current.stop();
            }
            return;
        }

        // Start/Resume Animation
        // Loop: 0 -> 100 -> 0 infinite
        controlsRef.current = animate(sliderPercentage, 100, {
            duration: 6.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        });

        return () => {
            if (controlsRef.current) controlsRef.current.stop();
        };
    }, [isHovered, isDragging, sliderPercentage, enableInteraction]);

    // Manual Drag Logic
    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        sliderPercentage.set(percentage);
    }, [sliderPercentage]);

    const onMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const onTouchMove = useCallback((e: React.TouchEvent | TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    }, [isDragging, handleMove]);

    const onMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (enableInteraction && isDragging) {
            window.addEventListener("mousemove", onMouseMove as any);
            window.addEventListener("touchmove", onTouchMove as any);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchend", onMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onMouseMove as any);
            window.removeEventListener("touchmove", onTouchMove as any);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchend", onMouseUp);
        };
    }, [isDragging, onMouseMove, onTouchMove, onMouseUp, enableInteraction]);

    const handleInteractionStart = (clientX: number) => {
        if (!enableInteraction) return;
        setIsDragging(true);
        handleMove(clientX);
    };

    return (
        <div className="w-full h-full flex items-center justify-center select-none overflow-hidden relative">
            <div
                ref={containerRef}
                className={`relative w-full max-w-[800px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] lg:max-w-[1800px] group ${enableInteraction ? "cursor-col-resize pointer-events-auto" : "pointer-events-none"}`}
                onMouseEnter={() => enableInteraction && setIsHovered(true)}
                onMouseLeave={() => {
                    if (enableInteraction) {
                        setIsHovered(false);
                        setIsDragging(false);
                    }
                }}
                onMouseDown={(e) => handleInteractionStart(e.clientX)}
                onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
                {/* BOTTOM LAYER (926) */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={rawImage}
                        alt="Product Internal View"
                        fill
                        className="object-contain brightness-[0.8]"
                        draggable={false}
                        priority
                    />
                    {/* Label for Bottom Layer */}
                    <div className={`absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white/80 text-xs font-mono uppercase tracking-widest pointer-events-none transition-opacity duration-300 lg:hidden ${enableInteraction ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`}>
                        Dış Katman
                    </div>
                </div>

                {/* TOP LAYER (928) */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ clipPath }}
                >
                    <Image
                        src={techImage}
                        alt="Product External View"
                        fill
                        className="object-contain brightness-[0.65]"
                        draggable={false}
                        priority
                    />
                    {/* Label for Top Layer */}
                    <div className={`absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white/80 text-xs font-mono uppercase tracking-widest pointer-events-none transition-opacity duration-300 lg:hidden ${enableInteraction ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`}>
                        İç Katman
                    </div>
                </motion.div>

                {/* Vertical Red Line */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[2px] bg-ibras-red z-20 shadow-[0_0_15px_rgba(227,6,19,0.8)]"
                    style={{ left: lineLeft }}
                >
                    {/* Glowing Effect Helper */}
                    <div className="absolute inset-0 bg-ibras-red blur-sm opacity-50 w-[4px] -left-[1px]" />

                    {/* Handle Circle - Only visible if interaction is enabled AND hovered */}
                    {enableInteraction && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-ibras-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(227,6,19,0.5)] transform transition-all duration-300 scale-0 group-hover:scale-100 group-active:scale-95 opacity-0 group-hover:opacity-100">
                            <MoveHorizontal className="text-white w-4 h-4" />
                        </div>
                    )}
                </motion.div>

            </div>
        </div>
    );
}
