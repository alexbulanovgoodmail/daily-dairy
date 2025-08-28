import { graphqlRequest } from '~~/services/api/graphql'
import type { H3Event } from 'h3'

export async function getLayout(event?: H3Event) {
	const graphqlQuery = `
    {
      _site {
        faviconMetaTags {
          tag
          content
          attributes
        }
      }
      layout {
        navigations {
          id
          label
          to
        }
      }
    }
  `

	return graphqlRequest<{ layout: any }>(graphqlQuery, {}, event)
}
