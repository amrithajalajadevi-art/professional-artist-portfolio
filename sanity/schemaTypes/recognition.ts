import { defineField, defineType } from 'sanity'

export const recognitionType = defineType({
  name: 'recognition',
  title: 'Recognition & Award Item',
  type: 'document',
  fields: [
    defineField({
      name: 'awardTitle',
      title: 'Award / Selection Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'awardingBody',
      title: 'Awarding Body / Organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Selected', value: 'Selected' },
          { title: 'Won', value: 'Won' },
          { title: 'Nominated', value: 'Nominated' },
          { title: 'Shortlisted', value: 'Shortlisted' },
          { title: 'Offered', value: 'Offered' },
          { title: 'Featured', value: 'Featured' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'link',
      title: 'Official / Press Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'awardTitle',
      subtitle: 'awardingBody',
    },
  },
})
