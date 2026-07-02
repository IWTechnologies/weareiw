import { groq } from "next-sanity";

// get all job slugs
export const fetchAllJobSlugs = groq`
    *[_type == "jobs" && active == true] {
        "slug": slug.current,
        "categorySlug": category->slug.current,
    }
`;

// get all category slugs
export const fetchAllJobCategorySlugs = groq`
    *[_type == "jobCategory"] {
        "slug": slug.current,
    }
`;

// get all job categories for opportunities page
export const fetchAllJobCategories = groq`
    *[_type == "jobCategory"] | order(title asc) 
    {
        _id,
        title,
        "slug": slug.current,
        description,
        "categoryImage": categoryImage.asset->url,
        "jobCount": count(*[_type == "jobs" && active == true && category._ref == ^._id])
    }
`;

// get all jobs under their category(list view).
export const fetchJobsByCategory = groq`
    {
        "jobs": *[_type == "jobs" && active == true && category->slug.current == $slug] | order(jobTitle asc)
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