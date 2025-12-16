"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  return (
    <div className="min-h-[30rem] md:min-h-[40rem] flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-12 md:py-20 max-w-[100vw]">
      <div className="w-full text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 md:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-neutral-600 text-xs sm:text-sm md:text-base">
          Hear from those who've experienced our work
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

      <div className="mt-8 z-10">
        <a
          href="https://g.page/r/YOUR_GMB_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-sm font-bold text-gray-800"
        >
          <span className="text-xl">⭐</span>
          Leave a Google Review
        </a>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "They think like founders, not vendors. The team aligned perfectly with our vision and executed with precision.",
    name: "Founder",
    title: "Stealth Startup",
  },
  {
    quote:
      "Fast execution and transparent communication. We scaled our operations significantly within months of working with MarkTale.",
    name: "Director",
    title: "Retail Brand",
  },
  {
    quote: "Their AI-driven approach gave us a competitive edge we didn't know we needed.",
    name: "CEO",
    title: "Tech Solutions",
  },
  {
    quote: "A true growth partner. From branding to tech, they handled everything seamlessly.",
    name: "Marketing Head",
    title: "DTC Brand",
  },
];

// Note: Function component logic for CTA button will be handled in the main return if not present in InfiniteMovingCards.
// Adding a CTA below the cards in the main component.
