"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "@/styles/LoadingAnimation.module.css";

export function LoadingAnimation() {
    const [isLoading, setIsLoading] = useState(true);
    const overlayRef = useRef<HTMLDivElement>(null);
    const brushRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const yellowBallRef = useRef<HTMLDivElement>(null);
    const blueBallRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
            },
        });

        // Step 1: Balls move from left to right
        tl.to([yellowBallRef.current, blueBallRef.current], {
            left: "calc(100% + 100px)",
            duration: 1.2,
            ease: "power2.inOut",
            stagger: 0.15,
        })
        // Step 2: Brush sweep animation (starts while balls are moving)
        .to(brushRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power2.inOut",
        }, "-=0.8") // Start before balls finish
        // Step 3: Text animation (appears with brush)
        .to(
            textRef.current,
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
            },
            "-=0.8" // Start with brush
        )
        .to(
            textRef.current,
            {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            },
            "+=0.2" // Brief hold
        )
        // Fade out overlay
        .to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            pointerEvents: "none",
        });

    }, []);

    if (!isLoading) return null;

    return (
        <div ref={overlayRef} className={styles.overlay}>
            <div ref={yellowBallRef} className={`${styles.ball} ${styles.yellowBall}`} />
            <div ref={blueBallRef} className={`${styles.ball} ${styles.blueBall}`} />
            <div ref={brushRef} className={styles.brush} />
            <div ref={textRef} className={styles.textContainer}>
                <h1 className={styles.text}>Marktale</h1>
            </div>
        </div>
    );
}
