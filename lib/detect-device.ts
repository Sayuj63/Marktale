export const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isLowEndDevice = () => {
    if (typeof window === 'undefined') return false;
    // Check for reduced motion preference
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const disableAnimationsOnMobile = () => {
    if (isMobileDevice() && isLowEndDevice()) {
        // Disable physics cursor, reduce GSAP animations
        document.documentElement.style.setProperty('--animations-enabled', '0');
        // We could also set a global flag or class on body
        document.body.classList.add('reduce-motion');
    }
};
