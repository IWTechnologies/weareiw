import Image from "next/image";
import LinkButton, { LinkVariant } from "./LinkButton";

type CardProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    subTitle: string;
    text: string;
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};

export default function Card({ imageSrc, imageAlt, imageWidth, imageHeight, title, subTitle, text, link }: CardProps) {
    return (
        <div 
        className="w-full lg:w-lg flex flex-col rounded-md bg-white shadow-lg overflow-hidden">
            <Image className="min-h-62.5 max-h-62.5 h-auto w-auto object-cover" 
            src={imageSrc} alt={imageAlt} priority width={imageWidth} height={imageHeight} />
            <div className="h-full flex flex-col gap-2 p-8 text-brand-black">
                <h3 className="">{title}</h3>
                <p className="">{subTitle}</p>
                <p className="font-light">{text}</p>
                
                {link && (
                    <div className="flex grow items-end">
                        <LinkButton {...link} />
                    </div>
                )}
            </div>
        </div>
    )
}