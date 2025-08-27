<script setup lang="ts">
import { PER_PAGE } from '~~/constants'
import type { CatalogDetail } from '~/types/CatalogDetail'
import type { ProductPreview } from '~/types/ProductPreview'
import { toHead } from 'vue-datocms'
import UILoader from '~/components/UILoader.vue'
import CatalogSort from '~/components/CatalogSort.vue'

interface CatalogData {
	catalog: CatalogDetail
	allProducts: ProductPreview[]
	_allProductsMeta: {
		count: number
	}
}

const route = useRoute()
const headers = useRequestHeaders()

const limit = route.query.limit ? Number(route.query.limit) : PER_PAGE
const computedQuery = computed(() => ({ ...route.query }))

const { data, error, execute, status } = useFetch<CatalogData>(
	() => `/api/catalog/${route.params.slug}/`,
	{
		headers,
		query: computedQuery,
		server: false, // только клиент
		immediate: false, // вручную
		lazy: true
	}
)

const loading = computed<boolean>(() => status.value === 'pending')
const products = computed<ProductPreview[]>(() => data.value?.allProducts || [])
const count = computed<number>(() => data.value?._allProductsMeta.count || 0)
const pageTotal = computed<number>(() => Math.ceil(count.value / limit))

onMounted(async () => {
	await execute()

	if (error.value) {
		throw createError({
			statusCode: error.value.statusCode,
			statusMessage: error.value.message,
			fatal: true
		})
	}

	if (!data.value) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Данные ещё не загружены'
		})
	}

	const { _seoMetaTags } = data.value.catalog

	useHead(() => ({
		htmlAttrs: { class: 'primary' },
		...toHead(_seoMetaTags || [])
	}))
})

watch(computedQuery, () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
	<main>
		<template v-if="data && !loading">
			<CatalogSort />
			<CatalogFeed :products="products" :page-total="pageTotal" />
		</template>
		<template v-else>
			<UILoader :size="96" :style="{ margin: '56px 0' }" />
		</template>
	</main>
</template>
