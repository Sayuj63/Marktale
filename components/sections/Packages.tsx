"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Packages() {
    return (
        <section className="py-20 bg-gray-50 flex flex-col items-center">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">
                    Pricing Plans
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Startup Plan */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-black mb-2">🚀 Startup Building Plan</h3>
                            <p className="text-gray-500">Best for new startups & founders</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold">₹25,000</span>
                                <span className="text-gray-500">/ 1st Month</span>
                            </div>
                            <p className="text-sm text-[#1a8dcc] font-medium mt-1">₹15,000/month 2nd Month onwards</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Website + Domain + Hosting",
                                "Brand setup",
                                "Social media setup & optimization",
                                "Content (graphics, reels, articles)",
                                "SEO basics",
                                "Monthly report"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <span className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={14} /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/contact"
                            className="w-full py-4 rounded-xl border-2 border-black font-bold hover:bg-black hover:text-white transition-colors block text-center"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>

                    {/* Growth Plan */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-black text-white rounded-2xl shadow-xl p-8 flex flex-col relative overflow-hidden ring-4 ring-[#ffdd58]/20"
                    >
                        <div className="absolute top-0 right-0 bg-[#ffdd58] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            MOST POPULAR
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">📈 Growth Plan</h3>
                            <p className="text-gray-400">For businesses ready to scale</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-[#ffdd58]">₹50,000</span>
                                <span className="text-gray-400">/ 1st Month</span>
                            </div>
                            <p className="text-sm text-[#ffdd58] font-medium mt-1">₹35,000/month 2nd Month onwards</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Includes everything in Startup Plan",
                                "E-commerce product listing & optimization",
                                "Paid ads setup",
                                "Advanced growth strategy",
                                "Funnel & retargeting"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200">
                                    <span className="bg-[#ffdd58] text-black p-1 rounded-full"><Check size={14} /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://wa.me/918587870707"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl bg-[#ffdd58] text-black font-bold hover:bg-[#ffe580] transition-colors block text-center"
                        >
                            Get Started Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
