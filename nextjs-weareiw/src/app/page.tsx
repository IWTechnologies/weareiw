import Link from "next/link";
//import { type SanityDocument } from "next-sanity";
//import { client } from "@/sanity/lib/client";

import Card from "@/components/Card";
import Blurb  from "@/components/Blurb";
import LogoSlider from "@/components/LogoSlider";
import HeroSection from "@/components/HeroSection";

const customerLogos = [
    { src: "/customerLogos/Ace.png", alt: "Ace Hardware logo" },
    { src: "/customerLogos/Aldi.png", alt: "Aldi logo" },
    { src: "/customerLogos/Amazon.png", alt: "Amazon logo" },
    { src: "/customerLogos/AppleBees.png", alt: "AppleBee's logo" },
    { src: "/customerLogos/BathBodyWorks.png", alt: "Bath and Body Works logo" },
    { src: "/customerLogos/Boscovs.png", alt: "Boscov logo" },
    { src: "/customerLogos/Chilis.png", alt: "Chili's logo" },
    { src: "/customerLogos/Cvs.png", alt: "Cvs logo" },
    { src: "/customerLogos/Giant.png", alt: "Giant logo" },
    { src: "/customerLogos/HomeDepot.png", alt: "Home Depot logo" },
    { src: "/customerLogos/InNOut.png", alt: "In-N-Out logo" },
    { src: "/customerLogos/JCPenny.png", alt: "JC Penny logo" },
    { src: "/customerLogos/KnitWell.png", alt: "KnitWell logo" },
    { src: "/customerLogos/Kroger.png", alt: "Kroger logo" },
    { src: "/customerLogos/Macys.png", alt: "Macy's logo" },
    { src: "/customerLogos/McAlistersDeli.png", alt: "McAlister's Deli logo" },
    { src: "/customerLogos/Nordstrom.png", alt: "Nordstrom logo" },
    { src: "/customerLogos/Ollies.jpg", alt: "Ollie's logo" },
    { src: "/customerLogos/Speedway.png", alt: "Speedway logo" },
    { src: "/customerLogos/StopShop.png", alt: "Stop and Shop logo" },
    { src: "/customerLogos/Target2.png", alt: "Target logo" },
    { src: "/customerLogos/TraderJoes.png", alt: "Trader Joe's logo" },
    { src: "/customerLogos/VictoriasSecret.png", alt: "Victoria's Secret logo" },
    { src: "/customerLogos/Wegmans.png", alt: "Wegmans logo" },
    { src: "/customerLogos/Wendys.png", alt: "Wendy's logo" },
    { src: "/customerLogos/WholeFoods.png", alt: "Whole Foods logo" },
];

const partnerLogos = [
    { src: "/partnerLogos/Cisco.png", alt: "Cisco logo" },
    { src: "/partnerLogos/Datalogic.png", alt: "Datalogic logo" },
    { src: "/partnerLogos/Dell.png", alt: "Dell logo" },
    { src: "/partnerLogos/Elo.png", alt: "Elo logo" },
    { src: "/partnerLogos/HP.png", alt: "HP logo" },
    { src: "/partnerLogos/Microtouch.png", alt: "Microtouch logo" },
    { src: "/partnerLogos/QSR.png", alt: "QSR Automations logo" },
    { src: "/partnerLogos/Zebra.png", alt: "Zebra logo" },
]

