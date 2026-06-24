import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - IW Technologies",
  description: "From installation to ITAD, new to refurbished POS hardware, IW Technologies offers end-to-end technology solutions..",
};


export default async function BlogPostPage() {

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        individual blog post
                    </h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="">
                            placeholder
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}