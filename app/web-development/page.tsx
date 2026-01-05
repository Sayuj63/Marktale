"use client";

import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Rocket, Shield, Zap, Globe, Smartphone, TrendingUp } from "lucide-react";

export default function WebDevelopmentPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        "Custom development tailored to your business logic",
        "Clean, maintainable code for long-term scalability",
        "SEO-first architecture that supports organic visibility",
        "Security best practices to protect data and users",
        "Performance optimization for faster load times and higher engagement"
    ];

    const platforms = [
        {
            icon: Code2,
            title: "Custom Web Development",
            description: "For complex business logic and enterprise requirements"
        },
        {
            icon: Globe,
            title: "WordPress Development",
            description: "Flexible content management and SEO-friendly publishing"
        },
        {
            icon: Smartphone,
            title: "ECommerce Platforms",
            description: "Shopify or WooCommerce for conversion-driven online stores"
        },
        {
            icon: Zap,
            title: "Headless CMS Solutions",
            description: "Omnichannel content delivery and performance"
        }
    ];

    const conversionStrategies = [
        "Intuitive navigation and content hierarchy",
        "Persuasive messaging aligned with user intent",
        "Optimized forms and checkout flows",
        "Trust signals such as testimonials, certifications, and social proof",
        "Analytics integration for continuous optimization"
    ];

    const outcomes = [
        "Higher search engine visibility",
        "Increased conversion rates",
        "Improved user retention",
        "Reduced maintenance costs through scalable architecture"
    ];

    const faqs = [
        {
            question: "How long does a web development project take?",
            answer: "Project timelines vary based on complexity, features, and integrations. Most projects range from several weeks to a few months, with clear milestones throughout."
        },
        {
            question: "Do you provide SEO-ready websites?",
            answer: "Yes. Every website is built with technical SEO best practices, including clean URLs, optimized page speed, mobile responsiveness, and structured data readiness."
        },
        {
            question: "Can you redesign an existing website?",
            answer: "We specialize in website redesigns that improve performance, usability, and conversions while preserving brand equity."
        },
        {
            question: "Is ongoing support available after launch?",
            answer: "We offer maintenance, performance monitoring, and continuous optimization to ensure long-term success."
        },
        {
            question: "Do you build secure websites?",
            answer: "Security is embedded into our development process, including SSL implementation, secure authentication, and regular updates."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-black text-white pt-32 pb-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a8dcc]/10 to-transparent"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            WEB DEVELOPMENT SERVICES
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-semibold mb-4">
                            Your Partner For High-Performing Web Development
                        </p>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We deliver web development services engineered for performance, scalability, and long-term business growth. Our approach blends technical excellence, conversion-focused design, and strategic architecture to create digital experiences that attract, engage, and convert.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed">
                            Every website we build is designed to perform flawlessly across devices, load at lightning speed, and support measurable outcomes—from lead generation to eCommerce revenue. Our team works as a strategic extension of your business, aligning development decisions with your goals. From startups to enterprises, we craft custom web solutions that reflect your brand identity, support operational efficiency, and future-proof your digital presence.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#1a8dcc]/5 to-[#ffdd58]/5 rounded-2xl p-8 md:p-12 border border-[#1a8dcc]/10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Start Your Project Today</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A high-performing website begins with a clear strategy and a disciplined execution plan. We initiate every project with a deep understanding of your objectives, audience behavior, and competitive landscape. This foundation enables us to build secure, scalable, and SEO-ready websites that perform from day one.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our process is transparent and collaborative, ensuring timely delivery without compromising quality. Whether launching a new platform or modernizing an existing one, we help you move forward with confidence.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black text-center">
                            Is Your Website Driving Customers Away?
                        </h2>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Slow load times, outdated interfaces, poor mobile responsiveness, and confusing navigation cost businesses valuable opportunities. A website that fails to communicate value or guide users effectively erodes trust and diminishes conversions.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We eliminate friction points through performance optimization, UX refinement, and conversion-focused layouts. By improving page speed, accessibility, and content hierarchy, we transform underperforming websites into powerful acquisition and engagement tools.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-black text-center">
                            What Sets Us Apart: A Team That Builds Winning Websites
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                            Our strength lies in our multidisciplinary expertise. We combine front-end engineering, back-end development, UI/UX design, and technical SEO into a single, cohesive workflow. This integrated approach ensures every component of your website works together seamlessly.
                        </motion.p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#1a8dcc] transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#1a8dcc] flex-shrink-0 mt-1" />
                                        <p className="text-gray-800 font-medium leading-relaxed">{feature}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mt-12 text-center font-semibold">
                            We do not rely on templates. Every solution is purpose-built to deliver results.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Framework Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-black text-center">
                            Our Proven Framework for High-Performing Websites
                        </motion.h2>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Discovery & Strategy",
                                    description: "We define goals, success metrics, and technical requirements. Audience research and competitor analysis inform design and functionality decisions.",
                                    icon: Rocket
                                },
                                {
                                    title: "UX/UI Design",
                                    description: "User journeys are mapped to reduce friction and guide actions. Visual design reinforces brand credibility while prioritizing usability and accessibility.",
                                    icon: Smartphone
                                },
                                {
                                    title: "Development & Integration",
                                    description: "Our developers implement robust architectures using modern frameworks and secure coding standards. Third-party integrations, APIs, and CMS configurations are executed with precision.",
                                    icon: Code2
                                },
                                {
                                    title: "Quality Assurance & Optimization",
                                    description: "Rigorous testing ensures cross-browser compatibility, responsive performance, and security compliance. Speed optimization and on-page SEO are finalized before launch.",
                                    icon: Shield
                                },
                                {
                                    title: "Launch & Continuous Improvement",
                                    description: "Post-launch monitoring and analytics guide ongoing enhancements, ensuring sustained performance and growth.",
                                    icon: TrendingUp
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="bg-gradient-to-br from-[#1a8dcc] to-[#1a8dcc]/80 p-4 rounded-xl">
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-black">{step.title}</h3>
                                            <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Platform Selection */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-black text-center">
                            Choosing the Right Platform to Match Your Vision
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                            Selecting the right technology stack is critical. We recommend platforms based on your objectives, scalability needs, and operational workflows.
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {platforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1a8dcc] transition-all duration-300 hover:shadow-xl group"
                                >
                                    <div className="bg-gradient-to-br from-[#1a8dcc] to-[#1a8dcc]/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <platform.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-black">{platform.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{platform.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mt-12 text-center">
                            Each platform is implemented with best practices to ensure speed, security, and maintainability.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Conversion Strategy */}
            <section className="py-20 bg-gradient-to-br from-[#1a8dcc]/5 to-[#ffdd58]/5">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-black text-center">
                            A Strategic Blueprint for Websites That Convert
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                            Conversion is not accidental—it is engineered. We design websites with clear value propositions, strategic calls-to-action, and data-driven layouts that guide users toward desired outcomes.
                        </motion.p>

                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-black">Our conversion strategy includes:</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {conversionStrategies.map((strategy, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#1a8dcc] flex-shrink-0 mt-1" />
                                        <p className="text-gray-800 leading-relaxed">{strategy}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mt-8 font-semibold">
                                This blueprint ensures your website functions as a reliable revenue and lead-generation asset.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Magento Highlight */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 md:p-16 text-center shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Enterprise E-Commerce Excellence
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            If you are a mid-sized or enterprise-level company looking for an effective and adaptable e-commerce solution, <span className="text-[#ffdd58] font-bold">Magento</span> and <span className="text-[#1a8dcc] font-bold">MarkTaleWorld's expertise</span> are the ideal combination for success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-black text-center">
                            Results That Speak for Themselves
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                            Our clients experience tangible improvements in performance and ROI. Faster load times reduce bounce rates, improved UX increases engagement, and SEO-optimized structures drive sustainable organic traffic.
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {outcomes.map((outcome, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-[#1a8dcc] transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-[#1a8dcc] to-[#1a8dcc]/80 p-3 rounded-lg">
                                            <CheckCircle2 className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-gray-800 font-semibold text-lg">{outcome}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mt-12 text-center">
                            These results are achieved through disciplined execution and a relentless focus on performance.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-12 text-black text-center">
                            Frequently Asked Questions
                        </motion.h2>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1a8dcc] transition-all duration-300 hover:shadow-lg"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-black">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactSection
                title="Ready to Build Your High-Performing Website?"
                subtitle="Let's discuss your project and create a website that drives real business results."
            />
        </main>
    );
}
