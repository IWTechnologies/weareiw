"use client"

import Link from "next/link";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

type NavItemProps = NavItemType;

export default function NavItem({ label, href, submenu }: NavItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        >
            {submenu ? (
                <button
                type="button"
                className="text-brand-white hover:text-brand-aqua">
                {label}
                </button>
            ) : (
                <Link
                href={href}
                className="text-brand-white hover:text-brand-aqua">
                {label}
                </Link>
            )}

            {submenu && open && (
                <div className="absolute left-0 top-full bg-red-500">
                    <ul className="flex flex-col">
                        {submenu.map((item) => (
                        <li key={item.href}>
                            <Link
                            href={item.href}
                            className="block text-brand-navy hover:text-brand-aqua">
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