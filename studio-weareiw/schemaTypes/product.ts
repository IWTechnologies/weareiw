import { defineField, defineType } from "sanity";

export const product = defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                { type: 'productCategory' }
            ],
            description: 'Add from dropdown list.',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Product Description',
            type: 'array',
            of: [
                { type: 'block' }
            ],
            description: 'This is optional.',
        }),
        defineField({
            name: 'specs',
            title: 'Specs URL',
            type: 'url',
            description: 'This is optional.',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category.title',
            media: 'image',
        },
    },
})