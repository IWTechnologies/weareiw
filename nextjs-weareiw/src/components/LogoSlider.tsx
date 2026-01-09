import Image from "next/image";

type Logo = {
    src: string;
    alt: string;
};

type LogoSliderProps = {
    logos: Logo[];
    speed?: number;
};
/* */
export default function LogoSlider({ logos, speed = 30 }: LogoSliderProps) {
    return (
        <div className="w-full overflow-hidden">
            <div
            className="flex w-max animate-logo-scroll"
            style={{ "--duration": `${speed}s` } as React.CSSProperties}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="w-[200px] px-8 py-4 flex items-center justify-center shrink-0">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={160}
                            height={80}
                            className="max-w-full h-auto object-contain" 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

