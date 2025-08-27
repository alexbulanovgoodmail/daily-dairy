import type { Pinia } from 'pinia'
import { storeLayout } from '~/stores/storeLayout'

export default defineNuxtPlugin(async nuxtApp => {
	const pinia = nuxtApp.$pinia as Pinia
	const layout = storeLayout(pinia)

	await Promise.all([layout.fetch()])
})
