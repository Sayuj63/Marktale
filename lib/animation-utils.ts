import gsap from 'gsap';

export const fadeInOnScroll = (selector: string, delay = 0) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            delay
        });
    });
};

export const slideInOnScroll = (selector: string, direction: 'left' | 'right' = 'left') => {
    const x = direction === 'left' ? -50 : 50;
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%'
            },
            opacity: 0,
            x,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
};

export const staggerReveal = (selector: string, staggerAmount = 0.1) => {
    gsap.from(selector, {
        scrollTrigger: {
            trigger: selector,
            start: 'top 80%'
        },
        opacity: 0,
        y: 20,
        stagger: staggerAmount,
        duration: 0.6,
        ease: 'power2.out'
    });
};
