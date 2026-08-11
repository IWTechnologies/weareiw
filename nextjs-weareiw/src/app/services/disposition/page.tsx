import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Disposition - IW Technologies",
  description: "IW Technologies maintains POS and IT hardware for multi-site retail, grocery, and QSR: on-site repair, replacement parts, and ad-hoc field service. 1,850+ technicians, 90% same-day resolution.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Disposition - IW Technologies",
        description: "IW Technologies maintains POS and IT hardware for multi-site retail, grocery, and QSR: on-site repair, replacement parts, and ad-hoc field service. 1,850+ technicians, 90% same-day resolution.",
        url: `${BASE_URL}/services/disposition`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Disposition Services IW Technologies',
            }
        ],
    },
};

export default function DispositionPage() {
    return (
        <div>
            <section className="h-96 text-white">
                <Hero 
                    imageSrc="/serviceImages/DispositionNew.webp"
                    imageAlt="Disposition service hero image"
                    imageWidth={1900}
                    imageHeight={400}
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Disposition</h1>
                            <p className="font-semibold">
                                End-of-life isn't the end of responsibility.
                            </p>
                            <p>
                                IW handles the last stage of the hardware lifecycle for multi-site retail, 
                                grocery, and QSR: deinstallation, asset reclamation, buyback, and certified 
                                data destruction, with documented chain of custody the whole way. As one of 
                                the largest buyers of used retail technology, IW recovers value from gear 
                                you're retiring instead of writing it off.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/snowplow-solid-full.svg"
                                    alt="blue and white circle check icon" width={50} height={50}
                                    className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Deinstallation
                                    </h3>
                                    <p>
                                        Secure removal for site closures, remodels, and refreshes; asset tagging, 
                                        on-site labor, secure packing, and chain-of-custody transport. IW pulls 
                                        the hardware out cleanly, so a closing or remodeling store doesn't turn 
                                        into a pile of untracked gear. Backed by 18,000 pallet positions in the 
                                        national warehousing network. 
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/recycle-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Asset Reclamation
                                    </h3>
                                    <p className="">
                                        Reclaimed hardware is graded, reported, and routed to its best next step: refurbish, 
                                        redeploy, recycle, or buy back. IW is one of the largest buyers of used retail technology: 
                                        you get paid for gear you were retiring anyway, and you can apply that value as credit 
                                        toward your next refresh with an additional 10% on top. Unrecovered assets aren't clutter. 
                                        They're capital left on the table.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/database-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Data Destruction
                                    </h3>
                                    <p>
                                        Secure. Documented. Irreversible. Secure. Documented. Irreversible. Every data-bearing device is wiped or degaussed in a secure 
                                        processing cage, with a serialized Certificate of Destruction for audit and compliance. Meets 
                                        PCI DSS, HIPAA, and TAA requirements, with ISO- and R2-certified e-cycling for whatever can't be reused.
                                    </p>
                                    <p>
                                        Decommissioning isn't a one-time project. It's a recurring event. IW makes it a controlled one: 
                                        value recovered, data destroyed, chain of custody documented, every time.
                                    </p>
                                    </>
                                }
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">
                                Your tech's done working. We're not.
                            </p>
                            <p>
                                Closing sites, refreshing, or consolidating? Send us the equipment list.
                            </p>
                        </div>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="/get-in-touch" label="We'll tell you what it's worth." target="_blank" variant="dark" />
                        </div>

                        {/* Questions */}
                        <div className="w-full flex flex-col gap-4">
                            <h3 className="w-fit border-b-4 border-brand-aqua px-2 pl-0 my-2.5 font-semibold">What IT and Finance Teams Ask Us About Retiring Hardware</h3>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">We're refreshing hundreds of stores. What do we do with the old POS gear?</h4>
                                <p>
                                    You don't have to write it off. IW deinstalls it, grades it, and buys back what still has value. You get paid for hardware you were 
                                    retiring anyway, or apply that value as credit toward the new equipment with an additional 10% on top. Whatever can't be reused is 
                                    recycled through certified channels. <span><a className="underline hover:text-brand-aqua" href="/faq/how-does-iw-technologies-pos-hardware-buyback-program-work" target="_blank">Read the full answer</a></span>
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How is buyback value determined?</h4>
                                <p>
                                    From your equipment list: part numbers, models, and configurations plus practical factors like location, timeline, logistics, 
                                    and whether cables and power supplies are included. Consolidated returns are simpler to process than individual site shipments. 
                                    Send the list and IW establishes a value. <span><a className="underline hover:text-brand-aqua" href="/faq/how-does-pos-hardware-buyback-work-and-how-is-value-determined" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How do we keep customer data secure when retiring hardware across locations?</h4>
                                <p>
                                    Every data-bearing device is wiped or degaussed in a secure processing cage, and you get a serialized Certificate of Destruction 
                                    for each one audit-ready proof for PCI DSS, HIPAA, and TAA. Chain of custody is documented from the moment the device 
                                    leaves the store. <span><a className="underline hover:text-brand-aqua" href="/faq/how-do-i-ensure-data-security-when-retiring-pos-hardware-across-multiple-locations" target="_blank">Read the full answer</a></span>
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">What happens to hardware that can't be resold?</h4>
                                <p>
                                    It's routed through certified recycling partners aligned to recognized e-waste standards electronics, batteries, and regulated materials 
                                    separated and processed responsibly, with documentation by project and device category for your sustainability reporting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}