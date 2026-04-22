"use client"

import { useEffect, useRef, useState } from "react";

type Stat = {
    value: number;
    label: string;
    subLabel?: string;
    suffix?: string;
};

type StatSection = {
    title?: string;
    subTitle?: string;
    stats: Stat[];
};

function StatItem({ value, label, subLabel, suffix = "" }: Stat) {
    const [visible, setVisible] = useState(false);
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    setVisible(true);
                    observer.disconnect();

                    const duration = 3000;
                    const start = performance.now();

                    const tick = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div
            ref={ref}
            className={`relative flex flex-col items-center rounded-2xl p-5 text-center 
            text-brand-black overflow-hidden transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
            <div className="absolute inset-0 z-10 bg-radial-[at_5%_10%] from-brand-navy/10 to-transparent" />
            <div className="relative z-20 flex text-2xl tabular-nums font-bold">
                {display.toLocaleString()}{suffix}
            </div>
            <span className="relative z-20 font-semibold">{label}</span>
            <span className="relative z-20">{subLabel}</span>
        </div>
    );
}

export default function StatSection({ title, subTitle, stats }: StatSection) {
    return (
        <div className="w-[70%] flex flex-col mx-auto py-14 gap-5">
            <div className="w-full mb-4 text-brand-black">
                <h2>{title}</h2>
                <div>{subTitle}</div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {stats.map((stat) => (
                    <StatItem key={stat.label} {...stat} />
                ))}
            </div>
        </div>
    );
}