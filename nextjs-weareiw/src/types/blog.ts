export type Blog = {
    _id: string;
    title: string;
    slug: string;
    image: string;
};

export type BlogDetail = Blog & {
    body: any[];
    metaDescription: string;
    seoTitle: string;
};