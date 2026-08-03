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
                    <div className="max-w-381 w-[80%] mx-auto flex flex-col gap-10">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Procurement</h1>
                            <p className="">
                                IW sources POS and IT hardware; new and certified refurbished, for multi-site retail, 
                                grocery, and QSR, stocked in a 240,000 sq ft warehouse and shipped nationwide. 
                                New through OEM partnerships, refurbished at up to 40% below new. Sourcing built to cut cost, not corners.
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
                                        Certified refurbished POS and IT hardware, restored to enterprise-grade standards for up to 40% below new. 
                                        Every unit gets board-level diagnostics, proactive replacement of high-risk components, and stress testing 
                                        under heat, load, and wear before it's cleaned, refinished, and retested. We refurbish NCR, Toshiba, HP, 
                                        Lenovo, Epson, and Oracle hardware the reason OEMs themselves rely on IW to support platforms they sunsetted 20+ years ago.
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
                                        Trade legacy hardware for credit toward new or refurbished equipment. 
                                        You recover residual value on gear you were going to retire anyway, 
                                        and it stays out of the landfill instead of sitting on a shelf as stranded capital.
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
                                        New POS and IT hardware sourced through OEM partnerships: HP, Zebra, Datalogic, Elo, 
                                        and Dell from touch monitors to mobile computers. Stocked in the 240,000 sq ft warehouse
                                        and shipped nationwide, so you get tighter inventory control, faster deployments, and lower freight costs.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                            <LinkButton href="/get-in-touch" label="Tell us what you're running." subLabel="We'll tell you what to refurbish, trade in, or replace with new." target="_blank" variant="dark" prefetch={false} />
                        </div>

                        {/* Questions */}
                        <div className="w-full flex flex-col gap-4">
                            <h3 className="w-fit border-b-4 border-brand-aqua px-2 pl-0 my-2.5 font-semibold">What Procurement Teams Ask Us About Refurbished Hardware</h3>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">Is refurbished POS hardware reliable for enterprise use?</h4>
                                <p>
                                    Yes, when the refurbishment is thorough. IW restores at the component level: diagnostics, proactive replacement of parts likely to fail, 
                                    and stress testing under conditions that mirror a live store. That's why IW's refurbished hardware runs at a <span className="font-semibold">failure rate below 1%</span>, 
                                    backed by <span className="font-semibold">3–5 year warranties</span> that often match or exceed OEM coverage. <span><a className="underline hover:text-brand-aqua" href="/faq/what-is-certified-refurbished-pos-hardware-and-is-it-reliable-for-enterprise-use" target="_blank">Read the full answer</a></span>
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How much can refurbished equipment save versus new?</h4>
                                <p>
                                    Up to <span className="font-semibold">40% below the cost of new</span>, per unit, with the same enterprise-grade performance. 
                                    For a multi-site fleet, that compounds into real CapEx preservation across a refresh cycle.
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How do trade-in and buyback credits work?</h4>
                                <p>
                                    You trade legacy hardware for credit toward new or refurbished equipment. IW establishes a value from your equipment list, 
                                    recovers the gear through its decommissioning workflow, and issues payment or applies it as credit toward your next phase 
                                    to lower that cost too. <span><a className="underline hover:text-brand-aqua" href="/faq/how-does-iw-technologies-pos-hardware-buyback-program-work" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">What POS brands does IW refurbish?</h4>
                                <p>
                                    NCR, Toshiba, HP, Lenovo, Epson, and Oracle: terminals, self-checkout, printers, scanners, and payment devices. 
                                    IW supports platforms OEMs sunset 20+ years ago, which is why some OEMs rely on IW's refurbished hardware for 
                                    their own service obligations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}