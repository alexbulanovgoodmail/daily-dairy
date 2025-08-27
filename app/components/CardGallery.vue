<script setup lang="ts">
import type { Media } from '~/types/Media'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y } from 'swiper/modules'
import 'swiper/css'

interface Props {
	gallery: Media[]
}

defineProps<Props>()

const modules = [A11y]
</script>

<template>
	<div class="card-gallery">
		<Swiper :modules="modules" :speed="1200" :slides-per-view="1">
			<SwiperSlide v-for="image in gallery" :key="image.id">
				<div class="card-gallery__item">
					<div class="card-gallery__img-container">
						<a
							:href="image.url"
							data-fancybox="card-gallery"
							:data-caption="image.alt"
						>
							<img
								class="card-gallery__img"
								:src="image.url"
								width="372"
								height="384"
								:alt="image.alt"
							/>
						</a>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped lang="scss">
.card-gallery {
	height: 100%;

	&__item {
		padding: 40px 44px;

		@media screen and (min-width: $md) {
			padding: 60px 70px;
		}

		@media screen and (min-width: $xl) {
			padding: 80px 87px;
		}
	}

	&__img-container {
		position: relative;
		z-index: 10;
		width: 100%;

		&::after {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100%);
		}
	}

	&__img {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 100%;
		width: 100%;
		max-width: 586px;
		height: 100%;
		object-fit: contain;
		transform-origin: 50% 50%;
		transform: translate(-50%, -50%);
		filter: drop-shadow(0 4px 4px rgb(0 0 0 / 25%));
	}
}
</style>
