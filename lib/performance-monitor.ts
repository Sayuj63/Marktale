export const monitorScrollPerformance = () => {
    if (typeof window === 'undefined') return;

    let fps = 0;
    let lastTime = performance.now();
    let frames = 0;

    const checkFPS = () => {
        const currentTime = performance.now();
        frames++;

        if (currentTime - lastTime >= 1000) {
            fps = frames;
            frames = 0;
            lastTime = currentTime;

            // Log warning if FPS drops below 50
            if (fps < 50) {
                // console.warn(`Low FPS detected: ${fps}`);
                // Consider disabling certain animations on low-end devices
                // For now, we just monitor.
            }
        }

        requestAnimationFrame(checkFPS);
    };

    requestAnimationFrame(checkFPS);
};
