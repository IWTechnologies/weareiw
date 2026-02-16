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
            <Image className="min-h-[250px] max-h-[250px] h-auto w-auto object-cover" 
            src={imageSrc} alt={imageAlt} priority width={imageWidth} height={imageHeight} />
            <div className="flex flex-col items-start p-8 text-brand-black">
                <h3 className="pb-2 text-3xl font-bold">{title}</h3>
                <p className="text-xl">{subTitle}</p>
                <p className="pb-5 text-xl font-light">{text}</p>
                
                {link && <LinkButton {...link} />}
            </div>
        </div>
    )
}