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
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'statement', title: 'Statement', type: 'text', rows: 4 }),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link (URL)', type: 'string' },
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link (URL)', type: 'string' },
          ],
        }),
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
      name: 'highlightBanner',
      title: 'Highlight Banner Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({
          name: 'cta',
          title: 'CTA Button',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link (URL)', type: 'string' },
          ],
        }),
        defineField({
          name: 'metrics',
          title: 'Highlight Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', title: 'Value / Stat', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'highlight', title: 'Highlight Styling', type: 'boolean', initialValue: false },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'keyProjects',
      title: 'Key Featured Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID / Slug', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'medium', title: 'Medium', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'aspectRatio', title: 'Aspect Ratio', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
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
})
