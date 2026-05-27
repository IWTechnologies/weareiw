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
        <main>
            <section className="w-[80%] mx-auto py-14 text-brand-black">
                <a href={`/opportunities/${job.categorySlug}`}
                className="hover:text-brand-aqua">← Go back</a>
                <h1>{job.jobTitle}</h1>
                <div className="flex gap-4 mt-2 text-sm">
                    <p>{job.city}</p>
                    <p>{job.state}</p>
                    <p>{job.type}</p>
                    <p>{job.category}</p>
                    <p>{job.categorySlug}</p>
                </div>
                <div className="mt-10 prose max-w-none">
                    <PortableText value={job.jobDescription} />
                </div>
            </section>
        </main>
    );
}