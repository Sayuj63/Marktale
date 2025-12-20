"use client";

import { Hero } from "@/components/HeroSection/HeroSection";
// import { FlowingTextSection } from "@/components/sections/FlowingTextSection";
// import { TaglineSection } from "@/components/sections/TaglineSection"; // Removed
import { ServicesSection } from "@/components/sections/ServicesSection";
// import { CardStack } from "@/components/sections/CardStack";
import { ClientsScrollStack } from "@/components/sections/ClientsScrollStack";
// import { TeamPhotos } from "@/components/sections/TeamPhotos"; // Removed
import { LogoCarousel } from "@/components/sections/LogoCarousel";
// import { JourneyTimeline } from "@/components/sections/JourneyTimeline"; // Removed
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { motion } from "framer-motion";

// New Components
import { BrandSpotlight } from "@/components/sections/BrandSpotlight";

// import { AboutUs } from "@/components/sections/AboutUs"; // Removed
import { Packages } from "@/components/sections/Packages";
// import { ContentSamples } from "@/components/sections/ContentSamples"; // Removed
import { Certifications } from "@/components/sections/Certifications";
import { ContactSection } from "@/components/sections/ContactSection";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden max-w-[100vw] bg-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Our Services */}
      <ServicesSection />

      {/* 3. Logo Carousel */}
      <LogoCarousel />

      {/* 4. Our Best Work Section Header */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4">
              Our Best Work
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From zero to market leaders — witness how we build brands that dominate their industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Case Study: Delhi059 */}
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

      {/* 6. Featured Case Study: Local Ride */}
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

      {/* 7. Packages */}
      <Packages />

      {/* 8. Clients Scroll Stack */}
      <ClientsScrollStack />

      {/* 9. Certifications & Technologies */}
      <Certifications />

      {/* 10. Reviews */}
      <TestimonialsSection />

      {/* 11. Contact */}
      <ContactSection />

      {/* Preserved Sections */}

    </main>
  );
}
