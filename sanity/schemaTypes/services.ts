import { defineField, defineType } from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Commissions & Workshops',
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
      name: 'commissionSteps',
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
    defineField({
      name: 'workshopServices',
      title: 'Workshop & Masterclass Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Workshop Title', type: 'string', validation: (Rule) => Rule.required() },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc: any, options: any) => options.parent?.title,
                maxLength: 96,
                disableArrayWarning: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'category',
              title: 'Workshop Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Mentoring', value: 'Mentoring' },
                  { title: 'Painting Masterclass', value: 'Painting Masterclass' },
                  { title: 'Public Art Workshop', value: 'Public Art Workshop' },
                  { title: 'Online Masterclass', value: 'Online Masterclass' },
                  { title: 'Foundry Masterclass', value: 'Foundry Masterclass' },
                  { title: 'Ceramics Workshop', value: 'Ceramics Workshop' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'skillLevel', title: 'Skill Level', type: 'string' },
            { name: 'location', title: 'Location / Venue', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'highlights',
              title: 'Workshop Highlights',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
})
