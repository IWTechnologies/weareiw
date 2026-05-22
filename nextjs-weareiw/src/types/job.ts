export type JobCategory = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    categoryImage: string;
};

export type Job = {
    _id: string;
    jobTitle: string;
    slug: string;
    location: string;
    type: string;
    category: string;
};

export type JobDetail = Job & {
    jobDescription: any[];
    categorySlug: string;
};