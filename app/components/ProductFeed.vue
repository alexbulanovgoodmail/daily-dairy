<script setup lang="ts">
import type { ProductPreview } from '~/types/ProductPreview'
import ProductCard from '~/components/ProductCard.vue'

interface Props {
	products: ProductPreview[]
}

const { products } = defineProps<Props>()
</script>

<template>
	<div class="product-feed">
		<div class="container">
			<div class="product-feed__items">
				<div
					v-for="product in products"
					:key="product.id"
					class="product-feed__item"
				>
					<ProductCard :product="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.product-feed {
	&__items {
		border-top: 1px solid currentcolor;
		border-left: 1px solid currentcolor;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	&__item {
		border: 1px solid currentcolor;
		border-top: none;
		border-left: none;
	}
}
</style>
