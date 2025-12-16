"use client";

import { ContactSection } from "@/components/sections/ContactSection";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-black text-white pt-32 pb-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We are always looking for talent. Send us your details below.
                </p>
            </div>

            <ContactSection title="Apply to MarkTale" subtitle="Tell us about yourself and your skills." />
        </main>
    );
}
