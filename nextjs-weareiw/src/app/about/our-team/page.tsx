import { client } from "@/sanity/lib/client";
import { fetchTeamMembers } from "@/sanity/queries/teamMember";
import { TeamMember } from "@/types/teamMember";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Our Team - IW Technologies",
  description: "this is placeholder.",
};

export default async function OurTeamPage() {
    const teamMembers: TeamMember[] = await client.fetch(fetchTeamMembers);

    return (
        <div>
            <section className="w-full py-14">
                <div className="w-[80%] mx-auto">
                    <h1>Our Team</h1>
                    {/* team member grid will go here */}
                    <pre>{JSON.stringify(teamMembers, null, 2)}</pre>
                </div>
            </section>
        </div>
    )
}