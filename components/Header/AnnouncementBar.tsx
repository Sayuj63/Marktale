"use client";

import React from "react";

export function AnnouncementBar() {
    return (
        <div className="w-full bg-[#1a8dcc] text-white py-2 px-4 overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-2 md:gap-4">
                <p className="font-bold text-[10px] md:text-sm animate-pulse whitespace-nowrap">
                    🔥 Startup Building Plans starting at ₹15,000/month
                </p>
                <p className="hidden md:block text-xs md:text-sm opacity-90">
                    ⏳ Limited-time offers available
                </p>
            </div>
        </div>
    );
}
