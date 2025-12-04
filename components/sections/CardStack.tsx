"use client";

import { useState, useRef, useEffect } from "react";

interface CardData {
    id: number;
    label: string;
    imgUrl: string;
    projectLink: string;
}

const cardsData: CardData[] = [
    { id: 1, label: "Project 1", imgUrl: "/images/project1.jpeg", projectLink: "https://example.com/project1" },
    { id: 2, label: "Project 2", imgUrl: "/images/project2.jpeg", projectLink: "https://example.com/project2" },
    { id: 3, label: "Project 3", imgUrl: "/images/project3.jpeg", projectLink: "https://example.com/project3" },
    { id: 4, label: "Project 4", imgUrl: "/images/project4.jpeg", projectLink: "https://example.com/project4" },
    { id: 5, label: "Project 5", imgUrl: "/images/project5.jpeg", projectLink: "https://example.com/project5" },
];

export function CardStack() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [morphingCard, setMorphingCard] = useState<CardData | null>(null);
    const [morphingRect, setMorphingRect] = useState<DOMRect | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const stackRef = useRef<HTMLDivElement>(null);

    const handleCardHover = (index: number) => {
        if (morphingCard) return;
        setActiveCard(index);
    };

    const handleCardLeave = () => {
        if (morphingCard) return;
        setActiveCard(null);
    };

    const handleCardClick = (card: CardData, index: number) => {
        if (morphingCard) return;

        const cardElement = cardRefs.current[index];
        if (!cardElement) return;

        const rect = cardElement.getBoundingClientRect();
        setMorphingRect(rect);
        setMorphingCard(card);

        // Trigger expansion after a brief moment
        setTimeout(() => {
            setIsExpanded(true);
        }, 50);

        // Show detail content after expansion
        setTimeout(() => {
            setShowDetail(true);
        }, 450);
    };

    const handleClose = () => {
        setShowDetail(false);
        setIsExpanded(false);

        // Remove morphing card after animation
        setTimeout(() => {
            setMorphingCard(null);
            setMorphingRect(null);
        }, 600);
    };

    const getCardStyle = (index: number) => {
        const baseRotations = [-10, -5, 0, 5, 10];
        const rotation = baseRotations[index] || 0;

        let transform = `rotate(${rotation}deg)`;

        if (activeCard === index) {
            transform = `scale(1.15) rotate(0deg) translateY(-10px)`;
        } else if (activeCard !== null) {
            const offset = index < activeCard ? -60 : index > activeCard ? 60 : 0;
            if (offset !== 0) {
                transform = `translateX(${offset}px) rotate(${(index - 2) * 5}deg)`;
            }
        }

        return {
            transform,
            zIndex: activeCard === index ? 10 : 1,
        };
    };

    const getMorphingStyle = () => {
        if (!morphingRect) return {};

        if (isExpanded) {
            return {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "420px",
                height: "520px",
            };
        }

        return {
            left: `${morphingRect.left}px`,
            top: `${morphingRect.top}px`,
            width: `${morphingRect.width}px`,
            height: `${morphingRect.height}px`,
        };
    };

    return (
        <section
            data-theme="light"
            className="py-20 md:py-32 px-4 md:px-8 bg-white flex flex-col justify-center items-center min-h-screen overflow-hidden"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 text-center">
                Our Projects
            </h2>
            <div
                ref={stackRef}
                className={`flex justify-between w-full max-w-6xl perspective-1000 transition-all duration-400 ${morphingCard ? "scale-95 blur-[6px] brightness-90" : ""
                    }`}
                style={{ perspective: "1000px" }}
            >
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className={`w-[180px] h-[240px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                            transition-all duration-[350ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] 
                            relative overflow-hidden cursor-pointer
                            ${morphingCard?.id === card.id ? "invisible" : ""}`}
                        style={getCardStyle(index)}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}
                        onClick={() => handleCardClick(card, index)}
                    >
                        <img
                            src={card.imgUrl}
                            alt={card.label}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-semibold">{card.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Morphing Card */}
            {morphingCard && (
                <div
                    className="fixed bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] 
                        overflow-hidden z-[999] flex flex-col items-center justify-start 
                        px-6 py-8 transition-all duration-[600ms] ease-in-out"
                    style={getMorphingStyle()}
                >
                    <div className={`flex flex-col items-center w-full ${!showDetail ? "hidden" : ""}`}>
                        {/* Image */}
                        <img
                            src={morphingCard.imgUrl}
                            alt={morphingCard.label}
                            className={`w-full h-[280px] object-cover rounded-xl mx-auto 
                                transition-all duration-[600ms] ease-in-out
                                ${showDetail ? "opacity-100 scale-100 translate-y-0 delay-200" : "opacity-0 scale-90 translate-y-10"}`}
                        />

                        {/* Title */}
                        <div
                            className={`mt-5 text-2xl font-bold text-center transition-all duration-[600ms] ease-in-out
                                ${showDetail ? "relative top-auto left-auto transform-none" : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}`}
                        >
                            {morphingCard.label}
                        </div>

                        {/* Project Link Button */}
                        <a
                            href={morphingCard.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-2.5 border-none rounded-lg bg-[#4A90E2] text-white text-base 
                                cursor-pointer mt-4 transition-all duration-[600ms] ease-in-out hover:bg-[#357ABD]
                                ${showDetail ? "opacity-100 translate-y-0 delay-[800ms]" : "opacity-0 translate-y-5"}`}
                        >
                            View Project
                        </a>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className={`px-6 py-2.5 border-none rounded-lg bg-[#333] text-white text-base 
                                cursor-pointer mt-3 transition-all duration-[600ms] ease-in-out hover:bg-[#555]
                                ${showDetail ? "opacity-100 translate-y-0 delay-[1000ms]" : "opacity-0 translate-y-5"}`}
                        >
                            Close
                        </button>
                    </div>

                    {/* Initial image (shown during expansion) */}
                    {!showDetail && (
                        <img
                            src={morphingCard.imgUrl}
                            alt={morphingCard.label}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </div>
            )}
        </section>
    );
}
