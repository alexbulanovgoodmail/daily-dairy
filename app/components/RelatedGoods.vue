<script setup lang="ts"></script>

<template>
	<section class="related-goods">
		<div class="container">
			<div class="related-goods__heading">
				<h2 class="related-goods__title">YOU MAY ALSO LIKE</h2>
			</div>

			<div class="related-goods__items">
				<div v-for="_ in 3" :key="_" class="related-goods__item">
					<ProductCard :index="_" :style="`--padding-image-offset: 30px`" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.related-goods {
	&__heading {
		margin: -1px 0;
		border: 1px solid currentcolor;
		padding: 30px 0;
	}

	&__title {
		text-align: center;

		@include typo-h4;
	}

	&__items {
		border-top: 1px solid currentcolor;
		border-left: 1px solid currentcolor;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));

		@media screen and (min-width: $md) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	&__item {
		border: 1px solid currentcolor;
		border-top: none;
		border-left: none;
	}
}
</style>
