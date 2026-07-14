import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Deployment - IW Technologies",
  description: "Deployment service offered by IW Technologies located in Elgin, IL.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Deployment - IW Technologies",
        description: "Deployment service offered by IW Technologies located in Elgin, IL.",
        url: `${BASE_URL}/services/deployment`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Deployment Services IW Technologies',
            }
        ],
    },
};

export default function DeploymentPage() {
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Deployment</h1>
                            <p className="font-semibold">
                                Operational readiness delivered at scale with precision, speed, and zero disruption.
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
                                        Staging & Integration
                                    </h3>
                                    <p>
                                        Every device is configured, serialized, tested, and kitted to spec in our 
                                        <span className="font-semibold"> 240,000+ sq ft Customer Solution Center</span>, 
                                        with capacity for <span className="font-semibold">18,000+ pallet locations </span> 
                                        and <span className="font-semibold"> 40,000 shipmentss annually. </span>
                                        What arrives at your location is deployment-ready, not a box of question marks.
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
                                        Installation
                                    </h3>
                                    <p>
                                        Whether you're opening 10 stores or remodeling 1,000, our field service 
                                        teams execute on-site installations consistently, on time, and with full 
                                        compliance. Backed by <span className="font-semibold">55,000+ on-site service events </span>
                                        and <span className="font-semibold">9,650+ locations running IW's full lifecycle service </span>
                                        across North America.
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
                                        Project Management
                                    </h3>
                                    <p>
                                        Our dedicated PMO overseas scheduling, resource deployment, risk mitigation, 
                                        and milestone delivery keeping your rollout on track and your internal teams out 
                                        of the weeds. We've successfully completed <span className="font-semibold">1,000+ rapid-scale deployments </span>
                                        in under 8 weeks.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <p className="font-semibold">
                            From first site to final location, we manage the complexity so your teams can stay 
                            focused on strategy.
                        </p>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="/get-in-touch" label="It's Not Plug-And-Pray. It's Plug-And-Play - At Enterprise" subLabel="Explore how we stage, configure, and deploy to your exact specs." target="_blank" variant="dark" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}