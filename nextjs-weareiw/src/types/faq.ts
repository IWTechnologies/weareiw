export type Faqs = {
    _id: string;
    title: string;
    slug: string;
    category: string;
};

export type FaqDetail = Faqs & {
    body: any[];
    metaDescription: string;
    seoTitle: string;
};