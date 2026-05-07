import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Low Voltage Cabling - IW Technologies",
  description: "Low Voltage Cabling service.",
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
                    <div className="w-[80%] mx-auto flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Low Voltage Cabling</h1>
                            <p className="font-semibold">
                                The infrastructure layer that makes everything else work.
                            </p>
                            <p>
                                From rough-in and termination to final device turn-up, we deliver 
                                certified, enterprise-grade low voltage infrastructure that powers 
                                your IT stack without the rewiring headaches. Whether you're 
                                opening net-new stores, remodeling existing spaces, or relocating 
                                operations, our technicians ensure your systems are wired for the 
                                first time.
                            </p>
                        </div>

                        
                        <div className="flex flex-col gap-2">
                            <h2>What We Do</h2>
                            <p>
                                Our structured low voltage solutions are designed to support complex, 
                                multi-site environments with speed, precision, and compliance.
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
                            Every project is executed in line with OSHA and BICSI standards, 
                            ensuring, your infrastructure is clean, labeled, tested, and future-ready.
                        </p>

                        <div className="flex flex-col gap-2">
                            <h2>Why It Matters</h2>
                            <p className="font-semibold">
                                Cabling isn't a line item. It's the foundation.
                            </p>
                            <p>
                                When infrastructure fails, it's not just downtime. It's disruption, 
                                cost, and lost trust.
                            </p>
                            <p>
                                That's why IW's structured cabling teams work in lockstep with your 
                                deployment schedules, technology roadmap, and site development plans 
                                ensuring that what's behind the wall performs as reliably as what's 
                                plugged into it.
                            </p>
                            <p>
                                Fewer delays. Less rework. Full operational visibility.
                            </p>
                            <p>
                                All delivered by a partner who understands the stakes and owns the outcome.
                            </p>
                            <div className="my-5">
                                <LinkButton href="https://www.weareiw.com/get-in-touch/" label="Built For Scale. Wired For It, Too" subLabel="If your cabling can't scale, your tech won't either. Let's Talk" target="_blank" variant="dark" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}