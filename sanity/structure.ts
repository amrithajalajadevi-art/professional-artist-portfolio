import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Studio')
    .items([
      // 1. Home Page Content (Singleton)
      S.listItem()
        .title('Home Page Content')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('singleton-home-page')
            .title('Home Page Content')
        ),

      // 2. About Page (Singleton)
      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
            .title('About Page')
        ),

      // 3. Artwork (Collection/List)
      S.documentTypeListItem('artwork').title('Artwork'),

      // 4. Printmaking (Collection/List)
      S.documentTypeListItem('printmaking').title('Printmaking'),

      // 5. Exhibition (Collection/List)
      S.documentTypeListItem('exhibition').title('Exhibition'),

      // 5. Public Art Project (Collection/List)
      S.documentTypeListItem('publicArt').title('Public Art Project'),

      // 6. Press & Media (Collection/List)
      S.documentTypeListItem('press').title('Press & Media'),

      // 7. Recognition & Award Item (Collection/List)
      S.documentTypeListItem('recognition').title('Recognition & Award Item'),

      // 8. Full Curriculum Vitae (CV) (Singleton)
      S.listItem()
        .title('Full Curriculum Vitae (CV)')
        .child(
          S.document()
            .schemaType('cv')
            .documentId('cv')
            .title('Full Curriculum Vitae (CV)')
        ),

      // 9. Contact Page & Studio Info (Singleton)
      S.listItem()
        .title('Contact Page & Studio Info')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
            .title('Contact Page & Studio Info')
        ),

      // Divider to separate main navigation pages from commercial services
      S.divider(),

      // 10. Commissions (Singleton)
      S.listItem()
        .title('Commissions')
        .child(
          S.document()
            .schemaType('commissionPage')
            .documentId('commissionPage')
            .title('Commissions Page')
        ),

      // 11. Workshops & Classes (Singleton)
      S.listItem()
        .title('Workshops & Classes')
        .child(
          S.document()
            .schemaType('workshopPage')
            .documentId('workshopPage')
            .title('Workshops & Classes Page')
        ),
    ])
