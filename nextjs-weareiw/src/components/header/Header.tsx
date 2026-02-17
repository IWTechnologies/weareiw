"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { navItems } from "@/data/navItems";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import LinkButton, { LinkVariant } from "../LinkButton";

type HeaderProps = {
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};


//this is base for the header, not final
export default function Header({ link }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    {/* listen for screen size change and closes mobile nav when screen width
        becomes desktop nav size */}
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleChange = () => {
            if(mediaQuery.matches) {
                setMobileOpen(false);
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 h-30.75 flex items-center bg-brand-black font-semibold text-xl text-white">
            <div className="h-full w-[95%] mx-auto flex justify-between items-center">
                <div className="h-full flex items-center">
                    <Link href="/">
                        <Image className="max-h-17.5 w-auto object-contain" 
                        priority width={1047} height={205} 
                        src="/iw-logo.png" alt="IW Technologies Logo" />
                    </Link>
                </div>

                {/* Desktop Nav hidden until lg breakpoint */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <NavItem key={item.label} {...item} />
                    ))}
                    {link && <LinkButton {...link} />}
                </nav>

                {/* Mobile Nav */}
                {/* Burger Button */}
                <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden flex flex-col gap-1 hover:cursor-pointer"
                aria-label="Toggle menu"
                >
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                </button>
            </div>

            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    )
}