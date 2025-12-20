"use client";

import { BrandSpotlight } from "@/components/sections/BrandSpotlight";
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

            {/* Featured Brand Spotlights */}
            <BrandSpotlight
                brandName="Delhi059"
                tagline="From Zero to Canada's Culinary Icon"
                launchDate="Launched October 17, 2024"
                description="Built from absolute zero into Windsor's standout success story with 650+ Google reviews—all without spending a rupee on performance marketing."
                stats={[
                    { label: "Google Reviews", value: "650+", iconName: "Star" },
                    { label: "Ad Spend", value: "$0", iconName: "CheckCircle2" },
                ]}
                themeColor="#000000"
                link="https://www.delhi059.ca"
                align="left"
                gradientFrom="#000000"
                gradientTo="#1a1a1a"
                accentColor="#d4af37"
            />

            <BrandSpotlight
                brandName="Local Ride"
                tagline="The Rideshare Revolution"
                description="Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers."
                stats={[
                    { label: "Commission", value: "0%", iconName: "CheckCircle2" },
                    { label: "Platform", value: "iOS/Android", iconName: "Smartphone" },
                ]}
                themeColor="#0ea5e9"
                link="https://localride.co"
                align="right"
                gradientFrom="#0ea5e9"
                gradientTo="#0284c7"
                accentColor="#38bdf8"
            />



            <CardStack />
            <LogoCarousel />
            <div className="bg-neutral-50 py-20">
                <h2 className="text-3xl font-bold text-center mb-8">More Success Stories</h2>
                <ClientsScrollStack />
            </div>
        </main>
    );
}
