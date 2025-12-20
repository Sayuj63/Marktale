"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Camera, Mic, Rocket, TrendingUp, Users } from "lucide-react";

const achievements = [
    {
        title: "Founder & Scaler",
        description: "Successfully founded and scaled MarkTale, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
        icon: Rocket,
    },
    {
        title: "Digital Marketing Lead",
        description: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
        icon: TrendingUp,
    },
    {
        title: "Marketing Strategist",
        description: "Spearheaded marketing for 13SQFT.COM (AMS and Procurement Partnership Model), improving product visibility and engagement through structured go-to-market strategies.",
        icon: Briefcase,
    },
    {
        title: "Real Estate Marketing",
        description: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies through performance-driven digital campaigns.",
        icon: Briefcase,
    },
    {
        title: "Operations & Leadership",
        description: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit (India News), handling large-scale data collection and reporting.",
        icon: Users,
    },
    {
        title: "Direction & Filming",
        description: "Directed and filmed commercial and promotional content, including a chroma ad for Unique Builders, promotional planning for eBay.in, and ad direction for Square Animation Company.",
        icon: Camera,
    },
    {
        title: "Theatre & Performance",
        description: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills and national-level visibility.",
        icon: Mic, // or Star
    },
];

export function AwardsRecognition() {
    return (
        <section className="py-20 bg-white text-black overflow-hidden relative">
            {/* Background embellishments if needed */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Awards & Recognition</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Celebrating milestones, leadership, and creative excellence across industries.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
