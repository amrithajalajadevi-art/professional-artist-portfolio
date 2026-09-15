import { defineField, defineType } from 'sanity'

export const drawingsType = defineType({
  name: 'drawings',
  title: 'Drawings & Paper Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional. Leave blank for untitled drawings.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => {
          if (doc?.title && typeof doc.title === 'string' && doc.title.trim()) {
            return doc.title.trim();
          }
          const parts = [
            'drawing',
            doc?.medium ? String(doc.medium).slice(0, 20) : '',
            doc?.year || '',
            doc?._id ? doc._id.replace(/^drafts\./, '').slice(-6) : '',
          ].filter(Boolean);
          return parts.length > 0 ? parts.join('-') : `untitled-drawing-${Date.now().toString(36)}`;
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required for URL routing. Click "Generate" to create one automatically.'),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2024 or 2023-2024',
    }),
    defineField({
      name: 'medium',
      title: 'Technique / Medium',
      type: 'string',
      description: 'e.g. Charcoal on paper, Ink on handmade paper, Graphite & tea wash',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 42 x 29.7 cm (A3) or 30 x 40 cm',
    }),
    defineField({
      name: 'location',
      title: 'Location / Collection',
      type: 'string',
      description: 'e.g. Studio Collection or Private Collection',
    }),
    defineField({
      name: 'image',
      title: 'Drawing Image',
      type: 'image',
      description: 'High-resolution image of the drawing or work on paper.',
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
      validation: (Rule) => Rule.required().error('Please upload an image for the drawing.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Curatorial notes, materials, or context regarding this piece.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this drawing appears in the gallery (lower numbers first).',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'medium',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title?.trim() || 'Untitled Drawing',
        subtitle: subtitle || 'Drawings & Paper Works',
        media,
      };
    },
  },
})
