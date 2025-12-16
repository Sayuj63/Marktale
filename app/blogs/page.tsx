"use client";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { blogPosts } from "@/lib/blog-data";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <div className="bg-black text-white pt-32 pb-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Insights & News</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Latest trends, strategies, and stories from the world of tech and marketing.
                </p>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <CardContainer key={index} className="inter-var w-full">
                            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border flex flex-col h-full">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {post.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow"
                                >
                                    {post.snippet}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <div className="h-60 w-full relative rounded-xl overflow-hidden group-hover/card:shadow-xl">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </CardItem>
                                <div className="flex justify-between items-center mt-8">
                                    <CardItem
                                        translateZ={20}
                                        as="div"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        {post.date} • {post.readTime}
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href={`/blogs/${post.slug}`}
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Read Now
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </main>
    );
}

