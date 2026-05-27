import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { fetchJobsByCategory } from "@/sanity/queries/job";
import { Job } from "@/types/job";

type CategoryData = {
    jobs: Job[];
    category: {
        title: string;
        description: string;
    } | null;
};

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = await params;
    const data: CategoryData = await client.fetch(fetchJobsByCategory, { slug });

    if (!data.category) {
        return {
            title: "Opportunities - IW Technologies",
        };
    }

    return {
        title: `${data.category.title} Opportunities - IW Technologies`,
        description: `View current ${data.category.title} opportunities at IW Technologies.`,
    };
}

// export const metadata: Metadata = {
//   title: "View placeholder opportunites - IW Technologies",
//   description: "View placeholder opportunites at IW Technologies.",
// };

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const data: CategoryData = await client.fetch(fetchJobsByCategory, { slug });

    if (!data.category) notFound();

    const { jobs, category } = data;

    if (!jobs.length) {
        return (
            <div>
                <section className="w-full py-16 text-brand-black">
                    <div className="w-[60%] mx-auto flex flex-col gap-4">
                        <h1 className="border-b-4 border-brand-aqua pb-4 mb-4">
                            Current {category.title} Opportunities
                        </h1>
                        <div>No open roles available at this time.</div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className="w-full py-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-4">
                    <h1 className="border-b-4 border-brand-aqua pb-4 mb-4">
                        Current {category.title} Opportunities
                    </h1>
                    {jobs.map((job) => (
                        <div key={job._id} 
                        className="w-full flex flex-col lg:flex-row p-6 rounded-2xl shadow-lg bg-white gap-4">
                            <div
                            className="w-full flex flex-col lg:flex-row 
                            justify-between items-center gap-4"
                            >
                                <div className="w-full lg:w-2/6 flex flex-col gap-2">
                                    <h3 className="">
                                        {job.jobTitle}
                                    </h3>
                                    <p>
                                        We're looking for a {job.jobTitle} to join our team. 
                                    </p>
                                </div>
                                
                                <div className="w-full lg:w-3/6 flex flex-col lg:flex-row justify-start text-sm gap-2">
                                    <span className="w-fit flex items-center py-2 px-4 border-2 border-brand-black/5 bg-background rounded-3xl gap-0.5">
                                        <img src="/careerImages/icons/location-dot-solid-full.svg" 
                                        alt="location pin icon" height="25" width="25"
                                        className="" />
                                        <span className="w-full flex flex-col md:flex-row gap-0.5">
                                            <p>{job.city},</p>
                                            <p>{job.state}</p>
                                        </span>
                                    </span>
                                    <p className="w-fit p-2 border-2 border-brand-black/5 bg-background rounded-3xl">
                                        {job.type}
                                    </p>
                                </div>
                                {/* <div className="w-full lg:w-1/6 flex justify-start lg:justify-center">
                                    <p className="w-fit p-2 border-2 border-brand-black/5 bg-background rounded-3xl">
                                        {job.type}
                                    </p>
                                </div> */}
                                
                            </div>
                            <div className="w-full md:w-[50%] mx-auto lg:w-1/6 flex justify-end lg:justify-center items-center">
                                <a href={`/opportunities/${job.slug}`}
                                className="w-full h-fit p-2 text-center 
                                border-3 border-brand-black bg-brand-black text-white rounded-3xl
                                hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black
                                focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                                transition duration-300 ease-in-out"
                                >
                                    Apply
                                </a>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}