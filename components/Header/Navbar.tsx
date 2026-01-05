"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";

const services = [
    { name: "SEO Services", href: "/seo" },
    { name: "Google Ads Services", href: "/google-ads-services" },
    { name: "Content Marketing", href: "/content-marketing-agency" },
    { name: "Mobile App Development", href: "/mobile-app-development" },
    { name: "Web Development", href: "/web-development" },
    { name: "MaaS", href: "/maas" },
];

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Awards", href: "/awards" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isServicePage = services.some(service => pathname === service.href);

    return (
        <>
            {/* Sticky Announcement Bar */}
            <div className="fixed top-0 left-0 right-0 z-[101]">
                <AnnouncementBar />
            </div>

            {/* Sticky Navbar */}
            <header
                className={cn(
                    "fixed left-0 right-0 z-[100] mx-auto w-[95%] max-w-5xl rounded-full transition-all duration-300",
                    isScrolled
                        ? "top-12 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg py-3"
                        : "top-16 bg-transparent py-5"
                )}
            >
                <div className="flex items-center justify-between px-6 md:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt="MarkTale"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        <button
                                            className={cn(
                                                "text-sm font-medium transition-colors hover:text-[#1a8dcc] flex items-center gap-1",
                                                isServicePage ? "text-[#1a8dcc]" : "text-white/80"
                                            )}
                                        >
                                            {item.name}
                                            <ChevronDown size={16} className={cn("transition-transform", servicesOpen && "rotate-180")} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {servicesOpen && (
                                            <div className="absolute top-full left-0 pt-2 w-56 z-50">
                                                <div className="bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.href}
                                                            href={service.href}
                                                            className={cn(
                                                                "block px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-[#1a8dcc]",
                                                                pathname === service.href ? "text-[#1a8dcc] bg-white/5" : "text-white/80"
                                                            )}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-[#1a8dcc]",
                                        pathname === item.href ? "text-[#1a8dcc]" : "text-white/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA / Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-[#ffdd58] transition-colors"
                        >
                            Let's Talk
                        </Link>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-6 md:hidden transition-all duration-300 overflow-y-auto py-20">
                        <button
                            className="absolute top-8 right-8 text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div key={item.name} className="flex flex-col items-center gap-3">
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className={cn(
                                                "text-2xl font-bold transition-colors flex items-center gap-2",
                                                isServicePage ? "text-[#1a8dcc]" : "text-white"
                                            )}
                                        >
                                            {item.name}
                                            <ChevronDown size={20} className={cn("transition-transform", mobileServicesOpen && "rotate-180")} />
                                        </button>

                                        {mobileServicesOpen && (
                                            <div className="flex flex-col items-center gap-2 mt-2">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={cn(
                                                            "text-lg font-medium transition-colors",
                                                            pathname === service.href ? "text-[#1a8dcc]" : "text-white/80"
                                                        )}
                                                    >
                                                        {service.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-bold transition-colors",
                                        pathname === item.href ? "text-[#1a8dcc]" : "text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-[#ffdd58] transition-colors"
                        >
                            Let's Talk
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
