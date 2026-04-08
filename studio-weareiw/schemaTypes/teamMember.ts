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
            options: {
                hotspot: true,
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'linkedin',
            title: 'Linkedin URL',
            type: 'url',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Control order in which team members are displayed on page.',
            validation: rule => rule.required()
        })
    ],
    orderings: [
        {
            name: 'orderAsc',
            title: 'Display Order',
            by: [
                {field: 'order', direction: 'asc'}
            ]
        }
    ],
})