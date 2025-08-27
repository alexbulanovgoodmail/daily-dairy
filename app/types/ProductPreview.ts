import type { ID } from './ID'
import type { Media } from './Media'

export type ProductPreview = {
	id: ID
	slug: string
	title: string
	rating: number
	caption: string
	description: string
	preview: Media
}
