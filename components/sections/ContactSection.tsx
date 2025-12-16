"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function ContactSection({ title = "Get In Touch", subtitle = "Ready to start your project? We'd love to hear from you." }: { title?: string, subtitle?: string }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate sending
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        if (formRef.current) formRef.current.reset();
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="contact">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">{title}</h2>
                    <p className="text-lg text-gray-600">{subtitle}</p>
                </div>

                <div className="w-full max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-gray-900 block">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a8dcc]/20 focus:border-[#1a8dcc] transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-900 block">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a8dcc]/20 focus:border-[#1a8dcc] transition-all"
                                    placeholder="hello@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-gray-900 block">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a8dcc]/20 focus:border-[#1a8dcc] transition-all"
                                placeholder="Project inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-900 block">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a8dcc]/20 focus:border-[#1a8dcc] transition-all resize-none"
                                placeholder="Tell us about the project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="w-full py-4 px-8 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "submitting" ? (
                                <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                            ) : status === "success" ? (
                                <span>Message Sent! ✓</span>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
