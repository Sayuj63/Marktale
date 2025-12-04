"use client";

import { MessageCircle } from "lucide-react";

export function ContactCard() {
    return (
        <div className="fixed bottom-8 right-8 z-40">
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wide">Chat with us</span>
            </a>
        </div>
    );
}
