import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { fetchJobsByCategory } from "@/sanity/queries/job";
import { Job } from "@/types/job";

export const metadata: Metadata = {
  title: "View placeholder opportunites - IW Technologies",
  description: "View placeholder opportunites at IW Technologies.",
};

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const jobs: Job[] = await client.fetch(fetchJobsByCategory, { slug })

    if (!jobs.length) {
        return (
            <div>
                <section className="w-full py-16 text-brand-black">
                    <div className="w-[80%] lg:w-[60%] mx-auto flex flex-col gap-4">
                        <h1 className="w-full">Current Opportunities</h1>
                        <p className="w-full">No open roles at this time.</p>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
        <div>
            <section className="w-full py-16 text-brand-black">
                <div className="w-[80%] lg:w-[60%] mx-auto flex flex-col gap-4">
                    <h1 className="w-full">Current Opportunities</h1>
                    <div className="hidden w-full lg:flex justify-between items-end px-6">
                        <div className="w-2/4">ROLE</div>
                        <div className="w-1/4">LOCATION</div>
                        <div className="w-1/4">EMPLOYMENT STATUS</div>
                    </div>
                    {jobs.map((job) => (
                        <div key={job._id} className="flex flex-col">
                            <Link  
                            href={`/opportunities/${job.slug}`}
                            className="group w-full flex flex-col items-center lg:flex-row lg:justify-between p-6 rounded-2xl 
                            shadow-lg border-2 border-brand-black/20
                            ">
                                <h3 className="w-full lg:w-2/4 group-hover:text-brand-aqua">{job.jobTitle}</h3>
                                <p className="w-full lg:w-1/4 group-hover:text-brand-aqua">{job.location}</p>
                                <p className="w-full lg:w-1/4 group-hover:text-brand-aqua">{job.type}</p>
                            </Link>
                        </div>
                        
                    ))}
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

    
}