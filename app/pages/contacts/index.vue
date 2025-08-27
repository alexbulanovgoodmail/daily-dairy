<script setup lang="ts">
import type { ContactDetail } from '~/types/ContactDetail'
import { toHead } from 'vue-datocms'
import AppHero from '~/components/AppHero.vue'
import ConcactStory from '~/components/ConcactStory.vue'

interface ContactData {
	contact: ContactDetail
}

const headers = useRequestHeaders()
const { data, error } = await useFetch<ContactData>('/api/contact/', {
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

const { _seoMetaTags } = data.value.contact

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
		<div class="container">
			<AppHero />
			<ConcactStory />
		</div>
	</main>
</template>
