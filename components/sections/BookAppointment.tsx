"use client";

import { Calendar, Phone } from "lucide-react";
import { useState } from "react";

export function BookAppointment() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/teammarktaleworld@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    _subject: `New Quick Inquiry from ${data.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };
    return (
        <section className="py-20 bg-white" id="book-appointment">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">

                    {/* Left Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Let's Build Your Success Story
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Book a free 30-minute strategy call and get clarity on:
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <span className="w-2 h-2 rounded-full bg-[#1a8dcc]"></span>
                                Your growth roadmap
                            </li>
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <span className="w-2 h-2 rounded-full bg-[#1a8dcc]"></span>
                                Marketing & tech needs
                            </li>
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <span className="w-2 h-2 rounded-full bg-[#1a8dcc]"></span>
                                Budget optimization
                            </li>
                        </ul>

                        <div className="flex flex-col gap-4">
                            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                                <Calendar size={20} />
                                Book Appointment
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors">
                                <Phone size={20} />
                                WhatsApp Now
                            </button>
                        </div>
                    </div>

// ... imports at top need to change, see below calls ... this tool cannot change imports if they are far away.
                    // I will rewrite the component part first.

                    {/* Right Form Placeholder */}
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input name="name" type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input name="phone" type="tel" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black" placeholder="+91 99999 99999" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea name="message" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black h-24" placeholder="How can we help?" />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="w-full bg-[#1a8dcc] text-white py-3 rounded-lg font-bold hover:bg-[#157ab8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {status === "submitting" ? (
                                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                ) : status === "success" ? (
                                    <span>Sent! ✓</span>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
