import Link from "next/link";

export default function PromoBar() {
    return (
        <div className="w-full flex justify-center text-center bg-brand-gold text-brand-black">
            <div className="w-[80%] md:w-full mx-auto flex flex-col md:flex-row items-center md:justify-center">
                <span className="w-fit">50 Years. Built on Trust. Earned in the Field...</span>
                <Link href="/about/our-story/" 
                target="_blank" 
                className="w-fit font-medium underline hover:text-white hover:cursor-pointer">
                    See our story
                </Link>
            </div>
            
        </div>
    )
}