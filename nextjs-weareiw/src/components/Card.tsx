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
        <div className="flex flex-col">
            <Image className="max-h-[250px] h-auto w-auto object-contain" 
            src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
            <h2>{title}</h2>
            <p>{text}</p>
            <Link href={linkHref}>{linkLabel}</Link>
        </div>
    )
}