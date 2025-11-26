import Link from "next/link";
import Image from "next/image";

//this is base for the header, not final
export default function Header() {
    return (
        <header className="sticky top-0 h-[123px] flex items-center bg-brand-navy font-semibold text-xl text-white">
            <div className="h-full w-[95%] mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <Image src="/iw-logo.png" alt="IW Technologies Logo" width={300} height={0} className="h-auto w-auto" />
                    </Link>
                </div>
                <nav className="flex items-center justify-end space-x-8">
                    <Link href="#" className="">Products</Link>
                    <Link href="#" className="">Services</Link>
                    <Link href="#" className="">About</Link>
                    <Link href="#" className="">Blog</Link>
                    <Link href="#" className="">Careers</Link>
                    <Link href="#" className="bg-brand-aqua text-brand-navy">Get In Touch</Link>
                </nav>
            </div>
        </header>
    )
}