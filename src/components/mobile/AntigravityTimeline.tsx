"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, animate, PanInfo, AnimatePresence } from "framer-motion";
import { milestones } from "../Timeline";
import Image from "next/image";

import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function AntigravityTimeline() {
    // Reverse milestones to show 2024 at top/start if desired.
    const reversedMilestones = [...milestones].reverse();
    const [activeIndex, setActiveIndex] = useState(0);
    const y = useMotionValue(0);

    // Calculate which item is active based on drag
    // Simplified logic: strict 3 visible items.
    const handleDragEnd = (event: any, info: PanInfo) => {
        const offset = info.offset.y;
        const velocity = info.velocity.y;

        let direction = 0;
        if (offset > 50 || velocity > 200) direction = -1;
        else if (offset < -50 || velocity < -200) direction = 1;

        let newIndex = activeIndex + direction;

        if (newIndex < 0) newIndex = 0;
        if (newIndex >= reversedMilestones.length) newIndex = reversedMilestones.length - 1;

        setActiveIndex(newIndex);
        animate(y, 0, { type: "spring", stiffness: 200, damping: 25 });
    };

    const handlePrev = () => {
        const newIndex = Math.max(0, activeIndex - 1);
        setActiveIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(reversedMilestones.length - 1, activeIndex + 1);
        setActiveIndex(newIndex);
    };

    const getItem = (offset: number) => {
        const index = activeIndex + offset;
        if (index < 0 || index >= reversedMilestones.length) return null;
        return reversedMilestones[index];
    };

    const prevItem = getItem(-1);
    const currentItem = getItem(0);
    const nextItem = getItem(1);

    return (
        <div className="w-full h-full relative flex flex-col items-center justify-start">

            <div className="w-full flex items-center justify-center gap-4 px-6 lg:-translate-y-[30px]">

                {/* Desktop Left Arrow (NOW: Right Arrow/Next - Swapped Position) */}
                <div className="hidden lg:flex flex-col items-center justify-center z-50">
                    {/* Spacer to align with Current Date (matches Prev Year height) */}
                    <div className="h-[80px]" />
                    <div className="h-[120px] flex items-center justify-center">
                        <button
                            onClick={handleNext}
                            disabled={!nextItem}
                            className={`p-3 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm shadow-xl ${!nextItem ? 'opacity-30 cursor-not-allowed' : 'hover:bg-ibras-red hover:border-ibras-red'}`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                </div>

                {/* Dates Column */}
                <motion.div
                    className="relative z-10 flex flex-col items-center gap-0 touch-none w-auto pr-8 lg:pr-0 lg:mx-4"
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.05}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    style={{ y }}
                >
                    {/* PREVIOUS YEAR */}
                    <div className="h-[80px] w-full flex items-center justify-center opacity-0 scale-90 blur-[1px] transition-all duration-300">
                        {prevItem ? (
                            <span className="text-4xl font-normal text-gray-400 font-mono tracking-widest">{prevItem.year}</span>
                        ) : (
                            <div className="h-8 w-8" />
                        )}
                    </div>

                    {/* CURRENT YEAR - FOCUSED */}
                    <div className="h-[120px] w-full flex flex-col items-center justify-center scale-100 z-30 transition-all duration-300 relative">
                        {currentItem && (
                            <>
                                {/* Year */}
                                <span className="text-6xl font-black text-ibras-red tracking-widest font-mono">
                                    {currentItem.year}
                                </span>
                            </>
                        )}
                    </div>

                    {/* NEXT YEAR - Hidden on Desktop (lg:hidden) */}
                    <div className="h-[80px] w-full flex items-center justify-center opacity-40 scale-90 blur-[1px] transition-all duration-300 lg:hidden">
                        {nextItem ? (
                            <span className="text-4xl font-normal text-gray-400 font-mono tracking-widest">{nextItem.year}</span>
                        ) : (
                            <div className="h-8 w-8" />
                        )}
                    </div>
                </motion.div>

                {/* Desktop Right Arrow (NOW: Left Arrow/Prev - Swapped Position) */}
                <div className="hidden lg:flex flex-col items-center justify-center z-50">
                    {/* Spacer to align with Current Date */}
                    <div className="h-[80px]" />
                    <div className="h-[120px] flex items-center justify-center">
                        <button
                            onClick={handlePrev}
                            disabled={!prevItem}
                            className={`p-3 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm shadow-xl ${!prevItem ? 'opacity-30 cursor-not-allowed' : 'hover:bg-ibras-red hover:border-ibras-red'}`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Arrows Column (Right) - Hidden on Desktop */}
                <div className="flex lg:hidden flex-col items-center justify-center z-50">
                    {/* Spacer for Invisible Previous Item */}
                    <div className="h-[80px]" />

                    {/* Up Arrow aligned with Red Date */}
                    <div className="h-[120px] flex items-center justify-center">
                        <button
                            onClick={handlePrev}
                            disabled={!prevItem}
                            className={`p-3 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm shadow-xl ${!prevItem ? 'opacity-30 cursor-not-allowed' : 'hover:bg-ibras-red hover:border-ibras-red'}`}
                        >
                            <ChevronUp size={24} />
                        </button>
                    </div>

                    {/* Down Arrow aligned with Next Date */}
                    <div className="h-[80px] flex items-center justify-center">
                        <button
                            onClick={handleNext}
                            disabled={!nextItem}
                            className={`p-3 rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm shadow-xl ${!nextItem ? 'opacity-30 cursor-not-allowed' : 'hover:bg-ibras-red hover:border-ibras-red'}`}
                        >
                            <ChevronDown size={24} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Desktop Horizontal Timeline Navigation (Visible on PC) */}
            <div className="hidden lg:flex w-full px-12 mt-[95px] mb-4 items-center justify-center relative">
                <div className="w-full relative px-2 overflow-visible origin-top">
                    {/* Horizontal Line background */}
                    <div className="absolute top-1/2 left-0 w-full h-[4px] bg-white -translate-y-1/2 z-0 rounded-full opacity-20" />


                    <div className="flex flex-row justify-between items-center w-full relative z-10">
                        {milestones.map((item, index) => {
                            // milestones is 1980...2024 (Left to Right)
                            // To check if this 'item' is active:
                            // activeIndex uses reversedMilestones (2024...1980).
                            // So if milestones[index].year === currentItem.year
                            const isSelected = currentItem && item.year === currentItem.year;
                            // For styling logic
                            const isOnTop = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        // Find index in reversedMilestones
                                        const revIndex = reversedMilestones.findIndex(m => m.year === item.year);
                                        if (revIndex !== -1) setActiveIndex(revIndex);
                                    }}
                                    onMouseEnter={() => {
                                        const revIndex = reversedMilestones.findIndex(m => m.year === item.year);
                                        if (revIndex !== -1) setActiveIndex(revIndex);
                                    }}
                                    className="relative flex items-center group cursor-pointer min-w-[40px] h-[100px] justify-center"
                                    style={{ flex: 1 }}
                                >
                                    {/* Vertical Connector Line */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] -z-10 transition-colors duration-300 ${isSelected ? 'bg-ibras-red' : 'bg-white/20 group-hover:bg-ibras-red'} ${isOnTop ? 'bottom-1/2' : 'top-1/2'}`} style={{ height: '66px' }} />

                                    {/* Dot */}
                                    <motion.div
                                        animate={{
                                            backgroundColor: isSelected ? '#E30613' : '#ffffff',
                                            scale: isSelected ? 1.5 : 1
                                        }}
                                        className="w-3 h-3 rounded-full z-10"
                                    />

                                    {/* Image Icon (Visible by Default) - "Icons visible by default" */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 border rounded-lg overflow-hidden transition-all duration-300 z-20 shadow-lg ${isSelected ? 'bg-ibras-red border-ibras-red ring-2 ring-ibras-red/50 scale-110' : 'bg-black border-white/20 group-hover:bg-ibras-red group-hover:border-ibras-red group-hover:scale-110'} ${isOnTop ? 'bottom-full mb-4' : 'top-full mt-4'}`}>
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                    {/* Title Label (Visible ONLY on Hover or Active) */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-30 transition-all duration-300 pointer-events-none ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'} ${isOnTop ? 'bottom-full mb-24' : 'top-full mt-24'}`}>
                                        <div className="bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg shadow-xl">
                                            <span className="text-white text-xs font-bold">{item.title}</span>
                                        </div>
                                    </div>

                                    {/* Dates (Removed as requested: "delete the dates above and below them") */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Active Date Details Trigger */}
            <div className="w-full px-6 mt-8 h-[120px] relative lg:hidden">
                <AnimatePresence mode="wait">
                    {currentItem && (
                        <motion.div
                            key={currentItem.year}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0a0a0a] border border-[#E30613] shadow-[0_0_15px_rgba(227,6,19,0.3)] rounded-xl p-4 flex items-center gap-4 w-full h-full overflow-hidden relative"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

                            {/* Icon/Image */}
                            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-[#E30613] bg-[#E30613] shadow-[0_0_10px_rgba(227,6,19,0.2)]">
                                <Image
                                    src={currentItem.image}
                                    alt={currentItem.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Title */}
                            <div className="flex flex-col relative z-10">
                                <h3 className="text-white font-bold text-lg leading-tight">{currentItem.title}</h3>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
