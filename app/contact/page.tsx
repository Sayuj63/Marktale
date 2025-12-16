"use client";

import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-black text-white pt-32 pb-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Have a project in mind? Let's talk.
                </p>
            </div>

            <ContactSection />
        </main>
    );
}
