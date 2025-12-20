"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10">
            {/* Main Brand Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-center">
                <span className="text-[#1a8dcc]">MarkTale</span>
                <span className="block text-3xl md:text-5xl mt-4 font-normal text-[#ffdd58] italic">
                    – Powered by AI
                </span>
            </h1>

            {/* Bullet Points */}
            <ul className="flex flex-wrap justify-center gap-4 mb-10 text-gray-200 text-sm md:text-base max-w-4xl mx-auto">
                <li className="flex items-center gap-2">
                    <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                    30+ Brands Built
                </li>
                <li className="flex items-center gap-2">
                    <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                    Full-Stack Development
                </li>
                <li className="flex items-center gap-2">
                    <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                    In-house Team
                </li>
                <li className="flex items-center gap-2">
                    <span className="bg-[#1a8dcc] p-1 rounded-full text-white text-xs">✓</span>
                    Transparent Pricing
                </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#ffdd58] text-black text-lg font-bold rounded-lg hover:bg-[#ffe580] transition-colors inline-block text-center"
                >
                    Book Free Strategy Call
                </Link>
                <Link
                    href="/projects"
                    className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-black transition-colors inline-block text-center"
                >
                    View Our Work
                </Link>
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative shrink-0"
        >
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group-hover/product:shadow-2xl"
            >
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl">
                {product.title}
            </h2>
        </motion.div>
    );
};
