import { groq } from "next-sanity";

// get all blog posts
export const fetchAllBlogPosts = groq`
    *[_type == "blogPost"] | order(name asc) {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
    }
`;

// get all individual blog details
export const fetchAllBlogsBySlug = groq`
    *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        metaDescription,
        seoTitle,
        body
    }
`;