import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface SectionColor {
    selector: string;
    textColor: 'dark' | 'light';
}

export const setupColorInversion = () => {
    // Find all sections with data-theme attribute
    const sections = document.querySelectorAll('[data-theme]');

    sections.forEach(section => {
        const theme = section.getAttribute('data-theme') as 'light' | 'dark';

        ScrollTrigger.create({
            trigger: section,
            start: "top 50px", // Header height approx
            end: "bottom 50px",
            onEnter: () => updateHeaderColor(theme),
            onEnterBack: () => updateHeaderColor(theme),
        });
    });
};

const updateHeaderColor = (theme: 'dark' | 'light') => {
    const header = document.querySelector('header');
    if (!header) return;

    // If theme is dark (black bg), header should be white.
    // If theme is light (white bg), header should be black.
    const color = theme === 'dark' ? '#ffffff' : '#000000';

    gsap.to(header, {
        color: color,
        duration: 0.3,
        overwrite: 'auto'
    });

    // Update SVGs
    gsap.to(header.querySelectorAll('svg'), {
        fill: color,
        stroke: color, // Some icons might use stroke
        duration: 0.3,
        overwrite: 'auto'
    });

    // Update Logo specifically if needed (assuming it inherits color, but just in case)
    // The logo class in CSS sets color, so header color inheritance should work, 
    // but explicit tweening ensures it.
};

export default setupColorInversion;
