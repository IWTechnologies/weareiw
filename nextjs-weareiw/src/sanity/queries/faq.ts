import { groq } from "next-sanity";

// get all FAQ posts
export const fetchAllFaqPosts = groq`
    *[_type == "faqPost"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        publishedAt,
        category
    }
`;

// get all individual FAQ details
export const fetchAllFaqBySlug = groq`
    *[_type == "faqPost" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        publishedAt,
        metaDescription,
        seoTitle,
        category,
        body
    }
`;