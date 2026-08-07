import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import Card from "@/components/Card";
import PhotoGrid from "@/components/PhotoGrid";
import YoutubeFacade from "@/components/YoutubeFacade";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Careers - IW Technologies",
  description: "Join our growing team of people and build your career at IW Technologies with the skills that you want to master.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Careers - IW Technologies",
        description: "Join our growing team of people and build your career at IW Technologies with the skills that you want to master.",
        url: `${BASE_URL}/careers`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Careers IW Technologies',
            }
        ],
    },
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
                    imageSrc="/heroImages/CareersHeroImage.webp"
                    imageAlt="Careers page hero image"
                    imageWidth={1900}
                    imageHeight={400}
                    text={
                    <>
                        <h1>Come for Two Weeks. Stay for 40 years</h1>
                        <p>It happens more than you'd think. One in ten of us has been here 10+ years.</p>
                        <p>
                            A whole week of appreciation with food trucks and games. Halloween parties, Christmas lunches, 
                            a Santa for every IW kid, pizza on the regular, and hoodies you'll actually wear. None of it hurts.
                        </p>
                        <p>
                            But people really stay because the owners and leadership know your name and come through on what they 
                            promise. Come find out why nobody leaves.
                        </p>
                    </>
                    }
                    link={{
                        href: "/opportunities",
                        label: "Explore Opportunities",
                        variant: "light",
                        prefetch: false
                    }}
                />
            </section>

            <section className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="container mx-auto flex justify-center">
                        <div className="max-w-333.25 w-[90%] flex flex-col gap-2">
                            <h2 className="">
                                Big Enough to Run National Brands Small Enough to Know Your Name
                            </h2>
                            <p className="">
                                The grocery run. The burger stop. The clothes, the road-trip gas station, the hotel front desk. 
                                Odds are, the tech behind the checkout is ours and someone on our team keeps it running. Retail, 
                                QSR, c-stores, hospitality, grocery: if it's a name you know, we probably work in your world.
                            </p>
                            <p>
                                That's the flex. You'd do big-league work for the most iconic brands in the country. At IW Technologies, 
                                ask to learn something new and the answer is usually "go for it." Courses covered. New roles opened. 
                            </p>
                            <p>
                                Plenty of people walked in for a paycheck and walked into a career.
                            </p>
                            <p>
                                Big names. A team that still feels like a team. That combo's hard to find.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-14">
                <div className="container mx-auto">
                    <div className="w-[90%] mx-auto">
                        <Blurb 
                            media={{
                            type: "image",
                            src: "/careerImages/GPTWLogoBlurb.png",
                            alt: "May 2026 to May 2027 IW Technologies Great Place to Work Certified image.",
                            width: 700,
                            height: 500,
                            }}
                            text={
                            <>
                                <h3 className="">
                                Great Place to Work® (Officially)
                                </h3>
                                <p className="">
                                    We didn't give ourselves that title. Our own people did, anonymously, in the year we turned 50. 
                                    IW earned Great Place To Work® Certification in 2026, scored entirely on what employees said when 
                                    leadership wasn't in the room. "They treat you like family" hits different when it's the confidential 
                                    survey saying it.
                                </p>
                                <p>
                                    So what earns that rating? Culture we actually pay for and put on the calendar.  
                                </p>
                                <p>
                                    Employee Appreciation Week that blocks off real time to celebrate our people. 
                                    The IW Reboot, a 90-day wellness program that treats your health like core infrastructure, 
                                    not a poster in the break room. 
                                </p>
                                <p>
                                    A holiday party that packs in nearly 200 of us. And the Santa event, where every kid in the IW family 
                                    goes home with a gift from the "IW reindeers." Fifty years in, that's still protected time, not an afterthought.
                                </p>
                                <p>
                                    Great Place To Work put it best: earning this takes "consistent and intentional dedication to the overall 
                                    employee experience." Translation - you can't fake this one.
                                </p>
                                <p className="font-accent italic">
                                    We're an equal opportunity employer. We hire, promote, and support our people on the work  never on gender, race, religion, sexual orientation, age, or ability.
                                </p>
                            </>
                            }
                            rounded
                            reverse
                            textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-14">
                <div className="container mx-auto">
                    <div className="w-[90%] mx-auto">
                        <Blurb 
                            media={{
                            type: "image",
                            src: "/careerImages/WorkEnvironment.webp",
                            alt: "Image of IW team celebrating our 50th year.",
                            width: 700,
                            height: 500,
                            }}
                            text={
                            <>
                                <h3>Welcoming Work Environment</h3>
                                <p>
                                    We hold ourselves to the highest standard of integrity, 
                                    always striving to be respectful, fair and inclusive. We 
                                    embrace differences in experience and identity and are commited 
                                    to creating a welcoming workplace, regardless of gender, race, 
                                    religion, sexual orientation, age, or ability.
                                </p>
                            </>
                            }
                            rounded
                            textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-14">
                <div className="container mx-auto">
                    <div className="w-[90%] mx-auto">
                        <Blurb 
                            media={{
                            type: "video",
                            youtubeId: "dK_KRF_z0rk",
                            }}
                            text={
                            <>
                                <h3>Green Before Green Was Cool</h3>
                                <p className="">
                                    IW was recycling hardware before it had a hashtag. Back in late the 1970s, refurbished POS wasn't even a category. 
                                    If you needed equipment, you bought it new from the manufacturer, full stop. Our founder, Al Moorhouse, 
                                    saw the waste in that and built IW on refurbishing and reselling retail tech when there was no playbook and 
                                    no buzzword for it. 
                                </p>
                                <p>
                                    Sustainability wasn't a campaign back then. It was just good business: fix what works, reuse what you can, throw away as little as possible. That's still the job.  
                                </p>
                                <p>
                                    And it's not a rounding error. In the last 16 months, IW kept more than 1.8 million pounds of hardware out of 
                                    landfills: 1,301,263 lbs in 2025 and 566,887 lbs so far in 2026. For the people who do this work, that's not a 
                                    stat on a slide. It's the repair bench, the recovery runs, and the responsible disposition you'd own here every day.
                                </p>
                                <p className="font-semibold">
                                    See the work behind the 1.8 million pounds. We made it for Earth Day. We do it every day.
                                </p>
                            </>
                            }
                            rounded
                            reverse
                            textColor="text-brand-black"
                        />
                    </div>
                </div>
            </section>

            <section className="relative z-20 w-full mx-auto py-14 flex flex-col items-center gap-5">
                <div className="max-w-333.25 w-[90%] flex flex-col gap-1 text-brand-black">
                    <h2 className="">
                        The Values Aren't on a Poster. They're in the Stories.
                    </h2>
                </div>
                <div className="max-w-333.25 w-[90%] grid grid-cols-1 gap-8
                md:grid-cols-2 items-stretch">
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Service</h3>
                            <p className="">
                                When a pin-pad went down at a major retailer mid-shift, three of our people jumped on 
                                the call and had it fixed in two minutes flat. The customer's verdict: they needed 
                                superhero capes. Around here, "we'll take care of it" isn't a line. It's a two-minute response time.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Integrity</h3>
                            <p className="">
                                Ask anyone who's been here 20, 30, 40 years why they stayed and you'll hear a version of the same thing: 
                                <span className="font-accent italic">"If they promise you something, they come through."</span> No asterisks. That's the entire reputation, inside and out.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Partnership</h3>
                            <p className="">
                                One of our account execs puts it best: <span className="font-accent italic">"I'm not into vendorships. I'm into partnerships and it's a partnership within your own company, too. We're all trying to accomplish the same goals."</span>  You're 
                                not a headcount here. You're on the team.
                            </p>
                            </>
                        }
                        
                    />
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">Excellence</h3>
                            <p className="">
                                The best kind of recognition is the kind nobody had to ask for. After one job, a customer wrote in unprompted just to say our tech 
                                was <span className="font-accent italic">"a huge help, getting everything set up and executed perfectly."</span>  We don't chase gold stars. We just do the work until we earn them.
                            </p>
                            </>
                        }
                        
                    />
                </div>
            </section>

            <section className="w-full py-20 bg-brand-black">
                <div className="max-w-333.25 w-[90%] mx-auto flex flex-col gap-10">
                    <div className="w-[80%] flex flex-col text-white">
                        <h2>
                            The Basics? Covered.
                        </h2>
                        <p>
                            The stuff you'd check for on any offer letter.
                        </p>
                    </div>
                    
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

            <section className="w-full flex justify-center bg-brand-black text-white">
                <div className="w-full py-14">
                    <div className="container mx-auto flex justify-center">
                        <div className="max-w-384 w-[90%] flex flex-col gap-8">
                            <h2 className="">
                                Now the Part We'll Actually Brag About.
                            </h2>
                            <ul className="w-full flex flex-col gap-5">
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">A full week of appreciation: </span>
                                        food trucks, games, and swag, every year. Not an afternoon. A week.
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">The Santa event: </span>
                                        very kid in the IW family goes home with a real gift from the "IW reindeers."
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">IW Reboot: </span>
                                        every kid in the IW family goes home with a real gift from the "IW reindeers."
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">Company-backed teams: </span>
                                        we sponsor the employee soccer and baseball squads. Ask, and there's a good chance we'll back yours.
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">Hoodies you'll actually wear, </span>
                                        pizza on the regular, Halloween and holiday parties, the calendar stays full.
                                    </div>
                                </li>
                                <li className="flex gap-2">
                                    <img src="/careerImages/icons/circle-check-white-solid-full.svg"
                                    alt="blue and white circle check icon" width={20} height={20}
                                    className="shrink-0" />
                                    <div className="">
                                        <span className="font-semibold">Great Place To Work® Certified (2026) </span>
                                        and the only people who scored it were us.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empoloyee testimonials section*/}
            <section className="w-full py-14 bg-brand-black">
                <div className="container mx-auto flex flex-col justify-center gap-8 text-white">
                    <div className="max-w-384 w-[90%] mx-auto flex flex-col gap-2">
                        <h3>Don't Take Our Word for It. We're Biased.</h3>
                        <p className="">
                            We've spent this whole page bragging. But it’s fair enough because it's our careers page.  
                        </p>
                        <p>
                            However, the people who'd actually know are the ones who show up every day and could've left at any point. They didn't. Here's why, in their words.
                        </p>
                    </div>

                    <div className="max-w-384 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="overflow-hidden rounded-2xl">
                            <YoutubeFacade youtubeId={"fo9EqMihuDs"} />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <YoutubeFacade youtubeId={"_sivEXcZSZ4"} />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <YoutubeFacade youtubeId={"r_FEllhGedE"} />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <YoutubeFacade youtubeId={"mn7Ghs5_MLM"} />
                        </div>
                    </div>
                </div>

            </section>

            <section className="relative w-full py-20 bg-brand-black">
                <div className="absolute inset-0 z-10 opacity-50">
                    <img src="/IWT_Logomark_Navy.png" alt="White IW logo displayed on section background" />
                </div>
                <div className="relative max-w-7xl w-[80%] mx-auto z-20">
                    <PhotoGrid />
                </div>
            </section>

            <section className="w-full py-14">
                <div className="max-w-7xl w-[90%] lg:w-[60%] mx-auto">
                    <Card
                        text={
                            <>
                            <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                Still Reading? You Might Be One of Us.
                            </h3>
                            <p className="">
                                Come for two weeks. Stay 40 years. (It's been known to happen.) If national-brand work, 
                                a team that knows your name, and a Santa on the payroll sound like your kind of place, the 
                                door's open. Roles across the field, the warehouse, deployment, low-voltage, the PMO, and the account desk. 
                            </p>
                            </>
                        }
                        link={{
                            href: "/opportunities",
                            label: "See Where You Fit",
                            variant: "dark",
                            prefetch: false
                        }}
                    />
                </div>
            </section>
        </div>
    )
}