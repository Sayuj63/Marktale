"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="mb-8 md:mb-0">
                    <img
                        src="https://marktaleworld.com/wp-content/uploads/2025/08/cropped-updated-marktale-logo-2-e1755503321129-1.png"
                        alt="MarkTaleWorld"
                        className="h-12 w-auto object-contain mb-4"
                    />
                    <p className="max-w-xs text-sm text-gray-400">
                        Online Internet Marketing Company That Grows Your Brand.
                    </p>
                </div>

                <nav className="flex gap-8">
                    <Link href="#" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        Instagram
                    </Link>
                    <Link href="#" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="#" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        Twitter
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
