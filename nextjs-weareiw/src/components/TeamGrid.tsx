"use client"
import { TeamMember } from "@/types/teamMember";
import { useState } from "react";

type gridProps = {
    teamMembers: TeamMember[];
};

export default function TeamGrid({ teamMembers }: gridProps) {
    const [selectedId, setId] = useState<string | null>(null);

    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
                <div key={member._id} className="cardParent flex">
                    <div className="flex flex-col rounded-3xl overflow-hidden text-white">
                        <img src={member.portrait} alt={member.fullName} 
                        className="grayscale-100  
                        hover:grayscale-0 hover:cursor-pointer"/>
                        <div className="flex flex-col gap-1 p-4 pl-6 bg-brand-black">
                            <div className="w-fit font-bold text-xl border-b-2 border-white">{member.fullName}</div>
                            <p className="truncate" title={member.jobTitle}>{member.jobTitle}</p>
                        </div>
                    </div>
                    {/* <p className="bio">
                        {member.bio}
                    </p> */}
                </div>  
            ))}
        </div>
    )
}