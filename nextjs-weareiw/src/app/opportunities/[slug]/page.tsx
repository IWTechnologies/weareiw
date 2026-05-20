import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";

export const metadata: Metadata = {
  title: "Opportunities - IW Technologies",
  description: "Opportunities at IW Technologies.",
};

export default function OpportunitiesPage() {
    return (
        <div>
            <section className="h-fit text-white">
                <Hero 
                    imageSrc="/heroImages/shutterstock1.jpg"
                    imageAlt="Blue tinted procurement hero image"
                    imageWidth={813}
                    imageHeight={457}
                    text={
                    <>
                        <h1>Job Category placeholder</h1>
                        <p>
                            We're building a culture where amazing people (like you) can 
                            do their best work.
                        </p>
                        <p>
                            If you're ready to level-up and gorw your career, you've come 
                            to the right place.
                        </p>
                    </>
                    }
                />
            </section>
        </div>
    )
}