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

  ],
       preview: {
    prepare() {
      return {
        title: 'Home Page Content',
      }
    }
  },
})
