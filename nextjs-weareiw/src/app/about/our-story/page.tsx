import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";

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

            <section className="w-full flex justify-center">
                <div className="w-full py-14 mt-14">
                    <div className="w-[70%] mx-auto flex flex-col">
                        <h2 data-aos="fade-left"  className="w-full border-b-2 border-brand-black p-2 text-brand-navy">
                            THE BEGINNING
                        </h2>
                        <div className="relative py-16 pt-0 mt-16">
                            <div className="timeline-container w-full flex flex-col items-center">
                                <div className="timeline-dot" />
                                <div className="seventyFour w-full flex">
                                    <div 
                                    className="title w-1/2 h-fit flex flex-col items-center p-5 mr-[5.5%] 
                                    rounded-r-full bg-brand-navy text-white">
                                        <div className="text-5xl">
                                            <strong>1974</strong>
                                        </div>
                                        <div>
                                            THE INDUSTRY INSIGHT
                                        </div>
                                    </div>
                                    <div 
                                    className="text-block relative w-1/2 text-brand-navy">
                                        <div className="flex flex-col gap-4">
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
                                <div className="alMoor flex justify-center">
                                    <div className="w-full sm:w-[80%] z-10">
                                        <Image
                                        className="w-full h-auto object-contain rounded-3xl" 
                                        src="/heroImages/shutterstock1.jpg" alt="What's in it for you image graphic" 
                                        width="1920" height="1080"
                                        sizes="(max-width: 1920px) 100vw, 50vw" />
                                    </div>
                                </div> {/* end of al image container */}
                            </div> {/* end of timeline container 2 */}
                        </div>{/* end of relative container */}
                    </div>
                </div>
            </section>
        </div>
    )
}