"use client";

import { motion } from "framer-motion";

export function AboutUs() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

                {/* Image / Illustration Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800"
                >
                    {/* Placeholder for illustration */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        <span className="text-6xl">🎨</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-[#ffdd58] font-bold text-2xl">
                            30+ Brands <br /> Scaled Locally & Globally
                        </div>
                    </div>
                </motion.div>

                {/* Text Content Side */}
                <div className="flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Who We Are
                    </motion.h2>

                    <div className="space-y-6 text-gray-300 text-lg">
                        <p>
                            <span className="text-white font-semibold">MarkTale – Powered by AI</span> is a full-service startup building, branding, marketing, and technology company.
                        </p>
                        <p>
                            In just 1.5 years, we’ve built and scaled 30+ brands across India and international markets including Canada and the USA.
                        </p>
                        <p>
                            We work as a growth partner, not a vendor — combining AI tools, human creativity, and execution clarity to deliver real business outcomes.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#1a8dcc]">1.5+</span>
                            <span className="text-sm text-gray-400">Years Experience</span>
                        </div>
                        <div className="w-[1px] h-12 bg-gray-800"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#1a8dcc]">30+</span>
                            <span className="text-sm text-gray-400">Brands Launched</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
