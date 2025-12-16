"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const samples = [
    { type: "Social Media", title: "Instagram Reels", color: "bg-pink-500" },
    { type: "Creatives", title: "Brand Identity", color: "bg-purple-600" },
    { type: "Blog", title: "SEO Articles", color: "bg-blue-500" },
    { type: "UI/UX", title: "App Interface", color: "bg-orange-500" },
];

export function ContentSamples() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

    return (
        <section ref={targetRef} className="h-[200vh] bg-neutral-900 relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">Our Work</h2>
                    <p className="text-gray-400">A glimpse into what we create.</p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-10 pt-20">
                    {samples.map((sample, index) => (
                        <div
                            key={index}
                            className={`group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] overflow-hidden rounded-3xl ${sample.color} flex-shrink-0`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-3xl font-bold text-white/90">{sample.title}</h3>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                                    {sample.type}
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* Add a generic 'More' card */}
                    <div className="h-[450px] w-[350px] md:h-[600px] md:w-[500px] flex items-center justify-center rounded-3xl bg-neutral-800 flex-shrink-0">
                        <h3 className="text-2xl text-gray-500">And much more...</h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
