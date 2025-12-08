import Link from "next/link";
import Image from "next/image";

//this is base for the header, not final
export default function Header() {
    return (
        <header className="sticky top-0 h-[123px] flex items-center bg-brand-navy font-semibold text-xl text-white">
            <div className="h-full w-[95%] mx-auto flex justify-between items-center">
                <div className="h-full flex items-center">
                    <Link href="/">
                        <Image className="max-h-[70px] w-auto object-contain" 
                        priority width={1047} height={205} 
                        src="/iw-logo.png" alt="IW Technologies Logo" />
                    </Link>
                </div>
                <nav className="flex items-center justify-end space-x-8">
                    <Link href="#" className="hover:text-brand-aqua">Products</Link>
                    <Link href="#" className="hover:text-brand-aqua">Services</Link>
                    <Link href="#" className="hover:text-brand-aqua">About</Link>
                    <Link href="#" className="hover:text-brand-aqua">Blog</Link>
                    <Link href="#" className="hover:text-brand-aqua">Careers</Link>
                    <Link href="#" className="bg-brand-aqua text-brand-navy">Get In Touch</Link>
                </nav>
            </div>
        </header>
    )
}