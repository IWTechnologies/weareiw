import Image from "next/image";
import { ReactNode } from "react";
import LinkButton, { LinkVariant } from "./LinkButton";

type HeroProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    text: ReactNode;
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};

export default function Hero({ imageSrc, imageAlt, imageWidth, imageHeight, text, link }: HeroProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-brand-blue">
            <Image 
                src={imageSrc} alt={imageAlt} priority 
                width={imageWidth} height={imageHeight} sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover"
             />
            <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-black to-transparent"></div>

            <div className="relative z-20 h-full w-[80%] py-10 mx-auto 
            flex flex-col items-start justify-center gap-4">
                {text}
                {link && <LinkButton {...link} />}
            </div>
        </div>
    )
}