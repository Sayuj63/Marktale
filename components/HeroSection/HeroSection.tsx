"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) return;

        // Text Reveal Animation
        const chars = new SplitType(textRef.current!, { types: "chars" });

        gsap.from(chars.chars, {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 0.5,
        });

        return () => {
            chars.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black text-white pt-20"
            data-theme="dark"
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-[1]" />

            {/* Content */}
            <div className="relative z-[2] container mx-auto px-4 h-full flex flex-col justify-center items-center pt-12 pb-32 text-center">
                <div className="max-w-4xl">
                    <h1
                        ref={textRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        Build, Launch & Scale Your Business with <span className="text-[#1a8dcc]">MarkTale</span>
                        <span className="block text-2xl md:text-4xl mt-4 font-normal text-[#ffdd58] italic">– Powered by AI</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        We help founders, startups, and businesses turn ideas into revenue-driven brands using strategy, technology, and AI-powered marketing.
                    </p>

                    <ul className="flex flex-wrap justify-center gap-4 mb-10 text-gray-200 text-sm md:text-lg">
                        <li className="flex items-center gap-2">
                            <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                            30+ National & International Brands Built
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                            Apps, Websites & Businesses Launched from Scratch
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                            In-house Tech + Marketing Team
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                            Transparent Pricing | No Hidden Costs
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#ffdd58] text-black text-lg font-bold rounded-lg hover:bg-[#ffe580] transition-colors inline-block"
                        >
                            Book Free Strategy Call
                        </Link>
                        <Link
                            href="/projects"
                            className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-black transition-colors inline-block"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>

            {/* Offer Strip */}
            <div className="absolute bottom-0 w-full bg-[#1a8dcc] text-white z-20 py-3 md:py-4 px-4 overflow-hidden">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
                    <p className="font-bold text-sm md:text-base animate-pulse">
                        🔥 Startup Building Plans starting at ₹15,000/month
                    </p>
                    <p className="text-sm md:text-base opacity-90 mt-1 md:mt-0">
                        ⏳ Limited-time offers available
                    </p>
                </div>
            </div>

        </section>
    );
}
