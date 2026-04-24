import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import NumCounter from "@/components/NumCounter";

type serviceGridProps = {
    text: ReactNode;
}

const services = [
    { label: "Procurement", src: "heroImages/shutterstock2.jpg", alt: "Procurement image", href: "/services/procurement" },
    { label: "Deployment", src: "heroImages/shutterstock2.jpg", alt: "Deployment image", href: "/services/deployment" },
    { label: "Maintenance", src: "heroImages/shutterstock2.jpg", alt: "Maintenance image", href: "/services/maintenance" },
    { label: "Disposition", src: "heroImages/shutterstock2.jpg", alt: "Disposition image", href: "/services/disposition" }
]

const serviceStats = [
    { value: 240000, label: "Sq Ft of Warehouse Space", subLabel: "Staging, kitting, fulfillment all under one roof." },
    { value: 18000, label: "Pallet Positions", subLabel: "Built to support rollouts, returns, and closures." },
    { value: 38500, label: "Checkout Lanes Supported", subLabel: "Install, repair, and tech refreshes.", suffix: "+" },
    { value: 40000, label: "Annual Shipments", subLabel: "Fast fulfillment of tech, tools, and parts." },
    { value: 1850, label: "Vetted Technicians", subLabel: "Coverage within 100 miles of 99% of the US.", suffix: "+" },
    { value: 9650, label: "Locations On Full Lifecycle Maintenance", subLabel: "But every service can stand on its own.", },
    { value: 1000, label: "Rapid Rollouts (<8 wks)", subLabel: "Mobilized and scaled. No delays.", suffix: "+" },
    { value: 12000, label: "Low Voltage Rollouts", subLabel: "Rough-in to turn-up. Wired for new builds, remodels, and relocations.", suffix: "+" }
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

            <section className="w-full flex justify-center mx-auto mb-14 text-brand-black">
                <div className="relative w-full flex flex-col items-center gap-4">
                    <Image 
                        src="/serviceImages/serviceStatsBG.png" alt="placeholder"
                        width={892} height={727} sizes="100vw"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-t from-background via-transparent to-background"></div>
                    <div className="relative z-20">
                        <NumCounter 
                        title="What End-to-End Service Looks Like at Scale" 
                        subTitle="Every number here backs once promise:" 
                        stats={serviceStats} 
                        />
                    </div>
                    
                </div>
            </section>

            <section className="w-full py-14">
                <div className="container mx-auto flex justify-center">
                    <div className="w-[90%]">
                        <Blurb 
                        media={{
                            type: "image",
                            src: "/serviceImages/servicesCircle.webp",
                            alt: "Blue tinted image of IW team in meeting",
                            width: 1546,
                            height: 1067,
                        }}
                        text={
                            <>
                            <h3>What We Do</h3>
                            <h4 className="font-semibold">Comprehensive Services, Built for Complex Environments</h4>
                            <p>
                                We operate as an extension of your infrastructure and operations team managing every phase 
                                of the IT asset lifecyle with speed, precision, and accountability.
                            </p>
                            <p>
                                From large-scale rollouts and tech upgrades to site refreshes and full asset recovery, our 
                                teams deliver with rigor across every stage: sourcing, staging, deploying, servicing, and 
                                reclaiming technology regardless of industry or footprint.
                            </p>
                            <p>
                                This isn't task support. It's full-spectrum service tailored to your operating model, 
                                integraded into your systems, and executed at scale.
                            </p>
                            <p>
                                And if your business runs on technology at the front of house, back of store, or across 
                                a national footprint we've probably worked in your industry.
                            </p>
                            </>
                        }
                        rounded
                        textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-14 my-5">
                <div className="container mx-auto flex justify-center">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <Link href="/services/procurement"
                        className="w-full flex items-stretch
                        border-2 border-transparent rounded-md col-span-2
                        transition delay-150 duration-300 ease-in-out 
                        hover:-translate-y-1 hover:border-brand-aqua">
                            <Card
                                text={
                                    <>
                                    <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                        Procurement
                                    </h3>
                                    <p className="font-semibold">
                                        Sourcing built for speed, savings, and sustainability.
                                    </p>
                                    <p>
                                        We help enterprises reducs capital costs, reclaim value from legacy hardware, and 
                                        align purchasing with ESG goals all from our <span className="font-semibold">240,000+ sq ft warehouse</span>, stocked with 
                                        new and certified refurbished assets.
                                    </p>
                                    <p className="font-semibold">
                                        Explore how we cut cost and carbon across the supply chain.
                                    </p>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="w-full flex items-stretch
                        border-2 border-transparent rounded-md col-span-2
                        transition delay-150 duration-300 ease-in-out 
                        hover:-translate-y-1 hover:border-brand-aqua">
                            <Card
                                text={
                                    <>
                                    <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                        Deployment
                                    </h3>
                                    <p className="font-semibold">
                                        Deployment without disruption at enterprise scale.
                                    </p>
                                    <p>
                                        With <span className="font-semibold">1,000+ rapid rollouts under 8 weeks</span>, our teams 
                                        stage, configure, and install IT assets nationwide. Every deployment 
                                        is PMO-managed and backed by <span className="font-semibold">40,000 annual shipments </span>
                                        and <span>9,650+ locations on full lifecycle maintenance (you can à la carte if you prefer)</span>.
                                    </p>
                                    <p className="font-semibold">
                                        See how we deliver ready-to-run tech, not just boxes.
                                    </p>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="w-full flex items-stretch
                        border-2 border-transparent rounded-md col-span-2 lg:col-span-1
                        transition delay-150 duration-300 ease-in-out 
                        hover:-translate-y-1 hover:border-brand-aqua">
                            <Card
                                text={
                                    <>
                                    <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                        Maintenance
                                    </h3>
                                    <p className="font-semibold">
                                        Uptime isn't optional. We keep you running.
                                    </p>
                                    <p>
                                        Our network of <span className="font-semibold">1,850+ vetted technicians </span>cover 99% of the U.S. 
                                        resolving over <span className="font-semibold">55,000 on-site service events </span>annually. From 
                                        same-day repair to part replacement, we meet issues with answers fast..
                                    </p>
                                    <p className="font-semibold">
                                        Discover how we turn SLAs into solved problems.
                                    </p>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="w-full flex items-stretch
                        border-2 border-transparent rounded-md col-span-2
                        transition delay-150 duration-300 ease-in-out 
                        hover:-translate-y-1 hover:border-brand-aqua">
                            <Card
                                text={
                                    <>
                                    <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                        Low Voltage Cabling
                                    </h3>
                                    <p className="font-semibold">
                                        The infrastructure behind every install designed to scale with your operations.
                                    </p>
                                    <p>
                                        From rough-in to termination and final technology integration, IW delivers 
                                        structured low-voltage cabling that supports everything from net-new stores 
                                        and remodels to relocations and refreshes.
                                    </p>
                                    <p>
                                        Whether you're opening 5 locations or retrofitting 500, our certified field teams 
                                        install and validate cabling to power POS, networking, displays, IoT, and more 
                                        with consistency, compliance, and minimal disruption.
                                    </p>
                                    <p>
                                        With 9,650+ locations running on IW's full lifecycle service and 1,850+ technicians 
                                        across 384 metro areas, our infrastructure work is precise, scalable, and deployment-ready 
                                        just like everything we do.
                                    </p>
                                    <p className="font-semibold">
                                        Great tech starts with clean wiring. We make sure of it.
                                    </p>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="w-full flex items-stretch
                        border-2 border-transparent rounded-md col-span-2 lg:col-span-1
                        transition delay-150 duration-300 ease-in-out 
                        hover:-translate-y-1 hover:border-brand-aqua">
                            <Card
                                text={
                                    <>
                                    <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                        Disposition
                                    </h3>
                                    <p className="font-semibold">
                                        End-of-life isn't the end of responsibility.
                                    </p>
                                    <p>
                                        We manage secure deinstallation, recovery, and data destruction across your 
                                        footprint diverting waste, reclaiming value, and protecting compliance. In 2024 
                                        alone, we recycled <span className="font-semibold">815 tons of IT equipment</span>.
                                    </p>
                                    <p className="font-semibold">
                                        Learn how we deliver full lifecycle accountability sustainably.
                                    </p>
                                    </>
                                }
                            />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}