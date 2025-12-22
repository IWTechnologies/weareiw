import Link from "next/link";
//import { type SanityDocument } from "next-sanity";
//import { client } from "@/sanity/lib/client";

import Card from "@/components/Card";
import Blurb  from "@/components/Blurb";

export default function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-9/10 p-8">
      <h1 className="text-4xl font-bold mb-8">Hero section will go here</h1>
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
      <section
      className="w-[80%] mx-auto my-5 flex justify-center bg-brand-navy">
        <Blurb 
          imageSrc="/Team-Moody-Blue-1.webp"
          imageAlt="Blue tinted image of IW team in meeting"
          imageWidth={512}
          imageHeight={342}
          title="Let's Work Together"
          text="With a massive inventory of IT assets and the most skilled — and
          dedicated — technicians in the industry, we are here to help you succeed."
          linkHref="#" 
          linkLabel="Get In Touch"
        />
      </section>
      
    </main>
  );
}