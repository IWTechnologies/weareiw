import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Careers - IW Technologies",
  description: "Careers placeholder content.",
};

export default function CareersPage() {
    return (
        <div>
            <section className="h-96 text-white">
                <Hero 
                    imageSrc="/heroImages/shutterstock1.jpg"
                    imageAlt="Blue tinted procurement hero image"
                    imageWidth={813}
                    imageHeight={457}
                    text={
                    <>
                        
                    </>
                    }
                />
            </section>

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="w-[80%] mx-auto flex flex-col gap-10">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Careers</h1>
                            <p className="font-semibold">
                                this is placeholder.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}