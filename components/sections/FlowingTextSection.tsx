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

        // Split text for bounce animation
        // We need to dynamically import SplitType or ensure it's available
        // Since we used it in Hero, it should be installed.
        // We'll use a dynamic import or assume it's imported at top (need to add import)
        const SplitType = require('split-type').default;
        const split = new SplitType(text.querySelector('h2'), { types: 'chars' });

        // Initial state: Text positioned to the right, only showing first few words
        // We set x to window.innerWidth - 200px (approx width of "We wanna")
        const startX = window.innerWidth - 250;

        gsap.set(text, { x: startX });

        // Create a timeline for both horizontal scroll and entrance animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=5000", // Increased scroll distance for pinning
                scrub: 1,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
            }
        });

        // Horizontal scroll animation
        // Moves text to the left until the end is fully visible
        tl.to(text, {
            x: () => -(text.scrollWidth - window.innerWidth + 100), // Stop when end is fully visible
            ease: "none",
            duration: 10 // Relative duration for the scroll
        });

        // Entrance Bounce Animation (Staggered Pop-in)
        // As text moves, letters pop in. We sync this with the scroll.
        // We want the animation to happen as they enter the viewport.
        // Since we are scrubbing the whole timeline, we can stagger the 'from' state.
        // However, 'from' animations on a scrubbed timeline can be tricky if not timed right relative to the scroll.
        // A simpler approach for "entrance" effect on horizontal scroll is to use a separate ScrollTrigger for each char 
        // OR just animate them all with a stagger that roughly matches their appearance.
        // Given the "flow" requirement, let's try a staggered animation on the timeline.

        tl.from(split.chars, {
            y: 100,
            opacity: 0,
            rotation: 10,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: {
                amount: 8, // Spread the animation over the duration of the scroll
                from: "start"
            }
        }, "<"); // Start at the same time as the horizontal scroll

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
