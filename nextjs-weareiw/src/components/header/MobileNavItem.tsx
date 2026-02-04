"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

export default function MobileNavItem({ label, href, submenu }: NavItemType) {
    const [open, setOpen] = useState(false);
    const hasSubmenu = Boolean(submenu);
    const pathname = usePathname();
    const isActive = pathname !== "/" && pathname.startsWith(href);
    
    return (
        <div>
            <div className="flex items-center justify-between px-6 py-4">
                <Link href={href} className={`${isActive ? "text-brand-aqua" : "text-white"}`}>
                    {label}
                </Link>

                {hasSubmenu && (
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        aria-expanded={open}
                        aria-controls={`${label}-submenu`}
                        aria-label={`Toggle ${label} submenu`}
                        className="ml-4 text-white hover:text-brand-aqua"
                    >
                        ▾
                    </button>
                )}
            </div>

            {hasSubmenu && (
                <ul
                id={`${label}-submenu`}
                className={`pl-10 pb-2 inset-shadow-md transition-all ${
                    open ? "block" : "hidden"
                }`}
                >
                {submenu!.map((item) => (
                    <li key={item.href}>
                    <Link
                        href={item.href}
                        className="block py-2 text-white hover:text-brand-aqua"
                    >
                        {item.label}
                    </Link>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}