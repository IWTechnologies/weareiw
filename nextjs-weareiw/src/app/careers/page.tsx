import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Careers - IW Technologies",
  description: "Careers placeholder content.",
};

const benefitPerks = [
    { src: "/careerImages/icons/circle-dollar-to-slot-solid-full.svg", alt: "401k icon", label: "401k" },
    { src: "/careerImages/icons/heart-umbrella-solid-full.svg", alt: "LTD Insurance icon", label: "LTD Insurance" },
    { src: "/careerImages/icons/heart-pulse-solid-full.svg", alt: "Life Insurance icon", label: "Life Insurance" },
    { src: "/careerImages/icons/shield-heart-solid-full.svg", alt: "Health Insurance icon", label: "Health Insurance" },
    { src: "/careerImages/icons/tooth-solid-full.svg", alt: "Dental Insurance icon", label: "Dental Insurance" },
    { src: "/careerImages/icons/calendar-days-solid-full.svg", alt: "PTO icon", label: "PTO" },
]

export default function CareersPage() {
    return (
        <div>
            <section className="h-fit text-white">
                <Hero 
                    imageSrc="/heroImages/shutterstock1.jpg"
                    imageAlt="Blue tinted procurement hero image"
                    imageWidth={813}
                    imageHeight={457}
                    text={
                    <>
                        <h1>Level Up Your Career</h1>
                        <p>Join our grouwing team of motivated people.</p>
                        <p>
                            We are an agile group of hard workers who support and respect 
                            each other. We hold ourselves to the highest standard — offering 
                            top-quality technology, the most skilled technicians and above all, 
                            dedicated partnership.
                        </p>
                    </>
                    }
                    link={{
                        href: "#",
                        label: "Explore Opportunities",
                        variant: "light",
                    }}
                />
            </section>

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="container mx-auto flex justify-center">
                        <div className="w-[90%] flex flex-col gap-2">
                            <h2 className="">
                                Every aspect of our business thrives because of people.
                            </h2>
                            <p className="">
                                Our people are our greatest strength. From our leadership to our sales 
                                team and expert technicians, we combine decades of experience with 
                                superior skill sets and unparalleled agility. Join our team of amazing 
                                people and build your career with the skills that you want to master. 
                                That's how our team — and business — evolves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-14">
                <div className="w-[90%] mx-auto">
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
                            <h3>Welcoming Work Environment</h3>
                            <p>
                                We hold ourselves to the highest standard of integrity, 
                                always striving to be respectful, fair and inclusive. We 
                                embrace differences in experience and identity and are commited 
                                to creating a welcoming workplace, regardless of gender, race, 
                                religion, sexual orientation, age or ability.
                            </p>
                        </>
                        }
                        rounded
                        textColor="text-brand-black"
                    />
                </div>
            </section>

            <section className="w-full py-14">
                <div className="w-[90%] mx-auto">
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
                            <h3>Environmental Conscious Practices</h3>
                            <p>
                                When it comes to the environment, we are leading the way in our 
                                industry, preventing improperly discarded electronic equipment from 
                                polluting our soil and waterways. At IW Technologies, we practice 
                                e-cycling — collecting, distributing, repairing, or reusing used 
                                electronic components before responsibly recycling them. This 
                                conserves natural resources, cuts down on costs, and saves energy.
                            </p>
                        </>
                        }
                        reverse
                        rounded
                        textColor="text-brand-black"
                    />
                </div>
            </section>

            <section className="w-[90%] mx-auto py-14 flex flex-col items-center gap-5">
                <div className="w-full flex flex-col gap-1 text-brand-black">
                    <h2 className="">
                        Core values we live by
                    </h2>
                </div>
                <div className="w-full grid grid-cols-1 gap-8
                xl:grid-cols-2 items-stretch">
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Service</h3>
                            <p className="">
                                Our dedication to our customers is second to none. When they have a need,
                                issue, or last-minute request, we always deliver.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Integrity</h3>
                            <p className="">
                                We have the best interests of our people and our customers in mind always,
                                and we act accordingly, following through on our commitments and fostering respect.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Partnership</h3>
                            <p className="">
                                We are committed to being a true partner to our customers every step
                                of the way, offering fully customized solutions and consistent support.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Excellence</h3>
                            <p className="">
                                We hold ourselves to the highest standard, offering top quality technology,
                                the most skilled technicians, and unparalleled customer service.
                            </p>
                            </>
                        }
                        
                    />
                </div>
            </section>

            <section className="w-full py-20 bg-brand-black">
                <div className="w-[90%] mx-auto flex flex-col items-center gap-10">
                        <h2 className="text-white">
                            The employee perks and benefits at IW Technologies are something 
                            we can't help but brag about:
                        </h2>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {benefitPerks.map((perks) => (
                                <div key={perks.label} className="relative rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 z-10 bg-radial-[at_5%_10%] from-brand-navy/20 to-transparent" />
                                    <Card
                                        text={
                                            <>
                                                <div className="z-20 flex flex-col items-center">
                                                    <img src={perks.src} alt={perks.alt} height={100} width={100} />
                                                    <h3 className="text-white">{perks.label}</h3>
                                                </div>
                                            </>
                                        }
                                        bgColor="bg-brand-black"
                                    />
                                </div>
                            ))}
                        </div>
                </div>
            </section>
        </div>
    )
}