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
                <section className="w-full py-16">
                    <div className="w-[60%] mx-auto flex flex-col gap-4">
                        <h1>Current {category.title} Opportunities</h1>
                        <div>No open roles at this time.</div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className="w-full py-16">
                <div className="w-[60%] mx-auto flex flex-col gap-4">
                    <h1>Current {category.title} Opportunities</h1>
                    <div className="w-full flex justify-between px-6">
                        <div className="w-2/4">ROLE</div>
                        <div className="w-1/4">LOCATION</div>
                        <div className="w-1/4">EMPLOYMENT STATUS</div>
                    </div>
                    {jobs.map((job) => (
                        <div key={job._id} className="flex flex-col">
                            <Link
                                href={`/opportunities/${job.slug}`}
                                className="group w-full flex justify-between p-6 rounded-2xl
                                shadow-lg border-2 border-brand-black/20"
                            >
                                <h3 className="w-2/4 group-hover:text-brand-aqua">{job.jobTitle}</h3>
                                <p className="w-1/4 group-hover:text-brand-aqua">{job.location}</p>
                                <p className="w-1/4 group-hover:text-brand-aqua">{job.type}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}