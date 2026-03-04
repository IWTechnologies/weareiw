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
        <div className="w-full overflow-hidden">
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

