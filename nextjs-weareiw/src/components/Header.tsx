import Link from "next/link";
import Image from "next/image";

//this is base for the header, not final
export default function Header() {
    return (
        <header className="h-123 flex items-center bg-brand-navy font-semibold text-2xl text-white">
            <div className="h-full w-[95%] mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <Image src="/iw-logo.png" alt="IW Technologies Logo" width={300} height={123} />
                    </Link>
                </div>
                <nav className="flex items-center justify-end space-x-8">
                    <Link href="#">Products</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#" className="bg-brand-aqua text-brand-navy">Get In Touch</Link>
                </nav>
            </div>
        </header>
    )
}