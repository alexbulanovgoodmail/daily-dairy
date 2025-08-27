<script setup lang="ts">
import type { ProductDetail } from '~/types/ProductDetail'
import { toHead } from 'vue-datocms'
import AppHero from '~/components/AppHero.vue'

interface ProductData {
	product: ProductDetail
}

useHead(() => {
	return {
		htmlAttrs: {
			class: 'secondary'
		}
	}
})

const route = useRoute()
const headers = useRequestHeaders()
const { data, error } = await useFetch<ProductData>(
	`/api/product/${route.params.slug}/`,
	{
		headers
	}
)

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

const { _seoMetaTags } = data.value.product

useHead(() => {
	return {
		htmlAttrs: {
			class: 'secondary'
		},
		...toHead(_seoMetaTags || [])
	}
})
</script>

<template>
	<main v-if="data">
		<AppHero />
		<CardInfo :product="data.product" />
		<!-- <RelatedGoods /> -->
	</main>
</template>
