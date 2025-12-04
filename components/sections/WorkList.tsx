"use client";

import { useState } from "react";
import { WorkModal } from "@/components/modals/WorkModal";

interface WorkItem {
    id: string;
    title: string;
    category: string;
    image: string;
}

const works: WorkItem[] = [
    { id: "1", title: "Nike Air", category: "Campaign", image: "/placeholder.jpg" },
    { id: "2", title: "Adidas Boost", category: "Digital", image: "/placeholder.jpg" },
    { id: "3", title: "Puma Future", category: "Branding", image: "/placeholder.jpg" },
    { id: "4", title: "Reebok Classic", category: "Social", image: "/placeholder.jpg" },
];

export function WorkList() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="work" className="py-24 px-4 md:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 uppercase tracking-tighter">
                    Selected Work
                </h2>
                <div className="flex flex-col">
                    {works.map((work) => (
                        <div
                            key={work.id}
                            className="group relative flex items-center justify-between py-8 border-b border-white/20 cursor-pointer transition-colors hover:bg-white/5 px-4 md:px-8"
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                                    {work.title}
                                </h3>
                                <span className="text-sm md:text-base font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                                    {work.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <WorkModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
