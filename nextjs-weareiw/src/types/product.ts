export type ProductCategory = {
    _id: string;
    title: string;
    slug: string;
};

export type Product = {
    _id: string;
    name: string;
    slug: string;
    image: string;
    category: string;
    categorySlug: string;
};

export type ProductDetail = Product & {
    description: any[];
    specs: string;
};