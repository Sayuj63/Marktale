"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Smartphone, CheckCircle2, User, ArrowRight, LucideIcon } from "lucide-react";

// Map suitable icons
const IconMap: Record<string, LucideIcon> = {
    "Star": Star,
    "Smartphone": Smartphone,
    "CheckCircle2": CheckCircle2,
    "User": User
};

interface BrandSpotlightProps {
    brandName: string;
    tagline: string;
    launchDate?: string;
    description: string;
    stats: { label: string; value: string; iconName: string }[];
    themeColor: string;
    image?: string;
    link: string;
    align: "left" | "right";
    gradientFrom: string;
    gradientTo: string;
    accentColor?: string; // Gold for Delhi059, light blue for Local Ride
}

export function BrandSpotlight({
    brandName,
    tagline,
    launchDate,
    description,
    stats,
    themeColor,
    image,
    link,
    align,
    gradientFrom,
    gradientTo,
    accentColor = "#ffffff"
}: BrandSpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Pixelated curtain reveal effect - 20x20 grid for smooth animation
    const rows = 20;
    const cols = 20;
    const totalBlocks = rows * cols;
    const blocks = Array.from({ length: totalBlocks });

    // Check if this is the black/gold theme (Delhi059)
    const isBlackGoldTheme = themeColor === "#000000";
    // Check if this is the glossy blue theme (Local Ride)
    const isGlossyBlueTheme = themeColor === "#0ea5e9";

    return (
        <section
            ref={containerRef}
            className="relative w-full flex items-center overflow-hidden py-16 md:py-20"
            style={{ minHeight: "85vh", maxHeight: "90vh" }}
        >
            {/* Pixelated Curtain Background - Diagonal Wave Effect */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="w-full h-full grid grid-rows-20 grid-cols-20">
                    {blocks.map((_, i) => {
                        const row = Math.floor(i / cols);
                        const col = i % cols;
                        const diagonalDelay = (row + col) * 0.02;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: diagonalDelay,
                                    ease: "easeOut"
                                }}
                                className="w-full h-full"
                                style={{
                                    backgroundColor: themeColor,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: isGlossyBlueTheme
                        ? `linear-gradient(135deg, ${gradientFrom}f0 0%, ${gradientTo}f0 50%, ${accentColor}40 100%)`
                        : `linear-gradient(135deg, ${gradientFrom}ee 0%, ${gradientTo}ee 100%)`
                }}
            />

            {/* Glossy shine effect for blue theme */}
            {isGlossyBlueTheme && (
                <div
                    className="absolute inset-0 z-[2] pointer-events-none opacity-30"
                    style={{
                        background: `radial-gradient(circle at 30% 20%, ${accentColor}60 0%, transparent 50%)`
                    }}
                />
            )}

            {/* Gold accent shine for black theme */}
            {isBlackGoldTheme && (
                <div
                    className="absolute inset-0 z-[2] pointer-events-none opacity-20"
                    style={{
                        background: `radial-gradient(circle at 70% 30%, ${accentColor}40 0%, transparent 60%)`
                    }}
                />
            )}

            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${align === "right" ? "lg:grid-flow-dense" : ""}`}>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: align === "left" ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                        className={`flex flex-col justify-center space-y-4 ${align === "right" ? "lg:col-start-2" : ""}`}
                    >
                        {/* Featured Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="inline-flex items-center gap-2 w-fit"
                        >
                            <span
                                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border shadow-lg"
                                style={{
                                    backgroundColor: isBlackGoldTheme ? `${accentColor}20` : "rgba(255,255,255,0.2)",
                                    color: isBlackGoldTheme ? accentColor : "white",
                                    borderColor: isBlackGoldTheme ? `${accentColor}40` : "rgba(255,255,255,0.3)"
                                }}
                            >
                                ✨ Featured Case Study
                            </span>
                        </motion.div>

                        {/* Brand Name */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95]"
                            style={{
                                color: isBlackGoldTheme ? accentColor : "white",
                                textShadow: isBlackGoldTheme
                                    ? `0 4px 20px ${accentColor}40, 0 0 40px ${accentColor}20`
                                    : '0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.1)'
                            }}
                        >
                            {brandName}
                        </motion.h2>

                        {/* Tagline */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white/95"
                            style={{
                                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                            }}
                        >
                            {tagline}
                        </motion.h3>

                        {/* Launch Date */}
                        {launchDate && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.75 }}
                                className="text-sm md:text-base text-white/80 font-medium"
                                style={{
                                    textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                                }}
                            >
                                {launchDate}
                            </motion.p>
                        )}

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl"
                            style={{
                                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}
                        >
                            {description}
                        </motion.p>

                        {/* Statistics Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                            className="grid grid-cols-2 gap-4 pt-2"
                        >
                            {stats.map((stat, idx) => {
                                const Icon = IconMap[stat.iconName] || Star;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="backdrop-blur-md p-4 rounded-xl border shadow-xl"
                                        style={{
                                            backgroundColor: isBlackGoldTheme ? "rgba(212, 175, 55, 0.1)" : "rgba(255,255,255,0.15)",
                                            borderColor: isBlackGoldTheme ? `${accentColor}30` : "rgba(255,255,255,0.2)"
                                        }}
                                    >
                                        <Icon
                                            className="w-6 h-6 mb-2"
                                            style={{ color: isBlackGoldTheme ? accentColor : "white" }}
                                        />
                                        <div
                                            className="text-3xl md:text-4xl font-black mb-1"
                                            style={{ color: isBlackGoldTheme ? accentColor : "white" }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-xs md:text-sm uppercase tracking-wider text-white/80 font-semibold">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 1 }}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start px-6 py-3 rounded-full font-bold text-base md:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group shadow-xl mt-2"
                            style={{
                                backgroundColor: isBlackGoldTheme ? accentColor : "white",
                                color: isBlackGoldTheme ? "#000000" : "#000000"
                            }}
                        >
                            View Live Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                    {/* Visual/Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                        className={`relative ${align === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
                    >
                        {/* Mockup Container */}
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.02 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative z-10 backdrop-blur-xl rounded-3xl p-5 shadow-2xl rotate-2"
                            style={{
                                backgroundColor: isBlackGoldTheme ? "rgba(212, 175, 55, 0.1)" : "rgba(255,255,255,0.1)",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: isBlackGoldTheme ? `${accentColor}30` : "rgba(255,255,255,0.3)"
                            }}
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 relative shadow-inner">
                                {/* Image or Placeholder */}
                                {image ? (
                                    <img
                                        src={image}
                                        alt={brandName}
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center text-6xl font-bold"
                                        style={{ color: isBlackGoldTheme ? accentColor : "rgba(255,255,255,0.4)" }}
                                    >
                                        {brandName.charAt(0)}
                                    </div>
                                )}

                                {/* Shine Overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: isGlossyBlueTheme
                                            ? "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, transparent 50%)"
                                            : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)"
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Decorative Glow Elements */}
                        <div
                            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl z-0 animate-pulse"
                            style={{
                                backgroundColor: isBlackGoldTheme ? `${accentColor}20` : "rgba(255,255,255,0.1)"
                            }}
                        />
                        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-black/20 rounded-full blur-3xl z-0" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
