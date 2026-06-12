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
            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`w-full flex justify-center items-center wrap-anywhere 
                    px-4 py-2 rounded-2xl border-3 transition duration-300
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
                        ${activeTab === category.slug
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-transparent text-brand-black border-brand-black hover:border-brand-black hover:cursor-pointer"
                        }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
        </div>
    )
}