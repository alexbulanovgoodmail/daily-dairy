import { defineStore } from 'pinia'

import type { Anchor } from '~/types/Anchor'
import type { Layout } from '~/types/Layout'

interface LayoutState {
	_navigations: Anchor[]
}

export const storeLayout = defineStore('layout', {
	state: (): LayoutState => ({
		_navigations: []
	}),

	getters: {
		navigations: state => state._navigations
	},

	actions: {
		async fetch() {
			try {
				const response = await $fetch<{ layout: Layout }>('/api/layout/')
				this._navigations = response.layout.navigations
			} catch (error: any) {
				throw createError({
					statusCode: error.statusCode || 500,
					statusMessage: error.statusMessage || error.message,
					fatal: true
				})
			}
		}
	}
})
