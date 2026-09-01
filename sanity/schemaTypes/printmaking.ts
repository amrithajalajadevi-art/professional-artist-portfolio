import { defineField, defineType } from 'sanity'

export const printmakingType = defineType({
  name: 'printmaking',
  title: 'Printmaking',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2023 or 2021-2022',
    }),
    defineField({
      name: 'medium',
      title: 'Technique / Medium',
      type: 'string',
      description: 'e.g. Etching & Aquatint, Drypoint, Woodcut',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 30 x 40 cm',
    }),
    defineField({
      name: 'image',
      title: 'Print Image',
      type: 'image',
      description: 'Single image of the printmaking artwork.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
      validation: (Rule) => Rule.required().error('Please upload an image for the printmaking artwork.'),
    }),
    defineField({
      name: 'edition',
      title: 'Edition Details',
      type: 'string',
      description: 'e.g. Edition of 15, AP',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this print appears in the gallery (lower numbers first).',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'medium',
      media: 'image',
    },
  },
})
