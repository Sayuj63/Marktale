"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface ServiceData {
    id: number;
    title: string;
    description: string;
    icon: string;
    details: string[];
}

const servicesData: ServiceData[] = [
    {
        id: 1,
        title: "Startup & Brand Building",
        description: "Turn your idea into a recognized brand with comprehensive strategy and identity design.",
        icon: "🚀",
        details: [
            "Brand naming & positioning",
            "Logo & identity design",
            "Go-to-market strategy",
            "Pitch Deck Creation",
            "Business Model Canvas"
        ]
    },
    {
        id: 2,
        title: "Website & App Development",
        description: "Custom digital solutions built on robust technologies for web and mobile.",
        icon: "💻",
        details: [
            "WordPress & custom websites",
            "Android & iOS apps (Flutter/React Native)",
            "SaaS platforms & admin panels",
            "E-commerce Stores (Shopify/WooCommerce)",
            "PWA Development"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing & SEO",
        description: "Data-driven marketing campaigns to increase visibility and organic traffic.",
        icon: "📈",
        details: [
            "SEO (On-page & Off-page)",
            "SMO (Social Media Optimization)",
            "Social media marketing",
            "Content & influencer marketing",
            "Google Business Profile Growth"
        ]
    },
    {
        id: 4,
        title: "Sales & Lead Generation",
        description: "Automated systems to capture, nurture, and convert leads into paying customers.",
        icon: "💰",
        details: [
            "CRM setup & automation",
            "Paid ads (Google, Meta, LinkedIn)",
            "High-converting Funnels",
            "Retargeting campaigns",
            "Email Automation Sequences"
        ]
    }
];

export function ServicesSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const handleCardHover = (index: number) => {
        if (expandedCard !== null) return;
        setActiveCard(index);
    };

    const handleCardLeave = () => {
        if (expandedCard !== null) return;
        setActiveCard(null);
    };

    const handleCardClick = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const getCardStyle = (index: number) => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        // No rotation on mobile
        if (isMobile) {
            return {
                transform: 'rotate(0deg)',
                zIndex: expandedCard === index ? 20 : 1,
            };
        }

        // Desktop: keep original slanted effect
        const baseRotations = [-8, -4, 0, 4, 8, 12];
        const rotation = baseRotations[index] || 0;

        let transform = `rotate(${rotation}deg)`;

        if (activeCard === index && expandedCard === null) {
            transform = `scale(1.1) rotate(0deg) translateY(-10px)`;
        } else if (activeCard !== null && expandedCard === null) {
            const offset = index < activeCard ? -40 : index > activeCard ? 40 : 0;
            if (offset !== 0) {
                transform = `translateX(${offset}px) rotate(${(index - 3) * 4}deg)`;
            }
        }

        return {
            transform,
            zIndex: activeCard === index ? 10 : expandedCard === index ? 20 : 1,
        };
    };

    return (
        <section
            data-theme="light"
            className="py-20 md:py-32 px-4 md:px-8 bg-white flex flex-col justify-center items-center min-h-screen overflow-hidden max-w-[100vw]"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 text-center">
                Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-2xl">
                Tech & Digital Marketing Solutions Powered by AI
            </p>

            <div
                className={`flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 md:gap-2 w-full max-w-6xl perspective-1000 transition-all duration-400`}
                style={{ perspective: "1000px" }}
            >
                {servicesData.map((service, index) => (
                    <div
                        key={service.id}
                        className={`w-[160px] h-[220px] md:w-[160px] md:h-[240px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                            transition-all duration-[350ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] 
                            relative overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#1a8dcc]
                            ${expandedCard === index ? 'scale-110 z-20' : ''}`}
                        style={expandedCard === null ? getCardStyle(index) : {}}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="p-4 md:p-5 h-full flex flex-col items-center justify-center text-center">
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
                            <h3 className="text-sm md:text-base font-bold text-black mb-2">{service.title}</h3>
                            {expandedCard !== index && (
                                <p className="text-xs text-gray-600">
                                    Click to see details
                                </p>
                            )}
                        </div>

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a8dcc]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            {expandedCard !== null && (
                <div className="mt-12 max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-[#1a8dcc]">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <span className="text-5xl">{servicesData[expandedCard].icon}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-black">
                                {servicesData[expandedCard].title}
                            </h3>
                        </div>
                        <button
                            onClick={() => setExpandedCard(null)}
                            className="text-gray-500 hover:text-black transition-colors text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <p className="text-gray-700 mb-6 text-base md:text-lg">
                        {servicesData[expandedCard].description}
                    </p>

                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-[#1a8dcc] mb-4">Technologies & Tools:</h4>
                        <ul className="space-y-2">
                            {servicesData[expandedCard].details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-[#1a8dcc] mt-1">▸</span>
                                    <span className="text-sm md:text-base">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-[#1a8dcc] text-white rounded-lg hover:bg-[#157ab8] transition-colors font-semibold text-center"
                        >
                            Get Started with {servicesData[expandedCard].title}
                        </Link>
                        <button
                            onClick={() => setExpandedCard(null)}
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                        >
                            Close Details
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
