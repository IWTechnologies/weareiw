type Logo = {
    src: string;
    alt: string;
};

type LogoSliderProps = {
    logos: Logo[];
    speed?: number;
};

export default function LogoSlider({ logos, speed = 30 }: LogoSliderProps) {
    return (
        <div className="logo-slider w-full rounded-2xl overflow-hidden
        hover:inset-shadow-md/10 hover:inset-shadow-brand-black
        active:inset-shadow-md/10 active:inset-shadow-brand-black
        focus-within:inset-shadow-md/10 focus-within:inset-shadow-brand-black">
            <div
                className="flex w-max animate-logo-scroll"
                style={{ "--duration": `${speed}s` } as React.CSSProperties}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="w-50 px-8 py-4 flex items-center justify-center shrink-0">
                        <img
                            src={logo.src}
                            alt={index < logos.length ? logo.alt : ""}
                            aria-hidden={index < logos.length ? undefined : true}
                            width={160}
                            height={80}
                            loading="lazy"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

