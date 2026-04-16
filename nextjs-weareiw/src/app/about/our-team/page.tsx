import { client } from "@/sanity/lib/client";
import { fetchTeamMembers } from "@/sanity/queries/teamMember";
import { TeamMember } from "@/types/teamMember";
import type { Metadata } from "next";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Meet Our Team - IW Technologies",
  description: "this is placeholder.",
};

export default async function OurTeamPage() {
    const teamMembers: TeamMember[] = await client.fetch(fetchTeamMembers);

    return (
        <div>
            <section className="w-[60%] lg:w-[70%] xl:w-[70%] mx-auto py-14">
                <div className="w-[90%] md:w-full mx-auto flex flex-col gap-5">
                    <h1>Our Team</h1>
                    <TeamGrid teamMembers={teamMembers} />
                </div>
            </section>
        </div>
    )
}