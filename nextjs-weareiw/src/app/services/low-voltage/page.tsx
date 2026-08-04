import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Low Voltage Cabling - IW Technologies",
  description: "IW Technologies installs and certifies structured low-voltage cabling for multi-site retail, grocery, and QSR rough-in to device turn-up, to OSHA and BICSI standards. Wi-Fi, fiber, IP camera, and paging systems.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Low Voltage Cabling - IW Technologies",
        description: "IW Technologies installs and certifies structured low-voltage cabling for multi-site retail, grocery, and QSR rough-in to device turn-up, to OSHA and BICSI standards. Wi-Fi, fiber, IP camera, and paging systems.",
        url: `${BASE_URL}/services/low-voltage`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Low Voltage Cabling Services IW Technologies',
            }
        ],
    },
};

export default function LowVoltagePage() {
    return (
        <div>
            <section className="h-96 text-white">
                <Hero 
                    imageSrc="/serviceImages/lowVoltage.webp"
                    imageAlt="Blue tinted low voltage hero image"
                    imageWidth={1871}
                    imageHeight={1043}
                    text={
                    <>
                        
                    </>
                    }
                />
            </section>

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="max-w-381 w-[80%] mx-auto flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Low Voltage Cabling</h1>
                            <p className="font-semibold">
                                The infrastructure behind every install.
                            </p>
                            <p>
                                IW installs and certifies structured low-voltage cabling for multi-site retail, 
                                grocery, and QSR: rough-in, termination, and device turn-up, to OSHA and BICSI 
                                standards. Whether you're opening net-new stores, remodeling, or relocating, 
                                your systems get wired right the first time so cabling is never the thing that 
                                holds up opening day.
                            </p>
                        </div>

                        
                        <div className="flex flex-col gap-2">
                            <h2>What We Do</h2>
                            <p>
                                IW wires the systems a store runs on POS and networking, Wi-Fi, cameras, 
                                and displays across any store format and any footprint.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/list-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="">
                                        Structured Cabling Design, Installation & Certification
                                    </h3>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/network-wired-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="">
                                        Internal Fiber Optic Cabling
                                    </h3>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/wifi-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="">
                                        Wi-Fi Deployment & Access Point Installation
                                    </h3>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/compact-disc-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="">
                                        IP Camera & Background Audio Systems
                                    </h3>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/display-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="">
                                        Paging Systems, Video Walls & Digital Displays
                                    </h3>
                                    </>
                                }
                            />
                            
                        </div>
                        <p>
                            Every project is executed to OSHA and BICSI standards: clean, labeled, tested, and future-ready.
                        </p>

                        <div className="flex flex-col gap-2">
                            <h2>Why It Matters</h2>
                            <p className="font-semibold">
                                Cabling isn't a line item. It's the foundation.
                            </p>
                            <p>
                                When it fails, it's not just downtime it's a store that can't open, checkout that won't ring, 
                                and a crew standing around waiting on a vendor.
                            </p>
                            <p>
                                That's why IW's structured cabling teams work in lockstep with your deployment schedules, 
                                technology roadmap, and site development plans ensuring that what's behind the wall performs 
                                as reliably as what's plugged into it.
                            </p>
                            <p>
                                Fewer delays. Less rework. Full operational visibility.
                            </p>
                            <div>
                                <p className="font-semibold">Great tech starts with clean wiring. We make sure of it.</p>
                                <p>Opening, remodeling, or relocating? Tell us the sites.</p>
                            </div>
                            
                            <div className="w-full flex flex-col items-center mx-auto my-10">
                                <LinkButton href="/get-in-touch" label="We'll handle what's behind the wall." target="_blank" variant="dark" />
                            </div>
                            
                            {/* Questions */}
                            <div className="w-full flex flex-col gap-4">
                                <h3 className="w-fit border-b-4 border-brand-aqua px-2 pl-0 my-2.5 font-semibold">What Store Ops and IT Teams Ask Us About Cabling</h3>

                                <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                    <h4 className="font-semibold">Do you cable to BICSI and OSHA standards?</h4>
                                    <p>
                                        Yes. Every IW project is installed to OSHA and BICSI standards: 
                                        clean, labeled, tested, and certified, so it passes inspection and 
                                        stays serviceable years later. <span><a className="underline hover:text-brand-aqua" href="/faq/which-companies-provide-low-voltage-cabling-and-structured-wiring-for-retail-store-pos-environments" target="_blank">Read the full answer</a></span>
                                    </p>
                                </div>

                                <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                    <h4 className="font-semibold">Can you handle cabling for a multi-site rollout?</h4>
                                    <p>
                                        Yes, from opening 5 stores to retrofitting 500. IW's cabling teams run in lockstep with your 
                                        deployment schedule so wiring is sequenced with the rest of the rollout, not bolted on after. 
                                    </p>
                                </div>

                                <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                    <h4 className="font-semibold">Who installs low-voltage cabling for store POS environments?</h4>
                                    <p>
                                        IW Technologies, across retail, grocery, QSR, hospitality, convenience, and distribution as the 
                                        same partner that also handles procurement, deployment, maintenance, and disposition, so cabling 
                                        isn't a separate vendor to manage. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}