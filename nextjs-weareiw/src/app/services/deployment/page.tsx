import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Deployment - IW Technologies",
  description: "IW Technologies deploys POS and IT hardware for multi-site retail, grocery, and QSR: staging, installation, and PMO-managed rollouts. 1,000+ rapid rollouts completed in under 8 weeks.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Deployment - IW Technologies",
        description: "IW Technologies deploys POS and IT hardware for multi-site retail, grocery, and QSR: staging, installation, and PMO-managed rollouts. 1,000+ rapid rollouts completed in under 8 weeks.",
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
                    <div className="max-w-381 w-[80%] mx-auto flex flex-col gap-10">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Deployment</h1>
                            <p className="">
                                Use this instead - IW deploys POS and IT hardware for multi-site retail, grocery, and QSR; 
                                staged, installed, and PMO-managed from first site to last. 1,000+ rapid rollouts completed 
                                in under 8 weeks, so devices arrive deployment-ready, not a box of question marks. Plug-and-play. 
                                Not plug-and-pray.
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
                                        Every device is configured, serialized, tested, and kitted to spec before it ships 
                                        so what arrives is deployment-ready, not a box of question marks. Staging runs out of 
                                        the Customer Solution Center, with 18,000 pallet positions and 40,000 shipments a year behind it.
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
                                        Whether you're opening 10 stores or remodeling 1,000, IW's field teams handle on-site installation on time, 
                                        to spec, with full compliance. The same network runs 55,000+ on-site service events a year across North America, 
                                        so the crew installing your hardware is the crew that already services it.
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
                                        A dedicated PMO owns scheduling, resource planning, risk mitigation, and milestone delivery; keeping your rollout on 
                                        track and your internal teams out of the weeds. You get one point of contact and a plan you can hold us to, not a project 
                                        you have to manage yourself.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <p className="font-semibold">
                            From first site to last, IW manages the rollout so your team isn't managing vendors.
                        </p>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="/get-in-touch" label="Tell us your rollout." subLabel="We'll stage, configure, and install to your exact spec." target="_blank" variant="dark" />
                        </div>

                        {/* Questions */}
                        <div className="w-full flex flex-col gap-4">
                            <h3 className="w-fit border-b-4 border-brand-aqua px-2 pl-0 my-2.5 font-semibold">What Multi-Site Teams Ask Us Before a Rollout</h3>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How long does a multi-site POS rollout take?</h4>
                                <p>
                                    It depends on site count and scope, but IW has completed 1,000+ rapid-scale deployments in under 8 weeks. Devices are staged, 
                                    serialized, and tested before they ship, so on-site time is installation not configuration which is what keeps large rollouts 
                                    on schedule.
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How do you deploy without disrupting store operations?</h4>
                                <p>
                                    Every device arrives deployment-ready, kitted to spec, so crews install rather than troubleshoot on the floor. A dedicated PMO 
                                    sequences the rollout around store hours and milestones, and the same field network that installs your hardware already services 
                                    55,000+ events a year so there's no handoff between the install crew and the support crew. <span><a className="underline hover:text-brand-aqua" href="/faq/how-do-i-manage-a-pos-hardware-rollout-across-200-locations-without-disrupting-store-operations" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">What is POS staging and kitting?</h4>
                                <p>
                                    Staging is where IW configures, serializes, tests, and kits each device to your spec in the Customer Solution Center before it ships. 
                                    Kitting means every location's hardware arrives grouped and labeled for that site, so the install team opens a box that's ready to 
                                    deploy not a pile of parts to sort. <span><a className="underline hover:text-brand-aqua" href="/faq/who-provides-pos-staging-imaging-and-kitting-services-for-retail-and-qsr-chains" target="_blank">Read the full answer</a></span>
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">Can IW handle both new-store rollouts and remodels?</h4>
                                <p>
                                    Yes, from opening 10 stores to remodeling 1,000. IW deploys for net-new builds, tech refreshes, and remodels across retail, grocery, 
                                    and QSR, with the PMO managing scheduling, resourcing, and risk on each.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}