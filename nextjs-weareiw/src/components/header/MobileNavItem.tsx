import Link from "next/link";
import { useState } from "react";
import type { NavItem as NavItemType } from "@/data/navItems";

export default function MobileNavItem({ label, href, submenu }: NavItemType) {
    const [open, setOpen] = useState(false);
    const hasSubmenu = Boolean(submenu)
    
    return (
        <div className="">
            <div className="flex items-center justify-between px-6 py-4">
                <Link href={href} className="text-white hover:text-brand-aqua">
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
                className={`pl-10 pb-2 transition-all ${
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