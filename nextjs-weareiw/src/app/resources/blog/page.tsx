import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

import { client } from "@/sanity/lib/client";
import { fetchAllBlogPosts, fetchAllBlogsBySlug } from "@/sanity/queries/blog";
import { Blog, BlogDetail } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
};


export default async function BlogPage() {
    const blogs: Blog[] = await client.fetch(fetchAllBlogPosts);

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Explore our blog
                    </h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {blogs.map((blog) => (
                        <div key={blog._id} className="">
                            <Card 
                                imageSrc={blog.image}
                                imageAlt={blog.altText}
                                imageWidth={663}
                                imageHeight={432}
                                text={
                                    <>
                                    <h4>{blog.title}</h4>
                                    </>
                                }
                                link={{
                                    href: `/resources/blog/${blog.slug}`,
                                    label: "Read more",
                                    variant: "dark",
                                }}
                            />
                        </div>

                        // <Link key={blog._id} href={`/resources/blog/${blog.slug}`}
                        // className="w-full flex flex-col p-4 rounded-3xl bg-brand-black overflow-hidden">
                        //     <div className="w-full h-48 py-2.5 rounded-3xl overflow-hidden bg-white">
                        //         <img src={blog.image} alt={blog.altText}
                        //         className="w-full h-full object-contain" />
                        //     </div>
                        //     <h3 className="w-full py-4 text-center font-semibold text-white">
                        //         {blog.title}
                        //     </h3>
                        // </Link>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}