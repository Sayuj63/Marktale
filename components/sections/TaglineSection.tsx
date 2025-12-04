"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger);

const taglines = [
    { text: "A digital agency built for", style: "normal" },
    { text: "breakthroughs.", style: "italic-purple" },
    { text: "From clicks to conversions", style: "normal" },
    { text: "we make your brand unforgettable.", style: "italic-blue" },
];

export function TaglineSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const taglinesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Animate all tagline underlines
        taglinesRef.current.forEach((tagline) => {
            if (tagline) {
                const underline = tagline.querySelector(".underline-element");

                gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: tagline,
                        start: "top 80%",
                        end: "top 50%",
                        scrub: 1,
                    },
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            data-theme="light"
            className="py-20 md:py-32 px-4 md:px-8 bg-[#FFFFFF] text-[#333333] flex justify-center overflow-hidden"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full flex items-center justify-center">
                    <DotLottieReact
                        src="/rocket-man.json"
                        loop
                        autoplay
                        className="w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col items-start gap-3 md:gap-5">
                    {taglines.map((tagline, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                taglinesRef.current[index] = el;
                            }}
                            className="relative inline-block"
                        >
                            <h3 className={`text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug ${
                                tagline.style === 'italic-purple' ? 'italic text-[#0071CE]' : 
                                tagline.style === 'italic-blue' ? 'italic text-[#66B0E0]' : 'text-[#333333]'
                            }`}>
                                {tagline.text}
                            </h3>
                            <div className={`underline-element absolute bottom-0 left-0 w-full h-[3px] origin-left scale-x-0 ${
                                tagline.style === 'italic-purple' ? 'bg-[#0071CE]' : 
                                tagline.style === 'italic-blue' ? 'bg-[#66B0E0]' : 'bg-[#333333]'
                            }`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
