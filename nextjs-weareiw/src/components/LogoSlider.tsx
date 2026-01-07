import Image from "next/image";

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
                    <div key={index} className="flex-shrink-0 mx-10">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={160}
                            height={80}
                            className="h-12 w-auto object-contain" 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

