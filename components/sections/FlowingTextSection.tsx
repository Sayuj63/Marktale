"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FlowingTextSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;

        if (!section || !text) return;

        const SplitType = require('split-type').default;
        const split = new SplitType(text.querySelector('h2'), { types: 'chars' });

        const startX = window.innerWidth - 250;

        gsap.set(text, { x: startX });

        // Detect mobile
        const isMobile = window.innerWidth < 768;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: isMobile ? "+=2000" : "+=5000", // Shorter scroll distance on mobile
                scrub: 1,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
            }
        });

        // Horizontal scroll animation
        tl.to(text, {
            x: () => -(text.scrollWidth - window.innerWidth + 100),
            ease: "none",
            duration: isMobile ? 5 : 10 // Faster on mobile
        });

        // Bouncy entrance animation for each character
        tl.from(split.chars, {
            y: (i) => (i % 2 === 0 ? -100 : 100), // Alternating from top and bottom
            opacity: 0,
            rotation: (i) => (i % 2 === 0 ? -20 : 20),
            scale: 0.3,
            duration: isMobile ? 0.8 : 1.5, // Faster animation on mobile
            ease: "elastic.out(1, 0.5)", // Strong elastic bounce
            stagger: {
                amount: isMobile ? 3 : 7, // Less stagger on mobile for quicker animation
                from: "start",
                ease: "power1.inOut"
            }
        }, "<"); // Start at the same time as horizontal scroll

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            split.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            data-theme="light"
            className="relative h-screen bg-gradient-to-br from-[#0071CE] via-[#66B0E0] to-[#0071CE] overflow-x-hidden z-10 max-w-[100vw]"
        >
            <div className="h-full flex items-center overflow-x-hidden">
                <div
                    ref={textRef}
                    className="flex whitespace-nowrap will-change-transform"
                >
                    <h2 className="text-[8vw] font-bold text-[#FFFFFF] leading-none tracking-tighter px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                        We wanna be where the people are
                    </h2>
                </div>
            </div>
        </section>
    );
}
