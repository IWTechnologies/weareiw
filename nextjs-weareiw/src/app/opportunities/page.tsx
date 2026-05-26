import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

import { client } from "@/sanity/lib/client";
import { fetchAllJobCategories } from "@/sanity/queries/job";
import { JobCategory } from "@/types/job";

export const metadata: Metadata = {
  title: "Opportunities - IW Technologies",
  description: "Opportunities at IW Technologies.",
};

export default async function OpportunitiesPage() {
    const categories: JobCategory[] = await client.fetch(fetchAllJobCategories);

    return (
        <div>
            <section className="h-fit text-white">
                <Hero 
                    imageSrc="/heroImages/shutterstock1.jpg"
                    imageAlt="Blue tinted procurement hero image"
                    imageWidth={813}
                    imageHeight={457}
                    text={
                    <>
                        <h1>Current Opportunities</h1>
                        <p>
                            We're building a culture where amazing people (like you) can 
                            do their best work.
                        </p>
                        <p>
                            If you're ready to level-up and gorw your career, you've come 
                            to the right place.
                        </p>
                    </>
                    }
                />
            </section>

            <section className="w-full bg-brand-black">
                <div className="w-full py-16 rounded-t-3xl bg-background">
                    <div className="w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categories.map((category) => (
                            <Link key={category._id} 
                            href={`/opportunities/${category.slug}`}
                            className="group relative w-full h-40 lg:h-60 flex flex-col justify-center items-center rounded-3xl overflow-hidden">
                                <div className="">
                                    <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-navy/40 to-transparent" />
                                    <img
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0"
                                    src={category.categoryImage} alt={category.title} />
                                    <h3 className="relative z-20 w-fit h-fit p-2 rounded-2xl border-2 border-white/20
                                    group-hover:border-brand-aqua transition-opacity duration-300 
                                    text-white text-shadow-lg backdrop-blur-sm">{category.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-brand-black">
                <div className="w-[60%] mx-auto flex flex-col items-center gap-5">
                    <h2 className="text-white">
                        Not sure where you fit?
                    </h2>
                    <p className="text-white">
                        We believe diversity brings a fresh perspective. If you're ready for the 
                        next career step, but not sure which role best fits your skill set, we 
                        want to hear from you.
                    </p>
                    <a href="mailto:hr@weareiw.com"
                    className="bg-background text-brand-black border-3 border-background 
                    transition duration-300 ease-in-out px-[1em] py-[.33em] rounded-md
                    hover:bg-transparent hover:text-white active:bg-transparent active:text-white"
                    >
                        Send Us Your Resume
                    </a>
                </div>
            </section>
        </div>
    )
}