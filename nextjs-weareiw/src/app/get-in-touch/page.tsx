import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import Hubspot from "@/components/forms/Hubspot"; 
import ContactUs from "@/components/forms/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us - IW Technologies",
  description: "IW Technologies is your partner in driving your business forward. Let's get in touch!",
  openGraph: {
        type: "website",
        siteName: "IW Technologies",
        title: "Contact Us - IW Technologies",
        description: "IW Technologies is your partner in driving your business forward. Let's get in touch!",
        url: `${BASE_URL}/get-in-touch`,
        images: [
            {
                url: `${BASE_URL}/iw-logo-simple.png`,
                alt: 'Contact Us IW Technologies',
            }
        ],
    },
};

export default async function GetInTouchPage() {

    return (
        <div>
            <section className="w-full py-14">
                <div className="w-[70%] md:w-[50%] flex flex-col mx-auto gap-8 text-brand-black">
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="w-fit border-b-4 border-brand-aqua">
                            Get In Touch
                        </h1>
                        <p>
                            Fill out the form below or call (847) 310-4200 to see how we can partner together.
                        </p>
                        <p className="text-sm text-brand-black/70">Fields with an <span className="text-red-600">*</span> are required for submitting this form.</p>
                    </div>
                    <Hubspot />
                    {/* <ContactUs 
                    buttonColor="bg-brand-black" 
                    buttonTextColor="text-white" 
                    buttonTextHover="text-brand-black" 
                    buttonBorderColor="border-brand-black" /> */}
                </div>
            </section>
        </div>
    )
}