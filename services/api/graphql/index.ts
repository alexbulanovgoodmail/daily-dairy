import { $fetch } from 'ofetch'
import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'

type Variables = Record<string, any>

export async function graphqlRequest<T>(
	query: string,
	variables: Variables = {},
	event?: H3Event
): Promise<T> {
	const runtimeConfig = event ? useRuntimeConfig(event) : useRuntimeConfig()

	const datoCmsUrl = runtimeConfig.public.datoCmsUrl as string
	const publishToken = runtimeConfig.public
		.datoCmsReadOnlyPublishToken as string

	const { data, errors } = await $fetch<{ data: T; errors?: any }>(datoCmsUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${publishToken}`
		},
		body: {
			query,
			variables
		}
	})

	if (errors) {
		throw new Error(JSON.stringify(errors))
	}

	return data
}
