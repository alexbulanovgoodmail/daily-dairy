import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getProduct(event: H3Event) {
	const slug = getRouterParam(event, 'slug')

	const graphqlQuery = `
    {
			product(filter: {slug: {eq: "${slug}"}}) {
				id
				slug
				title
				rating
				caption
				content {
					value
				}
				description
				gallery {
					id
					url
					alt
				}
				_seoMetaTags {
					tag
					content
					attributes
				}
			}
    }
  `

	return graphqlRequest<{ product: any }>(graphqlQuery, {}, event)
}
