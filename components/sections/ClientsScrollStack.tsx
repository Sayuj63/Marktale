"use client";

import { useLayoutEffect, useRef, useCallback } from "react";

interface ClientCard {
    id: number;
    name: string;
    industry: string;
    description: string;
    image: string;
    bgColor: string;
    textColor: string;
}

const clientsData: ClientCard[] = [
    {
        id: 1,
        name: "Dee Cee Accessories",
        industry: "Jewelry",
        description: "Digital setup from scratch. Products photography, SEO based listings on Amazon and Flipkart. Digital Social Media Accounts setup and management.",
        image: "/clients/deeceeacceserioes.png",
        bgColor: "#d4af37",
        textColor: "#000000"
    },
    {
        id: 2,
        name: "Last Mile Care",
        industry: "NGO",
        description: "Supporting communities with compassionate care and digital outreach strategies to amplify their mission.",
        image: "/clients/lastmilecare.png",
        bgColor: "#1a8dcc",
        textColor: "#ffffff"
    },
    {
        id: 3,
        name: "Maggo Play School",
        industry: "Education",
        description: "Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.",
        image: "/clients/school1_maggokids.png",
        bgColor: "#66B0E0",
        textColor: "#000000"
    },
    {
        id: 4,
        name: "BG Foundation",
        industry: "NGO - Canada",
        description: "Empowering change through digital transformation and community engagement initiatives across Canada.",
        image: "/clients/bgfoundation.png",
        bgColor: "#c41e3a",
        textColor: "#ffffff"
    },
    {
        id: 5,
        name: "BG Foods",
        industry: "E-commerce - Canada/USA",
        description: "Everything from scratch. Building a thriving food e-commerce platform across North America.",
        image: "/clients/bgfoods.png",
        bgColor: "#27ae60",
        textColor: "#ffffff"
    },
    {
        id: 6,
        name: "Promac Advisory",
        industry: "Real Estate - Jaipur",
        description: "Transforming real estate advisory with data-driven insights and premium digital presence.",
        image: "/clients/promac.png",
        bgColor: "#2c3e50",
        textColor: "#ffffff"
    },
    {
        id: 7,
        name: "CabTale",
        industry: "Transportation",
        description: "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
        image: "/clients/cab_cabtale.png",
        bgColor: "#ffdd58",
        textColor: "#000000"
    },
    {
        id: 8,
        name: "Astro Nexus",
        industry: "Astrology",
        description: "Bridging ancient wisdom with modern technology through engaging digital astrology experiences.",
        image: "/clients/astronexus.png",
        bgColor: "#8e44ad",
        textColor: "#ffffff"
    },
    {
        id: 9,
        name: "Biryani Bar",
        industry: "Hospitality",
        description: "Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.",
        image: "/clients/hotel1_biryanibar.jpg",
        bgColor: "#0071CE",
        textColor: "#ffffff"
    },
    {
        id: 10,
        name: "Delhi059",
        industry: "Restaurant - Canada",
        description: "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
        image: "/clients/delho059.png",
        bgColor: "#000000",
        textColor: "#d4af37"
    },
    {
        id: 11,
        name: "Read Abroad",
        industry: "Education",
        description: "Connecting students with global educational opportunities through innovative digital platforms.",
        image: "/clients/readabroad.png",
        bgColor: "#3498db",
        textColor: "#ffffff"
    },
    {
        id: 12,
        name: "Writing Rodgers",
        industry: "Education",
        description: "Empowering writers and educators with comprehensive digital tools and content strategies.",
        image: "/clients/writingrodgers.png",
        bgColor: "#16a085",
        textColor: "#ffffff"
    },
    {
        id: 13,
        name: "Local Ride",
        industry: "Transportation - Canada",
        description: "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
        image: "/clients/localride.png",
        bgColor: "#0ea5e9",
        textColor: "#ffffff"
    }
];

