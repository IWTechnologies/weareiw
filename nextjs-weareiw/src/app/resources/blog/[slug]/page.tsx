import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { fetchAllBlogsBySlug, fetchAllBlogPosts } from "@/sanity/queries/blog";
import { BlogDetail } from "@/types/blog";
import { PortableText } from "next-sanity";

import { PortableTextComponents } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

// tables are custom types and this allows any tables in the body to be rendered.
// images are custom types and this allows any images in the body to be rendered.
// these are passed into the portable text component
const components: PortableTextComponents = {
    types: {
        table: ({ value }) => {
            if (!value?.rows || value.rows.length === 0) return null;

            // Extract the first row as the header, and the rest as body rows
            const [headerRow, ...bodyRows] = value.rows;

            return (
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse my-6">
                        <thead>
                            <tr>
                                {headerRow.cells?.map((cell: string, cellIndex: number) => (
                                    <th key={cellIndex} className="border border-brand-black/20 p-3">
                                        {cell}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row: any, rowIndex: number) => (
                                <tr key={rowIndex}>
                                    {row.cells.map((cell: string, rowIndex: number) => (
                                        <td key={rowIndex} className="border border-brand-black/20 p-3">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        },
        image: ({ value }) => {
            if (!value?.asset?._ref) return null;

            return (
                <figure className="">
                    <img
                        src={urlFor(value).width(300).fit('max').auto('format').url()}
                        alt={value.alt || 'Blog image'}
                        className="max-w-full h-auto"
                        loading="lazy"
                    />
                </figure>
            );
        },
    },
};

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = await params;
    const blog: BlogDetail = await client.fetch(fetchAllBlogsBySlug, { slug });

    if (!blog) {
        return {
            title: "Blog Post Not Found - IW Technologies",
        };
    }

    return {
        title: `${blog.seoTitle} - IW Technologies`,
        description: `${blog.metaDescription}`,
        openGraph: {
            type: "article",
            siteName: "IW Technologies",
            title: blog.seoTitle,
            description: blog.metaDescription,
            url: `${BASE_URL}/resources/blog/${slug}`,
            images: [
                {
                    url: blog.image || `${BASE_URL}/iw-logo-simple.png`
                }
            ],
        },
    }
}

// pre-render pages at build time
export async function generateStaticParams() {
    const blogs = await client.fetch(fetchAllBlogPosts);
    
    return blogs.map((blog: { slug: string }) => ({
        slug: blog.slug,
    }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const blog: BlogDetail = await client.fetch(fetchAllBlogsBySlug, { slug });

    if (!blog) notFound();

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <a href="/resources/blog"
                        className="w-fit h-fit px-4 py-2 text-center 
                        border-3 border-brand-black bg-brand-black text-white rounded-md
                        hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        transition duration-300 ease-in-out">
                            ← Go back
                        </a>
                    
                    <div className="w-full flex flex-col gap-8">
                        {/* only render if blog image exists for blog */}
                        {blog.image && (
                            <div className="w-full lg:w-[70%] mx-auto">
                                <img
                                    src={blog.image}
                                    alt={blog.altText}
                                    className="w-full h-auto rounded-2xl object-contain"
                                />
                            </div>
                        )}

                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col pl-2 border-brand-aqua border-l-4 gap-2">
                                <h1>{blog.title}</h1>
                            </div>

                            {/* only render if blog content exists for blog */}
                            {blog.body && (
                                <div className="prose prose-ink-black prose-figure:m-0 max-w-none">
                                    <PortableText value={blog.body} components={components} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}