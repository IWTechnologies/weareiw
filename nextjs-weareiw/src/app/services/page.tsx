import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
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
    { value: 240000, label: "Sq Ft of Warehouse Space", subLabel: "Staging, kitting, fulfillment all under one roof.", suffix: "+" },
    { value: 18000, label: "Pallet Positions", subLabel: "Built to support rollouts, returns, and closures.", suffix: "+" },
    { value: 38500, label: "Checkout Lanes Supported", subLabel: "Install, repair, and tech refreshes.", suffix: "+" },
    { value: 40000, label: "Annual Shipments", subLabel: "Fast fulfillment of tech, tools, and parts.", suffix: "+" },
    { value: 1850, label: "Vetted Technicians", subLabel: "Coverage within 100 miles of 99% of the US.", suffix: "+" },
    { value: 9650, label: "Locations On Full Lifecycle Maintenance", subLabel: "But every service can stand on its own.", suffix: "+" },
    { value: 1000, label: "Rapid Rollouts (<8 wks)", subLabel: "Mobilized and scaled. No delays.", suffix: "+" },
    { value: 5000000, label: "of Low Voltage Cabling Installed.", suffix: "+ Ft." },
    { value: 815, label: "Tons of Hardware Diverted from Landfills Yearly.", suffix: "+" }
];

export const metadata: Metadata = {
  title: "Services - IW Technologies",
  description: "From installation to on-site repair to e-cycling, our offerings can cover the full lifecycle of your technology or be chosen a la carte.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Services - IW Technologies",
        description: "From installation to on-site repair to e-cycling, our offerings can cover the full lifecycle of your technology or be chosen a la carte.",
        url: `${BASE_URL}/services`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Services IW Technologies',
            }
        ],
    },
};

