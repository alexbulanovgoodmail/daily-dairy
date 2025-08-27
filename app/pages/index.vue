<script setup lang="ts">
import type { HomeDetail } from '~/types/HomeDetail'
import { toHead } from 'vue-datocms'
import AppHero from '~/components/AppHero.vue'
import PopularFeed from '~/components/PopularFeed.vue'

interface HomeData {
	home: HomeDetail
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<HomeData>('/api/home/', {
	headers
})

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

const { _seoMetaTags, popular } = data.value.home

useHead(() => {
	return {
		htmlAttrs: {
			class: 'primary'
		},
		...toHead(_seoMetaTags || [])
	}
})
</script>

<template>
	<main v-if="data">
		<AppHero />
		<PopularFeed :products="popular" />
	</main>
</template>
