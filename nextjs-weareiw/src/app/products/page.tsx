import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import ContactUs from "@/components/forms/ContactUs";

import { client } from "@/sanity/lib/client";
import { fetchAllProducts, fetchAllProductCategories } from "@/sanity/queries/product";
import { Product, ProductCategory } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Products - IW Technologies",
  description: "IW Technologies provides cutting-edge, new and refurbished POS technology and equipment. From printers to scanners and everything in between, our expansive inventory of point-of-sale solutions can meet your needs.",
};

const storeLogos = [
    { src:"/storeImages/amazon-logo.png", alt: "IW Technologies Amazon store link", url: "https://www.amazon.com/stores/page/C6685172-E36F-4BAB-B6D6-E63769A1429E?language=en_US&ref_=pe_24209330_600747923" },
    { src:"/storeImages/ebay-logo.png", alt: "IW Technologies Ebay store link", url: "https://www.ebay.com/str/illinoiswholesale" },
];

export default async function ProductsPage() {
    const [products, categories] = await Promise.all([
        client.fetch<Product[]>(fetchAllProducts),
        client.fetch<ProductCategory[]>(fetchAllProductCategories),
    ]);

    return (
        <div>
            <section className="h-fit flex flex-col items-center text-white">
                <Hero 
                    imageSrc="/heroImages/aboutUsHero.png"
                    imageAlt="Blue tinted Services card image"
                    imageWidth={1920}
                    imageHeight={1080}
                    text={
                    <>
                        <h1>Your Enterprise Solution Partner</h1>
                        <p className="">
                        Partnering with industry-leading technology manufacturers, 
                        we offer a wide variety of new and expertly refurbished 
                        products to fit your every need.
                        </p>
                    </>
                    }
                />
            </section>

            <section id="partners" className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-16 mt-4 rounded-t-3xl bg-background">
                    <div className="container mx-auto flex justify-center">
                        <div className="w-[90%]">
                            <Blurb 
                            media={{
                                type: "image",
                                src: "/aboutImages/flatNewPartners.webp",
                                alt: "Blue tinted image of IW team in meeting",
                                width: 512,
                                height: 342,
                            }}
                            text={
                                <>
                                <div className="w-full flex items-center">
                                    <img src="/aboutImages/icons/handshake-solid-full.svg" 
                                    alt="handshake icon" height="50" width="50"
                                    className="mr-2" />  
                                    <h3>Our Partners</h3>
                                </div>
                                
                                <p>
                                    IW Technologies is proud to be an official partner of some of 
                                    the most reputable and sought-after manufacturers in the business.
                                </p>
                                <p>
                                    Together, we are empowering the front line to work better, faster and smarter
                                    and redefining point-of-sale hardware and software through our steadfast commitment
                                    to quality.
                                </p>
                                </>
                            }
                            reverse
                            rounded
                            textColor="text-brand-black"
                            />
                        </div> 
                    </div>
                </div>
            </section>

            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <div className="w-full flex flex-col items-center gap-5">
                        <h2 className="">
                            Featured POS Solutions
                        </h2>
                        <p className="">
                            Whether you're starting from scratch or completing your existing set, IW Technologies 
                            partners with top manufacturersto provide you with top-quality scanners, printers and 
                            registers tailored to your needs. If you're not finding your POS hardware of choice, 
                            fill out the form below and contact us for a solution!
                        </p>
                    </div>

                    <ProductGrid products={products} categories={categories} />
                </div>
            </section>

            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col items-center gap-10">
                    <h2 className="">
                        Visit Our Online Stores
                    </h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {storeLogos.map((store) => (
                            <Link key={store.src} href={store.url}
                            className="w-full flex flex-col p-8 rounded-3xl bg-white
                            border-3 border-white shadow-lg transition duration-300
                            hover:border-brand-aqua">
                                <img src={store.src} alt={store.alt}
                                className="w-full h-20 p-4 object-contain" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-14 bg-brand-black">
                <div className="w-[70%] md:w-[50%] flex flex-col mx-auto gap-4 text-white">
                    <h2 className="w-fit border-b-4 border-brand-aqua">
                        Don't see what you're looking for?
                    </h2>
                    <p>
                        Our inventory is always changing. If you can't find what you're looking for on our site, 
                        complete the form below to share your needs. With the largest inventory of POS equipment 
                        in the midwest and the most skilled craftsmen on our staff, we can find or make anything 
                        to suit your specific situation.
                    </p>
                    <ContactUs />
                </div>
            </section>
        </div>
    )
}