import type { SeoMetaTagType, StructuredTextDocument } from 'vue-datocms'
import type { ID } from './ID'
import type { Media } from './Media'

export type ProductDetail = {
	_seoMetaTags: SeoMetaTagType[]
	id: ID
	slug: string
	title: string
	rating: number
	caption: string
	content: StructuredTextDocument
	description: string
	gallery: Media[]
}
