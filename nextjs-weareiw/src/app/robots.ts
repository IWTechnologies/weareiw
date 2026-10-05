import { MetadataRoute } from "next";
import { BASE_URL } from "@/sanity/lib/constants";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: "/studio/",
            },
            {
                userAgent: [
                    "AhrefsBot",
                    "SemrushBot",
                    "DotBot",
                    "MJ12bot",
                    "BLEXBot",
                ],
                disallow: "/",
            },
            {
                userAgent: "*",
                allow: "/",
                disallow: "/studio/",
                crawlDelay: 10,
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}