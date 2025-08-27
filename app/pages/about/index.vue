<script setup lang="ts">
import type { AboutDetail } from '~/types/AboutDetail'
import { toHead } from 'vue-datocms'
import AboutStory from '~/components/AboutStory.vue'

interface AboutData {
	about: AboutDetail
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<AboutData>('/api/about/', {
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

const { _seoMetaTags, content } = data.value.about

useHead({
	htmlAttrs: {
		class: null // очистит старые классы
	}
})

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
	<main>
		<AboutStory :content="content" />
	</main>
</template>
