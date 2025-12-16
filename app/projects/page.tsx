"use client";

import { SuccessStories } from "@/components/sections/SuccessStories";
import { CardStack } from "@/components/sections/CardStack";
import { ClientsScrollStack } from "@/components/sections/ClientsScrollStack";
import { LogoCarousel } from "@/components/sections/LogoCarousel";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-black text-white pt-32 pb-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A showcase of our finest work, delivering impact across industries.
                </p>
            </div>

            <SuccessStories />
            <CardStack />
            <LogoCarousel />
            <div className="bg-neutral-50 py-20">
                <h2 className="text-3xl font-bold text-center mb-8">More Success Stories</h2>
                <ClientsScrollStack />
            </div>
        </main>
    );
}
