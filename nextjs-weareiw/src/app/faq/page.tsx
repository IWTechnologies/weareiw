import type { Metadata } from "next";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { fetchAllFaqPosts } from "@/sanity/queries/faq";
import { Faqs } from "@/types/faq";

export const metadata: Metadata = {
  title: "FAQ - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
};


export default async function BlogPage() {
    const faqs: Faqs[] = await client.fetch(fetchAllFaqPosts);

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-full flex flex-col gap-5">
                        {faqs.map((faq) => (
                            <Link key={faq._id} href={`/faq/${faq.slug}`}
                            className="group w-full flex flex-col p-4 rounded-3xl bg-white overflow-hidden shadow-md
                            transition duration-300 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                                <h4 className="w-full py-4 text-center transition duration-300 text-brand-black group-hover:text-brand-aqua">
                                    {faq.title} →
                                </h4>
                            </Link>
                        ))} 
                    </div>
                </div>
            </section>
        </div>
    )
}