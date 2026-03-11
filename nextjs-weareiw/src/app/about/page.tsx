import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import NumCounter from "@/components/NumCounter";

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

            <section className="w-full flex justify-center py-14 mt-4 rounded-t-3xl bg-background text-brand-black">
                <div className="w-[80%] mx-auto flex flex-col gap-5">
                    <h2>What We Do</h2>
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

            <section className="w-full pb-14 bg-background">
                <NumCounter />
            </section>

            <section id="hardware"
                  className="w-full flex flex-col items-center bg-background">
                    <div className="w-full lg:w-[80%] mx-auto mb-15 text-brand-black text-center">
                      <h2>
                        Guided By Our Values
                      </h2>
                      <h3>
                        We believe in going above and beyond for our customers, providing them with the 
                        most comprehensive enterprise solutions in the industry.
                      </h3>
                    </div>
                    <div className="w-[80%] mx-auto mb-15 flex flex-col items-center gap-8
                    lg:flex-row lg:justify-center lg:items-stretch">
                      <Card 
                        imageSrc="/View-our-products-Moody-blue.png"
                        imageAlt="Blue tinted view our products card image"
                        imageWidth={663}
                        imageHeight={432}
                        text={
                          <>
                            <h3>Service</h3>
                            <p>
                                Our dedication to our customers is second to none. When they have a need,
                                issue, or last-minute request, we always deliver.
                            </p>
                          </>
                        }
                      />
                      <Card 
                        imageSrc="/Services-Moody-Blue.png"
                        imageAlt="Blue tinted Services card image"
                        imageWidth={669}
                        imageHeight={375}
                        text={
                          <>
                            <h3>Integrity</h3>
                            <p>
                                We have the best interests of our people and our customers in mind always,
                                and we act accordingly, following through on our commitments and fostering respect.
                            </p>
                          </>
                        }
                      />
                      <Card 
                        imageSrc="/Services-Moody-Blue.png"
                        imageAlt="Blue tinted Services card image"
                        imageWidth={669}
                        imageHeight={375}
                        text={
                          <>
                            <h3>Partnership</h3>
                            <p>
                                We are committed to being a true partner to our customers every step
                                of the way, offering fully customized solutions and consistent support.
                            </p>
                          </>
                        }
                      />
                      <Card 
                        imageSrc="/Services-Moody-Blue.png"
                        imageAlt="Blue tinted Services card image"
                        imageWidth={669}
                        imageHeight={375}
                        text={
                          <>
                            <h3>Exellence</h3>
                            <p>
                                We hold ourselves to the highest standard, offering top quality technology,
                                the most skilled technicians, and unparalleled customer service.
                            </p>
                          </>
                        }
                      />
                    </div>
                  </section>

            <section className="w-full py-14 bg-background">
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
                        <h3>People at IW</h3>
                        <p className="font-medium">Experts Who Know Your Frontlines</p>
                        <p>At IW Technologies, people are our platform.</p>
                        <p>
                            Our teams aren't just tech-savvy. They're industry verterans who've worked
                            in retail stores, distribution centers, hospitality operations, and field
                            service environments.
                        </p>
                        <p>
                            They understand the realities of POS, IT, Infrastructure, and customer
                            experience because they've lived it.
                        </p>
                        <p>
                            From seasoned industry experts to passionate tech geeks, our team brings
                            both practical know-how and technical depth to every project.
                        </p>
                        <ul className="list-disc pl-10">
                            <li>Leadership with 20+ years in POS and tech ecosystems.</li>
                            <li>A hybrid workforce delivering consistent, high quality on-site service nationwide.</li>
                        </ul>
                        <p>
                            When you partner with IW, you get frontline tested experts 
                            who know how to scale your tech, strengthen uptime, and drive
                            operational excellence.
                        </p>
                        </>
                    }
                    link={{
                        href: "#",
                        label: "Meet The Team",
                        variant: "dark",
                    }}
                    textColor="text-brand-black"
                    />
                </div>
            </section>

            <section className="w-full py-14 bg-background">
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
                        <h3>Our Partners</h3>
                        <p>
                            IW Technologies is proud to be an official partner of some of 
                            the most reputable and sought-after manufacturers in the business.
                            Together, we are empowering the front line to work better, faster and smarter
                            and redefining point-of-sale hardware and software through our steadfast commitment
                            to quality.
                        </p>
                        </>
                    }
                    reverse
                    textColor="text-brand-black"
                    />
                </div>
            </section>

            <section className="w-full py-14">
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
                        <h3>Careers at IW</h3>
                        <p className="font-medium">Help Us Build What Moves Business</p>
                        <p>
                            At IW, you'll team up with tech-savvy pros and hands-on field experts who
                            know their way around a POS, a warehouse, and a whiteboard.
                        </p>
                        <p>
                            We look for <span className="font-medium">self-starters, fixers, and forward-thinkers </span>
                            who aren't afraid to roll up their sleeves and solve real-world tech
                            challenges.
                        </p>
                        <p>
                            If you're into fast paced problem solving, smart teammates, surprise 
                            food trucks, and more celebrations than a holiday calendar.
                            We should talk.
                        </p>
                        </>
                    }
                    link={{
                        href: "#",
                        label: "Explore Open Roles",
                        variant: "light",
                    }}
                    textColor="text-white"
                    />
                </div>
            </section>
        </div>
    )
}