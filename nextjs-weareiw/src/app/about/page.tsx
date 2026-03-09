import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";

export default function AboutPage() {
    return (
        <div className="bg-brand-black">
            <section className="h-fit flex flex-col items-center text-white">
                <Hero 
                    imageSrc="/heroImages/aboutUsHero.png"
                    imageAlt="Blue tinted Services card image"
                    imageWidth={1920}
                    imageHeight={1080}
                    text={
                    <>
                      <h1>Powering the Tech Ecosystems Behind the World's Top Brands</h1>
                      <div className="font-bold">About IW Technologies</div>
                      <div className="">
                        IW Technologies architects and optimizes <span className="font-bold">POS and tech ecosystems </span>
                        for leading brands across <span className="font-bold">Retail, Grocery, QSR, Hospitality, Convenience,
                        and Distribution.</span> 
                      </div>
                      <div className="">
                        With nearly 50 years of experience and a 240,000 sq ft warehouse of new
                        and refurbished inventory, we deliver fast, scalable, future-ready solutions
                        from mobile POS to self-checkout, networking, and more.
                      </div>
                    </>
                    }
                    link={{
                        href: "#",
                        label: "Let's Build Your Next Roll Out",
                        variant: "light",
                    }}
                />
            </section>

            <section className="w-[80%] flex justify-center p-5 pb-14 mx-auto bg-brand-black text-white">
                <div className="flex flex-col gap-5">
                    <h2 className="text-center">What We Do</h2>
                    <h3>IW Technologies - Your Enterprise Solutions Partner</h3>
                    <div>
                        We intergrate cutting-edge hardware, agile deployment, and white-glove
                        support to deliver end-to-end IT lifecycle solutions. Whether it's
                        nationwide rollouts, on-site break/fix, or secure tech disposition,
                        IW scales to meet the demands of modern enterprise.
                    </div>
                    <div>
                        We design, deploy, and support the critical infrastructure behind every
                        transaction, every interaction, and every rollout.
                    </div>
                    <div className="font-bold">
                        Procurement | Configuration & Deployment | Field Maintenance | Secure Disposition
                    </div>
                    <div>
                        Modular or full-stack - your tech, your pace.
                    </div>
                </div>
            </section>

            <section className="w-full py-14 rounded-t-3xl bg-background">
                <div className="container mx-auto flex justify-center">
                    <Blurb 
                    media={{
                        type: "image",
                        src: "/copylifeCycle.png",
                        alt: "Blue tinted image of IW team in meeting",
                        width: 512,
                        height: 342,
                    }}
                    text={
                        <>
                        <h3>This is placeholder content</h3>
                        <p>POS is critical infrastructure. When it works, operations stay focused and customers keep moving. That reliability depends on clear ownership.</p>
                        <p>From sourcing and deployment to maintenance, refurbishment, and retirement, we take responsibility for POS in the field across its full lifecycle.</p>
                        <p>We believe critical infrastructure calls for long-term thinking, clear accountability, and partners committed to seeing it through.</p>
                        </>
                    }
                    reverse
                    textColor="text-brand-black"
                    />
                </div>
            </section>
        </div>
    )
}