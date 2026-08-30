import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required() }),
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
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'pressFeatures',
      title: 'Featured Press & Recognition',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'publication', title: 'Publication Name', type: 'string' },
            { name: 'date', title: 'Date / Year', type: 'string' },
            { name: 'title', title: 'Article Title', type: 'string' },
            { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
            { name: 'linkText', title: 'Link Button Text', type: 'string' },
            { name: 'url', title: 'Link URL', type: 'string' },
          ],
        },
      ],
    }),
  ],
       preview: {
    prepare() {
      return {
        title: 'Home Page Content',
      }
    }
  },
})
