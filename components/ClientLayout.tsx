"use client";

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/Header/Navbar";
import { ContactCard } from "@/components/ui/ContactCard";
import { Footer } from "@/components/sections/Footer";
import { LoadingAnimation } from "@/components/LoadingAnimation/LoadingAnimation";
import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { initScrollTrigger } from "@/lib/gsap-config";
import { setupColorInversion } from "@/lib/headerColorInversion";
import { monitorScrollPerformance } from "@/lib/performance-monitor";
import { disableAnimationsOnMobile } from "@/lib/detect-device";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis Smooth Scroll
        const lenis = initLenis();

        // Initialize GSAP ScrollTrigger with Lenis
        initScrollTrigger(lenis);

        // Setup Header Color Inversion
        // Automatically detects sections with data-theme attribute
        setupColorInversion();

        // Performance & Mobile Optimizations
        monitorScrollPerformance();
        disableAnimationsOnMobile();

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <LoadingAnimation />
            <CustomCursor />
            <Navbar />
            <SmoothScroll>
                {children}
                <ContactCard />
                <Footer />
            </SmoothScroll>
        </>
    );
}
