<script setup lang="ts">
import type { ProductPreview } from '~/types/ProductPreview'
import ProductFeed from '~/components/ProductFeed.vue'

interface Props {
	products: ProductPreview[]
}

const { products } = defineProps<Props>()
</script>

<template>
	<div class="popular-feed">
		<ProductFeed :products="products" />

		<div class="container">
			<div class="popular-feed__more">
				<UIButton label="See more" to="/catalog/" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.popular-feed {
	margin: 0 0 50px;

	@media screen and (min-width: $md) {
		margin: 0 0 160px;
	}

	&__more {
		margin: 50px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__more & > * {
		width: 100%;

		@media screen and (min-width: $md) {
			width: initial;
		}
	}
}
</style>
