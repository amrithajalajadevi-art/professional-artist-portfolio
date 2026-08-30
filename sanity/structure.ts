import type { StructureResolver } from 'sanity/structure'

// List of document type IDs to filter out from auto-generated list
const excludedTypeIds = ['commissionPage', 'workshopPage', 'services']

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Studio')
    .items([
      // Standalone Singleton for Commissions
      S.listItem()
        .title('Commissions')
        .child(
          S.document()
            .schemaType('commissionPage')
            .documentId('commissionPage')
            .title('Commissions Page')
        ),

      // Standalone Singleton for Workshops & Classes
      S.listItem()
        .title('Workshops & Classes')
        .child(
          S.document()
            .schemaType('workshopPage')
            .documentId('workshopPage')
            .title('Workshops & Classes Page')
        ),

      // Visual divider
      S.divider(),

      // Filter out standalone singletons and legacy combined services schema from default list
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedTypeIds.includes(listItem.getId() || '')
      ),
    ])
