<script setup lang="ts">
import type { ProductDetail } from '~/types/ProductDetail'
import CardGallery from '~/components/CardGallery.vue'

interface Props {
	product: ProductDetail
}

defineProps<Props>()
</script>

<template>
	<div class="card-info">
		<div class="container">
			<div class="card-info__items">
				<div class="card-info__item">
					<CardGallery :gallery="product.gallery" />
				</div>
				<div class="card-info__item">
					<CardDetails :details="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card-info {
	&__items {
		border-top: 1px solid currentcolor;
		border-left: 1px solid currentcolor;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));

		@media screen and (min-width: $lg) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	&__item {
		border: 1px solid currentcolor;
		border-top: none;
		border-left: none;
		grid-column: span 1 / span 1;
	}
}
</style>
