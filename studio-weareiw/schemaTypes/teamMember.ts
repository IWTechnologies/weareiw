import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
    name: 'team member',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'portrait',
            title: 'Portrait',
            type: 'image',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'linkedinU',
            title: 'Linkedin URL',
            type: 'url',
        }),
    ],
})