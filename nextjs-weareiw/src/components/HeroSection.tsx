import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-brand-blue">
            <video width="" height="" autoPlay loop muted playsInline preload="auto"
            className="absolute inset-0 h-full w-full object-cover">
            <source src="/video/Hero-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent"></div>

            <div className="relative z-11 min-h-dvh w-1/2 mx-auto flex flex-col items-start justify-center">
                <h1 className="pb-5 text-5xl font-bold text-brand-black">
                Your End-to-End Point of Sale Partner
                </h1>
                <p className="pb-5 text-2xl font-medium text-brand-black">
                    IW Technologies pairs cutting-edge technology with
                    unmatched customer service to be your complete
                    enterprise solution partner.
                </p>
                <Link href="#" 
                className="transition duration-300 ease-in-out px-[1em] py-[.33em]
                border-3 border-brand-black rounded-md text-[22px] text-white bg-brand-black
                hover:bg-transparent hover:text-brand-black">
                    Partner With Us
                </Link>
            </div>
        </div>
    )
}