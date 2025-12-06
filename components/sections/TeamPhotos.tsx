"use client";

import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const teamPhotos = [
    "/images/team1.jpeg",
    "/images/team2.jpeg",
    "/images/team3.jpeg",
    "/images/team4.jpeg",
    "/images/team5.jpeg",
    "/images/team6.jpeg",
];

export function TeamPhotos() {
    // Initialize with all 6 photos displayed once (no duplicates)
    const [currentPhotos, setCurrentPhotos] = useState<number[]>([0, 1, 2, 3, 4, 5]);
    const [nextPhotos, setNextPhotos] = useState<number[]>([0, 1, 2, 3, 4, 5]);
    const [fadeStates, setFadeStates] = useState<number[]>([1, 1, 1, 1, 1, 1]); // 1 = fully visible, 0 = hidden

    useEffect(() => {
        const interval = setInterval(() => {
            // Pick a random frame index to change (0-5)
            const randomFrameIndex = Math.floor(Math.random() * 6);
            
            // Prepare the next photo
            setNextPhotos(prev => {
                const newPhotos = [...currentPhotos];
                const currentPhotoInFrame = currentPhotos[randomFrameIndex];
                
                // Pick a random different frame to swap with
                let swapFrameIndex;
                do {
                    swapFrameIndex = Math.floor(Math.random() * 6);
                } while (swapFrameIndex === randomFrameIndex);
                
                // Swap the photos between the two frames
                newPhotos[randomFrameIndex] = currentPhotos[swapFrameIndex];
                newPhotos[swapFrameIndex] = currentPhotoInFrame;
                
                return newPhotos;
            });
            
            // Start crossfade
            setFadeStates(prev => {
                const newStates = [...prev];
                newStates[randomFrameIndex] = 0;
                return newStates;
            });

            // Complete the transition
            setTimeout(() => {
                setCurrentPhotos(nextPhotos);
                setFadeStates(prev => {
                    const newStates = [...prev];
                    newStates[randomFrameIndex] = 1;
                    return newStates;
                });
            }, 1000); // Match the CSS transition duration
        }, 5000); // Change a photo every 5 seconds (much slower)

        return () => clearInterval(interval);
    }, [currentPhotos, nextPhotos]);

    return (
        <section
            data-theme="dark"
            className="relative min-h-[100vh] w-full bg-black text-white overflow-hidden py-12 max-w-[100vw]"
        >
            {/* Desktop Layout - Scattered with overlap */}
            <div className="hidden md:block">
                {/* First Row - 3 Photos (Scattered with overlap) */}
                <div className="relative w-full h-[45vh] mb-8">
                    {/* Photo 1 - Left */}
                    <div className="absolute top-[20%] left-[5%] z-5">
                        <div className="w-[240px] h-[280px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[-12deg] hover:rotate-[-8deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[0]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[0]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[0] }}
                            />
                        </div>
                    </div>

                    {/* Photo 2 - Overlapping with Photo 1 */}
                    <div className="absolute top-[25%] left-[12%] z-6">
                        <div className="w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[8deg] hover:rotate-[4deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[1]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[1]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[1] }}
                            />
                        </div>
                    </div>

                    {/* Photo 3 - Right side */}
                    <div className="absolute top-[15%] left-[75%] z-4">
                        <div className="w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[10deg] hover:rotate-[6deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[2]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[2]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[2] }}
                            />
                        </div>
                    </div>

                    {/* Lottie Animation - Center of this row */}
                    <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <DotLottieReact
                            src="/Fist Bump.json"
                            loop
                            autoplay
                            className="w-[280px] h-[280px]"
                        />
                    </div>

                    {/* Title below Lottie animation */}
                    <div className="absolute top-[70%] left-[50%] -translate-x-1/2 z-30 text-center">
                        <h2 className="text-5xl font-bold text-white">
                            Meet The Team
                        </h2>
                    </div>
                </div>

                {/* Third Row - 3 Photos (Scattered) */}
                <div className="relative w-full h-[40vh]">
                    {/* Photo 1 - Left */}
                    <div className="absolute top-[25%] left-[8%] z-7">
                        <div className="w-[230px] h-[270px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[-8deg] hover:rotate-[-4deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[3]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[3]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[3] }}
                            />
                        </div>
                    </div>

                    {/* Photo 2 - Center-right */}
                    <div className="absolute top-[20%] left-[62%] z-8">
                        <div className="w-[250px] h-[290px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[12deg] hover:rotate-[8deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[4]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[4]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[4] }}
                            />
                        </div>
                    </div>

                    {/* Photo 3 - Far right */}
                    <div className="absolute top-[30%] left-[82%] z-6">
                        <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-2xl 
                            transform rotate-[-15deg] hover:rotate-[-10deg] hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[5]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[5]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[5] }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout - Vertical stack with title and animation at top */}
            <div className="md:hidden flex flex-col items-center px-4 space-y-6">
                {/* Title at top */}
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                    Meet The Team
                </h2>

                {/* Lottie Animation */}
                <div className="pointer-events-none mb-4">
                    <DotLottieReact
                        src="/Fist Bump.json"
                        loop
                        autoplay
                        className="w-[180px] h-[180px]"
                    />
                </div>

                {/* Photos stacked vertically */}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="w-full flex justify-center">
                        <div className="w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-2xl 
                            transform hover:scale-105 transition-all duration-300 relative">
                            <img 
                                src={teamPhotos[nextPhotos[index]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <img 
                                src={teamPhotos[currentPhotos[index]]} 
                                alt="Team Member"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: fadeStates[index] }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
