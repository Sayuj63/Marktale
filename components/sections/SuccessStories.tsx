"use client";

import { motion } from "framer-motion";

const stories = [
    {
        category: "Food & Beverage",
        title: "Delhi059 by Chef Kanishk",
        location: "Canada",
        image: "/images/delhi059.jpg", // Placeholder path
        description: "Brand identity and digital presence for a premium culinary brand."
    },
    {
        category: "Transportation",
        title: "Taxi & Mobility Apps",
        location: "India",
        image: "/images/taxi-app.jpg",
        description: "Full-stack development of a scalable ride-booking platform."
    },
    {
        category: "E-commerce",
        title: "E-commerce & Service Brands",
        location: "Global",
        image: "/images/ecommerce.jpg",
        description: "Driving sales through AI-powered marketing and optimized storefronts."
    },
    {
        category: "SaaS & Education",
        title: "Astro, Education & SaaS Apps",
        location: "India/USA",
        image: "/images/saas.jpg",
        description: "Complex web applications built for scale and user engagement."
    }
];

export function SuccessStories() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Real Brands. Real Results.
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        From idea to execution — we don’t market brands, we build them.
                    </p>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[400px] bg-gray-50 rounded-2xl overflow-hidden snap-center hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="h-48 bg-gray-200 w-full relative">
                                {/* Placeholder for actual image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                    <span className="text-4xl">📷</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs uppercase font-bold text-[#1a8dcc] tracking-wider">{story.category}</span>
                                    <span className="text-xs text-gray-500">{story.location}</span>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{story.title}</h3>
                                <p className="text-sm text-gray-600">{story.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
