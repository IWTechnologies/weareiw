import { groq } from "next-sanity";

export const fetchTeamMembers = groq`
    *[_type == "teamMember"] | order(order asc) {
        _id,
        fullName,
        jobTitle,
        bio,
        linkedin,
        "portrait": portrait.asset->url,
    } 
    `;