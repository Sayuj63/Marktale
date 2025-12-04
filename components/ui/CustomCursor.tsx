"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTargetPos({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        let animationId: number;
        const animate = () => {
            setCursorPos((prev) => ({
                x: prev.x + (targetPos.x - prev.x) * 0.15,
                y: prev.y + (targetPos.y - prev.y) * 0.15,
            }));
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, [targetPos, isVisible]);

    // Hide cursor on touch devices
    useEffect(() => {
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            // Defer state update to avoid synchronous render warning
            setTimeout(() => setIsVisible(false), 0);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="custom-cursor-element fixed pointer-events-none z-[9998] mix-blend-difference"
            style={{
                left: cursorPos.x,
                top: cursorPos.y,
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="w-6 h-6 rounded-full border-2 border-white bg-transparent" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}
