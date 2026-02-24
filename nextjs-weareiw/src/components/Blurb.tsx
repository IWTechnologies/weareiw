import Image from "next/image";
import { ReactNode } from "react";
import LinkButton, { LinkVariant } from "./LinkButton";

type ImageMedia = {
    type: "image";
    src: string;
    alt: string;
    width: number;
    height: number;
}

type VideoMedia = {
    type: "video";
    youtubeId: string;
}

type Media = ImageMedia | VideoMedia;

interface BlurbProps {
    media: Media;
    title?: string;
    text: ReactNode | ReactNode[];
    link?: { 
        href: string;
        label: string;
        variant?: LinkVariant;
    };
    reverse?: boolean;
    textColor?: "text-white" | "text-brand-black";
};

export default function Blurb({ media, title, text, link, reverse=false, textColor="text-white" }: BlurbProps) {
    return (
        <div 
        className={`w-[90%] mx-auto flex flex-col items-start
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
        `}>
            {media.type === "image" && (
                <Image
                className="w-full lg:w-1/2 h-auto object-contain" 
                src={media.src} alt={media.alt} priority width={media.width} height={media.height} />
            )}
            {media.type === "video" && (
                <div className="w-full lg:w-1/2 aspect-video">
                    <iframe
                    className="h-full w-full object-contain
                    sm:max-lg:w-full" 
                    src={`https://www.youtube.com/embed/${media.youtubeId}`}
                    title="Embedded youtube video"
                    allowFullScreen
                    />
                </div>
                
            )}
    
            <div
            className={`w-full lg:w-1/2 flex grow flex-col items-start p-8 ${textColor}`}>
                {title && (<h3 className="pb-4">{title}</h3>)}
                {Array.isArray(text) ? (
                text.map((paragraph, index) => (
                    <p
                    key={index}
                    className="pb-5"
                    >
                    {paragraph}
                    </p>
                ))
                ) : (
                <p className="pb-5">{text}</p>
                )}

                {link && <LinkButton {...link} />}
            </div>
        </div>
    )
}