export default function IndexPage() {
  return (
    <div className="">
      <section className="">
        <HeroSection
          link={{
              href: "#",
              label: "See How We Work",
              variant: "dark",
            }}
        />
      </section>
      
      <section 
      className="w-full flex flex-col items-center">
        <div className="w-full pb-15 font-bold text-3xl lg:text-4xl text-brand-black text-center">
          <h2>
            Start with hardware. Or start with services. We’re built to scale with you.
          </h2>
        </div>
        <div className="w-[80%] mx-auto flex flex-col items-center gap-8
        lg:flex-row lg:justify-center lg:items-start">
          <Card 
            imageSrc="/View-our-products-Moody-blue.png"
            imageAlt="Blue tinted view our products card image"
            imageWidth={663}
            imageHeight={432}
            title="Hardware that fits into a bigger picture"
            subTitle="Hardware decisions shouldn't create downstream problems."
            text="We source new and refurbished POS hardware that’s designed to deploy cleanly, 
            operate reliably, and integrate into a long-term lifecycle."
            link={{
              href: "#",
              label: "Explore hardware",
              variant: "dark",
            }}
          />
          <Card 
            imageSrc="/Services-Moody-Blue.png"
            imageAlt="Blue tinted Services card image"
            imageWidth={669}
            imageHeight={375}
            title="Services built for life after install"
            subTitle="Installing POS is straightforward. Keeping it running at scale is where complexity shows up."
            text="Our services exist to take that weight off your teams whether you need support in one area or end-to-end."
            link={{
              href: "#",
              label: "See how we support the lifecycle",
              variant: "dark",
            }}
          />
        </div>
      </section>

      <section className="w-[80%] my-15 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[70%] text-brand-black text-center">
            <h2 className="font-extrabold text-3xl">
              Built for enterprise environments. Proven at scale.
            </h2>
            <h3 className="font-bold text-2xl">
              Trusted by operators across retail, grocery, QSR, hospitality, convenience, and distribution.
            </h3>
          </div>
          <div className="w-full lg:w-[80%] my-5 mt-10">
            <LogoSlider logos={customerLogos} speed={75} />
          </div>
        </div>
      </section>

      <section className="w-full py-14 mb-5">
        <div className="container mx-auto flex justify-center">
          <Blurb 
            media={{
              type: "image",
              src: "/Team-Moody-Blue-1.webp",
              alt: "Blue tinted image of IW team in meeting",
              width: 512,
              height: 342,
            }}
            title="Someone has to own POS. We do"
            text={[
              `POS is critical infrastructure. When it works, operations stay focused and customers keep moving. That reliability depends on clear ownership.`,
              `From sourcing and deployment to maintenance, refurbishment, and retirement, we take responsibility for POS in the field across its full lifecycle.`,
              `We believe critical infrastructure calls for long-term thinking, clear accountability, and partners committed to seeing it through.`
            ]}
            textColor="text-brand-black"
          />
        </div>
      </section>
      <section className="w-full py-14">
        <div className="container mx-auto flex flex-col items-center">
          <div className="pb-15 font-bold text-3xl lg:text-4xl text-brand-black text-center">
            <h2>Long-term ownership changes decisions</h2>
          </div>
          <Blurb 
            media={{
              type: "video",
              youtubeId: "L4O1ejWfDAc",
            }}
            title=""
            text={[
              `When you’re accountable for the full lifecycle, you plan differently. You deploy differently. 
               You service differently. You think beyond the install and optimize for what happens years later.`,
              `That shows up in how assets are deployed, serviced, and retired.`,
              `That mindset is why customers bring us in…not just to roll out POS, but to own it.`
            ]}
            link={{
              href: "#",
              label: "Let's Build Your Next Roll Out",
              variant: "dark",
            }}
            reverse
            textColor="text-brand-black"
          />
        </div>
      </section>
      <section
      className="w-full py-14 mb-5 bg-brand-black">
        <div className="container mx-auto flex justify-center">
          <Blurb 
            media={{
              type: "image",
              src: "/Team-Moody-Blue-1.webp",
              alt: "Blue tinted image of IW team in meeting",
              width: 512,
              height: 342,
            }}
            title="One partner. Full accountability. POS managed for the long term."
            text="With a massive inventory of IT assets and the most skilled — and
            dedicated — technicians in the industry, we are here to help you succeed."
            link={{
              href: "#",
              label: "Let's Work Together",
              variant: "light",
            }}
            textColor="text-white"
          />
        </div>
      </section>

      <section className="w-[80%] my-15 mx-auto">
        <div className="flex flex-col items-center">
          <div className="font-extrabold text-3xl text-brand-black text-center">
            <h2>
              Our Partners
            </h2>
          </div>
          <div className="w-full my-5 mt-10">
            <LogoSlider logos={partnerLogos} speed={20} />
          </div>
        </div>
      </section>
      
    </div>
  );
}