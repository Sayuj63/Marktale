"use client";

import { useState, useRef } from "react";

interface ServiceData {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const servicesData: ServiceData[] = [
    { 
        id: 1, 
        title: "SEO Optimization", 
        description: "Boost your search rankings with data-driven SEO strategies that drive organic traffic and increase visibility.",
        icon: "🔍"
    },
    { 
        id: 2, 
        title: "Social Media Marketing", 
        description: "Engage your audience across platforms with compelling content and strategic campaigns that build brand loyalty.",
        icon: "📱"
    },
    { 
        id: 3, 
        title: "Content Creation", 
        description: "Tell your brand story with high-quality content that resonates with your audience and drives conversions.",
        icon: "✍️"
    },
    { 
        id: 4, 
        title: "PPC Advertising", 
        description: "Maximize ROI with targeted pay-per-click campaigns that reach the right audience at the right time.",
        icon: "💰"
    },
    { 
        id: 5, 
        title: "Brand Strategy", 
        description: "Build a powerful brand identity that stands out in the market and connects with your target audience.",
        icon: "🎯"
    },
    { 
        id: 6, 
        title: "Analytics & Insights", 
        description: "Make informed decisions with comprehensive analytics and actionable insights that drive growth.",
        icon: "📊"
    },
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
                Comprehensive digital marketing solutions powered by AI to grow your brand
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
                            <p className={`text-xs text-gray-600 transition-all duration-300 ${
                                expandedCard === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}>
                                {service.description}
                            </p>
                        </div>
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a8dcc]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            {expandedCard !== null && (
                <div className="mt-8 max-w-2xl text-center">
                    <button
                        onClick={() => setExpandedCard(null)}
                        className="px-6 py-2.5 bg-[#1a8dcc] text-white rounded-lg hover:bg-[#157ab8] transition-colors"
                    >
                        Close Details
                    </button>
                </div>
            )}
        </section>
    );
}
