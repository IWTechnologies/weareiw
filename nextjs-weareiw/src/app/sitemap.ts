import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { BASE_URL } from "@/sanity/lib/constants";
import { groq } from "next-sanity";

const allSlugsQuery = groq`
    {
        "blogPost": *[_type == "blogPost"] { "slug": slug.current, _updatedAt },
        "newsArticle": *[_type == "newsArticle"] { "slug": slug.current, _updatedAt },
        "products": *[_type == "products"] { "slug": slug.current, _updatedAt },
        "jobs": *[_type == "jobs" && active == true] {
            "slug": slug.current,
            "categorySlug": category->slug.current,
            _updatedAt
        },
        "jobCategory": *[_type == "jobCategory"] { "slug": slug.current, _updatedAt },
        "faqPosts": *[_type == "faqPosts"] { "slug": slug.current, _updatedAt },
    }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await client.fetch(allSlugsQuery);

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/about/our-story`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/about/our-team`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services/procurement`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/services/deployment`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/services/maintenance`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/services/disposition`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/services/low-voltage`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/products`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/resources`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/resources/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/resources/news`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/careers`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/opportunities`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/faq`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/get-in-touch`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = data.posts.map((post: any) => ({
        url: `${BASE_URL}/resources/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const newsPages: MetadataRoute.Sitemap = data.news.map((item: any) => ({
        url: `${BASE_URL}/resources/news/${item.slug}`,
        lastModified: new Date(item._updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const productPages: MetadataRoute.Sitemap = data.products.map((product: any) => ({
        url: `${BASE_URL}/products/${product.slug}`,
        lastModified: new Date(product._updatedAt),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const jobCategoryPages: MetadataRoute.Sitemap = data.jobCategories.map((cat: any) => ({
        url: `${BASE_URL}/opportunities/${cat.slug}`,
        lastModified: new Date(cat._updatedAt),
        changeFrequency: "weekly",
        priority: 0.6,
    }));

    const jobPages: MetadataRoute.Sitemap = data.jobs.map((job: any) => ({
        url: `${BASE_URL}/opportunities/${job.categorySlug}/${job.slug}`,
        lastModified: new Date(job._updatedAt),
        changeFrequency: "weekly",
        priority: 0.5,
    }));

    const faqPages: MetadataRoute.Sitemap = data.faqItems.map((item: any) => ({
        url: `${BASE_URL}/faq/${item.slug}`,
        lastModified: new Date(item._updatedAt),
        changeFrequency: "monthly",
        priority: 0.5,
    }));

    return [
        ...staticPages,
        ...blogPages,
        ...newsPages,
        ...productPages,
        ...jobCategoryPages,
        ...jobPages,
        ...faqPages,
    ];
}