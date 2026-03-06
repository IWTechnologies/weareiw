import Hero from "@/components/Hero";

export default function AboutPage() {
    return (
        <div>
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
        </div>
    )
}