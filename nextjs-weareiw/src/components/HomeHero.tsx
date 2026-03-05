import LinkButton, { LinkVariant } from "./LinkButton";

type HeroProps = {
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};

export default function HomeHero({ link }: HeroProps) {
    return (
        <div className="relative min-h-dvh w-full overflow-hidden bg-brand-blue">
            <video autoPlay loop muted playsInline preload="none"
            className="absolute inset-0 h-full w-full object-cover">
                <source src="/video/newHero-Video.webm" type="video/webm" />
                <source src="/video/newHero-Video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-background to-transparent"></div>

            <div className="relative z-20 min-h-dvh w-[80%]
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