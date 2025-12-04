import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import Lenis from '@studio-freight/lenis';

// Note: InertiaPlugin is a Club GreenSock perk. If not available, we might need to skip it or use a free alternative if possible.
// However, Draggable often works without Inertia for basic dragging, but throw props need Inertia.
// Assuming we might not have the paid plugins installed or available in this environment unless specified.
// I will try to register what is available. If InertiaPlugin fails, we'll remove it.
// For now, I'll register standard plugins.

// Check if window is defined to avoid SSR issues
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Draggable);
}

export const initScrollTrigger = (lenis: Lenis) => {
    ScrollTrigger.defaults({ scroller: document.body }); // Lenis usually scrolls body or html

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return ScrollTrigger;
};

export { gsap };
