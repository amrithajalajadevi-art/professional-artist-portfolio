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
      title: 'Studio Location / Base',
      type: 'string',
      description: 'e.g. Leicester, United Kingdom & Kerala, India',
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
      name: 'profileImage',
      title: 'Profile / Studio Photograph',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
