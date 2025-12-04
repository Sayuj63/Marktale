"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const images = [
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
];

export function DraggableImagesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stack = stackRef.current;
        if (!stack) return;

        // Calculate bounds based on number of images and width
        // Assuming each image is 500px wide + gap, but here they are stacked.
        // The user request says "Drag direction: Left reveals previous images, right reveals next images"
        // and "Multiple images stacked, slightly offset".
        // Let's implement a horizontal strip that can be dragged, but styled to look like a stack or strip.
        // Actually, the request says "horizontal draggable image stack".
        // "Reveal mechanism: Show left/right edges (20-30px peek)"
        // This implies a carousel-like strip but maybe with overlap?
        // Let's stick to a simple horizontal strip for now as per the "horizontal draggable" description,
        // but maybe with negative margins to create the "stack" look if needed.
        // The CSS provided in the prompt suggests a single .image-stack container with absolute .stack-image children?
        // Wait, the CSS says:
        // .image-stack { position: relative; width: 500px; height: 350px; }
        // .stack-image { position: absolute; ... }
        // This implies the IMAGES are stacked ON TOP of each other inside the draggable container?
        // But if the container is draggable, moving it moves ALL images together.
        // If we want to reveal images, maybe we drag the top one off?
        // OR, maybe the "image-stack" IS the container of all images arranged horizontally?
        // "Multiple images stacked, slightly offset" + "Drag direction: Left reveals previous images..."
        // Let's try to arrange them horizontally with overlap.

        // Actually, looking at the CSS again:
        // .image-stack is the draggable element.
        // If .stack-image are absolute inside it, they overlap.
        // If we want to drag to reveal, maybe we need a long strip.
        // Let's adjust the implementation to be a horizontal strip of images with overlap.

        const cardWidth = window.innerWidth < 768 ? 300 : 500;
        const overlap = 20;
        const totalWidth = (cardWidth - overlap) * images.length + overlap;
        const containerWidth = stack.parentElement?.offsetWidth || window.innerWidth;
        const minX = Math.min(0, containerWidth - totalWidth);

        Draggable.create(stack, {
            type: "x",
            edgeResistance: 0.65,
            bounds: { minX: minX, maxX: 0 },
            inertia: true,
            cursor: "grab",
            activeCursor: "grabbing",
        });

    }, []);

    return (
        <section
            ref={containerRef}
            data-theme="dark" // This will trigger the header color inversion to white
            className="relative min-h-[150vh] bg-black text-white"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-[1200px] flex justify-center items-center">

                    {/* Draggable Container */}
                    <div
                        ref={stackRef}
                        className="flex items-center touch-none cursor-grab active:cursor-grabbing"
                        style={{ x: 0 }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[300px] md:w-[500px] h-[200px] md:h-[350px] bg-gray-800 rounded-lg overflow-hidden relative shadow-lg select-none"
                                style={{
                                    marginLeft: index === 0 ? 0 : "-20px", // Overlap
                                    zIndex: images.length - index,
                                    transform: "none",
                                }}
                            >
                                <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold border border-white/10">
                                    {/* Placeholder Image */}
                                    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${img})` }} />
                                    <span>{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-white/50 text-sm uppercase tracking-widest">
                        Drag to explore
                    </p>
                </div>
            </div>
        </section>
    );
}
