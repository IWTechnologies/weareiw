import { groq } from "next-sanity";

export const fetchAllJobs = groq`
    *[_type == "jobs" && active == true] {
        _id,
        jobTitle,
        "slug": slug.current,
        category,
        "jobLocation": jobLocation.city + ", " + jobLocation.state,
        type,
        jobDescription,
    }
`;

export const fetchJobCategories = groq`
    *[_type == "jobCategory"] | order(title asc) {
        _id,
        title,
        "slug": slug.current,
        description,
        "categoryImage": categoryImage.asset->url
    }
`;