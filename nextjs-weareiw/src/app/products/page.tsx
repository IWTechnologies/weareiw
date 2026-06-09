import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";

export const metadata: Metadata = {
  title: "Products - IW Technologies",
  description: "IW Technologies provides cutting-edge, new and refurbished POS technology and equipment. From printers to scanners and everything in between, our expansive inventory of point-of-sale solutions can meet your needs.",
};

export default function ProductsPage() {
    return (
        <div>
            <section className="h-fit flex flex-col items-center text-white">
                <Hero 
                    imageSrc="/heroImages/aboutUsHero.png"
                    imageAlt="Blue tinted Services card image"
                    imageWidth={1920}
                    imageHeight={1080}
                    text={
                    <>
                        <h1>Your Enterprise Solution Partner</h1>
                        <p className="">
                        Partnering with industry-leading technology manufacturers, 
                        we offer a wide variety of new and expertly refurbished 
                        products to fit your every need.
                        </p>
                    </>
                    }
                />
            </section>

            <section id="partners" className="w-full flex justify-center bg-brand-black text-brand-black">
                <div className="w-full py-14 mt-4 rounded-t-3xl bg-background">
                    <div className="container mx-auto flex justify-center">
                        <div className="w-[90%]">
                            <Blurb 
                            media={{
                                type: "image",
                                src: "/aboutImages/flatNewPartners.webp",
                                alt: "Blue tinted image of IW team in meeting",
                                width: 512,
                                height: 342,
                            }}
                            text={
                                <>
                                <div className="w-full flex items-center">
                                    <img src="/aboutImages/icons/handshake-solid-full.svg" 
                                    alt="handshake icon" height="50" width="50"
                                    className="mr-2" />  
                                    <h3>Our Partners</h3>
                                </div>
                                
                                <p>
                                    IW Technologies is proud to be an official partner of some of 
                                    the most reputable and sought-after manufacturers in the business.
                                </p>
                                <p>
                                    Together, we are empowering the front line to work better, faster and smarter
                                    and redefining point-of-sale hardware and software through our steadfast commitment
                                    to quality.
                                </p>
                                </>
                            }
                            reverse
                            rounded
                            textColor="text-brand-black"
                            />
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}