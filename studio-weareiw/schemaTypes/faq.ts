import {defineField, defineType} from 'sanity'

export const faqPost = defineType({
  name: 'faqPost',
  title: 'FAQ Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
            list: [
                { title: 'POS Lifecycle Services', value: 'POS' },
                { title: 'Staging, Imaging & Kitting', value: 'SIT' },
                { title: 'Nationwide Field Services', value: 'NFS' },
                { title: 'ITAD & Asset Disposition', value: 'ITAD' },
                { title: 'Low Voltage Cabling & Store Connectivity', value: 'LVC' },
                { title: 'About IW Technologies', value: 'About' },
            ]
        },
        validation: rule => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'table'},
        {type: 'image'},
      ],
    }),
  ],
  preview: {
      select: {
          title: 'title',
      },
  },
})