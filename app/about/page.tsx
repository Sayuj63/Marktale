"use client";

import { AboutUs as AboutSection } from "@/components/sections/AboutUs";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { TeamPhotos } from "@/components/sections/TeamPhotos";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header/Title Block */}
            <div className="bg-black text-white pt-32 pb-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About MarkTale</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We are more than just an agency; we are your growth partners in the age of AI.
                </p>
            </div>

            <AboutSection />
            <JourneyTimeline />
            <TeamPhotos />
        </main>
    );
}
