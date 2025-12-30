import Link from "next/link";
import Image from "next/image";

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
    text: string | string[];
    linkHref: string;
    linkLabel: string;
    reverse?: boolean;
    textColor?: "text-white" | "text-brand-navy";
};

export default function Blurb({ media, title, text, linkHref, linkLabel, reverse=false, textColor="text-white" }: BlurbProps) {
    return (
        <div 
        className={`w-[80%] flex items-center
        ${reverse ? "flex-row-reverse" : "flex-row"}
        sm:max-lg:flex-col`}>
            {media.type === "image" && (
                <Image
                className="h-auto w-1/2 object-contain
                sm:max-lg:w-full" 
                src={media.src} alt={media.alt} priority width={media.width} height={media.height} />
            )}
            {media.type === "video" && (
                <div className="w-1/2 sm:max-lg:w-full aspect-video">
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
            className={`w-1/2 flex flex-col items-start p-8 ${textColor}
            sm:max-lg:w-full`}>
                {title && (<h2 className="pb-4 text-3xl font-bold">{title}</h2>)}
                {Array.isArray(text) ? (
                text.map((paragraph, index) => (
                    <p
                    key={index}
                    className="pb-5 font-light text-2xl"
                    >
                    {paragraph}
                    </p>
                ))
                ) : (
                <p className="pb-5 font-light text-2xl">{text}</p>
                )}

                <Link href={linkHref} 
                className="transition duration-300 ease-in-out px-[1em] py-[.33em]
                border-3 border-brand-aqua rounded-md text-[22px] text-brand-navy bg-brand-aqua
                hover:bg-transparent hover:text-brand-aqua">{linkLabel}</Link>
            </div>
        </div>
    )
}