"use client";

import { Calendar, Phone } from "lucide-react";

export function BookAppointment() {
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

                    {/* Right Form Placeholder */}
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black" placeholder="+91 99999 99999" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-black h-24" placeholder="How can we help?" />
                            </div>
                            <button type="submit" className="w-full bg-[#1a8dcc] text-white py-3 rounded-lg font-bold hover:bg-[#157ab8] transition-colors">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
