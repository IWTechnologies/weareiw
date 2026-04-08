import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
    name: 'team member',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            type: 'image',
        }),
        defineField({
            name: 'linkedin',
            type: 'url',
        }),
    ],
})