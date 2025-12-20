"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Briefcase, Camera, Mic, Rocket, TrendingUp, Users } from "lucide-react";

// Keeping only 6 items to match "3 rows of 2 each" request
const achievements = [
    {
        title: "Founder & Scaler",
        description: "Successfully founded and scaled MarkTale, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        title: "Digital Marketing Lead",
        description: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
        icon: TrendingUp,
        color: "bg-green-500",
    },
    {
        title: "Marketing Strategist",
        description: "Spearheaded marketing for 13SQFT.COM (AMS and Procurement Partnership Model), improving product visibility and engagement through structured go-to-market strategies.",
        icon: Briefcase,
        color: "bg-purple-500",
    },
    {
        title: "Real Estate Marketing",
        description: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies through performance-driven digital campaigns.",
        icon: Briefcase,
        color: "bg-orange-500",
    },
    {
        title: "Operations & Leadership",
        description: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit (India News), handling large-scale data collection and reporting.",
        icon: Users,
        color: "bg-red-500",
    },
    {
        title: "Direction & Filming",
        description: "Directed and filmed commercial and promotional content, including a chroma ad for Unique Builders, promotional planning for eBay.in, and ad direction for Square Animation Company.",
        icon: Camera,
        color: "bg-yellow-500",
    },
    // {
    //     title: "Theatre & Performance",
    //     description: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills and national-level visibility.",
    //     icon: Mic,
    //     color: "bg-pink-500",
    // },
];

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <div className="bg-black text-white pt-32 pb-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Awards & Recognition</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Celebrating milestones, leadership, and creative excellence across industries.
                </p>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {achievements.map((item, index) => (
                        <CardContainer key={index} className="inter-var w-full">
                            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex flex-col h-full">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {item.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow"
                                >
                                    {item.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <div className={`h-60 w-full relative rounded-xl overflow-hidden group-hover/card:shadow-xl flex items-center justify-center ${item.color} bg-opacity-10`}>
                                        <div className={`p-4 rounded-full ${item.color} text-white`}>
                                            <item.icon className="w-12 h-12" />
                                        </div>
                                    </div>
                                </CardItem>

                                <div className="flex justify-between items-center mt-8">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Recognized Excellence
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        View Details
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </main>
    );
}
