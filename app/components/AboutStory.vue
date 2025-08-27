<script setup lang="ts">
import type { StructuredTextDocument } from 'vue-datocms'
import { StructuredText as DatocmsStructuredText } from 'vue-datocms'
import { useDatoRender } from '~/composables/useDatoRender'

interface Props {
	content: StructuredTextDocument
}

defineProps<Props>()

const { renderBlock } = useDatoRender()
</script>

<template>
	<div class="about-story">
		<div class="container">
			<div class="about-story__wrapper">
				<div class="about-story__blocks">
					<DatocmsStructuredText
						class="about-story__block user-content"
						:data="content"
						:render-block="renderBlock"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.about-story {
	margin: 50px 0;

	@media screen and (min-width: $md) {
		margin: 160px 0;
	}

	&__wrapper {
		margin: 0 auto;

		@media screen and (min-width: $lg) {
			max-width: calc(100% - 400px);
		}
	}

	&__block {
		position: relative;
		text-align: center;

		@include typo-h2;
	}

	:deep(p:not(:last-child)) {
		margin-bottom: 50px;

		@include user-content;
	}

	:deep(.img-container) {
		position: relative;
		z-index: 10;
		width: 100%;
		padding: 0 60px;

		&::after {
			content: '';
			display: block;
			width: 100%;
			padding-top: calc(100%);
		}

		@media screen and (min-width: $lg) {
			padding: 0 120px;
		}
	}

	:deep(.img-container:not(:first-child)) {
		margin-top: 50px;
	}

	:deep(.img-container:not(:last-child)) {
		margin-bottom: 50px;
	}

	:deep(.img-container img) {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 100%;
		width: 100%;
		height: 100%;
		object-fit: contain;
		transform-origin: 50% 50%;
		transform: translate(-50%, -50%);
		filter: drop-shadow(0 4px 4px rgb(0 0 0 / 25%));
	}

	:deep(.img-container:first-of-type) {
		@media screen and (min-width: $lg) {
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			width: 200px;
			height: 200px;
			padding: 0;
			transform: translate(-100%, -50%);
		}
	}

	:deep(.img-container:nth-of-type(2)) {
		@media screen and (min-width: $lg) {
			position: absolute;
			right: 0;
			bottom: 50%;
			z-index: -1;
			width: 200px;
			height: 200px;
			padding: 0;
			transform: translate(100%, 50%);
		}
	}

	:deep(.img-container:last-of-type) {
		@media screen and (min-width: $lg) {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: -1;
			width: 200px;
			height: 200px;
			padding: 0;
			transform: translate(-100%, 50%);
		}
	}
}
</style>
