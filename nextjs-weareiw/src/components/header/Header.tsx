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
                    <Link href="/" className="">
                        <Image className="max-h-17.5 w-auto object-contain" 
                        priority width={1920} height={359} 
                        src="/fiftyYear/iw-50-whiteGold.png" alt="50 yearIW Technologies Logo" />
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
                <button id="burger"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden relative w-8 h-6 hover:cursor-pointer"
                aria-label="Toggle mobile menu"
                >
                    <span
                        className={`absolute left-0 w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out
                        ${mobileOpen ? "top-3 rotate-45" : "top-0 rotate-0"}`}
                    />
                    <span
                        className={`absolute left-0 w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out
                        ${mobileOpen ? "opacity-0" : "top-3 opacity-100"}`}
                    />
                    <span
                        className={`absolute left-0 w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out
                        ${mobileOpen ? "top-3 -rotate-45" : "top-6 rotate-0"}`}
                    />
                </button>
            </div>

            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    )
}