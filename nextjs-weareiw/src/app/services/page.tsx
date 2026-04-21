import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import NumCounter from "@/components/NumCounter";

const services = [
    { label: "Procurement", src: "heroImages/shutterstock2.jpg", alt: "Procurement image", href: "/services/procurement" },
    { label: "Deployment", src: "heroImages/shutterstock2.jpg", alt: "Deployment image", href: "/services/deployment" },
    { label: "Maintenance", src: "heroImages/shutterstock2.jpg", alt: "Maintenance image", href: "/services/maintenance" },
    { label: "Disposition", src: "heroImages/shutterstock2.jpg", alt: "Disposition image", href: "/services/disposition" }
]

const serviceStats = [
    { value: 240000, label: "Sq Ft of Warehouse Space" },
    { value: 18000, label: "Pallet Storage Locations" },
    { value: 50, label: "Years in Business" },
    { value: 40000, label: "Annual Shipments" },
    { value: 7500, label: "Customers Nationwide", suffix: "+" },
    { value: 35000, label: "Checkout Lanes Supported", suffix: "+" },
    { value: 55000, label: "On-Site Service Events (2024)", suffix: "+" },
    { value: 9650, label: "Locations Supported Across North America (2024)" },
    { value: 1000, label: "Rapid-Scale Deployments in Under 8 Weeks", suffix: "+" }
];

export const metadata: Metadata = {
  title: "Services - IW Technologies",
  description: "From installation to on-site repair to e-cycling, our offerings can cover the full lifecycle of your technology or be chosen a la carte.",
};

export default function ServicesPage() {
    return (
        <div className="">
            <section className="h-fit text-white">
                <Hero 
                    imageSrc="/heroImages/servicesHero.png"
                    imageAlt="Blue tinted Services hero image"
                    imageWidth={2048}
                    imageHeight={1357}
                    text={
                    <>
                        
                    </>
                    }
                />
            </section>

            <section className="flex justify-center py-14 bg-brand-black text-white">
                <div>
                    <h2 className="border-b-4 border-brand-aqua p-2">
                        End-to-End Lifecycle Services
                    </h2>
                </div>
            </section>

            <section className="w-full py-5 bg-brand-black">
                <div className="container w-[80%] sm:w-[90%] h-80 sm:h-60 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service) => (
                    <Link key={service.label} href={service.href} prefetch={false}
                        className="group relative w-full h-full flex items-center rounded-3xl overflow-hidden bg-brand-black"
                        style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                        <img src={service.src} alt={service.alt}
                            className="absolute inset-0 h-full w-full object-cover" />
                        <div className="opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out
                            absolute inset-0 z-10 bg-linear-to-t from-background/50 to-transparent"></div>
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out 
                            absolute inset-0 z-10 bg-linear-to-t from-brand-black to-transparent"></div>
                        <div className="relative w-full mx-auto z-30 flex justify-center items-center
                            text-xl sm:text-3xl font-bold text-brand-black group-hover:text-white
                            group-hover:motion-safe:animate-bounce transition-all duration-300 ease-in-out">
                            {service.label}
                            <span className="ml-2 text-base opacity-0 group-hover:opacity-100 transition duration-300">→</span>
                        </div>
                    </Link>
                    ) )}
                </div>
            </section>

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="w-[80%] mx-auto flex flex-col gap-5">
                        <h2 className="w-fit border-b-4 border-brand-aqua p-2">
                            From POS Provider to End-to-End Partner
                        </h2>
                        <div className="font-bold">
                            We didn't pivot into services. Our customers pulled us in.
                        </div>
                        <div>
                            The expansion into services didn't begin in a boardroom. It started in 
                            the field with recurring questions from longstanding hardware customers:
                        </div>
                        <div className="font-bold">
                            "You already sell us the POS equipment. Can you help us install it? 
                            Maintain it? Manage it?"
                        </div>
                        <div>
                            What began as a favor turned into a repeat engagement. A handful of 
                            installations grew into coordinated national rollouts.
                        </div>
                        <div>
                            And in just a few years, that single request matured into a fully scaled 
                            service division now powering over <span className="font-bold">55,000 on-site service events annually </span>
                            across North America.
                        </div>
                        <div className="font-bold">
                            Today, IW is more than a provider. We don't just sell hardware. We operationalize it.
                        </div>
                        <div>
                            From procurement and deployment to break/fix support, decommissioning, 
                            <span className="font-bold">a structured low voltage cabling</span>, 
                            and sustainable recovery, we manage the full technology lifecycle as 
                            an embedded partner.
                        </div>
                        <div>
                            That includes everything from <span className="font-bold">rough-in and termination </span>
                            to <span>technology installation </span>whether it's for <span>net-new stores, remodels, or multi-site relocations.</span> 
                        </div>
                        <div className="font-bold">
                            No gaps. No handoffs. Just seamless execution from end to end.
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center mx-auto mb-14 bg-background text-brand-black">
                <div className="w-full flex flex-col items-center gap-4">
                    <NumCounter 
                    title="What End-to-End Service Looks Like at Scale" 
                    subTitle="Every number here backs once promise:" 
                    stats={serviceStats} 
                    />
                </div>
            </section>

            <section className="w-full py-14 bg-background">
                <div className="container mx-auto flex justify-center">
                    <div className="w-[90%]">
                        <Blurb 
                        media={{
                            type: "image",
                            src: "/copylifeCycle.png",
                            alt: "Blue tinted image of IW team in meeting",
                            width: 512,
                            height: 342,
                        }}
                        text={
                            <>
                            <h3>This is placeholder content</h3>
                            <p>POS is critical infrastructure. When it works, operations stay focused and customers keep moving. That reliability depends on clear ownership.</p>
                            <p>From sourcing and deployment to maintenance, refurbishment, and retirement, we take responsibility for POS in the field across its full lifecycle.</p>
                            <p>We believe critical infrastructure calls for long-term thinking, clear accountability, and partners committed to seeing it through.</p>
                            </>
                        }
                        rounded
                        textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-14 mb-5 bg-background">
                <div className="container mx-auto flex justify-center">
                    <div className="w-[90%]">
                        <Blurb 
                        media={{
                            type: "image",
                            src: "/copylifeCycle.png",
                            alt: "Blue tinted image of IW team in meeting",
                            width: 512,
                            height: 342,
                        }}
                        text={
                            <>
                            <h3>This is placeholder content</h3>
                            <p>POS is critical infrastructure. When it works, operations stay focused and customers keep moving. That reliability depends on clear ownership.</p>
                            <p>From sourcing and deployment to maintenance, refurbishment, and retirement, we take responsibility for POS in the field across its full lifecycle.</p>
                            <p>We believe critical infrastructure calls for long-term thinking, clear accountability, and partners committed to seeing it through.</p>
                            </>
                        }
                        reverse
                        rounded
                        textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}