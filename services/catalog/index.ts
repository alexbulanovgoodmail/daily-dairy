import { PER_PAGE, SORT_OPTIONS } from '~~/constants'
import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getCatalog(event: H3Event) {
	// const slug = getRouterParam(event, 'slug') /* для работы с категориями */
	const query = getQuery(event)
	const limit = Number(query.limit) || PER_PAGE
	const skip = Number(query.page) ? limit * (Number(query.page) - 1) : 0
	const sort = query.sort || SORT_OPTIONS[0]!.value

	const graphqlQuery = `
    {
			catalog {
				_seoMetaTags {
					tag
					content
					attributes
				}
			}
			_allProductsMeta {
				count
			}
			allProducts(skip: ${skip}, first: ${limit}, orderBy: ${sort}) {
				id
				slug
				title
				caption
				description
				preview {
					url
					alt
				}
				rating
			}
    }
  `

	return graphqlRequest<{ catalog: any }>(graphqlQuery, {}, event)
}
