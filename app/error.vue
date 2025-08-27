<script setup lang="ts">
const error = useError()

function handleError() {
	clearError({
		redirect: '/'
	})
}
</script>

<template>
	<div v-if="error" class="error">
		<div class="container">
			<div class="error__wrapper">
				<h1 class="error__status-code">{{ error.statusCode }}</h1>

				<UIButton label="Go back home" @click="handleError" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.error {
	display: flex;
	align-items: center;

	&__wrapper {
		padding: 50px 0;

		@media screen and (min-width: $md) {
			padding: 160px 0;
		}
	}

	&__status-code {
		text-align: center;

		@include typo-headline;
	}
}
</style>
