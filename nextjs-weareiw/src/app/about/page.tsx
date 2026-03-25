import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import NumCounter from "@/components/NumCounter";

export const metadata: Metadata = {
  title: "About - IW Technologies",
  description: "IW Technologies architects and optimizes POS and tech ecosystems for leading brands across Retail, QSR, Grocery, Hospitality, Convenience, Distribution.",
};

const industries = [
    { label: "Grocery and Pharmacy", src: "/heroImages/shutterstock1.jpg", alt: "Grocery and Pharmacy image with title" },
    { label: "Retail", src: "/heroImages/shutterstock2.jpg", alt: "Retail image with title" },
    { label: "Hospitality", src: "/heroImages/shutterstock3.jpg", alt: "Hospitality image with title" },
    { label: "QSR", src: "/heroImages/shutterstock4.jpg", alt: "QSR image with title" },
    { label: "Convenience and Pretroleum", src: "/heroImages/shutterstock5.jpg", alt: "Convenience and Pretroleum image with title" },
    { label: "Distribution", src: "/heroImages/shutterstock6.jpg", alt: "Distribution image with title" },
]

export default function AboutPage() {
    return (
        <div className="">
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

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="w-[80%] mx-auto flex flex-col gap-5">
                        <h2 className="w-fit border-b-4 border-brand-aqua p-2">What We Do</h2>
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
                </div>
            </section>

            <section className="w-[80%] mx-auto mb-14 text-brand-black">
                <div className="relative w-full h-full flex flex-col items-center gap-4">
                    <div className="w-full flex">
                        <h2>
                            Industries We Serve
                        </h2>
                    </div>
                    <div className="relative w-full h-96 lg:h-80 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-row rounded-2xl overflow-hidden">
                        {industries.map((industry) => (
                            <div key={industry.label}
                                className="group relative flex-1 hover:flex-3 active:flex-3 transition-all duration-500 ease-in-out
                                flex items-center justify-center text-center">
                                <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-navy/50 to-transparent" />
                                <img
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0"
                                    src={industry.src} alt={industry.alt} />
                                <div className="w-full h-full flex justify-center items-center">
                                    <h3 
                                    className="relative z-20 w-fit h-fit p-2 rounded-2xl border border-white/20
                                    opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                                    group-active:opacity-100 transition-opacity duration-300 
                                    text-white text-shadow-lg backdrop-blur-xs">
                                        {industry.label}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full pb-14 bg-background">
                <NumCounter />
            </section>

            <section className="w-[80%] flex justify-center mx-auto mb-14 text-brand-black">
                <div className="w-full sm:w-[80%] flex flex-col items-center gap-4">
                    <div className="w-[90%] flex">
                        <h2>
                            What's In It For You
                        </h2>
                    </div>
                    <Image
                    className="w-[90%] h-auto object-contain rounded-3xl" 
                    src="/aboutImages/Whats-In-It-For-You.webp" alt="What's in it for you image graphic" 
                    width="1920" height="1080"
                    sizes="(max-width: 1920px) 100vw, 50vw" />
                </div>
            </section>

            <section id="hardware"
            className="w-[80%] mx-auto mb-15 flex flex-col items-center gap-5">
                <div className="w-full flex flex-col gap-1 text-brand-black">
                    <h2>
                    Guided By Our Values
                    </h2>
                    <div>
                    We believe in going above and beyond for our customers, providing them with the 
                    most comprehensive enterprise solutions in the industry.
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-8
                lg:flex-row lg:justify-between lg:items-stretch">
                    <Card 
                    imageSrc="/View-our-products-Moody-blue.png"
                    imageAlt="Blue tinted view our products card image"
                    imageWidth={663}
                    imageHeight={432}
                    text={
                        <>
                        <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Service</h3>
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
                        <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Integrity</h3>
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
                        <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Partnership</h3>
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
                        <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Excellence</h3>
                        <p>
                            We hold ourselves to the highest standard, offering top quality technology,
                            the most skilled technicians, and unparalleled customer service.
                        </p>
                        </>
                    }
                    />
                </div>
            </section>

            <section id="our-people" className="w-full section-diagonal">
                <div className="container py-14 mx-auto flex justify-center">
                    <Blurb 
                    media={{
                        type: "image",
                        src: "/aboutImages/People-at-IW.webp",
                        alt: "Blue tinted image of IW team in front of building",
                        width: 512,
                        height: 342,
                    }}
                    text={
                        <>
                        <div className="w-full flex items-center">
                            <img src="/aboutImages/icons/person-burst-solid-full.svg" 
                            alt="people icon" height="50" width="50"
                            className="mr-2" />
                            <h3>People at IW</h3>
                        </div>
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
                        <ul className="text-sm pl-2.5">
                            <li className="flex items-center gap-2">
                                <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                alt="" width={20} height={20}
                                className="shrink-0" />
                                Leadership with 20+ years in POS and tech ecosystems.
                            </li>
                            <li className="flex items-center gap-2">
                                <img src="/aboutImages/icons/circle-check-solid-full.svg"
                                alt="" width={20} height={20}
                                className="shrink-0" />
                                A hybrid workforce delivering consistent, high quality on-site service nationwide.
                            </li>
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

            <section id="our-partners" className="w-full py-14">
                <div className="container mx-auto flex justify-center">
                    <Blurb 
                    media={{
                        type: "image",
                        src: "/aboutImages/flatNewPartners.webp",
                        alt: "Blue tinted image of IW team in meeting",
                        width: 512,
                        height: 342,
                    }}
                    text={
                        <>
                        <div className="w-full flex items-center">
                            <img src="/aboutImages/icons/handshake-solid-full.svg" 
                            alt="handshake icon" height="50" width="50"
                            className="mr-2" />  
                            <h3>Our Partners</h3>
                        </div>
                        
                        <p>
                            IW Technologies is proud to be an official partner of some of 
                            the most reputable and sought-after manufacturers in the business.
                        </p>
                        <p>
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

            <section id="our-commitment" className="w-full py-14">
                <div className="flex flex-col gap-5">
                    <div className="container mx-auto mb-4 text-brand-black">
                        <div className="w-[90%] flex flex-col mx-auto gap-1 ">
                            <h2>
                                Our Culture & Commitment
                            </h2>
                            <div>
                                A Look Behind the Tech
                            </div>
                        </div>
                        
                    </div>
                    <div className="container mx-auto flex justify-center">
                        <Blurb 
                        media={{
                            type: "image",
                            src: "/heroImages/shutterstock1.jpg",
                            alt: "Blue tinted image of IW team in meeting",
                            width: 512,
                            height: 342,
                        }}
                        text={
                            <>
                            <h3>IW Runs on Our People</h3>
                            <p className="font-medium">
                                More Than a Team. They're the Reason We Win.
                            </p>
                            <p>
                                Appreciation isn't a memo here. It's a full-blown celebration.
                            </p>
                            <p>
                                Every year we throw a week long party for the people who make it all happen.
                                Food trucks roll in, ice cream flows, gifts appear, and smiles stick around.
                            </p>
                            <p>
                                Step into our office and you'll feel it. A culture built on grattitude, pride,
                                and real human energy. Because when you take care of your people, they take care of 
                                everything else.
                            </p>
                            </>
                        }
                        textColor="text-brand-black"
                        />
                    </div>
                    <div className="container mx-auto flex justify-center">
                        <Blurb 
                        media={{
                            type: "video",
                            youtubeId: "rdhYth983zg",
                        }}
                        text={
                            <>
                            <h3>Sustainability is the Standard</h3>
                            <p>
                                At IW, sustainability isn't a strategy, it's our operating model.
                            </p>
                            <p>
                                <span className="font-medium">In 2024 alone, we recycled 815 tons of technology equipment</span>
                                , driving down e-waste, emissions, and energy consumption across the IT supply chain.
                            </p>
                            <p>
                                We lead with action in the circular economy, offering enterprise partners a path 
                                to greener tech lifecycles through refurbishment, recovery, and responsible disposition.
                            </p>
                            <p>
                                This isn't seasonal ESG messaging. It's year-round, measurable impact.
                            </p>
                            <p>And we show up with proof year after year.</p>
                            </>
                        }
                        reverse
                        textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section id="open-positions" className="w-full py-14 bg-brand-black">
                <div className="container mx-auto flex justify-center">
                    <Blurb 
                    media={{
                        type: "image",
                        src: "/aboutImages/Careers-at-IW.webp",
                        alt: "Blue tinted image of IW team in meeting",
                        width: 512,
                        height: 342,
                    }}
                    text={
                        <>
                        <div className="w-full flex items-center">
                        <img src="/aboutImages/icons/briefcase-solid-full.svg" 
                        alt="briefcase icon" height="50" width="50"
                        className="mr-2" />    
                        <h3>Careers at IW</h3>
                        </div>
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