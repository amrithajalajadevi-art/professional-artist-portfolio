import { defineField, defineType } from 'sanity'

export const commissionPageType = defineType({
  name: 'commissionPage',
  title: 'Commissions Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Commissions Page Title',
      type: 'string',
      initialValue: 'COMMISSIONS',
    }),
    defineField({
      name: 'introText',
      title: 'Introductory Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Commission Page Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'processSteps',
      title: 'Commission Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', title: 'Step Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
})
