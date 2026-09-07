import { defineField, defineType } from 'sanity'

export const workshopPageType = defineType({
  name: 'workshopPage',
  title: 'Workshops & Classes Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Workshops Page Title',
      type: 'string',
      initialValue: 'ART CLASSES & WORKSHOPS',
    }),
    defineField({
      name: 'subtitle',
      title: 'Workshops Page Subtitle / Intro',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'upcomingWorkshops',
      title: 'Upcoming Workshops & Masterclasses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'workshopTitle', title: 'Workshop Title', type: 'string' },
            { name: 'date', title: 'Date / Duration', type: 'string' },
            { name: 'location', title: 'Location / Venue', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'isFullyBooked', title: 'Is Fully Booked?', type: 'boolean', initialValue: false },
            { name: 'registrationLink', title: 'Registration / Inquiry Link', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
