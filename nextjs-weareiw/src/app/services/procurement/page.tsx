import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Procurement - IW Technologies",
  description: "Procurement service.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Procurement - IW Technologies",
        description: "Procurement service offered by IW Technologies located in Elgin, IL.",
        url: `${BASE_URL}/services/procurement`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Procurement Services IW Technologies',
            }
        ],
    },
};

export default function ProcurementPage() {
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Procurement</h1>
                            <p className="font-semibold">
                                Built for enterprise complexity balancing cost efficiency, supply chain, 
                                agility, and ESG accountability.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/sack-dollar-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Refurbished Assets
                                    </h3>
                                    <p>
                                        Lower your capital outlay without compromising quality. Our certified 
                                        refurbished equipment offers enterprise-grade performance with up to 40% 
                                        cost saving versus new.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/arrow-right-arrow-left-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Trade-In Programs
                                    </h3>
                                    <p>
                                        Maximize residual value by trading in legacy hardware for credit 
                                        toward new or refurbished equipment all while diverting assets from 
                                        the landfill.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/arrow-pointer-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        New Products
                                    </h3>
                                    <p>
                                        Hardware is sourced through trusted OEM partnerships, stocked 
                                        in our 240,000+ sq ft facility, and shipped nationwide enabling 
                                        better inventory control, faster deployments, and reduced freight costs.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="/products" label="Explore Smarter Sourcing" subLabel="Up to 40% cost savings, zero compromise" target="_blank" variant="dark" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}