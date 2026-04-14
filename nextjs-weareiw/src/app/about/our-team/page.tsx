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
            <section className="w-[60%] lg:w-[70%] xl:w-[70%] mx-auto py-14">
                <div className="w-[90%] md:w-full mx-auto flex flex-col gap-5">
                    <h1>Our Team</h1>
                    {/* 
                    team member grid will go here
                    <pre>{JSON.stringify(teamMembers, null, 2)}</pre>
                    */}
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {teamMembers.map((member) => (
                            <div key={member._id} className="flex flex-col rounded-3xl overflow-hidden text-white">
                                <img src={member.portrait} alt={member.fullName} 
                                className="grayscale-100  
                                hover:grayscale-0 hover:cursor-pointer"/>
                                <div className="flex flex-col gap-1 p-4 pl-6 bg-brand-black">
                                    <div className="w-fit font-bold text-xl border-b-2 border-white">{member.fullName}</div>
                                    <p className="truncate" title={member.jobTitle}>{member.jobTitle}</p>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                    
                </div>
            </section>
        </div>
    )
}