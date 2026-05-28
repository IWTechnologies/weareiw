import Image from "next/image";
import LinkButton, { LinkVariant } from "./LinkButton";
import { ReactNode } from "react";

type CardProps = {
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    text: ReactNode;
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
    bgColor?: "bg-white" | "bg-brand-black";
};

export default function Card({ imageSrc="", imageAlt="", imageWidth=0, imageHeight=0, text, link, bgColor="bg-white" }: CardProps) {
    return (
        <div 
        className={`w-full flex flex-col rounded-md ${bgColor} shadow-lg overflow-hidden`}>
            {imageSrc && (
                <Image className="min-h-62.5 max-h-62.5 h-auto w-auto object-cover" 
                src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight}
                sizes="(max-width: 1024px) 100vw, 512px" />
            )}
            
            <div className="h-full flex flex-col gap-2 p-6 text-brand-black">
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