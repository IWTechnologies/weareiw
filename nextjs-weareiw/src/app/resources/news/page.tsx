import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { fetchAllNewsPosts } from "@/sanity/queries/news";
import { News } from "@/types/news";

export const metadata: Metadata = {
  title: "News - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "News - IW Technologies",
        description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
        url: `${BASE_URL}/resources/news`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'News IW Technologies',
            }
        ],
    },
};


export default async function NewsPage() {
    const news: News[] = await client.fetch(fetchAllNewsPosts);

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="max-w-333.25 w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Explore the Latest News
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {news.map((news) => (
                            <Link key={news._id} href={`/resources/news/${news.slug}`}
                            className="group w-full flex flex-col rounded-3xl overflow-hidden
                            transition duration-300 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                                {/* display blog image, if not blog image. use fallback image */}
                                <div className="w-full h-96 rounded-3xl overflow-hidden">
                                    <img src={news.image || "/IWT_Logomark_White.png"} alt={news.altText}
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
                                </div>
                                <h4 className="w-full p-4 text-start transition-transform duration-300 ease-in-out font-semibold text-brand-black group-hover:text-brand-aqua">
                                    {news.title}
                                </h4>
                            </Link>
                        ))} 
                    </div>
                </div>
            </section>
        </div>
    )
}