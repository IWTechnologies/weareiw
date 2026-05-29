import { client } from "@/sanity/lib/client";
import { fetchJobBySlug } from "@/sanity/queries/job";
import { JobDetail } from "@/types/job";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function JobDetailPage({ params }: { params: { slug: string, jobSlug: string } }) {
    //const { slug } = await params;
    const { jobSlug } = await params;
    const job: JobDetail = await client.fetch(fetchJobBySlug, { slug: jobSlug });

    if (!job) notFound();

    return (
        <div>
            <section className="w-full py-14 text-brand-black">
                {/* put the below structure within a flex-col div */}
                <div className="w-[70%] mx-auto flex flex-col gap-3">
                    <div className="w-fit flex flex-col gap-5">
                        <a href={`/opportunities/${job.categorySlug}`}
                        className="w-fit h-fit px-4 py-2 text-center 
                        border-3 border-brand-black bg-brand-black text-white rounded-md
                        hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        transition duration-300 ease-in-out">
                            ← Go back
                        </a>

                        <h1 className="w-fit border-b-4 border-brand-aqua">{job.jobTitle}</h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-2">
                            <span className="flex items-center gap-1">
                                <img src="/careerImages/icons/location-dot-solid-full.svg" 
                                alt="location pin icon" height="25" width="25"
                                className="" />
                                <p>{job.city},</p>
                                <p>{job.state}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <img src="/careerImages/icons/clock-solid-full.svg" 
                                alt="location pin icon" height="25" width="25"
                                className="" />
                                <p>{job.type}</p>
                            </span>
                            <span className="flex items-center gap-1">
                                <img src="/careerImages/icons/user-solid-full.svg" 
                                alt="location pin icon" height="25" width="25"
                                className="" />
                                <p>{job.category}</p>
                            </span>
                        </div>
                    </div>
                    

                    <div className="mt-10">
                        <h2>Job Summary:</h2>
                        <div className="prose prose-ink-black max-w-none">
                            <PortableText value={job.jobDescription} />
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}