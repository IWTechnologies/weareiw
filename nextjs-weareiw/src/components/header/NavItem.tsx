"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

type NavItemProps = NavItemType;

export default function NavItem({ label, href, isExternal, submenu }: NavItemProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isActive = pathname !== "/" && pathname.startsWith(href);

    return (
        <div className="relative h-full flex items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        >
            <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`py-5 hover:cursor-pointer 
            ${isActive ? "text-brand-aqua" : "text-white hover:text-brand-aqua"}`}>
            {label}
            </Link>

            {submenu && (
                <div className={`absolute left-0 top-full w-max p-5 pt-4 bg-white rounded-md shadow-lg
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className="flex flex-col">
                        {submenu.map((item) => (
                        <li key={item.href} className="py-[0.5em] px-[1em]">
                            <Link
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                            className="text-brand-navy hover:text-brand-aqua">
                            {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}