import Link from "next/link";
//import { type SanityDocument } from "next-sanity";
//import { client } from "@/sanity/lib/client";

import Card from "@/components/Card";
import Blurb  from "@/components/Blurb";

export default function IndexPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto ">
        <h1 className="text-4xl font-bold mb-8">Hero section will go here</h1>
      </section>
      
      <section 
      className="w-[80%] mx-auto flex justify-center space-x-8
      sm:max-lg:flex-col sm:max-lg:items-center sm:max-lg:space-x-0 sm:max-lg:space-y-8">
        <Card 
          imageSrc="/View-our-products-Moody-blue.png"
          imageAlt="Blue tinted view our products card image"
          imageWidth={663}
          imageHeight={432}
          title="Products We Stand Behind"
          text="From displays to scanners to printers, we offer a wide range
          of new and expertly refurbished IT assets from a variety of manufacturers."
          linkHref="#"
          linkLabel="View Our Products"
        />
        <Card 
          imageSrc="/Services-Moody-Blue.png"
          imageAlt="Blue tinted Services card image"
          imageWidth={669}
          imageHeight={375}
          title="Services for Every Stage"
          text="From installation to on-site repair to e-cycling, our service
          offerings can cover the full lifecycle of your technology or be chosen a la carte."
          linkHref="#"
          linkLabel="Explore Our Services"
        />
      </section>

      <section className="section-bg-diagonal relative w-full py-14 mty-5">
        <div className="relative container mx-auto flex flex-col items-center">
          <div className="text-4xl text-brand-navy">
            <h2>Your POS Technology Partner. Trusted by the Best</h2>
          </div>
          <Blurb 
            media={{
              type: "video",
              youtubeId: "L4O1ejWfDAc",
            }}
            title=""
            text={[
              `IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality,
            Convenience, Distribution. We go beyond hardware — designing, deploying, and supporting
            your tech stack.`,
            `With 45+ years of experience and a 240,000 sq ft warehouse of new / 
            refurbished inventory, we deliver fast, scalable solutions — mobile POS,
            self-checkout, networking and more.`
            ]}
            linkHref="#" 
            linkLabel="Let's Build Your Next Rollout"
            reverse
            textColor="text-brand-navy"
          />
        </div>
      </section>
      <section
      className="w-full py-14 mby-5 bg-brand-navy">
        <div className="container mx-auto flex flex-col items-center">
          <Blurb 
            media={{
              type: "image",
              src: "/Team-Moody-Blue-1.webp",
              alt: "Blue tinted image of IW team in meeting",
              width: 512,
              height: 342,
            }}
            title="Let's Work Together"
            text="With a massive inventory of IT assets and the most skilled — and
            dedicated — technicians in the industry, we are here to help you succeed."
            linkHref="#" 
            linkLabel="Get In Touch"
            textColor="text-white"
          />
        </div>
      </section>
      
    </main>
  );
}