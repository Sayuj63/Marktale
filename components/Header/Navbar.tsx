"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-[100] mx-auto w-[95%] max-w-5xl rounded-full transition-all duration-300",
                isScrolled
                    ? "bg-black/40 backdrop-blur-md border border-white/10 shadow-lg py-3"
                    : "bg-transparent py-5"
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
                    {navItems.map((item) => (
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
                    ))}
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
                <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300">
                    <button
                        className="absolute top-8 right-8 text-white p-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    {navItems.map((item) => (
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
                    ))}
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
    );
}
