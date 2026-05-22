import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

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
                <div className="w-full py-14 rounded-t-3xl bg-background">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {categories.map((category) => (
                            <Link key={category._id} 
                            href={`/careers/opportunities/${category.slug}`}
                            className="group">
                                <Card
                                    text={
                                        <>
                                            <h3 className="hover:text-brand-aqua">{category.title}</h3>
                                        </>
                                    }
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}