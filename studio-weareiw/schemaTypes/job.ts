import { defineField, defineType } from "sanity";

export const job = defineType({
    name: 'jobs',
    title: 'Jobs',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'jobTitle'},
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'jobCategory',
            title: 'Job Category',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'jobLocation',
            title: 'Job Location',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full Time', value: 'full-time' },
                    { title: 'Part Time', value: 'part-time' },
                    { title: 'Contract', value: 'contract' },
                ]
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'jobDescription',
            title: 'Job Description',
            type: 'array',
            of: [
                { type: 'block' }
            ],
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'jobCategory',
        }
    }
})