export default function ServicesPage() {
    return (
        <div className="">
            <section className="h-fit w-full flex justify-center bg-brand-black text-white">
                <Hero 
                    imageSrc="/heroImages/ServiceHeroImageFINAL.webp"
                    imageAlt="Services hero image"
                    imageWidth={1900}
                    imageHeight={400}
                    text={
                    <>
                        <h1 className="">
                            From POS Provider to End-to-End Partner
                        </h1>
                        <p className="">
                            We manage the full POS hardware lifecycle for multi-site retail, grocery, and QSR; procurement, 
                            deployment, low-voltage cabling, maintenance, and disposition.
                        </p>
                        <p className="font-bold">
                            Our customers pulled us into services one request at a time:  install it, maintain it, manage it. 
                            Now we own the hardware end to end.
                        </p>
                    </>
                    }
                />
            </section>

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
                        subTitle="Every number here backs once promise: we source, deploy, service, and retire your POS across a national footprint. No gap." 
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
                            src: "/IWLifecycle2026.webp",
                            alt: "IW Lifecycle graphic image",
                            width: 700,
                            height: 500,
                        }}
                        text={
                            <>
                            <h3>What We Do</h3>
                            <h4 className="font-semibold">Five services. One team accountable for the whole hardware lifecycle.</h4>
                            <p>
                                We run all five stages of your POS and IT hardware lifecycle: procurement, deployment, low-voltage cabling, 
                                maintenance, and disposition as one team. One group owns the hardware from the day it's sourced to the day 
                                it's retired, so nothing falls between vendors.
                            </p>
                            <p>
                                That covers net-new rollouts, tech refreshes, store remodels, and full asset recovery. We source it, stage it,
                                 deploy it, service it, and reclaim it in any store format, across any footprint.
                            </p>
                            <p>
                                This isn't break/fix by the ticket. We manage the whole lifecycle, wired into your systems and run at the scale of a national fleet.
                            </p>
                            <p>
                                And we've spent 50 years in your world: retail, grocery, QSR, hospitality, convenience, and distribution front end to back office.
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
                        prefetch={false}
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
                                        Sourcing built to cut cost, not corners.
                                    </p>
                                    <p>
                                        IW sources POS and IT hardware new and certified refurbished for multi-site retail, 
                                        grocery, and QSR from a single 240,000 sq ft warehouse. New equipment comes through 
                                        OEM partnerships; certified refurbished assets run up to 40% below new, cleaned and 
                                        tested before they ship. Both are stocked in-facility for nationwide fulfillment.
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

                        <Link href="/services/deployment"
                        prefetch={false}
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
                                        Plug-and-play. Not plug-and-pray.
                                    </p>
                                    <p>
                                        IW deploys POS and IT hardware for multi-site rollouts, refreshes, and remodels 
                                        1,000+ rapid rollouts completed in under 8 weeks. Every project is PMO-managed 
                                        and backed by 40,000 annual shipments, so devices arrive serialized, tested, and 
                                        ready to turn on. Take the full lifecycle, or any stage à la carte.
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

                        <Link href="/services/maintenance"
                        prefetch={false}
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
                                        IW maintains POS and IT hardware in the field on-site repair, replacement parts, 
                                        and remote troubleshooting for multi-site retail, grocery, and QSR. Our network 
                                        of 1,850+ vetted technicians reaches 99% of the U.S. within 100 miles and resolves 
                                        55,000+ on-site service events a year. 90% of requests are handled the same day.
                                    </p>
                                    <div className="w-full flex items-center gap-2">
                                        <p className="font-semibold">
                                            See how we fix most issues the same day.
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
                        prefetch={false}
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
                                        The infrastructure behind every install.
                                    </p>
                                    <p>
                                        IW installs and certifies structured low-voltage cabling for retail, grocery, 
                                        and QSR builds  rough-in to termination to device turn-up. Whether you're opening 
                                        5 stores or retrofitting 500, our certified field teams wire and validate the cabling 
                                        that powers POS, networking, displays, and IP cameras, to OSHA and BICSI standards. 
                                        It runs in lockstep with your deployment schedule, so wiring is never what holds up opening day.
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

                        <Link href="/services/disposition"
                        prefetch={false}
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
                                        We manage secure deinstallation, recovery, and data destruction across your footprint 
                                        diverting waste, reclaiming value, and protecting compliance. In the past 16 months, 
                                        IW has kept more than 1.8 million pounds of hardware out of landfills: 1,301,263 lbs 
                                        in 2025 (650+ tons) and 566,887 lbs (400+ tons) so far in 2026.
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
            <section className="w-full py-14 my-5 text-brand-black section-diagonal">
                <div className="max-w-7xl w-[80%] mx-auto flex flex-col gap-2">
                    <h2>How We Do It</h2>
                    <h3>One System. Live Status. No Handoffs.</h3>
                    <p>
                        IW runs every service event, rollout, and repair on Salesforce Field Service Lightning, 
                        integrated with our ERP. One system tracks your hardware from procurement through disposition: 
                        scheduling, dispatch, parts, and reporting in real time. You see the same live status your 
                        dispatcher does: what's open, what's at risk, what shipped.
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
                                                Syncs service events, inventory status, and reporting in real time, 
                                                reducing manual inputs and speeding up resolution.
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
                        <h4>
                            <span className="font-semibold">Result:</span> Enterprise-grade coordination without the complexity. Faster response times. Fewer surprises. End-to-end accountability.
                        </h4>


                        <div className="w-full lg:w-[70%] mx-auto my-16 flex flex-col items-center gap-2">
                            <h2 className="w-full">
                                National Technician Network. Consistency at Scale
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
                <div className="max-w-7xl w-full sm:w-[80%] flex flex-col items-center gap-4">
                    <div className="w-full lg:w-[90%] flex">
                        <h2>
                            What's In It For You
                        </h2>
                    </div>
                    <Image
                    className="w-full lg:w-[90%] h-auto object-contain rounded-3xl" 
                    src="/serviceImages/noGapsNoHandoffs.webp" alt="What's in it for you image graphic" 
                    width="1920" height="1080"
                    sizes="(max-width: 1920px) 100vw, 50vw" />
                </div>
            </section>

            {/* Measurable Outcomes */}
            <section className="w-full py-14 my-5 text-brand-black">
                <div className="max-w-7xl w-[80%] mx-auto flex flex-col gap-2">
                    <h2>Up to 40% Lower TCO. Rollouts in Under 8 Weeks.</h2>
                    <p>
                        Working with IW lowers your total cost of ownership, speeds your rollouts, 
                        and keeps your POS running  with real numbers behind each one.
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
                                            <span className="font-semibold">Faster Rollouts</span>
                                            <span>
                                                1,000+ rapid-scale deployments completed in under 8 weeks, 
                                                minimizing disruption and speeding time to value.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={20} height={20}
                                        className="shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Lower TCO</span>
                                            <span>
                                                Up to 40% cost savings through strategic sourcing, refurbishment, 
                                                trade-ins, and extended asset life without sacrificing performance.
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
                                                Every service touchpoint is configured to your technical 
                                                and business requirements built to plug into your systems, not disrupt them.
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
                                                Hardware arrives fully staged, serialized, and tested, ready 
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
                                                and deliverables through the customer portal.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> {/* end of list */}  
                        <h4>
                            <span className="font-semibold">The outcome:</span> No surprise invoices. No emergency truck rolls. 
                            No capital spent replacing hardware that had years left. One team sources, deploys, services, and 
                            retires your POS and answers for all of it..
                        </h4>
                    </div>
                </div>
            </section> {/* end of  Measurable Outcomes */}

            {/* Sustainability */}
            <section className="w-full py-10 text-brand-black">
                <div className="max-w-7xl w-[80%] mx-auto flex flex-col gap-2">
                    <h2>Sustainability Isn't Strategy. It's Our Standard</h2>
                    <h3>We Were Refurbishing Hardware Before It Had a Name.</h3>
                    <p>
                        IW has extended the life of POS and IT hardware since late 1970s: repairing, refurbishing, 
                        and reselling equipment back when refurbishment wasn't even a category. If you needed POS 
                        hardware then, you bought it new from the manufacturer. Our founder saw the gap and built 
                        IW around giving proven hardware a second life. There was no playbook. It was just good 
                        business, and responsible operations.
                    </p>
                    <p>
                        Macy's was our first customer. Fifty years later, Macy's is still a customer.
                    </p>
                    <p>
                        We didn't adopt the circular economy. We've run one since before it had a name  extending 
                        lifecycles through repair, reuse, and recovery to cut e-waste and lower the cost and footprint
                         of running technology across a national fleet.
                    </p>
                    <p>
                        <span className="font-semibold">The proof shows up by the ton. </span>In the past 16 months, 
                        IW has kept more than 1.8 million pounds of hardware out of landfills: 1,301,263 lbs in 2025 
                        (650+ tons) and 566,887 lbs (400+ tons) so far in 2026.
                    </p>
                    <p>
                        Every day, that model lets our customers:
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
                                            through repair and part replacement programs.
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
                            <span className="font-semibold">No greenwashing. No one-time pledges.</span> It's how we've operated for 50 years and it's not changing.
                        </h4>
                    </div>
                </div>
            </section> {/* end of  Sustainability */}

            {/* Ready to talk */}
            <section className="w-full py-14 my-5 bg-brand-black text-white">
                <div className="max-w-7xl w-[80%] mx-auto flex flex-col gap-4">
                    <h2>Ready to Talk Services?</h2>
                    <p>
                        Managing a rollout, retiring legacy tech, or consolidating stores? IW handles it end to end 
                        one team accountable for your POS from procurement through disposition.
                    </p>
                    <p>
                        Our lifecycle model can cut hardware costs by up to 40% through strategic sourcing, refurbishment, trade-ins, and extended asset life without 
                        giving up performance. We've done it for 50 years, for most iconic brands across retail, grocery, pharmacy, QSR, distribution, and convenience.
                    </p>
                    <p>
                        No RFP theater. No five-vendor finger-pointing. Just the team that's already built to deliver.
                    </p>
                    <h3 className="font-semibold">
                        Have Hardware Sitting Idle?
                    </h3>
                    <p>
                        It's capital. IW reclaims, reports, and buys back retired POS and IT gear, with full asset visibility and a serialized certificate of destruction 
                        on anything data-bearing. Apply the buyback value as credit toward your next refresh and earn an additional 10%.
                    </p>
                     <p>
                        Scaling, consolidating, or refreshing your stack? Let's talk.
                    </p>
                    <LinkButton href="/get-in-touch" label="Let's Skip The RFP Theater" subLabel="Talk to the team that's already built to deliver" target="_blank" variant="light" />
                </div>
            </section> {/* end of  Ready to talk */}
        </div>
    )
}