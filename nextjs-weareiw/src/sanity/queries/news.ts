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
        "imageTitle": image.asset->title,
        "imageDescription": image.asset->description,
        publishedAt,
        metaDescription,
        seoTitle,
        body
    }
`;