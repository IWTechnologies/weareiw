import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Maintenance - IW Technologies",
  description: "Maintenance service.",
};

export default function MaintenancePage() {
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Maintenance</h1>
                            <p className="">
                                Maximum uptime. Minimal disruption. Nationwide coverage you can trust.
                            </p>
                            <p>
                                Our maintenance model is built for organizations where downtime isn't just 
                                inconvenient. It's costly. Whether you need immediate onsite repairs, strategic 
                                part replacements, or agile support for unplanned incidents, IW ensures continuity 
                                across your operational footprint.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/gear-solid-full.svg"
                                    alt="blue and white circle check icon" width={50} height={50}
                                    className="shrink-0" />
                                    <h3 className="font-semibold">
                                        On-Site Repair
                                    </h3>
                                    <p>
                                        Fast, qualified service exactly where and when you need it. Our network of 1,850+ 
                                        fully vetted technicians cover 99% of the U.S. population within 100 miles, delivering 
                                        same-day resolution in 90% of service requests.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/clipboard-check-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Replacement Part Delivery
                                    </h3>
                                    <p>
                                        Remote troubleshooting paired with overnight fulfillment gets your teams back 
                                        online without waiting for a truck roll. Supported by our 40,000 annual shipments 
                                        and real-time inventory tracking from our 240,000+ sq ft warehouse.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/people-group-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Ad-Hoc Services
                                    </h3>
                                    <p>
                                        When priorities shift or unexpected needs arise, we activate techs and hardware 
                                        on demand without slowing down your core teams. Deployed in both high-frequency 
                                        environments (Retail, QSR, c-store) and complex multi-site operations.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <p>
                            With over 55,000 on-site service events in 2024 alone, we don't just respond. 
                            We resolve.
                        </p>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="/products" label="We Don't Miss SLAs. We Write Them In Ink" subLabel="Talk to a team that shows up." target="_blank" variant="dark" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}