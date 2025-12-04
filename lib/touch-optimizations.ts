export const addTouchOptimizations = () => {
    if (typeof window === 'undefined') return;

    // Disable custom cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) {
        document.documentElement.classList.add('no-hover');
        // We can handle the CSS part in globals.css using this class
    }

    // Add touch-action: none to draggable elements to prevent scrolling while dragging
    const draggables = document.querySelectorAll('[data-draggable]');
    draggables.forEach(el => {
        if (el instanceof HTMLElement) {
            el.style.touchAction = 'none';
        }
    });

    // Prevent pinch zoom on interactive elements if needed (use with caution)
    // document.addEventListener('touchmove', (e) => {
    //   if (e.touches.length > 1) {
    //     // e.preventDefault(); // This can interfere with accessibility
    //   }
    // }, { passive: false });
};
