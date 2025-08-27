import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getAbout(event?: H3Event) {
	const query = `
    {
      about {
        _seoMetaTags {
          content
          tag
          attributes
        }
        content {
          value
          blocks {
          	__typename,
            ... on ImageRecord {
              id
              image {
                url
                alt
              }
            }
          }
        }
      }
    }
  `

	return graphqlRequest<{ about: any }>(query, {}, event)
}
