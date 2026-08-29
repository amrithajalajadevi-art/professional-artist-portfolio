import { defineField, defineType } from 'sanity'

const cvEntryObject = {
  type: 'object',
  fields: [
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'title', title: 'Title / Position', type: 'string' },
    { name: 'subtitle', title: 'Subtitle / Institution', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'details', title: 'Details / Description', type: 'string' },
  ],
}

export const cvType = defineType({
  name: 'cv',
  title: 'Full Curriculum Vitae (CV)',
  type: 'document',
  fields: [
    defineField({
      name: 'pdfDownload',
      title: 'Downloadable PDF Version of CV',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [cvEntryObject],
    }),
    defineField({
      name: 'appointments',
      title: 'Appointments & Teaching Experience',
      type: 'array',
      of: [cvEntryObject],
    }),
    defineField({
      name: 'exhibitions',
      title: 'Exhibitions & Showcases',
      type: 'array',
      of: [cvEntryObject],
    }),
    defineField({
      name: 'commissions',
      title: 'Commissions & Public Works',
      type: 'array',
      of: [cvEntryObject],
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Honors',
      type: 'array',
      of: [cvEntryObject],
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [cvEntryObject],
    }),
  ],
})
