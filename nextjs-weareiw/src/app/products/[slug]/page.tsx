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

export default async function ProductDetailPage({ params }: { params: { slug: string, categorySlug: string } }) {
    const { slug } = await params;
    const product: ProductDetail = await client.fetch(fetchAllProductsBySlug, { slug });

    if (!product) notFound();

    return (
        <div>
            <section className="w-full py-14 text-brand-black">
                {/* put the below structure within a flex-col div */}
                <div className="w-[70%] mx-auto flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-10">
                        <a href="/products#pos"
                        className="w-fit h-fit px-4 py-2 text-center 
                        border-3 border-brand-black bg-brand-black text-white rounded-md
                        hover:bg-transparent hover:text-brand-black active:bg-transparent active:text-brand-black
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        transition duration-300 ease-in-out">
                            ← Go back to products
                        </a>

                        <div className="w-full flex flex-col lg:flex-row gap-8">
                            <div className="w-full lg:w-1/2 xl:w-1/3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto rounded-2xl object-cover"
                                />
                            </div>

                            <div className="w-full lg:w-1/2 xl:w-2/3 flex flex-col gap-4">
                                <div className="w-full flex flex-col pl-2 border-brand-aqua border-l-4 gap-2">
                                    <h1>{product.name}</h1>
                                    <h3>{product.category}</h3>
                                </div>

                                {/* only render if spec url exists for product */}
                                {product.specs && (
                                    <a href={product.specs} target="_blank" rel="noopener noreferrer"
                                    className="w-fit text-brand-black underline
                                    hover:text-brand-aqua hover:cursor-pointer
                                    transition duration-300">
                                        View Specs
                                    </a>
                                )}

                                {/* only render if description exists for product */}
                                {product.description && (
                                    <div className="prose prose-ink-black prose-ul:font-semibold max-w-none">
                                        <PortableText value={product.description} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}