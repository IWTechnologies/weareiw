import LinkButton, { LinkVariant } from "./LinkButton";

type HeroProps = {
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};

export default function HeroSection({ link }: HeroProps) {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-brand-blue">
            <video width="" height="" autoPlay loop muted playsInline preload="auto"
            className="absolute inset-0 h-full w-full object-cover">
            <source src="/video/Hero-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-background to-transparent"></div>

            <div className="relative z-11 min-h-dvh w-[80%]
            sm:w-1/2 mx-auto flex flex-col items-start justify-center
            text-brand-black">
                <h1 className="pb-5">
                Your end-to-end point of sale partner
                </h1>
                <h3 className="pb-5">
                    One partner accountable for POS from install to retirement.
                    <br />
                    No handoffs. Clear ownership.
                </h3>
                {link && <LinkButton {...link} />}
            </div>
        </div>
    )
}