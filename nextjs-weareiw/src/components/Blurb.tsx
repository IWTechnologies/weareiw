import Link from "next/link";
import Image from "next/image";

type BlurbProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    text: string;
    linkHref: string;
    linkLabel: string;
    reverse?: boolean;
};

export default function Card({ imageSrc, imageAlt, imageWidth, imageHeight, title, text, linkHref, linkLabel, reverse=false }: BlurbProps) {
    return (
        <div 
        className={`w-full flex items-center
        ${reverse ? "flex-row-reverse" : "flex-row"}
        sm:max-lg:flex-col`}>
            <Image
            className="h-auto w-1/2 object-contain
            sm:max-lg:w-full" 
            src={imageSrc} alt={imageAlt} priority width={imageWidth} height={imageHeight} />
            <div
            className="w-1/2 flex flex-col items-start p-8 text-white
            sm:max-lg:w-full">
                <h2 className="pb-4 text-3xl font-bold">{title}</h2>
                <p className="pb-5 font-light text-2xl">{text}</p>
                <Link href={linkHref} 
                className="transition duration-300 ease-in-out px-[1em] py-[.33em]
                border-3 border-brand-aqua rounded-md text-[22px] text-brand-navy bg-brand-aqua
                hover:bg-transparent hover:text-brand-aqua">{linkLabel}</Link>
            </div>
        </div>
    )
}