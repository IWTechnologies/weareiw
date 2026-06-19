import type { Metadata } from "next";
import Link from "next/link";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Blog - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
};


export default async function BlogPage() {

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Explore our blog
                    </h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="">
                            <Card 
                                imageSrc="/View-our-products-Moody-blue.png"
                                imageAlt="Blue tinted view our products card image"
                                imageWidth={663}
                                imageHeight={432}
                                text={
                                    <>
                                    <p>placeholder</p>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}