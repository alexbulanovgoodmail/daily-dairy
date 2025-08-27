<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
	<div class="default-layout">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<style scoped lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	height: 100%;

	:deep(main) {
		flex: 1 1 auto;
	}
}
</style>
