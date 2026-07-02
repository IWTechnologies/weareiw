import Link from "next/link";
import { navItems } from "@/data/navItems";
import MobileNavItem from "./MobileNavItem";

type MobileNavProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps ) {
    return (
        <div id="mobile-nav" className={`absolute left-0 top-full w-full h-[calc(100dvh-123px)] flex flex-col bg-brand-black text-white
            transition-all duration-300 ease-in-out
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
            role="dialog" 
            aria-modal="true" 
            aria-label="mobile navigation"
            inert={!open ? true : undefined}
        >
            <nav className="flex flex-col">
                {navItems.map((item) => (
                    <MobileNavItem key={item.label} {...item} onNavigate={onClose}/>
                ))}
            </nav>
            <div className="flex justify-center">
                <Link 
                href="/get-in-touch"
                className="w-[80%] sm:w-fit m-6 px-[1em] py-[.33em] rounded-md text-center
                transition duration-300 ease-in-out
                border-3 border-background bg-background text-brand-black
                hover:bg-transparent hover:text-background
                active:bg-transparent active:text-background
                focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-aqua"
                onClick={onClose}
                >
                    Get In Touch
                </Link>
            </div>
        </div>
    )
}
