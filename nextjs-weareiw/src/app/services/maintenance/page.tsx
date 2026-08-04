import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants"; 
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Maintenance - IW Technologies",
  description: "IW Technologies maintains POS and IT hardware for multi-site retail, grocery, and QSR: on-site repair, replacement parts, and ad-hoc field service. 1,850+ technicians, 90% same-day resolution.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Maintenance - IW Technologies",
        description: "IW Technologies maintains POS and IT hardware for multi-site retail, grocery, and QSR: on-site repair, replacement parts, and ad-hoc field service. 1,850+ technicians, 90% same-day resolution.",
        url: `${BASE_URL}/services/maintenance`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Maintenance Services IW Technologies',
            }
        ],
    },
};

export default function MaintenancePage() {
    return (
        <div>
            <section className="h-96 text-white">
                <Hero 
                    imageSrc="/serviceImages/MaintenanceHero.webp"
                    imageAlt="IW maintenance page hero image"
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Maintenance</h1>
                            <p className="font-semibold">
                                Uptime isn't optional. We keep you running.
                            </p>
                            <p>
                                IW maintains POS and IT hardware in the field for multi-site retail, grocery, 
                                and QSR: on-site repair, replacement parts, and ad-hoc support when priorities 
                                shift. A network of 1,850+ vetted technicians reaches 99% of the U.S. within 
                                100 miles and resolves 90% of requests the same day.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/screwdriver-wrench-solid-full.svg"
                                    alt="blue and white circle check icon" width={50} height={50}
                                    className="shrink-0" />
                                    <h3 className="font-semibold">
                                        On-Site Repair
                                    </h3>
                                    <p>
                                        Qualified techs come to the store to fix hardware in place extending 
                                        the life of what you've already deployed. IW's network of 1,850+ vetted 
                                        technicians reaches 99% of the U.S. within 100 miles, resolving 90% of 
                                        requests the same day.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/truck-fast-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Replacement Part Delivery
                                    </h3>
                                    <p>
                                        When a part can be swapped without a visit, IW troubleshoots remotely 
                                        and ships the replacement overnight so a store is back online without 
                                        waiting for a truck roll. Backed by 40,000 shipments a year and real-time 
                                        inventory tracking.
                                    </p>
                                    </>
                                }
                            />
                            <Card 
                                text={
                                    <>
                                    <img src="/serviceImages/icons/shield-halved-solid-full.svg"
                                        alt="blue and white circle check icon" width={50} height={50}
                                        className="shrink-0" />
                                    <h3 className="font-semibold">
                                        Ad-Hoc Services
                                    </h3>
                                    <p>
                                        On-demand techs and hardware when priorities shift extra hands for a peak week, 
                                        an unplanned incident, a one-off across sites. Built for high-frequency retail, 
                                        QSR, and c-store, without pulling your core team off their work.
                                    </p>
                                    </>
                                }
                            />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold">
                                We don't miss SLAs. We write them in ink.
                            </p>
                            <p>
                                Something down, or bracing for peak? Tell us what you're running.
                            </p>
                        </div>
                        
                        <div className="w-full flex flex-col items-center mx-auto my-5">
                            <LinkButton href="/get-in-touch" label="We'll keep it running." target="_blank" variant="dark" />
                        </div>

                        {/* Questions */}
                        <div className="w-full flex flex-col gap-4">
                            <h3 className="w-fit border-b-4 border-brand-aqua px-2 pl-0 my-2.5 font-semibold">What IT and Ops Teams Ask Us About Uptime</h3>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">How fast does IW resolve a hardware issue?</h4>
                                <p>
                                    90% of service requests are resolved the same day. IW's 1,850+ vetted technicians cover 99% 
                                    of the U.S. within 100 miles, so a tech reaches most sites fast and when a part can ship 
                                    instead, it goes out overnight.
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">What SLAs should I expect from a POS field service provider?</h4>
                                <p>
                                    IW manages SLAs, exception handling, and field readiness from a centralized team, with same-day 
                                    resolution on the majority of requests. The commitment is written into the agreement not a 
                                    best-effort promise. <span><a className="underline hover:text-brand-aqua" href="/faq/what-slas-should-i-expect-from-a-pos-field-service-provider" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">A terminal dies mid-shift. How fast can you get me a working one?</h4>
                                <p>
                                    Fast enough that the lane isn't down waiting on a repair. For critical hardware, IW ships a replacement 
                                    the moment a failure is confirmed, before the dead unit comes back  so the store swaps in a working device 
                                    instead of sitting in a return-and-repair cycle. (This is called advance exchange, and it's built for high-volume 
                                    floors where a down device means a closed lane.) <span><a className="underline hover:text-brand-aqua" href="/faq/what-is-advance-exchange-for-pos-hardware-and-when-should-retailers-use-it" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>

                            <div className="w-full flex flex-col p-4 gap-1 rounded-3xl bg-white overflow-hidden shadow-md">
                                <h4 className="font-semibold">Can one team handle repairs across all our locations?</h4>
                                <p>
                                    Yes. IW runs on-site repair through a 1,850+ technician network across retail, grocery, hospitality, QSR, convenience, 
                                    and distribution; nationwide break/fix, plus depot repair for spares and non-critical gear you'd rather send in than wait on. 
                                    One team for every site, instead of a different local vendor in every market. <span><a className="underline hover:text-brand-aqua" href="/faq/who-provides-pos-hardware-de-installation-and-itad-services-for-enterprise-retail-chains" target="_blank">Read the full answer</a></span> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}