export function ClientsScrollStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    }, []);

    const updateCardTransforms = useCallback(() => {
        // Skip animation on mobile or if not ready
        if (typeof window === 'undefined' || !cardsRef.current.length || isUpdatingRef.current) return;

        // Simple check for mobile/tablet - if width < 768px, reset transforms and stop
        if (window.innerWidth < 768) {
            cardsRef.current.forEach(card => {
                if (card) {
                    card.style.transform = 'none';
                    card.style.transition = 'none';
                }
            });
            return;
        }

        isUpdatingRef.current = true;

        const scrollTop = window.scrollY;
        const containerHeight = window.innerHeight;
        const stackPositionPx = parsePercentage('20%', containerHeight);
        const scaleEndPositionPx = parsePercentage('10%', containerHeight);
        const itemStackDistance = 30;
        const itemScale = 0.03;
        const baseScale = 0.85;

        const endElement = document.querySelector('.scroll-stack-end') as HTMLElement;
        const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const cardTop = rect.top + window.scrollY;
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const newTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 10000) / 10000,
            };

            const lastTransform = lastTransformsRef.current.get(i);
            const hasChanged =
                !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 ||
                Math.abs(lastTransform.scale - newTransform.scale) > 0.0001;

            if (hasChanged) {
                const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
                card.style.transform = transform;
                card.style.transition = 'transform 0.05s ease-out';
                lastTransformsRef.current.set(i, newTransform);
            }
        });

        isUpdatingRef.current = false;
    }, [calculateProgress, parsePercentage]);

    const handleScroll = useCallback(() => {
        requestAnimationFrame(updateCardTransforms);
    }, [updateCardTransforms]);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        const cards = Array.from(document.querySelectorAll('.client-stack-card')) as HTMLDivElement[];
        cardsRef.current = cards;

        // Verify if mobile based on width
        const isMobile = window.innerWidth < 768;

        cards.forEach((card, i) => {
            // Apply stack spacing only on DESKTOP
            if (!isMobile && i < cards.length - 1) {
                card.style.marginBottom = '100px';
            } else {
                // Normal spacing on mobile
                card.style.marginBottom = '32px';
            }

            if (!isMobile) {
                card.style.willChange = 'transform';
                card.style.transformOrigin = 'top center';
                card.style.backfaceVisibility = 'hidden';
                card.style.transform = 'translateZ(0)';
                card.style.webkitBackfaceVisibility = 'hidden';
                card.style.perspective = '1000px';
            } else {
                // Reset styles for mobile
                card.style.removeProperty('will-change');
                card.style.removeProperty('transform-origin');
                card.style.removeProperty('backface-visibility');
                card.style.transform = 'none';
            }
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateCardTransforms); // Add resize listener to handle orientation changes
        updateCardTransforms();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateCardTransforms);
            lastTransformsRef.current.clear();
            isUpdatingRef.current = false;
        };
    }, [handleScroll, updateCardTransforms]);

    return (
        <section
            ref={containerRef}
            data-theme="dark"
            className="relative w-full bg-black text-white py-20 md:py-32"
        >
            <div className="w-full px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        We've partnered with innovative brands across industries to deliver exceptional results
                    </p>
                </div>

                <div className="relative w-full max-w-7xl mx-auto">
                    {clientsData.map((client, index) => (
                        <div
                            key={client.id}
                            className="client-stack-card w-full rounded-3xl overflow-hidden shadow-2xl min-h-[400px] md:min-h-[500px]"
                            style={{
                                backgroundColor: client.bgColor,
                                color: client.textColor,
                                position: "relative"
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12 items-center h-full">
                                {/* Left: Content */}
                                <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                                    <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold"
                                        style={{
                                            backgroundColor: client.textColor === "#ffffff" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        {client.industry}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                                        {client.name}
                                    </h3>
                                    <p className="text-sm md:text-lg opacity-90 leading-relaxed">
                                        {client.description}
                                    </p>
                                    <div className="flex gap-4 md:gap-6 pt-2 md:pt-4">
                                        <div className="text-center">
                                            <div className="text-xl md:text-3xl font-bold">150%</div>
                                            <div className="text-xs md:text-sm opacity-75">Growth</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl md:text-3xl font-bold">2.5M+</div>
                                            <div className="text-xs md:text-sm opacity-75">Reach</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl md:text-3xl font-bold">98%</div>
                                            <div className="text-xs md:text-sm opacity-75">Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Image */}
                                <div className="order-1 md:order-2 flex items-center justify-center">
                                    <div className="relative w-full max-w-[280px] md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl"
                                        style={{
                                            backgroundColor: client.textColor === "#ffffff" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
                                        }}
                                    >
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="w-full h-full object-contain p-6 md:p-8"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                                style={{
                                    backgroundColor: client.textColor === "#ffffff" ? "#ffffff" : "#000000"
                                }}
                            />
                            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                                style={{
                                    backgroundColor: client.textColor === "#ffffff" ? "#ffffff" : "#000000"
                                }}
                            />
                        </div>
                    ))}

                    {/* Spacer for scroll release */}
                    <div className="scroll-stack-end h-[50vh]" />
                </div>
            </div>
        </section>
    );
}
