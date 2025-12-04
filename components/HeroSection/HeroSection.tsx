"use client";

import { useEffect, useRef } from "react";
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
        const bg = bgRef.current;

        if (!container || !text || !bg) return;

        // Parallax Effect for Background (Desktop only)
        if (typeof window !== 'undefined' && window.matchMedia("(min-width: 769px)").matches) {
            gsap.to(bgRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: "30%", // Move background slower than scroll
                ease: "none",
            });
        }

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
            className="relative h-screen w-full overflow-hidden bg-black text-white"
            data-theme="dark"
        >
            {/* Background Video */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/A_seamless_looping_202512021951.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/* Content */}
            <div className="relative z-[2] flex h-full flex-col items-center justify-end pb-10 md:pb-20 text-center">
                <h1
                    ref={textRef}
                    className="text-3xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tighter max-w-[90vw] px-4 text-[#ffdd58]"
                >
                    MarkTaleWorld - <br /> 
                    <span className="relative inline-block mt-2">
                        <span className="absolute -inset-4 border border-[#ffdd58]/60 rounded-[50%] animate-orbit"></span>
                        <span className="italic relative z-10">Powered by Ai</span>
                    </span>
                </h1>
                <p className="mt-8 text-xl md:text-2xl font-medium max-w-2xl px-4 text-white">
                    Online Internet Marketing Company That Grows Your Brand
                </p>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
}
