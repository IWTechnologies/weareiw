import { groq } from "next-sanity";

// get all product categories for products page filter
export const fetchAllProductCategories = groq`
    *[_type == "productCategory"] | order(title asc) {
        _id,
        title,
        "slug": slug.current
    }
`;

// get all products with their category
export const fetchAllProducts = groq`
    *[_type == "products"] | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        "category": category->title,
        "categorySlug": category->slug.current
    }
`;

// get all individual product details
export const fetchAllProductsBySlug = groq`
    *[_type == "products"] | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        "category": category->title,
        "categorySlug": category->slug.current,
        description,
        specs
    }
`;