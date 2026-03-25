"use client"
import { useState } from "react";

type YoutubeProps = {
    youtubeId: string;
};

export default function YoutubeFacade({ youtubeId }: YoutubeProps) {
    const [activated, setActivated] = useState(false);

    if(activated) {
        return (
            <iframe
            className="h-full w-full object-contain
            sm:max-lg:w-full" 
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title="Embedded youtube video"
            allowFullScreen
            allow="autoplay"
            />
        );
    }

    return (
        <button
        className="group relative w-full h-full"
        onClick={() => setActivated(true)}
        aria-label="Play video"
        >
            <img src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`} 
            alt="video thumbnail"
            className="w-full h-full object-cover"
            />
            <div 
            className="absolute inset-0 flex items-center justify-center
            bg-brand-black/20 group-hover:bg-brand-black/50 group-hover:cursor-pointer transition duration-300">
                <div 
                className="bg-brand-navy group-hover:bg-brand-aqua rounded-xl px-5 py-3  
                transition duration-300">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
        </button>
    );
}