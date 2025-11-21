import Link from "next/link";

//this is base for the header, not final
export default function Header() {
    return (
        <header className="h-123 bg-brand-navy font-semibold text-2xl text-white">
            <nav className="flex items-center justify-end space-x-8">
                <Link href="/"></Link>
                <Link href="#">Products</Link>
                <Link href="#">Services</Link>
                <Link href="#">About</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Careers</Link>
            </nav>
        </header>
    )
}