"use client"
import { useEffect, useRef, useState } from "react";

type StatItemClientProps = {
    value: number;
    suffix?: string;
};

export default function StatItemClient({ value, suffix = "" }: StatItemClientProps) {
    const [display, setDisplay] = useState(0);
    const [visible, setVisible] = useState(false);
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
            aria-hidden="true"
            className={`relative flex
            text-2xl tabular-nums font-bold transition-all duration-700 ease-out
            ${visible ? "opacity-100" : "opacity-0"}`}
        >
            {display.toLocaleString()}{suffix}
        </div>
    );
}