<script setup lang="ts">
import { toHead } from 'vue-datocms'
import { ModalsContainer } from 'vue-final-modal'
import { storeLayout } from '~/stores/storeLayout'

const { site } = storeLayout()

useHead(() => {
	return {
		...toHead(site?.faviconMetaTags || [])
	}
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />

			<ModalsContainer />
		</NuxtLayout>
	</div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
