import Link from "next/link";
import Image from "next/image";
import LinkButton, { LinkVariant } from "./LinkButton";

type FooterProps = {
    link?: {
            href: string;
            label: string;
            variant?: LinkVariant;
        };
};

//this will have a flex container with 2 columns taking up 50% width each. 
// each column container will have a flex direction of column
// left column will have IW logo, Get in touch CTA, hyperlinks for FAQ and Privacy policy
// right column will have IW tech address and contact info, socials for linkedin, facebook, youtube
export default function Footer({ link }: FooterProps) {
    return (
        <footer>
            <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center mx-auto my-8">
                <div className="w-1/2 flex flex-col justify-center items-center sm:items-start text-center">
                    <Image className="max-h-25 h-auto w-auto object-contain" 
                    src="/fiftyYear/iw-50-favicon.png" alt="Simple 50th IW Technologies Logo" 
                    width={1783} height={949} />
                    {link && <LinkButton {...link} />}
                    <Link href="https://www.termsfeed.com/live/5300ce41-8ea3-4e06-a1dc-198dd34fd3f2"
                    className="text-brand-navy underline hover:text-brand-aqua" target="_blank">Privacy Policy</Link>
                    <Link href="https://www.weareiw.com/faq/" 
                    className="text-brand-navy underline hover:text-brand-aqua" target="_blank">FAQ</Link>
                </div>
                <div className="w-1/2 flex flex-col justify-evenly items-center sm:items-end text-center sm:text-right text-brand-black">
                    <div>
                        <p className="font-bold">IW Technologies</p>
                        <p>2790 Pinnacle Drive</p>
                        <p>Elgin, IL 60124-7943</p>
                    </div>
                    <div>
                        <p>Phone: (847) 310-4200</p>
                        <p>Toll Free: (800) 544-5493</p>
                        <div className="flex justify-evenly sm:justify-end sm:space-x-2 mt-2 sm:mt-0">
                            <Link href="https://www.linkedin.com/company/iw-technologies" className="" target="_blank"><Image className="max-h-6.25 h-auto w-auto object-contain" src="/LinkedIn.jpg" alt="IW Linkedin" width={50} height={50} /></Link>
                            <Link href="https://www.facebook.com/IWTechnologies/" className="" target="_blank"><Image className="max-h-6.25 h-auto w-auto object-contain" src="/Facebook.jpg" alt="IW Facebook" width={50} height={50} /></Link>
                            <Link href="https://www.youtube.com/user/illinoiswholesale/videos" className="" target="_blank"><Image className="max-h-6.25 h-auto w-auto object-contain" src="/Youtube.jpg" alt="IW Youtube" width={50} height={50} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}