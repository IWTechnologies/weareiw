import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { fetchAllFaqPosts, fetchAllFaqBySlug } from "@/sanity/queries/faq";
import { FaqDetail } from "@/types/faq";
import { PortableText } from "next-sanity";

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = await params;
    const faq: FaqDetail = await client.fetch(fetchAllFaqBySlug, { slug });

    if (!faq) {
        return {
            title: "Blog Post Not Found - IW Technologies",
        };
    }

    return {
        title: `${faq.seoTitle} - IW Technologies`,
        description: `${faq.metaDescription}`,
        openGraph: {
            title: faq.seoTitle,
            description: faq.metaDescription,
            images: [
                {
                    url: 'iw-logo-simple.png'
                }
            ],
        },
    }
}

// pre-render pages at build time
export async function generateStaticParams() {
    const blogs = await client.fetch(fetchAllFaqPosts);
    
    return blogs.map((blog: { slug: string }) => ({
        slug: blog.slug,
    }));
}

export default async function FaqDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const faq: FaqDetail = await client.fetch(fetchAllFaqBySlug, { slug });

    if (!faq) notFound();

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <a href="/faq"
                        className="w-fit h-fit px-4 py-2 text-center 
                        border-3 border-brand-black bg-brand-black text-white rounded-md
                        hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        transition duration-300 ease-in-out">
                            ← Go back
                        </a>
                    
                    <div className="w-full flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col pl-2 border-brand-aqua border-l-4 gap-2">
                                <h1>{faq.title}</h1>
                            </div>

                            {/* only render if blog content exists for faq */}
                            {faq.body && (
                                <div className="prose prose-ink-black prose-figure:m-0 max-w-none">
                                    <PortableText value={faq.body} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}