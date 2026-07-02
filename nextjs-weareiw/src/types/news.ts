export type News = {
    _id: string;
    title: string;
    slug: string;
    image: string;
    altText: string;
};

export type NewsDetail = News & {
    body: any[];
    metaDescription: string;
    seoTitle: string;
};