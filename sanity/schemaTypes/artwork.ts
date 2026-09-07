import { defineField, defineType } from 'sanity'

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Strict hardcoded category dropdown mapped to site layout.',
      options: {
        list: [
          { title: 'Rest & Quietude Series', value: 'series' },
          { title: 'Recent Figurative Paintings', value: 'recent' },
          { title: 'Public & UK Murals', value: 'commissions' },
          { title: 'Public Art Projects', value: 'public-art' },
          { title: 'Studio Practice & Drawings', value: 'studio' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
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
      name: 'dimensions',
      title: 'Dimensions / Scale',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location / Collection',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images Gallery',
      type: 'array',
      description: 'Array of images for the artwork (first image is treated as primary/cover).',
      of: [
        {
          type: 'image',
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
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(1)
          .error('You can only upload one image for a standard artwork.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0',
    },
  },
})
