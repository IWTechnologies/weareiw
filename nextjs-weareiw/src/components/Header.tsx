import Link from "next/link";

//this is base for the header, not final
export default function Header() {
    return (
        <header className="bg-brand-navy text-white">
            <Link href="/"></Link>
            <Link href="#">Products</Link>
            <Link href="#">Services</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
        </header>
    )
}