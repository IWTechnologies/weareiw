import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { fetchAllBlogPosts } from "@/sanity/queries/blog";
import { Blog } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Blog - IW Technologies",
        description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
        url: `${BASE_URL}/resources/blog`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Blog IW Technologies',
            }
        ],
    },
};


export default async function BlogPage() {
    const blogs: Blog[] = await client.fetch(fetchAllBlogPosts);

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="max-w-333.25 w-[80%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Explore our Blog
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {blogs.map((blog) => (
                            <Link key={blog._id} href={`/resources/blog/${blog.slug}`}
                            className="group w-full flex flex-col rounded-3xl overflow-hidden
                            transition duration-300 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                                {/* display blog image, if not blog image. use fallback image */}
                                <div className="w-full h-96 rounded-3xl overflow-hidden">
                                    <img src={blog.image || "/IWT_Logomark_White.png"} alt={blog.altText}
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                                </div>
                                <h4 className="w-full p-4 text-start transition-transform duration-300 ease-in-out font-semibold text-brand-black group-hover:text-brand-aqua">
                                    {blog.title}
                                </h4>
                            </Link>
                        ))} 
                    </div>
                </div>
            </section>
        </div>
    )
}