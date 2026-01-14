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
                    <Link href="https://www.termsfeed.com/live/5300ce41-8ea3-4e06-a1dc-198dd34fd3f2"
                    className="text-brand-blue underline" target="_blank">Privacy Policy</Link>
                    <Link href="https://www.weareiw.com/faq/" className="text-brand-blue underline" target="_blank">FAQ</Link>
                </div>
                <div className="w-1/2 flex flex-col justify-evenly items-end text-right">
                    <div>
                        <p className="font-bold">IW Technologies</p>
                        <p>2790 Pinnacle Drive</p>
                        <p>Elgin, IL 60124-7943</p>
                    </div>
                    <div>
                        <p>Phone: (847) 310-4200</p>
                        <p>Toll Free: (800) 544-5493</p>
                        <div className="flex justify-end space-x-2">
                            <Link href="https://www.linkedin.com/company/iw-technologies" className="" target="_blank"><Image className="max-h-[25px] h-auto w-auto object-contain" src="/LinkedIn.jpg" alt="IW Linkedin" width={50} height={50} /></Link>
                            <Link href="https://www.facebook.com/IWTechnologies/" className="" target="_blank"><Image className="max-h-[25px] h-auto w-auto object-contain" src="/Facebook.jpg" alt="IW Facebook" width={50} height={50} /></Link>
                            <Link href="https://www.youtube.com/user/illinoiswholesale/videos" className="" target="_blank"><Image className="max-h-[25px] h-auto w-auto object-contain" src="/Youtube.jpg" alt="IW Youtube" width={50} height={50} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}