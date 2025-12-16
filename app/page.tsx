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

// New Components
import { SuccessStories } from "@/components/sections/SuccessStories";
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

      {/* 2. Success Stories / Social Proof / Our Projects */}
      <SuccessStories />
      <LogoCarousel />

      {/* 4. Our Services */}
      <ServicesSection />

      {/* 5. Packages */}
      <Packages />

      {/* 6. Clients Scroll Stack */}
      <ClientsScrollStack />

      {/* 7. Certifications & Technologies */}
      <Certifications />

      {/* 8. Reviews */}
      <TestimonialsSection />

      {/* 9. Contact */}
      <ContactSection />

      {/* Preserved Sections */}

    </main>
  );
}
