import { type SchemaTypeDefinition } from 'sanity'
import { artworkType } from './artwork'
import { publicArtType } from './publicArt'
import { exhibitionType } from './exhibition'
import { pressType } from './press'
import { aboutType } from './about'
import { contactType } from './contact'
import { cvType } from './cv'
import { homePageType } from './homePage'
import { recognitionType } from './recognition'
import { servicesType } from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artworkType,
    publicArtType,
    exhibitionType,
    pressType,
    aboutType,
    contactType,
    cvType,
    homePageType,
    recognitionType,
    servicesType,
  ],
}
