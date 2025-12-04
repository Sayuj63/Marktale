"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data, sideContent }: { data: TimelineEntry[], sideContent?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans"
      ref={containerRef}
    >
      <div className="relative w-full mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20">
          <div ref={ref} className="relative flex-1 pb-12 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start ${index === 0 ? 'pt-0' : 'pt-10 md:pt-40'} md:gap-10`}
          >
            {item.title && (
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-8 md:h-10 absolute left-2 md:left-3 w-8 md:w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-neutral-800 border border-neutral-700 p-1 md:p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:text-2xl md:pl-20 lg:text-6xl font-bold text-neutral-400 whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            )}

            <div className={`relative ${item.title ? 'pl-16 md:pl-20 pr-4 md:pl-4' : 'pl-0 pr-0'} w-full`}>
              {item.title && (
                <h3 className="md:hidden block text-2xl sm:text-3xl mb-4 text-left font-bold text-neutral-400 whitespace-pre-line">
                  {item.title}
                </h3>
              )}
              {item.content}{" "}
            </div>
          </div>
        ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#1a8dcc] via-[#ffdd58] to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
          
          {sideContent && (
            <div className="hidden lg:block w-[400px] xl:w-[500px]">
              <div className="sticky top-32">
                {sideContent}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
