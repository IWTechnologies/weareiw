"use client"

import Link from "next/link";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

type NavItemProps = NavItemType;

export default function NavItem({ label, href, submenu }: NavItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative h-full flex items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        >
            {submenu ? (
                <button
                type="button"
                className="text-brand-white hover:text-brand-aqua hover:cursor-pointer">
                {label}
                </button>
            ) : (
                <Link
                href={href}
                className="text-brand-white hover:text-brand-aqua hover:cursor-pointer">
                {label}
                </Link>
            )}

            {submenu && open && (
                <div className="absolute left-0 top-full p-5 bg-white">
                    <ul className="w-[240px] flex flex-col">
                        {submenu.map((item) => (
                        <li key={item.href}>
                            <Link
                            href={item.href}
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