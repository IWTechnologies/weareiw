import Link from "next/link";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";

const services = [
    { label: "Procurement", src: "heroImages/shutterstock2.jpg", alt: "Procurement image", href: "/services/procurement" },
    { label: "Deployment", src: "heroImages/shutterstock2.jpg", alt: "Deployment image", href: "/services/deployment" },
    { label: "Maintenance", src: "heroImages/shutterstock2.jpg", alt: "Maintenance image", href: "/services/maintenance" },
    { label: "Disposition", src: "heroImages/shutterstock2.jpg", alt: "Disposition image", href: "/services/disposition" }
]

export default function ServicesPage() {
    return (
        <div className="bg-brand-black">
            <section className="text-white">
                <Hero 
                    imageSrc="/heroImages/shutterstock2.jpg"
                    imageAlt="Blue tinted Services card image"
                    imageWidth={2048}
                    imageHeight={1357}
                    text={
                    <>
                        
                    </>
                    }
                />
            </section>

            <section className="flex justify-center p-5 bg-brand-black text-white">
                <div>
                    <h2>
                        End-to-End Lifecycle Services
                    </h2>
                </div>
            </section>

            <section className="w-full py-14 mb-5 bg-brand-black">
                <div className="container w-[90%] h-60 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service) => (
                    <Link key={service.label} href={service.href} prefetch={false}
                        className="group relative w-full h-full flex items-center rounded-3xl overflow-hidden bg-brand-black"
                        style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}>
                        <img src={service.src} alt={service.alt}
                            className="absolute inset-0 h-full w-full object-cover" />
                        <div className="opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out
                            absolute inset-0 z-10 bg-linear-to-t from-background/50 to-transparent"></div>
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out 
                            absolute inset-0 z-10 bg-linear-to-t from-brand-black to-transparent"></div>
                        <div className="relative w-full mx-auto z-30 flex justify-center items-center
                            text-xl sm:text-3xl font-bold text-brand-black group-hover:text-white
                            group-hover:animate-bounce transition-all duration-300 ease-in-out">
                            {service.label}
                            <span className="ml-2 text-base opacity-0 group-hover:opacity-100 transition duration-300">→</span>
                        </div>
                    </Link>
                    ) )}
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
                        <h3>This is placeholder content</h3>
                        <p>POS is critical infrastructure. When it works, operations stay focused and customers keep moving. That reliability depends on clear ownership.</p>
                        <p>From sourcing and deployment to maintenance, refurbishment, and retirement, we take responsibility for POS in the field across its full lifecycle.</p>
                        <p>We believe critical infrastructure calls for long-term thinking, clear accountability, and partners committed to seeing it through.</p>
                        </>
                    }
                    textColor="text-brand-black"
                    />
                </div>
            </section>

            <section className="w-full py-14 mb-5 bg-background">
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