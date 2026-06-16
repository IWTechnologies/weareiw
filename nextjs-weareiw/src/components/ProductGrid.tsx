"use client"
import { useState } from "react";
import Link from "next/link";
import { Product, ProductCategory } from "@/types/product";

type GridProps = {
    products: Product[];
    categories: ProductCategory[];
};

export default function ProductGrid({ products, categories }: GridProps) {
    const [activeTab, setActiveTab] = useState("all");

    const filtered = activeTab === "all" ? products : products.filter((p) => p.categorySlug === activeTab);

    return (
        <div className="w-full flex flex-col gap-4">
            {/* category tabs */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`w-full flex justify-center items-center wrap-anywhere 
                    px-4 py-2 rounded-2xl border-3 transition duration-300
                    focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                    ${activeTab === "all"
                        ? "bg-brand-black text-white border-brand-black"
                        : "bg-transparent text-brand-black border-brand-black hover:border-brand-black hover:cursor-pointer"
                    }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category._id}
                        onClick={() => setActiveTab(category.slug)}
                        className={`w-full flex justify-center items-center wrap-anywhere 
                        px-4 py-2 rounded-2xl border-3 transition duration-300
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        ${activeTab === category.slug
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-transparent text-brand-black border-brand-black hover:border-brand-black hover:cursor-pointer"
                        }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* product grid */}
            <div className="w-full my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((product) => (
                    <Link key={product._id} href={`/products/${product.slug}`}
                    className="w-full flex flex-col p-4 rounded-3xl bg-brand-black overflow-hidden">
                        <div className="w-full h-48 py-2.5 rounded-3xl overflow-hidden bg-white">
                            <img src={product.image} alt={product.name}
                            className="w-full h-full object-contain" />
                        </div>
                        <p className="w-full py-4 text-center font-semibold text-white">
                            {product.name}
                        </p>
                    </Link>
                ))}
            </div>

            {/* if category is empty */}
            {filtered.length === 0 && (
                <p className="text-center text-gray-500">
                    No products found in this category.
                </p>
            )}
        </div>
    )
}