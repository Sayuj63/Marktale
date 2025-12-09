"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-8 border-t border-white/10 max-w-[100vw] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="mb-8 md:mb-0">
                    <img
                        src="/images/logo.png"
                        alt="MarkTaleWorld"
                        className="h-12 w-auto object-contain mb-4"
                    />
                    <p className="max-w-xs text-sm text-gray-400">
                        Tech & Digital Marketing Solutions Powered by AI
                    </p>
                </div>

                <nav className="flex gap-8">
                    <Link href="https://www.facebook.com/marktaleworld" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        Facebook
                    </Link>
                    <Link href="https://www.linkedin.com/company/marktaleworld/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="https://www.youtube.com/@MarkTaleWorld/featured" target="_blank" rel="noopener noreferrer" className="text-sm font-medium uppercase tracking-wide hover:text-gray-300 transition-colors">
                        YouTube
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
