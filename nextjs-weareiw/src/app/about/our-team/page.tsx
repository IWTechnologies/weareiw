import { client } from "@/sanity/lib/client";
import { fetchTeamMembers } from "@/sanity/queries/teamMember";
import { TeamMember } from "@/types/teamMember";
import type { Metadata } from "next";
import TeamGrid from "@/components/TeamGrid";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Meet Our Team - IW Technologies",
  description: "Meet the team deidcated to being your partner. We provide cutting-edge, new and refurbished POS technology and expert services.",
};

export default async function OurTeamPage() {
    const teamMembers: TeamMember[] = await client.fetch(fetchTeamMembers);

    return (
        <div className="bg-brand-black">
            <section className="h-50 text-white">
                <Hero 
                    imageSrc="/heroImages/aboutUsHero.png"
                    imageAlt="Blue tinted Services card image"
                    imageWidth={2048}
                    imageHeight={1357}
                    text={
                    <>
                        
                    </>
                    }
                />
            </section>

            <section className="flex justify-center py-12 bg-brand-black text-white">
                <div>
                    <h2 className="border-b-4 border-brand-aqua p-2">
                        Meet Our Team
                    </h2>
                </div>
            </section>

            <section className="w-full py-32 rounded-t-3xl bg-background">
                <div className="w-[90%] sm:w-[60%] lg:w-[70%] mx-auto flex flex-col gap-5">
                    <TeamGrid teamMembers={teamMembers} />
                </div>
            </section>
        </div>
    )
}