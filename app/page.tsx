import { Hero } from "@/components/HeroSection/HeroSection";

import { FlowingTextSection } from "@/components/sections/FlowingTextSection";
import { TaglineSection } from "@/components/sections/TaglineSection";
import { CardStack } from "@/components/sections/CardStack";
import { TeamPhotos } from "@/components/sections/TeamPhotos";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden max-w-[100vw]">
      <Hero />
      <FlowingTextSection />
      <TaglineSection />
      <CardStack />
      <JourneyTimeline />
      <TeamPhotos />
      <LogoCarousel />
      <TestimonialsSection />
    </main>
  );
}
