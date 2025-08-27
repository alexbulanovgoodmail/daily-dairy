<script setup lang="ts">
import type { ProductPreview } from '~/types/ProductPreview'
import ProductFeed from '~/components/ProductFeed.vue'
import UIPagination from '~/components/UIPagination.vue'

interface Props {
	products?: ProductPreview[]
	pageTotal: number
}

const { products = [] } = defineProps<Props>()
</script>

<template>
	<div class="catalog-feed">
		<ProductFeed :products="products" />
		<UIPagination v-if="pageTotal > 1" :page-total="pageTotal" />
	</div>
</template>

<style scoped lang="scss">
.catalog-feed {
	margin: 0 0 50px;

	@media screen and (min-width: $md) {
		margin: 0 0 160px;
	}
}
</style>
