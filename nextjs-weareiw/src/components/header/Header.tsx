"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/navItems";
import NavItem from "./NavItem";

//this is base for the header, not final
export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 h-[123px] flex items-center bg-brand-navy font-semibold text-xl text-white">
            <div className="h-full w-[95%] mx-auto flex justify-between items-center">
                <div className="h-full flex items-center">
                    <Link href="/">
                        <Image className="max-h-[70px] w-auto object-contain" 
                        priority width={1047} height={205} 
                        src="/iw-logo.png" alt="IW Technologies Logo" />
                    </Link>
                </div>

                {/* Desktop Nav hidden until lg breakpoint*/}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <NavItem key={item.label} {...item} />
                    ))}
                    <Link href="#" className="transition duration-300 ease-in-out
                    bg-brand-aqua text-brand-navy">Get In Touch</Link>
                </nav>

                {/* Mobile Nav */}
                {/* Burger Button mobile only */}
                <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden flex flex-col gap-1"
                aria-label="Toggle menu"
                >
                <span className="w-6 h-[2px] bg-white" />
                <span className="w-6 h-[2px] bg-white" />
                <span className="w-6 h-[2px] bg-white" />
                </button>
            </div>
        </header>
    )
}