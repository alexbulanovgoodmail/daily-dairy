import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getHome(event?: H3Event) {
	const graphqlQuery = `
    {
      home {
        title
        _seoMetaTags {
          tag
          content
          attributes
        }
        popular {
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
    }
  `

	return graphqlRequest<{ home: any }>(graphqlQuery, {}, event)
}
