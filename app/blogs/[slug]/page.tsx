import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | MarkTale Insights`,
        description: post.metaDescription,
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
            type: 'article',
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Read Progress Bar (Optional - could be added later) */}

            {/* Hero Header */}
            <header className="relative w-full h-[60vh] bg-black text-white flex flex-col justify-end pb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-4 text-sm md:text-base font-medium text-[#ffdd58]">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto prose prose-lg prose-neutral md:prose-xl">
                    {/* 
            Rendering emulated HTML content. 
            In a real app, this might come from a CMS or MDX file. 
            For security, use standard component mapping or a safe HTML parser if user input is involved.
            Here we trust our internal data file.
          */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Back to Blog */}
                <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-gray-200">
                    <a href="/blogs" className="inline-flex items-center text-[#1a8dcc] font-bold hover:underline">
                        ← Back to All Articles
                    </a>
                </div>
            </div>
        </article>
    );
}
