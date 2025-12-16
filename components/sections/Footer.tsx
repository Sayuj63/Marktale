"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-8 border-t border-white/10 max-w-[100vw] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Brand */}
                <div>
                    <img
                        src="/images/logo.png"
                        alt="MarkTaleWorld"
                        className="h-12 w-auto object-contain mb-4"
                    />
                    <p className="font-bold text-lg mb-1">MarkTale – Powered by AI</p>
                    <p className="text-sm text-gray-400">A Unit of MarkTale World Private Limited</p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>📞 +91-8587870707</li>
                        <li>📧 info@marktaleworld.com</li>
                        <li>🌐 www.marktaleworld.com</li>
                    </ul>
                </div>

                {/* Socials / Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <nav className="flex flex-wrap gap-4">
                        <Link href="https://www.facebook.com/marktaleworld" target="_blank" className="text-sm hover:text-[#1a8dcc]">Facebook</Link>
                        <Link href="https://www.linkedin.com/company/marktaleworld" target="_blank" className="text-sm hover:text-[#1a8dcc]">LinkedIn</Link>
                        <Link href="https://www.instagram.com/marktaleworld/" target="_blank" className="text-sm hover:text-[#1a8dcc]">Instagram</Link>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>©️ Copyright MarkTale World Private Limited. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <Link href="/about" className="hover:text-white">About Us</Link>
                    <Link href="/projects" className="hover:text-white">Projects</Link>
                    <Link href="/contact" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
