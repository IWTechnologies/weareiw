import { groq } from "next-sanity";

// export const fetchAllJobs = groq`
//     *[_type == "jobs" && active == true] {
//         _id,
//         jobTitle,
//         "slug": slug.current,
//         category,
//         "jobLocation": jobLocation.city + ", " + jobLocation.state,
//         type,
//         jobDescription,
//     }
// `;

// get all job categories for opportunities page
export const fetchAllJobCategories = groq`
    *[_type == "jobCategory"] | order(title asc) 
    {
        _id,
        title,
        "slug": slug.current,
        description,
        "categoryImage": categoryImage.asset->url
    }
`;

// get all jobs under their category(list view).
export const fetchJobsByCategory = groq`
    {
        "jobs": *[_type == "jobs" && active == true && category->slug.current == $slug] | order(_createdAt desc)
        {
            _id,
            jobTitle,
            "slug": slug.current,
            "city": jobLocation.city,
            "state": jobLocation.state,
            type,
            "category": category->title,
        },
        "category": *[_type == "jobCategory" && slug.current == $slug][0]
        {
            title,
            description,
        }
    }
    
`;

// get individual job details
export const fetchJobBySlug = groq`
    *[_type == "jobs" && slug.current == $slug][0]
    {
        _id,
        jobTitle,
        "slug": slug.current,
        "city": jobLocation.city,
        "state": jobLocation.state,
        type,
        jobDescription,
        "category": category->title,
        "categorySlug": category->slug.current,
    }
`;