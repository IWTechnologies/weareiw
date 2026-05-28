import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import YoutubeFacade from "@/components/YoutubeFacade";

export default function OurStory() {
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
                        <h1>IW Celebrates 50 Years</h1>
                        <div className="font-bold text-2xl">
                            Our 50 year Journey Is A Shared One... With Customers, Partners, And Our People
                        </div>
                        <div className="font-bold">
                            Connecting People, Responsible Tech & Possibility with Trust 
                        </div>
                        <div className="">
                            From a bedroom office and a two car garage, to a 240,000 sq ft global operation 
                            — IW's story is one of belief, grit, and showing up.
                        </div>
                        <div>
                            For 50 years, we've grown not by chasing the next sale, but by answering the call — 
                            when it matters most.
                        </div>
                        <div>
                            Because real partnership isnt't built in the boardroom. It's built one register, one store, 
                            one relationship at a time.
                        </div>
                    </>
                    }
                />
            </section>

            <section className="flex justify-center py-10 bg-brand-black text-white">
                <div>
                    <h2 className="border-b-4 border-brand-aqua px-2 py-6">
                        FOLLOW ALONG WITH US
                    </h2>
                </div>
            </section>

            <section className="w-full flex justify-center bg-brand-black">
                <div className="w-full py-28 mt-14 rounded-t-3xl bg-background">
                    <div className="w-[70%] mx-auto flex flex-col">
                        <div className="border-b-2 border-brand-black p-2">
                            <h2 data-aos="fade-down"  className="w-full text-brand-black">
                            THE BEGINNING
                            </h2>
                        </div>
                        
                        <div className="relative py-16 pt-0 mt-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="seventyFour w-full flex flex-col lg:flex-row gap-10">
                                    <div data-aos="fade-right"
                                    className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                    rounded-r-full bg-brand-black text-white">
                                        <div className="text-5xl">
                                            <strong>1974</strong>
                                        </div>
                                        <div>
                                            THE INDUSTRY INSIGHT
                                        </div>
                                    </div>
                                    <div 
                                    className="text-block relative w-full lg:w-1/2">
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                Our Founder, Al Moorhouse, wasn't trying to start a 
                                                business. He just saw something others didn't.
                                            </p>
                                            <p>
                                                While working at a leading cash register company, he 
                                                watched the industry shift from mechinical machines 
                                                to electronic registers. A tech revolution was underway.
                                            </p>
                                            <p>
                                                But there was a catch: Big manufacturers didn't offer 
                                                trade-ins. If a company had six stores and needed a seventh 
                                                register but the model was discontinued, they had to replace 
                                                all seven. No trade-ins. No reuse.
                                            </p>
                                            <p>
                                                Al saw the gap and decided to fill it with a smarter, 
                                                more sustainable solution.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* end of seventyFour container */}
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div className="alMoor w-full flex justify-center">
                                    <div data-aos="fade-up" className="w-full z-10">
                                        <Image
                                        className="w-full h-auto object-contain rounded-3xl" 
                                        src="/storyImages/Al-Moorhouse.webp" alt="Al Moorhouse photo with signature" 
                                        width="1920" height="1080"
                                        sizes="(max-width: 1024px) 100vw, 50vw" />
                                    </div>
                                </div> {/* end of al image container */}
                            </div> {/* end of timeline container 2 */}
                        </div>{/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="seventySix w-full flex flex-col lg:flex-row gap-10">
                                    <div data-aos="fade-right"
                                    className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                    rounded-r-full bg-brand-black text-white">
                                        <div className="text-5xl">
                                            <strong>1976</strong>
                                        </div>
                                        <div>
                                            IW IS BORN
                                        </div>
                                    </div>
                                    <div 
                                    className="text-block relative w-full lg:w-1/2">
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                IW didn't begin in the boardroom. It started in Al's bedroom,
                                                with a two-car garage as his warehouse. His 700 sq ft home 
                                                became the launchpad for something big.
                                            </p>
                                            <p>
                                                He began calling retail giants himself. Just belief.
                                            </p>
                                            <p>
                                                "I've got cash registers. Buy from me." he'd say.
                                            </p>
                                            <p>
                                                <strong>Macy's said yes.</strong> One register became
                                                hundreds, then thousands.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* end of seventyFour container */}
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div className="bwRegisters w-full flex justify-center">
                                    <div data-aos="fade-up" className="w-full z-10">
                                        <Image
                                        className="w-full h-auto object-contain rounded-3xl" 
                                        src="/storyImages/Cash-Registers.webp" alt="What's in it for you image graphic" 
                                        width="1147" height="642"
                                        sizes="100vw" />
                                    </div>
                                </div> {/* end of registers image container */}
                            </div> {/* end of timeline container 2 */}
                        </div>{/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="flex flex-col gap-10">
                                    <div className="growthGrit w-full flex flex-col lg:flex-row gap-10">
                                        <div data-aos="fade-right"
                                        className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                        rounded-r-full bg-brand-black text-white">
                                            <div className="text-5xl">
                                                <strong>1980s-1990s</strong>
                                            </div>
                                            <div>
                                                GROWTH BY GRIT
                                            </div>
                                        </div>
                                        <div 
                                        className="text-block relative w-full lg:w-1/2">
                                            <div data-aos="fade-left" className="flex flex-col gap-4">
                                                <p>
                                                    The company grew oragnically — not through flashy 
                                                    pitches, but <strong>by answering the phone when others
                                                    didn't.</strong>
                                                </p>
                                                <p>
                                                    Al's philosphy was simple:<br />
                                                    <strong>"Don't just answer when a customer's placing 
                                                    an order. Answer when they need help."</strong>
                                                </p>
                                                <p>
                                                    "I've got cash registers. Buy from me." he'd say.
                                                </p>
                                                <p>
                                                    IW became the go-to name in refurbished POS by selling, 
                                                    storing, and shipping for the biggest names in retail, 
                                                    grocery, QSR, convenience, hospitality, and pharmacy.
                                                </p>
                                                <p>
                                                    In a world just waking up to sustainability, IW was 
                                                    already living it, long before it became a trend.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* end of growthGrit container */}
                                    <div className="imagesRow w-full flex flex-col items-center lg:flex-row gap-10">
                                        <div data-aos="fade-right" className="w-full lg:w-1/2 z-10">
                                            <Image
                                            className="w-full h-auto object-contain rounded-3xl" 
                                            src="/storyImages/IW-newspaper.webp" alt="photo of IW Technologies newspaper CIP feature" 
                                            width="891" height="517"
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                        <div data-aos="fade-left" className="w-full lg:w-1/2 z-10">
                                            <Image
                                            className="w-full h-auto object-contain rounded-3xl" 
                                            src="/storyImages/groupPhoto.webp" alt="group photo of past IW team" 
                                            width="905" height="520"
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                    </div> {/* end of imagesRow container */}
                                    <div className="imagesRow w-full flex flex-col items-center lg:flex-row gap-10">
                                        <div data-aos="fade-right" className="w-full lg:w-1/2 z-10">
                                            <Image
                                            className="w-full h-auto object-contain rounded-3xl" 
                                            src="/storyImages/IL-Wholesale.webp" alt="photo of past IW technologies front desk reception" 
                                            width="764" height="431"
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                        <div data-aos="fade-left" className="w-full lg:w-1/2 z-10">
                                            <Image
                                            className="w-full h-auto object-contain rounded-3xl" 
                                            src="/storyImages/IW-Meeting.webp" alt="photo of past IW team meeting in conference room" 
                                            width="766" height="428"
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                    </div> {/* end of imagesRow container */}
                                </div>
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="twoThousand w-full flex flex-col lg:flex-row gap-10">
                                    <div data-aos="fade-right"
                                    className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                    rounded-r-full bg-brand-black text-white">
                                        <div className="text-5xl">
                                            <strong>2000s</strong>
                                        </div>
                                        <div>
                                            EXPANSION THROUGH TRUST
                                        </div>
                                    </div>
                                    <div 
                                    className="text-block relative w-full lg:w-1/2">
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                With a formal name <strong>Illinois Wholesale Cash Register Corporation </strong>, 
                                                IW built deeper partnerships and a more robust supply chain.
                                            </p>
                                            <p>
                                                The office grew to 240,000+ sq ft, with 2 office buildings.<br/>
                                                The model?<br/>
                                                <strong>Start small. Prove yourself. Grow together.</strong>.
                                            </p>
                                            <p>
                                                Maybe just a scanner. Then a register. Then a full rollout<br/>
                                                The result?<br/>
                                                <strong>Customers who've stayed for 30+ years</strong>.
                                            </p>
                                            <p>
                                                Because trust, like hardware, lasts longer when it's well cared for.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* end of twoThousand container */}
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center gap-10">
                                <div className="assemblyLine w-full flex justify-center">
                                    <div data-aos="fade-up" className="w-full z-10">
                                        <Image
                                        className="w-full h-auto object-contain rounded-3xl" 
                                        src="/storyImages/IW-Technologies-assembly.webp" alt="placeholder" 
                                        width="1080" height="380"
                                        sizes="100vw" />
                                    </div>
                                </div> {/* end of assembly image container */}

                                <div 
                                className="imagesRow w-full sm:w-[60%] lg:w-[80%] 
                                flex flex-col items-center lg:flex-row lg:justify-center gap-10">
                                        <div data-aos="fade-right" 
                                        className="relative z-10 w-full lg:w-1/2 h-64 lg:h-80">
                                            <Image
                                            className="object-cover rounded-3xl" 
                                            src="/storyImages/IW-Technologies-warehouse-aisle.webp" alt="placeholder" 
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                        <div data-aos="fade-left" 
                                        className="relative z-10 w-full lg:w-1/2 h-64 lg:h-80">
                                            <Image
                                            className="object-cover rounded-3xl" 
                                            src="/storyImages/IW-Technologies-warehouse-techs.webp" alt="placeholder" 
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                    </div> {/* end of imagesRow container */}
                            </div> {/* end of timeline container 2 */}
                        </div>{/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="twentyNineteen w-full flex flex-col lg:flex-row gap-10">
                                    <div data-aos="fade-right"
                                    className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                    rounded-r-full bg-brand-black text-white">
                                        <div className="text-5xl">
                                            <strong>2019</strong>
                                        </div>
                                        <div>
                                            FROM POS PROVIDER TO FULL<br/> LIFECYCLE MANAGED SERVICES PARTNER
                                        </div>
                                    </div>
                                    <div 
                                    className="text-block relative w-full lg:w-1/2 flex flex-col gap-4">
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                The services expansion wasn't a pivot. It was a response to a question 
                                                we heard over and over again from our longtime customers.
                                            </p>
                                            <p>
                                                You already sell us the POS hardware.<br/>
                                                Can you help us install it? Maintain it? Manage it?
                                            </p>
                                            <p>
                                                Our request became a repeat service. Countless requests 
                                                evolved into repeated services.<br/>
                                                A few installs turned into full-scale national rollouts and long term 
                                                maintenance opportunities.<br/>
                                                And what started as help became a whole new arm of the business.
                                            </p>
                                        </div>
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                IW supports the entire technology lifecycle:
                                            </p>
                                            <ul className="list-disc pl-5">
                                                <li><strong>Staging & Maintenance</strong></li>
                                                <li><strong>Annuity Onsite & Depot Maintenance</strong></li>
                                                <li><strong>Structured Low Voltage Cabling</strong></li>
                                                <li><strong>Audio, Telephony & Loss Prevention</strong></li>
                                                <li><strong>Ad Hoc Installation, Moves, Adds & Changes (IMAC Services)</strong></li>
                                                <li><strong>Physical Asset Reclamation and Disposition Services</strong></li>
                                                <li><strong>Recycling, E-Waster, Logistics, and Warehousing</strong></li>
                                            </ul>
                                            <p>
                                                We didn't chase new business. We built on pent up demand and trust 
                                                we already had.
                                            </p>
                                            <p>
                                                And now, we're proud to be the largest seller of POS cables in the world, 
                                                and a go-to partner for retailers and enterprises looking to operate more 
                                                efficiently, reliably, predictably, and more sustainably.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* end of twentyNineteen container */}
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="relative py-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div data-aos="zoom-in-down" >
                                    <div className="timeline-dot" />
                                </div>
                                
                                <div className="twentyTwenty w-full flex flex-col lg:flex-row gap-10">
                                    <div className="w-full lg:w-1/2 h-fit flex flex-col items-center lg:mr-[5.5%] gap-10">
                                        <div data-aos="fade-right"
                                        className="title w-full h-fit flex flex-col items-center p-5 
                                        rounded-r-full bg-brand-black text-white">
                                            <div className="text-5xl">
                                                <strong>2020</strong>
                                            </div>
                                            <div>
                                                A NEW GENERATION OF LEADERSHIP
                                            </div>
                                        </div>
                                        <div data-aos="fade-right" className="w-full z-10">
                                            <Image
                                            className="w-full h-auto object-contain rounded-3xl" 
                                            src="/storyImages/DarinPortrait.webp" alt="What's in it for you image graphic" 
                                            width="1920" height="1080"
                                            sizes="(max-width: 1024px) 100vw, 50vw" />
                                        </div>
                                    </div>
                                    
                                    <div 
                                    className="text-block relative w-full lg:w-1/2 flex flex-col gap-4">
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                In 2020, IW Technologies entered its next chapter as leadership 
                                                transitioned from longtime President and CEO Al Moorhouse to 
                                                Darin Moorhouse.
                                            </p>
                                            <p>
                                                Darin's journey with IW didn't start with a title. It started early, 
                                                at age 121, learning the business from the ground up as the company 
                                                was finding its footing and accelerating its growth. Through his 
                                                teenage years and beyond, he worked across the organization, gaining 
                                                firsthand experience in operations, customer relationships, and the 
                                                realities of scaling a technology focused business. By 1997, he 
                                                was fully invested in IW's future.
                                            </p>
                                        </div>
                                        <div data-aos="fade-left" className="flex flex-col gap-4">
                                            <p>
                                                Over the years, Darin has played a key role in driving more than 
                                                $50 million in hardware sales while building long-standing 
                                                partnerships rooted in trust, follow-through, and long-term 
                                                thinking. His leadership style reflects the values IW was built 
                                                on: collaboration and accountability.
                                            </p>
                                            <p>
                                                Today, as President and CEO, Darin leads IW Technologies with a 
                                                clear focus on strategic growth, team development, and helping 
                                                businesses across retail, hospitality, grocery, convenience, and 
                                                distribution navigate complex technology challenges with practical, 
                                                scalable solutions. His approach blends deep operational experience 
                                                with a belief that the strongest partnerships are built by showing up, 
                                                doing the work, and thinking beyond the transaction.
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* end of twentyTwenty container */}
                            </div> {/* end of timeline container */}
                        </div> {/* end of relative container */}

                        <div className="my-16">
                            <div className="border-b-2 border-brand-black p-2">
                                <h2 data-aos="fade-down" className="w-full">
                                THE PRESENT
                                </h2>
                            </div>
                            <div className="twentySix w-full flex flex-col lg:flex-row mt-16 gap-10">
                                <div data-aos="fade-right"
                                className="title w-full lg:w-1/2 h-fit flex flex-col items-center p-5 lg:mr-[5.5%] 
                                rounded-r-full bg-brand-black text-white">
                                    <div className="text-5xl">
                                        <strong>2026</strong>
                                    </div>
                                    <div>
                                        EXPANSION THROUGH TRUST
                                    </div>
                                </div>
                                <div 
                                className="text-block relative w-full lg:w-1/2 flex flex-col gap-4">
                                    <div data-aos="fade-left" className="">
                                        <p>
                                            As IW turns 50, we're not just proud of what we've built. <br/>
                                            We're proud of how we built it:
                                        </p>
                                    </div>
                                    <div data-aos="fade-left">
                                        <ul className="list-disc pl-5">
                                            <li>
                                                <strong>With long-standing customers who've trusted us 
                                                through every industry shift</strong>
                                            </li>
                                            <li>
                                                <strong>With a service-first mindset that puts people first</strong>
                                            </li>
                                            <li>
                                                <strong>With team members who've stayed for decades, growing 
                                                    with us
                                                </strong>
                                            </li>
                                            <li>
                                                <strong>With new-gen talent who bring fresh skills and ideas</strong>
                                            </li>
                                            <li>
                                                <strong>And with a quiet commitment to doing things sustainably, long 
                                                    before it was popular
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div data-aos="fade-left">
                                        <p>
                                            For us, sustainability has never been a slogan. It's been our default: 
                                            <strong> Refurbishing instead of replacing. Serving with long-term care instead 
                                                of short-term gain. 
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div> {/* end of twentySix container */}
                        </div>
                        

                        <div className="alQuote w-full flex flex-col lg:flex-row items-center my-16 gap-10">
                            <div className="w-full lg:w-1/2 h-fit flex flex-col lg:mr-[5.5%]">
                                <div data-aos="fade-right" className="w-full z-10">
                                    <Image
                                    className="w-full h-auto object-contain rounded-3xl" 
                                    src="/storyImages/Al-MoorhouseCrop.webp" alt="What's in it for you image graphic" 
                                    width="1920" height="1080"
                                    sizes="(max-width: 1024px) 100vw, 50vw" />
                                </div>
                            </div>
                            
                            <div 
                            className="text-block relative w-full lg:w-1/2 flex flex-col gap-4 items-center">
                                <div data-aos="fade-left" className="flex flex-col text-center gap-2">
                                    <p className="italic font-accent">
                                        "If a customer needs help, we pick up the phone. No matter 
                                        what.<br/> That's not policy. That's just who we are."
                                    </p>
                                    <div>
                                        -
                                    </div>
                                    <div className="text-2xl">
                                        Al Moorhouse
                                    </div>
                                </div>
                            </div>
                        </div> {/* end of alQuote container */}
                        
                        <section className="w-full lg:w-[80%] lg:mx-auto my-16">
                            <div className="w-full h-auto flex flex-col gap-10">
                                <h2 data-aos="fade-down"  className="w-full">
                                    50 Years, One Promise: Always Show Up
                                </h2>
                                
                                <div data-aos="fade-up">
                                    <YoutubeFacade youtubeId={"L4O1ejWfDAc"} />
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}