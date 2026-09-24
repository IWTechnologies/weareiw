//import { useEffect, useRef, useState } from "react";
import StatItemClient from "./StatItemClient";

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
    return (
        <div className="relative flex flex-col items-center rounded-2xl p-5 text-center
        text-brand-black overflow-hidden">
            <div className="absolute inset-0 z-10 bg-radial-[at_5%_10%] from-brand-navy/10 to-transparent" />
            
            {/* server rendered — visible to crawlers and screen readers */}
            <div className="relative z-20 flex text-2xl tabular-nums font-bold">
                <span className="sr-only">
                    {value.toLocaleString()}{suffix}
                </span>
                {/* client animation overlays on top */}
                <StatItemClient value={value} suffix={suffix} />
            </div>

            <span className="relative z-20 font-semibold">{label}</span>
            <span className="relative z-20">{subLabel}</span>
        </div>
    );
}

export default function StatSection({ title, subTitle, stats }: StatSection) {
    return (
        <div className="w-[75%] flex flex-col mx-auto py-14 gap-5">
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