import { groq } from "next-sanity";

export const fetchAllJobs = groq`
    *[_type == "job" && active == true] {
        _id,
        jobTitle,
        "slug": slug.current,
        category,
        jobLocation,
        type,
        jobDescription,
    }
    `;