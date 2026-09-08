"use client"
import { useState } from "react";
import { useQueryState } from "nuqs";
import Link from "next/link";
import { Product, ProductCategory } from "@/types/product";

type GridProps = {
    products: Product[];
    categories: ProductCategory[];
};

export default function ProductGrid({ products, categories }: GridProps) {
    
    const [category, setCategory ] = useQueryState("category", {
        defaultValue: "all",
        clearOnDefault: true,
        history: "replace",
        scroll: false,
    });

    const [search, setSearch] = useState("");

    const filtered = products.filter((p) => {
        const matchesCategory = category === "all" || p.categorySlug === category;
        const matchesSearch = search === "" ||
            p.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    //const filtered = category === "all" ? products : products.filter((p) => p.categorySlug === category);

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-center">
                <div className="relative w-full flex items-center">
                    <img src="/icons/magnifying-glass-solid-full.svg" 
                    alt="search icon" height="30" width="30"
                    className="absolute left-0 m-2.5" />
                    <input
                        type="search"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a product..."
                        className="w-full md:w-1/2 p-3 pl-10 rounded-lg border-2 border-background
                        text-brand-black bg-white
                        focus:outline-none focus:border-brand-aqua transition duration-300"
                    />
                </div>
                
            </div>
            

            {/* category tabs */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                <button
                    onClick={() => setCategory("all")}
                    className={`w-full flex justify-center items-center wrap-anywhere 
                    px-4 py-2 rounded-2xl border-3 transition duration-300
                    focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                    ${category === "all"
                        ? "bg-brand-black text-white border-brand-black"
                        : "bg-transparent text-brand-black border-brand-black hover:border-brand-black hover:cursor-pointer"
                    }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat._id}
                        onClick={() => setCategory(cat.slug)}
                        className={`w-full flex justify-center items-center wrap-anywhere 
                        px-4 py-2 rounded-2xl border-3 transition duration-300
                        focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua
                        ${category === cat.slug
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-transparent text-brand-black border-brand-black hover:border-brand-black hover:cursor-pointer"
                        }`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* product grid */}
            <div className="w-full my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((product) => (
                    <Link key={product._id} href={`/products/${product.slug}${category !== "all" ? `?category=${category}` : ""}`}
                    className="group w-full flex flex-col p-4 rounded-3xl bg-brand-black overflow-hidden transition duration-300
                    focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua">
                        <div className="w-full h-48 py-2.5 rounded-3xl overflow-hidden bg-white">
                            <img src={product.image} alt={product.name}
                            className="w-full h-full object-contain" />
                        </div>
                        <p className="w-full py-4 text-center font-semibold transition duration-300 text-white group-hover:text-brand-aqua">
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