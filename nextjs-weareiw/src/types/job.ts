export type JobCategory = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categoryImage: string;
    jobCount: number;
};

export type Job = {
    _id: string;
    jobTitle: string;
    slug: string;
    city: string;
    state: string;
    type: string;
    category: string;
};

export type JobDetail = Job & {
    jobDescription: any[];
    categorySlug: string;
};