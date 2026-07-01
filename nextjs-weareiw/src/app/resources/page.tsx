import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Resources - IW Technologies",
  description: "Checkout our resources to learn more about the latest news and trends in the POS industry with IW Techonologies.",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Resources - IW Technologies",
        description: "Checkout our resources to learn more about the latest news and trends in the POS industry with IW Techonologies.",
        url: `${BASE_URL}/resources`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Resources at IW Technologies',
            }
        ],
    },
};

// this will be changed to include links for blog, news, podcasts
const resourceCards = [
    { url:"/resources/blog", title: "Explore our Blog", description: "Read up on what industry experts think." },
    { url:"/resources/news", title: "Explore our Newsletter", description: "Catch up on the latest news in the POS industry." },
];

export default async function ResourcesPage() {

    return (
        <div>
            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] py-16 mx-auto flex flex-col items-center gap-10
                border-b-2 border-brand-black/50">
                    <h1>IW Resource Hub</h1>
                    <p>
                        Catch up on everything POS with IW Technologies.
                        View the lastest blog posts, news articles, and podcast episodes.
                    </p>
                </div>
            </section>

            <section className="w-full my-16 text-brand-black">
                <div className="w-[70%] mx-auto flex flex-col gap-10">
                    <h2 className="">
                        Explore our resources
                    </h2>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {resourceCards.map((card) => (
                            <div key={card.title} className="">
                                <Card 
                                    imageSrc="/View-our-products-Moody-blue.png"
                                    imageAlt="Blue tinted view our products card image"
                                    imageWidth={663}
                                    imageHeight={432}
                                    text={
                                        <>
                                        <h3 className="pl-2.5 border-l-4 border-brand-aqua text-brand-aqua">
                                            {card.title}
                                        </h3>
                                        <p className="font-medium">
                                            {card.description}
                                        </p>
                                        </>
                                    }
                                    link={{
                                        href: `${card.url}`,
                                        label: "Read more",
                                        variant: "dark",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}