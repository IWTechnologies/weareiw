import { groq } from "next-sanity";

// get all news articles
export const fetchAllNewsPosts = groq`
    *[_type == "newsArticle"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        "altText": image.asset->altText,
        publishedAt
    }
`;

// get all individual news details
export const fetchAllNewsBySlug = groq`
    *[_type == "newsArticle" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        "altText": image.asset->altText,
        publishedAt,
        metaDescription,
        seoTitle,
        body
    }
`;