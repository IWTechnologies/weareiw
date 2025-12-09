import Link from "next/link";
import Image from "next/image";

type CardProps = {
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    text: string;
    linkHref: string;
    linkLabel: string;
};

export default function Card({ imageSrc, imageAlt, imageWidth, imageHeight, title, text, linkHref, linkLabel }: CardProps) {
    return (
        <div className="w-lg flex flex-col border-2 border-solid shadow-lg">
            <Image className="max-h-[250px] h-auto w-auto object-cover" 
            src={imageSrc} alt={imageAlt} priority width={imageWidth} height={imageHeight} />
            <div className="flex flex-col p-8 text-brand-navy">
                <h2 className="pb-2 text-3xl font-bold">{title}</h2>
                <p className="font-light text-2xl">{text}</p>
                <Link href={linkHref} className="px-[.3em] py-[1em] text-xl bg-brand-aqua">{linkLabel}</Link>
            </div>
        </div>
    )
}