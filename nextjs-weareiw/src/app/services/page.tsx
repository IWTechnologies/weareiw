import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import NumCounter from "@/components/NumCounter";
import LinkButton from "@/components/LinkButton";

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
                        <h1 className="">
                            From POS Provider to End-to-End Partner
                        </h1>
                        <p className="font-bold">
                            We didn't pivot into services. Our customers pulled us in.
                        </p>
                        <p>
                            The expansion into services didn't begin in a boardroom. It started in 
                            the field with recurring questions from longstanding hardware customers:
                        </p>
                        <p className="font-bold">
                            "You already sell us the POS equipment. Can you help us install it? 
                            Maintain it? Manage it?"
                        </p>
                        <p>
                            What began as a favor turned into a repeat engagement. A handful of 
                            installations grew into coordinated national rollouts.
                        </p>
                        <p>
                            And in just a few years, that single request matured into a fully scaled 
                            service division now powering over <span className="font-bold">55,000 on-site service events annually </span>
                            across North America.
                        </p>
                        <p className="font-bold">
                            Today, IW is more than a provider. We don't just sell hardware. We operationalize it.
                        </p>
                        <p>
                            From procurement and deployment to break/fix support, decommissioning, 
                            <span className="font-bold">a structured low voltage cabling</span>, 
                            and sustainable recovery, we manage the full technology lifecycle as 
                            an embedded partner.
                        </p>
                        <p>
                            That includes everything from <span className="font-bold">rough-in and termination </span>
                            to <span>technology installation </span>whether it's for <span>net-new stores, remodels, or multi-site relocations.</span> 
                        </p>
                        <p className="font-bold">
                            No gaps. No handoffs. Just seamless execution from end to end.
                        </p>
                    </>
                    }
                />
            </section>

            {/* From POS provider */}
            {/* <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="w-[80%] mx-auto flex flex-col gap-5">
                        
                    </div>
                </div>
            </section> */}

            {/* Service stats */}
            <section className="w-full flex justify-center mx-auto mb-14 bg-brand-black text-brand-black">
                <div 
                className="relative w-full flex flex-col items-center gap-4
                mt-4 rounded-t-3xl bg-background overflow-hidden">
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

            {/* What we do blurb*/}
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

            {/* Service link cards */}
            <section className="w-full py-14 my-5">
                <div className="container mx-auto flex justify-center">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <Link href="/services/procurement"
                        className="group w-full flex items-stretch
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
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            Explore how we cut cost and carbon across the supply chain.
                                        </p>
                                        <img src="/serviceImages/icons/angles-right-solid-full.svg" 
                                        alt="angle icon" height="25" width="25"
                                        className="transition delay-150 duration-300 ease-in-out 
                                        group-hover:translate-x-4" />
                                    </div>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="group w-full flex items-stretch
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
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            See how we deliver ready-to-run tech, not just boxes.
                                        </p>
                                        <img src="/serviceImages/icons/angles-right-solid-full.svg" 
                                        alt="angle icon" height="25" width="25"
                                        className="transition delay-150 duration-300 ease-in-out 
                                        group-hover:translate-x-4" />
                                    </div>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="group w-full flex items-stretch
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
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            Discover how we turn SLAs into solved problems.
                                        </p>
                                        <img src="/serviceImages/icons/angles-right-solid-full.svg" 
                                        alt="angle icon" height="25" width="25"
                                        className="transition delay-150 duration-300 ease-in-out 
                                        group-hover:translate-x-4" />
                                    </div>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/low-voltage"
                        className="group w-full flex items-stretch
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
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            Great tech starts with clean wiring. We make sure of it.
                                        </p>
                                        <img src="/serviceImages/icons/angles-right-solid-full.svg" 
                                        alt="angle icon" height="25" width="25"
                                        className="transition delay-150 duration-300 ease-in-out 
                                        group-hover:translate-x-4" />
                                    </div>
                                    </>
                                }
                            />
                        </Link>

                        <Link href="/services/procurement"
                        className="group w-full flex items-stretch
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
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            Learn how we deliver full lifecycle accountability sustainably.
                                        </p>
                                        <img src="/serviceImages/icons/angles-right-solid-full.svg" 
                                        alt="angle icon" height="25" width="25"
                                        className="transition delay-150 duration-300 ease-in-out 
                                        group-hover:translate-x-4" />
                                    </div>
                                    </>
                                }
                            />
                        </Link>
                        
                    </div>
                </div>
            </section>

            {/* How we do it */}
            <section className="w-full py-14 my-5 section-diagonal">
                <div className="w-[80%] mx-auto flex flex-col gap-2">
                    <h2>How We Do It</h2>
                    <h3>Smart Systems. Scalable Coverage. Transparent Execution.</h3>
                    <p>
                        At IW, service isn't just delivered. It's orchestrated. We've built a 
                        connected ecosystem of platforms, tools, and people that work in sync 
                        to deliver precision at scale. Every service event, rollout, and repair 
                        is powered by Salesforce Field Service Lightning and designed to drive 
                        visibility, accountability, and results.
                    </p>
                    <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-center items-end my-5">
                        <Image 
                        src="/serviceImages/portal1.png" alt="portal snapshot on laptop"
                        width={892} height={727} sizes="100vw"
                        className="w-full lg:w-1/3 h-auto lg:h-full object-contain lg:object-cover"
                        />
                        <Image 
                        src="/serviceImages/portal2.webp" alt="portal dashboard"
                        width={892} height={727} sizes="100vw"
                        className="w-full lg:w-2/3 h-auto lg:h-full object-contain lg:object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <h3>Connected Platforms for Full Lifecycle Control</h3>
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Customer Portal</span>
                                            <span>
                                                Submit requests, track live service progress, access 
                                                deliverables and KPIs all in one place.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Workforce Management</span>
                                            <span>
                                                Real-time scheduling, dispatching, and communication between 
                                                field techs and coordinators, powered by Salesforce Chatter and 
                                                automated escalation flows.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">ERP Integration</span>
                                            <span>
                                                Sync service events, inventory status, and reporting in real time 
                                                reducting manual inputs and increasing operational speed.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Technician Toolkit</span>
                                            <span>
                                                Field technicians are equipped with mobile tools for signature capture, 
                                                barcode scanning, route optimization, failure diagnostics, and more 
                                                driving faster resolution and cleaner data.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* end of list */}  
                        <h4 className="font-semibold">
                            Result: Enterprise-grade coordination without the complexity. Faster 
                            response times. Fewer surprises. End-to-end accountability.
                        </h4>


                        <div className="w-full lg:w-[70%] mx-auto my-16 flex flex-col items-center gap-2">
                            <h2 className="w-full">
                                National Technician Network. Consistency At Scale
                            </h2>
                            <Image
                            className="h-auto object-contain rounded-3xl" 
                            src="/serviceImages/Coast2Coast.webp" alt="Coast to Coast coverage image graphic" 
                            width="797" height="372"
                            sizes="(max-width: 1920px) 100vw, 50vw" />
                        </div>
                        <h3>
                            Our coast-to-coast technician network ensures every job is delivered with consistency 
                            no matter the location, complexity, or timeline.
                        </h3>
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">1,850+ certified technicians</span>
                                            , all vetted through a seven-point performance and risk framework.
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">Coverage across 384 U.S. metro areas</span>
                                            , reaching 99% of the population within 100 miles.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">Designed for fast resolution often same-day</span>
                                            , always with accountability.
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            Managed by a centralized team overseeing
                                            <span className="font-semibold"> SLAs, exception handling, and field readiness at scale.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* end of list */}
                        <h4>
                            <span className="font-semibold">What this means for you: </span>
                            National reach with local precision without gaps, delays, or retraining.
                        </h4>
                    </div>
                </div>
            </section> {/*end of How we do it */}

            <section className="w-[90%] lg:w-[80%] flex justify-center mx-auto mb-14 text-brand-black">
                <div className="w-full sm:w-[80%] flex flex-col items-center gap-4">
                    <div className="w-full lg:w-[90%] flex">
                        <h2>
                            What's In It For You
                        </h2>
                    </div>
                    <Image
                    className="w-full lg:w-[90%] h-auto object-contain rounded-3xl" 
                    src="/serviceImages/WhatsInItVer2.webp" alt="What's in it for you image graphic" 
                    width="1920" height="1080"
                    sizes="(max-width: 1920px) 100vw, 50vw" />
                </div>
            </section>

            {/* Measurable Outcomes */}
            <section className="w-full py-14 my-5">
                <div className="w-[80%] mx-auto flex flex-col gap-2">
                    <h2>Measurable Outcomes. Strategic Advantage</h2>
                    <p>
                        We don't just deliver services. We drive operational, financial, and 
                        sustainability outcomes that move your business forward.
                    </p>
                    {/* start of list */} 
                    <div className="w-full flex flex-col my-4 gap-5">
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Assorted Rollouts</span>
                                            <span>
                                                Over 1,000 rapid-scale deployments completed in under 8 
                                                weeks minmizing disruption and speeding time to value.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Operational Transparency</span>
                                            <span>
                                                Real-time visibility into timelines, service activity, KPIs, 
                                                and deliverables through our customer portal.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Custom-Fit Integration</span>
                                            <span>
                                                Every service touchpoint is configured to your exact technical 
                                                and business requirements and designed to plug into your systems, 
                                                not disrupt them.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">System-wide Reliability</span>
                                            <span>
                                                Hardware arrives fully staged, serialized, and tested ready 
                                                for immediate deployment across your footprint.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Operational Transparency</span>
                                            <span>
                                                Real-time visibility into timelines, service activity, KPIs, 
                                                and deliverables through our customer portal.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Sustainability with Substance</span>
                                            <span>
                                                Our circular lifecycle model helps you reduce emissions, divert e-waste, 
                                                and hit ESG targets with over 650 tons of recycled tech in 2025 alone. 
                                                And in 2026, we've already diverted 566,887 pounds, more than 280 tons 
                                                with plenty more ahead.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* end of list */}  
                        <h4 className="font-semibold">
                            The outcome: Better economics. Less downtime. Greater control. And 
                            measurable progress on your operational and sustainability goals.
                        </h4>
                    </div>
                </div>
            </section> {/* end of  Measurable Outcomes */}

            {/* Sustainability */}
            <section className="w-full py-14 my-5">
                <div className="w-[80%] mx-auto flex flex-col gap-2">
                    <h2>Sustainability Isn't Strategy. It's Our Standard</h2>
                    <h3>Circular by Design. Measured by Impact.</h3>
                    <p>
                        At IW, sustainability isn't a marketing angle. It's how we operate. In 
                        2025, we recycled over 650 tons of IT equipment, helping enterprise partners 
                        reduce emissions, cut raw material usage, and advance toward their ESG goals. 
                        But the real story isn't in the metric. It's in the model.
                    </p>
                    <p>
                        We lead with action in the circular economy, enabling organizations to:
                    </p>
                    {/* start of list */} 
                    <div className="w-full flex flex-col my-4 gap-5">
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="w-full">
                                <ul className="w-full flex flex-col gap-5">
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">Recover and refurbish </span>
                                            retired technology for second-life use.
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">Extend asset life </span>
                                            through scalable erpair and part replacement programs.
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="">
                                            <span className="font-semibold">Decommission and dispose </span>
                                            of IT assets responsibly, with full compliance and chain of custody.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* end of list */}  
                        <h4 className="">
                            No greenwashing. No one-time pledges. Just embedded, year-around sustainability built 
                            into every phase of the technology lifecycle.
                        </h4>
                    </div>
                </div>
            </section> {/* end of  Sustainability */}

            {/* Ready to talk */}
            <section className="w-full py-14 my-5 bg-brand-black text-white">
                <div className="w-[80%] mx-auto flex flex-col gap-4">
                    <h2>Ready To Talk Services?</h2>
                    <p>
                        Managing a rollout, retiring legacy tech, or overhauling operations? We 
                        bring the structure to make it seamless.
                    </p>
                    <p>
                        Our lifecycle service model delivers <span className="font-semibold">up to 40% cost savings </span>
                        through strategic sourcing, refurbishment, trade-ins, and extended asset life without 
                        sacrificing performance or reliability.
                    </p>
                    <p>
                        With 50 years of operational excellence, a nationwide service network, and 
                        deep integration across systems and teams, IW supports enterprise leaders who 
                        need execution without compromise.
                    </p>
                    <p>
                        We work with <span className="font-semibold">Fortune 500s across retail, grocery, pharmacy, QSR, 
                        distribution, and convenience </span> delivering outcomes that matter: 
                        <span className="font-semibold"> Cost-efficiency. Speed. Reliability. Visibility. Sustainability.</span>
                    </p>
                    <h3 className="font-semibold">
                        Have hardware sitting idle?
                    </h3>
                    <p>
                        We'll reclaim, report, and reintergrate it (with full asset visibility).
                    </p>
                    <p>
                        Whether you're scaling, consolidating, or refreshing your tech stack. Let's talk.
                    </p>
                    <LinkButton href="https://www.weareiw.com/get-in-touch/" label="Let's Skip The RFP Theater" subLabel="Talk to the team that's already built to deliver" target="_blank" variant="light" />
                </div>
            </section> {/* end of  Ready to talk */}
        </div>
    )
}