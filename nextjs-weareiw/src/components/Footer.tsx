import Link from "next/link";
import Image from "next/image";


//this will have a flex container with 2 columns taking up 50% width each. 
// each column container will have a flex direction of column
// left column will have IW logo, Get in touch CTA, hyperlinks for FAQ and Privacy policy
// right column will have IW tech address and contact info, socials for linkedin, facebook, youtube
export default function Footer() {
    return (
        <footer>
            <div className="w-[80%] flex justify-between mx-auto my-8">
                <div className="w-1/2 flex flex-col justify-center items-start">
                    <Image className="max-h-[100px] h-auto w-auto object-contain mb-8" 
                    src="/iw-logo-simple.png" alt="Simple IW Technologies Logo" 
                    width={1122} height={776} />
                    <Link href="#" className="p-4 bg-brand-aqua text-brand-navy">Get In Touch</Link>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-end">
                    <div>
                        this is test text
                    </div>
                    <div>
                        this is test text
                    </div>
                </div>
            </div>
        </footer>
    )
}