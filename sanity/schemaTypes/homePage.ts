import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Flexible Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline Statement',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'heroType',
          title: 'Hero Image Source',
          type: 'string',
          options: {
            list: [
              { title: 'Project Reference (Artwork or Public Art)', value: 'reference' },
              { title: 'Custom Image Upload', value: 'custom' },
            ],
            layout: 'radio',
          },
          initialValue: 'reference',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'projectReference',
          title: 'Project Reference',
          type: 'reference',
          to: [{ type: 'artwork' }, { type: 'publicArt' }],
          hidden: ({ parent }) => parent?.heroType !== 'reference',
        }),
        defineField({
          name: 'customImage',
          title: 'Custom Hero Image',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ parent }) => parent?.heroType !== 'custom',
        }),
        defineField({
          name: 'customTitle',
          title: 'Custom Image Caption / Title',
          type: 'string',
          hidden: ({ parent }) => parent?.heroType !== 'custom',
        }),
      ],
    }),
    // Legacy fallback field retained for backwards compatibility
    defineField({
      name: 'hero',
      title: 'Legacy Hero Section (Deprecated)',
      type: 'object',
      hidden: true,
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
          name: 'featuredArtwork',
          title: 'Featured Hero Artwork',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'medium', title: 'Medium', type: 'string' },
            { name: 'dimensions', title: 'Dimensions', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Content',
      }
    },
  },
})
