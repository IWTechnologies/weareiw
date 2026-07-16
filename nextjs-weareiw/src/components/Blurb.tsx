import Image from "next/image";
import { ReactNode } from "react";
import LinkButton, { LinkVariant } from "./LinkButton";
import YoutubeFacade from "./YoutubeFacade";

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
    text: ReactNode;
    link?: { 
        href: string;
        label: string;
        variant?: LinkVariant;
        prefetch?: boolean;
    };
    reverse?: boolean;
    rounded?: boolean;
    textColor?: "text-white" | "text-brand-black";
    bgColor?: "" | "bg-brand-black";
};

export default function Blurb({ media, text, link, reverse=false, rounded=false, textColor="text-white", bgColor="" }: BlurbProps) {
    return (
        <div 
        className={`w-full mx-auto flex flex-col items-start
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
        `}>
            {media.type === "image" && (
                <Image
                className={`w-full lg:w-1/2 h-auto lg:h-full object-contain lg:object-cover
                ${rounded ? "rounded-2xl" : ""}`} 
                src={media.src} alt={media.alt} width={media.width} height={media.height}
                sizes="(max-width: 1024px) 100vw, 50vw" />
            )}
            {media.type === "video" && (
                <div className="w-full h-auto lg:w-1/2 lg:h-full aspect-video">
                    <YoutubeFacade youtubeId={media.youtubeId} />
                </div>
                
            )}
    
            <div
            className={`w-full h-full lg:w-1/2 flex flex-col gap-2 items-start p-8 lg:pt-0 ${textColor} ${bgColor}`}>
                {text}
                {link && <LinkButton {...link} />}
            </div>
        </div>
    )
}