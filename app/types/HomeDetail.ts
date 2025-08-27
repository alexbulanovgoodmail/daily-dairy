import type { SeoMetaTagType } from 'vue-datocms'
import type { ProductPreview } from './ProductPreview'

export type HomeDetail = {
	_seoMetaTags: SeoMetaTagType[]
	popular: ProductPreview[]
}
