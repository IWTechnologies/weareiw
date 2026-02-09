import Blurb  from "@/components/Blurb";

export default function ProductsPage() {
    return (
        <div>
            <div>hello this is a test</div>
            <section className="section-bg-diagonal relative w-full py-14">
                <div className="relative container mx-auto flex flex-col items-center">
                    <div className="pb-4 font-bold text-3xl lg:text-4xl text-brand-navy text-center">
                    <h2>Your POS Technology Partner. Trusted by the Best</h2>
                    </div>
                    <Blurb 
                    media={{
                        type: "video",
                        youtubeId: "L4O1ejWfDAc",
                    }}
                    title=""
                    text={[
                        `IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality,
                    Convenience, Distribution. We go beyond hardware — designing, deploying, and supporting
                    your tech stack.`,
                    `With 45+ years of experience and a 240,000 sq ft warehouse of new / 
                    refurbished inventory, we deliver fast, scalable solutions — mobile POS,
                    self-checkout, networking and more.`
                    ]}
                    linkHref="#" 
                    linkLabel="Let's Build Your Next Rollout"
                    reverse
                    textColor="text-brand-navy"
                    />
                </div>
            </section>
            <section className="section-bg-diagonal relative w-full py-14">
                <div className="relative container mx-auto flex flex-col items-center">
                    <div className="pb-4 font-bold text-3xl lg:text-4xl text-brand-navy text-center">
                    <h2>Your POS Technology Partner. Trusted by the Best</h2>
                    </div>
                    <Blurb 
                    media={{
                        type: "video",
                        youtubeId: "L4O1ejWfDAc",
                    }}
                    title=""
                    text={[
                        `IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality,
                    Convenience, Distribution. We go beyond hardware — designing, deploying, and supporting
                    your tech stack.`,
                    `With 45+ years of experience and a 240,000 sq ft warehouse of new / 
                    refurbished inventory, we deliver fast, scalable solutions — mobile POS,
                    self-checkout, networking and more.`
                    ]}
                    linkHref="#" 
                    linkLabel="Let's Build Your Next Rollout"
                    reverse
                    textColor="text-brand-navy"
                    />
                </div>
            </section>
            <section id="partners" className="section-bg-diagonal relative w-full py-14">
                <div className="relative container mx-auto flex flex-col items-center">
                    <div className="pb-4 font-bold text-3xl lg:text-4xl text-brand-navy text-center">
                    <h2>Your POS Technology Partner. Trusted by the Best</h2>
                    </div>
                    <Blurb 
                    media={{
                        type: "video",
                        youtubeId: "L4O1ejWfDAc",
                    }}
                    title=""
                    text={[
                        `IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality,
                    Convenience, Distribution. We go beyond hardware — designing, deploying, and supporting
                    your tech stack.`,
                    `With 45+ years of experience and a 240,000 sq ft warehouse of new / 
                    refurbished inventory, we deliver fast, scalable solutions — mobile POS,
                    self-checkout, networking and more.`
                    ]}
                    linkHref="#" 
                    linkLabel="Let's Build Your Next Rollout"
                    reverse
                    textColor="text-brand-navy"
                    />
                </div>
            </section>
        </div>
        
    )
}