import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { fetchAllProductsBySlug, fetchAllProducts } from "@/sanity/queries/product";
import { ProductDetail } from "@/types/product";
import { PortableText } from "next-sanity";

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const { slug } = await params;
    const product: ProductDetail = await client.fetch(fetchAllProductsBySlug, { slug });

    if (!product) {
        return {
            title: "Product Not Found - IW Technologies",
        };
    }

    return {
        title: `${product.name} - IW Technologies`,
        description: `Learn more about ${product.name} from IW Technologies.`,
        openGraph: {
            title: product.name,
            images: [
                {
                    url: product.image
                }
            ],
        },
    }
}

// pre-render pages at build time
export async function generateStaticParams() {
    const products = await client.fetch(fetchAllProducts);
    
    return products.map((product: { slug: string }) => ({
        slug: product.slug,
    }));
}