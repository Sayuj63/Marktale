"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const logos = [
    "/logos/Biryani-Bar-Kitchener-Logo-1-scaled-1.png",
    "/logos/CCL-Logo-1.png",
    "/logos/CREATIVE-KITCHENS-WARDROBE-LOGO-HD-1-scaled.png",
    "/logos/Dee-Cee-Accessories (1).png",
    "/logos/FreeGPSUpdate-scaled.png",
    "/logos/GSF-LOGO.png",
    "/logos/Indian-Jewelryish.png",
    "/logos/JD-Logo.png",
    "/logos/LMC-logo-scaled.png",
    "/logos/Noida-Run-logo.png",
    "/logos/Primary-Single-Logo.png",
    "/logos/Prun-Sports-logo.png",
    "/logos/SINNOVA-AGRO.png",
    "/logos/string-theory-logo-.png",
    "/logos/Surbhee-PEB-e1747653635952.png",
    "/logos/Theme-Interiors-e1747653537500.png",
    "/logos/Writing-Rodgers.png",
];

const pastelColors = [
    "bg-red-300",
    "bg-yellow-300",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-green-300",
    "bg-orange-300",
    "bg-indigo-300",
    "bg-teal-300",
];

// Assign random pastel colors to each logo
const logosWithColors = logos.map((logo) => ({
    img: logo,
    color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
}));

const firstRow = logosWithColors.slice(0, Math.ceil(logosWithColors.length / 2));
const secondRow = logosWithColors.slice(Math.ceil(logosWithColors.length / 2));

const LogoCard = ({
    img,
    color,
}: {
    img: string;
    color: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-[200px] h-[140px] cursor-pointer overflow-hidden rounded-xl border p-6 flex items-center justify-center transition-transform hover:scale-105",
                "border-gray-950/[.1]",
                color
            )}
        >
            <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo" 
                src={img} 
            />
        </figure>
    );
};

export function LogoCarousel() {
    return (
        <section className="relative py-20 md:py-32 px-4 md:px-8 bg-white overflow-hidden max-w-[100vw]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Text */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        Proud to have worked with:
                    </h2>
                    <p className="text-lg text-gray-600 max-w-md">
                        We collaborate with ambitious brands and people; let's build something great together.
                    </p>
                </div>

                {/* Right Column: Marquee */}
                <div className="relative flex h-[800px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl mask-gradient">
                    <Marquee pauseOnHover vertical reverse className="[--duration:20s]">
                        {firstRow.map((logo, index) => (
                            <LogoCard key={`first-${index}`} {...logo} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {secondRow.map((logo, index) => (
                            <LogoCard key={`second-${index}`} {...logo} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
                </div>
            </div>
            <style jsx>{`
        .mask-gradient {
            mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </section>
    );
}
