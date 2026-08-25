import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Page & Studio Info',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'studioLocation',
      title: 'Studio Location(s)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryRepresentation',
      title: 'Gallery Representation & Commission Availability',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'X / Twitter URL',
      type: 'url',
    }),
    defineField({
      name: 'studioImageData',
      title: 'Featured Studio Image & Artwork',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'year', title: 'Year', type: 'string' }),
        defineField({ name: 'medium', title: 'Medium', type: 'string' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({
          name: 'image',
          title: 'Studio Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
})
