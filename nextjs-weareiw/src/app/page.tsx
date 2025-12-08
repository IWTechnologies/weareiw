import Link from "next/link";
//import { type SanityDocument } from "next-sanity";
//import { client } from "@/sanity/lib/client";

import Card from "@/components/Card";


export default function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-9/10 p-8">
      <h1 className="text-4xl font-bold mb-8">Hero section will go here</h1>
      <section className="w-[80%] mx-auto flex space-x-4">
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
      
    </main>
  );
}