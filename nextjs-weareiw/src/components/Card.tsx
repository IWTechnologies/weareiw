import Image from "next/image";
import LinkButton, { LinkVariant } from "./LinkButton";
import { ReactNode } from "react";

type CardProps = {
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

export default function Card({ imageSrc, imageAlt, imageWidth, imageHeight, text, link }: CardProps) {
    return (
        <div 
        className="w-full lg:w-lg flex flex-col rounded-md bg-white shadow-lg overflow-hidden">
            <Image className="min-h-62.5 max-h-62.5 h-auto w-auto object-cover" 
            src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
            <div className="h-full flex flex-col gap-2 p-8 text-brand-black">
                {text}
                {link && (
                    <div className="flex grow items-end">
                        <LinkButton {...link} />
                    </div>
                )}
            </div>
        </div>
    )
}