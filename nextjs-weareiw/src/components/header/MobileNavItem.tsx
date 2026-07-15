"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

type MobileNavItemProps = NavItemType & {
    onNavigate: () => void;
};

export default function MobileNavItem({ label, href, submenu, onNavigate }: MobileNavItemProps) {
    const [open, setOpen] = useState(false);
    const hasSubmenu = Boolean(submenu);
    const pathname = usePathname();
    const isActive = pathname !== "/" && pathname.startsWith(href);
    
    return (
        <div>
            <div className="flex items-center justify-between px-6 py-2">
                <Link 
                href={href}
                prefetch={false}
                onClick={onNavigate} 
                className={`${isActive ? "text-brand-aqua" : "text-white hover:text-brand-aqua"}
                p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua`}>
                    {label}
                </Link>

                {hasSubmenu && (
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        aria-expanded={open}
                        aria-controls={`${label}-submenu`}
                        aria-label={`Toggle ${label} submenu`}
                        className="text-white hover:text-brand-aqua
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua"
                    >
                        ▾
                    </button>
                )}
            </div>

            {hasSubmenu && (
                <ul
                id={`${label}-submenu`}
                className={`bg-brand-navy/20 pl-10 pb-2 inset-shadow-md transition-all ${
                    open ? "block" : "hidden"
                }`}
                onFocusCapture={() => setOpen(true)}
                onBlurCapture={(e) => {
                    //only close if focus leaves ul
                    if(!e.currentTarget.contains(e.relatedTarget)) {
                        setOpen(false);
                    }
                }}
                >
                {submenu!.map((item) => (
                    <li key={item.href}>
                    <Link
                        href={item.href}
                        prefetch={false} 
                        onClick={onNavigate}
                        className="w-[99%] block pl-2 py-2 text-white hover:text-brand-aqua
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua"
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