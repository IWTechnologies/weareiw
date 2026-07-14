"use client"
import { TeamMember } from "@/types/teamMember";
import { useState, useEffect, useRef } from "react";

type gridProps = {
    teamMembers: TeamMember[];
};

export default function TeamGrid({ teamMembers }: gridProps) {
    const [selectedId, setId] = useState<string | null>(null);
    const scrollRef = useRef<{[key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if(selectedId && scrollRef.current[selectedId]) {
            scrollRef.current[selectedId]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [selectedId]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {teamMembers.map((member) => {
                const isSelected = selectedId === member._id;

                return (
                    <div
                        key={member._id}
                        ref={(el) => { scrollRef.current[member._id] = el; }}
                        className={`transition-all duration-300
                        ${isSelected ? "lg:col-span-2 xl:col-span-3" : "col-span-1"}`}
                    >
                        {/* teamMember parent container */}
                        <div className={`h-full flex flex-col lg:flex-row bg-brand-black rounded-3xl overflow-hidden`}>
                            {/* Card */}
                            <div className={`flex flex-col p-4 text-white
                                ${isSelected ? "lg:w-1/3" : "w-full"}`}>
                                <img
                                    src={member.portrait}
                                    alt={member.fullName}
                                    className={`object-cover rounded-3xl overflow-hidden hover:cursor-pointer
                                    grayscale hover:grayscale-0 transition duration-300
                                    ${isSelected ? "grayscale-0" : ""}`}
                                    onClick={() => setId(
                                        isSelected ? null : member._id
                                    )}
                                />
                                <div className="flex flex-col gap-1 p-2 pb-0 sm:p-4">
                                    <div className="w-fit font-bold text-sm sm:text-base md:text-lg lg:text-xl border-b-2 border-brand-aqua">
                                        {member.fullName}
                                    </div>
                                    <p className="" title={member.jobTitle}>
                                        {member.jobTitle}
                                    </p>
                                </div>
                            </div>

                            {/* Bio */}
                            {isSelected && (
                                <div className="lg:w-2/3 flex flex-col gap-4 p-8 lg:pl-2 bg-brand-black text-white">
                                    <div className={`flex ${member.linkedin ? "justify-between" : "justify-end" } items-center`}>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-fit hover:text-brand-aqua transition duration-300"
                                                aria-label={`${member.fullName} LinkedIn profile`}
                                            >
                                                {/* LinkedIn icon */}
                                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        )}
                                        <button
                                        onClick={() => setId(null)}
                                        className="py-1 px-2 rounded-md font-bold transition duration-300 
                                        hover:cursor-pointer hover:bg-brand-aqua hover:text-brand-black"
                                        aria-label="Close bio"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <div>{member.bio}</div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}