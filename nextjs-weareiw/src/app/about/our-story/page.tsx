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
        </div>
    )
}