"use client";

import { Montserrat, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/Header/Navbar";
import { ContactCard } from "@/components/ui/ContactCard";
import { Footer } from "@/components/sections/Footer";
import { LoadingAnimation } from "@/components/LoadingAnimation/LoadingAnimation";
import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { initScrollTrigger } from "@/lib/gsap-config";
import { setupColorInversion } from "@/lib/headerColorInversion";
import { monitorScrollPerformance } from "@/lib/performance-monitor";
import { disableAnimationsOnMobile } from "@/lib/detect-device";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MarkTaleWorld - Powered by Ai",
    template: "%s | MarkTaleWorld",
  },
  description: "Online Internet Marketing Company That Grows Your Brand",
  keywords: ["Digital Marketing", "AI", "Marketing Agency", "SEO", "Web Development"],
  openGraph: {
    title: "MarkTaleWorld - Powered by Ai",
    description: "Online Internet Marketing Company That Grows Your Brand",
    url: "https://marktaleworld.com",
    siteName: "MarkTaleWorld",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "APNS6nHozhiQP3ShefFpxbHPSuvD0Nt-YMr-k2Wu9VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = initLenis();

    // Initialize GSAP ScrollTrigger with Lenis
    initScrollTrigger(lenis);

    // Setup Header Color Inversion
    // Automatically detects sections with data-theme attribute
    setupColorInversion();

    // Performance & Mobile Optimizations
    monitorScrollPerformance();
    disableAnimationsOnMobile();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={poppins.className}>
        <LoadingAnimation />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          {children}
          <ContactCard />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
