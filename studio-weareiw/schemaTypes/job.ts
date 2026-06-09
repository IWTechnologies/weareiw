import { defineField, defineType } from "sanity";

export const job = defineType({
    name: 'jobs',
    title: 'Jobs',
    type: 'document',
    fields: [
        defineField({
            name: 'active',
            title: 'Active',
            type: 'boolean',
            description: 'Uncheck to hide without deleting',
            initialValue: true,
        }),
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
            name: 'category',
            title: 'Job Category',
            type: 'reference',
            to: [
                { type: 'jobCategory' }
            ],
            description: 'Add from dropdown list.',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'jobLocation',
            title: 'Job Location',
            type: 'object',
            fields: [
                {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Elgin', value: 'Elgin' },
                            { title: 'Minneapolis', value: 'Minneapolis' }
                        ]
                    }
                },
                {
                    name: 'state',
                    title: 'State',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Illinois', value: 'Illinois' },
                            { title: 'Minnesota', value: 'Minnesota' }
                        ]
                    }
                },
            ],
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full Time', value: 'Full-Time' },
                    { title: 'Part Time', value: 'Part-Time' },
                    { title: 'Contract', value: 'Contract' },
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
            title: 'jobTitle',
            category: 'category.title',
        },
        prepare(selection) {
            const {title, category} = selection
            return {
                title: title,
                subtitle: `${category ? category : 'unknown'}`
            }
        }
    }
})