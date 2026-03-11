"use client"

import { useEffect, useRef, useState } from "react";

type Stat = {
    value: number;
    label: string;
    suffix?: string;
}

const rowOne: Stat[] = [
    { value: 240000, label: "Sq Ft of Warehouse Space" },
    { value: 18000, label: "Pallet Storage Locations", },
    { value: 50, label: "Years in Business" },
    { value: 40000, label: "Annual Shipments" },
    { value: 7500, label: "Customers Nationwide", suffix: "+" }
];

const rowTwo: Stat[] = [
    { value: 35000, label: "Checkout Lanes Supported", suffix: "+" },
    { value: 55000, label: "On-SIte Service Events (2024)", suffix: "+" },
    { value: 9650, label: "Locations Supported Accross North America (2024)" },
    { value: 1000, label: "Rapid-Scale Deployments in Under 8 Weeks", suffix: "+" }
];

function StatItem({ value, label, suffix="" }: Stat) {
    return (
        <div className="relative flex flex-col items-center rounded-2xl p-5 text-center overflow-hidden">
            <div className="absolute inset-0 z-10 bg-radial-[at_5%_10%] from-brand-black/10 to-transparent"></div>
            <div
            className="relative z-20 flex text-brand-black 
            tabular-nums font-bold transition-[--num] duration-[3s] ease-out
            [counter-set:num_var(--num)] supports-counter-set:before:content-[counter(num)]"
            style={{ ["--num" as string]: value }}>
                <span className="supports-counter-set:sr-only">
                    {value.toLocaleString()}
                </span>
                <span>{suffix}</span>
            </div>
            <span className="">{label}</span>
        </div>
    );
}

export default function StatSection() {
    const [showRowTwo, setRowTwo] = useState(false);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const topObserver = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setRowTwo(false);
                }
            },
            { threshold: 1.0 }
        );

        const bottomObserver = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setRowTwo(true);
                }
            },
            { threshold: 1.0 }
        );

        if(topRef.current) {
            topObserver.observe(topRef.current);
        }

        if(bottomRef.current) {
            bottomObserver.observe(bottomRef.current);
        }

        return () => {
            topObserver.disconnect();
            bottomObserver.disconnect();
        }
    }, []);

    return (
       <div className="relative w-[80%] mx-auto py-14 overflow-hidden">
            <div ref={topRef} className="absolute top-0 h-1 w-full" />
            <div ref={bottomRef} className="absolute bottom-0 h-1 w-full" />

            <div 
            className={`transition-opacity duration-700 ease-in-out
            ${showRowTwo ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-[90%] mx-auto">
                    {rowOne.map((stat) => (
                        <StatItem key={stat.label} {...stat} />
                    ))}
                </div>
            </div>

            <div 
            className={`absolute inset-0 flex items-center transition-opacity duration-700 ease-in-out
            ${showRowTwo ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-[90%] mx-auto">
                    {rowTwo.map((stat) => (
                        <StatItem key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
       </div> 
    )
}