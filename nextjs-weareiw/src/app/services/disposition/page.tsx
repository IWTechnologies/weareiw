import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Disposition - IW Technologies",
  description: "Disposition service.",
};

export default function DispositionPage() {
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
                            <h1 className="w-fit border-b-4 border-brand-aqua px-2 pl-0">Disposition</h1>
                            <p className="font-semibold">
                                Responsible recovery at scale protecting your data, your brand, and your bottom line.
                            </p>
                            <p>
                                When IT assets reach end-of-life, we ensure they're decommissioned securely, 
                                sustainably, and with full operational accountability. We manage the physical, 
                                digital, and logistical risks so your teams don't have to.
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
                                        Seamless site closures or tech refreshes including asset tagging, on-site 
                                        labor, secure packing, and chain-of-custody transport. 
                                    </p>
                                    <p>
                                        Managed across 
                                        <span className="font-semibold"> 9,650+ customer locations on full lifecycle maintenance </span>
                                        and supported by <span className="font-semibold"> 18,000+ pallet positions </span>in our 
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
                                    <p className="font-semibold">
                                        Inventory is an asset. We make sure it acts like one.
                                    </p>
                                    <p>
                                        At IW, asset reclamation isn't an afterthought. It's a core capability. We 
                                        help enterprise teams regain control of their tech estate, recover hardware 
                                        from the field, and determine what can be refurbished, redeployed, or 
                                        responsibly recycled all through a structured, data-driven process.
                                    </p>
                                    <p>
                                        Our team handles everything from field recovery and chain-of-custody 
                                        logistics to condition grading, reporting, and next-step recommendations 
                                        so you can reduce replacement costs, cut waste, and unlock hidden value across 
                                        your footprint.
                                    </p>
                                    <p>
                                        In 2024 alone, IW reclaimed or recycled over 815 tons of technology equipment, 
                                        helping enterprise partners reduce emissions, recover spend, and eliminate inventory 
                                        blind spots.
                                    </p>
                                    <p>
                                        It's not just recycling. It's responsible, reportable, operationally integrated recovery.
                                    </p>
                                    <p className="font-semibold">
                                        Unrecovered assets aren't just clutter. They're capital left on the table. Let's 
                                        reclaim what's yours and put it back into your operating model.
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
                                    <p className="font-semibold">
                                        Secure. Documented. Irreversible.
                                    </p>
                                    <p>
                                        At the end of every IT asset's life is a critical inflection point: ensuring that 
                                        sensitive data doesn't live on beyond its intended use. IW's certified data destruction 
                                        services are designed to eliminate that risk with precision, transparency, and full compliance.
                                    </p>
                                    <p>
                                        Whether you're governed by PCI DSS, HIPAA, TAA, or internal risk policies, we meet or 
                                        exceed the standard and document every step.
                                    </p>
                                    <h4 className="font-semibold">
                                        What We Deliver:
                                    </h4>
                                    <ul className="w-full flex flex-col gap-5">
                                        <li className="flex gap-2">
                                            <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                            alt="blue and white circle check icon" width={20} height={20}
                                            className="shrink-0" />
                                            <div className="">
                                                Certified digital and physical sanitization, including 
                                                degaussing and secure shredding.
                                            </div>
                                        </li>
                                        <li className="flex gap-2">
                                            <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                            alt="blue and white circle check icon" width={20} height={20}
                                            className="shrink-0" />
                                            <div className="">
                                                Strick adherence to customer-specific compliance protocols.
                                            </div>
                                        </li>
                                        <li className="flex gap-2">
                                            <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                            alt="blue and white circle check icon" width={20} height={20}
                                            className="shrink-0" />
                                            <div className="">
                                                Audit-ready documentation with full asset-level reporting.
                                            </div>
                                        </li>
                                        <li className="flex gap-2">
                                            <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                            alt="blue and white circle check icon" width={20} height={20}
                                            className="shrink-0" />
                                            <div className="">
                                                Routine audits and chain-of-custody tracking.
                                            </div>
                                        </li>
                                        <li className="flex gap-2">
                                            <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                            alt="blue and white circle check icon" width={20} height={20}
                                            className="shrink-0" />
                                            <div className="">
                                                Environmentally responsible disposal through ISO and R2-certified e-cycling.
                                            </div>
                                        </li>
                                    </ul>
                                    </>
                                }
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">
                                What leaves your business shouldn't take your data with it. Let's erase risk, the 
                                right way.
                            </p>
                            <p>
                                This isn't just data destruction. It's risk mitigation at the infrastructure level 
                                built into the lifecycle, not bolted on after.
                            </p>
                        </div>

                        <div className="w-full flex flex-col items-center mx-auto my-5">
                                <LinkButton href="#" label="Your Tech's Done Working. We're Not" subLabel="Let's close the loop - securely and sustainably." target="_blank" variant="dark" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}