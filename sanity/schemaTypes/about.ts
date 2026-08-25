import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'biography',
      title: 'Artist Profile & Biography',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
          initialValue: '01 / Artist Profile & Biography',
        }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'portraitImage',
          title: 'Portrait Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        }),
        defineField({
          name: 'paragraphs',
          title: 'Biography Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'quickFacts',
          title: 'Quick Facts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'value', title: 'Value', type: 'string' },
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'statement',
      title: 'Core Artist Vision / Statement',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
        defineField({ name: 'author', title: 'Author', type: 'string' }),
        defineField({ name: 'context', title: 'Context', type: 'string' }),
        defineField({
          name: 'keyThemes',
          title: 'Key Themes',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'education',
      title: 'Education Entries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institution', title: 'Institution', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'honors', title: 'Honors / Focus', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'affiliations',
      title: 'Affiliations & Organizations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'organization', title: 'Organization', type: 'string' },
            { name: 'years', title: 'Years', type: 'string' },
            { name: 'details', title: 'Details', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
