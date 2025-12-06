import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function JourneyTimeline() {
  const data = [
    {
      title: "2012-15",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            <span className="font-semibold text-[#1a8dcc]">Senior Zonal Coordinator</span>
          </p>
          <p className="mb-8 text-xs font-normal md:text-base text-neutral-300">
            MarkIndia News
          </p>
        </div>
      ),
    },
    {
      title: "2021-22",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            <span className="font-semibold text-[#1a8dcc]">Marketing Manager</span>
          </p>
          <p className="mb-8 text-xs font-normal md:text-base text-neutral-300">
            Volvo Cars
          </p>
        </div>
      ),
    },
    {
      title: "2022-23",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            <span className="font-semibold text-[#1a8dcc]">Marketing Manager</span>
          </p>
          <p className="mb-8 text-xs font-normal md:text-base text-neutral-300">
            Kamalraj Group
          </p>
        </div>
      ),
    },
    {
      title: "2023-24",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            <span className="font-semibold text-[#1a8dcc]">Digital Marketing Manager</span>
          </p>
          <p className="mb-8 text-xs font-normal md:text-base text-neutral-300">
            BuildMyInfra
          </p>
        </div>
      ),
    },
    {
      title: "2023-\nPresent",
      content: (
        <div>
          <div className="mb-6">
            <p className="mb-2 text-xs font-normal md:text-sm text-neutral-200">
              <span className="font-semibold text-[#ffdd58]">Founder & CEO</span>
            </p>
            <p className="mb-4 text-xs font-normal md:text-base text-neutral-300">
              MarkTale
            </p>
          </div>
          
          <div className="mb-6">
            <p className="mb-2 text-xs font-normal md:text-sm text-neutral-200">
              <span className="font-semibold text-[#ffdd58]">Founder & CEO</span>
            </p>
            <p className="mb-4 text-xs font-normal md:text-base text-neutral-300">
              Down Ridge Infra Pvt. Ltd.
            </p>
          </div>
          
          <div>
            <p className="mb-2 text-xs font-normal md:text-sm text-neutral-200">
              <span className="font-semibold text-[#ffdd58]">Founder & CEO</span>
            </p>
            <p className="mb-4 text-xs font-normal md:text-base text-neutral-300">
              TripTale
            </p>
          </div>
        </div>
      ),
    },
  ];

  const sideContent = (
    <div className="space-y-6 text-neutral-200">
      <div className="mb-6">
        <img 
          src="/images/sir_photo.jpeg" 
          alt="Kautilya Kalyan" 
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      
      <div className="space-y-3">
        <h4 className="text-xl font-semibold text-white">
          Kautilya Kalyan
        </h4>
        <p className="text-sm text-neutral-400">
          Marketing Visionary | AI Advocate | Growth Strategist
        </p>
      </div>

      <p className="text-sm leading-relaxed text-neutral-300">
        Kautilya Kalyan is the visionary behind MarkTale World Pvt Ltd, a future-ready brand house driving ventures like MarkTale – Powered by AI, MarkTale Events, TripTale, Down Ridge, and Delhi059 by Chef Kanishk. With 13+ years of expertise across traditional and digital marketing, he has led brand strategy, GTM planning, and digital transformation for major brands across real estate, SaaS, automotive, hospitality, events, and e-commerce. In June 2024, he founded MarkTale World to close the gap between ambitious startups and accessible, high-impact digital marketing. A certified data science and marketing professional with Google credentials in digital advertising and analytics, he blends data-driven precision with storytelling to deliver branding, performance marketing, and automation solutions that help founders scale with clarity, creativity, and authenticity.
      </p>
    </div>
  );

  return (
    <div className="relative w-full overflow-clip bg-black py-12 md:py-20 lg:py-24 pb-20 md:pb-32 lg:pb-40 max-w-[100vw]">
      <div className="w-full text-center mb-12 md:mb-20 lg:mb-28 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8">
          Journey From Kautaliya To Mark
        </h2>
      </div>
      
      {/* Mobile: Show profile first */}
      <div className="lg:hidden px-4 mb-12">
        {sideContent}
      </div>
      
      <div className="px-4 md:px-8 lg:px-16">
        <Timeline data={data} sideContent={sideContent} />
      </div>
    </div>
  );
}
